package com.virtualtour.capture.ui.screens

import androidx.activity.compose.BackHandler
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.AutoAwesome
import androidx.compose.material.icons.rounded.BatteryChargingFull
import androidx.compose.material.icons.rounded.CameraAlt
import androidx.compose.material.icons.rounded.CellTower
import androidx.compose.material.icons.rounded.CheckCircle
import androidx.compose.material.icons.rounded.GpsFixed
import androidx.compose.material.icons.rounded.KeyboardArrowDown
import androidx.compose.material.icons.rounded.SettingsEthernet
import androidx.compose.material.icons.rounded.Storage
import androidx.compose.material.icons.rounded.Visibility
import androidx.compose.material.icons.rounded.Wifi
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.virtualtour.capture.R
import com.virtualtour.capture.services.CaptureStep
import com.virtualtour.capture.services.QueueStatus
import com.virtualtour.capture.services.ThetaWifiStatus
import com.virtualtour.capture.ui.ExposurePreset
import com.virtualtour.capture.ui.MainUiState
import com.virtualtour.capture.ui.components.Viewer360
import com.virtualtour.capture.ui.theme.BrandAmber
import com.virtualtour.capture.ui.theme.BrandEmerald
import com.virtualtour.capture.ui.theme.BrandError
import com.virtualtour.capture.ui.theme.CobaltBlue
import com.virtualtour.capture.ui.theme.CobaltBlueLight
import com.virtualtour.capture.ui.theme.HudBorder
import com.virtualtour.capture.ui.theme.HudBorderStrong
import com.virtualtour.capture.ui.theme.HudCardBg
import com.virtualtour.capture.ui.theme.HudSurface
import com.virtualtour.capture.ui.theme.HudTextPrimary
import com.virtualtour.capture.ui.theme.HudTextSecondary
import com.virtualtour.capture.ui.theme.HudVoidBg

private data class ProgressPillSpec(
    val id: String,
    val label: String,
    val steps: Set<CaptureStep>
)

private val PROGRESS_PILLS = listOf(
    ProgressPillSpec("shutter", "Triggering Shutter", setOf(CaptureStep.CONNECTING, CaptureStep.CAPTURING)),
    ProgressPillSpec("stitch", "Internal Stitching", setOf(CaptureStep.PROCESSING)),
    ProgressPillSpec("download", "Downloading to Device", setOf(CaptureStep.DOWNLOADING)),
    ProgressPillSpec("wipe", "Wiping Theta Memory", setOf(CaptureStep.WIPING)),
    ProgressPillSpec("ready", "Ready", setOf(CaptureStep.DONE))
)

