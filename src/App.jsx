import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductHandwash from './pages/ProductHandwash';
import ProductFloorCleaner from './pages/ProductFloorCleaner';
import ProductDishwash from './pages/ProductDishwash';
import ProductRoomFreshener from './pages/ProductRoomFreshener';
import ProductCarWash from './pages/ProductCarWash';
import ProductCarShampoo from './pages/ProductCarShampoo';
import ProductLiquidSoap from './pages/ProductLiquidSoap';
import Wholesale from './pages/Wholesale';
import Distributor from './pages/Distributor';
import ImportExport from './pages/ImportExport';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

// Helper to normalize route from hash or pathname
function getNormalizedRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash) {
    return hash.startsWith('/') ? hash : '/' + hash;
  }
  const path = window.location.pathname;
  return path || '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getNormalizedRoute);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState('');

  // Synchronize route changes via hashchange & popstate
  useEffect(() => {
    const handleRouteChange = () => {
      const normalized = getNormalizedRoute();
      setCurrentRoute(normalized);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    // Initial check
    if (!window.location.hash && window.location.pathname === '/') {
      window.location.hash = '#/';
    }

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const openEnquiry = (productName = '') => {
    setSelectedProductForModal(productName || '');
    setEnquiryModalOpen(true);
  };

  const closeEnquiry = () => {
    setEnquiryModalOpen(false);
    setSelectedProductForModal('');
  };

  // Render matching page
  const renderPage = () => {
    // Strip trailing slash if any (except root)
    const cleanRoute = currentRoute.length > 1 && currentRoute.endsWith('/') 
      ? currentRoute.slice(0, -1) 
      : currentRoute;

    const navigate = (path) => {
      const clean = path.startsWith('/') ? path : '/' + path;
      window.location.hash = '#' + clean;
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    switch (cleanRoute) {
      case '/':
      case '':
        return <Home onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/about':
        return <About onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/products':
        return <Products onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/products/handwash':
        return <ProductHandwash onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/products/floor-cleaner':
        return <ProductFloorCleaner onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/products/dishwash-liquid':
      case '/products/dishwash':
        return <ProductDishwash onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/products/room-freshener':
        return <ProductRoomFreshener onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/products/car-wash':
        return <ProductCarWash onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/products/car-shampoo':
        return <ProductCarShampoo onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/products/liquid-soap':
        return <ProductLiquidSoap onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/wholesale':
        return <Wholesale onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/distributor':
      case '/distribution':
        return <Distributor onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/import-export':
      case '/export':
        return <ImportExport onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/contact':
        return <Contact onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
      case '/privacy-policy':
      case '/privacy':
        return <PrivacyPolicy onNavigate={navigate} />;
      case '/terms':
      case '/terms-of-service':
        return <Terms onNavigate={navigate} />;
      case '/disclaimer':
        return <Disclaimer onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} onOpenEnquiry={openEnquiry} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal font-sans antialiased selection:bg-soft-pink selection:text-primary">
      {/* Global Unified Header */}
      <Header 
        currentPath={currentRoute} 
        onNavigate={(path) => {
          window.location.hash = '#' + path;
        }} 
        onOpenEnquiry={() => openEnquiry()} 
      />

      {/* Dynamic Page View */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Unified Footer */}
      <Footer 
        onNavigate={(path) => {
          const clean = path.startsWith('/') ? path : '/' + path;
          window.location.hash = '#' + clean;
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
        onOpenEnquiry={openEnquiry} 
      />

      {/* Global Client-Side Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiry}
        defaultProduct={selectedProductForModal}
      />

      {/* Persistent Floating WhatsApp Quick-Connect Action */}
      <aside
        aria-label="Direct WhatsApp Contact"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999
        }}
      >
        <a
          href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '9999px',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
            fontWeight: 700,
            fontSize: '14px',
            textDecoration: 'none',
            letterSpacing: '0.3px',
            transition: 'transform 0.25s, box-shadow 0.25s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 211, 102, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.45)';
          }}
        >
          <svg style={{ width: '22px', height: '22px', fill: '#FFFFFF', flexShrink: 0 }} viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
          </svg>
          <span>WhatsApp Us</span>
        </a>
      </aside>
    </div>
  );
}
