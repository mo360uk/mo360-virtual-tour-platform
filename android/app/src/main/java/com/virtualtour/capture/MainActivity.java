package com.virtualtour.capture;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(ThetaWifiPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