@Composable
fun CaptureHudScreen(
    uiState: MainUiState,
    wifiStatus: ThetaWifiStatus,
    queueStatus: QueueStatus,
    widthSizeClass: WindowWidthSizeClass,
    onSelectCaptureRoom: (String) -> Unit,
    onSelectTargetHotspotRoom: (String) -> Unit,
    onToggleMockTheta: () -> Unit,
    onSetExposurePreset: (ExposurePreset) -> Unit,
    onSetManualIso: (Int) -> Unit,
    onSetManualShutter: (String) -> Unit,
    onCaptureRoom: () -> Unit,
    onTogglePlacementMode: () -> Unit,
    onPlaceHotspot: (Int, Int) -> Unit,
    onConnectWifiAndProbe: (String, String, String) -> Unit,
    onBindExistingWifiAndProbe: () -> Unit,
    onDisconnectWifi: () -> Unit,
    onSwitchToViewer: () -> Unit
) {
    BackHandler {
        onSwitchToViewer()
    }

    var showWifiDialog by remember { mutableStateOf(false) }
    val activeRoom = uiState.activeCaptureRoom
    val isWide = widthSizeClass != WindowWidthSizeClass.Compact

    val pulseTransition = rememberInfiniteTransition(label = "ap_pulse")
    val apDotAlpha by pulseTransition.animateFloat(
        initialValue = 0.45f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            animation = tween(900),
            repeatMode = RepeatMode.Reverse
        ),
        label = "ap_dot_alpha"
    )

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(HudVoidBg)
            .windowInsetsPadding(WindowInsets.safeDrawing)
    ) {
        // Top Telemetry Bar
        Column(
            verticalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier
                .fillMaxWidth()
                .background(HudSurface)
                .padding(horizontal = 12.dp, vertical = 10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
                modifier = Modifier.fillMaxWidth()
            ) {
                // Camera AP Status Pill (tappable to open Ricoh Theta X Wi-Fi & AP settings)
                val probe = uiState.cameraProbe
                val cameraLabel = probe?.model ?: "Ricoh Theta X"
                val isLinked = uiState.mockTheta || (probe?.reachable == true) || wifiStatus.connected
                val statusColor = if (isLinked) BrandEmerald else BrandAmber

                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    modifier = Modifier
                        .weight(1f, fill = false)
                        .clip(CircleShape)
                        .background(statusColor.copy(alpha = 0.12f))
                        .border(1.dp, statusColor.copy(alpha = 0.35f), CircleShape)
                        .testTag("theta_wifi_status_pill")
                        .clickable { showWifiDialog = true }
                        .padding(horizontal = 12.dp, vertical = 7.dp)
                ) {
                    Box(
                        modifier = Modifier
                            .size(8.dp)
                            .alpha(apDotAlpha)
                            .clip(CircleShape)
                            .background(statusColor)
                    )
                    Icon(
                        imageVector = Icons.Rounded.Wifi,
                        contentDescription = null,
                        tint = statusColor,
                        modifier = Modifier.size(15.dp)
                    )
                    Text(
                        text = uiState.thetaBaseUrl,
                        style = MaterialTheme.typography.labelSmall,
                        color = if (isLinked) Color(0xFF6EE7B7) else Color(0xFFFCD34D),
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    Text(
                        text = "• $cameraLabel",
                        style = MaterialTheme.typography.bodySmall.copy(fontSize = 11.sp),
                        color = HudTextSecondary,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                }

                Spacer(Modifier.width(8.dp))

                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    // USE_MOCK_THETA Toggle
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(6.dp),
                        modifier = Modifier
                            .heightIn(min = 38.dp)
                            .clip(RoundedCornerShape(10.dp))
                            .background(
                                if (uiState.mockTheta) BrandAmber.copy(alpha = 0.16f)
                                else BrandEmerald.copy(alpha = 0.16f)
                            )
                            .border(
                                1.dp,
                                if (uiState.mockTheta) BrandAmber.copy(alpha = 0.4f)
                                else BrandEmerald.copy(alpha = 0.4f),
                                RoundedCornerShape(10.dp)
                            )
                            .testTag("mock_theta_toggle")
                            .clickable { onToggleMockTheta() }
                            .padding(horizontal = 10.dp, vertical = 6.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .size(7.dp)
                                .clip(CircleShape)
                                .background(if (uiState.mockTheta) BrandAmber else BrandEmerald)
                        )
                        Text(
                            text = if (isWide) {
                                "USE_MOCK_THETA: ${if (uiState.mockTheta) "ON" else "OFF"}"
                            } else {
                                "MOCK: ${if (uiState.mockTheta) "ON" else "OFF"}"
                            },
                            style = MaterialTheme.typography.labelSmall,
                            fontWeight = FontWeight.SemiBold,
                            color = if (uiState.mockTheta) Color(0xFFFCD34D) else Color(0xFF6EE7B7)
                        )
                    }

                    // Preview Tour Button
                    OutlinedButton(
                        onClick = onSwitchToViewer,
                        shape = RoundedCornerShape(10.dp),
                        contentPadding = PaddingValues(horizontal = 10.dp, vertical = 6.dp),
                        border = BorderStroke(1.dp, HudBorderStrong),
                        colors = ButtonDefaults.outlinedButtonColors(
                            containerColor = HudCardBg,
                            contentColor = HudTextPrimary
                        ),
                        modifier = Modifier
                            .heightIn(min = 38.dp)
                            .testTag("preview_tour_button")
                    ) {
                        Icon(
                            imageVector = Icons.Rounded.Visibility,
                            contentDescription = null,
                            tint = CobaltBlueLight,
                            modifier = Modifier.size(15.dp)
                        )
                        Spacer(Modifier.width(5.dp))
                        Text(
                            text = stringResource(R.string.preview_tour),
                            style = MaterialTheme.typography.labelMedium
                        )
                    }
                }
            }

            // Telemetry Chips Row
            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .fillMaxWidth()
                    .horizontalScroll(rememberScrollState())
            ) {
                val batteryDisplay = uiState.cameraProbe?.batteryPercent ?: uiState.deviceBatteryPercent
                TelemetryChip(
                    icon = Icons.Rounded.BatteryChargingFull,
                    iconTint = BrandEmerald,
                    text = "$batteryDisplay%"
                )
                TelemetryChip(
                    icon = Icons.Rounded.Storage,
                    iconTint = CobaltBlueLight,
                    text = "${uiState.freeStorageGb} GB free"
                )
                TelemetryChip(
                    icon = Icons.Rounded.CellTower,
                    iconTint = BrandAmber,
                    text = "Sync: ${queueStatus.pendingCount} pending"
                )
                if (!uiState.mockTheta) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(5.dp),
                        modifier = Modifier
                            .clip(RoundedCornerShape(8.dp))
                            .background(CobaltBlue.copy(alpha = 0.16f))
                            .border(1.dp, CobaltBlue.copy(alpha = 0.4f), RoundedCornerShape(8.dp))
                            .testTag("theta_wifi_connect_chip")
                            .clickable { showWifiDialog = true }
                            .padding(horizontal = 10.dp, vertical = 5.dp)
                    ) {
                        Icon(
                            imageVector = Icons.Rounded.SettingsEthernet,
                            contentDescription = null,
                            tint = CobaltBlueLight,
                            modifier = Modifier.size(13.dp)
                        )
                        Text(
                            text = if (wifiStatus.boundToNetwork) "Wi-Fi Bound" else "Connect Theta X Wi-Fi",
                            style = MaterialTheme.typography.labelSmall,
                            color = Color(0xFF93C5FD)
                        )
                    }
                }
            }
        }

        HorizontalDivider(color = HudBorder, thickness = 1.dp)

        // Main Split Body: On-Device 360 Previewer + Field Controller
        if (isWide) {
            Row(modifier = Modifier.weight(1f).fillMaxWidth()) {
                Preview360Pane(
                    uiState = uiState,
                    onPlaceHotspot = onPlaceHotspot,
                    onSelectRoom = onSelectCaptureRoom,
                    modifier = Modifier.weight(1f).fillMaxHeight()
                )
                FieldControlDeck(
                    uiState = uiState,
                    onSelectCaptureRoom = onSelectCaptureRoom,
                    onSelectTargetHotspotRoom = onSelectTargetHotspotRoom,
                    onSetExposurePreset = onSetExposurePreset,
                    onSetManualIso = onSetManualIso,
                    onSetManualShutter = onSetManualShutter,
                    onCaptureRoom = onCaptureRoom,
                    onTogglePlacementMode = onTogglePlacementMode,
                    modifier = Modifier
                        .width(380.dp)
                        .fillMaxHeight()
                        .background(HudSurface)
                        .border(1.dp, HudBorder)
                )
            }
        } else {
            Column(modifier = Modifier.weight(1f).fillMaxWidth()) {
                Preview360Pane(
                    uiState = uiState,
                    onPlaceHotspot = onPlaceHotspot,
                    onSelectRoom = onSelectCaptureRoom,
                    modifier = Modifier
                        .fillMaxWidth()
                        .weight(0.42f)
                        .heightIn(min = 210.dp)
                )
                HorizontalDivider(color = HudBorder, thickness = 1.dp)
                FieldControlDeck(
                    uiState = uiState,
                    onSelectCaptureRoom = onSelectCaptureRoom,
                    onSelectTargetHotspotRoom = onSelectTargetHotspotRoom,
                    onSetExposurePreset = onSetExposurePreset,
                    onSetManualIso = onSetManualIso,
                    onSetManualShutter = onSetManualShutter,
                    onCaptureRoom = onCaptureRoom,
                    onTogglePlacementMode = onTogglePlacementMode,
                    modifier = Modifier
                        .fillMaxWidth()
                        .weight(0.58f)
                        .background(HudSurface)
                )
            }
        }
    }

    if (showWifiDialog) {
        ThetaWifiSettingsDialog(
            initialSsid = uiState.thetaSsid,
            initialPassword = uiState.thetaPassword,
            initialBaseUrl = uiState.thetaBaseUrl,
            wifiStatus = wifiStatus,
            isProbing = uiState.isProbingCamera,
            probeMessage = uiState.cameraProbe?.message,
            onDismiss = { showWifiDialog = false },
            onBindActiveWifi = onBindExistingWifiAndProbe,
            onConnectWifi = onConnectWifiAndProbe,
            onDisconnectWifi = onDisconnectWifi
        )
    }
}

