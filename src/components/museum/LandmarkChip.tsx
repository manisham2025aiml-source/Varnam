import React from 'react';

export interface LandmarkHighlight {
  title: string;
  subtitle?: string;
  category?: string;
  iconType: 'gopuram' | 'vimana' | 'shuttle' | 'mountain' | 'train' | 'fort' | 'boat' | 'palace' | 'monument';
}

interface LandmarkChipProps {
  landmark: LandmarkHighlight;
  className?: string;
}

export const LandmarkChip: React.FC<LandmarkChipProps> = ({ landmark, className = '' }) => {
  const renderDrawnIcon = () => {
    switch (landmark.iconType) {
      case 'gopuram':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15 7 14 8 17 14 16 15 19 21 5 21 8 15 7 14 10 8 9 7 12 2" />
            <line x1="10" y1="17" x2="14" y2="17" />
            <rect x="11" y="18" width="2" height="3" />
          </svg>
        );
      case 'vimana':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v2m-4 2h8l1 3H7l1-3zm-2 5h12l1 4H5l1-4zm-2 6h16v5H4v-5z" />
            <circle cx="12" cy="2" r="1" />
          </svg>
        );
      case 'shuttle':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="4" width="14" height="16" rx="2" transform="rotate(15 12 12)" />
            <line x1="9" y1="8" x2="15" y2="16" />
            <line x1="11" y1="7" x2="17" y2="15" />
          </svg>
        );
      case 'mountain':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 20l7-12 4 7 3-4 4 9H3z" />
            <path d="M7 13l2-3 2 3" />
          </svg>
        );
      case 'train':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="12" rx="2" />
            <line x1="4" y1="10" x2="20" y2="10" />
            <circle cx="8" cy="19" r="1.5" />
            <circle cx="16" cy="19" r="1.5" />
            <line x1="2" y1="21" x2="22" y2="21" />
          </svg>
        );
      case 'fort':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 21V9l2-2h3v3h2V7h2v3h2V7h3l2 2v12H4z" />
          </svg>
        );
      case 'boat':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 17l2 4h16l2-4H2z" />
            <path d="M12 4v10M8 8l4-4 4 4" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.5]">
            <polygon points="12 2 15 8 21 9 17 14 18 20 12 17 6 20 7 14 3 9 9 8 12 2" />
          </svg>
        );
    }
  };

  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F6EEE3] hover:bg-[#F2E5D4] border border-[#D9C4A5] text-[#5A3E28] transition-all shadow-xs cursor-default select-none ${className}`}
    >
      <span className="text-[#8F532B] shrink-0">
        {renderDrawnIcon()}
      </span>
      <span className="text-xs font-serif font-medium leading-none">
        {landmark.title}
        {landmark.subtitle && (
          <span className="text-stone-500 font-sans text-[10px] ml-1 font-normal">
            ({landmark.subtitle})
          </span>
        )}
      </span>
    </div>
  );
};
