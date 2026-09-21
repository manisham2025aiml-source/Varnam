export interface VarnamState {
  slug: string;
  name: string;
  craft: string;
  icon: 'arch' | 'diamond' | 'sun' | 'weave' | 'leaf' | 'knot' | 'rail';
  color: string;
  enabled: boolean;
}

export interface TamilNaduHighlight {
  icon: 'arch' | 'weave' | 'leaf' | 'rail';
  color: string;
  text: string;
}

export interface TamilNaduCraft {
  name: string;
  gradient: [string, string];
  description: string;
}

export interface VarnamFeaturedProduct {
  name: string;
  artisan: string;
  region: string;
  price: string;
  gradient: [string, string];
}

export interface VerifyCertificate {
  product: string;
  varnamId: string;
  artisan: string;
  origin: string;
  status: string;
  pricing: 'fixed' | 'negotiable';
  price: string;
  material?: string;
  careInstructions?: string;
}

export interface VarnamPromptDataset {
  states: VarnamState[];
  voiceLanguages: string[];
  tamilNadu: {
    name: string;
    tagline: string;
    story: string;
    heroColors: {
      from: string;
      to: string;
    };
    highlights: TamilNaduHighlight[];
    crafts: TamilNaduCraft[];
    products: VarnamFeaturedProduct[];
  };
  featuredCrafts: VarnamFeaturedProduct[];
  verifyDemo: {
    certificate: VerifyCertificate;
    storyByLanguage: Record<string, string>;
  };
}

