import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'MiCalculadora',
  webDir: 'www',
  android: {
    backgroundColor: '#FFFFFF',
    allowMixedContent: true,
    captureInput: true,
    initialFocus: true
  }
};

export default config;
