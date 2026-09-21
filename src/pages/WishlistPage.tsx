import React, { useState } from 'react';
import { useVarnam } from '../context/VarnamContext';
import { ALL_CRAFTS } from '../data/crafts';
import { CraftCard } from '../components/craft/CraftCard';
import { QuickViewModal } from '../components/craft/QuickViewModal';
import { Craft } from '../types';
import { Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WishlistPage: React.FC = () => {
  const { wishlist } = useVarnam();
  const [quickViewCraft, setQuickViewCraft] = useState<Craft | null>(null);

  const wishlistedCrafts = ALL_CRAFTS.filter(c => wishlist.includes(c.id));

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#7A2021]/10 text-[#7A2021] flex items-center justify-center mx-auto">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
            My Saved Heritage Crafts
          </h1>
          <p className="text-xs sm:text-sm text-stone-600">
            Your personal curated gallery of verified Indian Geographical Indication masterpieces.
          </p>
        </div>

        {/* Wishlist Items Grid */}
        {wishlistedCrafts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#C59B27]/30 shadow-xs max-w-md mx-auto p-8 space-y-4">
            <ShieldCheck className="w-12 h-12 text-[#C59B27] mx-auto opacity-50" />
            <h3 className="font-serif text-xl font-bold text-stone-800">
              Your Wishlist is Empty
            </h3>
            <p className="text-xs text-stone-500">
              Save your favorite crafts while discovering regional cultures across India.
            </p>
            <Link
              to="/marketplace"
              className="inline-block px-6 py-2.5 bg-[#C85A32] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Explore Crafts Marketplace
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistedCrafts.map(craft => (
              <CraftCard
                key={craft.id}
                craft={craft}
                onQuickView={(c) => setQuickViewCraft(c)}
              />
            ))}
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        craft={quickViewCraft}
        onClose={() => setQuickViewCraft(null)}
      />

    </div>
  );
};
