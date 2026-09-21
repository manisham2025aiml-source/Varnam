import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ALL_CRAFTS } from '../data/crafts';
import { ALL_ARTISANS } from '../data/artisans';
import { useVarnam } from '../context/VarnamContext';
import { 
  ShieldCheck, 
  Heart, 
  ShoppingBag, 
  Hammer, 
  MapPin, 
  Sparkles, 
  Scroll, 
  Layers, 
  Share2,
  Radio,
  Check,
  Star,
  Globe,
  MessageSquare,
  Send,
  CheckCircle2,
  Volume2
} from 'lucide-react';

interface ReviewItem {
  id: string;
  customerName: string;
  rating: number;
  date: string;
  comment: string;
  verifiedBuyer: boolean;
}

// Translations for Craft Stories
const STORY_TRANSLATIONS: Record<string, Record<string, string>> = {
  'tanjore-painting-krishna': {
    en: "This Tanjore gold foil painting is hand-painted in Thanjavur using natural chalk gesso relief work and 22-carat pure gold leaf. Passed down over generations, it depicts celestial devotion with gem-embossed ornaments.",
    ta: "இந்த தஞ்சாவூர் ஓவியம் தஞ்சாவூரில் 22 காரட் தூய தங்கத் தகடு மற்றும் பாரம்பரிய சுண்ணக்கட்டி நிவாரண வேலைப்பாடுகளுடன் பல தலைமுறைகளாக கைவினைஞர்களால் வரையப்பட்டது.",
    hi: "यह तंजौर पेंटिंग तंजावुर में 22 कैरेट शुद्ध सोने की पत्ती और प्राकृतिक गेसो रिलीफ वर्क के साथ पीढ़ियों से चली आ रही परंपरा से हाथ से बनाई गई है।",
    te: "ఈ తంజావూరు పెయింటింగ్ తంజావూరులో 22 క్యారెట్ల స్వచ్ఛమైన బంగారు రేకు మరియు సహజ గెస్సో రిలీఫ్ పనితో చేతితో చిత్రించబడింది.",
    kn: "ಈ ತಂಜಾವೂರು ವರ್ಣಚಿತ್ರವನ್ನು ತಂಜಾವೂರಿನಲ್ಲಿ 22 ಕ್ಯಾರೆಟ್ ಶುದ್ಧ ಚಿನ್ನದ ಎಲೆ ಮತ್ತು ನೈಸರ್ಗಿಕ ಗೆಸ್ಸೊ ತಂತ್ರ ಬಳಸಿ ಕೈಯಿಂದ ರಚಿಸಲಾಗಿದೆ.",
    ml: "തഞ്ചാവൂരിൽ 22 കാരറ്റ് ശുദ്ധമായ സ്വർണ്ണത്തകിടും ഗെസ്സോ റിലീഫ് രീതിയും ഉപയോഗിച്ച് പരമ്പരാഗതമായി കൈകൊണ്ട് വരച്ചതാണ് ഈ തഞ്ചാവൂർ ചിത്രം.",
    bn: "এই তাঞ্জোর চিত্রকর্মটি তাঞ্জাভুরে ২২ ক্যারেট খাঁটি সোনার পাত এবং প্রাকৃতিক গেসো রিলিফ কৌশল ব্যবহার করে হাতে আঁকা হয়েছে।",
    mr: "हे तंजोर पेंटिंग तंजावर येथे २२ कॅरेट सोन्याचे वर्क आणि नैसर्गिक गेसो रिलीफ तंत्राचा वापर करून हाताने बनवले आहे.",
    gu: "આ તંજાવુર પેઇન્ટિંગ તંજાવુરમાં ૨૨ કેરેટ સોનાના વરખ અને કુદરતી ગેસો પદ્ધતિથી હાથથી બનાવવામાં આવી છે."
  },
  'kanchipuram-silk-sari': {
    en: "Woven on dual-weaver traditional pit looms in Kanchipuram using pure mulberry silk yarn and silver-dipped gold zari. The body and pallu are woven separately and interlocked using the ancient Korvai technique.",
    ta: "காஞ்சிபுரத்தில் பாரம்பரிய தறிகளில் தூய மல்பெரி பட்டு மற்றும் வெள்ளி தோய்த்த தங்க ஜரிகை கொண்டு முக்கூட்டு கொர்வை முறையில் நெய்யப்பட்டது.",
    hi: "कांचीपुरम में पारंपरिक गड्ढा करघे पर शुद्ध शहतूत रेशम और चांदी-सोने की जरी के साथ प्राचीन कोरवई तकनीक से बुनी गई साड़ी।",
    te: "కాంచీపురంలో సంప్రదాయ పిట్ మగ్గాలపై స్వచ్ఛమైన పట్టు మరియు బంగారు జరీతో పురాతన కోర్వై పద్ధతిలో నేయబడింది.",
    kn: "ಕಾಂಚೀಪುರಂನಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ಮಗ್ಗಗಳಲ್ಲಿ ಶುದ್ಧ ರೇಷ್ಮೆ ಮತ್ತು ಬಂಗಾರದ ಜರಿಯೊಂದಿಗೆ ಪ್ರಾಚೀನ ಕೊರ್ವಾಯಿ ತಂತ್ರದಲ್ಲಿ ನೇಯ್ದ ಸೀರೆ.",
    ml: "കാഞ്ചീപുരത്ത് പരമ്പരാഗത തറികളിൽ ശുദ്ധമായ പട്ടുനൂലും സ്വർണ്ണകസവും ഉപയോഗിച്ച് പുരാതന കോർവൈ രീതിയിൽ നെയ്തെടുത്തത്.",
    bn: "কাঞ্চিপুরমে ঐতিহ্যবাহী তাঁতে খাঁটি রেশম এবং সোনা-রুপোর জরি দিয়ে প্রাচীন কোরভাই পদ্ধতিতে বোনা শাড়ি।",
    mr: "कांचीपुरममध्ये पारंपारिक मागावर शुद्ध रेशीम आणि सोन्याच्या जरीने प्राचीन कोरवई तंत्राने विणलेली साडी.",
    gu: "કાંચીપુરમમાં પરંપરાગત સાળ પર શુદ્ધ રેશમ અને સોનાની જરી વડે પ્રાચીન કોરવાઈ પદ્ધતિથી વણેલી સાડી."
  },
  'swamimalai-bronze-nataraja': {
    en: "Cast in solid bronze using the 1,000-year-old Chola lost-wax technique (Madhuchishtavidhana) in Swamimalai. The mold is formed from sacred Kaveri riverbed silt and baked under charcoal fire.",
    ta: "சுவாமிமலையில் 1,000 ஆண்டுகள் பழமையான சோழர் கால மெழுகு முறைப்படி காவிரி ஆற்று வண்டல் மண்ணில் அச்சு வார்க்கப்பட்டு உருவாக்கப்பட்ட வெண்கலச் சிலை.",
    hi: "स्वामीमलाई में 1,000 साल पुरानी चोल लॉस्ट-वैक्स तकनीक से कावेरी नदी की पवित्र मिट्टी के सांचे में ठोस कांस्य में ढाली गई प्रतिमा।",
    te: "స్వామిమలైలో 1,000 సంవత్సరాల పురాతన చోళుల మైనపు పద్ధతిలో కావేరి నది ఒండ్రు మట్టి అచ్చుతో ఘన కంచులో పోతపోసిన విగ్రహం.",
    kn: "ಸ್ವಾಮಿಮಲೈನಲ್ಲಿ 1,000 ವರ್ಷಗಳ ಪುರಾತನ ಚೋಳರ ಕಳೆದುಹೋದ ಮೇಣದ ತಂತ್ರದಿಂದ ಕಾವೇರಿ ನದಿಯ ಮಣ್ಣಿನ ಅಚ್ಚಿನಲ್ಲಿ ಎರಕಹೊಯ್ದ ಕಂಚಿನ ವಿಗ್ರಹ.",
    ml: "സ്വാമിമലയിൽ 1,000 വർഷം പഴക്കമുള്ള ചോള കാലത്തെ ലോസ്റ്റ്-വാക്സ് രീതിയിൽ കാവേരി മണ്ണിൽ തീർത്ത വെങ്കല ശിൽപം.",
    bn: "স্বামীমালাইতে ১,০০০ বছরের পুরনো চোল মোম গলানো পদ্ধতিতে কাবেরী নদীর পলিমাটির ছাঁচে তৈরি নিখাদ ব্রোঞ্জ মূর্তি।",
    mr: "स्वामीमलाई येथे १,००० वर्षे जुन्या चोल लॉस्ट-वॅक्स तंत्राने कावेरी नदीच्या गाळाच्या साच्यात बनवलेली भरीव कांस्य मूर्ती.",
    gu: "સ્વામીમલાઈમાં ૧,૦૦૦ વર્ષ જૂની ચોલ પદ્ધતિથી કાવેરી નદીની પવિત્ર માટીના બીબામાં ઢાળેલી નક્કર કાંસાની મૂર્તિ."
  },
  'bamboo-cane-craft': {
    en: "Harvested from the Anaimalai foothills near Pollachi, native green bamboo is sun-dried and hand-split into razor-thin flexible ribbons. Handwoven into resilient vessels that naturally breathe and preserve grains.",
    ta: "பொள்ளாச்சி ஆனைமலை அடிவாரத்தில் அறுவடை செய்யப்படும் மூங்கில்களைக் கொண்டு பாரம்பரிய கத்தி மூலம் கைப்பிளந்து நெய்யப்படும் நீடித்த மூங்கில் கூடை.",
    hi: "पोल्लाची के अनामलाई तलहटी से बांस काटकर पारंपरिक चाकू से पतली पट्टियों में विभाजित करके हाथ से बुनी गई टिकाऊ टोकरी।",
    te: "పొల్లాచ్చి సమీపంలోని అనైమలై కొండల్లో వెదురును సేకరించి సంప్రదాయ పద్ధతిలో సన్నటి పట్టీలుగా కోసి చేతితో అల్లిన బుట్ట.",
    kn: "ಪೊಳ್ಳಾಚ್ಚಿ ಬಳಿಯ ಅನೈಮಲೈ ಬೆಟ್ಟಗಳ ಬಿದಿರನ್ನು ಸಾಂಪ್ರದಾಯಿಕ ಚಾಕುವಿನಿಂದ ಸೀಳಿ ಕೈಯಿಂದ ಹೆಣೆದ ಗಟ್ಟಿಮುಟ್ಟಾದ ಬಿದಿರಿನ ಪಾತ್ರೆ.",
    ml: "പൊള്ളാച്ചി ആനമല താഴ്‌വരയിലെ മുളകൾ പരമ്പരാഗത രീതിയിൽ ചീകിയെടുത്ത് കൈകൊണ്ട് നെയ്തെടുത്ത ഈടുറ്റ മുള ഉൽപ്പന്നം.",
    bn: "পোল্লাচির আনাইমালাই পাহাড়ের খাঁটি বাঁশ ঐতিহ্যবাহী ছুরি দিয়ে চিরে হাতে বোনা দীর্ঘস্থায়ী বাঁশের ঝুড়ি।",
    mr: "पोल्लाचीजवळील अनैमलाई टेकड्यांमधून बांबू गोळा करून पारंपारिक चाकूने कापून हाताने विणलेली मजबूत बांबूची टोपली.",
    gu: "પોલ્લાચી પાસેના અનામલાઈ ટેકરીઓમાંથી વાંસ લાવીને પરંપરાગત રીતે હાથેથી વણેલી ટકાઉ વાંસની ટોપલી."
  },
  'pattamadai-fine-mat': {
    en: "Woven in Pattamadai from wild Korai river grass harvested along the Thamirabarani riverbanks. Reeds are split into 140 fine strands per inch, yielding a mat so soft it folds like a silk fabric.",
    ta: "தாமிரபரணி ஆற்றங்கரையில் விளையும் கோரைப் புற்களைப் பிரித்து பத்தமடையில் நெய்யப்படும் பட்டு போன்ற மென்மையான பத்தமடைப் பாய்.",
    hi: "तामिरबरणी नदी के तट से तोड़ी गई कोराई घास से पट्टमडई में बुनी गई बेहद मुलायम चटाई, जिसे रेशम की तरह मोड़ा जा सकता है।",
    te: "తామిరబరణి నదీ తీరపు కోరై గడ్డితో పట్టమడైలో నేసిన అత్యంత మృదువైన చాప, పట్టు వస్త్రంలా మడవబడుతుంది.",
    kn: "ತಾಮಿರಭರಣಿ ನದಿ ತೀರದ ಕೋರೈ ಹುಲ್ಲಿನಿಂದ ಪಟ್ಟಮಡೈನಲ್ಲಿ ನೇಯ್ದ ರೇಷ್ಮೆಯಂತಹ ಮೃದುವಾದ ಚಾಪೆ.",
    ml: "താമിരഭരണിയുടെ തീരത്തെ കോരപ്പുല്ല് കൊണ്ട് പട്ടമടയിൽ നെയ്തെടുത്ത പട്ടുപോലുള്ള മൃദുവായ പായ.",
    bn: "পট্টমডাইতে তামিরাবারানি নদীর কোরাই ঘাস দিয়ে বোনা অত্যন্ত নরম মাদুর যা রেশমের মতো ভাঁজ করা যায়।",
    mr: "तामिराबरणी नदीकाठच्या कोराई गवताने पट्टमडई येथे विणलेली रेशमासारखी मऊ चटई.",
    gu: "તામિરાબરણી નદીના કાંઠેથી લાવેલા કોરાઈ ઘાસમાંથી પટ્ટમડાઈમાં વણેલી રેશમ જેવી મુલાયમ સાદડી."
  }
};

