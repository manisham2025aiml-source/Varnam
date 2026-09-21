import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles, Award, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131E35] text-[#FAF6F0] pt-16 pb-12 border-t-2 border-[#C59B27]/40 relative overflow-hidden">
      {/* Subtle Background Motif Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-heritage-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Promise & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C85A32] to-[#7A2021] flex items-center justify-center ring-2 ring-[#C59B27]/50">
                <svg className="w-5 h-5 text-[#FAF6F0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <span className="font-serif tracking-[0.25em] text-2xl font-bold text-[#FAF6F0]">
                VARNAM
              </span>
            </div>
            
            <p className="text-xl font-serif italic text-[#D4AF37] leading-relaxed">
              "Preserving heritage. Empowering artisans. Building trust."
            </p>
            
            <p className="text-sm text-white/70 leading-relaxed pr-4">
              Varnam is India's dedicated digital museum, storytelling, and cryptographic identity platform for authentic Geographical Indication (GI) tagged handicrafts. Every piece is bound to its master artisan through immutable physical NFC and ledger verification.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                100% GI Tagged & Cryptographically Verified
              </span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Cultural Discovery */}
            <div>
              <h4 className="font-serif text-sm uppercase tracking-widest text-[#D4AF37] mb-4 font-semibold">
                Explore India
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75">
                <li>
                  <Link to="/explore-india" className="hover:text-[#C85A32] transition flex items-center gap-1">
                    Interactive State Map <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                  </Link>
                </li>
                <li>
                  <Link to="/explore-india/tamil-nadu" className="hover:text-[#C85A32] transition">
                    Tamil Nadu Temple Arts
                  </Link>
                </li>
                <li>
                  <Link to="/explore-india/rajasthan" className="hover:text-[#C85A32] transition">
                    Rajasthan Royal Guilds
                  </Link>
                </li>
                <li>
                  <Link to="/explore-india/gujarat" className="hover:text-[#C85A32] transition">
                    Gujarat Double Ikat & Roghan
                  </Link>
                </li>
                <li>
                  <Link to="/explore-india/kashmir" className="hover:text-[#C85A32] transition">
                    Kashmir Cloud Pashmina
                  </Link>
                </li>
                <li>
                  <Link to="/explore-india/kerala" className="hover:text-[#C85A32] transition">
                    Kerala Metal Mirrors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Authenticity & Collectors */}
            <div>
              <h4 className="font-serif text-sm uppercase tracking-widest text-[#D4AF37] mb-4 font-semibold">
                Verification & Trust
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75">
                <li>
                  <Link to="/verify" className="hover:text-[#C85A32] transition flex items-center gap-1 text-[#D4AF37] font-medium">
                    Tap. Verify. Discover. (NFC)
                  </Link>
                </li>
                <li>
                  <Link to="/digital-locker" className="hover:text-[#C85A32] transition">
                    Digital Certificate Locker
                  </Link>
                </li>
                <li>
                  <Link to="/dataset" className="hover:text-[#C85A32] transition flex items-center gap-1 text-[#DDA15E]">
                    Open Cultural Dataset (JSON) <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace" className="hover:text-[#C85A32] transition">
                    GI Handicraft Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/stories" className="hover:text-[#C85A32] transition">
                    The Varnam Journal
                  </Link>
                </li>
                <li>
                  <Link to="/artisans" className="hover:text-[#C85A32] transition">
                    Master Artisan Lineages
                  </Link>
                </li>
              </ul>
            </div>

            {/* Trust & Provenance */}
            <div>
              <h4 className="font-serif text-sm uppercase tracking-widest text-[#D4AF37] mb-4 font-semibold">
                Trust & Provenance
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75">
                <li>
                  <Link to="/verify" className="hover:text-[#C85A32] transition">
                    NFC Authenticity Verification
                  </Link>
                </li>
                <li>
                  <Link to="/digital-locker" className="hover:text-[#C85A32] transition">
                    Customer Digital Locker
                  </Link>
                </li>
                <li>
                  <Link to="/dataset" className="hover:text-[#C85A32] transition">
                    Open Cultural Knowledgebase
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-[#C85A32] transition">
                    Customer Sign In
                  </Link>
                </li>
                <li>
                  <span className="text-white/40 cursor-default">
                    Geographical Indications Act (1999)
                  </span>
                </li>
                <li>
                  <span className="text-white/40 cursor-default">
                    NTAG424 Cryptographic DNA
                  </span>
                </li>
                <li>
                  <span className="text-white/40 cursor-default">
                    Direct-to-Artisan Fair Trade
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Legal & Cultural Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} VARNAM Foundation. All rights reserved. Dedicated to India's living master artisans.
          </p>

          <div className="flex items-center gap-4 text-white/60">
            <span>Authentic GI Tagged Traditions</span>
            <span>•</span>
            <span>Zero Synthetic Hallucinations</span>
            <span>•</span>
            <span>Direct Artisan Provenance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
