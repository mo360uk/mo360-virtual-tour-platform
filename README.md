# Mo360 Tour — Native Android Virtual Tour & RICOH THETA Capture App

Native Kotlin + Jetpack Compose Android application for viewing 360-degree equirectangular virtual tours and capturing/offloading panoramas from RICOH THETA cameras (including **RICOH THETA X**) over Open Spherical Camera (OSC) v2.0 / v2.1 Wi-Fi.

## Features

- **360° Interactive Tour Viewer**: Hardware-accelerated OpenGL ES 2.0 equirectangular sphere renderer with touch-drag look, pinch-to-zoom, auto-rotate, immersive toggle, share sheet, and 3D-projected Cobalt Blue hotspot beacons.
- **2D Architectural Floor Plan Minimap**: Collapsible vector floorplan with clickable room pins and a live Cobalt Blue FOV radar cone synced to camera yaw and field of view.
- **RICOH THETA X Capture HUD**: Dark field telemetry bar, `USE_MOCK_THETA` simulation mode (generates 2048×1024 equirectangular JPEGs locally), Auto / HDR Bracket / Manual exposure presets, 5-step OSC capture-download-wipe pipeline (`camera.takePicture`, `/osc/commands/status`, streaming download, `camera.delete`), and raycast tap-to-place navigation hotspots.
- **Android Wi-Fi Network Binding**: `ThetaWifiManager` automatically binds `OkHttpClient` and the process network to the active Wi-Fi interface on the `192.168.1.x` camera subnet (preventing Android from routing `192.168.1.1` over Cellular when the camera AP has no internet) and supports programmatic `WifiNetworkSpecifier` connection.
- **Offline-First Sync Queue**: Persists tour manifests and pending room uploads locally in app storage and flushes automatically when internet connectivity returns.
