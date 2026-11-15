package com.virtualtour.capture

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.getValue
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.virtualtour.capture.ui.AppMode
import com.virtualtour.capture.ui.MainViewModel
import com.virtualtour.capture.ui.screens.CaptureHudScreen
import com.virtualtour.capture.ui.screens.TourViewerScreen
import com.virtualtour.capture.ui.theme.Mo360Theme

class MainActivity : ComponentActivity() {

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            val widthSizeClass = calculateWindowSizeClass(this).widthSizeClass
            val mainViewModel: MainViewModel = viewModel()
            val uiState by mainViewModel.uiState.collectAsStateWithLifecycle()
            val wifiStatus by mainViewModel.wifiStatus.collectAsStateWithLifecycle()
            val queueStatus by mainViewModel.queueStatus.collectAsStateWithLifecycle()
            val context = LocalContext.current

            Mo360Theme(darkHudMode = uiState.mode == AppMode.CAPTURE) {
                when (uiState.mode) {
                    AppMode.VIEWER -> {
                        TourViewerScreen(
                            uiState = uiState,
                            widthSizeClass = widthSizeClass,
                            onSelectRoom = mainViewModel::selectViewerRoom,
                            onYawChange = mainViewModel::updateYaw,
                            onFovChange = mainViewModel::updateFov,
                            onToggleAutoRotate = mainViewModel::toggleAutoRotate,
                            onToggleImmersive = mainViewModel::toggleImmersive,
                            onShareTour = { mainViewModel.shareTour(context) },
                            onSwitchToCaptureHud = { mainViewModel.setMode(AppMode.CAPTURE) }
                        )
                    }

                    AppMode.CAPTURE -> {
                        CaptureHudScreen(
                            uiState = uiState,
                            wifiStatus = wifiStatus,
                            queueStatus = queueStatus,
                            widthSizeClass = widthSizeClass,
                            onSelectCaptureRoom = mainViewModel::selectCaptureRoom,
                            onSelectTargetHotspotRoom = mainViewModel::selectTargetHotspotRoom,
                            onToggleMockTheta = mainViewModel::toggleMockTheta,
                            onSetExposurePreset = mainViewModel::setExposurePreset,
                            onSetManualIso = mainViewModel::setManualIso,
                            onSetManualShutter = mainViewModel::setManualShutter,
                            onCaptureRoom = mainViewModel::captureRoomAndOffload,
                            onTogglePlacementMode = mainViewModel::togglePlacementMode,
                            onPlaceHotspot = mainViewModel::placeHotspot,
                            onConnectWifiAndProbe = mainViewModel::connectThetaWifiAndProbe,
                            onBindExistingWifiAndProbe = mainViewModel::bindExistingWifiAndProbe,
                            onDisconnectWifi = mainViewModel::disconnectThetaWifi,
                            onSwitchToViewer = { mainViewModel.setMode(AppMode.VIEWER) }
                        )
                    }
                }
            }
        }
    }
}
