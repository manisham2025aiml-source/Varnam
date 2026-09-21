import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useVarnam } from '../../context/VarnamContext';
import { useAuth } from '../../context/AuthContext';
import { SupportedLanguage } from '../../types';
import { INDIAN_STATES } from '../../data/states';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Globe, 
  Menu, 
  X, 
  ChevronDown,
  User,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  onOpenCart: () => void;
}

const LANGUAGES: { code: SupportedLanguage; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart }) => {
  const { wishlist, cartCount, selectedLanguage, setLanguage } = useVarnam();
  const { customerUser, isCustomerLoggedIn, logoutCustomer } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [statesDropdownOpen, setStatesDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearch.trim()) {
      navigate(`/marketplace?q=${encodeURIComponent(navSearch.trim())}`);
      setNavSearch('');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#D9C4A5]/60 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Brand Identity (Matching Reference Mockup) */}
          <Link to="/explore-india" className="flex items-center gap-3 group shrink-0">
            {/* Traditional Floral Mandala Mark */}
            <div className="w-10 h-10 rounded-full bg-[#6E2A38] text-[#F5D77F] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 ring-2 ring-[#C59B27]/40">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2C13 5 15 7 18 7C15 8 13 10 12 13C11 10 9 8 6 7C9 7 11 5 12 2Z" />
                <path d="M12 22C11 19 9 17 6 17C9 16 11 14 12 11C13 14 15 16 18 17C15 17 13 19 12 22Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-2xl font-bold text-[#4A1521] group-hover:text-[#6E2A38] transition-colors leading-none">
                VARNAM
              </span>
              <span className="text-[10px] tracking-widest text-[#6E2A38] font-serif font-medium mt-0.5">
                India's Living Crafts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Strictly Customer-Facing) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Explore India Dropdown */}
            <div className="relative" onMouseLeave={() => setStatesDropdownOpen(false)}>
              <button
                onClick={() => setStatesDropdownOpen(!statesDropdownOpen)}
                onMouseEnter={() => setStatesDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location.pathname.startsWith('/explore-india') || location.pathname.startsWith('/state')
                    ? 'text-[#6E2A38] font-semibold'
                    : 'text-[#1C1917]/80 hover:text-[#6E2A38]'
                }`}
              >
                <span>Explore India</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${statesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {statesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-72 bg-[#FAF6F0] rounded-2xl shadow-2xl border-2 border-[#D9C4A5] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#6E2A38] tracking-wider border-b border-stone-200 mb-2 flex items-center justify-between">
                    <span>Regional State Hubs</span>
                    <Link
                      to="/explore-india"
                      onClick={() => setStatesDropdownOpen(false)}
                      className="text-[#AD7C2B] hover:underline"
                    >
                      View All →
                    </Link>
                  </div>
                  <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
                    {INDIAN_STATES.slice(0, 10).map(state => (
                      <Link
                        key={state.id}
                        to={`/state/${state.slug}`}
                        onClick={() => setStatesDropdownOpen(false)}
                        className="px-3 py-2 rounded-xl hover:bg-white flex items-center justify-between transition group text-xs text-[#1C1917]"
                      >
                        <span className="font-serif font-semibold group-hover:text-[#6E2A38]">
                          {state.name}
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {state.zone}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stories & Editorial */}
            <Link
              to="/stories"
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/stories'
                  ? 'text-[#6E2A38] font-semibold'
                  : 'text-[#1C1917]/80 hover:text-[#6E2A38]'
              }`}
            >
              Stories
            </Link>

            {/* Crafts Marketplace */}
            <Link
              to="/crafts"
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/crafts' || location.pathname === '/marketplace'
                  ? 'text-[#6E2A38] font-semibold'
                  : 'text-[#1C1917]/80 hover:text-[#6E2A38]'
              }`}
            >
              Crafts
            </Link>

            {/* Verify Craft Provenance */}
            <Link
              to="/verify"
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/verify'
                  ? 'text-[#6E2A38] font-semibold'
                  : 'text-[#1C1917]/80 hover:text-[#6E2A38]'
              }`}
            >
              Verify NFC
            </Link>
          </nav>

          {/* Right Action Tools: Search, Language, Wishlist, Bag, Customer Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Search */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex relative items-center">
              <input
                type="text"
                placeholder="Search bronze, silk, crafts..."
                value={navSearch}
                onChange={e => setNavSearch(e.target.value)}
                className="w-40 lg:w-52 pl-9 pr-3 py-1.5 text-xs bg-white/80 border border-[#D9C4A5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#6E2A38] focus:bg-white transition-all text-[#1C1917] placeholder:text-stone-400"
              />
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 pointer-events-none" />
            </form>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="p-2 rounded-full text-[#1C1917]/75 hover:text-[#6E2A38] hover:bg-white/80 transition flex items-center gap-1 text-xs font-medium"
                title="Select Indian Language"
              >
                <Globe className="w-4 h-4 text-[#AD7C2B]" />
                <span className="hidden sm:inline uppercase text-[11px] font-semibold text-[#6E2A38]">
                  {selectedLanguage}
                </span>
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#D9C4A5] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#6E2A38] tracking-wider border-b border-gray-100">
                    Cultural Translation
                  </div>
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#FAF6F0] transition ${
                        selectedLanguage === lang.code ? 'font-bold text-[#6E2A38] bg-[#FAF6F0]' : 'text-[#1C1917]'
                      }`}
                    >
                      <span>{lang.native}</span>
                      <span className="text-[11px] text-gray-400">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="p-2 rounded-full text-[#1C1917]/75 hover:text-[#6E2A38] hover:bg-white/80 transition relative"
              title="Saved Crafts Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#6E2A38] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#FAF6F0]">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="p-2 rounded-full text-[#1C1917]/75 hover:text-[#6E2A38] hover:bg-white/80 transition relative"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#6E2A38] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#FAF6F0]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Customer Account / Sign In */}
            {isCustomerLoggedIn && customerUser ? (
              <div className="relative" onMouseLeave={() => setUserDropdownOpen(false)}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1.5 rounded-full hover:bg-white/80 transition border border-[#D9C4A5]"
                  title={`Signed in as ${customerUser.name}`}
                >
                  <img
                    src={customerUser.avatar}
                    alt={customerUser.name}
                    className="w-7 h-7 rounded-full object-cover ring-1 ring-[#C59B27]"
                  />
                  <span className="hidden xl:inline text-xs font-semibold text-stone-800 max-w-[100px] truncate">
                    {customerUser.name}
                  </span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#D9C4A5] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 py-2 border-b border-stone-100">
                      <span className="text-xs font-bold text-[#1C1917] block truncate">{customerUser.name}</span>
                      <span className="text-[10px] text-stone-500 block truncate">{customerUser.email}</span>
                    </div>
                    <Link
                      to="/wishlist"
                      onClick={() => setUserDropdownOpen(false)}
                      className="px-4 py-2 text-xs text-stone-700 hover:bg-[#FAF6F0] flex items-center gap-2"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#6E2A38]" />
                      <span>Saved Crafts</span>
                    </Link>
                    <button
                      onClick={() => {
                        logoutCustomer();
                        setUserDropdownOpen(false);
                        navigate('/select-role');
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#6E2A38] hover:bg-[#541E2A] transition shadow-xs"
              >
                <User className="w-3.5 h-3.5" />
                <span>Log In</span>
              </Link>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#1C1917] hover:bg-white/60 transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#D9C4A5] px-4 pt-2 pb-6 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              placeholder="Search Indian GI crafts..."
              value={navSearch}
              onChange={e => setNavSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#D9C4A5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E2A38]"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
          </form>

          <div className="flex flex-col space-y-1 text-sm font-medium">
            <Link
              to="/explore-india"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-[#1C1917] hover:bg-white"
            >
              Explore India (28 States)
            </Link>
            <Link
              to="/state/tamil-nadu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-[#6E2A38] font-serif font-bold hover:bg-white"
            >
              Tamil Nadu Living Heritage
            </Link>
            <Link
              to="/stories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-[#1C1917] hover:bg-white"
            >
              Stories
            </Link>
            <Link
              to="/crafts"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-[#1C1917] hover:bg-white"
            >
              Crafts Marketplace
            </Link>
            <Link
              to="/verify"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-[#1C1917] hover:bg-white"
            >
              Verify NFC Tag
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-[#6E2A38] font-bold hover:bg-white"
            >
              Customer Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
