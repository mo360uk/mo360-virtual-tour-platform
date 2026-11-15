package com.virtualtour.capture.ui

import android.app.Application
import android.content.Context
import android.content.Intent
import android.os.BatteryManager
import android.os.StatFs
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.virtualtour.capture.data.DemoTourData
import com.virtualtour.capture.data.HotspotLink
import com.virtualtour.capture.data.PropertyTour
import com.virtualtour.capture.data.RoomNode
import com.virtualtour.capture.services.CameraProbeResult
import com.virtualtour.capture.services.CaptureOptions
import com.virtualtour.capture.services.CaptureProgressEvent
import com.virtualtour.capture.services.CaptureStep
import com.virtualtour.capture.services.QueueStatus
import com.virtualtour.capture.services.SyncQueueService
import com.virtualtour.capture.services.ThetaOscService
import com.virtualtour.capture.services.ThetaWifiManager
import com.virtualtour.capture.services.ThetaWifiStatus
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import java.time.Instant

enum class AppMode {
    VIEWER,
    CAPTURE
}

enum class ExposurePreset(val title: String, val subtitle: String) {
    AUTO("Auto", "Balanced"),
    HDR("HDR Bracket", "-2 / 0 / +2 EV"),
    MANUAL("Manual", "ISO / Shutter")
}

data class MainUiState(
    val mode: AppMode = AppMode.VIEWER,
    val tour: PropertyTour = DemoTourData.DEMO_TOUR,
    val activeRoomId: String = DemoTourData.DEMO_TOUR.rooms.first().id,
    val currentYaw: Float = DemoTourData.DEMO_TOUR.rooms.first().initialYaw,
    val fov: Float = 75f,
    val autoRotate: Boolean = false,
    val isImmersive: Boolean = false,
    val copiedShare: Boolean = false,
    // Capture HUD state
    val captureRoomId: String = DemoTourData.DEMO_TOUR.rooms.first().id,
    val targetHotspotRoomId: String = DemoTourData.DEMO_TOUR.rooms.getOrNull(1)?.id
        ?: DemoTourData.DEMO_TOUR.rooms.first().id,
    val mockTheta: Boolean = true,
    val thetaBaseUrl: String = ThetaOscService.THETA_BASE_URL,
    val thetaSsid: String = "",
    val thetaPassword: String = "",
    val cameraProbe: CameraProbeResult? = null,
    val isProbingCamera: Boolean = false,
    val exposurePreset: ExposurePreset = ExposurePreset.HDR,
    val manualIso: Int = 200,
    val manualShutter: String = "1/125",
    val isCapturing: Boolean = false,
    val captureEvent: CaptureProgressEvent? = null,
    val captureError: String? = null,
    val placementMode: Boolean = false,
    val deviceBatteryPercent: Int = 84,
    val freeStorageGb: Long = 184L
) {
    val activeViewerRoom: RoomNode
        get() = tour.rooms.firstOrNull { it.id == activeRoomId } ?: tour.rooms.first()

    val activeCaptureRoom: RoomNode
        get() = tour.rooms.firstOrNull { it.id == captureRoomId } ?: tour.rooms.first()
}

class MainViewModel(application: Application) : AndroidViewModel(application) {

    private val wifiManager = ThetaWifiManager(application)
    private val oscService = ThetaOscService(application, wifiManager)
    private val syncQueueService = SyncQueueService(application)

    val wifiStatus: StateFlow<ThetaWifiStatus> = wifiManager.status
    val queueStatus: StateFlow<QueueStatus> = syncQueueService.status

    private val _uiState = MutableStateFlow(
        MainUiState(
            tour = syncQueueService.loadTourManifest(DemoTourData.DEMO_TOUR.id) ?: DemoTourData.DEMO_TOUR,
            mockTheta = oscService.getUseMockTheta(),
            thetaBaseUrl = oscService.getBaseUrl(),
            thetaSsid = oscService.getSavedSsid(),
            thetaPassword = oscService.getSavedPassword(),
            deviceBatteryPercent = readDeviceBattery(application),
            freeStorageGb = readFreeStorageGb(application)
        )
    )
    val uiState: StateFlow<MainUiState> = _uiState.asStateFlow()

    init {
        if (!_uiState.value.mockTheta) {
            probeCameraConnection()
        }
    }

    fun setMode(mode: AppMode) {
        _uiState.update { state ->
            state.copy(
                mode = mode,
                placementMode = false,
                deviceBatteryPercent = readDeviceBattery(getApplication()),
                freeStorageGb = readFreeStorageGb(getApplication())
            )
        }
        if (mode == AppMode.CAPTURE && !_uiState.value.mockTheta) {
            probeCameraConnection()
        }
    }

