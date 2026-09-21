import { SupportedLanguage } from '../../types';

export interface TranslationDictionary {
  tagline: string;
  exploreCrafts: string;
  verifyCraft: string;
  meetArtisans: string;
  everyCraftStory: string;
  discoverDesc: string;
  giVerified: string;
  allStates: string;
  marketplace: string;
  wishlist: string;
  cart: string;
  digitalLocker: string;
}

export const CULTURAL_TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    tagline: 'Every Craft Has a Story.',
    exploreCrafts: 'Explore Crafts',
    verifyCraft: 'Verify a Craft',
    meetArtisans: 'Meet the Artisans',
    everyCraftStory: 'Every Craft Has a Story.',
    discoverDesc: "Discover the hands, heritage, and sacred journey behind India's most celebrated handcrafted traditions.",
    giVerified: 'GI Verified Authenticity',
    allStates: 'Explore All States',
    marketplace: 'Marketplace',
    wishlist: 'My Varnam Wishlist',
    cart: 'Shopping Bag',
    digitalLocker: 'Digital Certificate Locker'
  },
  ta: {
    tagline: 'ஒவ்வொரு கலைக்கும் ஒரு கதை உண்டு.',
    exploreCrafts: 'கைவினைப் பொருட்களைக் காண்க',
    verifyCraft: 'உண்மையை சரிபார்க்கவும்',
    meetArtisans: 'கைவினை மாஸ்டர்களை சந்திக்கவும்',
    everyCraftStory: 'ஒவ்வொரு கலைக்கும் ஒரு கதை உண்டு.',
    discoverDesc: 'இந்தியாவின் தலைசிறந்த கைவினை மரபுகள் மற்றும் தலைமுறை விஸ்வகர்மாக்களின் புனித பயணத்தைக் கண்டறியவும்.',
    giVerified: 'புவிசார் குறியீடு (GI) சரிபார்க்கப்பட்டது',
    allStates: 'அனைத்து மாநிலங்களையும் ஆராய்க',
    marketplace: 'சந்தை',
    wishlist: 'எனது விருப்பப்பட்டியல்',
    cart: 'பை',
    digitalLocker: 'டிஜிட்டல் சான்றிதழ் பெட்டகம்'
  },
  hi: {
    tagline: 'हर शिल्प की अपनी एक कहानी है।',
    exploreCrafts: 'शिल्प देखें',
    verifyCraft: 'शिल्प प्रमाणित करें',
    meetArtisans: 'शिल्पकारों से मिलें',
    everyCraftStory: 'हर शिल्प की अपनी एक कहानी है।',
    discoverDesc: 'भारत की सबसे गौरवशाली हस्तशिल्प परंपराओं के पीछे के हाथों, विरासत और आध्यात्मिक यात्रा की खोज करें।',
    giVerified: 'जीआई प्रमाणित प्रामाणिकता',
    allStates: 'सभी राज्य खोजें',
    marketplace: 'बाज़ार',
    wishlist: 'मेरी वर्णम सूची',
    cart: 'थैला',
    digitalLocker: 'डिजिटल प्रमाणपत्र लॉकर'
  },
  te: {
    tagline: 'ప్రతి కళకూ ఒక కథ ఉంది.',
    exploreCrafts: 'హస్తకళలను అన్వేషించండి',
    verifyCraft: 'కళను ధృవీకరించండి',
    meetArtisans: 'చేతివృత్తి నిపుణులను కలవండి',
    everyCraftStory: 'ప్రతి కళకూ ఒక కథ ఉంది.',
    discoverDesc: 'భారతదేశ విశిష్ట హస్తకళల సంప్రదాయాల వెనుక ఉన్న చేతులు, వారసత్వాన్ని అన్వేషించండి.',
    giVerified: 'జీఐ (GI) ధృవీకరించబడిన ప్రామాణికత',
    allStates: 'అన్ని రాష్ట్రాలను అన్వేషించండి',
    marketplace: 'మార్కెట్‌ప్లేస్',
    wishlist: 'నా కోరికల జాబితా',
    cart: 'సంచి',
    digitalLocker: 'డిజిటల్ లాకర్'
  },
  kn: {
    tagline: 'ಪ್ರತಿಯೊಂದು ಕಲೆಗೂ ಒಂದು ಕಥೆಯಿದೆ.',
    exploreCrafts: 'ಕರಕುಶಲ ಕಲೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    verifyCraft: 'ಕರಕುಶಲತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ',
    meetArtisans: 'ಕುಶಲಕರ್ಮಿಗಳನ್ನು ಭೇಟಿ ಮಾಡಿ',
    everyCraftStory: 'ಪ್ರತಿಯೊಂದು ಕಲೆಗೂ ಒಂದು ಕಥೆಯಿದೆ.',
    discoverDesc: 'ಭಾರತದ ಪವಿತ್ರ ಕರಕುಶಲ ಪರಂಪರೆಗಳ ಹಿಂದಿನ ಕೈಗಳು ಮತ್ತು ಕಥೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.',
    giVerified: 'ಜಿಐ ಪ್ರಮಾಣೀಕೃತ ನೈಜತೆ',
    allStates: 'ಎಲ್ಲಾ ರಾಜ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    marketplace: 'ಮಾರುಕಟ್ಟೆ',
    wishlist: 'ನನ್ನ ವರ್ಣಂ ಪಟ್ಟಿ',
    cart: 'ಚೀಲ',
    digitalLocker: 'ಡಿಜಿಟಲ್ ಲಾಕರ್'
  },
  ml: {
    tagline: 'ഓരോ കരകൗശലത്തിനും ഒരു കഥയുണ്ട്.',
    exploreCrafts: 'കരകൗശലങ്ങൾ കാണുക',
    verifyCraft: 'കരകൗശലം പരിശോധിക്കുക',
    meetArtisans: 'ശില്പികളെ കാണുക',
    everyCraftStory: 'ഓരോ കരകൗശലത്തിനും ഒരു കഥയുണ്ട്.',
    discoverDesc: 'ഭാരതീയ പൈതൃക കരകൗശലങ്ങളുടെയും കൈവേലക്കാരുടെയും കഥകൾ അനുഭവിച്ചറിയുക.',
    giVerified: 'ജിഐ അംഗീകൃത ആധികാരികത',
    allStates: 'എല്ലാ സംസ്ഥാനങ്ങളും കാണുക',
    marketplace: 'മാർക്കറ്റ്',
    wishlist: 'എന്റെ ഇഷ്ടപ്പട്ടിക',
    cart: 'ഷോപ്പിംഗ് ബാഗ്',
    digitalLocker: 'ഡിജിറ്റൽ ലോക്കർ'
  },
  bn: {
    tagline: 'প্রতিটি শিল্পের পেছনে একটি গল্প আছে।',
    exploreCrafts: 'হস্তশিল্প অন্বেষণ করুন',
    verifyCraft: 'সত্যতা যাচাই করুন',
    meetArtisans: 'কারিগরদের সাথে সাক্ষাৎ করুন',
    everyCraftStory: 'প্রতিটি শিল্পের পেছনে একটি গল্প আছে।',
    discoverDesc: 'ভারতের ঐতিহাসিক হস্তশিল্প এবং ঐতিহ্যবাহী রূপকারদের গল্প আবিষ্কার করুন।',
    giVerified: 'জিআই সার্টিফাইড সত্যতা',
    allStates: 'সমস্ত রাজ্য দেখুন',
    marketplace: 'মার্কেটপ্লেস',
    wishlist: 'আমার পছন্দের তালিকা',
    cart: 'থলে',
    digitalLocker: 'ডিজিটাল লকার'
  }
};

export const SACRED_TERMS = [
  'Korvai', 'Petni', 'Panchaloha', 'Madhuchishtavidhana', 'Chhipa', 'Dabu',
  'Thewa', 'Roghan', 'Talim', 'Kani', 'Sakhtsazi', 'Naqqashi', 'Tarakasi',
  'Pattachitra', 'Kadhwa', 'Mitti Attar', 'Deg-Bhapka', 'Sthapathi', 'Gopuram'
];
