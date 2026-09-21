import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INDIAN_STATES } from '../../data/states';
import { ALL_CRAFTS } from '../../data/crafts';
import { StateData, Zone } from '../../types';
import { Sparkles, ArrowRight, MapPin, Award, Layers } from 'lucide-react';

interface IndiaMapProps {
  onSelectState?: (state: StateData) => void;
  selectedStateSlug?: string;
  isHeroWidget?: boolean;
}

// SVG geometry approximations for Indian states on an 800x900 viewport
interface StatePathData {
  id: string;
  name: string;
  d: string;
  center: [number, number]; // [x, y] for label/indicator
}

const STATE_PATHS: StatePathData[] = [
  // Jammu & Kashmir / Ladakh (Far North)
  {
    id: 'IN-JK',
    name: 'Jammu & Kashmir',
    d: 'M300 45 L380 40 L450 65 L480 120 L440 180 L380 190 L340 160 L300 140 L270 90 Z',
    center: [370, 110]
  },
  // Himachal Pradesh
  {
    id: 'IN-HP',
    name: 'Himachal Pradesh',
    d: 'M340 160 L380 190 L420 200 L400 240 L350 230 L330 190 Z',
    center: [370, 205]
  },
  // Punjab & Haryana
  {
    id: 'IN-PB',
    name: 'Punjab',
    d: 'M290 180 L340 160 L350 230 L310 240 L280 210 Z',
    center: [315, 205]
  },
  // Rajasthan (Great Desert)
  {
    id: 'IN-RJ',
    name: 'Rajasthan',
    d: 'M180 230 L280 210 L330 250 L340 330 L310 380 L230 400 L170 330 L150 280 Z',
    center: [240, 310]
  },
  // Uttar Pradesh (Gangetic Plains)
  {
    id: 'IN-UP',
    name: 'Uttar Pradesh',
    d: 'M340 230 L430 220 L510 270 L530 330 L450 370 L370 350 L340 330 L330 250 Z',
    center: [420, 290]
  },
  // Gujarat (Kutch & Saurashtra)
  {
    id: 'IN-GJ',
    name: 'Gujarat',
    d: 'M100 370 L170 330 L230 400 L240 470 L170 510 L120 480 L140 430 L80 410 Z',
    center: [160, 430]
  },
  // Madhya Pradesh (Heart of India)
  {
    id: 'IN-MP',
    name: 'Madhya Pradesh',
    d: 'M240 400 L340 350 L450 370 L480 430 L420 490 L320 500 L240 470 Z',
    center: [350, 440]
  },
  // Bihar & Jharkhand
  {
    id: 'IN-BR',
    name: 'Bihar',
    d: 'M510 270 L600 290 L610 360 L530 360 L510 310 Z',
    center: [555, 320]
  },
  // West Bengal (Delta & Hill)
  {
    id: 'IN-WB',
    name: 'West Bengal',
    d: 'M590 280 L620 270 L620 370 L640 420 L610 470 L570 440 L580 370 L600 350 Z',
    center: [600, 390]
  },
  // Odisha (Eastern Coast)
  {
    id: 'IN-OR',
    name: 'Odisha',
    d: 'M480 430 L570 440 L600 480 L560 560 L490 540 L460 480 Z',
    center: [525, 490]
  },
  // Maharashtra (Deccan)
  {
    id: 'IN-MH',
    name: 'Maharashtra',
    d: 'M170 510 L240 470 L340 500 L420 490 L420 580 L350 640 L240 630 L200 560 Z',
    center: [290, 560]
  },
  // Andhra Pradesh & Telangana
  {
    id: 'IN-AP',
    name: 'Andhra Pradesh & Telangana',
    d: 'M350 580 L460 500 L560 560 L510 680 L440 730 L380 690 L370 630 Z',
    center: [450, 630]
  },
  // Karnataka (South-West)
  {
    id: 'IN-KA',
    name: 'Karnataka',
    d: 'M230 630 L320 630 L380 690 L350 780 L290 800 L260 740 L230 680 Z',
    center: [295, 710]
  },
  // Kerala (Malabar Coast)
  {
    id: 'IN-KL',
    name: 'Kerala',
    d: 'M260 740 L290 800 L320 860 L290 875 L270 810 Z',
    center: [285, 820]
  },
  // Tamil Nadu (Coromandel Coast)
  {
    id: 'IN-TN',
    name: 'Tamil Nadu',
    d: 'M290 800 L350 780 L440 730 L430 810 L380 870 L320 875 Z',
    center: [360, 820]
  },
  // Assam & North-East (Seven Sisters)
  {
    id: 'IN-AS',
    name: 'Assam & North East',
    d: 'M620 270 L720 240 L770 280 L760 360 L690 380 L640 360 L630 310 Z',
    center: [690, 310]
  }
];