@Composable
private fun Preview360Pane(
    uiState: MainUiState,
    onPlaceHotspot: (Int, Int) -> Unit,
    onSelectRoom: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    val activeRoom = uiState.activeCaptureRoom
    Box(modifier = modifier.background(Color.Black)) {
        Viewer360(
            room = activeRoom,
            placementMode = uiState.placementMode,
            showCompassHint = false,
            onPlaceHotspot = onPlaceHotspot,
            onSelectHotspot = { hs -> onSelectRoom(hs.targetRoomId) }
        )

        // Room Badge Overlay
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier
                .align(Alignment.TopStart)
                .padding(12.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(HudVoidBg.copy(alpha = 0.82f))
                .border(1.dp, HudBorderStrong.copy(alpha = 0.7f), RoundedCornerShape(12.dp))
                .padding(horizontal = 12.dp, vertical = 7.dp)
        ) {
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .clip(CircleShape)
                    .background(CobaltBlue)
            )
            Text(
                text = activeRoom.name,
                style = MaterialTheme.typography.labelMedium,
                color = Color.White
            )
            if (!activeRoom.capturedAt.isNullOrBlank()) {
                Text(
                    text = "CAPTURED",
                    style = MaterialTheme.typography.labelSmall.copy(fontSize = 10.sp),
                    color = BrandEmerald
                )
            }
        }
    }
}