export const VARNAM_PROMPT_DATA: VarnamPromptDataset = {
  states: [
    { slug: "tamil-nadu", name: "Tamil Nadu", craft: "Tanjore Painting", icon: "arch", color: "#6E2A38", enabled: true },
    { slug: "gujarat", name: "Gujarat", craft: "Kutch & Bandhani", icon: "sun", color: "#9E2A2B", enabled: true },
    { slug: "karnataka", name: "Karnataka", craft: "Mysore Silk & Toys", icon: "weave", color: "#7A2021", enabled: true },
    { slug: "uttar-pradesh", name: "Uttar Pradesh", craft: "Banarasi & Chikankari", icon: "knot", color: "#1E3A8A", enabled: true },
    { slug: "west-bengal", name: "West Bengal", craft: "Tant Saree & Kantha", icon: "weave", color: "#1B365D", enabled: true },
    { slug: "rajasthan", name: "Rajasthan", craft: "Block Printing", icon: "diamond", color: "#BE5A3B", enabled: false },
    { slug: "kerala", name: "Kerala", craft: "Coir Craft & Mural", icon: "leaf", color: "#3B5943", enabled: false },
    { slug: "kashmir", name: "Kashmir", craft: "Papier-mâché", icon: "leaf", color: "#212B46", enabled: false },
    { slug: "odisha", name: "Odisha", craft: "Pattachitra", icon: "sun", color: "#6E2A38", enabled: false },
    { slug: "assam", name: "Assam", craft: "Bamboo Craft", icon: "leaf", color: "#212B46", enabled: false }
  ],

  voiceLanguages: [
    "Tamil", "Hindi", "Telugu", "Kannada", "Malayalam", "Bengali", "Marathi",
    "Gujarati", "Punjabi", "Odia", "Assamese", "Urdu", "Konkani", "Bhojpuri", "English"
  ],

  tamilNadu: {
    name: "Tamil Nadu",
    tagline: "Where craftsmanship carries centuries of memory.",
    story: "Tamil Nadu's craft identity is inseparable from its temple architecture and classical culture — towering Dravidian gopurams, silk-weaving cities, and hill towns that grew around colonial-era railways. Its artisans carry forward traditions of stone, bronze, silk and paint that are centuries old.",
    heroColors: { from: "#6E2A38", to: "#212B46" },
    highlights: [
      { icon: "arch", color: "#6E2A38", text: "Meenakshi Amman Temple, Madurai" },
      { icon: "arch", color: "#6E2A38", text: "Brihadeeswarar Temple, Thanjavur" },
      { icon: "weave", color: "#AD7C2B", text: "Kanchipuram — city of silk & a thousand temples" },
      { icon: "leaf", color: "#3B5943", text: "Ooty — tea-garden hill station" },
      { icon: "rail", color: "#212B46", text: "Nilgiri Mountain Railway" }
    ],
    crafts: [
      { 
        name: "Tanjore Painting", 
        gradient: ["#6E2A38", "#BE5A3B"], 
        description: "A rich, gold-leafed painting style from Thanjavur, known for dense colour, gesso relief work and gem-set surfaces depicting deities and court scenes." 
      },
      { 
        name: "Kanchipuram Silk", 
        gradient: ["#AD7C2B", "#6E2A38"], 
        description: "Handwoven silk sarees from Kanchipuram, famed for their heavy zari borders and contrast-colour pallus, woven using techniques passed down for generations." 
      },
      { 
        name: "Swamimalai Bronze", 
        gradient: ["#212B46", "#3B5943"], 
        description: "Lost-wax bronze casting from Swamimalai, used to make temple idols and icons through a technique unchanged for over a thousand years." 
      },
      { 
        name: "Pattamadai Mats", 
        gradient: ["#3B5943", "#AD7C2B"], 
        description: "Fine, silk-soft mats woven from korai grass in Pattamadai, sometimes fine enough to be folded like cloth." 
      }
    ],
    products: [
      { name: "Tanjore Gold-Leaf Panel", artisan: "Meena R.", region: "Thanjavur, TN", price: "₹4,200", gradient: ["#6E2A38", "#BE5A3B"] },
      { name: "Kanchipuram Silk Saree", artisan: "Lakshmi V.", region: "Kanchipuram, TN", price: "₹6,400", gradient: ["#212B46", "#AD7C2B"] },
      { name: "Swamimalai Bronze Idol", artisan: "Suresh M.", region: "Swamimalai, TN", price: "₹3,300", gradient: ["#6E2A38", "#212B46"] }
    ]
  },

  featuredCrafts: [
    { name: "Tanjore Gold-Leaf Panel", artisan: "Meena R.", region: "Thanjavur, TN", price: "₹4,200", gradient: ["#6E2A38", "#BE5A3B"] },
    { name: "Bandhani Dupatta", artisan: "Asha K.", region: "Kutch, GJ", price: "₹1,850", gradient: ["#AD7C2B", "#6E2A38"] },
    { name: "Bamboo Table Lamp", artisan: "Rukmini D.", region: "Majuli, AS", price: "₹1,150", gradient: ["#3B5943", "#212B46"] }
  ],

  verifyDemo: {
    certificate: {
      product: "Hand-painted Tanjore Panel",
      varnamId: "VRN-TN-000428",
      artisan: "Meena R. (demo profile)",
      origin: "Thanjavur, Tamil Nadu",
      status: "✓ Varnam Verified",
      pricing: "fixed",
      price: "₹4,200",
      material: "22K Pure Gold Foil, Teakwood, Natural Gesso",
      careInstructions: "Hang away from direct tropical sunlight and humidity to preserve the 22K gold leaf lustre."
    },
    storyByLanguage: {
      en: "This Tanjore panel was hand-painted by Meena in Thanjavur using gold-leaf and gesso relief work, a technique passed down over generations. It's meant as a wall piece — hang it away from direct sunlight to keep the gold leaf from dulling.",
      ta: "இந்த தஞ்சாவூர் ஓவியம் தஞ்சாவூரில் மீனாவால் தங்கத் தகடு பயன்படுத்தி கையால் வரையப்பட்டது. நேரடி சூரிய ஒளியில் இருந்து விலக்கி வைக்கவும்.",
      hi: "यह तंजौर पेंटिंग तंजावुर में मीना द्वारा सोने की पत्ती और गेसो तकनीक से हाथ से बनाई गई है। इसे सीधी धूप से दूर रखें।",
      te: "ఈ తంజావూరు పెయింటింగ్ తంజావూరులో మీనా గారు బంగారు రేకు మరియు గెస్సో రిలీఫ్ పనితో చేతితో చిత్రించారు. నేరుగా సూర్యరశ్మి తగలకుండా గోడపై ఉంచండి.",
      kn: "ಈ ತಂಜಾವೂರು ವರ್ಣಚಿತ್ರವನ್ನು ತಂಜಾವೂರಿನಲ್ಲಿ ಮೀನಾ ಅವರು ಚಿನ್ನದ ಎಲೆ ಮತ್ತು ಗೆಸ್ಸೊ ತಂತ್ರ ಬಳಸಿ ಕೈಯಿಂದ ರಚಿಸಿದ್ದಾರೆ. ನೇರ ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ದೂರವಿಡಿ.",
      ml: "തഞ്ചാവൂരിൽ സ്വർണ്ണത്തകിടും ഗെസ്സോ റിലീഫ് രീതിയും ഉപയോഗിച്ച് മീന കൈകൊണ്ട് വരച്ചതാണ് ഈ തഞ്ചാവൂർ ചിത്രം. നേരിട്ടുള്ള സൂര്യപ്രകാശത്തിൽ നിന്ന് അകറ്റി സൂക്ഷിക്കുക.",
      bn: "এই তাঞ্জোর চিত্রকর্মটি তাঞ্জাভুরে মীনা সোনার পাত এবং গেসো রিলিফ কৌশল ব্যবহার করে হাতে এঁকেছেন। সরাসরি সূর্যালোক থেকে দূরে ঝুলিয়ে রাখুন।",
      mr: "हे तंजोर पेंटिंग तंजावर येथे मीनाने सोन्याचे वर्क आणि गेसो रिलीफ तंत्राचा वापर करून हाताने बनवले आहे. थेट सूर्यप्रकाशापासून दूर ठेवावे.",
      gu: "આ તંજાવુર પેઇન્ટિંગ તંજાવુરમાં મીના દ્વારા સોનાના વરખ અને ગેસો પદ્ધતિથી હાથથી બનાવવામાં આવી છે. સીધા સૂર્યપ્રકાશથી દૂર રાખો."
    }
  }
};
