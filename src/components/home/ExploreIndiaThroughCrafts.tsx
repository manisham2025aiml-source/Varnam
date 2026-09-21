import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { INDIAN_STATES } from '../../data/states';
import { ALL_CRAFTS } from '../../data/crafts';
import { StateData } from '../../types';
import { Search, Compass, Sparkles, MapPin, ArrowUpRight, Filter } from 'lucide-react';

interface ExploreIndiaThroughCraftsProps {
  className?: string;
}

export const ExploreIndiaThroughCrafts: React.FC<ExploreIndiaThroughCraftsProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const zones = ['All', 'South', 'North', 'West', 'East', 'Central', 'North-East'];

  // Map crafts lookup for quick previews
  const craftsMap = useMemo(() => {
    const map = new Map<string, string>();
    ALL_CRAFTS.forEach(c => {
      map.set(c.id, c.name);
    });
    return map;
  }, []);

  const filteredStates = useMemo(() => {
    return INDIAN_STATES.filter(state => {
      const matchesZone = selectedZone === 'All' || state.zone === selectedZone;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesZone;

      const craftNames = (state.signatureCraftIds || [])
        .map(id => craftsMap.get(id) || id)
        .join(' ')
        .toLowerCase();

      const matchesQuery = 
        state.name.toLowerCase().includes(q) ||
        state.capital.toLowerCase().includes(q) ||
        state.tagLine.toLowerCase().includes(q) ||
        craftNames.includes(q);

      return matchesZone && matchesQuery;
    });
  }, [selectedZone, searchQuery, craftsMap]);

  const handleStateClick = (state: StateData) => {
    navigate(`/explore-india/${state.slug}`);
  };

  return (
    <section id="explore-india-crafts" className={`py-20 sm:py-28 bg-[#FAF6F0] relative overflow-hidden ${className}`}>
      
      {/* Subtle Kolam Background Watermark */}
      <div className="absolute top-12 -left-20 w-96 h-96 opacity-[0.035] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#6E2A38" strokeWidth="1.5">
          <circle cx="100" cy="100" r="80" />
          <polygon points="100,20 180,100 100,180 20,100" />
          <polygon points="100,40 160,100 100,160 40,100" />
          <circle cx="100" cy="100" r="40" />
          <circle cx="100" cy="100" r="20" />
        </svg>
      </div>

      <div className="absolute bottom-10 -right-20 w-96 h-96 opacity-[0.035] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#C85A32" strokeWidth="1.5">
          <rect x="30" y="30" width="140" height="140" transform="rotate(45 100 100)" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="35" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header: Editorial & Culturally Rich */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#C59B27]/30 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E2A38]/10 border border-[#6E2A38]/30 text-[#6E2A38]">
              <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                All 28 States of the Union • Living Digital Museum
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.1]">
              Explore India <span className="text-[#C85A32] italic font-normal">Through Its Crafts</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              India is not a monolith; each state is an ancient civilizational guild with its own earth, dyes, architecture, and sacred craft lineages. Select any of the 28 states below to enter its customized cultural sanctuary.
            </p>
          </div>

          {/* Quick Count & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search state or craft..."
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#C59B27]/40 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C85A32] shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="px-4 py-2 rounded-xl bg-white border border-[#C59B27]/30 text-xs font-semibold text-stone-700 flex items-center justify-between sm:justify-center gap-2 shadow-xs">
              <span className="text-[#6E2A38] font-bold font-serif text-sm">
                {filteredStates.length}
              </span>
              <span className="text-stone-500">
                States Visible
              </span>
            </div>
          </div>
        </div>

        {/* Zone Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs uppercase font-bold text-stone-400 tracking-wider flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" /> Zone:
          </span>
          {zones.map(zone => {
            const isSelected = selectedZone === zone;
            const count = zone === 'All' 
              ? INDIAN_STATES.length 
              : INDIAN_STATES.filter(s => s.zone === zone).length;

            return (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#6E2A38] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#C59B27]/25'
                }`}
              >
                <span>{zone}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 28 Interactive State Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStates.map((state) => {
            // Get craft names preview
            const craftNames = (state.signatureCraftIds || [])
              .map(id => craftsMap.get(id) || id.replace(/-/g, ' '))
              .slice(0, 3);

            // Cultural visual preview
            const previewImage = state.stickers?.[0]?.image || state.heroImage;
            const isIllustrated = state.stickers?.[0]?.isDrawing || false;

            return (
              <div
                key={state.slug}
                onClick={() => handleStateClick(state)}
                className="group relative bg-white rounded-2xl p-5 border border-[#C59B27]/30 hover:border-[#6E2A38] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(110,42,56,0.12)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
                style={{
                  borderTop: `4px solid ${state.accentColor || '#6E2A38'}`
                }}
              >
                {/* Background Subtle Stamp Accent */}
                <div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-[0.07] group-hover:scale-150 transition-transform duration-500 pointer-events-none"
                  style={{ backgroundColor: state.accentColor || '#C85A32' }}
                />

                <div className="space-y-4">
                  {/* Card Header: State Identity & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* State Specific Cultural Motif / Silhouette Icon */}
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                        style={{
                          backgroundColor: `${state.accentColor}15`,
                          color: state.accentColor
                        }}
                        title={state.motifName}
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full stroke-current stroke-2">
                          <path d={state.motifSvg || 'M12 2L4 22h16L12 2z'} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">
                          {state.zone} India
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917] group-hover:text-[#6E2A38] transition-colors leading-tight">
                          {state.name}
                        </h3>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#6E2A38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </div>

                  {/* Small Cultural Visual / Collectible Craft Preview */}
                  <div className="relative h-32 w-full rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#C59B27]/20 group-hover:border-[#C59B27]/60 transition-colors">
                    <img
                      src={previewImage}
                      alt={`${state.name} Craft Heritage`}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=600&q=80';
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Illustrated / Drawing Tag if Applicable */}
                    {isIllustrated && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[9px] font-bold text-stone-800 uppercase tracking-tight shadow-xs">
                        Art Drawing
                      </span>
                    )}

                    {/* GI Heritage Count Badge */}
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                      <span>{state.giCount || 10}+ GI Traditions</span>
                    </div>
                  </div>

                  {/* Short Craft Preview */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] block">
                      Signature Traditions:
                    </span>
                    <p className="text-xs text-stone-700 font-medium line-clamp-2 leading-relaxed">
                      {craftNames.join(' • ')}
                      {(state.signatureCraftIds?.length || 0) > 3 && ' & more'}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Landmark & Museum Enter CTA */}
                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="truncate max-w-[140px] text-[11px] text-stone-400">
                    {state.culturalHighlights?.[0]?.title || state.capital}
                  </span>
                  
                  <span className="text-[#6E2A38] font-bold text-[11px] uppercase tracking-wider group-hover:underline flex items-center gap-1">
                    Enter Museum →
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredStates.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#C59B27]/30 p-8 space-y-4">
            <p className="font-serif text-xl font-bold text-[#1C1917]">
              No states found matching "{searchQuery}"
            </p>
            <p className="text-xs text-stone-500">
              Try searching for a different state name, regional craft, or change the zone filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedZone('All');
              }}
              className="px-5 py-2 rounded-full bg-[#6E2A38] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
