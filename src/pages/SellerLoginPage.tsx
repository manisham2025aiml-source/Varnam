import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { INDIAN_STATES } from '../data/states';
import { 
  Hammer, 
  Sparkles, 
  ArrowRight, 
  User, 
  MapPin, 
  Mail, 
  Lock, 
  Tag, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const SellerLoginPage: React.FC = () => {
  const [artisanName, setArtisanName] = useState('Meena of Pollachi');
  const [selectedState, setSelectedState] = useState('Tamil Nadu');
  const [specialty, setSpecialty] = useState('Bamboo & Cane Craft');
  const [email, setEmail] = useState('meena.bamboo@varnam-heritage.in');
  const [password, setPassword] = useState('••••••••');
  const [isSignUp, setIsSignUp] = useState(false);
  const { loginAsSeller } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAsSeller(artisanName, 'ART-001', specialty, selectedState);
    navigate('/seller/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#131E35] text-[#FAF6F0] flex items-center justify-center p-6 sm:p-12 relative overflow-hidden selection:bg-[#C59B27] selection:text-black">
      {/* Subtle Background Glows */}
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-[#C59B27]/10 pointer-events-none blur-3xl" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-[#C85A32]/15 pointer-events-none blur-3xl" />

      <div className="w-full max-w-lg bg-[#1B2A4A] border-2 border-[#C59B27]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Top Gold Accent Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C59B27] via-[#F5D77F] to-[#AD7C2B]" />

        {/* Role Switch & Portal Tag */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/select-role"
            className="text-xs text-[#F5D77F]/75 hover:text-[#F5D77F] font-semibold transition flex items-center gap-1"
          >
            ← Switch Role
          </Link>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#C59B27]/15 text-[#F5D77F] border border-[#C59B27]/30 uppercase font-mono tracking-wider">
            Guild Access
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#C59B27]/20 border border-[#C59B27]/40 flex items-center justify-center text-[#F5D77F]">
            <Hammer className="w-4 h-4" />
          </div>
          <span className="font-serif font-bold text-sm tracking-wider text-[#F5D77F]">
            VARNAM ARTISAN STUDIO
          </span>
        </div>

        {/* Title */}
        <div className="space-y-2 mb-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            {isSignUp ? 'Artisan Registration' : 'Artisan Sign In'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Record your craft story in your own mother tongue, publish authentic handcrafted pieces directly to buyers, and review customer feedback.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-[#F5D77F] block mb-1">
              Master Artisan / Guild Leader Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3.5 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={artisanName}
                onChange={e => setArtisanName(e.target.value)}
                required
                placeholder="e.g. Meena of Pollachi or Suresh Sthapathi"
                className="w-full pl-10 pr-4 py-2.5 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white placeholder:text-stone-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#F5D77F] block mb-1">
                State of Origin
              </label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-3 w-4 h-4 text-stone-400" />
                <select
                  value={selectedState}
                  onChange={e => setSelectedState(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-xs text-white"
                >
                  {INDIAN_STATES.map(s => (
                    <option key={s.id} value={s.name} className="bg-[#1B2A4A] text-white">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#F5D77F] block mb-1">
                Craft Specialty
              </label>
              <div className="relative flex items-center">
                <Tag className="absolute left-3 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={specialty}
                  onChange={e => setSpecialty(e.target.value)}
                  placeholder="e.g. Bamboo & Cane"
                  className="w-full pl-9 pr-3 py-2.5 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-xs text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#F5D77F] block mb-1">
              Registered Phone or Email
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="meena.artisan@varnam-heritage.in"
                className="w-full pl-10 pr-4 py-2.5 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#F5D77F] block mb-1">
              Secret Password / Passcode
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 w-4 h-4 text-stone-400" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-[#131E35] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-2 rounded-xl font-bold text-xs uppercase tracking-wider text-[#1C1917] bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C59B27] hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2"
          >
            <Hammer className="w-4 h-4 text-[#1C1917]" />
            <span>{isSignUp ? 'Register Guild & Open Studio' : 'Enter Artisan Studio'}</span>
            <ArrowRight className="w-4 h-4 text-[#1C1917]" />
          </button>
        </form>

        {/* Quick Demo Login */}
        <div className="mt-6 pt-5 border-t border-white/10 text-center space-y-3">
          <button
            type="button"
            onClick={() => {
              loginAsSeller('Meena of Pollachi', 'ART-001', 'Bamboo & Cane Craft', 'Tamil Nadu');
              navigate('/seller/dashboard');
            }}
            className="text-xs w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-[#C59B27]/30 text-[#F5D77F] font-medium transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span>Quick Demo: Sign In as Meena (Master Artisan)</span>
          </button>

          <p className="text-xs text-stone-400">
            {isSignUp ? 'Already registered as an artisan? ' : 'New hereditary artisan or guild? '}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#F5D77F] font-bold hover:underline"
            >
              {isSignUp ? 'Sign In' : 'Register Your Guild'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
