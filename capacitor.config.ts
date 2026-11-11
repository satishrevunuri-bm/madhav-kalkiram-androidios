import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kalkiram.app',
  appName: 'Trisandhya - Bhavishya Malika - Kalkiram',
  webDir: 'www',
  plugins: {
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#fcfaf5'
    }
  },
  android: {
    adjustMarginsForEdgeToEdge: 'auto'
  }
};

export default config;
