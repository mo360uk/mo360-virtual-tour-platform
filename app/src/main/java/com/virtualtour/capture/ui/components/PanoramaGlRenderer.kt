package com.virtualtour.capture.ui.components

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.opengl.GLES20
import android.opengl.GLSurfaceView
import android.opengl.GLUtils
import android.opengl.Matrix
import android.os.Handler
import android.os.Looper
import com.virtualtour.capture.data.HotspotLink
import java.io.FileInputStream
import java.nio.ByteBuffer
import java.nio.ByteOrder
import java.nio.FloatBuffer
import java.nio.ShortBuffer
import java.util.concurrent.atomic.AtomicReference
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.opengles.GL10
import kotlin.math.abs
import kotlin.math.asin
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.sin

data class ProjectedHotspot(
    val hotspot: HotspotLink,
    val xPx: Float,
    val yPx: Float,
    val visible: Boolean
)

class PanoramaGlRenderer(
    private val context: Context,
    private val onYawChanged: (Float) -> Unit,
    private val onHotspotsProjected: (List<ProjectedHotspot>) -> Unit,
    private val onTextureLoaded: () -> Unit
) : GLSurfaceView.Renderer {

    private val mainHandler = Handler(Looper.getMainLooper())

    // Camera animation state (all updated/read on GL thread or via volatile/locks)
    @Volatile var targetYaw: Float = 0f
    @Volatile var targetPitch: Float = 0f
    @Volatile var targetFov: Float = 75f
    @Volatile var currentYaw: Float = 0f
    @Volatile var currentPitch: Float = 0f
    @Volatile var currentFov: Float = 75f
    @Volatile var isDragging: Boolean = false
    @Volatile var autoRotate: Boolean = false
    @Volatile var placementMode: Boolean = false
    @Volatile var hotspots: List<HotspotLink> = emptyList()

    private var lastEmittedYaw: Float = -999f
    private var viewWidth: Int = 1
    private var viewHeight: Int = 1

    private val viewMatrix = FloatArray(16)
    private val projMatrix = FloatArray(16)
    private val vpMatrix = FloatArray(16)
    private val invVpMatrix = FloatArray(16)
    private val vpLock = Any()

    // Texture queue
    private val pendingBitmap = AtomicReference<Bitmap?>(null)
    private var textureId: Int = 0
    private var hasTexture: Boolean = false

    // Sphere mesh
    private var programId: Int = 0
    private var positionHandle: Int = 0
    private var texCoordHandle: Int = 0
    private var mvpMatrixHandle: Int = 0
    private var samplerHandle: Int = 0

    private lateinit var vertexBuffer: FloatBuffer
    private lateinit var texBuffer: FloatBuffer
    private lateinit var indexBuffer: ShortBuffer
    private var indexCount: Int = 0

    init {
        buildSphereGeometry(radius = 500f, widthSegments = 64, heightSegments = 40)
    }

    fun snapCameraTo(yaw: Float, pitch: Float = 0f, fov: Float = 75f) {
        targetYaw = yaw
        currentYaw = yaw
        targetPitch = pitch
        currentPitch = pitch
        targetFov = fov.coerceIn(35f, 95f)
        lastEmittedYaw = ((yaw % 360f) + 360f) % 360f
        mainHandler.post { onYawChanged(lastEmittedYaw) }
    }

    fun loadPanoramaAsync(sourcePath: String, resetYaw: Float, resetFov: Float) {
        Thread {
            val bmp = decodeScaledBitmap(sourcePath)
            if (bmp != null) {
                val old = pendingBitmap.getAndSet(bmp)
                old?.recycle()
                snapCameraTo(yaw = resetYaw, pitch = 0f, fov = resetFov)
            }
            mainHandler.post { onTextureLoaded() }
        }.start()
    }

    fun raycastYawPitch(tapXPx: Float, tapYPx: Float): Pair<Int, Int>? {
        val w = viewWidth.coerceAtLeast(1)
        val h = viewHeight.coerceAtLeast(1)
        val ndcX = (tapXPx / w) * 2f - 1f
        val ndcY = -(tapYPx / h) * 2f + 1f

        val localVp = FloatArray(16)
        synchronized(vpLock) {
            System.arraycopy(vpMatrix, 0, localVp, 0, 16)
        }
        if (!Matrix.invertM(invVpMatrix, 0, localVp, 0)) return null

        val nearIn = floatArrayOf(ndcX, ndcY, -1f, 1f)
        val farIn = floatArrayOf(ndcX, ndcY, 1f, 1f)
        val nearOut = FloatArray(4)
        val farOut = FloatArray(4)

        Matrix.multiplyMV(nearOut, 0, invVpMatrix, 0, nearIn, 0)
        Matrix.multiplyMV(farOut, 0, invVpMatrix, 0, farIn, 0)

        if (abs(nearOut[3]) < 1e-6f || abs(farOut[3]) < 1e-6f) return null

        val dx = farOut[0] / farOut[3] - nearOut[0] / nearOut[3]
        val dy = farOut[1] / farOut[3] - nearOut[1] / nearOut[3]
        val dz = farOut[2] / farOut[3] - nearOut[2] / nearOut[3]
        val len = kotlin.math.sqrt(dx * dx + dy * dy + dz * dz).coerceAtLeast(1e-6f)

        val nx = dx / len
        val ny = (dy / len).coerceIn(-1f, 1f)
        val nz = dz / len

        val pitch = Math.toDegrees(asin(ny.toDouble())).toFloat()
        val yaw = Math.toDegrees(atan2(nx.toDouble(), nz.toDouble())).toFloat()
        return Pair(Math.round(yaw), Math.round(pitch))
    }

    override fun onSurfaceCreated(gl: GL10?, config: EGLConfig?) {
        GLES20.glClearColor(0.06f, 0.09f, 0.16f, 1f)
        GLES20.glDisable(GLES20.GL_CULL_FACE)
        GLES20.glDisable(GLES20.GL_DEPTH_TEST)

        val vertexShader = compileShader(
            GLES20.GL_VERTEX_SHADER,
            """
            uniform mat4 uMVPMatrix;
            attribute vec4 aPosition;
            attribute vec2 aTexCoord;
            varying vec2 vTexCoord;
            void main() {
                gl_Position = uMVPMatrix * aPosition;
                vTexCoord = aTexCoord;
            }
            """.trimIndent()
        )
        val fragmentShader = compileShader(
            GLES20.GL_FRAGMENT_SHADER,
            """
            precision mediump float;
            uniform sampler2D uTexture;
            varying vec2 vTexCoord;
            void main() {
                gl_FragColor = texture2D(uTexture, vTexCoord);
            }
            """.trimIndent()
        )

        programId = GLES20.glCreateProgram().also { prog ->
            GLES20.glAttachShader(prog, vertexShader)
            GLES20.glAttachShader(prog, fragmentShader)
            GLES20.glLinkProgram(prog)
        }

        positionHandle = GLES20.glGetAttribLocation(programId, "aPosition")
        texCoordHandle = GLES20.glGetAttribLocation(programId, "aTexCoord")
        mvpMatrixHandle = GLES20.glGetUniformLocation(programId, "uMVPMatrix")
        samplerHandle = GLES20.glGetUniformLocation(programId, "uTexture")

        val texIds = IntArray(1)
        GLES20.glGenTextures(1, texIds, 0)
        textureId = texIds[0]
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, textureId)
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MIN_FILTER, GLES20.GL_LINEAR)
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MAG_FILTER, GLES20.GL_LINEAR)
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_S, GLES20.GL_REPEAT)
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_T, GLES20.GL_CLAMP_TO_EDGE)
    }

    override fun onSurfaceChanged(gl: GL10?, width: Int, height: Int) {
        viewWidth = width.coerceAtLeast(1)
        viewHeight = height.coerceAtLeast(1)
        GLES20.glViewport(0, 0, viewWidth, viewHeight)
    }

    override fun onDrawFrame(gl: GL10?) {
        GLES20.glClear(GLES20.GL_COLOR_BUFFER_BIT)

        // Upload pending panorama bitmap if ready
        pendingBitmap.getAndSet(null)?.let { bmp ->
            GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, textureId)
            GLUtils.texImage2D(GLES20.GL_TEXTURE_2D, 0, bmp, 0)
            bmp.recycle()
            hasTexture = true
        }

        // Smooth camera loop
        if (autoRotate && !isDragging && !placementMode) {
            targetYaw += 0.08f
        }
        targetPitch = targetPitch.coerceIn(-82f, 82f)
        targetFov = targetFov.coerceIn(35f, 95f)

        currentYaw += (targetYaw - currentYaw) * 0.14f
        currentPitch += (targetPitch - currentPitch) * 0.14f
        currentFov += (targetFov - currentFov) * 0.16f

        val (lookX, lookY, lookZ) = sphericalDir(currentYaw, currentPitch, 1f)
        Matrix.setLookAtM(viewMatrix, 0, 0f, 0f, 0f, lookX, lookY, lookZ, 0f, 1f, 0f)
        val aspect = viewWidth.toFloat() / viewHeight.toFloat()
        Matrix.perspectiveM(projMatrix, 0, currentFov, aspect, 0.1f, 1100f)

        val localVp = FloatArray(16)
        Matrix.multiplyMM(localVp, 0, projMatrix, 0, viewMatrix, 0)
        synchronized(vpLock) {
            System.arraycopy(localVp, 0, vpMatrix, 0, 16)
        }

        if (hasTexture) {
            GLES20.glUseProgram(programId)
            GLES20.glUniformMatrix4fv(mvpMatrixHandle, 1, false, localVp, 0)

            GLES20.glActiveTexture(GLES20.GL_TEXTURE0)
            GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, textureId)
            GLES20.glUniform1i(samplerHandle, 0)

            vertexBuffer.position(0)
            GLES20.glEnableVertexAttribArray(positionHandle)
            GLES20.glVertexAttribPointer(positionHandle, 3, GLES20.GL_FLOAT, false, 0, vertexBuffer)

            texBuffer.position(0)
            GLES20.glEnableVertexAttribArray(texCoordHandle)
            GLES20.glVertexAttribPointer(texCoordHandle, 2, GLES20.GL_FLOAT, false, 0, texBuffer)

            indexBuffer.position(0)
            GLES20.glDrawElements(GLES20.GL_TRIANGLES, indexCount, GLES20.GL_UNSIGNED_SHORT, indexBuffer)

            GLES20.glDisableVertexAttribArray(positionHandle)
            GLES20.glDisableVertexAttribArray(texCoordHandle)
        }

        // Emit normalized yaw when changed meaningfully
        val normalizedYaw = ((currentYaw % 360f) + 360f) % 360f
        if (abs(normalizedYaw - lastEmittedYaw) > 0.35f) {
            lastEmittedYaw = normalizedYaw
            mainHandler.post { onYawChanged(normalizedYaw) }
        }

        // Project 3D hotspot beacons into 2D screen coordinates
        val currentHotspots = hotspots
        if (currentHotspots.isNotEmpty()) {
            val projected = ArrayList<ProjectedHotspot>(currentHotspots.size)
            val worldVec = FloatArray(4)
            val clipVec = FloatArray(4)

            for (hs in currentHotspots) {
                val (hx, hy, hz) = sphericalDir(hs.yaw, hs.pitch, 1f)
                val dot = lookX * hx + lookY * hy + lookZ * hz
                if (dot <= 0.12f) {
                    projected.add(ProjectedHotspot(hs, 0f, 0f, false))
                    continue
                }

                worldVec[0] = hx * 450f
                worldVec[1] = hy * 450f
                worldVec[2] = hz * 450f
                worldVec[3] = 1f
                Matrix.multiplyMV(clipVec, 0, localVp, 0, worldVec, 0)

                if (clipVec[3] <= 0.001f) {
                    projected.add(ProjectedHotspot(hs, 0f, 0f, false))
                    continue
                }
                val ndcX = clipVec[0] / clipVec[3]
                val ndcY = clipVec[1] / clipVec[3]
                val ndcZ = clipVec[2] / clipVec[3]

                if (ndcZ >= 1f) {
                    projected.add(ProjectedHotspot(hs, 0f, 0f, false))
                    continue
                }

                val xPx = (ndcX * 0.5f + 0.5f) * viewWidth
                val yPx = (-ndcY * 0.5f + 0.5f) * viewHeight
                projected.add(ProjectedHotspot(hs, xPx, yPx, true))
            }
            mainHandler.post { onHotspotsProjected(projected) }
        } else {
            mainHandler.post { onHotspotsProjected(emptyList()) }
        }
    }

    private fun sphericalDir(yawDeg: Float, pitchDeg: Float, radius: Float): Triple<Float, Float, Float> {
        val phi = Math.toRadians(90.0 - pitchDeg.toDouble())
        val theta = Math.toRadians(yawDeg.toDouble())
        val x = (radius * sin(phi) * sin(theta)).toFloat()
        val y = (radius * cos(phi)).toFloat()
        val z = (radius * sin(phi) * cos(theta)).toFloat()
        return Triple(x, y, z)
    }

    private fun buildSphereGeometry(radius: Float, widthSegments: Int, heightSegments: Int) {
        val vertexCount = (widthSegments + 1) * (heightSegments + 1)
        val vertices = FloatArray(vertexCount * 3)
        val texCoords = FloatArray(vertexCount * 2)

        var vIdx = 0
        var tIdx = 0
        for (iy in 0..heightSegments) {
            val v = iy.toFloat() / heightSegments.toFloat()
            val theta = v * Math.PI
            val sinTheta = sin(theta).toFloat()
            val cosTheta = cos(theta).toFloat()

            for (ix in 0..widthSegments) {
                val u = ix.toFloat() / widthSegments.toFloat()
                val phi = u * 2.0 * Math.PI
                val cosPhi = cos(phi).toFloat()
                val sinPhi = sin(phi).toFloat()

                // Matches Three.js SphereGeometry scaled by (-1, 1, 1)
                vertices[vIdx++] = radius * cosPhi * sinTheta
                vertices[vIdx++] = radius * cosTheta
                vertices[vIdx++] = radius * sinPhi * sinTheta

                texCoords[tIdx++] = u
                texCoords[tIdx++] = v
            }
        }

        val indices = ShortArray(widthSegments * heightSegments * 6)
        var iIdx = 0
        for (iy in 0 until heightSegments) {
            for (ix in 0 until widthSegments) {
                val a = iy * (widthSegments + 1) + ix
                val b = a + 1
                val c = (iy + 1) * (widthSegments + 1) + ix
                val d = c + 1

                indices[iIdx++] = a.toShort()
                indices[iIdx++] = c.toShort()
                indices[iIdx++] = b.toShort()

                indices[iIdx++] = b.toShort()
                indices[iIdx++] = c.toShort()
                indices[iIdx++] = d.toShort()
            }
        }
        indexCount = indices.size

        vertexBuffer = ByteBuffer.allocateDirect(vertices.size * 4)
            .order(ByteOrder.nativeOrder())
            .asFloatBuffer()
            .apply { put(vertices); position(0) }

        texBuffer = ByteBuffer.allocateDirect(texCoords.size * 4)
            .order(ByteOrder.nativeOrder())
            .asFloatBuffer()
            .apply { put(texCoords); position(0) }

        indexBuffer = ByteBuffer.allocateDirect(indices.size * 2)
            .order(ByteOrder.nativeOrder())
            .asShortBuffer()
            .apply { put(indices); position(0) }
    }

    private fun decodeScaledBitmap(sourcePath: String): Bitmap? {
        return runCatching {
            val opts = BitmapFactory.Options().apply { inJustDecodeBounds = true }
            openInputStream(sourcePath)?.use { BitmapFactory.decodeStream(it, null, opts) }

            var sampleSize = 1
            val maxDim = 4096
            while (opts.outWidth / sampleSize > maxDim || opts.outHeight / sampleSize > maxDim) {
                sampleSize *= 2
            }

            val decodeOpts = BitmapFactory.Options().apply {
                inSampleSize = sampleSize
                inPreferredConfig = Bitmap.Config.ARGB_8888
            }
            openInputStream(sourcePath)?.use { BitmapFactory.decodeStream(it, null, decodeOpts) }
        }.getOrNull()
    }

    private fun openInputStream(sourcePath: String) =
        if (sourcePath.startsWith("asset://")) {
            context.assets.open(sourcePath.removePrefix("asset://"))
        } else {
            FileInputStream(sourcePath)
        }

    private fun compileShader(type: Int, source: String): Int {
        val shader = GLES20.glCreateShader(type)
        GLES20.glShaderSource(shader, source)
        GLES20.glCompileShader(shader)
        return shader
    }
}