export const IndiaMap: React.FC<IndiaMapProps> = ({
  onSelectState,
  selectedStateSlug,
  isHeroWidget = false
}) => {
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [activeZone, setActiveZone] = useState<string>('All');
  const [mobileActiveState, setMobileActiveState] = useState<StateData | null>(null);
  const navigate = useNavigate();

  const handleStateClick = (stateId: string) => {
    const matched = INDIAN_STATES.find(s => s.id === stateId);
    if (!matched) return;

    if (onSelectState) {
      onSelectState(matched);
    } else {
      navigate(`/explore-india/${matched.slug}`);
    }
  };

  const hoveredStateData = INDIAN_STATES.find(s => s.id === hoveredStateId);
  const signatureCraft = hoveredStateData 
    ? ALL_CRAFTS.find(c => c.id === hoveredStateData.signatureCraftIds[0])
    : null;

  const zones: (Zone | 'All')[] = ['All', 'South', 'North', 'West', 'East', 'North-East'];

  const filteredStates = activeZone === 'All'
    ? INDIAN_STATES
    : INDIAN_STATES.filter(s => s.zone === activeZone);

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Zone Filter Pills */}
      {!isHeroWidget && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {zones.map(zone => (
            <button
              key={zone}
              onClick={() => setActiveZone(zone)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeZone === zone
                  ? 'bg-[#C85A32] text-white shadow-sm ring-2 ring-[#C59B27]/30'
                  : 'bg-white/80 text-stone-700 hover:bg-white border border-[#C59B27]/20'
              }`}
            >
              {zone} {zone !== 'All' ? 'Zone' : 'India'}
            </button>
          ))}
        </div>
      )}

      {/* Main Map Container */}
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-white/60 to-white/90 rounded-3xl p-6 sm:p-10 border border-[#C59B27]/30 shadow-xl backdrop-blur-md overflow-hidden">
        
        {/* Subtle Background Watermark Motif */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" stroke="#C85A32" strokeWidth="1">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="50" />
            <path d="M100 10 L100 190 M10 100 L190 100" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive SVG India Canvas */}
          <div className="lg:col-span-7 flex justify-center relative">
            <svg
              viewBox="50 20 750 880"
              className="w-full max-w-[480px] h-auto drop-shadow-md select-none"
              style={{ filter: 'drop-shadow(0 6px 12px rgba(27, 42, 74, 0.08))' }}
            >
              {/* Regional Connectors and Subtle Ocean Rings */}
              <circle cx="400" cy="460" r="420" fill="none" stroke="#C59B27" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.25" />
              <circle cx="400" cy="460" r="320" fill="none" stroke="#C85A32" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.15" />

              {/* State SVG Regions */}
              {STATE_PATHS.map(pathItem => {
                const stateData = INDIAN_STATES.find(s => s.id === pathItem.id);
                const isHovered = hoveredStateId === pathItem.id;
                const isSelected = selectedStateSlug && stateData?.slug === selectedStateSlug;
                const isZoneMatched = activeZone === 'All' || stateData?.zone === activeZone;

                const fillColor = stateData 
                  ? (isHovered || isSelected ? stateData.accentColor : '#F5EFEB')
                  : '#EDE7DC';

                const strokeColor = isHovered || isSelected ? '#C59B27' : '#D4AF37';

                return (
                  <g
                    key={pathItem.id}
                    onClick={() => {
                      if (stateData) {
                        setMobileActiveState(stateData);
                        handleStateClick(pathItem.id);
                      }
                    }}
                    onMouseEnter={() => setHoveredStateId(pathItem.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    className="cursor-pointer transition-all duration-300"
                    style={{
                      opacity: isZoneMatched ? 1 : 0.25,
                      transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                      transformOrigin: `${pathItem.center[0]}px ${pathItem.center[1]}px`
                    }}
                  >
                    <path
                      d={pathItem.d}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isHovered ? 3 : 1.5}
                      strokeLinejoin="round"
                      className="transition-colors duration-200"
                    />

                    {/* State Center Pin Indicator */}
                    {stateData && (
                      <circle
                        cx={pathItem.center[0]}
                        cy={pathItem.center[1]}
                        r={isHovered ? 6 : 3.5}
                        fill={isHovered ? '#FAF6F0' : stateData.accentColor}
                        stroke="#FAF6F0"
                        strokeWidth={isHovered ? 2 : 1}
                        className="transition-all duration-200 pointer-events-none"
                      />
                    )}

                    {/* State Name Abbreviation / Label */}
                    <text
                      x={pathItem.center[0]}
                      y={pathItem.center[1] + (isHovered ? 18 : 12)}
                      textAnchor="middle"
                      fill={isHovered ? '#FFFFFF' : '#44403C'}
                      fontSize={isHovered ? 13 : 9}
                      fontWeight={isHovered ? '700' : '600'}
                      fontFamily="sans-serif"
                      className="pointer-events-none drop-shadow-xs transition-all"
                    >
                      {pathItem.name.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Dynamic State Info / Hover Preview Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {hoveredStateData ? (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#C59B27]/40 shadow-lg space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF6F0] text-[#7A2021] border border-[#C59B27]/30">
                    {hoveredStateData.zone} Zone • {hoveredStateData.giCount} GI Crafts
                  </span>
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: hoveredStateData.accentColor }}
                  />
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                    {hoveredStateData.name}
                  </h3>
                  <p className="text-xs text-[#7A2021] font-serif italic mt-1">
                    "{hoveredStateData.tagLine}"
                  </p>
                </div>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {hoveredStateData.culturalStory}
                </p>

                {signatureCraft && (
                  <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#C59B27]/20 flex items-center gap-3">
                    <img
                      src={signatureCraft.images[0]}
                      alt={signatureCraft.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase font-bold text-[#C59B27] tracking-wider block">
                        Signature Craft
                      </span>
                      <p className="text-xs font-serif font-bold text-[#1C1917] truncate">
                        {signatureCraft.name}
                      </p>
                      <p className="text-[11px] text-stone-500">
                        {signatureCraft.technique.split('(')[0]}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => handleStateClick(hoveredStateData.id)}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#C85A32] to-[#B34724] hover:from-[#B34724] hover:to-[#7A2021] text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition flex items-center justify-center gap-2 group"
                >
                  <span>Enter {hoveredStateData.name} Culture Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="bg-white/80 p-6 sm:p-8 rounded-2xl border border-[#C59B27]/20 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C59B27] font-bold">
                    Interactive State Map
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] mt-1">
                    Discover India by State & Heritage
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Hover over or tap any state on the map to preview its signature GI craft, ancestral techniques, and master artisan communities.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 pt-2">
                  <div className="p-2.5 bg-[#FAF6F0] rounded-lg border border-[#C59B27]/20">
                    <span className="font-bold text-[#1C1917] block text-sm">12+ States</span>
                    <span className="text-[11px]">Fully Reskinned Hubs</span>
                  </div>
                  <div className="p-2.5 bg-[#FAF6F0] rounded-lg border border-[#C59B27]/20">
                    <span className="font-bold text-[#1C1917] block text-sm">40+ GI Crafts</span>
                    <span className="text-[11px]">Cryptographically Verified</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick State Switcher Grid */}
            <div className="mt-6 pt-6 border-t border-stone-200">
              <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider block mb-2.5">
                Quick State Exploration:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {filteredStates.slice(0, 8).map(state => (
                  <button
                    key={state.id}
                    onClick={() => handleStateClick(state.id)}
                    className="px-2.5 py-1 bg-white hover:bg-[#FAF6F0] border border-stone-200 hover:border-[#C85A32] rounded-md text-[11px] font-medium text-stone-700 transition"
                  >
                    {state.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
