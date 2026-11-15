package com.virtualtour.capture.plugins

import android.content.Context
import android.net.ConnectivityManager
import android.net.Network
import android.net.NetworkCapabilities
import android.net.NetworkRequest
import android.net.wifi.WifiNetworkSpecifier
import android.os.Build
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "ThetaWifi")
class ThetaWifiPlugin : Plugin() {

    private var connectivityManager: ConnectivityManager? = null
    private var networkCallback: ConnectivityManager.NetworkCallback? = null
    private var activeNetwork: Network? = null
    private var connectedSsid: String? = null

    @PluginMethod
    fun connectToThetaWifi(call: PluginCall) {
        val ssid = call.getString("ssid") ?: DEFAULT_SSID
        val password = call.getString("password") ?: DEFAULT_PASSWORD
        val timeoutMs = call.getInt("timeoutMs") ?: 20000

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
            call.reject("WifiNetworkSpecifier requires Android 10 (API 29) or higher.")
            return
        }

        val cm = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        connectivityManager = cm

        // Clean up any prior callback before requesting a new network
        releaseNetworkBinding(cm)

        val specifier = WifiNetworkSpecifier.Builder()
            .setSsid(ssid)
            .setWpa2Passphrase(password)
            .build()

        val request = NetworkRequest.Builder()
            .addTransportType(NetworkCapabilities.TRANSPORT_WIFI)
            .removeCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
            .setNetworkSpecifier(specifier)
            .build()

        val callback = object : ConnectivityManager.NetworkCallback() {
            override fun onAvailable(network: Network) {
                super.onAvailable(network)
                activeNetwork = network
                connectedSsid = ssid
                cm.bindProcessToNetwork(network)

                val result = JSObject().apply {
                    put("connected", true)
                    put("ssid", ssid)
                    put("boundToNetwork", true)
                    put("platform", "android")
                    put("message", "Bound process to THETA Wi-Fi ($ssid)")
                }
                call.resolve(result)
            }

            override fun onUnavailable() {
                super.onUnavailable()
                releaseNetworkBinding(cm)
                call.reject("Unable to connect to THETA Wi-Fi ($ssid). Ensure camera Wi-Fi is on.")
            }

            override fun onLost(network: Network) {
                super.onLost(network)
                if (activeNetwork == network) {
                    cm.bindProcessToNetwork(null)
                    activeNetwork = null
                    connectedSsid = null
                }
            }
        }

        networkCallback = callback
        cm.requestNetwork(request, callback, timeoutMs)
    }

    @PluginMethod
    fun disconnectFromThetaWifi(call: PluginCall) {
        val cm = connectivityManager
            ?: (context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager)
        releaseNetworkBinding(cm)

        val result = JSObject().apply {
            put("disconnected", true)
        }
        call.resolve(result)
    }

    @PluginMethod
    fun getConnectionStatus(call: PluginCall) {
        val result = JSObject().apply {
            put("connected", activeNetwork != null)
            put("ssid", connectedSsid)
            put("boundToNetwork", activeNetwork != null)
            put("platform", "android")
        }
        call.resolve(result)
    }

    private fun releaseNetworkBinding(cm: ConnectivityManager) {
        cm.bindProcessToNetwork(null)
        networkCallback?.let {
            try {
                cm.unregisterNetworkCallback(it)
            } catch (_: IllegalArgumentException) {
                // Callback was already unregistered
            }
        }
        networkCallback = null
        activeNetwork = null
        connectedSsid = null
    }

    companion object {
        private const val DEFAULT_SSID = "THETAYP20120960.OSC"
        private const val DEFAULT_PASSWORD = "120960"
    }
}
