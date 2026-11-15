package com.virtualtour.capture.ui.components

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.expandVertically
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.KeyboardArrowDown
import androidx.compose.material.icons.rounded.KeyboardArrowUp
import androidx.compose.material.icons.rounded.Map
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.PathEffect
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.rotate
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.drawText
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.rememberTextMeasurer
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.virtualtour.capture.R
import com.virtualtour.capture.data.RoomNode
import com.virtualtour.capture.ui.theme.CobaltBlue
import com.virtualtour.capture.ui.theme.ViewerBorder
import com.virtualtour.capture.ui.theme.ViewerCardSolid
import com.virtualtour.capture.ui.theme.ViewerInk
import com.virtualtour.capture.ui.theme.ViewerMistBg
import com.virtualtour.capture.ui.theme.ViewerSlateMuted
import kotlin.math.cos
import kotlin.math.hypot
import kotlin.math.sin

@Composable
fun FloorPlanMinimap(
    rooms: List<RoomNode>,
    activeRoomId: String,
    currentYaw: Float,
    fov: Float = 75f,
    onSelectRoom: (String) -> Unit,
    modifier: Modifier = Modifier,
    initiallyCollapsed: Boolean = false
) {
    var collapsed by remember { mutableStateOf(initiallyCollapsed) }
    val activeRoom = rooms.firstOrNull { it.id == activeRoomId } ?: rooms.firstOrNull()
    val textMeasurer = rememberTextMeasurer()

    Column(
        modifier = modifier
            .width(248.dp)
            .shadow(12.dp, RoundedCornerShape(16.dp))
            .clip(RoundedCornerShape(16.dp))
            .background(ViewerCardSolid.copy(alpha = 0.95f))
            .border(1.dp, ViewerBorder, RoundedCornerShape(16.dp))
    ) {
        // Header toggle
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
            modifier = Modifier
                .fillMaxWidth()
                .testTag("floorplan_toggle_button")
                .clickable { collapsed = !collapsed }
                .padding(horizontal = 12.dp, vertical = 10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Box(
                    contentAlignment = Alignment.Center,
                    modifier = Modifier
                        .size(26.dp)
                        .clip(RoundedCornerShape(8.dp))
                        .background(ViewerMistBg)
                        .border(1.dp, ViewerBorder, RoundedCornerShape(8.dp))
                ) {
                    Icon(
                        imageVector = Icons.Rounded.Map,
                        contentDescription = null,
                        tint = CobaltBlue,
                        modifier = Modifier.size(15.dp)
                    )
                }
                Column {
                    Text(
                        text = stringResource(R.string.floor_plan).uppercase(),
                        style = MaterialTheme.typography.labelSmall.copy(
                            fontWeight = FontWeight.Bold,
                            letterSpacing = 0.8.sp
                        ),
                        color = ViewerInk
                    )
                    if (activeRoom != null) {
                        val subtitle = buildString {
                            append(activeRoom.name)
                            if (!activeRoom.dimensions.isNullOrBlank()) {
                                append(" • ")
                                append(activeRoom.dimensions)
                            }
                        }
                        Text(
                            text = subtitle,
                            style = MaterialTheme.typography.bodySmall.copy(fontSize = 11.sp),
                            color = ViewerSlateMuted,
                            maxLines = 1
                        )
                    }
                }
            }
            Icon(
                imageVector = if (collapsed) Icons.Rounded.KeyboardArrowUp else Icons.Rounded.KeyboardArrowDown,
                contentDescription = if (collapsed) "Expand floor plan" else "Collapse floor plan",
                tint = ViewerSlateMuted,
                modifier = Modifier.size(18.dp)
            )
        }

        AnimatedVisibility(
            visible = !collapsed,
            enter = expandVertically(),
            exit = shrinkVertically()
        ) {
            Box(
                modifier = Modifier
                    .padding(start = 10.dp, end = 10.dp, bottom = 10.dp)
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(12.dp))
                    .background(ViewerMistBg)
                    .border(1.dp, ViewerBorder, RoundedCornerShape(12.dp))
                    .padding(6.dp)
            ) {
                Canvas(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(152.dp)
                        .testTag("floorplan_canvas")
                        .pointerInput(rooms) {
                            detectTapGestures { offset ->
                                val sx = size.width / 100f
                                val sy = size.height / 78f
                                val tappedRoom = rooms.minByOrNull { r ->
                                    val rx = r.floorplanCoords.x * sx
                                    val ry = r.floorplanCoords.y * sy
                                    hypot(offset.x - rx, offset.y - ry)
                                }
                                if (tappedRoom != null) {
                                    val rx = tappedRoom.floorplanCoords.x * sx
                                    val ry = tappedRoom.floorplanCoords.y * sy
                                    if (hypot(offset.x - rx, offset.y - ry) <= 24.dp.toPx()) {
                                        onSelectRoom(tappedRoom.id)
                                    }
                                }
                            }
                        }
                ) {
                    val sx = size.width / 100f
                    val sy = size.height / 78f

                    // Subtle architectural grid
                    listOf(20f, 40f, 60f).forEach { gy ->
                        drawLine(
                            color = ViewerBorder,
                            start = Offset(0f, gy * sy),
                            end = Offset(100f * sx, gy * sy),
                            strokeWidth = 0.8f
                        )
                    }
                    listOf(25f, 50f, 75f).forEach { gx ->
                        drawLine(
                            color = ViewerBorder,
                            start = Offset(gx * sx, 0f),
                            end = Offset(gx * sx, 78f * sy),
                            strokeWidth = 0.8f
                        )
                    }

                    // Outer Penthouse Architectural Walls
                    drawRoundRect(
                        color = ViewerCardSolid,
                        topLeft = Offset(6f * sx, 6f * sy),
                        size = Size(88f * sx, 66f * sy),
                        cornerRadius = CornerRadius(2f * sx, 2f * sy)
                    )
                    drawRoundRect(
                        color = ViewerInk,
                        topLeft = Offset(6f * sx, 6f * sy),
                        size = Size(88f * sx, 66f * sy),
                        cornerRadius = CornerRadius(2f * sx, 2f * sy),
                        style = Stroke(width = 1.4f * sx)
                    )

                    // Interior Partition Walls (Master Bedroom upper suite)
                    drawLine(
                        color = ViewerInk,
                        start = Offset(6f * sx, 38f * sy),
                        end = Offset(40f * sx, 38f * sy),
                        strokeWidth = 1.1f * sx
                    )
                    drawLine(
                        color = ViewerInk,
                        start = Offset(56f * sx, 38f * sy),
                        end = Offset(94f * sx, 38f * sy),
                        strokeWidth = 1.1f * sx
                    )

                    // Living Room / Kitchen dashed divider
                    drawLine(
                        color = ViewerInk,
                        start = Offset(50f * sx, 46f * sy),
                        end = Offset(50f * sx, 72f * sy),
                        strokeWidth = 1.1f * sx,
                        pathEffect = PathEffect.dashPathEffect(floatArrayOf(3f * sx, 2f * sx), 0f)
                    )

                    // Harbourside Panoramic Glazing Accent
                    drawLine(
                        color = CobaltBlue,
                        start = Offset(14f * sx, 72f * sy),
                        end = Offset(86f * sx, 72f * sy),
                        strokeWidth = 2.2f * sx
                    )

                    // Live Cobalt Blue FOV Radar Cone
                    if (activeRoom != null) {
                        val cx = activeRoom.floorplanCoords.x * sx
                        val cy = activeRoom.floorplanCoords.y * sy
                        val coneR = 18f * sx
                        val halfFovRad = Math.toRadians((fov / 2f).toDouble())
                        val x1 = cx - (sin(halfFovRad) * coneR).toFloat()
                        val y1 = cy - (cos(halfFovRad) * coneR).toFloat()
                        val x2 = cx + (sin(halfFovRad) * coneR).toFloat()
                        val y2 = cy - (cos(halfFovRad) * coneR).toFloat()

                        val conePath = Path().apply {
                            moveTo(cx, cy)
                            lineTo(x1, y1)
                            quadraticTo(cx, cy - coneR * 1.12f, x2, y2)
                            close()
                        }

                        rotate(degrees = currentYaw, pivot = Offset(cx, cy)) {
                            drawPath(
                                path = conePath,
                                brush = Brush.radialGradient(
                                    colors = listOf(
                                        CobaltBlue.copy(alpha = 0.45f),
                                        CobaltBlue.copy(alpha = 0.06f)
                                    ),
                                    center = Offset(cx, cy),
                                    radius = coneR
                                )
                            )
                            drawPath(
                                path = conePath,
                                color = CobaltBlue.copy(alpha = 0.55f),
                                style = Stroke(width = 0.5f * sx)
                            )
                        }
                    }

                    // Clickable Room Pins
                    rooms.forEach { room ->
                        val isActive = room.id == activeRoomId
                        val rx = room.floorplanCoords.x * sx
                        val ry = room.floorplanCoords.y * sy

                        if (isActive) {
                            drawCircle(
                                color = CobaltBlue.copy(alpha = 0.18f),
                                radius = 5.2f * sx,
                                center = Offset(rx, ry)
                            )
                        }

                        drawCircle(
                            color = if (isActive) CobaltBlue else ViewerCardSolid,
                            radius = (if (isActive) 3.3f else 2.6f) * sx,
                            center = Offset(rx, ry)
                        )
                        drawCircle(
                            color = if (isActive) Color.White else ViewerInk,
                            radius = (if (isActive) 3.3f else 2.6f) * sx,
                            center = Offset(rx, ry),
                            style = Stroke(width = 1.2f * sx)
                        )

                        val measured = textMeasurer.measure(
                            text = room.name,
                            style = TextStyle(
                                color = if (isActive) CobaltBlue else ViewerInk,
                                fontSize = 9.sp,
                                fontWeight = if (isActive) FontWeight.Bold else FontWeight.SemiBold
                            )
                        )
                        drawText(
                            textLayoutResult = measured,
                            topLeft = Offset(
                                x = (rx - measured.size.width / 2f).coerceIn(2f, size.width - measured.size.width - 2f),
                                y = (ry + 5.2f * sy).coerceAtMost(size.height - measured.size.height - 1f)
                            )
                        )
                    }
                }
            }
        }
    }
}
