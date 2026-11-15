package com.virtualtour.capture.services

import android.content.Context
import android.net.ConnectivityManager
import android.net.LinkProperties
import android.net.Network
import android.net.NetworkCapabilities
import android.net.NetworkRequest
import android.net.wifi.WifiNetworkSpecifier
import android.os.Build
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.suspendCancellableCoroutine
import java.net.Inet4Address
import kotlin.coroutines.resume

data class ThetaWifiStatus(
    val connected: Boolean = false,
    val ssid: String = "",
    val boundToNetwork: Boolean = false,
    val isConnecting: Boolean = false,
    val message: String = "Ready to connect to THETA AP"
)

class ThetaWifiManager(context: Context) {

    companion object {
        const val DEFAULT_THETA_SSID = "THETAYR"
        const val DEFAULT_THETA_PASSWORD = ""
    }

    private val appContext = context.applicationContext
    private val connectivityManager =
        appContext.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager

    private var networkCallback: ConnectivityManager.NetworkCallback? = null

    @Volatile
    var activeNetwork: Network? = null
        private set

    private val _status = MutableStateFlow(ThetaWifiStatus())
    val status: StateFlow<ThetaWifiStatus> = _status.asStateFlow()

    /**
     * Finds any currently connected Wi-Fi Network on the device—prioritizing a Wi-Fi network
     * on the 192.168.1.x / 192.168.x.x camera subnet (even if Android marked it as having
     * no internet, which normally causes Android to route 192.168.1.1 over Cellular and
     * trigger "Failed to fetch" / ConnectException).
     *
     * Returns the bound Wi-Fi Network if found, or null if no Wi-Fi network is active.
     */
    @Suppress("DEPRECATION")
    fun bindExistingWifiForCamera(targetHost: String = "192.168.1.1"): Network? {
        activeNetwork?.let { existing ->
            val caps = connectivityManager.getNetworkCapabilities(existing)
            if (caps != null && caps.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) {
                runCatching { connectivityManager.bindProcessToNetwork(existing) }
                return existing
            }
        }

        val wifiNetworks = connectivityManager.allNetworks.mapNotNull { net ->
            val caps = connectivityManager.getNetworkCapabilities(net) ?: return@mapNotNull null
            if (!caps.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) return@mapNotNull null
            val linkProps = connectivityManager.getLinkProperties(net)
            net to linkProps
        }

        if (wifiNetworks.isEmpty()) return null

        // Prefer a Wi-Fi network whose gateway or local IPv4 address matches the camera subnet (192.168.1.x)
        val targetPrefix = targetHost.substringBeforeLast('.', "")
        val bestMatch = wifiNetworks.firstOrNull { (_, lp) ->
            matchesSubnet(lp, targetPrefix)
        } ?: wifiNetworks.firstOrNull { (_, lp) ->
            // Secondary preference: Wi-Fi with no internet (typical camera SoftAP)
            val net = wifiNetworks.first { it.second == lp }.first
            val caps = connectivityManager.getNetworkCapabilities(net)
            caps != null && !caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED)
        } ?: wifiNetworks.first()

        val selectedNetwork = bestMatch.first
        activeNetwork = selectedNetwork
        runCatching { connectivityManager.bindProcessToNetwork(selectedNetwork) }

        val localIp = bestMatch.second?.linkAddresses
            ?.firstOrNull { it.address is Inet4Address }
            ?.address?.hostAddress
            ?: "Wi-Fi"

