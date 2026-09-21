import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { VarnamProvider } from './context/VarnamContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { ToastContainer } from './components/common/ToastContainer';
import { VarnamAiChat } from './components/ai/VarnamAiChat';
import { SellerNavbar } from './components/seller/SellerNavbar';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Pages
import { HomePage } from './pages/HomePage';
import { ExploreIndiaPage } from './pages/ExploreIndiaPage';
import { StateDetailPage } from './pages/StateDetailPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { CraftDetailPage } from './pages/CraftDetailPage';
import { ArtisansPage } from './pages/ArtisansPage';
import { ArtisanDetailPage } from './pages/ArtisanDetailPage';
import { VerifyPage } from './pages/VerifyPage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { ArtisanDashboardPage } from './pages/ArtisanDashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { WishlistPage } from './pages/WishlistPage';
import { DigitalLockerPage } from './pages/DigitalLockerPage';
import { DatasetPage } from './pages/DatasetPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';
import { SellerLoginPage } from './pages/SellerLoginPage';
import { SellerHistoryPage } from './pages/SellerHistoryPage';
import { SellerCraftFlowPage } from './pages/SellerCraftFlowPage';
import { RoleSelectionPage } from './pages/RoleSelectionPage';
import { LoginModal } from './components/auth/LoginModal';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  const isSellerRoute = location.pathname.startsWith('/seller');
  const isSellerLogin = location.pathname === '/seller/login';
  const isRoleSelection = location.pathname === '/select-role' || location.pathname === '/welcome';
  const isLoginPage = location.pathname === '/login' || location.pathname === '/signin';

  return (
    <div className={`flex flex-col min-h-screen ${isSellerRoute ? 'bg-[#131E35] text-[#FAF6F0]' : 'bg-[#FAF6F0] text-[#1C1917]'}`}>
      {/* Dedicated Seller Navigation for Artisan Studio (except login screen) */}
      {isSellerRoute && !isSellerLogin && <SellerNavbar />}

      {/* Standard Customer Navigation (Hidden on Seller screens & Role Selection screen) */}
      {!isSellerRoute && !isRoleSelection && location.pathname !== '/' && (
        <Navbar onOpenCart={() => setCartOpen(true)} />
      )}

      {/* Main Page Routing */}
      <main className="flex-1">
        <Routes>
          {/* First Screen: Role Selection Screen (Customer & Seller Icons) */}
          <Route path="/" element={<RoleSelectionPage />} />
          <Route path="/select-role" element={<RoleSelectionPage />} />
          <Route path="/welcome" element={<RoleSelectionPage />} />

          {/* Customer Core Experience Routes (Home is Explore India State Grid) */}
          <Route path="/explore-india" element={<ExploreIndiaPage />} />
          <Route path="/explore-india/:stateSlug" element={<StateDetailPage />} />
          <Route path="/state/:stateSlug" element={<StateDetailPage />} />
          <Route path="/state-tn" element={<StateDetailPage />} />
          <Route path="/states" element={<ExploreIndiaPage />} />
          <Route path="/map" element={<ExploreIndiaPage />} />

          {/* Customer Authentication */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<LoginPage />} />

          {/* Dedicated Artisan / Seller Routes (Hard Segregation) */}
          <Route path="/seller/login" element={<SellerLoginPage />} />
          <Route path="/seller/add-product" element={<SellerCraftFlowPage />} />
          <Route path="/seller/history" element={<SellerHistoryPage />} />
          <Route path="/seller/dashboard" element={<SellerHistoryPage />} />
          <Route path="/seller" element={<SellerHistoryPage />} />
          <Route path="/add-craft" element={<SellerCraftFlowPage />} />
          <Route path="/sell" element={<SellerCraftFlowPage />} />

          {/* Marketplace & Crafts */}
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/crafts" element={<MarketplacePage />} />
          <Route path="/shop" element={<MarketplacePage />} />
          <Route path="/craft/:craftId" element={<CraftDetailPage />} />
          <Route path="/product/:craftId" element={<CraftDetailPage />} />
          <Route path="/p/:craftId" element={<CraftDetailPage />} />

          {/* Master Artisans */}
          <Route path="/artisans" element={<ArtisansPage />} />
          <Route path="/artisan/:artisanId" element={<ArtisanDetailPage />} />

          {/* IoT Authenticity & Smart Station */}
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/nfc" element={<VerifyPage />} />
          <Route path="/hardware" element={<VerifyPage />} />
          <Route path="/iot" element={<VerifyPage />} />
          <Route path="/smart-station" element={<VerifyPage />} />

          {/* Stories & Editorial */}
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/story/:storyId" element={<StoryDetailPage />} />
          <Route path="/journal" element={<StoriesPage />} />

          {/* Digital Locker & Saved Crafts */}
          <Route path="/digital-locker" element={<DigitalLockerPage />} />
          <Route path="/locker" element={<DigitalLockerPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/saved" element={<WishlistPage />} />

          {/* Open Cultural Dataset */}
          <Route path="/dataset" element={<DatasetPage />} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Customer Modals & Overlays (Strictly hidden on Seller routes & Role Selection screen) */}
      {!isSellerRoute && !isRoleSelection && location.pathname !== '/' && (
        <>
          <LoginModal />
          <VarnamAiChat />
          <CartDrawer
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
          />
          <Footer />
        </>
      )}

      {/* Global Floating Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <VarnamProvider>
          <Router>
            <ScrollToTop />
            <AppContent />
          </Router>
        </VarnamProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
