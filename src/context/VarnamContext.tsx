import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Craft, CartItem, SupportedLanguage, VerificationRecord } from '../types';
import { ALL_CRAFTS } from '../data/crafts';
import { VERIFICATION_REGISTRY } from '../data/verification';
import { CULTURAL_TRANSLATIONS, TranslationDictionary } from '../services/ai/translator';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'gold';
  title: string;
  message: string;
}

interface VarnamContextType {
  wishlist: string[];
  toggleWishlist: (craftId: string) => void;
  isWishlisted: (craftId: string) => boolean;
  
  cart: CartItem[];
  addToCart: (craft: Craft, quantity?: number) => void;
  removeFromCart: (craftId: string) => void;
  updateCartQuantity: (craftId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  
  digitalLocker: VerificationRecord[];
  addToDigitalLocker: (record: VerificationRecord) => void;
  
  selectedLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationDictionary;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  toasts: ToastMessage[];
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'gold') => void;
  removeToast: (id: string) => void;
}

const VarnamContext = createContext<VarnamContextType | undefined>(undefined);

export const VarnamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('varnam_wishlist');
    return saved ? JSON.parse(saved) : ['swamimalai-bronze-nataraja', 'nirona-roghan-tree-of-life'];
  });

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('varnam_cart');
    if (saved) return JSON.parse(saved);
    const sampleCraft = ALL_CRAFTS.find(c => c.id === 'jaipur-blue-pottery-vase');
    return sampleCraft ? [{ craft: sampleCraft, quantity: 1 }] : [];
  });

  // Digital Locker (Owned Verified Certificates)
  const [digitalLocker, setDigitalLocker] = useState<VerificationRecord[]>(() => {
    const saved = localStorage.getItem('varnam_locker');
    return saved ? JSON.parse(saved) : [
      VERIFICATION_REGISTRY['VRN-TN-000428'],
      VERIFICATION_REGISTRY['VRN-KL-000801']
    ];
  });

  // Language
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('en');

  // Search
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    localStorage.setItem('varnam_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('varnam_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('varnam_locker', JSON.stringify(digitalLocker));
  }, [digitalLocker]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'gold' = 'success') => {
    const id = Math.random().toString();
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const toggleWishlist = (craftId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(craftId);
      const craft = ALL_CRAFTS.find(c => c.id === craftId);
      const craftName = craft ? craft.name : 'Craft';
      
      if (exists) {
        showToast('Removed from Wishlist', `${craftName} removed from your saved heritage items.`, 'info');
        return prev.filter(id => id !== craftId);
      } else {
        showToast('Saved to Wishlist', `${craftName} added to your personal Varnam collection.`, 'gold');
        return [...prev, craftId];
      }
    });
  };

  const isWishlisted = (craftId: string) => wishlist.includes(craftId);

  const addToCart = (craft: Craft, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.craft.id === craft.id);
      if (existing) {
        showToast('Quantity Updated', `Updated quantity for ${craft.name}`, 'info');
        return prev.map(item =>
          item.craft.id === craft.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      showToast('Added to Bag', `${craft.name} has been added to your shopping bag.`, 'success');
      return [...prev, { craft, quantity }];
    });
  };

  const removeFromCart = (craftId: string) => {
    setCart(prev => prev.filter(item => item.craft.id !== craftId));
    showToast('Removed Item', 'Craft removed from your shopping bag.', 'info');
  };

  const updateCartQuantity = (craftId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(craftId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.craft.id === craftId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const addToDigitalLocker = (record: VerificationRecord) => {
    setDigitalLocker(prev => {
      if (prev.find(r => r.varnamId === record.varnamId)) return prev;
      showToast('Certificate Added to Locker', `Varnam ID ${record.varnamId} stored in your verified digital locker.`, 'gold');
      return [record, ...prev];
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.craft.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const t = CULTURAL_TRANSLATIONS[selectedLanguage];

  return (
    <VarnamContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        cartCount,
        digitalLocker,
        addToDigitalLocker,
        selectedLanguage,
        setLanguage: setSelectedLanguage,
        t,
        searchQuery,
        setSearchQuery,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </VarnamContext.Provider>
  );
};

export const useVarnam = (): VarnamContextType => {
  const context = useContext(VarnamContext);
  if (!context) {
    throw new Error('useVarnam must be used within a VarnamProvider');
  }
  return context;
};
