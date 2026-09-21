import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  ShoppingBag, 
  Hammer, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Mic, 
  Globe,
  Feather
} from 'lucide-react';

export const RoleSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { loginAsCustomer, loginAsSeller } = useAuth();

  const handleSelectCustomer = () => {
    navigate('/login');
  };

  const handleSelectSeller = () => {
    navigate('/seller/login');
  };

  const handleDirectCustomerDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    loginAsCustomer('Ananya Sharma', 'ananya.heritage@gmail.com');
    navigate('/explore-india');
  };

  const handleDirectSellerDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    loginAsSeller('Meena of Pollachi', 'ART-001', 'Bamboo & Cane Craft', 'Tamil Nadu');
    navigate('/seller/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1C1917] flex flex-col justify-between relative overflow-hidden font-sans selection:bg-[#6E2A38] selection:text-white">
      
      {/* Traditional Corner Kolam / Rangoli Filigree Motifs */}
      <div className="absolute top-4 left-4 w-28 h-28 pointer-events-none opacity-20 select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#6E2A38" strokeWidth="1.5">
          <circle cx="20" cy="20" r="12" />
          <circle cx="20" cy="20" r="4" fill="#6E2A38" />
          <path d="M20 8 C40 8 40 40 8 40" />
          <path d="M20 32 C40 32 40 80 8 80" />
          <path d="M32 20 C80 20 80 40 32 40" />
          <line x1="8" y1="8" x2="80" y2="80" strokeDasharray="3,3" />
        </svg>
      </div>

      <div className="absolute top-4 right-4 w-28 h-28 pointer-events-none opacity-20 select-none rotate-90">
        <svg viewBox="0 0 100 100" fill="none" stroke="#6E2A38" strokeWidth="1.5">
          <circle cx="20" cy="20" r="12" />
          <circle cx="20" cy="20" r="4" fill="#6E2A38" />
          <path d="M20 8 C40 8 40 40 8 40" />
          <path d="M20 32 C40 32 40 80 8 80" />
          <path d="M32 20 C80 20 80 40 32 40" />
          <line x1="8" y1="8" x2="80" y2="80" strokeDasharray="3,3" />
        </svg>
      </div>

      <div className="absolute bottom-4 left-4 w-28 h-28 pointer-events-none opacity-20 select-none -rotate-90">
        <svg viewBox="0 0 100 100" fill="none" stroke="#6E2A38" strokeWidth="1.5">
          <circle cx="20" cy="20" r="12" />
          <circle cx="20" cy="20" r="4" fill="#6E2A38" />
          <path d="M20 8 C40 8 40 40 8 40" />
          <path d="M20 32 C40 32 40 80 8 80" />
          <path d="M32 20 C80 20 80 40 32 40" />
          <line x1="8" y1="8" x2="80" y2="80" strokeDasharray="3,3" />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 w-28 h-28 pointer-events-none opacity-20 select-none rotate-180">
        <svg viewBox="0 0 100 100" fill="none" stroke="#6E2A38" strokeWidth="1.5">
          <circle cx="20" cy="20" r="12" />
          <circle cx="20" cy="20" r="4" fill="#6E2A38" />
          <path d="M20 8 C40 8 40 40 8 40" />
          <path d="M20 32 C40 32 40 80 8 80" />
          <path d="M32 20 C80 20 80 40 32 40" />
          <line x1="8" y1="8" x2="80" y2="80" strokeDasharray="3,3" />
        </svg>
      </div>

      {/* Decorative Gold & Maroon Edge Borders */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#6E2A38] via-[#C59B27] to-[#6E2A38]" />
      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#6E2A38] via-[#C59B27] to-[#6E2A38]" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-auto relative z-10 w-full">
        
        {/* Brand Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D9C4A5] shadow-xs">
            <div className="w-5 h-5 rounded-full bg-[#6E2A38] text-[#F5D77F] flex items-center justify-center text-xs">
              ❖
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#6E2A38]">
              Living Heritage Gateway
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-[0.15em] text-[#4A1521] leading-none">
              VARNAM
            </h1>
            <p className="font-serif text-base sm:text-xl text-[#8F532B] italic tracking-wide">
              India's Living Crafts
            </p>
          </div>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#5C483A] leading-relaxed pt-2">
            Welcome to India's sacred craft chronicle. Select your journey below to enter either the regional connoisseur marketplace or the artisan studio.
          </p>

          <div className="flex items-center justify-center gap-3 text-[#C59B27] text-xs font-serif pt-1">
            <span>—</span> <span>❖</span> <span>—</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TWO LARGE ICONS: CUSTOMER AND SELLER (Exact Prompt Requirement) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          
          {/* ======================================================== */}
          {/* OPTION 1: CUSTOMER (Buyer / Heritage Connoisseur) */}
          {/* ======================================================== */}
          <div
            onClick={handleSelectCustomer}
            className="group relative bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#D9C4A5] hover:border-[#6E2A38] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden transform hover:-translate-y-1"
          >
            {/* Top Accent Gradient Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#BE5A3B] via-[#6E2A38] to-[#8C3446]" />

            {/* Corner Decorative Motif */}
            <div className="absolute top-4 right-4 text-[#C59B27] opacity-20 group-hover:opacity-40 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M12 4 L14 10 L20 12 L14 14 L12 20 L10 14 L4 12 L10 10 Z" />
              </svg>
            </div>

            <div className="space-y-6">
              {/* Large Icon Box */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#FAF6F0] border-2 border-[#D9C4A5] group-hover:border-[#6E2A38] text-[#6E2A38] group-hover:bg-[#6E2A38] group-hover:text-[#F5D77F] flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105">
                <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5]" />
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] text-[#6E2A38] text-[10px] font-bold uppercase tracking-wider border border-[#D9C4A5]">
                  <Compass className="w-3 h-3" />
                  <span>Buyer & Collector</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors">
                  Customer
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  Browse all 28 Indian states, discover certified GI handcrafts, listen to living oral stories translated into your own language, and acquire authentic treasures directly from artisan guilds.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-2 text-xs text-[#5C483A]">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>Explore 28 State Regional Hubs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5C483A]">
                  <Globe className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>Read Stories in 9 Indian Languages</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5C483A]">
                  <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>AI Cultural Chatbot for Inquiries</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 space-y-3">
              <button
                type="button"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#6E2A38] group-hover:bg-[#541E2A] transition shadow-md flex items-center justify-center gap-2"
              >
                <span>Enter as Customer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleDirectCustomerDemo}
                className="w-full py-2 px-4 rounded-lg bg-[#FAF6F0] hover:bg-[#F2E8DC] border border-[#D9C4A5] text-[11px] font-semibold text-stone-700 transition flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#AD7C2B]" />
                <span>Instant Demo: Ananya Sharma</span>
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* OPTION 2: SELLER (Master Artisan & Guild Leader) */}
          {/* ======================================================== */}
          <div
            onClick={handleSelectSeller}
            className="group relative bg-[#1B2A4A] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#C59B27]/40 hover:border-[#F5D77F] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden transform hover:-translate-y-1"
          >
            {/* Top Accent Gold Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C59B27] via-[#F5D77F] to-[#AD7C2B]" />

            {/* Corner Decorative Motif */}
            <div className="absolute top-4 right-4 text-[#F5D77F] opacity-20 group-hover:opacity-40 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M12 4 L14 10 L20 12 L14 14 L12 20 L10 14 L4 12 L10 10 Z" />
              </svg>
            </div>

            <div className="space-y-6">
              {/* Large Icon Box */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#131E35] border-2 border-[#C59B27]/50 group-hover:border-[#F5D77F] text-[#F5D77F] group-hover:bg-[#F5D77F] group-hover:text-[#131E35] flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105">
                <Hammer className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5]" />
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131E35] text-[#F5D77F] text-[10px] font-bold uppercase tracking-wider border border-[#C59B27]/40">
                  <Feather className="w-3 h-3" />
                  <span>Artisan & Guild</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white group-hover:text-[#F5D77F] transition-colors">
                  Seller
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                  Record your oral story in your mother tongue using voice or typing. Upload pieces with real photos, generate AI-assisted cultural briefings, and publish directly to your state page.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <Mic className="w-4 h-4 text-[#F5D77F] shrink-0" />
                  <span>Voice Storytelling in Mother Tongue</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <Sparkles className="w-4 h-4 text-[#F5D77F] shrink-0" />
                  <span>AI Story Briefing from Verified Facts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-[#F5D77F] shrink-0" />
                  <span>Seller History & Real Customer Reviews</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 space-y-3">
              <button
                type="button"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-[#131E35] bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C59B27] hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>Enter as Seller</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleDirectSellerDemo}
                className="w-full py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-[#C59B27]/40 text-[11px] font-semibold text-[#F5D77F] transition flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
                <span>Instant Demo: Meena of Pollachi</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-xs text-stone-500 font-serif">
          <span>Protected under the Geographical Indications of Goods Act (1999) • Direct Artisan Attribution</span>
        </div>

      </div>

    </div>
  );
};
