package com.virtualtour.capture.ui.components

import android.opengl.GLSurfaceView
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.awaitEachGesture
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.gestures.calculatePan
import androidx.compose.foundation.gestures.calculateZoom
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowForward
import androidx.compose.material.icons.rounded.Explore
import androidx.compose.material.icons.rounded.GpsFixed
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import com.virtualtour.capture.R
import com.virtualtour.capture.data.HotspotLink
import com.virtualtour.capture.data.RoomNode
import com.virtualtour.capture.ui.theme.CobaltBlue
import com.virtualtour.capture.ui.theme.CobaltBlueLight
import com.virtualtour.capture.ui.theme.HudVoidBg
import com.virtualtour.capture.ui.theme.ViewerInk
import kotlin.math.hypot
import kotlin.math.roundToInt

@Composable
fun Viewer360(
    room: RoomNode,
    modifier: Modifier = Modifier,
    autoRotate: Boolean = false,
    fov: Float = 75f,
    placementMode: Boolean = false,
    showCompassHint: Boolean = true,
    onFovChange: ((Float) -> Unit)? = null,
    onYawChange: ((Float) -> Unit)? = null,
    onSelectHotspot: ((HotspotLink) -> Unit)? = null,
    onPlaceHotspot: ((Int, Int) -> Unit)? = null
) {
    val context = LocalContext.current
    val density = LocalDensity.current

    val currentOnYawChange by rememberUpdatedState(onYawChange)
    val currentOnFovChange by rememberUpdatedState(onFovChange)
    val currentOnSelectHotspot by rememberUpdatedState(onSelectHotspot)
    val currentOnPlaceHotspot by rememberUpdatedState(onPlaceHotspot)

    var projectedHotspots by remember { mutableStateOf<List<ProjectedHotspot>>(emptyList()) }
    var isTransitioning by remember { mutableStateOf(false) }
    var hasLoadedFirstRoom by remember { mutableStateOf(false) }

    val renderer = remember {
        PanoramaGlRenderer(
            context = context,
            onYawChanged = { yaw -> currentOnYawChange?.invoke(yaw) },
            onHotspotsProjected = { projected -> projectedHotspots = projected },
            onTextureLoaded = { isTransitioning = false }
        )
    }

    var glSurfaceView by remember { mutableStateOf<GLSurfaceView?>(null) }

    LaunchedEffect(autoRotate) {
        renderer.autoRotate = autoRotate
    }

    LaunchedEffect(placementMode) {
        renderer.placementMode = placementMode
    }

    LaunchedEffect(fov) {
        renderer.targetFov = fov.coerceIn(35f, 95f)
    }

    LaunchedEffect(room.hotspots) {
        renderer.hotspots = room.hotspots
    }

    val imageSource = room.panoHighResUrl.ifBlank { room.panoPreviewUrl }
    LaunchedEffect(room.id, imageSource) {
        if (hasLoadedFirstRoom) {
            isTransitioning = true
            renderer.targetFov = 58f
        } else {
            hasLoadedFirstRoom = true
        }
        renderer.loadPanoramaAsync(
            sourcePath = imageSource,
            resetYaw = room.initialYaw,
            resetFov = fov
        )
    }

    DisposableEffect(glSurfaceView) {
        glSurfaceView?.onResume()
        onDispose {
            glSurfaceView?.onPause()
        }
    }

    val veilAlpha by animateFloatAsState(
        targetValue = if (isTransitioning) 0.65f else 0f,
        animationSpec = tween(durationMillis = 260),
        label = "room_crossfade"
    )

    val beaconPulseTransition = rememberInfiniteTransition(label = "hotspot_pulse")
    val pulseScale by beaconPulseTransition.animateFloat(
        initialValue = 1f,
        targetValue = 1.32f,
        animationSpec = infiniteRepeatable(
            animation = tween(1400, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "pulse_scale"
    )
    val pulseAlpha by beaconPulseTransition.animateFloat(
        initialValue = 0.55f,
        targetValue = 0f,
        animationSpec = infiniteRepeatable(
            animation = tween(1400, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "pulse_alpha"
    )

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(HudVoidBg)
            .pointerInput(placementMode) {
                awaitEachGesture {
                    val down = awaitFirstDown(requireUnconsumed = false)
                    val downX = down.position.x
                    val downY = down.position.y
                    var totalMove = 0f
                    renderer.isDragging = true

                    do {
                        val event = awaitPointerEvent()
                        val zoomChange = event.calculateZoom()
                        val pan = event.calculatePan()

                        if (zoomChange != 1f && event.changes.size >= 2) {
                            val nextFov = (renderer.targetFov / zoomChange).coerceIn(35f, 95f)
                            renderer.targetFov = nextFov
                            currentOnFovChange?.invoke(nextFov)
                        } else if (pan.x != 0f || pan.y != 0f) {
                            totalMove += hypot(pan.x, pan.y)
                            val sensitivity = (renderer.currentFov / 75f) * 0.22f
                            renderer.targetYaw -= pan.x * sensitivity
                            renderer.targetPitch = (renderer.targetPitch + pan.y * sensitivity)
                                .coerceIn(-82f, 82f)
                        }

                        event.changes.forEach { it.consume() }
                    } while (event.changes.any { it.pressed })

                    renderer.isDragging = false

                    if (placementMode && totalMove < with(density) { 8.dp.toPx() }) {
                        renderer.raycastYawPitch(downX, downY)?.let { (yaw, pitch) ->
                            currentOnPlaceHotspot?.invoke(yaw, pitch)
                        }
                    }
                }
            }
    ) {
        AndroidView(
            modifier = Modifier.fillMaxSize(),
            factory = { ctx ->
                GLSurfaceView(ctx).apply {
                    setEGLContextClientVersion(2)
                    setRenderer(renderer)
                    renderMode = GLSurfaceView.RENDERMODE_CONTINUOUSLY
                    glSurfaceView = this
                }
            }
        )

        // Room transition cross-fade veil
        if (veilAlpha > 0.01f) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(HudVoidBg.copy(alpha = veilAlpha))
            )
        }

        // Placement mode crosshair banner
        AnimatedVisibility(
            visible = placementMode,
            enter = fadeIn(),
            exit = fadeOut(),
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 16.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                modifier = Modifier
                    .clip(RoundedCornerShape(50))
                    .background(CobaltBlue.copy(alpha = 0.94f))
                    .padding(horizontal = 16.dp, vertical = 8.dp)
            ) {
                Icon(
                    imageVector = Icons.Rounded.GpsFixed,
                    contentDescription = null,
                    tint = Color.White,
                    modifier = Modifier.size(16.dp)
                )
                Text(
                    text = stringResource(R.string.placement_banner),
                    style = MaterialTheme.typography.labelMedium,
                    color = Color.White
                )
            }
        }

        // 3D Projected Cobalt Blue Hotspot Beacons
        projectedHotspots.forEach { projected ->
            if (projected.visible) {
                val hs = projected.hotspot
                val halfSizePx = with(density) { 24.dp.toPx() }
                Box(
                    contentAlignment = Alignment.Center,
                    modifier = Modifier
                        .offset {
                            IntOffset(
                                x = (projected.xPx - halfSizePx).roundToInt(),
                                y = (projected.yPx - halfSizePx).roundToInt()
                            )
                        }
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        // Label pill above beacon
                        Text(
                            text = hs.label,
                            color = Color.White,
                            fontSize = 11.sp,
                            style = MaterialTheme.typography.labelMedium,
                            modifier = Modifier
                                .padding(bottom = 4.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(ViewerInk.copy(alpha = 0.88f))
                                .padding(horizontal = 10.dp, vertical = 4.dp)
                        )

                        // Pulsing Cobalt Blue Beacon (48dp touch target)
                        Box(
                            contentAlignment = Alignment.Center,
                            modifier = Modifier
                                .size(48.dp)
                                .testTag("hotspot_beacon_${hs.id}")
                                .semantics {
                                    contentDescription = "Go to ${hs.label}"
                                }
                                .clickable {
                                    currentOnSelectHotspot?.invoke(hs)
                                }
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(40.dp)
                                    .scale(pulseScale)
                                    .clip(CircleShape)
                                    .background(CobaltBlue.copy(alpha = pulseAlpha))
                            )
                            Box(
                                contentAlignment = Alignment.Center,
                                modifier = Modifier
                                    .size(40.dp)
                                    .clip(CircleShape)
                                    .background(CobaltBlue)
                                    .border(2.dp, Color.White, CircleShape)
                            ) {
                                Icon(
                                    imageVector = Icons.AutoMirrored.Rounded.ArrowForward,
                                    contentDescription = null,
                                    tint = Color.White,
                                    modifier = Modifier
                                        .size(20.dp)
                                        .rotate(-45f)
                                )
                            }
                        }
                    }
                }
            }
        }

        // Bottom-left compass orientation hint
        if (showCompassHint) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(6.dp),
                modifier = Modifier
                    .align(Alignment.BottomStart)
                    .padding(start = 16.dp, bottom = 16.dp)
                    .clip(RoundedCornerShape(50))
                    .background(ViewerInk.copy(alpha = 0.72f))
                    .padding(horizontal = 12.dp, vertical = 6.dp)
            ) {
                Icon(
                    imageVector = Icons.Rounded.Explore,
                    contentDescription = null,
                    tint = CobaltBlueLight,
                    modifier = Modifier.size(14.dp)
                )
                Text(
                    text = stringResource(R.string.drag_to_look),
                    style = MaterialTheme.typography.labelSmall,
                    color = Color(0xFFE2E8F0)
                )
            }
        }
    }
}
