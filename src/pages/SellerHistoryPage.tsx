import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ALL_CRAFTS } from '../data/crafts';
import { 
  PlusCircle, 
  Sparkles, 
  Star, 
  Eye, 
  Calendar, 
  Tag, 
  ShieldCheck, 
  MessageSquare, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Radio,
  CheckCircle2,
  Hammer
} from 'lucide-react';

interface SellerProductItem {
  id: string;
  varnamId: string;
  name: string;
  stateName: string;
  category: string;
  price: number;
  image: string;
  dateAdded: string;
  status: 'Live on Marketplace' | 'GI Review' | 'Draft';
  views: number;
  story: string;
  reviews: {
    id: string;
    customerName: string;
    rating: number;
    date: string;
    comment: string;
    verifiedBuyer: boolean;
  }[];
}

const DEFAULT_SELLER_PRODUCTS: SellerProductItem[] = [
  {
    id: 'bamboo-cane-craft',
    varnamId: 'VRN-TN-000435',
    name: 'Bamboo & Cane Crafts of Tamil Nadu',
    stateName: 'Tamil Nadu',
    category: 'Natural Fiber & Grass',
    price: 1850,
    image: '/assets/states/tamil-nadu/bamboo-cane.png',
    dateAdded: '12 Sep 2026',
    status: 'Live on Marketplace',
    views: 1420,
    story: 'Woven by generational bamboo artisans of the Anaimalai foothills in Pollachi using sustainable native bamboo split to sub-millimeter precision.',
    reviews: [
      {
        id: 'rev-1',
        customerName: 'Priya Sundaram (Chennai)',
        rating: 5,
        date: '16 Sep 2026',
        comment: 'Exquisite craftsmanship! The cane weave tension is so tight and natural. Stored our heirloom tea canisters inside.',
        verifiedBuyer: true
      },
      {
        id: 'rev-2',
        customerName: 'David K. (Bengaluru)',
        rating: 5,
        date: '18 Sep 2026',
        comment: 'Heard the artisan’s voice story on the site before ordering. Knowing Meena crafted this by hand makes it invaluable.',
        verifiedBuyer: true
      }
    ]
  },
  {
    id: 'tanjore-painting-krishna',
    varnamId: 'VRN-TN-000428',
    name: 'Hand-painted Tanjore Gold-Leaf Panel',
    stateName: 'Tamil Nadu',
    category: 'Painting & Art',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    dateAdded: '04 Sep 2026',
    status: 'Live on Marketplace',
    views: 2890,
    story: 'Traditional devotional painting with 22K gold foil, natural chalk gesso relief, and authentic teakwood framing.',
    reviews: [
      {
        id: 'rev-3',
        customerName: 'Ananya Sharma (Mumbai)',
        rating: 5,
        date: '08 Sep 2026',
        comment: 'The 22K gold foil has a divine glow in the morning light. Truly a museum grade creation from Thanjavur.',
        verifiedBuyer: true
      }
    ]
  }
];

const normalizeProduct = (p: any): SellerProductItem => {
  let storyText = '';
  if (typeof p?.story === 'string') {
    storyText = p.story;
  } else if (p?.story && typeof p.story === 'object') {
    storyText = p.story.artisanStory || p.story.history || p.shortDescription || '';
  } else if (typeof p?.shortDescription === 'string') {
    storyText = p.shortDescription;
  }

  let imageUrl = '';
  if (typeof p?.image === 'string' && p.image) {
    imageUrl = p.image;
  } else if (Array.isArray(p?.images) && p.images[0]) {
    imageUrl = p.images[0];
  } else {
    imageUrl = '/assets/states/tamil-nadu/bamboo-cane.png';
  }

  return {
    id: String(p?.id || `prod-${Date.now()}`),
    varnamId: String(p?.varnamId || 'VRN-TN-000100'),
    name: String(p?.name || 'Handcrafted Heritage Art'),
    stateName: String(p?.stateName || 'Tamil Nadu'),
    category: String(p?.category || 'Handicraft'),
    price: typeof p?.price === 'number' ? p.price : (parseInt(p?.price) || 2400),
    image: imageUrl,
    dateAdded: String(p?.dateAdded || 'Recently added'),
    status: (p?.status as any) || 'Live on Marketplace',
    views: typeof p?.views === 'number' ? p.views : 140,
    story: storyText,
    reviews: Array.isArray(p?.reviews) ? p.reviews : []
  };
};

