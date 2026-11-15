package com.virtualtour.capture.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Apartment
import androidx.compose.material.icons.rounded.CameraAlt
import androidx.compose.material.icons.rounded.Check
import androidx.compose.material.icons.rounded.Fullscreen
import androidx.compose.material.icons.rounded.FullscreenExit
import androidx.compose.material.icons.rounded.KeyboardArrowDown
import androidx.compose.material.icons.rounded.Pause
import androidx.compose.material.icons.rounded.Phone
import androidx.compose.material.icons.rounded.RotateRight
import androidx.compose.material.icons.rounded.Share
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.virtualtour.capture.R
import com.virtualtour.capture.ui.MainUiState
import com.virtualtour.capture.ui.components.FloorPlanMinimap
import com.virtualtour.capture.ui.components.Viewer360
import com.virtualtour.capture.ui.theme.BrandEmerald
import com.virtualtour.capture.ui.theme.CobaltBlue
import com.virtualtour.capture.ui.theme.ViewerBorder
import com.virtualtour.capture.ui.theme.ViewerCardGlass
import com.virtualtour.capture.ui.theme.ViewerCardSolid
import com.virtualtour.capture.ui.theme.ViewerInk
import com.virtualtour.capture.ui.theme.ViewerMistBg
import com.virtualtour.capture.ui.theme.ViewerSlateMuted

