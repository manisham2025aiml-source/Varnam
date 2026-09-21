import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INDIAN_STATES } from '../data/states';
import { ALL_CRAFTS } from '../data/crafts';
import { ALL_ARTISANS } from '../data/artisans';
import { CraftCard } from '../components/craft/CraftCard';
import { QuickViewModal } from '../components/craft/QuickViewModal';
import { TempleBellsDecor } from '../components/museum/TempleBellsDecor';
import { FrangipaniBlossoms } from '../components/museum/FrangipaniBlossoms';
import { PaisleyBorderBand } from '../components/museum/PaisleyBorderBand';
import { LandmarkChip, LandmarkHighlight } from '../components/museum/LandmarkChip';
import { ExactMockupCanvas } from '../components/museum/ExactMockupCanvas';
import { SignatureCraftScrapbook } from '../components/museum/SignatureCraftScrapbook';
import { Craft } from '../types';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Radio,
  MapPin, 
  Compass, 
  ShoppingBag,
  Volume2,
  Layers,
  Image as ImageIcon
} from 'lucide-react';

export const StateDetailPage: React.FC = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const [quickViewCraft, setQuickViewCraft] = useState<Craft | null>(null);

  // Find state by slug (supporting prompt aliases, default to tamil-nadu for /state-tn)
  let targetSlug = stateSlug === 'tamil-nadu' || !stateSlug || stateSlug === 'state-tn' ? 'tamil-nadu' : stateSlug;
  if (targetSlug === 'kashmir') {
    targetSlug = 'jammu-and-kashmir';
  } else if (targetSlug === 'andhra-telangana' || targetSlug === 'andhra-pradesh' || targetSlug === 'andra-pradesh') {
    // User requested: "instead of andra pradesh we can replace with uttar pradesh"
    targetSlug = 'uttar-pradesh';
  } else if (targetSlug === 'telangana' || targetSlug === 'telengana') {
    // User requested: "instead of telengana we can replace with west bengal"
    targetSlug = 'west-bengal';
  }
  const stateIndex = INDIAN_STATES.findIndex(
    s => s.slug === targetSlug || s.slug === stateSlug || (stateSlug === 'kashmir' && s.slug === 'jammu-and-kashmir')
  );
  const state = stateIndex !== -1 ? INDIAN_STATES[stateIndex] : INDIAN_STATES[0];

  const hasExactMasterpiece = ['gujarat', 'karnataka', 'uttar-pradesh', 'west-bengal'].includes(state?.slug || '');
  const [viewMode, setViewMode] = useState<'exact' | 'component'>('exact');

  if (!state) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center space-y-4 bg-[#FAF6F0]">
        <h2 className="font-serif text-3xl font-bold text-stone-900">
          State Heritage Hub Not Found
        </h2>
        <p className="text-sm text-stone-600">
          We could not locate the requested cultural region.
        </p>
        <Link
          to="/explore-india"
          className="px-6 py-2.5 bg-[#C85A32] text-white rounded-full text-xs font-bold uppercase tracking-wider"
        >
          Return to India Map
        </Link>
      </div>
    );
  }

  // Next and Previous states for smooth browsing
  const prevIndex = (stateIndex - 1 + INDIAN_STATES.length) % INDIAN_STATES.length;
  const nextIndex = (stateIndex + 1) % INDIAN_STATES.length;
  const prevState = INDIAN_STATES[prevIndex];
  const nextState = INDIAN_STATES[nextIndex];

  // Merge base crafts with custom seller uploaded crafts for this state
  const [customCrafts, setCustomCrafts] = useState<Craft[]>([]);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('varnam_custom_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        const matching = parsed.filter((c: any) => c.stateId === state.id || c.stateName?.toLowerCase() === state.name.toLowerCase());
        setCustomCrafts(matching);
      }
    } catch (e) {
      // ignore
    }
  }, [state]);

  // All crafts belonging to this state
  const stateCrafts = [
    ...customCrafts,
    ...ALL_CRAFTS.filter(c => c.stateId === state.id || state.signatureCraftIds.includes(c.id))
  ].filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);

  // Landmark Chips matching the Mockup
  const tamilNaduLandmarks: LandmarkHighlight[] = [
    { title: 'Meenakshi Amman Temple', subtitle: 'Madurai', iconType: 'gopuram' },
    { title: 'Brihadeeswarar Temple', subtitle: 'Thanjavur', iconType: 'vimana' },
    { title: 'Kanchipuram', iconType: 'shuttle' },
    { title: 'Ooty', iconType: 'mountain' },
    { title: 'Nilgiri Mountain Railway', iconType: 'train' }
  ];

  const landmarks: LandmarkHighlight[] = state.slug === 'tamil-nadu'
    ? tamilNaduLandmarks
    : (state.culturalHighlights || []).map((h, i) => {
        const types: LandmarkHighlight['iconType'][] = ['gopuram', 'vimana', 'shuttle', 'mountain', 'train', 'fort', 'boat', 'palace'];
        return {
          title: h.title,
          subtitle: h.category,
          iconType: types[i % types.length]
        };
      });

  const stickers = state.stickers || [];

  return (
    <div className="min-h-screen bg-[#F8F3EA] text-[#1C1917] flex relative overflow-x-hidden selection:bg-[#6E2A38] selection:text-white font-sans">
      
      {/* ============================================================ */}
      {/* LEFT VERTICAL PAISLEY WOODBLOCK BORDER (Exact from Mockup) */}
      {/* ============================================================ */}
      <PaisleyBorderBand color={state.accentColor || '#6E2A38'} />

      {/* Main Museum Canvas */}
      <div className="flex-1 flex flex-col min-w-0 relative">

        {/* ========================================================== */}
        {/* TOP-RIGHT HANGING TEMPLE BELLS (Exact from Mockup) */}
        {/* ========================================================== */}
        <div className="absolute top-0 right-4 sm:right-8 z-30 pointer-events-none">
          <TempleBellsDecor />
        </div>

        {/* TOP-LEFT CORNER FRANGIPANI BLOSSOMS */}
        <div className="absolute top-0 left-0 z-20 pointer-events-none">
          <FrangipaniBlossoms position="top-left" />
        </div>

        {/* Mode Selector Header Bar for Masterpiece States */}
        {hasExactMasterpiece && (
          <div className="flex items-center justify-between px-4 sm:px-8 py-2.5 bg-[#FAF6F0] border-b border-[#D9C4A5]/50 z-20">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-serif font-bold uppercase tracking-wider text-[#6E2A38]">
                {state.name} Heritage Canvas
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-xs text-stone-600">
                {state.giCount}+ Certified GI Crafts
              </span>
            </div>

            <div className="inline-flex rounded-full bg-stone-200/80 p-0.5 text-xs font-serif shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode('exact')}
                className={`px-3 py-1 rounded-full font-bold transition flex items-center gap-1.5 ${
                  viewMode === 'exact' ? 'bg-[#6E2A38] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#F5D77F]" />
                <span>Exact UI/UX Showcase</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('component')}
                className={`px-3 py-1 rounded-full font-bold transition flex items-center gap-1.5 ${
                  viewMode === 'component' ? 'bg-[#6E2A38] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Component Layout</span>
              </button>
            </div>
          </div>
        )}

        {hasExactMasterpiece && viewMode === 'exact' ? (
          <ExactMockupCanvas
            stateSlug={state.slug}
            stateName={state.name}
            allCrafts={stateCrafts}
            onSelectCraft={(craft) => setQuickViewCraft(craft)}
          />
        ) : (
          <>
            {/* ========================================================== */}
            {/* 1. STATE HERO SECTION (Exact Layout from User Mockup) */}
            {/* ========================================================== */}
            <section className="relative pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-12 border-b border-[#D9C4A5]/40 overflow-hidden">
              
              <div className="max-w-7xl mx-auto space-y-6">
                
                {/* Top Navigation: ← Back to India */}
                <div className="flex items-center justify-between">
                  <Link
                    to="/explore-india"
                    className="inline-flex items-center gap-1.5 text-xs font-serif font-bold uppercase tracking-wider text-[#6E2A38] hover:text-[#C85A32] transition select-none group"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to India</span>
                  </Link>

                  <div className="flex items-center gap-2 pr-24 sm:pr-32">
                    <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#8F532B]">
                      {state.zone} India
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="text-[11px] text-stone-600">
                      {state.giCount}+ Certified GI Crafts
                    </span>
                  </div>
                </div>

                {/* Main Hero Grid: Left Content + Right Famous Place Photograph */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                  
                  {/* Left Column: Heading, Subheading, Landmark Chips */}
                  <div className="lg:col-span-7 space-y-6 relative z-10">
                    
                    {/* State Name Headline */}
                    <div className="space-y-3">
                      <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#4A1521] leading-[1.04]">
                        {state.name}
                      </h1>

                      {/* Subheading (Exact prompt phrase) */}
                      <p className="font-serif text-lg sm:text-2xl text-[#3D2C1F] font-normal leading-relaxed max-w-xl">
                        {state.tagLine || 'Where temples, textiles and traditional craftsmanship tell stories across generations.'}
                      </p>
                    </div>

                    {/* Cultural Landmark Chips with Custom Drawn Icons */}
                    <div className="space-y-2.5 pt-2">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        {landmarks.map((landmark, idx) => (
                          <LandmarkChip key={idx} landmark={landmark} />
                        ))}
                      </div>
                    </div>

                    {/* Regional Cultural Story Excerpt */}
                    <p className="text-xs sm:text-sm text-[#5C483A] leading-relaxed max-w-2xl pt-1 font-serif">
                      {state.culturalStory}
                    </p>

                  </div>

                  {/* Right Column: High-Resolution Famous Place Photo with Soft Parchment Fade */}
                  <div className="lg:col-span-5 relative flex items-center justify-center">
                    
                    {/* Subtle Decorative Star Kolam Icon in Whitespace */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 text-[#C59B27] opacity-60 pointer-events-none select-none hidden lg:block">
                      <svg viewBox="0 0 40 40" fill="currentColor">
                        <polygon points="20,0 24,14 38,14 27,23 31,37 20,28 9,37 13,23 2,14 16,14" />
                      </svg>
                    </div>

                    {/* Famous Place Photo */}
                    <div className="relative w-full max-w-lg aspect-4/5 sm:aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 ring-1 ring-[#D9C4A5] group">
                      <img
                        src={state.heroImage}
                        alt={`${state.name} Heritage Architecture`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/states/tamil-nadu/hero.png';
                        }}
                      />
                      {/* Subtle vignette and parchment blend gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F8F3EA]/50 to-transparent pointer-events-none hidden lg:block" />

                      {/* Photo Caption Tag */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5D77F] block">
                          Iconic Monument
                        </span>
                        <p className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                          {landmarks[0]?.title || state.name}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </section>

            {/* ========================================================== */}
            {/* 2. SIGNATURE CRAFTS SECTION (Exact Layout from Mockup) */}
            {/* ========================================================== */}
            <section id="signature-crafts" className="relative">
              <SignatureCraftScrapbook
                stateName={state.name}
                stateSlug={state.slug}
                stickers={stickers}
                allCrafts={stateCrafts}
                accentColor={state.accentColor}
              />
            </section>
          </>
        )}

        {/* ========================================================== */}
        {/* 3. COMPLETE GI CATALOGUE & PURCHASING GRID */}
        {/* ========================================================== */}
        <section className="py-16 px-4 sm:px-8 lg:px-12 bg-white border-t border-[#D9C4A5]/40">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6E2A38]">
                  Available to Purchase Direct from Guilds
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                  All {stateCrafts.length} Certified Crafts of {state.name}
                </h3>
              </div>

              <span className="text-xs text-stone-500">
                Each product includes an encrypted NFC authenticity tag.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {stateCrafts.map(craft => (
                <CraftCard
                  key={craft.id}
                  craft={craft}
                  onQuickView={(c) => setQuickViewCraft(c)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 4. STATE TO STATE BOTTOM NAVIGATOR */}
        {/* ========================================================== */}
        <nav className="py-8 px-4 sm:px-8 border-t border-[#D9C4A5]/40 bg-[#F8F3EA] flex items-center justify-between">
          <Link
            to={`/explore-india/${prevState.slug}`}
            className="flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider text-[#6E2A38] hover:text-[#C85A32] transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>← Previous: {prevState.name}</span>
          </Link>

          <Link
            to="/explore-india"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#D9C4A5] text-xs font-semibold text-stone-700 hover:text-[#6E2A38] transition"
          >
            <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>All 28 States Map</span>
          </Link>

          <Link
            to={`/explore-india/${nextState.slug}`}
            className="flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider text-[#6E2A38] hover:text-[#C85A32] transition group"
          >
            <span>Next: {nextState.name} →</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* BOTTOM-RIGHT CORNER FRANGIPANI BLOSSOMS */}
        <div className="absolute bottom-0 right-0 z-20 pointer-events-none">
          <FrangipaniBlossoms position="bottom-right" />
        </div>

      </div>

      {/* Quick View Modal */}
      {quickViewCraft && (
        <QuickViewModal
          craft={quickViewCraft}
          onClose={() => setQuickViewCraft(null)}
        />
      )}

    </div>
  );
};
