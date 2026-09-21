import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INDIAN_STATES } from '../data/states';
import { ALL_CRAFTS } from '../data/crafts';
import { IndiaMap } from '../components/map/IndiaMap';
import { VarnamPromptStateGrid } from '../components/home/VarnamPromptStateGrid';
import { Zone } from '../types';
import { ArrowRight, MapPin, ShieldCheck, Sparkles, Layers, Compass } from 'lucide-react';

export const ExploreIndiaPage: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<Zone | 'All'>('All');

  const zones: (Zone | 'All')[] = ['All', 'South', 'North', 'West', 'East', 'North-East'];

  const filteredStates = selectedZone === 'All'
    ? INDIAN_STATES
    : INDIAN_STATES.filter(s => s.zone === selectedZone);

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C59B27]/40 text-[#C85A32] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
            Cultural Discovery Journey
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1C1917]">
            Explore India by Craft & Region
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            From the Chola bronze foundries of Tamil Nadu to the Kani pashmina looms of Kashmir and the castor sap alchemists of Kutch — every Indian state holds centuries of living memory. Click any state on the map or explore below.
          </p>
        </div>

        {/* Interactive SVG Map Component */}
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-xs uppercase font-bold text-[#7A2021] tracking-widest block">
              Interactive SVG Geography
            </span>
          </div>
          <IndiaMap />
        </div>

        {/* 11-State Regional Heritage Grid from Prompt */}
        <div className="pt-6 border-t border-[#C59B27]/20 space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-[#BE5A3B] tracking-widest block">
              Every State, a Different Craft Memory
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
              Iconic State Traditions
            </h2>
          </div>
          <VarnamPromptStateGrid />
        </div>

        {/* Regional Zone Selector */}
        <div className="pt-8 border-t border-[#C59B27]/20 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                State Cultural Landing Hubs
              </h3>
              <p className="text-xs text-stone-500">
                Explore {filteredStates.length} authentic state heritage hubs
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {zones.map(zone => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                    selectedZone === zone
                      ? 'bg-[#1B2A4A] text-[#D4AF37] shadow-sm'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {zone} {zone !== 'All' ? 'Zone' : 'India'}
                </button>
              ))}
            </div>
          </div>

          {/* State Directory Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStates.map(state => {
              const firstCraft = ALL_CRAFTS.find(c => c.id === state.signatureCraftIds[0]);

              return (
                <Link
                  key={state.id}
                  to={`/explore-india/${state.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#C59B27]/25 shadow-xs hover:shadow-xl hover:border-[#C85A32]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Hero Header for State Card */}
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img
                      src={state.heroImage}
                      alt={state.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 text-stone-800 backdrop-blur-xs">
                        {state.zone} Zone
                      </span>
                      <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#1B2A4A]/90 text-[#D4AF37] backdrop-blur-xs">
                        {state.giCount} GI Tags
                      </span>
                    </div>

                    {/* State Accent Color Pill */}
                    <div
                      className="absolute top-3 right-3 w-4 h-4 rounded-full border border-white/60"
                      style={{ backgroundColor: state.accentColor }}
                      title="State Cultural Accent Color"
                    />

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider block">
                        Capital: {state.capital}
                      </span>
                      <h4 className="font-serif text-2xl font-bold leading-tight">
                        {state.name}
                      </h4>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {state.culturalStory}
                    </p>

                    {/* Signature Craft Indicator */}
                    {firstCraft && (
                      <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#C59B27]/20 flex items-center gap-3">
                        <img
                          src={firstCraft.images[0]}
                          alt={firstCraft.name}
                          className="w-10 h-10 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="text-[9px] uppercase font-bold text-[#7A2021] tracking-wider block">
                            Signature Craft
                          </span>
                          <p className="text-xs font-bold text-[#1C1917] truncate font-serif">
                            {firstCraft.name}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-medium">
                        {state.signatureCraftIds.length} Documented GI Crafts
                      </span>
                      <span className="text-[#C85A32] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Explore Hub <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
