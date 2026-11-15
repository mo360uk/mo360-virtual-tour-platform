package com.virtualtour.capture.data

import kotlinx.serialization.Serializable

@Serializable
data class HotspotLink(
    val id: String,
    val targetRoomId: String,
    val yaw: Float,
    val pitch: Float,
    val label: String
)

@Serializable
data class FloorplanCoords(
    val x: Float,
    val y: Float
)

@Serializable
data class RoomNode(
    val id: String,
    val name: String,
    val panoPreviewUrl: String,
    val panoHighResUrl: String,
    val initialYaw: Float,
    val floorplanCoords: FloorplanCoords,
    val dimensions: String? = null,
    val hotspots: List<HotspotLink> = emptyList(),
    val capturedAt: String? = null,
    val synced: Boolean = false
)

@Serializable
data class PropertyTour(
    val id: String,
    val title: String,
    val address: String,
    val agencyName: String,
    val agencyLogoUrl: String? = null,
    val agentName: String? = null,
    val agentPhone: String? = null,
    val floorplanSvgUrl: String? = null,
    val rooms: List<RoomNode>,
    val createdAt: String,
    val updatedAt: String
)

object DemoTourData {
    val DEMO_TOUR = PropertyTour(
        id = "harbourside-penthouse-plymouth",
        title = "The Harbourside Penthouse",
        address = "Sutton Harbour, Plymouth PL4 0DX, UK",
        agencyName = "Mo360 Immersive Studio",
        agentName = "Mohamed Elwakil",
        agentPhone = "+44 1752 000 360",
        createdAt = "2026-11-15T06:00:00.000Z",
        updatedAt = "2026-11-15T06:30:00.000Z",
        rooms = listOf(
            RoomNode(
                id = "living-room",
                name = "Living Room",
                panoPreviewUrl = "asset://panoramas/living-room.jpg",
                panoHighResUrl = "asset://panoramas/living-room.jpg",
                initialYaw = 0f,
                floorplanCoords = FloorplanCoords(x = 28f, y = 56f),
                dimensions = "8.0m × 6.4m",
                synced = true,
                hotspots = listOf(
                    HotspotLink(
                        id = "hs-lr-to-kitchen",
                        targetRoomId = "kitchen",
                        yaw = 52f,
                        pitch = -5f,
                        label = "Kitchen & Island"
                    ),
                    HotspotLink(
                        id = "hs-lr-to-bedroom",
                        targetRoomId = "master-bedroom",
                        yaw = -58f,
                        pitch = -5f,
                        label = "Master Bedroom"
                    )
                )
            ),
            RoomNode(
                id = "kitchen",
                name = "Kitchen",
                panoPreviewUrl = "asset://panoramas/kitchen.jpg",
                panoHighResUrl = "asset://panoramas/kitchen.jpg",
                initialYaw = 15f,
                floorplanCoords = FloorplanCoords(x = 72f, y = 56f),
                dimensions = "6.6m × 5.8m",
                synced = true,
                hotspots = listOf(
                    HotspotLink(
                        id = "hs-k-to-lr",
                        targetRoomId = "living-room",
                        yaw = -125f,
                        pitch = -5f,
                        label = "Living Room"
                    ),
                    HotspotLink(
                        id = "hs-k-to-bedroom",
                        targetRoomId = "master-bedroom",
                        yaw = -165f,
                        pitch = -5f,
                        label = "Master Bedroom"
                    )
                )
            ),
            RoomNode(
                id = "master-bedroom",
                name = "Master Bedroom",
                panoPreviewUrl = "asset://panoramas/master-bedroom.jpg",
                panoHighResUrl = "asset://panoramas/master-bedroom.jpg",
                initialYaw = 0f,
                floorplanCoords = FloorplanCoords(x = 50f, y = 24f),
                dimensions = "6.8m × 6.0m",
                synced = true,
                hotspots = listOf(
                    HotspotLink(
                        id = "hs-mb-to-lr",
                        targetRoomId = "living-room",
                        yaw = 135f,
                        pitch = -5f,
                        label = "Living Room"
                    ),
                    HotspotLink(
                        id = "hs-mb-to-kitchen",
                        targetRoomId = "kitchen",
                        yaw = -140f,
                        pitch = -5f,
                        label = "Kitchen & Island"
                    )
                )
            )
        )
    )
}