        _status.value = ThetaWifiStatus(
            connected = true,
            ssid = "Wi-Fi ($localIp)",
            boundToNetwork = true,
            isConnecting = false,
            message = "Bound to active Wi-Fi interface ($localIp) for $targetHost"
        )
        return selectedNetwork
    }

    private fun matchesSubnet(lp: LinkProperties?, prefix: String): Boolean {
        if (lp == null || prefix.isBlank()) return false
        val hasMatchingRoute = lp.routes.any { route ->
            route.gateway?.hostAddress?.startsWith("$prefix.") == true
        }
        val hasMatchingAddress = lp.linkAddresses.any { la ->
            la.address is Inet4Address && la.address.hostAddress?.startsWith("$prefix.") == true
        }
        return hasMatchingRoute || hasMatchingAddress
    }

    suspend fun connectToThetaWifi(
        ssid: String,
        password: String,
        timeoutMs: Int = 20_000
    ): ThetaWifiStatus {
        val resolvedSsid = ssid.trim()
        val resolvedPass = password.trim()

        if (resolvedSsid.isEmpty()) {
            // Try binding to already-connected Wi-Fi first
            val existing = bindExistingWifiForCamera()
            if (existing != null) {
                return _status.value
            }
            val missing = ThetaWifiStatus(
                connected = false,
                ssid = "",
                boundToNetwork = false,
                isConnecting = false,
                message = "Enter your RICOH THETA X Wi-Fi SSID (e.g. THETAYRxxxxxxxx.OSC) or connect in Android Wi-Fi settings."
            )
            _status.value = missing
            return missing
        }

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
            val existing = bindExistingWifiForCamera()
            if (existing != null) return _status.value
            val errStatus = ThetaWifiStatus(
                connected = false,
                ssid = resolvedSsid,
                boundToNetwork = false,
                isConnecting = false,
                message = "WifiNetworkSpecifier requires Android 10 (API 29) or higher."
            )
            _status.value = errStatus
            return errStatus
        }

        releaseNetworkBinding()
        _status.value = ThetaWifiStatus(
            connected = false,
            ssid = resolvedSsid,
            boundToNetwork = false,
            isConnecting = true,
            message = "Requesting Wi-Fi link to $resolvedSsid…"
        )

        return suspendCancellableCoroutine { continuation ->
            try {
                val specifierBuilder = WifiNetworkSpecifier.Builder()
                    .setSsid(resolvedSsid)
                if (resolvedPass.isNotEmpty()) {
                    specifierBuilder.setWpa2Passphrase(resolvedPass)
                }

                val request = NetworkRequest.Builder()
                    .addTransportType(NetworkCapabilities.TRANSPORT_WIFI)
                    .removeCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
                    .setNetworkSpecifier(specifierBuilder.build())
                    .build()

                val callback = object : ConnectivityManager.NetworkCallback() {
                    override fun onAvailable(network: Network) {
                        super.onAvailable(network)
                        activeNetwork = network
                        connectivityManager.bindProcessToNetwork(network)
                        val ok = ThetaWifiStatus(
                            connected = true,
                            ssid = resolvedSsid,
                            boundToNetwork = true,
                            isConnecting = false,
                            message = "Bound process to THETA Wi-Fi ($resolvedSsid)"
                        )
                        _status.value = ok
                        if (continuation.isActive) {
                            continuation.resume(ok)
                        }
                    }

                    override fun onUnavailable() {
                        super.onUnavailable()
                        releaseNetworkBinding()
                        val fail = ThetaWifiStatus(
                            connected = false,
                            ssid = resolvedSsid,
                            boundToNetwork = false,
                            isConnecting = false,
                            message = "Unable to connect to $resolvedSsid. Ensure camera Wi-Fi AP is active and password is correct."
                        )
                        _status.value = fail
                        if (continuation.isActive) {
                            continuation.resume(fail)
                        }
                    }

                    override fun onLost(network: Network) {
                        super.onLost(network)
                        if (activeNetwork == network) {
                            runCatching { connectivityManager.bindProcessToNetwork(null) }
                            activeNetwork = null
                            _status.value = ThetaWifiStatus(
                                connected = false,
                                ssid = "",
                                boundToNetwork = false,
                                isConnecting = false,
                                message = "THETA Wi-Fi connection lost."
                            )
                        }
                    }
                }

                networkCallback = callback
                connectivityManager.requestNetwork(request, callback, timeoutMs)

                continuation.invokeOnCancellation {
                    releaseNetworkBinding()
                }
            } catch (e: Exception) {
                releaseNetworkBinding()
                val fail = ThetaWifiStatus(
                    connected = false,
                    ssid = resolvedSsid,
                    boundToNetwork = false,
                    isConnecting = false,
                    message = "Wi-Fi request failed: ${e.message ?: "Unknown error"}"
                )
                _status.value = fail
                if (continuation.isActive) {
                    continuation.resume(fail)
                }
            }
        }
    }

    fun disconnectFromThetaWifi() {
        releaseNetworkBinding()
        _status.value = ThetaWifiStatus(
            connected = false,
            ssid = "",
            boundToNetwork = false,
            isConnecting = false,
            message = "Disconnected from THETA AP"
        )
    }

    private fun releaseNetworkBinding() {
        runCatching { connectivityManager.bindProcessToNetwork(null) }
        networkCallback?.let { cb ->
            runCatching { connectivityManager.unregisterNetworkCallback(cb) }
        }
        networkCallback = null
        activeNetwork = null
    }
}
