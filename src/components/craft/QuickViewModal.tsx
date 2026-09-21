import React from 'react';
import { Craft } from '../../types';
import { ALL_ARTISANS } from '../../data/artisans';
import { useVarnam } from '../../context/VarnamContext';
import { X, ShieldCheck, ShoppingBag, Heart, ArrowRight, MapPin, Clock, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickViewModalProps {
  craft: Craft | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ craft, onClose }) => {
  const { addToCart, isWishlisted, toggleWishlist } = useVarnam();

  if (!craft) return null;

  const artisan = ALL_ARTISANS.find(a => a.id === craft.artisanId);
  const wishlisted = isWishlisted(craft.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-[#FAF6F0] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#C59B27]/40 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-stone-600 transition shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Image Gallery */}
          <div className="relative aspect-square md:aspect-auto bg-stone-100">
            <img
              src={craft.images[0]}
              alt={craft.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 px-2 py-1 rounded-md bg-black/60 text-[#D4AF37] font-mono text-xs backdrop-blur-xs">
              ID: {craft.varnamId}
            </div>
          </div>

          {/* Right Craft Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1B2A4A] text-[#D4AF37]">
                  <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                  {craft.giNumber} Verified
                </span>
                <span className="text-xs text-stone-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C85A32]" />
                  {craft.stateName}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1C1917] leading-tight">
                {craft.name}
              </h3>

              <p className="text-xs font-serif italic text-[#7A2021]">
                {craft.vernacularName}
              </p>

              <p className="text-xs text-stone-600 leading-relaxed">
                {craft.shortDescription}
              </p>

              <div className="space-y-2 py-2 border-y border-[#C59B27]/20 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Hammer className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                  <span className="font-medium">Technique:</span>
                  <span className="truncate">{craft.technique}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                  <span className="font-medium">Crafting Duration:</span>
                  <span>{craft.craftDuration}</span>
                </div>
              </div>

              {artisan && (
                <div className="flex items-center gap-3 p-2.5 bg-white/70 rounded-xl border border-stone-200">
                  <img
                    src={artisan.avatar}
                    alt={artisan.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C59B27] block">
                      Master Artisan
                    </span>
                    <p className="text-xs font-bold text-[#1C1917]">
                      {artisan.name}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      {artisan.generation}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Price & Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold text-[#1C1917]">
                  ₹{craft.price.toLocaleString('en-IN')}
                </span>
                {craft.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    ₹{craft.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(craft, 1)}
                  className="flex-1 py-3 px-4 bg-[#C85A32] hover:bg-[#B34724] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={() => toggleWishlist(craft.id)}
                  className={`p-3 rounded-xl border transition ${
                    wishlisted
                      ? 'bg-[#7A2021] text-white border-[#7A2021]'
                      : 'bg-white text-stone-600 border-stone-300 hover:text-[#7A2021]'
                  }`}
                  title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <Link
                to={`/craft/${craft.id}`}
                onClick={onClose}
                className="w-full py-2.5 text-center text-xs font-semibold text-[#1B2A4A] hover:text-[#C85A32] transition flex items-center justify-center gap-1"
              >
                <span>Read Complete Heritage Story & Provenance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