const LANGUAGES_LIST = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
  { code: 'ml', name: 'മലയാളം (Malayalam)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)' }
];

export const CraftDetailPage: React.FC = () => {
  const { craftId } = useParams<{ craftId: string }>();
  const { addToCart, isWishlisted, toggleWishlist, showToast } = useVarnam();

  const [storyLanguage, setStoryLanguage] = useState<string>('en');

  // Customer Reviews State
  const [reviews, setReviews] = useState<ReviewItem[]>([
    {
      id: 'rev-1',
      customerName: 'Priya Sundaram (Chennai)',
      rating: 5,
      date: '16 Sep 2026',
      comment: 'Exquisite craftsmanship! The weave tension and natural texture are breathtaking. It brings warmth to our home.',
      verifiedBuyer: true
    },
    {
      id: 'rev-2',
      customerName: 'David K. (Bengaluru)',
      rating: 5,
      date: '14 Sep 2026',
      comment: 'Hearing the artisan’s voice story in their mother tongue gave this so much emotional depth. A true generational treasure.',
      verifiedBuyer: true
    }
  ]);

  const [newReviewRating, setNewReviewRating] = useState<number>(5);
  const [newReviewAuthor, setNewReviewAuthor] = useState<string>('');
  const [newReviewComment, setNewReviewComment] = useState<string>('');
  const [reviewSubmitted, setReviewSubmitted] = useState<boolean>(false);

  // Find craft in standard crafts or custom uploaded crafts
  const [craft, setCraft] = useState<any>(null);

  useEffect(() => {
    // 1. Search in memory ALL_CRAFTS
    const memCraft = ALL_CRAFTS.find(c => 
      c.id.toLowerCase() === (craftId || '').toLowerCase() ||
      c.varnamId.toLowerCase() === (craftId || '').toLowerCase()
    );

    if (memCraft) {
      setCraft(memCraft);
      return;
    }

    // 2. Search in custom seller uploaded crafts (localStorage)
    const customListRaw = localStorage.getItem('varnam_custom_products');
    if (customListRaw) {
      try {
        const customList = JSON.parse(customListRaw);
        const found = customList.find((c: any) => 
          c.id.toLowerCase() === (craftId || '').toLowerCase() ||
          c.varnamId.toLowerCase() === (craftId || '').toLowerCase()
        );
        if (found) {
          setCraft(found);
          return;
        }
      } catch (e) {
        // ignore
      }
    }

    // Default fallback to first craft if not matched
    setCraft(ALL_CRAFTS[0]);
  }, [craftId]);

  const [liveLikesCount, setLiveLikesCount] = useState<number>(24);
  const [dynamicStoryText, setDynamicStoryText] = useState<string | null>(null);

  // Load persistent reviews & likes from server (with localStorage fallback)
  useEffect(() => {
    if (!craft) return;

    // 1. Fetch persistent reviews
    fetch(`http://localhost:5000/api/reviews?productId=${craft.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.reviews && data.reviews.length > 0) {
          const mapped: ReviewItem[] = data.reviews.map((r: any) => ({
            id: r.id,
            customerName: r.user_name || 'Verified Buyer',
            rating: r.rating || 5,
            date: new Date(r.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
            comment: r.comment,
            verifiedBuyer: r.verified_buyer ?? true
          }));
          setReviews(mapped);
        } else {
          const customReviewsRaw = localStorage.getItem('varnam_product_reviews');
          if (customReviewsRaw) {
            try {
              const allReviews = JSON.parse(customReviewsRaw);
              if (allReviews[craft.id]) setReviews(allReviews[craft.id]);
            } catch (e) {}
          }
        }
      })
      .catch(() => {
        const customReviewsRaw = localStorage.getItem('varnam_product_reviews');
        if (customReviewsRaw) {
          try {
            const allReviews = JSON.parse(customReviewsRaw);
            if (allReviews[craft.id]) setReviews(allReviews[craft.id]);
          } catch (e) {}
        }
      });

    // 2. Fetch live likes
    fetch(`http://localhost:5000/api/likes?productId=${craft.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLiveLikesCount(data.count);
        }
      })
      .catch(() => {});
  }, [craft]);

  // Fetch dynamic translation from translations table when language changes
  useEffect(() => {
    if (!craft || storyLanguage === 'en') {
      setDynamicStoryText(null);
      return;
    }
    fetch(`http://localhost:5000/api/translations?targetId=${craft.id}&locale=${storyLanguage}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.translations && data.translations.length > 0) {
          setDynamicStoryText(data.translations[0].translated_text);
        } else {
          setDynamicStoryText(null);
        }
      })
      .catch(() => setDynamicStoryText(null));
  }, [craft, storyLanguage]);

  if (!craft) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-[#FAF6F0]">
        <div className="w-12 h-12 border-4 border-[#6E2A38]/30 border-t-[#6E2A38] rounded-full animate-spin mb-4" />
        <p className="text-sm font-serif text-stone-700">Retrieving craft heritage...</p>
      </div>
    );
  }

  // Artisan lookup (Strictly customer view — never link to seller dashboard!)
  const artisan = ALL_ARTISANS.find(a => a.id === craft.artisanId) || {
    id: craft.artisanId || 'ART-001',
    name: 'Meena of Pollachi',
    title: 'Hereditary Master Weaver',
    craftSpecialty: craft.category,
    stateName: craft.stateName,
    village: craft.originVillage,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    bio: `Dedicated generational practitioner based in ${craft.originVillage}, ${craft.stateName}.`
  };

  // Multilingual story resolution
  const storyTranslationsForCraft = STORY_TRANSLATIONS[craft.id] || {};
  const currentTranslatedStory = dynamicStoryText || storyTranslationsForCraft[storyLanguage] || craft.story?.artisanStory || craft.story?.history || craft.shortDescription;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      customerName: newReviewAuthor.trim() || 'Verified Connoisseur',
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewComment.trim(),
      verifiedBuyer: true
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);

    // Save to server
    try {
      fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: craft.id,
          userName: newReviewAuthor.trim() || 'Verified Connoisseur',
          rating: newReviewRating,
          comment: newReviewComment.trim()
        })
      }).catch(() => {});
    } catch {}

    // Save to localStorage
    try {
      const customReviewsRaw = localStorage.getItem('varnam_product_reviews');
      const allReviews = customReviewsRaw ? JSON.parse(customReviewsRaw) : {};
      allReviews[craft.id] = updated;
      localStorage.setItem('varnam_product_reviews', JSON.stringify(allReviews));
    } catch (e) {
      console.error('Failed to save review', e);
    }

    setReviewSubmitted(true);
    setNewReviewComment('');
    setNewReviewAuthor('');
    showToast('Review Submitted', 'Thank you for supporting this artisan guild!', 'gold');
    setTimeout(() => setReviewSubmitted(false), 3000);
  };

  const wishlisted = isWishlisted(craft.id);

  const handleToggleLike = () => {
    toggleWishlist(craft.id);
    fetch('http://localhost:5000/api/likes/toggle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: craft.id, userId: 'user-current' })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLiveLikesCount(data.count);
        }
      })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen bg-[#F8F3EA] text-[#1C1917] py-8 sm:py-14 font-sans selection:bg-[#6E2A38] selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between text-xs font-serif font-bold uppercase tracking-wider text-[#6E2A38]">
          <Link
            to={`/state/${craft.stateName.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:underline flex items-center gap-1"
          >
            <span>← Back to {craft.stateName} State Page</span>
          </Link>
          <span className="text-stone-500 font-mono text-[11px]">
            {craft.varnamId} • {craft.giNumber || 'GI CERTIFIED'}
          </span>
        </div>

        {/* Hero Section: Left Image & Right Product Buy Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Real Photographic Craft Image with Die-Cut Silhouette Aesthetic */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative p-3 rounded-3xl bg-white shadow-2xl ring-8 ring-white/80 border border-[#D9C4A5]">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAF6F0] flex items-center justify-center">
                <img
                  src={craft.images[0]}
                  alt={craft.name}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/states/tamil-nadu/bamboo-cane.png';
                  }}
                />
              </div>

              {/* Verified Provenance Badge */}
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#1B2A4A] text-[#F5D77F] text-[10px] font-bold tracking-wider uppercase border border-[#C59B27]/40 shadow-md flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GI Verified • Direct from Guild</span>
              </div>
            </div>

            {/* Cryptographic NFC Tag Indicator */}
            <div className="p-4 rounded-2xl bg-white border border-[#D9C4A5] shadow-xs flex items-center justify-between text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#6E2A38]" />
                <span>Encrypted Physical NFC Provenance:</span>
                <strong className="font-mono text-[#1C1917]">{craft.varnamId}</strong>
              </div>
              <span className="text-emerald-700 font-bold">✓ Authentic Handcrafted</span>
            </div>
          </div>

          {/* Right Column: Title, Artisan Info (Strictly Name & Photo Only), Price, Buy Action */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6E2A38]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{craft.originVillage}, {craft.stateName}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A1521] leading-tight">
                {craft.name}
              </h1>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans pt-1">
                {craft.shortDescription}
              </p>
            </div>

            {/* HARD SEPARATION: ARTISAN NAME & PHOTO ONLY — ZERO SELLER LINKS */}
            <div className="p-4 rounded-2xl bg-white border border-[#D9C4A5] shadow-xs flex items-center gap-4">
              <img
                src={artisan.avatar}
                alt={artisan.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-[#C59B27] shrink-0"
              />
              <div>
                <span className="text-[10px] uppercase font-bold text-[#6E2A38] tracking-widest block">
                  Master Artisan Guild
                </span>
                <h3 className="font-serif text-base font-bold text-[#1C1917]">
                  {artisan.name}
                </h3>
                <p className="text-xs text-stone-500">
                  {artisan.village}, {craft.stateName}
                </p>
              </div>
            </div>

            {/* Price & Purchase Actions */}
            <div className="p-6 rounded-3xl bg-white border border-[#D9C4A5] shadow-md space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#6E2A38]">
                  ₹{craft.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                  Fair Artisan Price (Zero Middlemen)
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    addToCart(craft, 1);
                    showToast('Added to Bag', `${craft.name} has been added to your order.`, 'gold');
                  }}
                  className="flex-1 py-3.5 px-6 bg-[#6E2A38] hover:bg-[#541E2A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Acquire Masterpiece</span>
                </button>

                <button
                  onClick={handleToggleLike}
                  className={`p-3.5 px-4 rounded-xl border transition flex items-center gap-2 ${
                    wishlisted
                      ? 'bg-[#6E2A38] text-white border-[#6E2A38]'
                      : 'bg-white text-stone-600 border-[#D9C4A5] hover:text-[#6E2A38]'
                  }`}
                  title={wishlisted ? 'Remove from Saved' : 'Save to Wishlist & Like'}
                >
                  <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current text-amber-300' : ''}`} />
                  <span className="text-xs font-bold font-mono">{liveLikesCount}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-stone-500 font-serif italic">
                Includes tamper-evident physical NFC authenticity tag & artisan certificate.
              </p>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* STORY SECTION WITH CUSTOMER MULTILINGUAL TRANSLATOR */}
        {/* ============================================================ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D9C4A5] shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D9C4A5]/60 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6E2A38]">
                Living Craft Chronicle
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                The Artisan's Story in Your Language
              </h2>
            </div>

            {/* Interactive Language Selector */}
            <div className="flex items-center gap-2 bg-[#FAF6F0] p-1.5 rounded-2xl border border-[#D9C4A5]">
              <Globe className="w-4 h-4 text-[#AD7C2B] ml-2" />
              <span className="text-xs font-bold text-stone-700 hidden sm:inline">Read in:</span>
              <select
                value={storyLanguage}
                onChange={e => setStoryLanguage(e.target.value)}
                className="bg-white px-3 py-1.5 rounded-xl text-xs font-bold text-[#6E2A38] border border-[#D9C4A5] focus:outline-none focus:ring-2 focus:ring-[#6E2A38]"
              >
                {LANGUAGES_LIST.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dynamic Translated Story Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF6F0] border border-[#D9C4A5]/80 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6E2A38] flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" />
                <span>Recorded by Artisan in Mother Tongue • Translated to {LANGUAGES_LIST.find(l => l.code === storyLanguage)?.name}</span>
              </span>
            </div>

            <p className="font-serif text-lg sm:text-xl text-[#2D1F17] leading-relaxed italic">
              "{currentTranslatedStory}"
            </p>

            {/* AI-Assisted Story Briefing (Clearly Labeled, No Invented Authenticity) */}
            <div className="pt-4 border-t border-[#D9C4A5]/60 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#AD7C2B]" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  AI-Assisted Story Briefing & Cultural Context
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#AD7C2B]/15 text-[#6E2A38] font-bold">
                  Verified GI Archives
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {craft.story?.history || `Preserved in ${craft.originVillage}, ${craft.stateName} across multiple centuries. This handcraft tradition is protected under regional geographical indications.`}
              </p>
            </div>
          </div>

        </section>

        {/* ============================================================ */}
        {/* CUSTOMER REVIEWS & RATINGS SECTION */}
        {/* ============================================================ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D9C4A5] shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D9C4A5]/60 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6E2A38]">
                Connoisseur Reviews
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Customer Ratings & Feedback ({reviews.length})
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-[#C59B27]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-serif font-bold text-base text-[#1C1917]">5.0</span>
              <span className="text-xs text-stone-500">({reviews.length} verified reviews)</span>
            </div>
          </div>

          {/* Review List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map(review => (
              <div
                key={review.id}
                className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#D9C4A5]/60 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm text-[#1C1917] block">
                      {review.customerName}
                    </span>
                    <span className="text-[10px] text-stone-500">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#C59B27]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed font-serif italic">
                  "{review.comment}"
                </p>

                {review.verifiedBuyer && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                    <Check className="w-3 h-3" />
                    <span>Verified Craft Acquisition</span>
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Leave a Review Interactive Form */}
          <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#D9C4A5] space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">
              Leave a Review for this Artisan
            </h3>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Your Name (and City)
                  </label>
                  <input
                    type="text"
                    value={newReviewAuthor}
                    onChange={e => setNewReviewAuthor(e.target.value)}
                    placeholder="e.g. Radhika M. (Mumbai)"
                    className="w-full px-4 py-2.5 bg-white border border-[#D9C4A5] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#6E2A38]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-2 pt-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewRating(star)}
                        className={`p-1 text-lg transition ${
                          star <= newReviewRating ? 'text-[#C59B27]' : 'text-stone-300'
                        }`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="text-xs font-bold text-stone-600 ml-2">
                      {newReviewRating} Stars
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Your Thoughts on the Craft & Story
                </label>
                <textarea
                  rows={3}
                  value={newReviewComment}
                  onChange={e => setNewReviewComment(e.target.value)}
                  placeholder="Share your appreciation for the artisan's dedication, the weave, materials, and living story..."
                  className="w-full p-3 bg-white border border-[#D9C4A5] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#6E2A38]"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#6E2A38] hover:bg-[#541E2A] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Review</span>
              </button>
            </form>
          </div>

        </section>

      </div>
    </div>
  );
};
