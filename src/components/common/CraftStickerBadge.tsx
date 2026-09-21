import React, { useState } from 'react';
import { CraftSticker } from '../../types';
import { Sparkles, MapPin, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CraftStickerBadgeProps {
  sticker: CraftSticker;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTag?: boolean;
}

export const CraftStickerBadge: React.FC<CraftStickerBadgeProps> = ({
  sticker,
  className = '',
  size = 'md',
  showTag = true
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-28 sm:h-28',
    md: 'w-32 h-32 sm:w-36 sm:h-36',
    lg: 'w-40 h-40 sm:w-44 sm:h-44',
    hero: 'w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52'
  }[size];

  const rotation = sticker.rotationClass || '-rotate-2';

  return (
    <>
      <div 
        onClick={() => setModalOpen(true)}
        className={`group relative inline-block cursor-pointer select-none transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1.5 hover:rotate-0 z-20 ${rotation} ${className}`}
        title={`Click to inspect collectible craft sticker: ${sticker.name}`}
      >
        {/* Physical Die-Cut White Sticker Container */}
        <div className="relative p-2 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] ring-4 ring-white border border-stone-200/80 transition-shadow duration-300 group-hover:shadow-[0_16px_35px_rgba(0,0,0,0.25)]">
          
          {/* Subtle paper grain / die-cut gloss */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-stone-100/40 via-transparent to-white/70 pointer-events-none" />

          {/* Die-cut simulated peeling tab top-left corner */}
          <div className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-white/90 rounded-tl-lg shadow-inner pointer-events-none opacity-60" />

          {/* Isolated Craft Image or Drawing */}
          <div className={`${sizeClasses} overflow-hidden rounded-xl bg-stone-50 flex items-center justify-center relative`}>
            <img
              src={sticker.image}
              alt={sticker.name}
              className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-108"
              loading="lazy"
              onError={(e) => {
                // Fallback to high quality craft placeholder
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=400&q=80';
              }}
            />

            {/* Drawing badge if illustrated */}
            {sticker.isDrawing && (
              <span className="absolute top-1 right-1 px-1.5 py-0.5 rounded-md bg-[#FAF6F0]/90 border border-stone-300 text-[9px] font-bold text-stone-700 uppercase tracking-tighter shadow-xs">
                Hand-Drawn
              </span>
            )}
          </div>

          {/* Collectible Ribbon / Stamp Tag */}
          {showTag && (
            <div className="mt-1.5 flex items-center justify-between gap-1 px-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#C85A32] truncate max-w-[110px]">
                {sticker.tag || 'GI HERITAGE'}
              </span>
              <Sparkles className="w-2.5 h-2.5 text-[#AD7C2B] shrink-0 opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-transform" />
            </div>
          )}

          {/* Tiny bottom craft title */}
          <p className="text-[11px] font-serif font-bold text-stone-900 leading-tight truncate px-1 mt-0.5 max-w-[125px]">
            {sticker.name}
          </p>
        </div>
      </div>

      {/* Collectible Craft Inspection Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-[#FAF6F0] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-4 border-white ring-1 ring-stone-300 relative space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Varnam Living Craft Collectible</span>
            </div>

            {/* Large Die-Cut Image Preview */}
            <div className="w-48 h-48 mx-auto p-3 bg-white rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] ring-4 ring-white border border-stone-200 flex items-center justify-center">
              <img
                src={sticker.image}
                alt={sticker.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content Details */}
            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#AD7C2B]/15 text-[#855B17] font-semibold text-xs uppercase tracking-wider">
                {sticker.tag} • {sticker.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                {sticker.name}
              </h3>
              <p className="text-xs font-semibold text-stone-500 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{sticker.originVillage}</span>
              </p>
              <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto pt-1">
                {sticker.description}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-3 flex gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 py-2.5 border border-stone-300 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-200/60 transition"
              >
                Close Sticker
              </button>
              <Link
                to={`/craft/${sticker.id}`}
                className="flex-1 py-2.5 bg-[#C85A32] hover:bg-[#B34724] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition"
              >
                <span>Full Story</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
