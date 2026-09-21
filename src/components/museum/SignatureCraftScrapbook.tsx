import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CraftSticker, Craft } from '../../types';
import { LandmarkWatermark } from './LandmarkWatermark';

interface SignatureCraftScrapbookProps {
  stateName: string;
  stateSlug: string;
  stickers: CraftSticker[];
  allCrafts: Craft[];
  accentColor?: string;
  className?: string;
}

export const SignatureCraftScrapbook: React.FC<SignatureCraftScrapbookProps> = ({
  stateName,
  stateSlug,
  stickers,
  allCrafts,
  accentColor = '#6E2A38',
  className = ''
}) => {
  const navigate = useNavigate();

  // Helper to resolve craft or sticker dynamically for each of the 6 positions
  const resolveSticker = (slotIndex: number) => {
    if (stickers && stickers[slotIndex]) {
      return {
        id: stickers[slotIndex].id,
        name: stickers[slotIndex].name,
        category: stickers[slotIndex].category,
        image: stickers[slotIndex].image,
        originVillage: stickers[slotIndex].originVillage,
        tag: stickers[slotIndex].tag,
        rotationClass: stickers[slotIndex].rotationClass || (slotIndex % 2 === 0 ? '-rotate-3' : 'rotate-3')
      };
    }
    const craft = allCrafts[slotIndex] || allCrafts[slotIndex % Math.max(1, allCrafts.length)];
    if (craft) {
      return {
        id: craft.id,
        name: craft.name,
        category: craft.category,
        image: craft.images?.[0] || 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
        originVillage: craft.originVillage || stateName,
        tag: craft.isGiVerified ? `GI ${craft.giNumber || 'VERIFIED'}` : 'AUTHENTIC CRAFT',
        rotationClass: slotIndex % 2 === 0 ? '-rotate-2' : 'rotate-2'
      };
    }
    return {
      id: `${stateSlug}-craft-${slotIndex + 1}`,
      name: `Signature Craft ${slotIndex + 1}`,
      category: 'Living Heritage',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
      originVillage: stateName,
      tag: 'HANDCRAFTED',
      rotationClass: slotIndex % 2 === 0 ? '-rotate-3' : 'rotate-3'
    };
  };

  const sticker1 = resolveSticker(0); // Top-Left
  const sticker2 = resolveSticker(1); // Mid-Low Left
  const sticker3 = resolveSticker(2); // Bottom-Left
  const sticker4 = resolveSticker(3); // Top-Right
  const sticker5 = resolveSticker(4); // Mid-Right
  const sticker6 = resolveSticker(5); // Bottom-Right
  const sticker7 = stickers && stickers.length >= 7 ? resolveSticker(6) : null; // Bottom-Center

  const handleCraftClick = (craftId: string) => {
    navigate(`/craft/${craftId}`);
  };

  const fallbackPlaceholder = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80';

  return (
    <div className={`relative py-12 sm:py-16 px-4 sm:px-8 bg-[#FAF6F0] overflow-hidden ${className}`}>
      
      {/* Background Architectural Landmark Drawing Watermark & Authentic Corner Sketches */}
      <LandmarkWatermark stateSlug={stateSlug} color="#C59B27" className="opacity-85" />

      {/* Section Header with Ornamental Dividers */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="flex items-center justify-center gap-3">
          <span className="text-[#C59B27] text-lg select-none">❖</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#4A1521] tracking-tight">
            Signature Crafts of {stateName}
          </h2>
          <span className="text-[#C59B27] text-lg select-none">❖</span>
        </div>
        <p className="text-xs text-stone-500 mt-1 font-serif italic">
          Click any signature craft sticker to open its living story recorded by the artisan and read in your language.
        </p>
      </div>

      {/* 6-Craft / 7-Craft Die-Cut Sticker Scrapbook Layout (Matching Reference Mockups Exactly) */}
      <div className="relative z-10 max-w-6xl mx-auto min-h-[760px] sm:min-h-[800px] lg:min-h-[860px]">
        
        {/* ========================================================== */}
        {/* 1. TOP-LEFT CRAFT STICKER */}
        {/* ========================================================== */}
        <div 
          onClick={() => handleCraftClick(sticker1.id)}
          className="lg:absolute lg:left-2 lg:top-2 flex flex-col sm:flex-row items-center gap-4 mb-8 lg:mb-0 group cursor-pointer"
        >
          <div className="relative p-2.5 rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] ring-4 ring-white border border-stone-200/90 transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
              <img 
                src={sticker1.image} 
                alt={sticker1.name} 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackPlaceholder;
                }}
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors leading-tight">
              {sticker1.name}
            </h3>
            {sticker1.category && (
              <p className="font-serif text-xs text-[#5C483A] mt-0.5">
                ({sticker1.category})
              </p>
            )}
            <div className="text-[#C59B27] text-xs font-serif flex items-center justify-center sm:justify-start gap-1 mt-1">
              <span>—</span> <span>❖</span> <span>—</span>
            </div>
            {sticker1.tag && (
              <span className="inline-block text-[10px] font-sans font-bold tracking-wider text-stone-500 uppercase mt-0.5">
                {sticker1.tag}
              </span>
            )}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 2. MID-LOW LEFT CRAFT STICKER */}
        {/* ========================================================== */}
        <div 
          onClick={() => handleCraftClick(sticker2.id)}
          className="lg:absolute lg:left-4 lg:top-[280px] flex flex-col sm:flex-row items-center gap-4 mb-8 lg:mb-0 group cursor-pointer"
        >
          <div className="relative p-2.5 rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] ring-4 ring-white border border-stone-200/90 transform -rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
            <div className="w-32 h-36 sm:w-40 sm:h-44 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
              <img 
                src={sticker2.image} 
                alt={sticker2.name} 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackPlaceholder;
                }}
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors leading-tight">
              {sticker2.name}
            </h3>
            {sticker2.category && (
              <p className="font-serif text-xs text-[#5C483A] mt-0.5">
                ({sticker2.category})
              </p>
            )}
            <div className="text-[#C59B27] text-xs font-serif flex items-center justify-center sm:justify-start gap-1 mt-1">
              <span>—</span> <span>❖</span> <span>—</span>
            </div>
            {sticker2.tag && (
              <span className="inline-block text-[10px] font-sans font-bold tracking-wider text-stone-500 uppercase mt-0.5">
                {sticker2.tag}
              </span>
            )}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 3. BOTTOM-LEFT CRAFT STICKER */}
        {/* ========================================================== */}
        <div 
          onClick={() => handleCraftClick(sticker3.id)}
          className="lg:absolute lg:left-14 lg:bottom-10 flex flex-col sm:flex-row items-center gap-4 mb-8 lg:mb-0 group cursor-pointer"
        >
          <div className="relative p-2.5 rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] ring-4 ring-white border border-stone-200/90 transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
              <img 
                src={sticker3.image} 
                alt={sticker3.name} 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackPlaceholder;
                }}
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors leading-tight">
              {sticker3.name}
            </h3>
            {sticker3.category && (
              <p className="font-serif text-xs text-[#5C483A] mt-0.5">
                ({sticker3.category})
              </p>
            )}
            <div className="text-[#C59B27] text-xs font-serif flex items-center justify-center sm:justify-start gap-1 mt-1">
              <span>—</span> <span>❖</span> <span>—</span>
            </div>
            {sticker3.tag && (
              <span className="inline-block text-[10px] font-sans font-bold tracking-wider text-stone-500 uppercase mt-0.5">
                {sticker3.tag}
              </span>
            )}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 7. BOTTOM-CENTER CRAFT STICKER (If 7 Crafts) */}
        {/* ========================================================== */}
        {sticker7 && (
          <div 
            onClick={() => handleCraftClick(sticker7.id)}
            className="lg:absolute lg:left-[46%] lg:-translate-x-1/2 lg:bottom-4 flex flex-col items-center gap-2 mb-8 lg:mb-0 group cursor-pointer z-20"
          >
            <div className="relative p-2 rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] ring-4 ring-white border border-stone-200/90 transform group-hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
                <img 
                  src={sticker7.image} 
                  alt={sticker7.name} 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackPlaceholder;
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors leading-tight">
                {sticker7.name}
              </h3>
              {sticker7.category && (
                <p className="font-serif text-[11px] text-[#5C483A] mt-0.5">
                  ({sticker7.category})
                </p>
              )}
              <div className="text-[#C59B27] text-xs font-serif flex items-center justify-center gap-1 mt-1">
                <span>—</span> <span>❖</span> <span>—</span>
              </div>
              {sticker7.tag && (
                <span className="inline-block text-[9px] font-sans font-bold tracking-wider text-stone-500 uppercase mt-0.5">
                  {sticker7.tag}
                </span>
              )}
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* 4. TOP-RIGHT CRAFT STICKER */}
        {/* ========================================================== */}
        <div 
          onClick={() => handleCraftClick(sticker4.id)}
          className="lg:absolute lg:right-2 lg:top-2 flex flex-col-reverse sm:flex-row-reverse items-center gap-4 mb-8 lg:mb-0 group cursor-pointer"
        >
          <div className="relative p-2.5 rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] ring-4 ring-white border border-stone-200/90 transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
              <img 
                src={sticker4.image} 
                alt={sticker4.name} 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackPlaceholder;
                }}
              />
            </div>
          </div>
          <div className="text-center sm:text-right">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors leading-tight">
              {sticker4.name}
            </h3>
            {sticker4.category && (
              <p className="font-serif text-xs text-[#5C483A] mt-0.5">
                ({sticker4.category})
              </p>
            )}
            <div className="text-[#C59B27] text-xs font-serif flex items-center justify-center sm:justify-end gap-1 mt-1">
              <span>—</span> <span>❖</span> <span>—</span>
            </div>
            {sticker4.tag && (
              <span className="inline-block text-[10px] font-sans font-bold tracking-wider text-stone-500 uppercase mt-0.5">
                {sticker4.tag}
              </span>
            )}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 5. MID-RIGHT CRAFT STICKER */}
        {/* ========================================================== */}
        <div 
          onClick={() => handleCraftClick(sticker5.id)}
          className="lg:absolute lg:right-4 lg:top-[280px] flex flex-col-reverse sm:flex-row-reverse items-center gap-4 mb-8 lg:mb-0 group cursor-pointer"
        >
          <div className="relative p-2.5 rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] ring-4 ring-white border border-stone-200/90 transform rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
              <img 
                src={sticker5.image} 
                alt={sticker5.name} 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackPlaceholder;
                }}
              />
            </div>
          </div>
          <div className="text-center sm:text-right">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors leading-tight">
              {sticker5.name}
            </h3>
            {sticker5.category && (
              <p className="font-serif text-xs text-[#5C483A] mt-0.5">
                ({sticker5.category})
              </p>
            )}
            <div className="text-[#C59B27] text-xs font-serif flex items-center justify-center sm:justify-end gap-1 mt-1">
              <span>—</span> <span>❖</span> <span>—</span>
            </div>
            {sticker5.tag && (
              <span className="inline-block text-[10px] font-sans font-bold tracking-wider text-stone-500 uppercase mt-0.5">
                {sticker5.tag}
              </span>
            )}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 6. BOTTOM-RIGHT CRAFT STICKER */}
        {/* ========================================================== */}
        <div 
          onClick={() => handleCraftClick(sticker6.id)}
          className="lg:absolute lg:right-14 lg:bottom-10 flex flex-col-reverse sm:flex-row-reverse items-center gap-4 mb-4 lg:mb-0 group cursor-pointer"
        >
          <div className="relative p-2.5 rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] ring-4 ring-white border border-stone-200/90 transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
              <img 
                src={sticker6.image} 
                alt={sticker6.name} 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackPlaceholder;
                }}
              />
            </div>
          </div>
          <div className="text-center sm:text-right">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors leading-tight">
              {sticker6.name}
            </h3>
            {sticker6.category && (
              <p className="font-serif text-xs text-[#5C483A] mt-0.5">
                ({sticker6.category})
              </p>
            )}
            <div className="text-[#C59B27] text-xs font-serif flex items-center justify-center sm:justify-end gap-1 mt-1">
              <span>—</span> <span>❖</span> <span>—</span>
            </div>
            {sticker6.tag && (
              <span className="inline-block text-[10px] font-sans font-bold tracking-wider text-stone-500 uppercase mt-0.5">
                {sticker6.tag}
              </span>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
