import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Hammer, 
  PlusCircle, 
  History, 
  User, 
  LogOut, 
  Sparkles,
  ShieldCheck,
  Tag
} from 'lucide-react';

export const SellerNavbar: React.FC = () => {
  const { currentUser, sellerUser, logoutSeller } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const activeUser = sellerUser || (currentUser?.role === 'artisan' ? currentUser : null) || {
    id: 'artisan-meena-pollachi',
    name: 'Meena of Pollachi',
    email: 'meena.bamboo@varnam-heritage.in',
    role: 'artisan' as const,
    artisanId: 'ART-001',
    craftSpecialty: 'Bamboo & Cane Craft',
    stateName: 'Tamil Nadu',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
  };

  const handleLogout = () => {
    logoutSeller();
    navigate('/select-role');
  };

  const navLinks = [
    {
      name: 'Add Product & Story',
      path: '/seller/add-product',
      icon: PlusCircle
    },
    {
      name: 'My Products & Feedback',
      path: '/seller/history',
      icon: History
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#131E35] border-b border-[#C59B27]/40 shadow-lg text-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Artisan Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C59B27] via-[#D4AF37] to-[#8A6B1A] flex items-center justify-center text-[#131E35] font-bold shadow-md ring-2 ring-[#C59B27]/50">
              <Hammer className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-xl font-bold text-white">
                VARNAM
              </span>
              <span className="text-[10px] tracking-widest text-[#F5D77F] uppercase font-semibold">
                Artisan Studio & Story Workspace
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path || (link.path === '/seller/add-product' && location.pathname === '/seller');
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#C59B27] text-[#131E35] shadow-md'
                      : 'text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Artisan Profile & Logout */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded-full border border-[#C59B27]/30">
              <img
                src={activeUser?.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'}
                alt={activeUser?.name || 'Artisan'}
                className="w-7 h-7 rounded-full object-cover ring-1 ring-[#C59B27]"
              />
              <div className="text-left">
                <span className="text-xs font-bold text-white block leading-tight">
                  {activeUser?.name || 'Meena of Pollachi'}
                </span>
                <span className="text-[10px] text-[#F5D77F]">
                  {activeUser?.craftSpecialty || 'Master Artisan'} • {activeUser?.stateName || 'Tamil Nadu'}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 rounded-full text-stone-300 hover:text-red-400 hover:bg-white/10 transition"
              title="Sign Out of Artisan Studio"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Links */}
      <div className="md:hidden flex border-t border-[#C59B27]/20 px-4 py-2 bg-[#1B2A4A] gap-2">
        {navLinks.map(link => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path || (link.path === '/seller/add-product' && location.pathname === '/seller');
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex-1 py-2 text-center rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                isActive ? 'bg-[#C59B27] text-[#131E35]' : 'text-stone-300 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
};