    fun selectViewerRoom(roomId: String) {
        val room = _uiState.value.tour.rooms.firstOrNull { it.id == roomId } ?: return
        _uiState.update {
            it.copy(
                activeRoomId = room.id,
                currentYaw = room.initialYaw
            )
        }
    }

    fun updateYaw(yaw: Float) {
        _uiState.update { it.copy(currentYaw = yaw) }
    }

    fun updateFov(fov: Float) {
        _uiState.update { it.copy(fov = fov.coerceIn(35f, 95f)) }
    }

    fun toggleAutoRotate() {
        _uiState.update { it.copy(autoRotate = !it.autoRotate) }
    }

    fun toggleImmersive() {
        _uiState.update { it.copy(isImmersive = !it.isImmersive) }
    }

    fun markShareCopied() {
        _uiState.update { it.copy(copiedShare = true) }
        viewModelScope.launch {
            kotlinx.coroutines.delay(2000)
            _uiState.update { it.copy(copiedShare = false) }
        }
    }

    fun selectCaptureRoom(roomId: String) {
        _uiState.update { state ->
            val nextTarget = if (state.targetHotspotRoomId == roomId) {
                state.tour.rooms.firstOrNull { it.id != roomId }?.id ?: state.targetHotspotRoomId
            } else {
                state.targetHotspotRoomId
            }
            state.copy(
                captureRoomId = roomId,
                targetHotspotRoomId = nextTarget,
                placementMode = false
            )
        }
    }

    fun selectTargetHotspotRoom(roomId: String) {
        _uiState.update { it.copy(targetHotspotRoomId = roomId) }
    }

    fun toggleMockTheta() {
        val next = !_uiState.value.mockTheta
        oscService.setUseMockTheta(next)
        _uiState.update {
            it.copy(
                mockTheta = next,
                captureError = null
            )
        }
        if (!next) {
            probeCameraConnection()
        }
    }

    fun setExposurePreset(preset: ExposurePreset) {
        _uiState.update { it.copy(exposurePreset = preset) }
    }

    fun setManualIso(iso: Int) {
        _uiState.update { it.copy(manualIso = iso) }
    }

    fun setManualShutter(shutter: String) {
        _uiState.update { it.copy(manualShutter = shutter) }
    }

    fun togglePlacementMode() {
        _uiState.update { it.copy(placementMode = !it.placementMode) }
    }

    fun updateThetaConnectionSettings(ssid: String, password: String, baseUrl: String) {
        val cleanedUrl = baseUrl.trim().trimEnd('/').ifEmpty { ThetaOscService.THETA_BASE_URL }
        oscService.setSavedSsid(ssid)
        oscService.setSavedPassword(password)
        oscService.setBaseUrl(cleanedUrl)
        _uiState.update {
            it.copy(
                thetaSsid = ssid.trim(),
                thetaPassword = password.trim(),
                thetaBaseUrl = cleanedUrl
            )
        }
    }

    fun connectThetaWifiAndProbe(ssid: String, password: String, baseUrl: String) {
        updateThetaConnectionSettings(ssid, password, baseUrl)
        viewModelScope.launch {
            _uiState.update { it.copy(isProbingCamera = true, captureError = null) }
            val status = wifiManager.connectToThetaWifi(ssid.trim(), password.trim())
            if (status.connected || ssid.trim().isEmpty()) {
                val probe = oscService.probeCamera(baseUrl)
                _uiState.update {
                    it.copy(
                        isProbingCamera = false,
                        cameraProbe = probe,
                        captureError = if (!probe.reachable && !it.mockTheta) probe.message else null
                    )
                }
            } else {
                _uiState.update {
                    it.copy(
                        isProbingCamera = false,
                        captureError = status.message
                    )
                }
            }
        }
    }

    fun bindExistingWifiAndProbe() {
        viewModelScope.launch {
            _uiState.update { it.copy(isProbingCamera = true, captureError = null) }
            val baseUrl = _uiState.value.thetaBaseUrl
            val host = runCatching { java.net.URI(baseUrl).host }.getOrNull() ?: "192.168.1.1"
            wifiManager.bindExistingWifiForCamera(host)
            val probe = oscService.probeCamera(baseUrl)
            _uiState.update {
                it.copy(
                    isProbingCamera = false,
                    cameraProbe = probe,
                    captureError = if (!probe.reachable && !it.mockTheta) probe.message else null
                )
            }
        }
    }

    fun disconnectThetaWifi() {
        wifiManager.disconnectFromThetaWifi()
        _uiState.update { it.copy(cameraProbe = null) }
    }

