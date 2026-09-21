import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'customer' | 'artisan' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  artisanId?: string; // If artisan role
  craftSpecialty?: string;
  stateName?: string;
  verificationPermissions?: boolean; // If admin
  emailVerified?: boolean;
  provider?: string; // e.g. "email-otp"
  sessionId?: string;
  sessionExpirationTime?: number;
}

interface AuthContextType {
  // Current active perspective
  currentUser: UserProfile;
  currentRole: UserRole;
  setRole: (role: UserRole) => void;
  availableRoles: { role: UserRole; label: string; description: string }[];
  
  // Segregated Auth
  customerUser: UserProfile | null;
  sellerUser: UserProfile | null;
  isCustomerLoggedIn: boolean;
  isSellerLoggedIn: boolean;
  sessionId: string | null;
  isEmailVerified: boolean;

  // Actions
  loginAsCustomer: (name?: string, email?: string) => void;
  loginAsSeller: (name?: string, artisanId?: string, specialty?: string, stateName?: string) => void;
  requestEmailOtp: (email: string) => Promise<{ success: boolean; code?: string; message: string }>;
  verifyEmailOtp: (email: string, code: string) => Promise<{ success: boolean; message: string; user?: UserProfile }>;
  loginWithConvexDatasetUser: () => void;
  logoutCustomer: () => void;
  logoutSeller: () => void;
  logout: () => void;

  // Modals
  isLoginModalOpen: boolean;
  preferredLoginTab: 'customer' | 'seller';
  openLoginModal: (preferredTab?: 'customer' | 'seller') => void;
  closeLoginModal: () => void;
  isLoggedIn: boolean;
}

export const CONVEX_DATASET_USER: UserProfile = {
  id: 'jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0',
  name: 'Manisha M',
  email: 'manisha.m2025aiml@sece.ac.in',
  role: 'customer',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  emailVerified: true,
  provider: 'email-otp',
  sessionId: 'jh78cp9716j5jh3cjyn78c6rnn8erh5m',
  sessionExpirationTime: 1792517258335
};

const DEFAULT_CUSTOMER: UserProfile = {
  id: 'jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0',
  name: 'Manisha M',
  email: 'manisha.m2025aiml@sece.ac.in',
  role: 'customer',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  emailVerified: true,
  provider: 'email-otp',
  sessionId: 'jh78cp9716j5jh3cjyn78c6rnn8erh5m',
  sessionExpirationTime: 1792517258335
};