@Composable
private fun FieldControlDeck(
    uiState: MainUiState,
    onSelectCaptureRoom: (String) -> Unit,
    onSelectTargetHotspotRoom: (String) -> Unit,
    onSetExposurePreset: (ExposurePreset) -> Unit,
    onSetManualIso: (Int) -> Unit,
    onSetManualShutter: (String) -> Unit,
    onCaptureRoom: () -> Unit,
    onTogglePlacementMode: () -> Unit,
    modifier: Modifier = Modifier
) {
    val activeRoom = uiState.activeCaptureRoom
    var isoDropdownOpen by remember { mutableStateOf(false) }
    var shutterDropdownOpen by remember { mutableStateOf(false) }
    var hotspotTargetDropdownOpen by remember { mutableStateOf(false) }

    val activeStepIndex = remember(uiState.captureEvent) {
        val step = uiState.captureEvent?.step ?: return@remember -1
        PROGRESS_PILLS.indexOfFirst { step in it.steps }
    }

    Column(
        verticalArrangement = Arrangement.spacedBy(14.dp),
        modifier = modifier
            .verticalScroll(rememberScrollState())
            .padding(16.dp)
    ) {
        // 1. Active Capture Room Selector
        Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            Text(
                text = stringResource(R.string.active_capture_room).uppercase(),
                style = MaterialTheme.typography.labelSmall,
                fontWeight = FontWeight.Bold,
                color = HudTextSecondary
            )
            Row(
                horizontalArrangement = Arrangement.spacedBy(6.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                uiState.tour.rooms.forEach { room ->
                    val selected = room.id == activeRoom.id
                    Box(
                        contentAlignment = Alignment.Center,
                        modifier = Modifier
                            .weight(1f)
                            .heightIn(min = 44.dp)
                            .clip(RoundedCornerShape(12.dp))
                            .background(if (selected) CobaltBlue.copy(alpha = 0.22f) else HudCardBg)
                            .border(
                                1.dp,
                                if (selected) CobaltBlue else HudBorder,
                                RoundedCornerShape(12.dp)
                            )
                            .testTag("capture_room_tab_${room.id}")
                            .clickable { onSelectCaptureRoom(room.id) }
                            .padding(horizontal = 8.dp, vertical = 10.dp)
                    ) {
                        Text(
                            text = room.name,
                            style = MaterialTheme.typography.labelMedium,
                            color = if (selected) Color.White else HudTextSecondary,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis
                        )
                    }
                }
            }
        }

        // 2. Exposure Preset Selector
        Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                Icon(
                    imageVector = Icons.Rounded.AutoAwesome,
                    contentDescription = null,
                    tint = BrandAmber,
                    modifier = Modifier.size(14.dp)
                )
                Text(
                    text = stringResource(R.string.exposure_preset).uppercase(),
                    style = MaterialTheme.typography.labelSmall,
                    fontWeight = FontWeight.Bold,
                    color = HudTextSecondary
                )
            }

            Row(
                horizontalArrangement = Arrangement.spacedBy(6.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                ExposurePreset.entries.forEach { preset ->
                    val active = uiState.exposurePreset == preset
                    Column(
                        modifier = Modifier
                            .weight(1f)
                            .heightIn(min = 56.dp)
                            .clip(RoundedCornerShape(12.dp))
                            .background(if (active) CobaltBlue.copy(alpha = 0.18f) else HudCardBg)
                            .border(
                                1.dp,
                                if (active) CobaltBlueLight else HudBorder,
                                RoundedCornerShape(12.dp)
                            )
                            .testTag("exposure_preset_${preset.name.lowercase()}")
                            .clickable { onSetExposurePreset(preset) }
                            .padding(10.dp)
                    ) {
                        Text(
                            text = preset.title,
                            style = MaterialTheme.typography.labelMedium,
                            fontWeight = FontWeight.Bold,
                            color = if (active) Color.White else HudTextSecondary
                        )
                        Text(
                            text = preset.subtitle,
                            style = MaterialTheme.typography.labelSmall.copy(fontSize = 10.sp),
                            color = if (active) Color(0xFFBFDBFE) else HudTextSecondary.copy(alpha = 0.75f)
                        )
                    }
                }
            }

            if (uiState.exposurePreset == ExposurePreset.MANUAL) {
                Row(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(12.dp))
                        .background(HudCardBg)
                        .border(1.dp, HudBorder, RoundedCornerShape(12.dp))
                        .padding(10.dp)
                ) {
                    // ISO selector
                    Box(modifier = Modifier.weight(1f)) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clip(RoundedCornerShape(8.dp))
                                .background(HudVoidBg)
                                .border(1.dp, HudBorderStrong, RoundedCornerShape(8.dp))
                                .clickable { isoDropdownOpen = true }
                                .padding(horizontal = 10.dp, vertical = 8.dp)
                        ) {
                            Text("ISO", style = MaterialTheme.typography.labelSmall, color = HudTextSecondary)
                            Text(
                                "ISO ${uiState.manualIso}",
                                style = MaterialTheme.typography.labelMedium,
                                color = Color.White
                            )
                        }
                        DropdownMenu(
                            expanded = isoDropdownOpen,
                            onDismissRequest = { isoDropdownOpen = false },
                            modifier = Modifier.background(HudCardBg)
                        ) {
                            listOf(100, 200, 400, 800, 1600).forEach { v ->
                                DropdownMenuItem(
                                    text = { Text("ISO $v", color = HudTextPrimary) },
                                    onClick = {
                                        onSetManualIso(v)
                                        isoDropdownOpen = false
                                    }
                                )
                            }
                        }
                    }

                    // Shutter selector
                    Box(modifier = Modifier.weight(1f)) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clip(RoundedCornerShape(8.dp))
                                .background(HudVoidBg)
                                .border(1.dp, HudBorderStrong, RoundedCornerShape(8.dp))
                                .clickable { shutterDropdownOpen = true }
                                .padding(horizontal = 10.dp, vertical = 8.dp)
                        ) {
                            Text("Shutter", style = MaterialTheme.typography.labelSmall, color = HudTextSecondary)
                            Text(
                                "${uiState.manualShutter}s",
                                style = MaterialTheme.typography.labelMedium,
                                color = Color.White
                            )
                        }
                        DropdownMenu(
                            expanded = shutterDropdownOpen,
                            onDismissRequest = { shutterDropdownOpen = false },
                            modifier = Modifier.background(HudCardBg)
                        ) {
                            listOf("1/30", "1/60", "1/125", "1/250", "1/500").forEach { v ->
                                DropdownMenuItem(
                                    text = { Text("${v}s", color = HudTextPrimary) },
                                    onClick = {
                                        onSetManualShutter(v)
                                        shutterDropdownOpen = false
                                    }
                                )
                            }
                        }
                    }
                }
            }
        }

        // 3. Primary Capture CTA
        Button(
            onClick = onCaptureRoom,
            enabled = !uiState.isCapturing,
            shape = RoundedCornerShape(16.dp),
            colors = ButtonDefaults.buttonColors(
                containerColor = CobaltBlue,
                contentColor = Color.White,
                disabledContainerColor = CobaltBlue.copy(alpha = 0.55f),
                disabledContentColor = Color.White.copy(alpha = 0.8f)
            ),
            contentPadding = PaddingValues(vertical = 16.dp, horizontal = 16.dp),
            modifier = Modifier
                .fillMaxWidth()
                .heightIn(min = 54.dp)
                .testTag("capture_offload_button")
        ) {
            if (uiState.isCapturing) {
                CircularProgressIndicator(
                    color = Color.White,
                    strokeWidth = 2.dp,
                    modifier = Modifier.size(20.dp)
                )
            } else {
                Icon(
                    imageVector = Icons.Rounded.CameraAlt,
                    contentDescription = null,
                    modifier = Modifier.size(20.dp)
                )
            }
            Spacer(Modifier.width(10.dp))
            Text(
                text = stringResource(
                    if (uiState.isCapturing) R.string.capturing_cta else R.string.capture_cta
                ),
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Bold
            )
        }

        // 4. 5-Step OSC Pipeline Progress Pills
        Column(
            verticalArrangement = Arrangement.spacedBy(6.dp),
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(16.dp))
                .background(HudVoidBg)
                .border(1.dp, HudBorder, RoundedCornerShape(16.dp))
                .padding(12.dp)
        ) {
            Row(
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.fillMaxWidth().padding(bottom = 2.dp)
            ) {
                Text(
                    text = stringResource(R.string.osc_pipeline),
                    style = MaterialTheme.typography.labelSmall,
                    color = HudTextSecondary
                )
                Text(
                    text = uiState.captureEvent?.let { "${it.progress}%" } ?: "IDLE",
                    style = MaterialTheme.typography.labelSmall,
                    color = HudTextSecondary
                )
            }

            PROGRESS_PILLS.forEachIndexed { idx, pill ->
                val isDone = activeStepIndex > idx || (activeStepIndex == 4 && idx == 4)
                val isCurrent = activeStepIndex == idx && uiState.captureEvent?.step != CaptureStep.DONE

                val borderColor = when {
                    isDone -> BrandEmerald.copy(alpha = 0.42f)
                    isCurrent -> CobaltBlueLight.copy(alpha = 0.55f)
                    else -> HudBorder
                }
                val bgColor = when {
                    isDone -> BrandEmerald.copy(alpha = 0.1f)
                    isCurrent -> CobaltBlue.copy(alpha = 0.16f)
                    else -> HudCardBg.copy(alpha = 0.6f)
                }
                val textColor = when {
                    isDone -> Color(0xFF6EE7B7)
                    isCurrent -> Color(0xFFBFDBFE)
                    else -> HudTextSecondary.copy(alpha = 0.7f)
                }

                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween,
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(10.dp))
                        .background(bgColor)
                        .border(1.dp, borderColor, RoundedCornerShape(10.dp))
                        .padding(horizontal = 12.dp, vertical = 8.dp)
                ) {
                    Text(
                        text = pill.label,
                        style = MaterialTheme.typography.bodySmall,
                        fontWeight = FontWeight.Medium,
                        color = textColor
                    )
                    when {
                        isDone -> Icon(
                            imageVector = Icons.Rounded.CheckCircle,
                            contentDescription = null,
                            tint = BrandEmerald,
                            modifier = Modifier.size(15.dp)
                        )
                        isCurrent -> CircularProgressIndicator(
                            color = CobaltBlueLight,
                            strokeWidth = 2.dp,
                            modifier = Modifier.size(14.dp)
                        )
                        else -> Box(
                            modifier = Modifier
                                .size(6.dp)
                                .clip(CircleShape)
                                .background(HudBorderStrong)
                        )
                    }
                }
            }

            if (!uiState.captureError.isNullOrBlank()) {
                Text(
                    text = uiState.captureError,
                    style = MaterialTheme.typography.bodySmall,
                    color = Color(0xFFFCA5A5),
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 4.dp)
                        .clip(RoundedCornerShape(10.dp))
                        .background(BrandError.copy(alpha = 0.15f))
                        .border(1.dp, BrandError.copy(alpha = 0.35f), RoundedCornerShape(10.dp))
                        .padding(10.dp)
                )
            }
        }

        // 5. Hotspot Placement Tool
        Column(
            verticalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(16.dp))
                .background(HudCardBg.copy(alpha = 0.7f))
                .border(1.dp, HudBorder, RoundedCornerShape(16.dp))
                .padding(12.dp)
        ) {
            Text(
                text = stringResource(R.string.drop_hotspot).uppercase(),
                style = MaterialTheme.typography.labelSmall,
                fontWeight = FontWeight.Bold,
                color = HudTextSecondary
            )

            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                val targetOptions = uiState.tour.rooms.filter { it.id != activeRoom.id }
                val selectedTarget = targetOptions.firstOrNull { it.id == uiState.targetHotspotRoomId }
                    ?: targetOptions.firstOrNull()

                Box(modifier = Modifier.weight(1f)) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween,
                        modifier = Modifier
                            .fillMaxWidth()
                            .heightIn(min = 44.dp)
                            .clip(RoundedCornerShape(12.dp))
                            .background(HudVoidBg)
                            .border(1.dp, HudBorderStrong, RoundedCornerShape(12.dp))
                            .clickable { hotspotTargetDropdownOpen = true }
                            .padding(horizontal = 10.dp, vertical = 10.dp)
                    ) {
                        Text(
                            text = "Link to: ${selectedTarget?.name ?: ""}",
                            style = MaterialTheme.typography.bodySmall,
                            fontWeight = FontWeight.Medium,
                            color = Color.White,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis
                        )
                        Icon(
                            imageVector = Icons.Rounded.KeyboardArrowDown,
                            contentDescription = null,
                            tint = HudTextSecondary,
                            modifier = Modifier.size(16.dp)
                        )
                    }

                    DropdownMenu(
                        expanded = hotspotTargetDropdownOpen,
                        onDismissRequest = { hotspotTargetDropdownOpen = false },
                        modifier = Modifier.background(HudCardBg)
                    ) {
                        targetOptions.forEach { target ->
                            DropdownMenuItem(
                                text = { Text("Link to: ${target.name}", color = HudTextPrimary) },
                                onClick = {
                                    onSelectTargetHotspotRoom(target.id)
                                    hotspotTargetDropdownOpen = false
                                }
                            )
                        }
                    }
                }

                Button(
                    onClick = onTogglePlacementMode,
                    shape = RoundedCornerShape(12.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = if (uiState.placementMode) CobaltBlue else HudCardBg,
                        contentColor = Color.White
                    ),
                    border = if (uiState.placementMode) null else BorderStroke(1.dp, HudBorderStrong),
                    contentPadding = PaddingValues(horizontal = 12.dp, vertical = 10.dp),
                    modifier = Modifier
                        .heightIn(min = 44.dp)
                        .testTag("place_pin_button")
                ) {
                    Icon(
                        imageVector = Icons.Rounded.GpsFixed,
                        contentDescription = null,
                        modifier = Modifier.size(15.dp)
                    )
                    Spacer(Modifier.width(6.dp))
                    Text(
                        text = stringResource(if (uiState.placementMode) R.string.tap_360 else R.string.place_pin),
                        style = MaterialTheme.typography.labelMedium
                    )
                }
            }
        }
    }
}

