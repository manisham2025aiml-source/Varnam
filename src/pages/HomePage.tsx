import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useVarnam } from '../context/VarnamContext';
import { useAuth } from '../context/AuthContext';
import { ALL_CRAFTS } from '../data/crafts';
import { ALL_ARTISANS } from '../data/artisans';
import { EDITORIAL_STORIES } from '../data/stories';
import { INDIAN_STATES } from '../data/states';
import { IndiaMap } from '../components/map/IndiaMap';
import { CraftCard } from '../components/craft/CraftCard';
import { QuickViewModal } from '../components/craft/QuickViewModal';
import { VarnamPromptStateGrid } from '../components/home/VarnamPromptStateGrid';
import { ExploreIndiaThroughCrafts } from '../components/home/ExploreIndiaThroughCrafts';
import { CraftStickerBadge } from '../components/common/CraftStickerBadge';
import { Craft } from '../types';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Cpu, 
  Users, 
  Award, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Flame,
  Radio,
  Search,
  ShoppingBag,
  Lock,
  Hammer,
  Layers,
  BookOpen,
  Volume2,
  Tag,
  MapPin
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t } = useVarnam();
  const { currentRole, setRole, loginAsCustomer, loginAsSeller } = useAuth();
  const navigate = useNavigate();
  const [quickViewCraft, setQuickViewCraft] = useState<Craft | null>(null);
  const [quizState, setQuizState] = useState<string>('all');
  const [homeSearch, setHomeSearch] = useState('');

  const featuredCrafts = ALL_CRAFTS.filter(c => c.featured).slice(0, 6);
  const masterArtisans = ALL_ARTISANS.slice(0, 4);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (homeSearch.trim()) {
      navigate(`/marketplace?q=${encodeURIComponent(homeSearch.trim())}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION — INDIA LIVING HERITAGE */}
      {/* ============================================================ */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#1B2A4A] text-[#FAF6F0]">
        
        {/* Background Craft Imagery with Editorial Warm Parchment / Indigo Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85"
            alt="Indian Traditional Craftsman"
            className="w-full h-full object-cover object-center scale-105 opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131E35]/95 via-[#1B2A4A]/70 to-[#131E35]/80" />
        </div>

        {/* Indian Cultural Architectural Silhouettes Overlay */}
        <div className="absolute bottom-0 inset-x-0 h-48 opacity-[0.08] pointer-events-none z-1 flex items-end justify-around px-8 select-none">
          {/* Dravidian Temple Gopuram Silhouette */}
          <svg viewBox="0 0 120 160" className="w-32 h-44 fill-[#D4AF37]">
            <polygon points="60,10 75,35 70,40 85,70 80,75 95,110 90,115 105,155 15,155 30,115 25,110 40,75 35,70 50,40 45,35" />
            <rect x="52" y="125" width="16" height="30" rx="2" fill="#1B2A4A" />
          </svg>

          {/* Rajasthan Fort & Chhatri Silhouette */}
          <svg viewBox="0 0 140 160" className="w-36 h-40 fill-[#D4AF37]">
            <path d="M70,30 Q90,55 90,80 L100,80 L100,155 L40,155 L40,80 L50,80 Q50,55 70,30 Z" />
            <circle cx="70" cy="20" r="6" />
            <line x1="70" y1="10" x2="70" y2="20" stroke="#D4AF37" strokeWidth="2" />
          </svg>

          {/* Mughal & Bengal Terracotta Jharokha Arch */}
          <svg viewBox="0 0 120 160" className="w-32 h-44 fill-[#D4AF37]">
            <path d="M20,155 L20,70 Q20,30 60,15 Q100,30 100,70 L100,155 Z" />
            <path d="M35,155 L35,80 Q35,50 60,40 Q85,50 85,80 L85,155 Z" fill="#1B2A4A" />
          </svg>

          {/* Himalayan Monastic Stupa Dome */}
          <svg viewBox="0 0 120 160" className="w-32 h-40 fill-[#D4AF37]">
            <path d="M60,15 L60,40 M50,40 L70,40 M60,40 C35,40 30,70 30,110 L90,110 C90,70 85,40 60,40 Z M20,110 L100,110 L100,155 L20,155 Z" stroke="#D4AF37" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Subtle Decorative Kolam Geometry & Block-Print Accent */}
        <div className="absolute top-10 right-10 w-80 h-80 opacity-15 pointer-events-none select-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="0.8">
            <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="15" />
            <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="2,2" />
            <line x1="10" y1="25" x2="90" y2="75" strokeDasharray="2,2" />
            <line x1="10" y1="75" x2="90" y2="25" strokeDasharray="2,2" />
          </svg>
        </div>

        {/* Physical Collectible Craft Stickers Floating Around Hero Whitespace */}
        {INDIAN_STATES[0]?.stickers?.[0] && (
          <div className="hidden xl:block absolute left-8 top-32 z-20 animate-in fade-in slide-in-from-left duration-700">
            <CraftStickerBadge
              sticker={INDIAN_STATES[0].stickers[0]}
              size="sm"
              className="drop-shadow-2xl"
            />
          </div>
        )}

        {INDIAN_STATES[0]?.stickers?.[2] && (
          <div className="hidden xl:block absolute right-8 top-36 z-20 animate-in fade-in slide-in-from-right duration-700">
            <CraftStickerBadge
              sticker={INDIAN_STATES[0].stickers[2]}
              size="sm"
              className="drop-shadow-2xl"
            />
          </div>
        )}

        {INDIAN_STATES[0]?.stickers?.[4] && (
          <div className="hidden lg:block absolute left-12 bottom-12 z-20">
            <CraftStickerBadge
              sticker={INDIAN_STATES[0].stickers[4]}
              size="sm"
              className="drop-shadow-2xl"
            />
          </div>
        )}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center space-y-8">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6F0]/10 border border-[#C59B27]/40 backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
              Geographical Indication (GI) Verified • Cryptographic NFC Identity
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FAF6F0] leading-[1.08]">
              Every Craft Has a <span className="text-[#C85A32] italic font-normal">Story.</span>
            </h1>
            <p className="text-base sm:text-xl text-[#FAF6F0]/80 max-w-2xl mx-auto font-normal leading-relaxed">
              Discover the hands, living heritage, and sacred journey behind India's most celebrated handcrafted traditions — verified at origin by cryptographic NFC.
            </p>
          </div>

          {/* Natural Language Search Box in Hero */}
          <form 
            onSubmit={handleHeroSearch}
            className="w-full max-w-xl relative flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-1.5 border border-[#C59B27]/50"
          >
            <Search className="w-5 h-5 text-stone-400 ml-4 shrink-0" />
            <input
              type="text"
              placeholder="Search 'Swamimalai bronze', 'Kanchipuram silk', 'Roghan art'..."
              value={homeSearch}
              onChange={e => setHomeSearch(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#C85A32] hover:bg-[#B34724] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition shrink-0"
            >
              Search
            </button>
          </form>

          {/* Action CTAs: Pure Customer Discovery */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/explore-india"
              className="px-6 sm:px-8 py-4 bg-[#6E2A38] hover:bg-[#541E2A] text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 group ring-2 ring-[#C59B27]/40"
            >
              <Compass className="w-4 h-4 text-white" />
              <span>Explore All 28 Indian States</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/crafts"
              className="px-6 sm:px-8 py-4 bg-white/10 hover:bg-white/20 text-[#FAF6F0] font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md border border-[#C59B27]/40 hover:border-[#D4AF37] transition-all duration-300 flex items-center gap-2.5 group shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span>Browse Certified Crafts</span>
            </Link>

            <Link
              to="/verify"
              className="px-5 py-4 bg-white/10 hover:bg-white/20 text-[#FAF6F0] font-bold rounded-full text-xs uppercase tracking-wider backdrop-blur-md border border-[#C59B27]/40 hover:border-[#D4AF37] transition-all duration-300 flex items-center gap-2 group"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Verify NFC Tag</span>
            </Link>
          </div>

          {/* Floating Parallax Stat Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-10 w-full max-w-4xl text-left">
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] block">
                28
              </span>
              <span className="text-xs text-white/70">
                Cultural State Hubs
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] block">
                114+
              </span>
              <span className="text-xs text-white/70">
                GI & Living Crafts
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] block">
                100%
              </span>
              <span className="text-xs text-white/70">
                Cryptographic NFC Proof
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] block">
                180+
              </span>
              <span className="text-xs text-white/70">
                Master Artisan Lineages
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 1B. BROWSE LIVING CRAFTS BY INDIAN STATE (Parchment Aesthetic) */}
      {/* ============================================================ */}
      <section className="py-16 bg-[#FAF6F0] border-b-2 border-[#D9C4A5]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#C59B27]/40 text-[#6E2A38] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>India's Living Traditions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A1521]">
              Browse by Indian State
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto font-serif leading-relaxed">
              Every Indian state holds centuries of living memory, iconic architectural landmarks, and signature handcrafts. Choose a state to enter its regional museum scrapbook.
            </p>
          </div>

          {/* State Grid */}
          <VarnamPromptStateGrid />

          <div className="text-center pt-2">
            <Link
              to="/state/tamil-nadu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6E2A38] hover:bg-[#541E2A] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition"
            >
              <span>Explore Tamil Nadu Featured Showcase →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. "EXPLORE INDIA THROUGH ITS CRAFTS" — ALL 28 STATES */}
      {/* ============================================================ */}
      <ExploreIndiaThroughCrafts />

      {/* ============================================================ */}
      {/* 2B. INTERACTIVE GEOGRAPHIC MAP */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-t border-[#C59B27]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C85A32]">
              Cartographic Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Geographic Craft Cartography
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Hover over and select states on the geographic map to view their regional artisan guilds, raw materials, and royal patronages.
            </p>
          </div>

          <IndiaMap />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURED CRAFTS CAROUSEL / GRID */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-y border-[#C59B27]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#7A2021]">
                Master Creations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mt-1">
                Featured Heritage Crafts
              </h2>
            </div>

            <Link
              to="/marketplace"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] hover:text-[#7A2021] transition"
            >
              <span>View All 40+ GI Crafts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredCrafts.map(craft => (
              <CraftCard
                key={craft.id}
                craft={craft}
                onQuickView={(c) => setQuickViewCraft(c)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. HOW VARNAM WORKS — 4-STEP VISUAL JOURNEY */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#1B2A4A] text-[#FAF6F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37]">
              Immutable Authenticity Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF6F0]">
              How Varnam Works
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Bridging ancestral master crafts with cryptographic verification and AI storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="p-6 bg-white/5 rounded-2xl border border-[#C59B27]/30 space-y-4 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C85A32] flex items-center justify-center font-serif text-xl font-bold text-white shadow-md">
                1
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAF6F0]">
                Artisan Creates & Registers
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Master artisans record raw material provenance, techniques, and lineage under the Geographical Indications (GI) authority.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white/5 rounded-2xl border border-[#C59B27]/30 space-y-4 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27] flex items-center justify-center font-serif text-xl font-bold text-[#1C1917] shadow-md">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAF6F0]">
                Cryptographic Digital ID
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                An encrypted tamper-evident NFC NTAG424 chip is embedded physically into the craft, minting an immutable SHA-256 certificate on the ledger.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white/5 rounded-2xl border border-[#C59B27]/30 space-y-4 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#7A2021] flex items-center justify-center font-serif text-xl font-bold text-white shadow-md">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAF6F0]">
                AI Tells the Heritage Story
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Varnam AI transforms verified artisan facts into museum-grade editorial stories and translates across 7 Indian languages without altering cultural terms.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-white/5 rounded-2xl border border-[#C59B27]/30 space-y-4 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center font-serif text-xl font-bold text-white shadow-md">
                4
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAF6F0]">
                Buyer Discovers & Verifies
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Collectors explore by state, tap their smartphone against the physical craft to verify authenticity, and collect digital certificates in their locker.
              </p>
            </div>

          </div>

          <div className="text-center pt-4">
            <Link
              to="/verify"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF6F0] text-[#1B2A4A] hover:bg-[#C59B27] hover:text-[#1C1917] font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              <span>Test the Live NFC Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. MEET THE ARTISANS */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#C85A32]">
                The Custodians of Memory
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] mt-1">
                Meet the Master Artisans
              </h2>
            </div>

            <Link
              to="/artisans"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A2021] hover:text-[#C85A32] transition"
            >
              <span>View All Master Artisans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {masterArtisans.map(artisan => (
              <Link
                key={artisan.id}
                to={`/artisan/${artisan.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#C59B27]/25 shadow-xs hover:shadow-xl hover:border-[#C85A32] transition-all duration-300 flex flex-col"
              >
                <div className="aspect-square relative overflow-hidden bg-stone-100">
                  <img
                    src={artisan.avatar}
                    alt={artisan.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1B2A4A]/90 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                    {artisan.generation.split(' ')[0]} Gen
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <span className="text-[10px] uppercase font-semibold text-[#D4AF37] block">
                      {artisan.stateName}
                    </span>
                    <h4 className="font-serif text-base font-bold truncate">
                      {artisan.name}
                    </h4>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-[#7A2021] block">
                      {artisan.craftSpecialty}
                    </span>
                    <p className="text-xs text-stone-500 line-clamp-2 mt-1 italic">
                      "{artisan.quote}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                    <span>{artisan.experienceYears} Years Master</span>
                    <span className="text-[#C85A32] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                      View Profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CRAFT STORIES MAGAZINE SPREAD */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-y border-[#C59B27]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#7A2021]">
                The Varnam Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mt-1">
                Stories of Hand & Fire
              </h2>
            </div>

            <Link
              to="/stories"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] hover:text-[#7A2021] transition"
            >
              <span>Explore All Editorial Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EDITORIAL_STORIES.slice(0, 3).map(story => (
              <Link
                key={story.id}
                to={`/story/${story.id}`}
                className="group flex flex-col space-y-4"
              >
                <div className="aspect-16/10 rounded-2xl overflow-hidden bg-stone-100 shadow-sm border border-[#C59B27]/20">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-semibold text-[#7A2021] uppercase tracking-wider">
                      {story.stateName}
                    </span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#C85A32] transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {story.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C85A32] pt-1">
                    Read Journal Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. NFC VERIFICATION TEASER — "TAP. VERIFY. DISCOVER." */}
      {/* ============================================================ */}
      <section className="py-24 bg-gradient-to-br from-[#1B2A4A] via-[#131E35] to-[#1C1917] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6F0]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-[#C59B27]/30">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
                NFC NTAG424 Cryptographic DNA
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                Tap. Verify. <span className="text-[#D4AF37] italic">Discover.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Hold your smartphone against any Varnam verified handicraft. Within half a second, the encrypted NFC chip decrypts its origin certificate: revealing the master artisan’s portrait, Kaveri clay purity tests, and timestamped GI registration records.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <span className="font-mono text-xs text-[#D4AF37] block">VRN-TN-000428</span>
                  <span className="text-xs text-white/70">Unique Serial Authenticity</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <span className="font-mono text-xs text-[#D4AF37] block">SHA-256 Ledger</span>
                  <span className="text-xs text-white/70">Tamper-Proof Audit Chain</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/verify"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C85A32] to-[#B34724] hover:from-[#B34724] hover:to-[#7A2021] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition"
                >
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Launch NFC / QR Simulator</span>
                </Link>
              </div>
            </div>

            {/* Interactive NFC Phone Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-[440px] bg-stone-900 rounded-[40px] border-4 border-[#C59B27]/50 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
                {/* Simulated Phone Screen */}
                <div className="w-20 h-4 bg-stone-800 rounded-full mx-auto" />

                <div className="text-center my-auto space-y-4">
                  <div className="w-24 h-24 rounded-full bg-[#C85A32]/20 border-2 border-[#C85A32] flex items-center justify-center mx-auto animate-nfc-pulse">
                    <Radio className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-white">
                      NFC Tag Detected
                    </h5>
                    <p className="text-[11px] text-[#D4AF37] font-mono mt-0.5">
                      Swamimalai Bronze #428
                    </p>
                  </div>
                  <span className="inline-block text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                    100% Cryptographically Verified
                  </span>
                </div>

                <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mb-1" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. AI-POWERED DISCOVERY WIDGET */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C85A32]">
              AI Cultural Curator
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Crafts You May Love
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
              Select what matters most to you to find heritage pieces attuned to your aesthetic and spiritual preferences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { key: 'all', label: 'All Recommendations' },
              { key: 'Textiles & Weaving', label: 'Sacred Weaves (Kanchi, Banaras)' },
              { key: 'Metalwork & Bronze', label: 'Lost-Wax Bronzes & Filigree' },
              { key: 'Paintings & Art', label: 'Devotional & Natural Dye Art' },
              { key: 'Pottery & Ceramics', label: 'Quartz & Terracotta' },
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setQuizState(item.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                  quizState === item.key
                    ? 'bg-[#1B2A4A] text-[#D4AF37] shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#C59B27]/25'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Filtered Recommendations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {ALL_CRAFTS
              .filter(c => quizState === 'all' || c.category === quizState)
              .slice(0, 3)
              .map(craft => (
                <CraftCard
                  key={craft.id}
                  craft={craft}
                  onQuickView={(c) => setQuickViewCraft(c)}
                />
              ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CURATED HERITAGE COLLECTIONS */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-y border-[#C59B27]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7A2021]">
              Curated Thematic Ensembles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Featured Collections
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Link
              to="/marketplace?category=Metalwork%20%26%20Bronze"
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-[#C59B27]/30 flex flex-col justify-end p-8"
            >
              <img
                src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80"
                alt="Temple Bronzes"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 space-y-1 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                  Chola & Vedic Foundry
                </span>
                <h3 className="font-serif text-2xl font-bold">
                  Sacred Temple Bronzes
                </h3>
                <p className="text-xs text-white/80">
                  Swamimalai, Dokra, and Mannar lost-wax castings.
                </p>
              </div>
            </Link>

            <Link
              to="/marketplace?category=Textiles%20%26%20Weaving"
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-[#C59B27]/30 flex flex-col justify-end p-8"
            >
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
                alt="Natural Dyed Silks"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 space-y-1 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                  Pit Loom Dynasties
                </span>
                <h3 className="font-serif text-2xl font-bold">
                  Royal Handloom Silks
                </h3>
                <p className="text-xs text-white/80">
                  Kanchipuram Korvai, Patan Patola, and Banarasi Kadhwa.
                </p>
              </div>
            </Link>

            <Link
              to="/marketplace?category=Paintings%20%26%20Art"
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-[#C59B27]/30 flex flex-col justify-end p-8"
            >
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
                alt="Miniature Art"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 space-y-1 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                  Pigment & Gold
                </span>
                <h3 className="font-serif text-2xl font-bold">
                  Living Painting Traditions
                </h3>
                <p className="text-xs text-white/80">
                  Thanjavur 22K Gold, Nirona Roghan, and Raghurajpur Pattachitra.
                </p>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 9B. COMPLETE VARNAM PLATFORM & PORTALS DIRECTORY */}
      {/* ============================================================ */}
      <section className="py-20 bg-stone-900 text-white relative overflow-hidden border-t-2 border-[#C59B27]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C59B27]/50 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Unified Ecosystem Directory
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF6F0]">
              The Complete <span className="text-[#C85A32] italic">Varnam Platform</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Explore every dimension of India's GI handicraft preservation network. Seamlessly navigate between consumer discovery, IoT hardware labs, master artisan tooling, and provenance auditing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Marketplace */}
            <Link
              to="/marketplace"
              className="p-6 rounded-2xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700 hover:border-[#C85A32] transition-all group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider block">
                    Commerce & Guilds
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C85A32] transition">
                    GI Marketplace
                  </h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Browse 28 authentic GI tagged crafts directly sourced with guaranteed direct-to-artisan revenue.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>Browse Marketplace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 2. Explore India Map */}
            <Link
              to="/explore-india"
              className="p-6 rounded-2xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700 hover:border-blue-400 transition-all group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider block">
                    Geographic Journey
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-blue-400 transition">
                    Explore India Map
                  </h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Interactive state-by-state cartography connecting regional biodiversity to centuries-old craft clusters.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>Open Map Explorer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 3. ESP32 Smart Station IoT Lab */}
            <Link
              to="/verify"
              className="p-6 rounded-2xl bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/40 hover:border-emerald-400 transition-all group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                    Hardware Station
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-emerald-400 transition">
                    ESP32 Smart Station
                  </h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Test the PN532 NFC reader, 0.96" OLED states, and UART telemetry with live product tap simulations.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Launch IoT Station</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 4. Digital Certificate Locker */}
            <Link
              to="/digital-locker"
              className="p-6 rounded-2xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700 hover:border-purple-400 transition-all group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider block">
                    Cryptographic Vault
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-purple-400 transition">
                    Provenance Locker
                  </h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Permanent digital ledger vault of your verified craft certificates with immutable transaction hashes.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>Access Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 5. Master Artisans Directory */}
            <Link
              to="/artisans"
              className="p-6 rounded-2xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700 hover:border-amber-400 transition-all group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                    Living Treasures
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-400 transition">
                    Master Artisans
                  </h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Discover verified genealogies, National Shilp Guru awardees, and studio addresses of master craftsmen.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>Meet Artisans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 6. Artisan Studio (AI Vision & NFC) */}
            <Link
              to="/dashboard/artisan"
              className="p-6 rounded-2xl bg-amber-950/40 hover:bg-amber-950/60 border border-amber-500/40 hover:border-amber-400 transition-all group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <Hammer className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                    Artisan Tooling
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-400 transition">
                    Artisan Studio
                  </h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Multimodal AI Agent for photo analysis, heritage story synthesis, and NFC tag hardware pairing.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Enter Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 7. Admin Hardware Console */}
            <Link
              to="/dashboard/admin"
              className="p-6 rounded-2xl bg-blue-950/40 hover:bg-blue-950/60 border border-blue-500/40 hover:border-blue-400 transition-all group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider block">
                    Governance & Telemetry
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-blue-400 transition">
                    Admin Telemetry
                  </h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Real-time IoT scan logs, product hardware registry table, and GI authority verification auditing.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Open Admin Console</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 8. Open Cultural Dataset */}
            <Link
              to="/dataset"
              className="p-6 rounded-2xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700 hover:border-stone-400 transition-all group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-stone-700 text-stone-300 flex items-center justify-center border border-stone-600">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">
                    Open Research
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-stone-300 transition">
                    Cultural Dataset
                  </h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Downloadable JSON database, REST API schemas, and cultural taxonomy records for researchers.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                <span>View Dataset</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. FINAL CTA BAND — "GIVE EVERY CRAFT ITS IDENTITY" */}
      {/* ============================================================ */}
      <section className="py-24 bg-gradient-to-r from-[#7A2021] via-[#8E361B] to-[#C85A32] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-heritage-pattern pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#FAF6F0] leading-tight">
            Give Every Craft Its Identity.
          </h2>
          <p className="text-sm sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Join the national movement uniting master artisans, cultural preservationists, and discerning collectors through verified digital identity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/marketplace"
              className="px-8 py-4 bg-[#FAF6F0] hover:bg-white text-[#7A2021] font-bold rounded-full text-xs uppercase tracking-wider shadow-xl transition hover:scale-105 duration-200"
            >
              Explore Varnam Marketplace
            </Link>

            <Link
              to="/seller"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-full text-xs uppercase tracking-wider border-2 border-white/50 hover:border-white transition"
            >
              Become a Varnam Seller
            </Link>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        craft={quickViewCraft}
        onClose={() => setQuickViewCraft(null)}
      />

    </div>
  );
};
