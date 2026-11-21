const text1 = `<en-US>
Welcome to Trisandhya - Kalkiram (v1.0.11)!

• Daily Trikala Sandhya prayers, timings & audio recitations (now with direct download).
• Sacred Bhavishya Malika scriptures and Trisandhya in 125+ regional & global languages.
• Refined prayer texts & slokas across all translations.
• Distraction-free, built-in offline reading with smooth viewer.
• 100% free, purely devotional, zero ads, zero data collection.

॥ Jaya Śrī Mādhava ॥
</en-US>`;

const text2 = `<en-US>
Trisandhya - Kalkiram (v1.0.11 Updates):

• Direct Audio Download: Save master audio recitations directly to device.
• Refined Prayers: Perfected slokas and texts across all 125+ languages.
• Sacred Scriptures: Bhavishya Malika & Trikala Sandhya in 125+ global languages.
• Authentic Timings & Offline Viewer: Distraction-free spiritual contemplation.
• 100% Free: Purely devotional, zero ads, zero personal data collection.

॥ Jaya Śrī Mādhava ॥
</en-US>`;

console.log('Variant 1 (Total/Inner):', text1.length, text1.replace(/<\/?en-US>/g, '').trim().length);
console.log('Variant 2 (Total/Inner):', text2.length, text2.replace(/<\/?en-US>/g, '').trim().length);
