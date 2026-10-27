import { TickerItem } from '../components/scrolling-ticker/scrolling-ticker';

// Base Devanagari Gems
const devanagariGems: TickerItem[] = [
    { text: 'Truth', gemColor: '#ffffff' },
  { text: 'Forgiveness', gemColor: '#ff2a2a' },
  { text: 'Kindness', gemColor: '#e5f728' },
  { text: 'Peace', gemColor: '#00cc00' },
  { text: 'Love', gemColor: '#00bfff' },
  { text: 'सत्य', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शान्ति', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }
];

// 1. GEMS TICKER DATA
// To maintain your pattern of alternating Devanagari with other languages, 
// we construct the array by spreading the Devanagari array before each new language.
export const allGemsItems: TickerItem[] = [
  
  ...devanagariGems,
  // Russian
  { text: 'Правда', gemColor: '#ffffff' },
  { text: 'Прощение', gemColor: '#ff2a2a' },
  { text: 'Доброта', gemColor: '#e5f728' },
  { text: 'Мир', gemColor: '#00cc00' },
  { text: 'Любовь', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Spanish
  { text: 'Verdad', gemColor: '#ffffff' },
  { text: 'Perdón', gemColor: '#ff2a2a' },
  { text: 'Amabilidad', gemColor: '#e5f728' },
  { text: 'Paz', gemColor: '#00cc00' },
  { text: 'Amor', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // French
  { text: 'Vérité', gemColor: '#ffffff' },
  { text: 'Pardon', gemColor: '#ff2a2a' },
  { text: 'Bonté', gemColor: '#e5f728' },
  { text: 'Paix', gemColor: '#00cc00' },
  { text: 'Amour', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // German
  { text: 'Wahrheit', gemColor: '#ffffff' },
  { text: 'Vergebung', gemColor: '#ff2a2a' },
  { text: 'Güte', gemColor: '#e5f728' },
  { text: 'Frieden', gemColor: '#00cc00' },
  { text: 'Liebe', gemColor: '#00bfff' }, // Love

  // --- IMPORTANT EUROPEAN LANGUAGES ---

  ...devanagariGems,
  // Italian
  { text: 'Verità', gemColor: '#ffffff' },
  { text: 'Perdono', gemColor: '#ff2a2a' },
  { text: 'Gentilezza', gemColor: '#e5f728' },
  { text: 'Pace', gemColor: '#00cc00' },
  { text: 'Amore', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Portuguese
  { text: 'Verdade', gemColor: '#ffffff' },
  { text: 'Perdão', gemColor: '#ff2a2a' },
  { text: 'Bondade', gemColor: '#e5f728' },
  { text: 'Paz', gemColor: '#00cc00' },
  { text: 'Amor', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Dutch
  { text: 'Waarheid', gemColor: '#ffffff' },
  { text: 'Vergeving', gemColor: '#ff2a2a' },
  { text: 'Goedheid', gemColor: '#e5f728' },
  { text: 'Vrede', gemColor: '#00cc00' },
  { text: 'Liefde', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Polish
  { text: 'Prawda', gemColor: '#ffffff' },
  { text: 'Przebaczenie', gemColor: '#ff2a2a' },
  { text: 'Dobroć', gemColor: '#e5f728' },
  { text: 'Pokój', gemColor: '#00cc00' },
  { text: 'Miłość', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Greek
  { text: 'Αλήθεια', gemColor: '#ffffff' },
  { text: 'Συγχώρεση', gemColor: '#ff2a2a' },
  { text: 'Καλοσύνη', gemColor: '#e5f728' },
  { text: 'Ειρήνη', gemColor: '#00cc00' },
  { text: 'Αγάπη', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Swedish
  { text: 'Sanning', gemColor: '#ffffff' },
  { text: 'Förlåtelse', gemColor: '#ff2a2a' },
  { text: 'Vänlighet', gemColor: '#e5f728' },
  { text: 'Fred', gemColor: '#00cc00' },
  { text: 'Kärlek', gemColor: '#00bfff' }, // Love

  // --- ALL 26 INDIAN LANGUAGES ---

  ...devanagariGems,
  // Hindi (Devanagari)
  { text: 'सत्य', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शान्ति', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Bengali
  { text: 'সত্য', gemColor: '#ffffff' },
  { text: 'ক্ষমা', gemColor: '#ff2a2a' },
  { text: 'দয়া', gemColor: '#e5f728' },
  { text: 'শান্তি', gemColor: '#00cc00' },
  { text: 'প্রেম', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Telugu
  { text: 'సత్యం', gemColor: '#ffffff' },
  { text: 'క్షమ', gemColor: '#ff2a2a' },
  { text: 'దయ', gemColor: '#e5f728' },
  { text: 'శాంతి', gemColor: '#00cc00' },
  { text: 'ప్రేమ', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Marathi (Devanagari)
  { text: 'सत्य', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शांती', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Tamil
  { text: 'உண்மை', gemColor: '#ffffff' },
  { text: 'மன்னிப்பு', gemColor: '#ff2a2a' },
  { text: 'கருணை', gemColor: '#e5f728' },
  { text: 'அமைதி', gemColor: '#00cc00' },
  { text: 'அன்பு', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Urdu
  { text: 'سچ', gemColor: '#ffffff' },
  { text: 'معافی', gemColor: '#ff2a2a' },
  { text: 'مہربانی', gemColor: '#e5f728' },
  { text: 'امن', gemColor: '#00cc00' },
  { text: 'محبت', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Gujarati
  { text: 'સત્ય', gemColor: '#ffffff' },
  { text: 'ક્ષમા', gemColor: '#ff2a2a' },
  { text: 'દયા', gemColor: '#e5f728' },
  { text: 'શાંતિ', gemColor: '#00cc00' },
  { text: 'પ્રેમ', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Kannada
  { text: 'ಸತ್ಯ', gemColor: '#ffffff' },
  { text: 'ಕ್ಷಮೆ', gemColor: '#ff2a2a' },
  { text: 'ದಯೆ', gemColor: '#e5f728' },
  { text: 'ಶಾಂತಿ', gemColor: '#00cc00' },
  { text: 'ಪ್ರೀತಿ', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Malayalam
  { text: 'സത്യം', gemColor: '#ffffff' },
  { text: 'ക്ഷമ', gemColor: '#ff2a2a' },
  { text: 'ദയ', gemColor: '#e5f728' },
  { text: 'ശാന്തി', gemColor: '#00cc00' },
  { text: 'സ്നേഹം', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Odia
  { text: 'ସତ୍ୟ', gemColor: '#ffffff' },
  { text: 'କ୍ଷମା', gemColor: '#ff2a2a' },
  { text: 'ଦୟା', gemColor: '#e5f728' },
  { text: 'ଶାନ୍ତି', gemColor: '#00cc00' },
  { text: 'ପ୍ରେମ', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Punjabi (Gurmukhi)
  { text: 'ਸੱਚ', gemColor: '#ffffff' },
  { text: 'ਮੁਆਫੀ', gemColor: '#ff2a2a' },
  { text: 'ਦਇਆ', gemColor: '#e5f728' },
  { text: 'ਸ਼ਾਂਤੀ', gemColor: '#00cc00' },
  { text: 'ਪ੍ਰੇਮ', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Assamese
  { text: 'সত্য', gemColor: '#ffffff' },
  { text: 'ক্ষমা', gemColor: '#ff2a2a' },
  { text: 'দয়া', gemColor: '#e5f728' },
  { text: 'শান্তি', gemColor: '#00cc00' },
  { text: 'প্ৰেম', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Maithili (Devanagari)
  { text: 'सत्य', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शांति', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Santali (Ol Chiki Translation)
  { text: 'ᱥᱟᱹᱨᱤ', gemColor: '#ffffff' },
  { text: 'ᱤᱠᱟᱹ', gemColor: '#ff2a2a' },
  { text: 'ᱫᱟᱭᱟ', gemColor: '#e5f728' },
  { text: 'ᱱᱤᱨᱟᱹᱭ', gemColor: '#00cc00' },
  { text: 'ᱫᱩᱞᱟᱹᱲ', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Kashmiri (Perso-Arabic)
  { text: 'پَزِر', gemColor: '#ffffff' },
  { text: 'معافی', gemColor: '#ff2a2a' },
  { text: 'رَحَم', gemColor: '#e5f728' },
  { text: 'اَمَن', gemColor: '#00cc00' },
  { text: 'محبت', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Nepali (Devanagari)
  { text: 'सत्य', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शान्ति', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Sindhi (Perso-Arabic)
  { text: 'سچ', gemColor: '#ffffff' },
  { text: 'معافي', gemColor: '#ff2a2a' },
  { text: 'رحم', gemColor: '#e5f728' },
  { text: 'امن', gemColor: '#00cc00' },
  { text: 'محبت', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Konkani (Devanagari)
  { text: 'सत्य', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शांती', gemColor: '#00cc00' },
  { text: 'मोग', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Dogri (Devanagari)
  { text: 'सच', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शांति', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Bodo (Devanagari)
  { text: 'सैथो', gemColor: '#ffffff' },
  { text: 'निमाहा', gemColor: '#ff2a2a' },
  { text: 'अननाय', gemColor: '#e5f728' },
  { text: 'गोजोन', gemColor: '#00cc00' },
  { text: 'मोजां मोननाय', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Manipuri / Meitei (Bengali Script)
  { text: 'অচুম্ব', gemColor: '#ffffff' },
  { text: 'ঙাকপিব', gemColor: '#ff2a2a' },
  { text: 'থৌজাল', gemColor: '#e5f728' },
  { text: 'ইংতপ', gemColor: '#00cc00' },
  { text: 'নুংশিবা', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Sanskrit (Devanagari)
  { text: 'सत्यम्', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शान्तिः', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Bhojpuri (Devanagari)
  { text: 'सत्य', gemColor: '#ffffff' },
  { text: 'क्षमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'शांति', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Rajasthani (Devanagari)
  { text: 'साच', gemColor: '#ffffff' },
  { text: 'छमा', gemColor: '#ff2a2a' },
  { text: 'दया', gemColor: '#e5f728' },
  { text: 'सांति', gemColor: '#00cc00' },
  { text: 'प्रेम', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Tulu (Kannada Script)
  { text: 'ಸತ್ಯ', gemColor: '#ffffff' },
  { text: 'ಕ್ಷಮೆ', gemColor: '#ff2a2a' },
  { text: 'ದಯೆ', gemColor: '#e5f728' },
  { text: 'ಶಾಂತಿ', gemColor: '#00cc00' },
  { text: 'ಪ್ರೇಮ', gemColor: '#00bfff' }, // Love

  ...devanagariGems,
  // Mizo (Latin)
  { text: 'Thudik', gemColor: '#ffffff' },
  { text: 'Ngaihdamna', gemColor: '#ff2a2a' },
  { text: 'Ngilneihna', gemColor: '#e5f728' },
  { text: 'Remna', gemColor: '#00cc00' },
  { text: 'Hmangaihna', gemColor: '#00bfff' } // Love
];

// 2. MADHAVA NAAM DATA
export const allMadhavaItems: TickerItem[] = [
  { text: 'माधव' }, // Devanagari
  { text: 'Madhava' }, // English
  { text: 'Мадхава' }, // Russian
  { text: 'Mádhava' }, // Spanish
  { text: 'Mādhava' }, // French // German
  { text: 'مادهافا' }, // Arabic
  { text: '马达瓦' }, // Chinese
  { text: 'マドハヴァ' }, // Japanese
  { text: '마드하바' }, // Korean
  { text: 'Madhawa' }, // Polish
  { text: 'Μάδχαβα' }, // Greek
  { text: 'מאדהאווה' }, // Hebrew
  { text: 'مادهاوا' }, // Persian
  { text: 'مادھوا' }, // Urdu
  { text: 'মাধব' }, // Bengali
  { text: 'માધવ' }, // Gujarati
  { text: 'ਮਾਧਵ' }, // Punjabi
  { text: 'ମାଧବ' }, // Odia
  { text: 'மாதவா' }, // Tamil
  { text: 'మాధవ' }, // Telugu
  { text: 'ಮಾಧವ' }, // Kannada
  { text: 'മാധവ' }, // Malayalam
  { text: 'මාධව' }, // Sinhala
  { text: 'มาธวะ' }, // Thai
  { text: 'မာဓဝ' }, // Burmese
  { text: 'ម៉ាដាវ៉ា' }, // Khmer
  { text: 'མ་དྷ་བ།' }, // Tibetan
  { text: 'ማድሃቫ' }, // Amharic
  { text: 'მადჰავა' }, // Georgian
  { text: 'Մադհավա' }, // Armenian
  { text: 'Мадхава' }, // Ukrainian
  { text: 'Madhava' }, // Zulu
  { text: 'مادھوا' }, // Sindhi
  { text: 'מאַדהאַוואַ' }, // Yiddish
  { text: 'ماداڤا' }, // Kurdish
  { text: 'مادھاۋا' }, // Uyghur
  { text: 'माधव' }, // Nepali
  { text: 'Madhava' }, // Albanian
  { text: 'ມາທະວະ' }, // Lao
  { text: 'މާދަވާ' }, // Dhivehi (Maldivian)
  { text: 'Мадхава' }, // Tatar
  { text: 'Madhava' }, // Uzbek
  { text: 'মাধৱ' }, // Assamese
  { text: 'माधव' }, // Hindi
  { text: 'মাধব' }, // Bengali
  { text: 'మాధవ' }, // Telugu
  { text: 'माधव' }, // Marathi
  { text: 'மாதவா' }, // Tamil
  { text: 'مادھو' }, // Urdu
  { text: 'માધવ' }, // Gujarati
  { text: 'ಮಾಧವ' }, // Kannada
  { text: 'മാധവ' }, // Malayalam
  { text: 'ମାଧବ' }, // Odia
  { text: 'ਮਾਧਵ' }, // Punjabi
  { text: 'মাধৱ' }, // Assamese
  { text: 'माधव' }, // Maithili
  { text: 'ᱢᱟᱫᱷᱚᱵ' }, // Santali
  { text: 'مادھو' }, // Kashmiri
  { text: 'ꯃꯥꯙꯕ' }, // Manipuri (Meitei)
  { text: 'ಮಾಧವ' }, // Tulu
  { text: 'Madhava' } // Mizo
];


// Base Devanagari Gems
const devangari_english_base_items: TickerItem[] = [
    { text: 'त्रिकाल संध्या - श्रीमद्भागवत महापुराण (नित्य पाठ)' }, // Devanagari Base
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Daily Read)' }
];
// 3. TRIKAL SANDHYA DATA
export const allTrikalItems: TickerItem[] = [
  // --- BASE & EXISTING LANGUAGES ---
  ...devangari_english_base_items,
  { text: 'Трикал Сандхья - Шримад Бхагаватам Махапурана (Ежедневное чтение)' }, // Russian
  ...devangari_english_base_items,
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Lectura Diaria)' }, // Spanish
  ...devangari_english_base_items,
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Lecture Quotidienne)' }, // French
  ...devangari_english_base_items,
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Tägliche Lesung)' }, // German
  ...devangari_english_base_items,

  // --- IMPORTANT EUROPEAN LANGUAGES ---
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Lettura Quotidiana)' }, // Italian
  ...devangari_english_base_items,
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Leitura Diária)' }, // Portuguese
  ...devangari_english_base_items,
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Dagelijkse Lezing)' }, // Dutch
  ...devangari_english_base_items,
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Codzienne Czytanie)' }, // Polish
  ...devangari_english_base_items,
  { text: 'Τρικαλ Σάνντια - Σριμάντ Μπαγκαβάτ Μαχαπουράν (Καθημερινή Ανάγνωση)' }, // Greek
  ...devangari_english_base_items,
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Daglig Läsning)' }, // Swedish
  ...devangari_english_base_items,

  // --- ALL 26 INDIAN LANGUAGES ---
  { text: 'ত্রিকাল সন্ধ্যা - শ্রীমদ্ভাগবত মহাপুরাণ (নিত্য পাঠ)' }, // Bengali
  ...devangari_english_base_items,
  { text: 'త్రికాల సంధ్య - శ్రీమద్భాగవత మహాపురాణం (నిత్య పారాయణం)' }, // Telugu
  ...devangari_english_base_items,
  { text: 'त्रिकाल संध्या - श्रीमद्भागवत महापुराण (नित्य पाठ)' }, // Marathi
  ...devangari_english_base_items,
  { text: 'திரிகால சந்தியா - ஸ்ரீமத்பாகவத மகாபுராணம் (தினசரி பாராயணம்)' }, // Tamil
  ...devangari_english_base_items,
  { text: 'تریکال سندھیا - شریمد بھاگوت مہاپُران (روزانہ تلاوت)' }, // Urdu
  ...devangari_english_base_items,
  { text: 'ત્રિકાલ સંધ્યા - શ્રીમદ્ભાગવત મહાપુરાણ (નિત્ય પાઠ)' }, // Gujarati
  ...devangari_english_base_items,
  { text: 'ತ್ರಿಕಾಲ ಸಂಧ್ಯಾ - ಶ್ರೀಮದ್ಭಾಗವತ ಮಹಾಪುರಾಣ (ನಿತ್ಯ ಪಾರಾಯಣ)' }, // Kannada
  ...devangari_english_base_items,
  { text: 'ത്രികാല സന്ധ്യ - ശ്രീമദ്ഭാഗവത മഹാപുരാണം (നിത്യ പാരായണം)' }, // Malayalam
  ...devangari_english_base_items,
  { text: 'ତ୍ରିକାଳ ସନ୍ଧ୍ୟା - ଶ୍ରୀମଦ୍ଭାଗବତ ମହାପୁରାଣ (ନିତ୍ୟ ପାଠ)' }, // Odia
  ...devangari_english_base_items,
  { text: 'ਤ੍ਰਿਕਾਲ ਸੰਧਿਆ - ਸ਼੍ਰੀਮਦ ਭਾਗਵਤ ਮਹਾਪੁਰਾਣ (ਰੋਜ਼ਾਨਾ ਪਾਠ)' }, // Punjabi
  ...devangari_english_base_items,
  { text: 'ত্ৰিকাল সন্ধ্যা - শ্ৰীমদ্ভাগৱত মহাপুৰাণ (নিত্য পাঠ)' }, // Assamese
  ...devangari_english_base_items,
  { text: 'त्रिकाल संध्या - श्रीमद्भागवत महापुराण (नित्य पाठ)' }, // Maithili
  ...devangari_english_base_items,
  { text: 'ᱛᱨᱤᱠᱟᱞ ᱥᱚᱸᱫᱷᱭᱟ - ᱥᱨᱤᱢᱚᱫᱽ ᱵᱷᱟᱜᱚᱵᱚᱛ ᱢᱚᱦᱟᱯᱩᱨᱟᱱ (ᱫᱤᱱᱟᱹᱢ ᱯᱟᱲᱦᱟᱣ)' }, // Santali
  ...devangari_english_base_items,
  { text: 'تریکال سَندھیا - شریمد بھاگوت مہاپُران (روزانہ پرُن)' }, // Kashmiri
  ...devangari_english_base_items,
  { text: 'त्रिकाल सन्ध्या - श्रीमद्भागवत महापुराण (नित्य पाठ)' }, // Nepali
  { text: 'تريڪال سنديا - شريمَد ڀاڳوت مهاپُران (روزاني پڙهڻي)' }, // Sindhi
  ...devangari_english_base_items,
  { text: 'त्रिकाल संध्या - श्रीमद्भागवत महापुराण (नित्य पाठ)' }, // Konkani
  ...devangari_english_base_items,
  { text: 'त्रिकाल संध्या - श्रीमद्भागवत महापुराण (नित पाठ)' }, // Dogri
  ...devangari_english_base_items,
  { text: 'त्रिकाल सन्धिया - श्रीमद्भागवत महापुराण (सानफ्रोमबो फरायनाय)' }, // Bodo
  ...devangari_english_base_items,
  { text: 'ত্রিকাল সন্ধ্যা - শ্রীমদ্ভাগবত মহাপুরাণ (নোংমগী পাবা)' }, // Manipuri (Meitei)
  ...devangari_english_base_items,
  { text: 'त्रिकालसन्ध्या - श्रीमद्भागवतमहापुराणम् (नित्यपाठः)' }, // Sanskrit
  ...devangari_english_base_items,
  { text: 'त्रिकाल संध्या - श्रीमद्भागवत महापुराण (नित पाठ)' }, // Bhojpuri
  ...devangari_english_base_items,
  { text: 'त्रिकाल संध्या - श्रीमद्भागवत महापुराण (नित पाठ)' }, // Rajasthani
  ...devangari_english_base_items,
  { text: 'ತ್ರಿಕಾಲ ಸಂಧ್ಯಾ - ಶ್ರೀಮದ್ಭಾಗವತ ಮಹಾಪುರಾಣ (ನಿತ್ಯ ಪಾರಾಯಣ)' }, // Tulu
  ...devangari_english_base_items,
  { text: 'Trikal Sandhya - Srimad Bhagavat Mahapuran (Nitin Chhiar Tur)' } // Mizo
  
];