@Composable
fun TourViewerScreen(
    uiState: MainUiState,
    widthSizeClass: WindowWidthSizeClass,
    onSelectRoom: (String) -> Unit,
    onYawChange: (Float) -> Unit,
    onFovChange: (Float) -> Unit,
    onToggleAutoRotate: () -> Unit,
    onToggleImmersive: () -> Unit,
    onShareTour: () -> Unit,
    onSwitchToCaptureHud: () -> Unit
) {
    val activeRoom = uiState.activeViewerRoom
    val isCompact = widthSizeClass == WindowWidthSizeClass.Compact
    var roomDropdownExpanded by remember { mutableStateOf(false) }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(ViewerMistBg)
    ) {
        // Full-bleed 360° OpenGL Sphere Viewer
        Viewer360(
            room = activeRoom,
            autoRotate = uiState.autoRotate,
            fov = uiState.fov,
            showCompassHint = !isCompact && !uiState.isImmersive,
            onFovChange = onFovChange,
            onYawChange = onYawChange,
            onSelectHotspot = { hs -> onSelectRoom(hs.targetRoomId) }
        )

        // Overlay HUD inside safeDrawing insets
        Box(
            modifier = Modifier
                .fillMaxSize()
                .windowInsetsPadding(WindowInsets.safeDrawing)
                .padding(12.dp)
        ) {
            // Top HUD: Floating Property Header + Viewer Controls
            if (isCompact) {
                AnimatedVisibility(
                    visible = !uiState.isImmersive,
                    enter = fadeIn(),
                    exit = fadeOut(),
                    modifier = Modifier.align(Alignment.TopCenter)
                ) {
                    Column(
                        verticalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        PropertyHeaderCard(
                            uiState = uiState,
                            roomDropdownExpanded = roomDropdownExpanded,
                            onToggleDropdown = { roomDropdownExpanded = !roomDropdownExpanded },
                            onDismissDropdown = { roomDropdownExpanded = false },
                            onSelectRoom = {
                                roomDropdownExpanded = false
                                onSelectRoom(it)
                            },
                            onShareTour = onShareTour,
                            modifier = Modifier.fillMaxWidth()
                        )

                        Row(
                            horizontalArrangement = Arrangement.End,
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            ViewerControlsBar(
                                autoRotate = uiState.autoRotate,
                                isImmersive = uiState.isImmersive,
                                showLabels = false,
                                onToggleAutoRotate = onToggleAutoRotate,
                                onToggleImmersive = onToggleImmersive,
                                onSwitchToCaptureHud = onSwitchToCaptureHud
                            )
                        }
                    }
                }
            } else {
                // Medium / Expanded layout: Top-Left Header, Top-Right Controls & Agency Card
                AnimatedVisibility(
                    visible = !uiState.isImmersive,
                    enter = fadeIn(),
                    exit = fadeOut(),
                    modifier = Modifier.align(Alignment.TopStart)
                ) {
                    PropertyHeaderCard(
                        uiState = uiState,
                        roomDropdownExpanded = roomDropdownExpanded,
                        onToggleDropdown = { roomDropdownExpanded = !roomDropdownExpanded },
                        onDismissDropdown = { roomDropdownExpanded = false },
                        onSelectRoom = {
                            roomDropdownExpanded = false
                            onSelectRoom(it)
                        },
                        onShareTour = onShareTour,
                        modifier = Modifier.widthIn(max = 380.dp)
                    )
                }

                AnimatedVisibility(
                    visible = !uiState.isImmersive,
                    enter = fadeIn(),
                    exit = fadeOut(),
                    modifier = Modifier.align(Alignment.TopEnd)
                ) {
                    Column(
                        horizontalAlignment = Alignment.End,
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        ViewerControlsBar(
                            autoRotate = uiState.autoRotate,
                            isImmersive = uiState.isImmersive,
                            showLabels = true,
                            onToggleAutoRotate = onToggleAutoRotate,
                            onToggleImmersive = onToggleImmersive,
                            onSwitchToCaptureHud = onSwitchToCaptureHud
                        )

                        AgencyBrandingCard(
                            agencyName = uiState.tour.agencyName,
                            agentName = uiState.tour.agentName,
                            agentPhone = uiState.tour.agentPhone
                        )
                    }
                }
            }

            // Minimal exit-immersive button when HUD is hidden
            if (uiState.isImmersive) {
                Surface(
                    shape = RoundedCornerShape(14.dp),
                    color = ViewerCardGlass,
                    shadowElevation = 6.dp,
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .border(1.dp, ViewerBorder, RoundedCornerShape(14.dp))
                ) {
                    IconButton(
                        onClick = onToggleImmersive,
                        modifier = Modifier.testTag("exit_immersive_button")
                    ) {
                        Icon(
                            imageVector = Icons.Rounded.FullscreenExit,
                            contentDescription = stringResource(R.string.toggle_fullscreen),
                            tint = ViewerInk
                        )
                    }
                }
            }

            // Bottom-Center Quick Room Switcher Pills (Medium / Expanded)
            if (!isCompact && !uiState.isImmersive) {
                Row(
                    horizontalArrangement = Arrangement.spacedBy(6.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier
                        .align(Alignment.BottomCenter)
                        .shadow(10.dp, CircleShape)
                        .clip(CircleShape)
                        .background(ViewerCardGlass)
                        .border(1.dp, ViewerBorder, CircleShape)
                        .padding(6.dp)
                ) {
                    uiState.tour.rooms.forEach { room ->
                        val isActive = room.id == activeRoom.id
                        Box(
                            contentAlignment = Alignment.Center,
                            modifier = Modifier
                                .heightIn(min = 40.dp)
                                .clip(CircleShape)
                                .background(if (isActive) CobaltBlue else Color.Transparent)
                                .testTag("quick_room_pill_${room.id}")
                                .clickable { onSelectRoom(room.id) }
                                .padding(horizontal = 14.dp, vertical = 8.dp)
                        ) {
                            Text(
                                text = room.name,
                                style = MaterialTheme.typography.labelMedium,
                                fontWeight = FontWeight.SemiBold,
                                color = if (isActive) Color.White else ViewerInk
                            )
                        }
                    }
                }
            }

            // Bottom-Right Collapsible 2D Architectural Floor Plan Minimap
            AnimatedVisibility(
                visible = !uiState.isImmersive,
                enter = fadeIn(),
                exit = fadeOut(),
                modifier = Modifier.align(Alignment.BottomEnd)
            ) {
                FloorPlanMinimap(
                    rooms = uiState.tour.rooms,
                    activeRoomId = activeRoom.id,
                    currentYaw = uiState.currentYaw,
                    fov = uiState.fov,
                    onSelectRoom = onSelectRoom,
                    initiallyCollapsed = isCompact
                )
            }
        }
    }
}

