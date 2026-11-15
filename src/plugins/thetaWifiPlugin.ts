import { Capacitor, registerPlugin } from '@capacitor/core';

export interface ThetaWifiConnectOptions {
  ssid?: string;
  password?: string;
  timeoutMs?: number;
}

export interface ThetaWifiStatus {
  connected: boolean;
  ssid?: string;
  boundToNetwork?: boolean;
  platform: 'android' | 'ios' | 'web';
  message?: string;
}

export interface ThetaWifiPlugin {
  connectToThetaWifi(options?: ThetaWifiConnectOptions): Promise<ThetaWifiStatus>;
  disconnectFromThetaWifi(): Promise<{ disconnected: boolean }>;
  getConnectionStatus(): Promise<ThetaWifiStatus>;
}

const DEFAULT_THETA_SSID = 'THETAYP20120960.OSC';
const DEFAULT_THETA_PASSWORD = '120960';

const NativeThetaWifi = registerPlugin<ThetaWifiPlugin>('ThetaWifi', {
  web: async () => ({
    async connectToThetaWifi(options?: ThetaWifiConnectOptions): Promise<ThetaWifiStatus> {
      const ssid = options?.ssid ?? DEFAULT_THETA_SSID;
      return {
        connected: false,
        ssid,
        boundToNetwork: false,
        platform: 'web',
        message:
          'Web browser cannot bind to camera Wi-Fi programmatically. Use Mock Theta mode or run on Android.'
      };
    },
    async disconnectFromThetaWifi(): Promise<{ disconnected: boolean }> {
      return { disconnected: true };
    },
    async getConnectionStatus(): Promise<ThetaWifiStatus> {
      return {
        connected: false,
        boundToNetwork: false,
        platform: 'web',
        message: 'Running in web environment.'
      };
    }
  })
});

export const thetaWifiPlugin: ThetaWifiPlugin = {
  async connectToThetaWifi(options?: ThetaWifiConnectOptions): Promise<ThetaWifiStatus> {
    const resolvedOptions: ThetaWifiConnectOptions = {
      ssid: options?.ssid ?? DEFAULT_THETA_SSID,
      password: options?.password ?? DEFAULT_THETA_PASSWORD,
      timeoutMs: options?.timeoutMs ?? 20000
    };
    return NativeThetaWifi.connectToThetaWifi(resolvedOptions);
  },

  async disconnectFromThetaWifi(): Promise<{ disconnected: boolean }> {
    return NativeThetaWifi.disconnectFromThetaWifi();
  },

  async getConnectionStatus(): Promise<ThetaWifiStatus> {
    if (!Capacitor.isNativePlatform()) {
      return {
        connected: false,
        boundToNetwork: false,
        platform: 'web',
        message: 'Web fallback active'
      };
    }
    return NativeThetaWifi.getConnectionStatus();
  }
};

export { DEFAULT_THETA_SSID, DEFAULT_THETA_PASSWORD };
