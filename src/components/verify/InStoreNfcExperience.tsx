import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  Info, 
  Tag, 
  AlertCircle,
  HelpCircle,
  Share2,
  Lock,
  ShoppingBag,
  ArrowRight,
  Hammer
} from 'lucide-react';
import { VARNAM_PROMPT_DATA } from '../../data/varnamPromptData';

export const InStoreNfcExperience: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanned, setScanned] = useState(true); // Default open for immediate inspection
  const [currentLang, setCurrentLang] = useState('en');

  const demo = VARNAM_PROMPT_DATA.verifyDemo;
  const cert = demo.certificate;

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanned(true);
    }, 1400);
  };

  const languageLabels: Record<string, string> = {
    en: 'English',
    ta: 'தமிழ் (Tamil)',
    hi: 'हिन्दी (Hindi)',
    te: 'తెలుగు (Telugu)',
    kn: 'ಕನ್ನಡ (Kannada)',
    ml: 'മലയാളം (Malayalam)',
    bn: 'বাংলা (Bengali)',
    mr: 'मराठी (Marathi)',
    gu: 'ગુજરાતી (Gujarati)'
  };

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 py-4">
      {/* Introduction text */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#BE5A3B] block">
          In-Store Buyer Experience
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
          Tap. Verify. Discover.
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
          In a physical store, tap the NFC tag on the product to access its digital certificate, artisan story in your chosen language, and transparent pricing without needing an interpreter.
        </p>
      </div>

      {/* NFC Ring Sensor Animation */}
      <div className="flex flex-col items-center">
        <div 
          onClick={handleSimulateScan}
          className={`relative w-44 h-44 rounded-full border-2 border-stone-300 bg-white shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#BE5A3B] nfc-ring-pulse ${
            isScanning ? 'scanning border-[#BE5A3B]' : ''
          }`}
        >
          <Radio className={`w-16 h-16 ${isScanning ? 'text-[#BE5A3B] animate-pulse' : 'text-[#BE5A3B]'}`} />
        </div>

        <button
          type="button"
          onClick={handleSimulateScan}
          disabled={isScanning}
          className="mt-6 px-8 py-3.5 bg-[#BE5A3B] hover:bg-[#A94E32] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-lg flex items-center gap-2"
        >
          <Radio className="w-4 h-4" />
          <span>{isScanning ? 'Scanning NFC Tag…' : 'Simulate NFC Scan'}</span>
        </button>
      </div>

      {/* Product Story & Certificate View (After Scan) */}
      {scanned && (
        <div className="text-left bg-white border border-[#C59B27]/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in duration-300">
          
          {/* Product Image & Certificate Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Product Image / Collectible Die-Cut Display */}
            <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#FAF6F0] p-4 rounded-2xl border border-stone-200">
              <div className="relative p-2 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] ring-4 ring-white border border-stone-200 transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
                    alt={cert.product}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-1.5 flex items-center justify-between px-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32]">
                    GI #028 • THANJAVUR
                  </span>
                  <Sparkles className="w-3 h-3 text-[#AD7C2B]" />
                </div>
              </div>
              <span className="text-[10px] font-semibold text-stone-500 mt-2">
                Decrypted NFC Provenance Tag: {cert.varnamId}
              </span>
            </div>

            {/* Certificate Table */}
            <div className="md:col-span-7 border border-stone-200 rounded-2xl p-5 bg-[#FAF6F0] space-y-2.5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-bold text-stone-500">Craft Name:</span>
                <span className="font-serif text-sm sm:text-base font-bold text-[#1C1917]">{cert.product}</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-bold text-stone-500">Master Artisan:</span>
                <span className="text-xs font-semibold text-stone-800">{cert.artisan}</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-bold text-stone-500">Origin:</span>
                <span className="text-xs font-medium text-stone-700">{cert.origin}</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-bold text-stone-500">Varnam DNA:</span>
                <span className="font-mono text-xs font-bold text-[#6E2A38] bg-white px-2 py-0.5 rounded border border-stone-200">{cert.varnamId}</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-bold text-stone-500">Verification Status:</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {cert.status}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-stone-500">Pricing Mode:</span>
                <span className="text-xs font-bold text-[#C85A32] bg-white px-2 py-0.5 rounded border border-stone-200">
                  {cert.pricing === 'fixed' ? 'Fixed Price (Fair Trade)' : 'Negotiable'}
                </span>
              </div>
            </div>

          </div>

          {/* How to Use Section */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
              How to Use & Display
            </span>
            <p className="text-xs text-stone-700 leading-relaxed">
              Mount flush against interior sanctum or drawing room walls away from direct air conditioning draft. Frame in seasoned teak wood to protect the 22K gold foil gesso relief work.
            </p>
          </div>

          {/* Language Switcher Tabs */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#BE5A3B]" />
                <span>Buyer's Chosen Language (Translated without losing craft terms):</span>
              </label>
              <span className="text-[11px] text-stone-500">9 regional options</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {Object.keys(demo.storyByLanguage).map(langKey => (
                <button
                  key={langKey}
                  type="button"
                  onClick={() => setCurrentLang(langKey)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    currentLang === langKey
                      ? 'bg-[#212B46] text-[#D4AF37] shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {languageLabels[langKey] || langKey.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Translated Story Panel */}
          <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-stone-200 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E2A38] block">
              Craft & Cultural Story ({languageLabels[currentLang] || currentLang})
            </span>
            <p className="text-sm text-stone-800 leading-relaxed font-sans">
              {demo.storyByLanguage[currentLang] || demo.storyByLanguage.en}
            </p>
          </div>

          {/* Pricing Flag & Care Instructions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center gap-3">
              <Tag className="w-5 h-5 text-[#AD7C2B] shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-[#AD7C2B] block uppercase tracking-wide">
                  {cert.pricing === 'fixed' ? 'Fixed Price' : 'Negotiable'}
                </span>
                <span className="text-stone-800 font-serif font-bold text-sm">
                  {cert.price} {cert.pricing === 'fixed' ? '(Non-negotiable)' : '(Ask price)'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-emerald-800 block uppercase tracking-wide">
                  Care & Preservation
                </span>
                <span className="text-stone-700 text-[11px] line-clamp-2">
                  {cert.careInstructions || 'Keep away from direct tropical sunlight and humidity.'}
                </span>
              </div>
            </div>
          </div>

          {/* Ecosystem Navigation Links */}
          <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
            <Link
              to="/digital-locker"
              className="py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 font-bold transition flex items-center justify-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Save to Locker</span>
            </Link>

            <Link
              to="/explore-india/tamil-nadu"
              className="py-2.5 px-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F3EAD6] text-[#6E2A38] border border-[#C59B27]/30 font-bold transition flex items-center justify-center gap-1.5"
            >
              <span>Thanjavur Culture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/artisans"
              className="py-2.5 px-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F3EAD6] text-[#BE5A3B] border border-[#BE5A3B]/30 font-bold transition flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Artisans</span>
            </Link>
          </div>

        </div>
      )}
    </div>
  );
};