const DEFAULT_SELLER: UserProfile = {
  id: 'artisan-meena-pollachi',
  name: 'Meena of Pollachi',
  email: 'meena.bamboo@varnam-heritage.in',
  role: 'artisan',
  artisanId: 'ART-001',
  craftSpecialty: 'Bamboo & Cane Craft',
  stateName: 'Tamil Nadu',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>(() => {
    return (localStorage.getItem('varnam_role') as UserRole) || 'customer';
  });

  const [customerUser, setCustomerUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('varnam_customer_user');
    return saved ? JSON.parse(saved) : DEFAULT_CUSTOMER;
  });

  const [sellerUser, setSellerUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('varnam_seller_user');
    return saved ? JSON.parse(saved) : DEFAULT_SELLER;
  });

  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('varnam_customer_logged_in') !== 'false';
  });

  const [isSellerLoggedIn, setIsSellerLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('varnam_seller_logged_in') === 'true';
  });

  const [sessionId, setSessionId] = useState<string | null>(() => {
    return localStorage.getItem('varnam_session_id') || 'jh78cp9716j5jh3cjyn78c6rnn8erh5m';
  });

  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(() => {
    return localStorage.getItem('varnam_email_verified') !== 'false';
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [preferredLoginTab, setPreferredLoginTab] = useState<'customer' | 'seller'>('customer');

  const setRole = (role: UserRole) => {
    setCurrentRole(role);
    localStorage.setItem('varnam_role', role);
  };

  const openLoginModal = (tab: 'customer' | 'seller' = 'customer') => {
    setPreferredLoginTab(tab);
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const requestEmailOtp = async (email: string) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        const data = await res.json();
        return { success: true, code: data.code, message: data.message || 'OTP code sent' };
      }
    } catch {
      // Fallback for standalone frontend
    }
    const demoCode = Math.floor(100000 + Math.random() * 900000).toString();
    return { success: true, code: demoCode, message: `OTP sent to ${email}` };
  };

  const verifyEmailOtp = async (email: string, code: string) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code })
      });
      if (res.ok) {
        const data = await res.json();
        const user: UserProfile = {
          id: data.user?.id || `usr-${Date.now()}`,
          name: data.user?.name || email.split('@')[0],
          email: data.user?.email || email,
          role: 'customer',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
          emailVerified: true,
          provider: 'email-otp',
          sessionId: data.session?.id,
          sessionExpirationTime: data.session?.expiration_time
        };
        setCustomerUser(user);
        setIsCustomerLoggedIn(true);
        setCurrentRole('customer');
        setSessionId(user.sessionId || null);
        setIsEmailVerified(true);
        localStorage.setItem('varnam_customer_user', JSON.stringify(user));
        localStorage.setItem('varnam_customer_logged_in', 'true');
        if (user.sessionId) localStorage.setItem('varnam_session_id', user.sessionId);
        localStorage.setItem('varnam_email_verified', 'true');
        closeLoginModal();
        return { success: true, message: 'Verified successfully', user };
      }
    } catch {
      // Fallback
    }

    if (code.trim().length === 6) {
      const user: UserProfile = {
        id: `usr-${Date.now()}`,
        name: email.split('@')[0].replace(/[._]/g, ' '),
        email,
        role: 'customer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        emailVerified: true,
        provider: 'email-otp',
        sessionId: `sess-${Date.now()}`
      };
      setCustomerUser(user);
      setIsCustomerLoggedIn(true);
      setCurrentRole('customer');
      setSessionId(user.sessionId || null);
      setIsEmailVerified(true);
      localStorage.setItem('varnam_customer_user', JSON.stringify(user));
      localStorage.setItem('varnam_customer_logged_in', 'true');
      closeLoginModal();
      return { success: true, message: 'Authenticated successfully with OTP', user };
    }

    return { success: false, message: 'Invalid 6-digit OTP code' };
  };

  const loginWithConvexDatasetUser = () => {
    setCustomerUser(CONVEX_DATASET_USER);
    setIsCustomerLoggedIn(true);
    setCurrentRole('customer');
    setSessionId(CONVEX_DATASET_USER.sessionId || null);
    setIsEmailVerified(true);
    localStorage.setItem('varnam_customer_user', JSON.stringify(CONVEX_DATASET_USER));
    localStorage.setItem('varnam_customer_logged_in', 'true');
    if (CONVEX_DATASET_USER.sessionId) {
      localStorage.setItem('varnam_session_id', CONVEX_DATASET_USER.sessionId);
    }
    localStorage.setItem('varnam_email_verified', 'true');
    closeLoginModal();
  };

  const loginAsCustomer = (name = 'Manisha M', email = 'manisha.m2025aiml@sece.ac.in') => {
    const user: UserProfile = {
      id: `customer-${Date.now()}`,
      name,
      email,
      role: 'customer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      emailVerified: true,
      provider: 'email-otp',
      sessionId: `sess-${Date.now()}`
    };
    setCustomerUser(user);
    setIsCustomerLoggedIn(true);
    setCurrentRole('customer');
    setSessionId(user.sessionId || null);
    setIsEmailVerified(true);
    localStorage.setItem('varnam_customer_user', JSON.stringify(user));
    localStorage.setItem('varnam_customer_logged_in', 'true');
    closeLoginModal();
  };

  const loginAsSeller = (
    name = 'Meena of Pollachi',
    artisanId = 'ART-001',
    specialty = 'Bamboo & Cane Craft',
    stateName = 'Tamil Nadu'
  ) => {
    const user: UserProfile = {
      id: `artisan-${Date.now()}`,
      name,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@varnam-heritage.in`,
      role: 'artisan',
      artisanId,
      craftSpecialty: specialty,
      stateName,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
    };
    setSellerUser(user);
    setIsSellerLoggedIn(true);
    setCurrentRole('artisan');
    localStorage.setItem('varnam_seller_user', JSON.stringify(user));
    localStorage.setItem('varnam_seller_logged_in', 'true');
    closeLoginModal();
  };

  const logoutCustomer = () => {
    setIsCustomerLoggedIn(false);
    setCustomerUser(null);
    setSessionId(null);
    setIsEmailVerified(false);
    localStorage.setItem('varnam_customer_logged_in', 'false');
    localStorage.removeItem('varnam_customer_user');
    localStorage.removeItem('varnam_session_id');
    localStorage.removeItem('varnam_email_verified');
  };

  const logoutSeller = () => {
    setIsSellerLoggedIn(false);
    setSellerUser(null);
    localStorage.setItem('varnam_seller_logged_in', 'false');
    localStorage.removeItem('varnam_seller_user');
  };

  const logout = () => {
    if (currentRole === 'artisan') {
      logoutSeller();
    } else {
      logoutCustomer();
    }
  };

  const availableRoles = [
    {
      role: 'customer' as UserRole,
      label: 'Customer / Connoisseur',
      description: 'Discover crafts, verify NFC tags, explore states, and buy authentic handcrafted heritage.'
    },
    {
      role: 'artisan' as UserRole,
      label: 'Seller / Artisan Studio',
      description: 'Upload craft photo, get AI vision & story analysis, pair NFC tag, and publish to marketplace.'
    },
    {
      role: 'admin' as UserRole,
      label: 'GI Registrar & Verifier',
      description: 'Audit craft authenticity, monitor IoT NFC hardware scans, approve cryptographic seals.'
    }
  ];

  const currentUser = currentRole === 'artisan' 
    ? (sellerUser || DEFAULT_SELLER) 
    : (customerUser || DEFAULT_CUSTOMER);

  const isLoggedIn = currentRole === 'artisan' ? isSellerLoggedIn : isCustomerLoggedIn;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentRole,
        setRole,
        availableRoles,
        customerUser,
        sellerUser,
        isCustomerLoggedIn,
        isSellerLoggedIn,
        sessionId,
        isEmailVerified,
        loginAsCustomer,
        loginAsSeller,
        requestEmailOtp,
        verifyEmailOtp,
        loginWithConvexDatasetUser,
        logoutCustomer,
        logoutSeller,
        logout,
        isLoginModalOpen,
        preferredLoginTab,
        openLoginModal,
        closeLoginModal,
        isLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

