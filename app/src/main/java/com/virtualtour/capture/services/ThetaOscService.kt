package com.virtualtour.capture.services

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.LinearGradient
import android.graphics.Paint
import android.graphics.Shader
import android.graphics.Typeface
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.withContext
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.intOrNull
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import okhttp3.ConnectionPool
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.File
import java.io.FileOutputStream
import java.net.ConnectException
import java.net.SocketTimeoutException
import java.net.URI
import java.net.UnknownHostException
import java.time.Instant
import java.util.concurrent.TimeUnit

enum class CaptureStep {
    CONNECTING,
    CAPTURING,
    PROCESSING,
    DOWNLOADING,
    WIPING,
    DONE
}

data class CaptureProgressEvent(
    val step: CaptureStep,
    val progress: Int,
    val message: String,
    val fileUrl: String? = null
)

data class CaptureOptions(
    val baseUrl: String = ThetaOscService.THETA_BASE_URL,
    val pollIntervalMs: Long = 500L,
    val timeoutMs: Long = 35_000L,
    val hdr: Boolean = true,
    val iso: Int? = null,
    val shutterSpeedLabel: String? = null
)

data class CaptureResult(
    val roomId: String,
    val localPath: String,
    val cameraFileUrl: String,
    val apiVersion: String,
    val wipedFromCamera: Boolean,
    val capturedAt: String
)

data class CameraProbeResult(
    val reachable: Boolean,
    val model: String,
    val firmwareVersion: String?,
    val apiVersion: String,
    val batteryPercent: Int?,
    val message: String
)

@Serializable
data class OscInfoResponse(
    val manufacturer: String? = null,
    val model: String? = null,
    val serialNumber: String? = null,
    val firmwareVersion: String? = null,
    val apiLevel: List<Int> = emptyList()
)

