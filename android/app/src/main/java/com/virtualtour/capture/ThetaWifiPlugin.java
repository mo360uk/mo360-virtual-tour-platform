package com.virtualtour.capture;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.NetworkRequest;
import android.net.wifi.WifiNetworkSpecifier;
import android.os.Build;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ThetaWifi")
public class ThetaWifiPlugin extends Plugin {

    private static final String DEFAULT_SSID = "THETAYP20120960.OSC";
    private static final String DEFAULT_PASSWORD = "120960";

    private ConnectivityManager connectivityManager;
    private ConnectivityManager.NetworkCallback networkCallback;
    private Network activeNetwork;
    private String connectedSsid;

    @PluginMethod
    public void connectToThetaWifi(PluginCall call) {
        String ssid = call.getString("ssid", DEFAULT_SSID);
        String password = call.getString("password", DEFAULT_PASSWORD);
        int timeoutMs = call.getInt("timeoutMs", 20000);

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
            call.reject("WifiNetworkSpecifier requires Android 10 (API 29) or higher.");
            return;
        }

        ConnectivityManager cm = (ConnectivityManager) getContext().getSystemService(Context.CONNECTIVITY_SERVICE);
        connectivityManager = cm;

        // Clean up any prior callback before requesting a new network
        releaseNetworkBinding(cm);

        WifiNetworkSpecifier specifier = new WifiNetworkSpecifier.Builder()
                .setSsid(ssid)
                .setWpa2Passphrase(password)
                .build();

        NetworkRequest request = new NetworkRequest.Builder()
                .addTransportType(NetworkCapabilities.TRANSPORT_WIFI)
                .removeCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
                .setNetworkSpecifier(specifier)
                .build();

        ConnectivityManager.NetworkCallback callback = new ConnectivityManager.NetworkCallback() {
            @Override
            public void onAvailable(Network network) {
                super.onAvailable(network);
                activeNetwork = network;
                connectedSsid = ssid;
                cm.bindProcessToNetwork(network);

                JSObject result = new JSObject();
                result.put("connected", true);
                result.put("ssid", ssid);
                result.put("boundToNetwork", true);
                result.put("platform", "android");
                result.put("message", "Bound process to THETA Wi-Fi (" + ssid + ")");
                call.resolve(result);
            }

            @Override
            public void onUnavailable() {
                super.onUnavailable();
                releaseNetworkBinding(cm);
                call.reject("Unable to connect to THETA Wi-Fi (" + ssid + "). Ensure camera Wi-Fi is on.");
            }

            @Override
            public void onLost(Network network) {
                super.onLost(network);
                if (activeNetwork != null && activeNetwork.equals(network)) {
                    cm.bindProcessToNetwork(null);
                    activeNetwork = null;
                    connectedSsid = null;
                }
            }
        };

        networkCallback = callback;
        cm.requestNetwork(request, callback, timeoutMs);
    }

    @PluginMethod
    public void disconnectFromThetaWifi(PluginCall call) {
        ConnectivityManager cm = connectivityManager != null ? connectivityManager
                : (ConnectivityManager) getContext().getSystemService(Context.CONNECTIVITY_SERVICE);
        releaseNetworkBinding(cm);

        JSObject result = new JSObject();
        result.put("disconnected", true);
        call.resolve(result);
    }

    @PluginMethod
    public void getConnectionStatus(PluginCall call) {
        JSObject result = new JSObject();
        result.put("connected", activeNetwork != null);
        result.put("ssid", connectedSsid != null ? connectedSsid : "");
        result.put("boundToNetwork", activeNetwork != null);
        result.put("platform", "android");
        call.resolve(result);
    }

    private void releaseNetworkBinding(ConnectivityManager cm) {
        if (cm != null) {
            cm.bindProcessToNetwork(null);
            if (networkCallback != null) {
                try {
                    cm.unregisterNetworkCallback(networkCallback);
                } catch (IllegalArgumentException ignored) {
                }
            }
        }
        networkCallback = null;
        activeNetwork = null;
        connectedSsid = null;
    }
}
