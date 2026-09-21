import React, { useState } from 'react';
import { useVarnam } from '../../context/VarnamContext';
import { VERIFICATION_REGISTRY } from '../../data/verification';
import { X, Trash2, Plus, Minus, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, clearCart, addToDigitalLocker } = useVarnam();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleCheckout = () => {
    const generatedId = `VRN-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    
    // Auto-issue certificates to buyer's digital locker for all items
    cart.forEach(item => {
      const reg = VERIFICATION_REGISTRY[item.craft.varnamId];
      if (reg) {
        addToDigitalLocker(reg);
      }
    });

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C85A32', '#C59B27', '#7A2021', '#FAF6F0']
    });

    setOrderPlaced(true);
    clearCart();
  };

  const handleClose = () => {
    setOrderPlaced(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col border-l border-[#C59B27]/30">
          
          {/* Header */}
          <div className="p-6 bg-white/80 border-b border-[#C59B27]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C85A32]/10 flex items-center justify-center text-[#C85A32]">
                <ShieldCheck className="w-5 h-5 text-[#C85A32]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                  Your Heritage Bag
                </h3>
                <p className="text-xs text-stone-500">
                  Direct artisan provenance with NFC cryptographic tag
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderPlaced ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-4 ring-emerald-50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Sacred Order Confirmed!
                </h4>
                <p className="text-xs font-mono bg-stone-100 py-1.5 px-3 rounded-md text-stone-700 inline-block">
                  Order ID: {orderId}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Your authentic GI craft is being carefully prepared and packaged in custom archival timber by the master artisan guild.
                </p>

                <div className="p-4 bg-[#C59B27]/10 rounded-xl border border-[#C59B27]/30 text-left space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#7A2021] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                    Cryptographic Certificate Minted
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Digital ownership certificate and NFC hash have been automatically transferred into your <strong>Varnam Digital Locker</strong>.
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <Link
                    to="/digital-locker"
                    onClick={handleClose}
                    className="w-full py-3 bg-[#1B2A4A] text-white font-semibold rounded-xl text-sm hover:bg-[#131E35] transition shadow-md"
                  >
                    View in Digital Certificate Locker
                  </Link>
                  <button
                    onClick={handleClose}
                    className="w-full py-2.5 text-xs text-stone-600 hover:text-[#1C1917] transition"
                  >
                    Continue Exploring India
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <p className="font-serif text-lg font-medium text-stone-700">
                  Your bag is currently empty
                </p>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore master artisan creations, state cultural hubs, and verify pieces before adding them to your collection.
                </p>
                <Link
                  to="/marketplace"
                  onClick={onClose}
                  className="inline-block mt-3 px-5 py-2.5 bg-[#C85A32] text-white text-xs font-semibold rounded-full hover:bg-[#B34724] transition shadow-xs"
                >
                  Discover Authentic Crafts
                </Link>
              </div>
            ) : (
              cart.map(item => (
                <div 
                  key={item.craft.id}
                  className="p-3 bg-white rounded-xl border border-[#C59B27]/20 shadow-xs flex gap-3 items-center"
                >
                  <img
                    src={item.craft.images[0]}
                    alt={item.craft.name}
                    className="w-20 h-20 rounded-lg object-cover bg-stone-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold text-[#7A2021] bg-[#7A2021]/10 px-2 py-0.5 rounded-full inline-block mb-1">
                      {item.craft.giNumber} • {item.craft.stateName}
                    </span>
                    <h5 className="font-serif text-xs font-bold text-[#1C1917] truncate">
                      {item.craft.name}
                    </h5>
                    <p className="text-xs font-bold text-[#C85A32] mt-0.5">
                      ₹{item.craft.price.toLocaleString('en-IN')}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone-200 rounded-md">
                        <button
                          onClick={() => updateCartQuantity(item.craft.id, item.quantity - 1)}
                          className="p-1 hover:bg-stone-100 text-stone-600 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.craft.id, item.quantity + 1)}
                          className="p-1 hover:bg-stone-100 text-stone-600 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.craft.id)}
                        className="text-stone-400 hover:text-red-500 transition p-1"
                        title="Remove from bag"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Total & Checkout */}
          {!orderPlaced && cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#C59B27]/20 space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Heritage Insured Shipping</span>
                  <span className="font-semibold">FREE (Special Preservation Courier)</span>
                </div>
                <div className="flex justify-between text-stone-700 font-bold text-base pt-2 border-t border-stone-100">
                  <span>Total Due</span>
                  <span className="text-[#C85A32]">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="p-2.5 bg-[#FAF6F0] rounded-lg border border-[#C59B27]/20 flex items-center gap-2 text-[11px] text-stone-600">
                <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Includes embedded cryptographic NFC tag & Government GI Certificate.</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#C85A32] to-[#B34724] hover:from-[#B34724] hover:to-[#7A2021] text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Complete Order & Issue Certificate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