    fun probeCameraConnection() {
        viewModelScope.launch {
            _uiState.update { it.copy(isProbingCamera = true) }
            val probe = oscService.probeCamera(_uiState.value.thetaBaseUrl)
            _uiState.update {
                it.copy(
                    isProbingCamera = false,
                    cameraProbe = probe
                )
            }
        }
    }

    fun captureRoomAndOffload() {
        val state = _uiState.value
        if (state.isCapturing) return
        val room = state.activeCaptureRoom

        viewModelScope.launch {
            _uiState.update {
                it.copy(
                    isCapturing = true,
                    captureError = null,
                    captureEvent = CaptureProgressEvent(
                        step = CaptureStep.CONNECTING,
                        progress = 5,
                        message = "Connecting to ${state.thetaBaseUrl}…"
                    )
                )
            }

            try {
                val options = CaptureOptions(
                    baseUrl = state.thetaBaseUrl,
                    hdr = state.exposurePreset == ExposurePreset.HDR,
                    iso = if (state.exposurePreset == ExposurePreset.MANUAL) state.manualIso else null,
                    shutterSpeedLabel = if (state.exposurePreset == ExposurePreset.MANUAL) state.manualShutter else null
                )

                val result = oscService.captureDownloadAndWipe(
                    roomId = room.id,
                    options = options,
                    onProgress = { evt ->
                        _uiState.update { it.copy(captureEvent = evt) }
                    }
                )

                val updatedRoom = room.copy(
                    panoPreviewUrl = result.localPath,
                    panoHighResUrl = result.localPath,
                    capturedAt = result.capturedAt,
                    synced = false
                )

                val updatedTour = _uiState.value.tour.copy(
                    updatedAt = result.capturedAt,
                    rooms = _uiState.value.tour.rooms.map { r ->
                        if (r.id == updatedRoom.id) updatedRoom else r
                    }
                )

                _uiState.update {
                    it.copy(
                        tour = updatedTour,
                        deviceBatteryPercent = readDeviceBattery(getApplication()),
                        freeStorageGb = readFreeStorageGb(getApplication())
                    )
                }

                syncQueueService.enqueueRoom(
                    tour = updatedTour,
                    room = updatedRoom,
                    localImageUri = result.localPath,
                    previewImageUri = result.localPath
                )
            } catch (e: Exception) {
                _uiState.update {
                    it.copy(
                        captureError = e.message ?: "Capture failed."
                    )
                }
            } finally {
                _uiState.update { it.copy(isCapturing = false) }
            }
        }
    }

    fun placeHotspot(yaw: Int, pitch: Int) {
        val state = _uiState.value
        val activeRoom = state.activeCaptureRoom
        val targetRoom = state.tour.rooms.firstOrNull { it.id == state.targetHotspotRoomId } ?: return

        val newHotspot = HotspotLink(
            id = "hs-${activeRoom.id}-to-${targetRoom.id}-${System.currentTimeMillis()}",
            targetRoomId = targetRoom.id,
            yaw = yaw.toFloat(),
            pitch = pitch.toFloat(),
            label = targetRoom.name
        )

        val updatedRoom = activeRoom.copy(
            hotspots = activeRoom.hotspots + newHotspot
        )
        val updatedTour = state.tour.copy(
            updatedAt = Instant.now().toString(),
            rooms = state.tour.rooms.map { r ->
                if (r.id == activeRoom.id) updatedRoom else r
            }
        )

        syncQueueService.saveTourManifest(updatedTour)
        _uiState.update {
            it.copy(
                tour = updatedTour,
                placementMode = false
            )
        }
    }

    fun shareTour(context: Context) {
        val tour = _uiState.value.tour
        val shareText = buildString {
            appendLine("${tour.title} — 360° Virtual Tour")
            appendLine(tour.address)
            appendLine("Rooms: ${tour.rooms.joinToString(", ") { it.name }}")
            append("Presented by ${tour.agencyName}")
        }
        val intent = Intent(Intent.ACTION_SEND).apply {
            type = "text/plain"
            putExtra(Intent.EXTRA_SUBJECT, tour.title)
            putExtra(Intent.EXTRA_TEXT, shareText)
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        context.startActivity(Intent.createChooser(intent, "Share Virtual Tour"))
        markShareCopied()
    }

    private fun readDeviceBattery(context: Context): Int {
        val bm = context.getSystemService(Context.BATTERY_SERVICE) as? BatteryManager
        val pct = bm?.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY) ?: -1
        return if (pct in 1..100) pct else 84
    }

    private fun readFreeStorageGb(context: Context): Long {
        return runCatching {
            val stat = StatFs(context.filesDir.absolutePath)
            (stat.availableBytes / (1024L * 1024L * 1024L)).coerceAtLeast(1L)
        }.getOrDefault(184L)
    }
}