class ThetaOscService(
    context: Context,
    private val wifiManager: ThetaWifiManager
) {
    companion object {
        const val THETA_BASE_URL = "http://192.168.1.1"
        private const val PREFS_NAME = "mo360_prefs"
        private const val KEY_USE_MOCK_THETA = "mo360_use_mock_theta"
        private const val KEY_THETA_BASE_URL = "mo360_theta_base_url"
        private const val KEY_THETA_SSID = "mo360_theta_ssid"
        private const val KEY_THETA_PASS = "mo360_theta_pass"
        private val JSON_MEDIA_TYPE = "application/json; charset=utf-8".toMediaType()
    }

    private val appContext = context.applicationContext
    private val prefs = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val json = Json { ignoreUnknownKeys = true }

    fun getUseMockTheta(): Boolean = prefs.getBoolean(KEY_USE_MOCK_THETA, true)
    fun setUseMockTheta(enabled: Boolean) {
        prefs.edit().putBoolean(KEY_USE_MOCK_THETA, enabled).apply()
    }

    fun getBaseUrl(): String =
        prefs.getString(KEY_THETA_BASE_URL, THETA_BASE_URL)?.trim().orEmpty().ifEmpty { THETA_BASE_URL }

    fun setBaseUrl(url: String) {
        val cleaned = url.trim().trimEnd('/').ifEmpty { THETA_BASE_URL }
        prefs.edit().putString(KEY_THETA_BASE_URL, cleaned).apply()
    }

    fun getSavedSsid(): String = prefs.getString(KEY_THETA_SSID, "").orEmpty()
    fun setSavedSsid(ssid: String) {
        prefs.edit().putString(KEY_THETA_SSID, ssid.trim()).apply()
    }

    fun getSavedPassword(): String = prefs.getString(KEY_THETA_PASS, "").orEmpty()
    fun setSavedPassword(password: String) {
        prefs.edit().putString(KEY_THETA_PASS, password.trim()).apply()
    }

    private fun buildClient(baseUrl: String): OkHttpClient {
        val host = runCatching { URI(baseUrl).host }.getOrNull() ?: "192.168.1.1"
        // Ensure Android routes 192.168.1.1 over the camera Wi-Fi instead of Cellular ("No Internet" Wi-Fi fix)
        val boundNetwork = wifiManager.bindExistingWifiForCamera(host)

        val builder = OkHttpClient.Builder()
            .connectTimeout(12, TimeUnit.SECONDS)
            .readTimeout(60, TimeUnit.SECONDS)
            .writeTimeout(15, TimeUnit.SECONDS)
            .retryOnConnectionFailure(true)
            // Ricoh Theta X embedded HTTP server often closes keep-alive sockets between commands
            .connectionPool(ConnectionPool(0, 1, TimeUnit.MILLISECONDS))

        if (boundNetwork != null) {
            builder.socketFactory(boundNetwork.socketFactory)
        }
        return builder.build()
    }

    suspend fun probeCamera(baseUrl: String = getBaseUrl()): CameraProbeResult = withContext(Dispatchers.IO) {
        if (getUseMockTheta()) {
            return@withContext CameraProbeResult(
                reachable = true,
                model = "RICOH THETA X (Mock)",
                firmwareVersion = "2.50.1",
                apiVersion = "2.1",
                batteryPercent = null,
                message = "Mock THETA mode active"
            )
        }

        val normalizedUrl = baseUrl.trim().trimEnd('/').ifEmpty { THETA_BASE_URL }
        try {
            val client = buildClient(normalizedUrl)
            val (version, infoObj) = detectOscApiVersionWithInfo(client, normalizedUrl)
            val model = infoObj["model"]?.jsonPrimitive?.content ?: "RICOH THETA"
            val firmware = infoObj["firmwareVersion"]?.jsonPrimitive?.content
            val batteryPercent = queryBatteryLevel(client, normalizedUrl)

            CameraProbeResult(
                reachable = true,
                model = model,
                firmwareVersion = firmware,
                apiVersion = version,
                batteryPercent = batteryPercent,
                message = "Connected to $model (OSC v$version)"
            )
        } catch (e: Exception) {
            CameraProbeResult(
                reachable = false,
                model = "Ricoh Theta X",
                firmwareVersion = null,
                apiVersion = "2.1",
                batteryPercent = null,
                message = formatNetworkError(normalizedUrl, e)
            )
        }
    }

    suspend fun captureDownloadAndWipe(
        roomId: String,
        options: CaptureOptions = CaptureOptions(baseUrl = getBaseUrl()),
        onProgress: (CaptureProgressEvent) -> Unit
    ): CaptureResult = withContext(Dispatchers.IO) {
        if (getUseMockTheta()) {
            return@withContext runMockCaptureDownloadAndWipe(roomId, onProgress)
        }

        val baseUrl = options.baseUrl.trim().trimEnd('/').ifEmpty { THETA_BASE_URL }
        val client = buildClient(baseUrl)

        onProgress(
            CaptureProgressEvent(
                step = CaptureStep.CONNECTING,
                progress = 10,
                message = "Querying $baseUrl/osc/info over Wi-Fi…"
            )
        )

        val (version, _) = try {
            detectOscApiVersionWithInfo(client, baseUrl)
        } catch (e: Exception) {
            throw IllegalStateException(formatNetworkError(baseUrl, e), e)
        }

        var sessionId: String? = null
        if (version == "2.0") {
            val sessionRes = executeOscCommand(client, baseUrl, "camera.startSession")
            sessionId = sessionRes["results"]?.jsonObject?.get("sessionId")?.jsonPrimitive?.content
        }

        try {
            if (version == "2.1") {
                val optionValues = buildJsonObject {
                    put("captureMode", JsonPrimitive("image"))
                    if (options.iso != null) {
                        // Manual exposure program (1 = Manual)
                        put("exposureProgram", JsonPrimitive(1))
                        put("iso", JsonPrimitive(options.iso))
                        parseShutterSpeed(options.shutterSpeedLabel)?.let { s ->
                            put("shutterSpeed", JsonPrimitive(s))
                        }
                    } else {
                        // Normal auto program (2 = Normal)
                        put("exposureProgram", JsonPrimitive(2))
                        put("_filter", JsonPrimitive(if (options.hdr) "hdr" else "off"))
                    }
                }
                val setParams = buildJsonObject { put("options", optionValues) }
                runCatching {
                    executeOscCommand(client, baseUrl, "camera.setOptions", setParams)
                }
            }

            onProgress(
                CaptureProgressEvent(
                    step = CaptureStep.CAPTURING,
                    progress = 25,
                    message = "Executing camera.takePicture (OSC v$version)…"
                )
            )

            val takeParams = sessionId?.let { sid ->
                buildJsonObject { put("sessionId", JsonPrimitive(sid)) }
            }
            var captureRes = executeOscCommand(client, baseUrl, "camera.takePicture", takeParams)
            val state = captureRes["state"]?.jsonPrimitive?.content ?: ""

            if (state == "inProgress") {
                val commandId = captureRes["id"]?.jsonPrimitive?.content
                    ?: throw IllegalStateException("OSC camera.takePicture returned inProgress without command id.")
                onProgress(
                    CaptureProgressEvent(
                        step = CaptureStep.PROCESSING,
                        progress = 45,
                        message = "Stitching equirectangular panorama on THETA…"
                    )
                )
                captureRes = pollOscCommandStatus(
                    client = client,
                    baseUrl = baseUrl,
                    commandId = commandId,
                    pollIntervalMs = options.pollIntervalMs,
                    timeoutMs = options.timeoutMs
                )
            }

            val fileUrl = captureRes["results"]?.jsonObject?.get("fileUrl")?.jsonPrimitive?.content
                ?: throw IllegalStateException("THETA camera.takePicture completed without results.fileUrl.")

            onProgress(
                CaptureProgressEvent(
                    step = CaptureStep.DOWNLOADING,
                    progress = 70,
                    message = "Downloading equirectangular JPEG to device…",
                    fileUrl = fileUrl
                )
            )

            val localFile = downloadPanoramaToStorage(client, roomId, fileUrl)

            onProgress(
                CaptureProgressEvent(
                    step = CaptureStep.WIPING,
                    progress = 90,
                    message = "Deleting image from camera storage (camera.delete)…",
                    fileUrl = fileUrl
                )
            )

            val deleteParams = buildJsonObject {
                put("fileUrls", buildJsonArray { add(JsonPrimitive(fileUrl)) })
                sessionId?.let { put("sessionId", JsonPrimitive(it)) }
            }
            executeOscCommand(client, baseUrl, "camera.delete", deleteParams)

            val capturedAt = Instant.now().toString()
            onProgress(
                CaptureProgressEvent(
                    step = CaptureStep.DONE,
                    progress = 100,
                    message = "Capture, download, and camera wipe complete.",
                    fileUrl = fileUrl
                )
            )

            CaptureResult(
                roomId = roomId,
                localPath = localFile.absolutePath,
                cameraFileUrl = fileUrl,
                apiVersion = version,
                wipedFromCamera = true,
                capturedAt = capturedAt
            )
        } finally {
            if (version == "2.0" && sessionId != null) {
                runCatching {
                    executeOscCommand(
                        client,
                        baseUrl,
                        "camera.closeSession",
                        buildJsonObject { put("sessionId", JsonPrimitive(sessionId)) }
                    )
                }
            }
        }
    }

    private fun detectOscApiVersionWithInfo(
        client: OkHttpClient,
        baseUrl: String
    ): Pair<String, JsonObject> {
        val request = Request.Builder()
            .url("$baseUrl/osc/info")
            .get()
            .addHeader("Accept", "application/json")
            .addHeader("Connection", "close")
            .build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful) {
                throw IllegalStateException("THETA /osc/info returned HTTP ${response.code}")
            }
            val bodyStr = response.body?.string().orEmpty()
            val obj = json.parseToJsonElement(bodyStr).jsonObject
            val levels = obj["apiLevel"]?.jsonArray?.mapNotNull { it.jsonPrimitive.intOrNull }.orEmpty()
            val version = if (levels.contains(2)) "2.1" else "2.0"
            return version to obj
        }
    }

    private fun queryBatteryLevel(client: OkHttpClient, baseUrl: String): Int? {
        return runCatching {
            val request = Request.Builder()
                .url("$baseUrl/osc/state")
                .post("{}".toRequestBody(JSON_MEDIA_TYPE))
                .addHeader("Accept", "application/json")
                .addHeader("Connection", "close")
                .build()

            client.newCall(request).execute().use { res ->
                if (!res.isSuccessful) return null
                val raw = res.body?.string().orEmpty()
                val obj = json.parseToJsonElement(raw).jsonObject
                val lvl = obj["state"]?.jsonObject?.get("batteryLevel")?.jsonPrimitive?.doubleOrNull
                lvl?.let { (it * 100).toInt().coerceIn(0, 100) }
            }
        }.getOrNull()
    }

    private fun executeOscCommand(
        client: OkHttpClient,
        baseUrl: String,
        name: String,
        parameters: JsonObject? = null
    ): JsonObject {
        val bodyObj = buildJsonObject {
            put("name", JsonPrimitive(name))
            if (parameters != null && parameters.isNotEmpty()) {
                put("parameters", parameters)
            }
        }
        val request = Request.Builder()
            .url("$baseUrl/osc/commands/execute")
            .post(bodyObj.toString().toRequestBody(JSON_MEDIA_TYPE))
            .addHeader("Accept", "application/json")
            .addHeader("Connection", "close")
            .build()

        client.newCall(request).execute().use { response ->
            val raw = response.body?.string().orEmpty()
            val data = if (raw.isNotBlank()) json.parseToJsonElement(raw).jsonObject else JsonObject(emptyMap())
            val state = data["state"]?.jsonPrimitive?.content
            if (!response.isSuccessful || state == "error") {
                val errMsg = data["error"]?.jsonObject?.get("message")?.jsonPrimitive?.content
                    ?: "OSC command $name failed (HTTP ${response.code})"
                throw IllegalStateException(errMsg)
            }
            return data
        }
    }

    private suspend fun pollOscCommandStatus(
        client: OkHttpClient,
        baseUrl: String,
        commandId: String,
        pollIntervalMs: Long,
        timeoutMs: Long
    ): JsonObject {
        val start = System.currentTimeMillis()
        while (System.currentTimeMillis() - start < timeoutMs) {
            val payload = buildJsonObject { put("id", JsonPrimitive(commandId)) }
            val request = Request.Builder()
                .url("$baseUrl/osc/commands/status")
                .post(payload.toString().toRequestBody(JSON_MEDIA_TYPE))
                .addHeader("Accept", "application/json")
                .addHeader("Connection", "close")
                .build()

            client.newCall(request).execute().use { response ->
                if (!response.isSuccessful) {
                    throw IllegalStateException("OSC status poll failed (HTTP ${response.code})")
                }
                val raw = response.body?.string().orEmpty()
                val statusObj = json.parseToJsonElement(raw).jsonObject
                when (statusObj["state"]?.jsonPrimitive?.content) {
                    "done" -> return statusObj
                    "error" -> {
                        val msg = statusObj["error"]?.jsonObject?.get("message")?.jsonPrimitive?.content
                            ?: "Camera capture failed during processing."
                        throw IllegalStateException(msg)
                    }
                }
            }
            delay(pollIntervalMs)
        }
        throw IllegalStateException("Timed out waiting for THETA capture status after ${timeoutMs}ms.")
    }

    private fun downloadPanoramaToStorage(
        client: OkHttpClient,
        roomId: String,
        fileUrl: String
    ): File {
        val panosDir = File(appContext.filesDir, "panos").apply { mkdirs() }
        val outFile = File(panosDir, "${roomId}_${System.currentTimeMillis()}.jpg")

        val request = Request.Builder()
            .url(fileUrl)
            .get()
            .addHeader("Connection", "close")
            .build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful) {
                throw IllegalStateException("Failed to download panorama from $fileUrl (HTTP ${response.code})")
            }
            val inputStream = response.body?.byteStream()
                ?: throw IllegalStateException("Empty panorama response body from $fileUrl")
            FileOutputStream(outFile).use { output ->
                inputStream.copyTo(output)
            }
        }
        return outFile
    }

    private fun parseShutterSpeed(label: String?): Double? {
        if (label.isNullOrBlank()) return null
        val cleaned = label.removeSuffix("s").trim()
        return if (cleaned.contains("/")) {
            val parts = cleaned.split("/")
            val num = parts.getOrNull(0)?.toDoubleOrNull()
            val den = parts.getOrNull(1)?.toDoubleOrNull()
            if (num != null && den != null && den != 0.0) num / den else null
        } else {
            cleaned.toDoubleOrNull()
        }
    }

    private fun formatNetworkError(baseUrl: String, e: Exception): String {
        return when (e) {
            is ConnectException, is SocketTimeoutException, is UnknownHostException ->
                "Cannot reach $baseUrl over Wi-Fi. Connect to your RICOH THETA X Wi-Fi AP (e.g. THETAYR*.OSC) or tap Connect Wi-Fi."
            else -> e.message ?: "Failed to connect to $baseUrl"
        }
    }

    private suspend fun runMockCaptureDownloadAndWipe(
        roomId: String,
        onProgress: (CaptureProgressEvent) -> Unit
    ): CaptureResult {
        onProgress(
            CaptureProgressEvent(
                step = CaptureStep.CONNECTING,
                progress = 10,
                message = "Connecting to Mock RICOH THETA X (OSC v2.1)…"
            )
        )
        delay(250)

        onProgress(
            CaptureProgressEvent(
                step = CaptureStep.CAPTURING,
                progress = 30,
                message = "Triggering 360° dual-fisheye shutter…"
            )
        )
        delay(450)

        val mockCameraFileUrl = "http://192.168.1.1/files/100RICOH/R001_${roomId}.JPG"
        onProgress(
            CaptureProgressEvent(
                step = CaptureStep.PROCESSING,
                progress = 55,
                message = "Stitching equirectangular panorama…",
                fileUrl = mockCameraFileUrl
            )
        )
        delay(450)

        onProgress(
            CaptureProgressEvent(
                step = CaptureStep.DOWNLOADING,
                progress = 78,
                message = "Streaming high-res JPEG to local storage…",
                fileUrl = mockCameraFileUrl
            )
        )
        val localFile = generateMockEquirectangularPanoramaFile(roomId)
        delay(300)

        onProgress(
            CaptureProgressEvent(
                step = CaptureStep.WIPING,
                progress = 92,
                message = "Wiping camera storage (camera.delete)…",
                fileUrl = mockCameraFileUrl
            )
        )
        delay(200)

        val capturedAt = Instant.now().toString()
        onProgress(
            CaptureProgressEvent(
                step = CaptureStep.DONE,
                progress = 100,
                message = "Capture, download, and camera wipe complete.",
                fileUrl = mockCameraFileUrl
            )
        )

        return CaptureResult(
            roomId = roomId,
            localPath = localFile.absolutePath,
            cameraFileUrl = mockCameraFileUrl,
            apiVersion = "mock",
            wipedFromCamera = true,
            capturedAt = capturedAt
        )
    }

    private fun generateMockEquirectangularPanoramaFile(roomId: String): File {
        val width = 2048
        val height = 1024
        val bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
        val canvas = Canvas(bitmap)

        val ceilingPaint = Paint().apply {
            shader = LinearGradient(
                0f, 0f, 0f, height * 0.5f,
                Color.parseColor("#0F172A"),
                Color.parseColor("#1E293B"),
                Shader.TileMode.CLAMP
            )
        }
        canvas.drawRect(0f, 0f, width.toFloat(), height * 0.5f, ceilingPaint)

        val floorPaint = Paint().apply {
            shader = LinearGradient(
                0f, height * 0.5f, 0f, height.toFloat(),
                Color.parseColor("#334155"),
                Color.parseColor("#0B1120"),
                Shader.TileMode.CLAMP
            )
        }
        canvas.drawRect(0f, height * 0.5f, width.toFloat(), height.toFloat(), floorPaint)

        val horizonPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
            color = Color.parseColor("#C87D28")
            strokeWidth = 4f
        }
        canvas.drawLine(0f, height * 0.5f, width.toFloat(), height * 0.5f, horizonPaint)

        val gridPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
            color = Color.argb(72, 200, 125, 40)
            strokeWidth = 2f
        }
        for (i in 0..12) {
            val x = i * (width / 12f)
            canvas.drawLine(x, 0f, x, height.toFloat(), gridPaint)
        }
        for (j in 0..6) {
            val y = j * (height / 6f)
            canvas.drawLine(0f, y, width.toFloat(), y, gridPaint)
        }

        val labelPaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
            color = Color.parseColor("#F8FAFC")
            textSize = 36f
            typeface = Typeface.create(Typeface.SANS_SERIF, Typeface.BOLD)
            textAlign = Paint.Align.CENTER
        }
        val cardinals = listOf("N (0°)", "E (90°)", "S (180°)", "W (270°)")
        cardinals.forEachIndexed { idx, label ->
            val x = idx * (width / 4f) + (width / 8f)
            canvas.drawText(label, x, height * 0.5f - 24f, labelPaint)
        }

        val badgePaint = Paint(Paint.ANTI_ALIAS_FLAG).apply {
            color = Color.parseColor("#C87D28")
            textSize = 28f
            typeface = Typeface.create(Typeface.MONOSPACE, Typeface.BOLD)
            textAlign = Paint.Align.CENTER
        }
        canvas.drawText(
            "MO360 MOCK 360° • ROOM: $roomId",
            width / 2f,
            height * 0.5f + 54f,
            badgePaint
        )

        val panosDir = File(appContext.filesDir, "panos").apply { mkdirs() }
        val outFile = File(panosDir, "${roomId}_${System.currentTimeMillis()}.jpg")
        FileOutputStream(outFile).use { fos ->
            bitmap.compress(Bitmap.CompressFormat.JPEG, 90, fos)
        }
        bitmap.recycle()
        return outFile
    }
}
