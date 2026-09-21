import React from 'react';
import { CraftSticker } from '../../types';
import { CraftStickerBadge } from './CraftStickerBadge';

interface StickerScrapbookOverlayProps {
  stickers: CraftSticker[];
  variant?: 'hero' | 'landmarks' | 'craftSection' | 'floatingScattered';
}

export const StickerScrapbookOverlay: React.FC<StickerScrapbookOverlayProps> = ({
  stickers,
  variant = 'hero'
}) => {
  if (!stickers || stickers.length === 0) return null;

  if (variant === 'hero') {
    // 2-3 stickers positioned around hero right & bottom
    const [sticker1, sticker2, sticker3] = stickers;
    return (
      <div className="relative w-full max-w-md mx-auto lg:max-w-none flex flex-wrap lg:block items-center justify-center gap-4 pt-4 lg:pt-0">
        {sticker1 && (
          <div className="lg:absolute lg:top-2 lg:right-4 z-20">
            <CraftStickerBadge sticker={sticker1} size="lg" />
          </div>
        )}
        {sticker2 && (
          <div className="lg:absolute lg:bottom-4 lg:right-36 z-20">
            <CraftStickerBadge sticker={sticker2} size="md" />
          </div>
        )}
        {sticker3 && (
          <div className="lg:absolute lg:-bottom-10 lg:right-6 z-30 hidden sm:block">
            <CraftStickerBadge sticker={sticker3} size="sm" />
          </div>
        )}
      </div>
    );
  }

  if (variant === 'landmarks') {
    // 1-2 decorative craft stickers overlapping the landmark bar
    const [stickerA, stickerB] = stickers.slice(2, 4);
    return (
      <div className="hidden md:flex items-center gap-4 shrink-0">
        {stickerA && <CraftStickerBadge sticker={stickerA} size="sm" showTag={false} />}
        {stickerB && <CraftStickerBadge sticker={stickerB} size="sm" showTag={false} />}
      </div>
    );
  }

  if (variant === 'craftSection') {
    // Decorative scrapbooked sticker banner
    return (
      <div className="p-4 rounded-3xl bg-gradient-to-r from-amber-100/60 via-stone-100/80 to-orange-100/60 border border-amber-300/40 my-8 flex flex-wrap items-center justify-around gap-4 shadow-inner">
        <div className="max-w-xs space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#C85A32]">
            Heritage Scrapbook
          </span>
          <h4 className="font-serif text-lg font-bold text-stone-900">
            Collectible Cultural Badges
          </h4>
          <p className="text-xs text-stone-600">
            Click any die-cut sticker to inspect its regional provenance and artisanal history.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {stickers.map((stk, idx) => (
            <CraftStickerBadge key={idx} sticker={stk} size="sm" />
          ))}
        </div>
      </div>
    );
  }

  // Floating scattered layout
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-4">
      {stickers.map((stk, idx) => (
        <CraftStickerBadge key={idx} sticker={stk} size="md" />
      ))}
    </div>
  );
};
