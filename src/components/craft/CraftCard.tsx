import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Craft } from '../../types';
import { ALL_ARTISANS } from '../../data/artisans';
import { useVarnam } from '../../context/VarnamContext';
import { Heart, ShoppingBag, ShieldCheck, Eye, Sparkles, MapPin } from 'lucide-react';

interface CraftCardProps {
  craft: Craft;
  onQuickView?: (craft: Craft) => void;
}

export const CraftCard: React.FC<CraftCardProps> = ({ craft, onQuickView }) => {
  const { isWishlisted, toggleWishlist, addToCart } = useVarnam();
  const [imageIndex, setImageIndex] = useState(0);
  const artisan = ALL_ARTISANS.find(a => a.id === craft.artisanId);
  const wishlisted = isWishlisted(craft.id);

  return (
    <div className="group relative bg-white rounded-2xl border border-[#C59B27]/20 shadow-xs hover:shadow-xl hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Top Image Container */}
      <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
        <Link to={`/craft/${craft.id}`} className="block w-full h-full">
          <img
            src={craft.images[imageIndex] || craft.images[0]}
            alt={craft.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {craft.isGiVerified && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1B2A4A]/90 text-[#D4AF37] backdrop-blur-md shadow-xs border border-[#C59B27]/40">
              <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
              GI {craft.giNumber}
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/90 text-stone-800 backdrop-blur-md shadow-xs">
            <MapPin className="w-2.5 h-2.5 text-[#C85A32]" />
            {craft.stateName}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(craft.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
            wishlisted
              ? 'bg-[#7A2021] text-white shadow-md scale-110'
              : 'bg-white/85 text-stone-600 hover:text-[#7A2021] hover:bg-white'
          }`}
          title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button (Desktop Hover) */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(craft)}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-stone-800 text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1.5 backdrop-blur-xs"
          >
            <Eye className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Quick View</span>
          </button>
        )}

        {/* Varnam Cryptographic Tag watermark */}
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 text-[#D4AF37] font-mono text-[9px] backdrop-blur-xs">
          {craft.varnamId}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div>
          {/* Category & Craft Duration */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
            <span className="uppercase tracking-wider font-semibold text-[#7A2021]">
              {craft.category}
            </span>
            <span>{craft.craftDuration}</span>
          </div>

          {/* Craft Title */}
          <Link to={`/craft/${craft.id}`} className="block">
            <h4 className="font-serif text-base font-bold text-[#1C1917] group-hover:text-[#C85A32] transition-colors line-clamp-2 leading-snug">
              {craft.name}
            </h4>
          </Link>

          {/* Master Artisan Link */}
          {artisan && (
            <Link
              to={`/artisan/${artisan.id}`}
              className="mt-2 inline-flex items-center gap-2 group/artisan"
            >
              <img
                src={artisan.avatar}
                alt={artisan.name}
                className="w-5 h-5 rounded-full object-cover ring-1 ring-[#C59B27]/30"
              />
              <span className="text-xs text-stone-600 group-hover/artisan:text-[#C85A32] transition-colors truncate">
                {artisan.name}
              </span>
            </Link>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-base text-[#1C1917]">
                ₹{craft.price.toLocaleString('en-IN')}
              </span>
              {craft.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{craft.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold block">
              Free Insured Delivery
            </span>
          </div>

          <button
            onClick={() => addToCart(craft, 1)}
            className="px-3.5 py-2 rounded-xl bg-[#FAF6F0] hover:bg-[#C85A32] text-[#C85A32] hover:text-white border border-[#C59B27]/30 hover:border-transparent text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-xs shrink-0"
            title="Add to Shopping Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>
    </div>
  );
};
