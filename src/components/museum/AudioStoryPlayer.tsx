import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Globe, Sparkles, RotateCcw } from 'lucide-react';

interface AudioStoryPlayerProps {
  craftName: string;
  origin: string;
  defaultStory: string;
  className?: string;
  regionalStories?: Record<string, string>;
}

const REGIONAL_STORIES_DATA: Record<string, (craft: string, origin: string) => string> = {
  ta: (craft, origin) => 
    `இந்த ${craft} பாரம்பரியமானது ${origin} பகுதியில் பல தலைமுறைகளாக போற்றி வளர்க்கப்படும் புனிதமான கைவினைக்கலை. பழங்கால வேத கால சிற்ப சாஸ்திரங்கள் மற்றும் சோழர் கால கோவில் கவின் கலை மரபுகளின்படி இயற்கையான மூலப்பொருட்களைக் கொண்டு உருவாக்கப்படுகிறது. இதன் நுணுக்கமான கலை நயம் காலங்களை கடந்து பேசும் பாரதத்தின் வாழும் பாரம்பரியமாகும்.`,
  hi: (craft, origin) => 
    `यह ${craft} शिल्प ${origin} की पवित्र भूमि से जुड़ा एक अत्यंत प्राचीन और दुर्लभ हस्तशिल्प है। पीढ़ियों से गुरु-शिष्य परंपरा द्वारा संजोई गई यह कला प्राकृतिक तत्वों और पारंपरिक तकनीकों से तैयार की जाती है। यह न केवल एक कलाकृति है, बल्कि हमारी प्राचीन सांस्कृतिक चेतना का सजीव प्रतीक है।`,
  te: (craft, origin) => 
    `ఈ ${craft} కళారూపం ${origin} ప్రాంతానికి చెందిన ప్రాచీన మరియు పవిత్రమైన హస్తకళ. తరతరాలుగా వంశపారంపర్యంగా వస్తున్న సాంప్రదాయ పద్ధతులలో, సహజ సిద్ధమైన పదార్థాలతో అత్యంత భక్తి శ్రద్ధలతో తీర్చిదిద్దబడింది. ఇది మన భారతీయ శిల్ప కళా వైభవానికి ప్రతీక.`,
  kn: (craft, origin) => 
    `ಈ ${craft} ಕಲೆಯು ${origin} ಪ್ರದೇಶದ ಶತಮಾನಗಳ ಪ್ರಾಚೀನ ಪಾರಂಪರಿಕ ಕಲೆಯಾಗಿದೆ. ರಾಜಮನೆತನಗಳ ಆಶ್ರಯದಲ್ಲಿ ಬೆಳೆದು ಬಂದ ಈ ಕರಕುಶಲ ಕಲೆಯು ನೈಸರ್ಗಿಕ ವಸ್ತುಗಳು ಹಾಗೂ ಶಿಲ್ಪಶಾಸ್ತ್ರದ ನಿಯಮಗಳ ಪ್ರಕಾರ ಅತ್ಯಂತ ನಿಖರವಾಗಿ ರೂಪುಗೊಂಡಿದೆ.`,
  ml: (craft, origin) => 
    `ഈ ${craft} പാരമ്പര്യം ${origin} പ്രദേശത്തിന്റെ തനിമയാർന്ന സംസ്കാരത്തിൽ വേരൂന്നിയതാണ്. തലമുറകളായി പകർന്നു കിട്ടിയ തനതു ശൈലിയിൽ, പ്രകൃതിദത്തമായ കൂട്ടുകൾ ഉപയോഗിച്ച് നിർമ്മിച്ചെടുക്കുന്ന ഈ ശില്പം ഭാരതീയ പൈതൃകത്തിന്റെ അമൂല്യ നിധിയാണ്.`,
  bn: (craft, origin) => 
    `এই ${craft} শিল্পটি ${origin} অঞ্চলের এক অপূর্ব ও সুপ্রাচীন হস্তশিল্প ঐতিহ্য। প্রজন্মের পর প্রজন্ম ধরে চলে আসা নিপুণ দক্ষতায়, প্রাকৃতিক উপকরণ দিয়ে এটি সৃষ্টি করা হয়। এটি কেবল শিল্প নয়, ভারতীয় সাংস্কৃতিক ঐতিহ্যের জীবন্ত দলিল।`,
  mr: (craft, origin) => 
    `ही ${craft} कला ${origin} येथील शतकानुशतके चालत आलेली समृद्ध हस्तकला परंपरा आहे. नैसर्गिक घटकांचा वापर करून पारंपरिक पद्धतीने तयार केलेली ही कलाकृती भारतीय संस्कृतीचा अमूल्य ठेवा आहे.`,
  gu: (craft, origin) => 
    `આ ${craft} પરંપરા ${origin} પ્રદેશની પ્રાચીન અને ગૌરવશાળી હસ્તકળા છે. પેઢીઓથી ચાલી આવતી કૌશલ્યપૂર્ણ પદ્ધતિઓ અને કુદરતી રંગો-સામગ્રી દ્વારા તૈયાર થયેલું આ શિલ્પ ભારતીય વારસાનું પ્રતીક છે.`,
  en: (craft, origin) => 
    `This ${craft} from ${origin} represents a living civilizational lineage passed down across unbroken master guilds. Consecrated through ancient Shastric proportions, natural minerals, and temple patronage, each piece embodies centuries of sacred memory and human devotion.`
};

