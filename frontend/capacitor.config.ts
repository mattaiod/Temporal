import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.temporal.app',
  appName: 'Temporal',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  }
};

export default config;