export const SellerHistoryPage: React.FC = () => {
  const { sellerUser, currentUser } = useAuth();
  const navigate = useNavigate();
  const activeUser = sellerUser || currentUser;

  const [products, setProducts] = useState<SellerProductItem[]>(() => {
    try {
      const saved = localStorage.getItem('varnam_custom_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const normalized = parsed.map(normalizeProduct);
          const combined = [...normalized, ...DEFAULT_SELLER_PRODUCTS];
          return combined.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
        }
      }
    } catch (e) {
      // ignore
    }
    return DEFAULT_SELLER_PRODUCTS;
  });

  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({
    'bamboo-cane-craft': true
  });

  // Also load any newly submitted customer reviews from localStorage
  useEffect(() => {
    try {
      const customReviewsRaw = localStorage.getItem('varnam_product_reviews');
      if (customReviewsRaw) {
        const customReviews = JSON.parse(customReviewsRaw);
        setProducts(prev => prev.map(prod => {
          const matchingReviews = customReviews[prod.id] || [];
          if (matchingReviews.length > 0) {
            const existingIds = new Set((prod.reviews || []).map(r => r.id));
            const newToAdd = matchingReviews.filter((r: any) => !existingIds.has(r.id));
            return {
              ...prod,
              reviews: [...newToAdd, ...(prod.reviews || [])]
            };
          }
          return prod;
        }));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleReviewExpand = (id: string) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalReviewsCount = products.reduce((acc, p) => acc + (p?.reviews?.length || 0), 0);
  const totalViews = products.reduce((acc, p) => acc + (p?.views || 0), 0);

  return (
    <div className="min-h-screen bg-[#131E35] text-[#FAF6F0] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#C59B27]/30 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/40 text-[#F5D77F] text-xs font-bold uppercase tracking-wider">
              <Hammer className="w-3.5 h-3.5" />
              <span>Artisan Studio Portfolio</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Uploaded Crafts & Customer Feedback
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Manage your published handicrafts, inspect verification status, and read real reviews from connoisseurs who acquired your work.
            </p>
          </div>

          <Link
            to="/seller/add-product"
            className="px-6 py-3.5 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C59B27] hover:brightness-110 text-[#131E35] font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl transition flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add New Craft & Story</span>
          </Link>
        </div>

        {/* Studio Summary Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#1B2A4A] border border-[#C59B27]/30">
            <span className="text-[11px] uppercase tracking-wider text-[#F5D77F] font-bold block">
              Live Listings
            </span>
            <span className="font-serif text-3xl font-bold text-white mt-1 block">
              {products.length}
            </span>
            <span className="text-[10px] text-emerald-400 mt-1 block">● Active on State Hubs</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#1B2A4A] border border-[#C59B27]/30">
            <span className="text-[11px] uppercase tracking-wider text-[#F5D77F] font-bold block">
              Total Customer Reviews
            </span>
            <span className="font-serif text-3xl font-bold text-white mt-1 block">
              {totalReviewsCount}
            </span>
            <span className="text-[10px] text-[#F5D77F] mt-1 block">★ 4.95 Avg Customer Rating</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#1B2A4A] border border-[#C59B27]/30">
            <span className="text-[11px] uppercase tracking-wider text-[#F5D77F] font-bold block">
              Story Reads & Scans
            </span>
            <span className="font-serif text-3xl font-bold text-white mt-1 block">
              {totalViews.toLocaleString()}
            </span>
            <span className="text-[10px] text-stone-400 mt-1 block">Customer Story Engagements</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#1B2A4A] border border-[#C59B27]/30">
            <span className="text-[11px] uppercase tracking-wider text-[#F5D77F] font-bold block">
              Guild Heritage Status
            </span>
            <span className="font-serif text-xl font-bold text-emerald-400 mt-1 block">
              GI Authenticated
            </span>
            <span className="text-[10px] text-stone-400 mt-1 block">Tamil Nadu Handicraft Registrar</span>
          </div>
        </div>

        {/* Product List with Customer Reviews */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-white">
              Your Registered Crafts ({products.length})
            </h2>
            <span className="text-xs text-[#F5D77F]">
              Showing items listed under your artisan guild
            </span>
          </div>

          <div className="space-y-6">
            {products.map(product => {
              const isExpanded = !!expandedReviews[product.id];
              const reviewsList = Array.isArray(product?.reviews) ? product.reviews : [];
              const avgRating = reviewsList.length > 0
                ? (reviewsList.reduce((a, b) => a + (Number(b?.rating) || 5), 0) / reviewsList.length).toFixed(1)
                : '5.0';

              const storyDisplay = typeof product?.story === 'string'
                ? product.story
                : (typeof (product?.story as any)?.artisanStory === 'string'
                    ? (product?.story as any).artisanStory
                    : String((product as any)?.shortDescription || 'Authentic handcrafted heritage creation.'));

              return (
                <div
                  key={product.id}
                  className="bg-[#1B2A4A] rounded-3xl border border-[#C59B27]/40 p-6 sm:p-8 shadow-xl space-y-6 transition-all"
                >
                  {/* Top Item Summary */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-stone-900 border-2 border-[#C59B27]/40 shrink-0">
                        <img
                          src={product.image || '/assets/states/tamil-nadu/bamboo-cane.png'}
                          alt={product.name || 'Craft'}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/states/tamil-nadu/bamboo-cane.png';
                          }}
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {product.status || 'Live on Marketplace'}
                          </span>
                          <span className="text-xs text-[#F5D77F] font-mono">
                            {product.varnamId}
                          </span>
                          <span className="text-stone-400 text-xs">• {product.stateName}</span>
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                          {product.name}
                        </h3>

                        <p className="text-xs text-stone-300 line-clamp-2 max-w-xl">
                          {storyDisplay}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-end justify-between w-full md:w-auto gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-white/10 shrink-0">
                      <div className="text-left md:text-right">
                        <span className="text-[10px] uppercase font-bold text-stone-400 block">
                          Fair Price
                        </span>
                        <span className="font-serif text-2xl font-bold text-[#F5D77F]">
                          ₹{(Number(product.price) || 0).toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to={`/craft/${product.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition flex items-center gap-1.5 border border-white/20"
                          title="View product as customer sees it"
                        >
                          <span>Customer View</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Customer Feedback & Reviews Accordion */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <button
                      onClick={() => toggleReviewExpand(product.id)}
                      className="w-full flex items-center justify-between py-2 text-xs font-bold text-[#F5D77F] hover:text-white transition"
                    >
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>
                          Customer Reviews ({reviewsList.length}) • Average: {avgRating} ★
                        </span>
                      </div>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="space-y-3 pt-2">
                        {reviewsList.length === 0 ? (
                          <div className="p-4 rounded-xl bg-black/20 text-center text-xs text-stone-400">
                            No customer reviews yet. Newly published items receive feedback as customers acquire and verify them.
                          </div>
                        ) : (
                          reviewsList.map(review => (
                            <div
                              key={review.id}
                              className="p-4 rounded-2xl bg-[#131E35] border border-[#C59B27]/20 space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-sm text-white">{review.customerName}</span>
                                  {review.verifiedBuyer && (
                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                      ✓ Verified Buyer
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-1 text-[#F5D77F]">
                                  {Array.from({ length: review.rating || 5 }).map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                  ))}
                                  <span className="text-xs text-stone-400 ml-1.5">{review.date}</span>
                                </div>
                              </div>
                              <p className="text-xs text-stone-300 leading-relaxed font-sans italic">
                                "{review.comment}"
                              </p>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