@Composable
private fun PropertyHeaderCard(
    uiState: MainUiState,
    roomDropdownExpanded: Boolean,
    onToggleDropdown: () -> Unit,
    onDismissDropdown: () -> Unit,
    onSelectRoom: (String) -> Unit,
    onShareTour: () -> Unit,
    modifier: Modifier = Modifier
) {
    val activeRoom = uiState.activeViewerRoom
    Column(
        verticalArrangement = Arrangement.spacedBy(10.dp),
        modifier = modifier
            .shadow(12.dp, RoundedCornerShape(16.dp))
            .clip(RoundedCornerShape(16.dp))
            .background(ViewerCardGlass)
            .border(1.dp, ViewerBorder, RoundedCornerShape(16.dp))
            .padding(14.dp)
    ) {
        Row(
            verticalAlignment = Alignment.Top,
            horizontalArrangement = Arrangement.SpaceBetween,
            modifier = Modifier.fillMaxWidth()
        ) {
            Column(modifier = Modifier.weight(1f).padding(end = 8.dp)) {
                Text(
                    text = uiState.tour.title,
                    style = MaterialTheme.typography.titleMedium,
                    color = ViewerInk,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
                Text(
                    text = uiState.tour.address,
                    style = MaterialTheme.typography.bodySmall,
                    color = ViewerSlateMuted,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
            }

            OutlinedButton(
                onClick = onShareTour,
                shape = RoundedCornerShape(12.dp),
                contentPadding = PaddingValues(horizontal = 12.dp, vertical = 6.dp),
                colors = ButtonDefaults.outlinedButtonColors(
                    containerColor = ViewerMistBg,
                    contentColor = if (uiState.copiedShare) BrandEmerald else ViewerInk
                ),
                border = androidx.compose.foundation.BorderStroke(1.dp, ViewerBorder),
                modifier = Modifier
                    .heightIn(min = 40.dp)
                    .testTag("share_tour_button")
            ) {
                Icon(
                    imageVector = if (uiState.copiedShare) Icons.Rounded.Check else Icons.Rounded.Share,
                    contentDescription = null,
                    tint = if (uiState.copiedShare) BrandEmerald else CobaltBlue,
                    modifier = Modifier.size(15.dp)
                )
                Spacer(Modifier.width(6.dp))
                Text(
                    text = stringResource(
                        if (uiState.copiedShare) R.string.copied_label else R.string.share_tour
                    ),
                    style = MaterialTheme.typography.labelMedium
                )
            }
        }

        // Room Selector Dropdown
        Box(modifier = Modifier.fillMaxWidth()) {
            val labelText = buildString {
                append(activeRoom.name)
                if (!activeRoom.dimensions.isNullOrBlank()) {
                    append(" (${activeRoom.dimensions})")
                }
            }
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
                modifier = Modifier
                    .fillMaxWidth()
                    .heightIn(min = 44.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(ViewerMistBg)
                    .border(1.dp, ViewerBorder, RoundedCornerShape(12.dp))
                    .testTag("room_selector_dropdown")
                    .clickable { onToggleDropdown() }
                    .padding(horizontal = 12.dp, vertical = 10.dp)
            ) {
                Text(
                    text = labelText,
                    style = MaterialTheme.typography.labelMedium,
                    fontWeight = FontWeight.SemiBold,
                    color = ViewerInk,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
                Icon(
                    imageVector = Icons.Rounded.KeyboardArrowDown,
                    contentDescription = stringResource(R.string.select_room),
                    tint = ViewerSlateMuted,
                    modifier = Modifier.size(18.dp)
                )
            }

            DropdownMenu(
                expanded = roomDropdownExpanded,
                onDismissRequest = onDismissDropdown,
                modifier = Modifier.background(ViewerCardSolid)
            ) {
                uiState.tour.rooms.forEach { r ->
                    DropdownMenuItem(
                        text = {
                            val itemLabel = buildString {
                                append(r.name)
                                if (!r.dimensions.isNullOrBlank()) append(" (${r.dimensions})")
                            }
                            Text(
                                text = itemLabel,
                                style = MaterialTheme.typography.bodyMedium,
                                fontWeight = if (r.id == activeRoom.id) FontWeight.Bold else FontWeight.Normal,
                                color = if (r.id == activeRoom.id) CobaltBlue else ViewerInk
                            )
                        },
                        onClick = { onSelectRoom(r.id) }
                    )
                }
            }
        }
    }
}

@Composable
private fun ViewerControlsBar(
    autoRotate: Boolean,
    isImmersive: Boolean,
    showLabels: Boolean,
    onToggleAutoRotate: () -> Unit,
    onToggleImmersive: () -> Unit,
    onSwitchToCaptureHud: () -> Unit
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
        modifier = Modifier
            .shadow(10.dp, RoundedCornerShape(16.dp))
            .clip(RoundedCornerShape(16.dp))
            .background(ViewerCardGlass)
            .border(1.dp, ViewerBorder, RoundedCornerShape(16.dp))
            .padding(6.dp)
    ) {
        // Auto-rotate toggle
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(6.dp),
            modifier = Modifier
                .sizeIn(minWidth = 48.dp, minHeight = 40.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(if (autoRotate) CobaltBlue else Color.Transparent)
                .testTag("auto_rotate_button")
                .clickable { onToggleAutoRotate() }
                .padding(horizontal = 10.dp, vertical = 8.dp)
        ) {
            Icon(
                imageVector = if (autoRotate) Icons.Rounded.Pause else Icons.Rounded.RotateRight,
                contentDescription = stringResource(
                    if (autoRotate) R.string.pause_rotate else R.string.auto_rotate
                ),
                tint = if (autoRotate) Color.White else ViewerInk,
                modifier = Modifier.size(16.dp)
            )
            if (showLabels) {
                Text(
                    text = stringResource(if (autoRotate) R.string.pause_rotate else R.string.auto_rotate),
                    style = MaterialTheme.typography.labelMedium,
                    color = if (autoRotate) Color.White else ViewerInk
                )
            }
        }

        // Fullscreen / Immersive toggle
        Box(
            contentAlignment = Alignment.Center,
            modifier = Modifier
                .size(40.dp)
                .clip(RoundedCornerShape(12.dp))
                .testTag("immersive_toggle_button")
                .clickable { onToggleImmersive() }
        ) {
            Icon(
                imageVector = if (isImmersive) Icons.Rounded.FullscreenExit else Icons.Rounded.Fullscreen,
                contentDescription = stringResource(R.string.toggle_fullscreen),
                tint = ViewerInk,
                modifier = Modifier.size(18.dp)
            )
        }

        // Capture HUD switch button
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(6.dp),
            modifier = Modifier
                .sizeIn(minHeight = 40.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(ViewerMistBg)
                .border(1.dp, ViewerBorder, RoundedCornerShape(12.dp))
                .testTag("open_capture_hud_button")
                .clickable { onSwitchToCaptureHud() }
                .padding(horizontal = 10.dp, vertical = 8.dp)
        ) {
            Icon(
                imageVector = Icons.Rounded.CameraAlt,
                contentDescription = stringResource(R.string.capture_hud),
                tint = CobaltBlue,
                modifier = Modifier.size(16.dp)
            )
            Text(
                text = stringResource(R.string.capture_hud),
                style = MaterialTheme.typography.labelMedium,
                color = ViewerInk
            )
        }
    }
}

@Composable
private fun AgencyBrandingCard(
    agencyName: String,
    agentName: String?,
    agentPhone: String?
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        modifier = Modifier
            .shadow(10.dp, RoundedCornerShape(16.dp))
            .clip(RoundedCornerShape(16.dp))
            .background(ViewerCardGlass)
            .border(1.dp, ViewerBorder, RoundedCornerShape(16.dp))
            .padding(horizontal = 14.dp, vertical = 8.dp)
    ) {
        Box(
            contentAlignment = Alignment.Center,
            modifier = Modifier
                .size(32.dp)
                .clip(RoundedCornerShape(10.dp))
                .background(CobaltBlue.copy(alpha = 0.1f))
        ) {
            Icon(
                imageVector = Icons.Rounded.Apartment,
                contentDescription = null,
                tint = CobaltBlue,
                modifier = Modifier.size(18.dp)
            )
        }
        Column(horizontalAlignment = Alignment.End) {
            Text(
                text = agencyName,
                style = MaterialTheme.typography.labelMedium,
                fontWeight = FontWeight.Bold,
                color = ViewerInk
            )
            if (!agentName.isNullOrBlank()) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(4.dp)
                ) {
                    Text(
                        text = agentName,
                        style = MaterialTheme.typography.bodySmall.copy(fontSize = 11.sp),
                        color = ViewerSlateMuted
                    )
                    if (!agentPhone.isNullOrBlank()) {
                        Text(
                            text = "•",
                            style = MaterialTheme.typography.bodySmall.copy(fontSize = 11.sp),
                            color = ViewerSlateMuted
                        )
                        Icon(
                            imageVector = Icons.Rounded.Phone,
                            contentDescription = null,
                            tint = CobaltBlue,
                            modifier = Modifier.size(11.dp)
                        )
                        Text(
                            text = agentPhone,
                            style = MaterialTheme.typography.bodySmall.copy(fontSize = 11.sp),
                            color = ViewerSlateMuted
                        )
                    }
                }
            }
        }
    }
}