@Composable
private fun TelemetryChip(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    iconTint: Color,
    text: String
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(5.dp),
        modifier = Modifier
            .clip(RoundedCornerShape(8.dp))
            .background(HudCardBg)
            .border(1.dp, HudBorder, RoundedCornerShape(8.dp))
            .padding(horizontal = 10.dp, vertical = 5.dp)
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = iconTint,
            modifier = Modifier.size(13.dp)
        )
        Text(
            text = text,
            style = MaterialTheme.typography.labelSmall,
            color = HudTextPrimary
        )
    }
}

@Composable
private fun ThetaWifiSettingsDialog(
    initialSsid: String,
    initialPassword: String,
    initialBaseUrl: String,
    wifiStatus: ThetaWifiStatus,
    isProbing: Boolean,
    probeMessage: String?,
    onDismiss: () -> Unit,
    onBindActiveWifi: () -> Unit,
    onConnectWifi: (String, String, String) -> Unit,
    onDisconnectWifi: () -> Unit
) {
    var ssid by remember { mutableStateOf(initialSsid) }
    var password by remember { mutableStateOf(initialPassword) }
    var baseUrl by remember { mutableStateOf(initialBaseUrl) }

    val fieldColors = OutlinedTextFieldDefaults.colors(
        focusedTextColor = Color.White,
        unfocusedTextColor = Color.White,
        focusedBorderColor = CobaltBlueLight,
        unfocusedBorderColor = HudBorderStrong,
        focusedLabelColor = CobaltBlueLight,
        unfocusedLabelColor = HudTextSecondary
    )

    AlertDialog(
        onDismissRequest = onDismiss,
        containerColor = HudSurface,
        titleContentColor = Color.White,
        textContentColor = HudTextSecondary,
        title = {
            Text(
                text = "RICOH THETA X Wi-Fi Connection",
                style = MaterialTheme.typography.titleMedium
            )
        },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                Text(
                    text = "If already connected to your THETA X in Android Wi-Fi settings, tap \"Bind Active Wi-Fi\" so 192.168.1.1 routes over Wi-Fi instead of Cellular.",
                    style = MaterialTheme.typography.bodySmall,
                    color = HudTextSecondary
                )

                OutlinedTextField(
                    value = baseUrl,
                    onValueChange = { baseUrl = it },
                    label = { Text("Camera Base URL") },
                    placeholder = { Text("http://192.168.1.1") },
                    singleLine = true,
                    colors = fieldColors,
                    modifier = Modifier.fillMaxWidth()
                )

                OutlinedTextField(
                    value = ssid,
                    onValueChange = { ssid = it },
                    label = { Text("THETA Wi-Fi SSID (Optional)") },
                    placeholder = { Text("THETAYRxxxxxxxx.OSC") },
                    singleLine = true,
                    colors = fieldColors,
                    modifier = Modifier.fillMaxWidth()
                )

                OutlinedTextField(
                    value = password,
                    onValueChange = { password = it },
                    label = { Text("Wi-Fi Password") },
                    placeholder = { Text("8-digit camera serial / password") },
                    singleLine = true,
                    colors = fieldColors,
                    modifier = Modifier.fillMaxWidth()
                )

                val diagnostic = probeMessage ?: wifiStatus.message
                if (diagnostic.isNotBlank()) {
                    Text(
                        text = diagnostic,
                        style = MaterialTheme.typography.bodySmall,
                        color = if (wifiStatus.boundToNetwork) BrandEmerald else BrandAmber,
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(8.dp))
                            .background(HudVoidBg)
                            .padding(8.dp)
                    )
                }

                if (isProbing) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        CircularProgressIndicator(modifier = Modifier.size(16.dp), strokeWidth = 2.dp)
                        Text("Probing /osc/info…", style = MaterialTheme.typography.bodySmall)
                    }
                }
            }
        },
        confirmButton = {
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                OutlinedButton(
                    onClick = onBindActiveWifi,
                    border = BorderStroke(1.dp, HudBorderStrong)
                ) {
                    Text("Bind Active Wi-Fi", color = HudTextPrimary)
                }
                Button(
                    onClick = { onConnectWifi(ssid, password, baseUrl) },
                    colors = ButtonDefaults.buttonColors(containerColor = CobaltBlue)
                ) {
                    Text("Connect")
                }
            }
        },
        dismissButton = {
            Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                if (wifiStatus.boundToNetwork) {
                    TextButton(onClick = onDisconnectWifi) {
                        Text("Unbind", color = BrandAmber)
                    }
                }
                TextButton(onClick = onDismiss) {
                    Text("Close", color = HudTextSecondary)
                }
            }
        }
    )
}
