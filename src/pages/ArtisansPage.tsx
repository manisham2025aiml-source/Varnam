import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_ARTISANS } from '../data/artisans';
import { INDIAN_STATES } from '../data/states';
import { Award, MapPin, ArrowRight, ShieldCheck, Hammer, Users } from 'lucide-react';

export const ArtisansPage: React.FC = () => {
  const [selectedState, setSelectedState] = useState('');

  const filteredArtisans = selectedState
    ? ALL_ARTISANS.filter(a => a.stateName === selectedState)
    : ALL_ARTISANS;

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C85A32]">
            The Living Custodians
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1C1917]">
            Master Artisan Guilds of India
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            Meet the generational Shilpa Sthapathis, Chhipa block-printers, Salvi double-ikat weavers, and Khatri Roghan alchemists safeguarding India's intangible cultural heritage.
          </p>
        </div>

        {/* State Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#C59B27]/25 shadow-xs">
          <span className="text-xs font-semibold text-stone-600">
            Representing <strong>{filteredArtisans.length}</strong> living legends & master craftspeople
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500">Filter by State:</span>
            <select
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)}
              className="text-xs p-2 bg-[#FAF6F0] border border-stone-200 rounded-lg focus:outline-none"
            >
              <option value="">All Regions ({INDIAN_STATES.length} States)</option>
              {INDIAN_STATES.map(s => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtisans.map(artisan => (
            <Link
              key={artisan.id}
              to={`/artisan/${artisan.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#C59B27]/25 shadow-xs hover:shadow-xl hover:border-[#C85A32] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={artisan.avatar}
                  alt={artisan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1B2A4A]/90 text-[#D4AF37] text-xs font-bold uppercase tracking-wider backdrop-blur-xs border border-[#C59B27]/30">
                  {artisan.verifiedStatus}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider block">
                    {artisan.village}, {artisan.stateName}
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-tight">
                    {artisan.name}
                  </h3>
                  <p className="text-xs text-white/80">
                    {artisan.title}
                  </p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#7A2021] block">
                    Specialty: {artisan.craftSpecialty}
                  </span>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed italic">
                    "{artisan.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">
                    {artisan.experienceYears} Years • {artisan.generation}
                  </span>
                  <span className="text-[#C85A32] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Journey <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
