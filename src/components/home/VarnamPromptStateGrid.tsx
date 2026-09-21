import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VARNAM_PROMPT_DATA, VarnamState } from '../../data/varnamPromptData';

// SVG Icon Renderer matching the prompt SVG paths
export const StateHeritageIcon: React.FC<{ kind: VarnamState['icon']; className?: string }> = ({ kind, className = 'w-7 h-7' }) => {
  switch (kind) {
    case 'arch':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M6 20V11a6 6 0 0 1 12 0v9" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case 'weave':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 6h16M4 12h16M4 18h16M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 20c8-1 14-7 15-16-9 1-15 7-15 16Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
        </svg>
      );
    case 'rail':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="5" y="7" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
          <path d="M3 20h18M8 16v4M16 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case 'diamond':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 3 L21 12 L12 21 L3 12 Z" stroke="currentColor" strokeWidth="1.7" fill="none"/>
        </svg>
      );
    case 'sun':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
          <path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19 5l-2 2M7 17l-2 2M19 19l-2-2M7 7 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case 'knot':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M7 12a5 5 0 0 1 10 0 5 5 0 0 1-10 0Z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
          <circle cx="12" cy="12" r="1.6" fill="currentColor"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
};

interface VarnamPromptStateGridProps {
  limit?: number;
}

export const VarnamPromptStateGrid: React.FC<VarnamPromptStateGridProps> = ({ limit }) => {
  const navigate = useNavigate();
  const states = limit ? VARNAM_PROMPT_DATA.states.slice(0, limit) : VARNAM_PROMPT_DATA.states;

  const handleStateClick = (state: VarnamState) => {
    // Map slugs to ensure seamless routing across all state pages
    let routeSlug = state.slug;
    if (state.slug === 'kashmir') {
      routeSlug = 'jammu-and-kashmir';
    } else if (state.slug === 'andhra-telangana') {
      routeSlug = 'andhra-pradesh';
    }
    navigate(`/explore-india/${routeSlug}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
      {states.map(s => {
        return (
          <button
            key={s.slug}
            type="button"
            onClick={() => handleStateClick(s)}
            className="group relative text-left bg-[#FAF6F0] hover:bg-white border border-[#C59B27]/25 hover:border-[#BE5A3B] rounded-2xl p-4 sm:p-5 flex flex-col justify-between min-h-[145px] sm:min-h-[160px] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
          >
            {/* Ambient Background Radial Glow */}
            <div 
              className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-15 pointer-events-none transition-transform group-hover:scale-125"
              style={{ backgroundColor: s.color }}
            />

            {/* Icon */}
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ color: s.color }}
            >
              <StateHeritageIcon kind={s.icon} className="w-8 h-8" />
            </div>

            {/* Text details */}
            <div className="relative z-10 pt-3">
              <div className="flex items-center justify-between gap-1">
                <span className="font-serif text-sm sm:text-base font-bold text-[#1C1917] group-hover:text-[#BE5A3B] transition-colors leading-tight">
                  {s.name}
                </span>
                {s.enabled && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="Full Deep Dive Available" />
                )}
              </div>
              <span className="text-xs text-stone-500 font-medium block mt-0.5 line-clamp-1">
                {s.craft}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
