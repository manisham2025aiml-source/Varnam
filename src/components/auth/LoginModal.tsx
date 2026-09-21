import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  X, 
  ShoppingBag, 
  Sparkles, 
  ArrowRight,
  User,
  Mail,
  Compass
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LoginModal: React.FC = () => {
  const { 
    isLoginModalOpen, 
    closeLoginModal, 
    loginAsCustomer
  } = useAuth();
  
  const [customerName, setCustomerName] = useState('Ananya Sharma');
  const [customerEmail, setCustomerEmail] = useState('ananya.collector@varnam.in');
  const navigate = useNavigate();

  if (!isLoginModalOpen) return null;

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAsCustomer(customerName, customerEmail);
    closeLoginModal();
    navigate('/explore-india');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#FAF6F0] rounded-3xl border border-[#C59B27]/40 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Decorative Border Banner */}
        <div className="h-2 bg-gradient-to-r from-[#6E2A38] via-[#BE5A3B] to-[#AD7C2B]" />

        {/* Close Button */}
        <button 
          onClick={closeLoginModal}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C59B27]/40 text-[#6E2A38] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#AD7C2B]" />
            Buyer & Connoisseur Gateway
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
            Sign in to <span className="text-[#6E2A38]">VARNAM</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
            Discover living Indian craft traditions, read authentic artisan stories in your language, and verify origin.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 pt-2">
          <form onSubmit={handleCustomerSubmit} className="space-y-4">
            <div className="p-3.5 bg-white rounded-2xl border border-[#C59B27]/25 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E2A38] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Customer & Collector Experience
              </span>
              <p className="text-xs text-stone-600">
                Collect certified handicrafts, listen to oral histories, and post community reviews for master artisans.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-stone-700 block mb-1">Full Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-3.5 w-4 h-4 text-stone-400" />
                  <input 
                    type="text" 
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    required
                    placeholder="e.g. Ananya Sharma"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E2A38]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 w-4 h-4 text-stone-400" />
                  <input 
                    type="email" 
                    value={customerEmail}
                    onChange={e => setCustomerEmail(e.target.value)}
                    required
                    placeholder="e.g. ananya.collector@varnam.in"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6E2A38]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#6E2A38] hover:bg-[#541E2A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Enter as Customer & Explore Crafts</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => {
                  loginAsCustomer('Ananya Sharma', 'ananya.collector@varnam.in');
                  closeLoginModal();
                  navigate('/explore-india');
                }}
                className="text-xs text-stone-500 hover:text-[#6E2A38] underline font-medium"
              >
                Quick Demo: Sign in as Collector Ananya Sharma
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

