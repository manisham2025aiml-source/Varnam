import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ALL_CRAFTS } from '../data/crafts';
import { INDIAN_STATES } from '../data/states';
import { CraftCard } from '../components/craft/CraftCard';
import { QuickViewModal } from '../components/craft/QuickViewModal';
import { Craft, CraftCategory } from '../types';
import { Search, Filter, SlidersHorizontal, ShieldCheck, X, Sparkles } from 'lucide-react';

export const MarketplacePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialState = searchParams.get('state') || '';

  const [search, setSearch] = useState(initialQuery);
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState<number>(200000);
  const [giOnly, setGiOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [quickViewCraft, setQuickViewCraft] = useState<Craft | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (initialQuery) setSearch(initialQuery);
    if (initialCategory) setSelectedCategory(initialCategory);
    if (initialState) setSelectedState(initialState);
  }, [initialQuery, initialCategory, initialState]);

  const categories: CraftCategory[] = [
    'Textiles & Weaving',
    'Metalwork & Bronze',
    'Paintings & Art',
    'Pottery & Ceramics',
    'Woodwork & Lacquer',
    'Stone & Filigree',
    'Natural Fiber & Grass',
    'Fragrance & Distillation'
  ];

  // Natural Language & Attribute Filter Logic
  const filteredCrafts = useMemo(() => {
    let result = [...ALL_CRAFTS];

    // Search query
    if (search.trim()) {
      const q = search.toLowerCase();
      // Intelligent natural language budget parsing: e.g. "under 5000", "under 10000"
      const budgetMatch = q.match(/under\s*₹?(\d+)/);
      const budgetLimit = budgetMatch ? parseInt(budgetMatch[1], 10) : null;

      result = result.filter(craft => {
        const matchesBudget = budgetLimit ? craft.price <= budgetLimit : true;
        const matchesText = 
          craft.name.toLowerCase().includes(q) ||
          craft.stateName.toLowerCase().includes(q) ||
          craft.category.toLowerCase().includes(q) ||
          craft.materials.some(m => m.toLowerCase().includes(q)) ||
          craft.technique.toLowerCase().includes(q) ||
          craft.tags.some(t => t.toLowerCase().includes(q));

        return budgetLimit ? matchesBudget && (matchesText || q.includes('under')) : matchesText;
      });
    }

    // State filter
    if (selectedState) {
      result = result.filter(c => c.stateId === selectedState || c.stateName === selectedState);
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(c => c.category === selectedCategory);
    }

    // Price filter
    result = result.filter(c => c.price <= maxPrice);

    // GI only filter
    if (giOnly) {
      result = result.filter(c => c.isGiVerified);
    }

    // Sort logic
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, selectedState, selectedCategory, maxPrice, giOnly, sortBy]);

  const clearFilters = () => {
    setSearch('');
    setSelectedState('');
    setSelectedCategory('');
    setMaxPrice(200000);
    setGiOnly(false);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C85A32]">
            Authentic Indian Craft Repository
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
            Varnam Heritage Marketplace
          </h1>
          <p className="text-xs sm:text-sm text-stone-600">
            Search with natural queries like <em>"handmade gifts under ₹5000"</em>, <em>"bronze crafts from Tamil Nadu"</em>, or filter by Geographical Indication tags.
          </p>
        </div>

        {/* Natural Language Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 top-3.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search crafts, states, materials, or 'gifts under ₹10000'..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-[#C59B27]/40 rounded-2xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A32] text-stone-900 placeholder:text-stone-400"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-3.5 text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Layout: Filter Sidebar + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-3xl border border-[#C59B27]/25 shadow-xs space-y-6 sticky top-28">
            
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="font-serif text-sm font-bold text-[#1C1917] flex items-center gap-1.5">
                <Filter className="w-4 h-4 text-[#C85A32]" />
                Filters
              </span>
              <button
                onClick={clearFilters}
                className="text-[11px] text-[#C85A32] hover:underline font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* State Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Region / State
              </label>
              <select
                value={selectedState}
                onChange={e => setSelectedState(e.target.value)}
                className="w-full text-xs p-2.5 bg-[#FAF6F0] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
              >
                <option value="">All States ({INDIAN_STATES.length})</option>
                {INDIAN_STATES.map(s => (
                  <option key={s.id} value={s.name}>
                    {s.name} ({s.giCount} GI)
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Craft Category
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition ${
                    !selectedCategory
                      ? 'bg-[#1B2A4A] text-[#D4AF37] font-semibold'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  All Categories
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition ${
                      selectedCategory === cat
                        ? 'bg-[#1B2A4A] text-[#D4AF37] font-semibold'
                        : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-2 pt-2 border-t border-stone-100">
              <div className="flex justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-stone-500">Max Price</span>
                <span className="font-bold text-[#C85A32]">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="200000"
                step="2000"
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#C85A32]"
              />
            </div>

            {/* Authenticity Filter */}
            <div className="pt-2 border-t border-stone-100">
              <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={giOnly}
                  onChange={e => setGiOnly(e.target.checked)}
                  className="rounded text-[#C85A32] focus:ring-[#C85A32]"
                />
                <span>GI Verified Authenticity Only</span>
              </label>
            </div>

          </div>

          {/* Product Listing Section */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Sort & Results Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#C59B27]/20 shadow-xs">
              <span className="text-xs font-semibold text-stone-600">
                Showing <strong className="text-stone-900">{filteredCrafts.length}</strong> verified handicrafts
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className="text-xs p-1.5 bg-[#FAF6F0] border border-stone-200 rounded-lg focus:outline-none"
                >
                  <option value="featured">Featured Heritage</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Connoisseur Rating</option>
                </select>

                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="lg:hidden p-2 bg-[#FAF6F0] border border-stone-200 rounded-lg text-xs font-semibold flex items-center gap-1"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* Crafts Cards Grid */}
            {filteredCrafts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-[#C59B27]/20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-800">
                  No Matching Crafts Found
                </h3>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Try adjusting your keywords or clearing the category and state filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-5 py-2 bg-[#C85A32] text-white text-xs font-bold uppercase rounded-full shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCrafts.map(craft => (
                  <CraftCard
                    key={craft.id}
                    craft={craft}
                    onQuickView={(c) => setQuickViewCraft(c)}
                  />
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        craft={quickViewCraft}
        onClose={() => setQuickViewCraft(null)}
      />

    </div>
  );
};