const LANGUAGE_OPTIONS = [
  { code: 'ta', label: 'தமிழ்', name: 'Tamil', speechLang: 'ta-IN' },
  { code: 'hi', label: 'हिन्दी', name: 'Hindi', speechLang: 'hi-IN' },
  { code: 'te', label: 'తెలుగు', name: 'Telugu', speechLang: 'te-IN' },
  { code: 'kn', label: 'ಕನ್ನಡ', name: 'Kannada', speechLang: 'kn-IN' },
  { code: 'ml', label: 'മലയാളം', name: 'Malayalam', speechLang: 'ml-IN' },
  { code: 'bn', label: 'বাংলা', name: 'Bengali', speechLang: 'bn-IN' },
  { code: 'mr', label: 'मराठी', name: 'Marathi', speechLang: 'mr-IN' },
  { code: 'gu', label: 'ગુજરાતી', name: 'Gujarati', speechLang: 'gu-IN' },
  { code: 'en', label: 'English', name: 'English (Heritage)', speechLang: 'en-IN' }
];

export const AudioStoryPlayer: React.FC<AudioStoryPlayerProps> = ({
  craftName,
  origin,
  defaultStory,
  className = '',
  regionalStories = {}
}) => {
  const [selectedLang, setSelectedLang] = useState<string>('ta');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speakingProgress, setSpeakingProgress] = useState<number>(0);
  const timerRef = useRef<any>(null);

  // Get active translated text
  const currentStoryText = regionalStories[selectedLang] || 
    (REGIONAL_STORIES_DATA[selectedLang] 
      ? REGIONAL_STORIES_DATA[selectedLang](craftName, origin) 
      : defaultStory);

  const activeLangConfig = LANGUAGE_OPTIONS.find(l => l.code === selectedLang) || LANGUAGE_OPTIONS[0];

  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setSpeakingProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const togglePlayAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech audio playback is not supported in this browser. You can still read the story text.');
      return;
    }

    if (isPlaying) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentStoryText);
    utterance.lang = activeLangConfig.speechLang;
    utterance.rate = 0.92; // Serene, storyteller pacing
    utterance.pitch = 1.0;

    // Try finding natural voice
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang.startsWith(activeLangConfig.code));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      // Simulated audio waveform progress
      let currentSec = 0;
      const totalEstimatedSec = Math.max(12, Math.round(currentStoryText.length / 15));
      timerRef.current = setInterval(() => {
        currentSec += 1;
        setSpeakingProgress(Math.min(100, Math.round((currentSec / totalEstimatedSec) * 100)));
      }, 1000);
    };

    utterance.onend = () => {
      stopAudio();
    };

    utterance.onerror = () => {
      stopAudio();
    };

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className={`p-5 rounded-2xl bg-[#F8F3EA] border border-[#D9C4A5] space-y-4 ${className}`}>
      
      {/* Header with Language Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D9C4A5]/60 pb-3">
        <div className="flex items-center gap-2 text-stone-900">
          <Volume2 className="w-4 h-4 text-[#C85A32]" />
          <span className="font-serif text-sm font-bold text-[#5A3E28]">
            Living Voice of the Artisan
          </span>
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#C85A32]/15 text-[#C85A32]">
            Audio Story
          </span>
        </div>

        {/* Regional Language Select */}
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
          <select
            value={selectedLang}
            onChange={(e) => {
              stopAudio();
              setSelectedLang(e.target.value);
            }}
            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#D9C4A5] text-[#5A3E28] focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
          >
            {LANGUAGE_OPTIONS.map(l => (
              <option key={l.code} value={l.code}>
                {l.label} ({l.name})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Story Text */}
      <div className="text-xs sm:text-sm text-[#4A3B32] font-serif leading-relaxed italic bg-white/70 p-4 rounded-xl border border-[#E8DEC8]">
        "{currentStoryText}"
      </div>

      {/* Audio Playback Controls & Waveform */}
      <div className="flex items-center justify-between gap-4 pt-1">
        <button
          type="button"
          onClick={togglePlayAudio}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6E2A38] hover:bg-[#521E29] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
        >
          {isPlaying && !isPaused ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>Pause Audio</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPaused ? 'Resume Story' : `Hear Story in ${activeLangConfig.name}`}</span>
            </>
          )}
        </button>

        {isPlaying && (
          <button
            type="button"
            onClick={stopAudio}
            className="p-2 rounded-full hover:bg-stone-200 text-stone-600 transition"
            title="Stop audio"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Dynamic Waveform Visualizer */}
        <div className="flex-1 flex items-center justify-end gap-1 px-2 h-6">
          {[40, 75, 55, 90, 45, 100, 65, 80, 50, 70, 30].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full transition-all duration-300 ${
                isPlaying && !isPaused ? 'bg-[#C85A32] animate-pulse' : 'bg-[#D9C4A5]'
              }`}
              style={{
                height: isPlaying && !isPaused ? `${Math.max(20, (h * (speakingProgress % 10 + 1)) % 100)}%` : '20%',
                animationDelay: `${i * 90}ms`
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
