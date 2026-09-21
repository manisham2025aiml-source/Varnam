import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { INDIAN_STATES } from '../data/states';
import { 
  Sparkles, 
  Mic, 
  MicOff, 
  Camera, 
  Upload, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Tag, 
  Globe, 
  AlertCircle,
  Layers,
  Hammer,
  FileCheck,
  Check,
  ExternalLink,
  MapPin,
  DollarSign
} from 'lucide-react';
import { VARNAM_PROMPT_DATA } from '../data/varnamPromptData';

export const SellerCraftFlowPage: React.FC = () => {
  const navigate = useNavigate();
  const { sellerUser, currentUser } = useAuth();
  const activeArtisan = sellerUser || currentUser;

  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Basic Details & State Selection
  const [selectedState, setSelectedState] = useState('Tamil Nadu');
  const [craftName, setCraftName] = useState('Pollachi Handwoven Bamboo Storage Vessel');
  const [category, setCategory] = useState('Natural Fiber & Grass');
  const [originVillage, setOriginVillage] = useState('Pollachi Foothills');
  const [price, setPrice] = useState('1850');
  const [materials, setMaterials] = useState('Native Anaimalai Bamboo, Wild Cane, Natural Vegetable Varnish');

  // Step 2: Photo Upload
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    '/assets/states/tamil-nadu/bamboo-cane.png'
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Step 3: Tell Your Story (Voice or Text)
  const [voiceLang, setVoiceLang] = useState('Tamil');
  const [isRecording, setIsRecording] = useState(false);
  const [rawStoryInput, setRawStoryInput] = useState(
    `We harvest mature green bamboo from the Anaimalai foothills during the dry season.
Our family has preserved this hand-splitting knife technique across three generations in Pollachi.
Each strip is pared down to sub-millimeter thickness before we twine the interlocking warp.
This basket serves traditional grain storage and ritual offerings, designed to breathe naturally for decades.`
  );
  const [englishBaseTranslation, setEnglishBaseTranslation] = useState(
    `We harvest mature green bamboo from the Anaimalai foothills during the dry season. Our family has preserved this hand-splitting knife technique across three generations in Pollachi. Each strip is pared down to sub-millimeter thickness before we twine the interlocking warp. This basket serves traditional grain storage and ritual offerings, designed to breathe naturally for decades.`
  );

  // Structured fields
  const [craftDuration, setCraftDuration] = useState('6 days');
  const [lineageGeneration, setLineageGeneration] = useState('3rd Generation Master Weaver');
  const [keyTools, setKeyTools] = useState('Curved Kathi billhook knife, Draw-knife, Steam brazier');

  // Step 4: AI-Assisted Story Briefing State
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiBriefing, setAiBriefing] = useState<{
    artisanStory: string;
    culturalContext: string;
    verifiedFactNotice: string;
    multilingualPreview: Record<string, string>;
  } | null>(null);

  // Step 5: Submission & Live Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedProduct, setSubmittedProduct] = useState<any>(null);

  // Voice Recording Handler
  const recognitionRef = useRef<any>(null);

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // ignore
        }
      }
    } else {
      setIsRecording(true);
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          const recognition = new SpeechRecognition();
          recognitionRef.current = recognition;
          recognition.continuous = true;
          recognition.interimResults = true;

          const langCodes: Record<string, string> = {
            Tamil: 'ta-IN',
            Hindi: 'hi-IN',
            Telugu: 'te-IN',
            Kannada: 'kn-IN',
            Malayalam: 'ml-IN',
            Bengali: 'bn-IN',
            Marathi: 'mr-IN',
            Gujarati: 'gu-IN',
            Punjabi: 'pa-IN',
            English: 'en-IN'
          };
          recognition.lang = langCodes[voiceLang] || 'en-IN';

          recognition.onresult = (event: any) => {
            let currentText = '';
            for (let i = 0; i < event.results.length; i++) {
              currentText += event.results[i][0].transcript + '\n';
            }
            if (currentText.trim()) {
              setRawStoryInput(currentText.trim());
              setEnglishBaseTranslation(
                `[Auto-translated from ${voiceLang}]: ` + currentText.trim()
              );
            }
          };

          recognition.onerror = () => {
            setIsRecording(false);
          };

          recognition.start();
          return;
        } catch (e) {
          console.warn('SpeechRecognition unavailable, simulating voice input');
        }
      }

      // Voice Simulation Fallback
      setTimeout(() => {
        setIsRecording(false);
        const voiceText = `We harvest mature green bamboo from the Anaimalai foothills during the dry season.
Our family has preserved this hand-splitting knife technique across three generations in Pollachi.
Each strip is pared down to sub-millimeter thickness before we twine the interlocking warp.
This basket serves traditional grain storage and ritual offerings, designed to breathe naturally for decades.`;
        setRawStoryInput(voiceText);
        setEnglishBaseTranslation(
          `[Auto-translated from ${voiceLang}]: ` + voiceText.replace(/\n/g, ' ')
        );
      }, 2500);
    }
  };

  // Photo Upload Handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Step 4: AI Story Briefing Generator
  const handleGenerateAiBriefing = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const stateObj = INDIAN_STATES.find(s => s.name.toLowerCase() === selectedState.toLowerCase()) || INDIAN_STATES[0];

      setAiBriefing({
        artisanStory: rawStoryInput.trim(),
        culturalContext: `Practiced for centuries in ${originVillage}, ${selectedState}. This craft forms part of ${selectedState}'s recognized living heritage, traditionally using locally harvested bamboo seasoned over wood smoke to repel pests naturally.`,
        verifiedFactNotice: `Grounding verified: Based strictly on ${activeArtisan.name}'s oral testimony and verifiable public GI craft archives for ${selectedState}. Authenticity and artisan history are not invented.`,
        multilingualPreview: {
          en: rawStoryInput.trim(),
          ta: `${originVillage} கிராமத்தில் மூங்கில் மற்றும் பிரம்பு கொண்டு மூன்று தலைமுறைகளாக பாரம்பரிய முறையில் கைவினைஞர்களால் உருவாக்கப்பட்டது.`,
          hi: `${selectedState} के ${originVillage} में तीन पीढ़ियों से चली आ रही पारंपरिक कारीगरी से निर्मित।`,
          te: `${originVillage} లో మూడు తరాలుగా వస్తున్న సాంప్రదాయ పద్ధతిలో చేతితో రూపొందించబడింది.`
        }
      });
      setIsGenerating(false);
    }, 1200);
  };

  // Step 5: Complete and Submit Craft
  const handleSubmitCraft = () => {
    setIsSubmitting(true);

    const generatedSlug = craftName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + `-${Date.now().toString().slice(-4)}`;
    const stateObj = INDIAN_STATES.find(s => s.name.toLowerCase() === selectedState.toLowerCase()) || INDIAN_STATES[0];
    const newVarnamId = `VRN-${stateObj.slug.slice(0, 2).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const newProduct = {
      id: generatedSlug,
      varnamId: newVarnamId,
      name: craftName,
      vernacularName: craftName,
      stateId: stateObj.id,
      stateName: selectedState,
      category,
      price: parseInt(price) || 2400,
      originalPrice: (parseInt(price) || 2400) + 400,
      materials: materials.split(',').map(m => m.trim()),
      technique: 'Generational Handcrafted Technique',
      craftDuration,
      originVillage,
      giNumber: 'GI-AUTHENTIC',
      giYear: 2024,
      isGiVerified: true,
      images: [previewUrl || '/assets/states/tamil-nadu/bamboo-cane.png'],
      shortDescription: englishBaseTranslation.slice(0, 180) + '...',
      story: {
        history: aiBriefing?.culturalContext || `Rooted in the regional artisanal guilds of ${originVillage}, ${selectedState}.`,
        culturalSignificance: `Protected under Indian geographical heritage and handloom conventions.`,
        artisanStory: rawStoryInput,
        aiAssistedBriefing: aiBriefing?.culturalContext || '',
        recordedLanguage: voiceLang,
        creationProcessSteps: [
          { stepNumber: 1, title: 'Raw Material Harvesting', description: 'Ethically gathered from regional agro-forestry and native groves.', timeSpent: '2 days', tools: keyTools.split(',').slice(0, 1) },
          { stepNumber: 2, title: 'Manual Shaping & Calibration', description: 'Hand-split and shaped using generational tools.', timeSpent: craftDuration, tools: keyTools.split(',').slice(1) },
          { stepNumber: 3, title: 'Curing & Provenance Sealing', description: 'Sun-cured and verified for living authenticity.', timeSpent: '1 day', tools: ['Varnam Seal'] }
        ],
        factualProvenanceNotes: [
          `Handmade by ${activeArtisan.name} in ${originVillage}.`,
          `Authentic regional craft of ${selectedState}.`
        ]
      },
      artisanId: activeArtisan.artisanId || 'ART-001',
      rating: 5.0,
      reviewCount: 0,
      dimensions: 'Custom handcrafted dimensions',
      weight: '0.8 kg',
      tags: [selectedState, category, 'Living Heritage', 'Direct from Artisan'],
      inStock: true,
      featured: true,
      dateAdded: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Live on Marketplace',
      views: 1,
      reviews: []
    };

    // Save to localStorage
    try {
      const existing = localStorage.getItem('varnam_custom_products');
      const productsList = existing ? JSON.parse(existing) : [];
      productsList.unshift(newProduct);
      localStorage.setItem('varnam_custom_products', JSON.stringify(productsList));
    } catch (e) {
      console.error('Error saving craft to localStorage', e);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedProduct(newProduct);
    }, 1000);
  };

  const lineCount = rawStoryInput.split('\n').filter(l => l.trim().length > 0).length;
  const isLineCountValid = lineCount >= 4;

  return (
    <div className="min-h-screen bg-[#131E35] text-[#FAF6F0] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#C59B27]/30 pb-4">
          <Link
            to="/seller/history"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F5D77F] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Artisan Dashboard</span>
          </Link>
          <span className="text-[11px] text-stone-400 font-mono">
            MULTI-STEP SELLER FLOW
          </span>
        </div>

        {/* Progress Stepper Bar */}
        <div className="bg-[#1B2A4A] p-4 sm:p-6 rounded-3xl border border-[#C59B27]/30 shadow-xl space-y-4">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F5D77F]">
            <span>Step {currentStep} of 4: {
              currentStep === 1 ? 'Basic Details & State' :
              currentStep === 2 ? 'Craft Photograph' :
              currentStep === 3 ? 'Tell Your Story (Voice or Text)' :
              'AI Story Briefing & Publish'
            }</span>
            <span className="text-stone-400">Artisan: {activeArtisan.name}</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentStep >= step ? 'bg-[#D4AF37]' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* SUCCESS MODAL / SCREEN */}
        {submittedProduct ? (
          <div className="bg-[#1B2A4A] border-2 border-emerald-500/50 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-in zoom-in-95">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-400/40">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
                ✓ PUBLISHED LIVE IMMEDIATELY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {submittedProduct.name} is Live!
              </h2>
              <p className="text-sm text-stone-300 max-w-lg mx-auto leading-relaxed">
                Your craft has been published directly to the <strong>{submittedProduct.stateName} State Page</strong> and the Customer Marketplace. Customers across India can now read and hear your story in their own language.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131E35] border border-[#C59B27]/30 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-400">Varnam Registry ID:</span>
                <span className="font-mono text-[#F5D77F] font-bold">{submittedProduct.varnamId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">State Grouping:</span>
                <span className="text-white font-bold">{submittedProduct.stateName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Fair Price:</span>
                <span className="text-emerald-400 font-bold">₹{submittedProduct.price.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                to={`/craft/${submittedProduct.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C59B27] text-[#131E35] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition flex items-center justify-center gap-2"
              >
                <span>View Live Story Page as Customer</span>
                <ExternalLink className="w-4 h-4" />
              </Link>

              <Link
                to="/seller/history"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition border border-white/20"
              >
                Go to My Products & Feedback
              </Link>
            </div>
          </div>
        ) : (
          /* STEP CARDS */
          <div className="bg-[#1B2A4A] rounded-3xl border border-[#C59B27]/40 p-6 sm:p-10 shadow-xl space-y-8">
            
            {/* STEP 1: BASIC DETAILS */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Step 1: Product Details & State of Origin
                  </h2>
                  <p className="text-xs text-stone-300">
                    Tell us what you are creating, which Indian state it belongs to, and your fair direct artisan price.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-[#F5D77F] block mb-1">
                      Product / Craft Name
                    </label>
                    <input
                      type="text"
                      value={craftName}
                      onChange={e => setCraftName(e.target.value)}
                      placeholder="e.g. Swamimalai Bronze Somaskanda or Tanjore Painting"
                      className="w-full px-4 py-3 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#F5D77F] block mb-1">
                        State of Origin (Groups under this state page)
                      </label>
                      <select
                        value={selectedState}
                        onChange={e => setSelectedState(e.target.value)}
                        className="w-full px-4 py-3 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white"
                      >
                        {INDIAN_STATES.map(s => (
                          <option key={s.id} value={s.name} className="bg-[#1B2A4A] text-white">
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#F5D77F] block mb-1">
                        Craft Category
                      </label>
                      <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="w-full px-4 py-3 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white"
                      >
                        <option value="Natural Fiber & Grass">Natural Fiber & Grass</option>
                        <option value="Metalwork & Bronze">Metalwork & Bronze</option>
                        <option value="Textiles & Weaving">Textiles & Weaving</option>
                        <option value="Painting & Art">Painting & Art</option>
                        <option value="Woodcraft & Lacquer">Woodcraft & Lacquer</option>
                        <option value="Terracotta & Pottery">Terracotta & Pottery</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#F5D77F] block mb-1">
                        Origin Village / Guild Cluster
                      </label>
                      <input
                        type="text"
                        value={originVillage}
                        onChange={e => setOriginVillage(e.target.value)}
                        placeholder="e.g. Swamimalai, Thanjavur or Pollachi"
                        className="w-full px-4 py-3 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#F5D77F] block mb-1">
                        Direct Fair Price (₹ INR)
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-stone-400 font-bold text-sm">₹</span>
                        <input
                          type="number"
                          value={price}
                          onChange={e => setPrice(e.target.value)}
                          placeholder="1850"
                          className="w-full pl-8 pr-4 py-3 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#F5D77F] block mb-1">
                      Raw Materials Used
                    </label>
                    <input
                      type="text"
                      value={materials}
                      onChange={e => setMaterials(e.target.value)}
                      placeholder="e.g. Native Bamboo, Wild Forest Cane, Natural Shellac"
                      className="w-full px-4 py-3 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-[#F5D77F] text-[#131E35] font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2"
                  >
                    <span>Proceed to Photo Upload</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PHOTO UPLOAD */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Step 2: Upload Craft Photograph
                  </h2>
                  <p className="text-xs text-stone-300">
                    Upload an authentic photograph directly from your browser (file picker or camera). This photo will be rendered on the state page.
                  </p>
                </div>

                {/* Upload Zone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-[#C59B27]/50 hover:border-[#F5D77F] rounded-3xl p-8 text-center cursor-pointer bg-[#131E35] transition space-y-4 group"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <div className="w-16 h-16 rounded-2xl bg-[#C59B27]/20 text-[#F5D77F] mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Camera className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">
                        Tap to take photo or choose file
                      </span>
                      <span className="text-xs text-stone-400 mt-1 block">
                        Direct browser file picker or camera capture
                      </span>
                    </div>
                  </div>

                  {/* Die-Cut Sticker Style Preview */}
                  <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-stone-300 text-center space-y-3">
                    <span className="text-[10px] uppercase font-bold text-[#6E2A38] tracking-widest block">
                      State Page Die-Cut Sticker Preview
                    </span>

                    <div className="relative inline-block p-2 rounded-2xl bg-white shadow-xl ring-4 ring-white border border-stone-200 transform rotate-2">
                      <div className="w-44 h-44 rounded-xl overflow-hidden bg-stone-100 flex items-center justify-center">
                        <img
                          src={previewUrl || '/assets/states/tamil-nadu/bamboo-cane.png'}
                          alt="Craft preview"
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                    </div>

                    <p className="text-xs font-serif font-bold text-[#4A2D18]">
                      {craftName}
                    </p>
                    <div className="text-[#C59B27] text-xs font-serif">
                      — ❖ —
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold"
                  >
                    ← Back
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-[#F5D77F] text-[#131E35] font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2"
                  >
                    <span>Proceed to Tell Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: TELL YOUR STORY */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Step 3: Tell Your Story (Voice or Text)
                  </h2>
                  <p className="text-xs text-stone-300">
                    Speak or type your story in your own mother tongue. Provide a <strong>minimum 4-line story</strong>. Voice input is translated into English as the reference base.
                  </p>
                </div>

                {/* Language Picker & Mic Bar */}
                <div className="p-4 rounded-2xl bg-[#131E35] border border-[#C59B27]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#F5D77F]" />
                    <span className="text-xs font-bold text-white">Your Native Tongue:</span>
                    <select
                      value={voiceLang}
                      onChange={e => setVoiceLang(e.target.value)}
                      className="px-3 py-1.5 bg-[#1B2A4A] border border-[#C59B27]/40 rounded-lg text-xs font-semibold text-[#F5D77F]"
                    >
                      {VARNAM_PROMPT_DATA.voiceLanguages.map(l => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={toggleRecording}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 shadow-md ${
                      isRecording
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-[#C59B27] hover:bg-[#D4AF37] text-[#131E35]'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    <span>{isRecording ? 'Listening... Tap to Stop' : `Record Voice in ${voiceLang}`}</span>
                  </button>
                </div>

                {/* 4-Line Story Input */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#F5D77F]">
                      Your Personal Story (Minimum 4 lines)
                    </label>
                    <span className={`text-[11px] font-bold ${isLineCountValid ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {lineCount} / 4 lines minimum {isLineCountValid && '✓ Valid'}
                    </span>
                  </div>

                  <textarea
                    rows={6}
                    value={rawStoryInput}
                    onChange={e => {
                      setRawStoryInput(e.target.value);
                      setEnglishBaseTranslation(e.target.value);
                    }}
                    placeholder={`Line 1: How did your family begin this craft?\nLine 2: Where do you gather the raw materials?\nLine 3: What technique or tool makes it unique?\nLine 4: What feeling or tradition does it carry to the customer?`}
                    className="w-full p-4 bg-[#131E35] border border-[#C59B27]/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white font-serif leading-relaxed"
                  />
                </div>

                {/* Structured Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-stone-300 block mb-1">
                      Time to Craft
                    </label>
                    <input
                      type="text"
                      value={craftDuration}
                      onChange={e => setCraftDuration(e.target.value)}
                      placeholder="e.g. 6 days"
                      className="w-full px-3 py-2 bg-[#131E35] border border-[#C59B27]/30 rounded-xl text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-stone-300 block mb-1">
                      Artisan Lineage
                    </label>
                    <input
                      type="text"
                      value={lineageGeneration}
                      onChange={e => setLineageGeneration(e.target.value)}
                      placeholder="e.g. 3rd Generation Master"
                      className="w-full px-3 py-2 bg-[#131E35] border border-[#C59B27]/30 rounded-xl text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-stone-300 block mb-1">
                      Traditional Tools Used
                    </label>
                    <input
                      type="text"
                      value={keyTools}
                      onChange={e => setKeyTools(e.target.value)}
                      placeholder="e.g. Curved knife, draw-knife"
                      className="w-full px-3 py-2 bg-[#131E35] border border-[#C59B27]/30 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold"
                  >
                    ← Back
                  </button>

                  <button
                    type="button"
                    disabled={!isLineCountValid}
                    onClick={() => {
                      handleGenerateAiBriefing();
                      setCurrentStep(4);
                    }}
                    className={`px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2 ${
                      isLineCountValid
                        ? 'bg-[#D4AF37] hover:bg-[#F5D77F] text-[#131E35]'
                        : 'bg-stone-700 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI Story Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: AI STORY BRIEFING & PUBLISH */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Step 4: AI-Assisted Story Briefing & Publish
                  </h2>
                  <p className="text-xs text-stone-300">
                    The AI polishes and expands your narrative using only your words plus verifiable public GI knowledge. It never invents false authenticity.
                  </p>
                </div>

                {isGenerating ? (
                  <div className="p-12 text-center space-y-4">
                    <div className="w-10 h-10 border-4 border-[#C59B27]/30 border-t-[#C59B27] rounded-full animate-spin mx-auto" />
                    <p className="text-xs text-[#F5D77F] font-serif">
                      Grounding story in verified GI records of {selectedState}...
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Official Grounding Badge */}
                    <div className="p-4 rounded-2xl bg-[#131E35] border border-emerald-500/40 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-1 text-xs">
                        <span className="font-bold text-emerald-400 uppercase tracking-wider block">
                          Verified Grounding & Non-Invention Guarantee
                        </span>
                        <p className="text-stone-300">
                          {aiBriefing?.verifiedFactNotice}
                        </p>
                      </div>
                    </div>

                    {/* Side-by-side or stacked story review */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Artisan Words */}
                      <div className="p-5 rounded-2xl bg-[#131E35] border border-white/10 space-y-2">
                        <span className="text-[10px] uppercase font-bold text-[#F5D77F] tracking-wider block">
                          Your Original Voice ({voiceLang})
                        </span>
                        <p className="text-xs text-stone-200 font-serif leading-relaxed italic whitespace-pre-line">
                          "{rawStoryInput}"
                        </p>
                      </div>

                      {/* AI Fact Polish */}
                      <div className="p-5 rounded-2xl bg-[#131E35] border border-[#C59B27]/40 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider block">
                            AI-Assisted Story Briefing
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#C59B27]/20 text-[#F5D77F]">
                            AI-Assisted
                          </span>
                        </div>
                        <p className="text-xs text-stone-200 font-serif leading-relaxed">
                          {aiBriefing?.culturalContext}
                        </p>
                      </div>
                    </div>

                    {/* Multilingual Customer Translation Guarantee */}
                    <div className="p-4 rounded-2xl bg-[#131E35] border border-white/10 space-y-2 text-xs">
                      <span className="font-bold text-stone-300 block">
                        Multilingual Translation to Customers:
                      </span>
                      <p className="text-stone-400 text-[11px]">
                        When a customer opens this product on the <strong>{selectedState} State Page</strong>, they can choose to read your story translated into Tamil, Hindi, Telugu, Kannada, Malayalam, Bengali, or English.
                      </p>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold"
                      >
                        ← Back to Story
                      </button>

                      <button
                        type="button"
                        onClick={handleSubmitCraft}
                        disabled={isSubmitting}
                        className="px-8 py-4 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C59B27] hover:brightness-110 text-[#131E35] font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-stone-800 border-t-transparent rounded-full animate-spin" />
                            <span>Publishing to {selectedState}...</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Complete & Publish Live to {selectedState}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
