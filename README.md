# Kalkiram Mobile Application
> Sacred Bhavishya Malika Guidance & Daily Trisandhya Prayers (125+ Languages)

An Ionic / Capacitor / Angular mobile application developed for **Viśva Sanātana Dharma Sevā Ṭrusṭ** ([kalkiram.com](https://kalkiram.com)).

---

## 🌟 Features
- **Trisandhya Timings & Alerts**: Daily dawn, noon, and dusk spiritual prayer timings and alerts.
- **Multilingual Bhavishya Malika Reader**: Offline PDF reading and online streaming across 125+ world languages.
- **Audio Recitations**: High-quality audio prayers with built-in player and background playback.
- **Divine Principles (Sanātana Dharma)**: Guidance on *Satya* (Truth), *Kṣamā* (Forgiveness), *Dayā* (Kindness), *Śānti* (Peace), and *Prema* (Love).
- **100% Free & Privacy Focused**: No advertisements, no tracking, and no user data collection.

---

## 📱 Technical Stack
- **Frontend Framework**: [Angular 21](https://angular.dev/) + [Ionic 9](https://ionicframework.com/)
- **Mobile Engine**: [Capacitor 8](https://capacitorjs.com/)
- **Native Platform**: Android (minSdkVersion 24, targetSdkVersion 36)
- **Application ID**: `com.kalkiram.app`

---

## 🛠️ Development & Build Commands

### 1. Web Build
```bash
npm install
npm run build
```

### 2. Capacitor Sync
```bash
npx cap sync android
```

### 3. Build Signed Android App Bundle (.aab)
```powershell
cd android
$env:JAVA_HOME = "C:\Users\<user>\.jdks\jbr-21.0.11"
.\gradlew.bat bundleRelease
```
The signed `.aab` will be generated at:
`android/app/build/outputs/bundle/release/app-release.aab`

---

## 📦 Google Play Store Assets
All assets required for publishing to the Google Play Store are ready in [`playstore_assets/`](./playstore_assets):
- `app-release.aab`: Production Android App Bundle signed with release keystore
- `playstore_icon_512.png`: 512x512 px store icon
- `feature_graphic_1024x500.png`: 1024x500 px store banner
- `store_screenshot_1.png` & `store_screenshot_2.png`: Phone store screenshots

---

## 🌐 Privacy Policy on GitHub Pages
The official Privacy Policy is located in the [`docs/`](./docs) folder:
- **File**: [`docs/index.html`](./docs/index.html)
- **GitHub Pages Setup**:
  1. Go to repository **Settings > Pages**
  2. Under *Branch*, select `main` and folder `/docs`
  3. Click **Save**
  4. The live URL will be: `https://<username>.github.io/<repo-name>/`
  5. Use this URL in Google Play Console's Privacy Policy field.

---

## ⚖️ License & Organization
Developed and maintained by **Viśva Sanātana Dharma Sevā Ṭrusṭ**.  
Website: [https://kalkiram.com](https://kalkiram.com)