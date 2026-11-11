import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MessageSquare, ArrowRight } from 'lucide-react';

export default function Header({ 
  currentPath: propPath, 
  currentRoute,
  onNavigate, 
  onOpenEnquiry, 
  isHeroOver 
}) {
  const currentPath = propPath || currentRoute || '/';
  const heroMode = isHeroOver !== undefined ? isHeroOver : (currentPath === '/' || currentPath === '');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLink = (path, e) => {
    if (e) e.preventDefault();
    setMobileOpen(false);
    setDropdownOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = '#' + path;
    }
  };

  // Determine styling based on scroll and whether we are over the pink hero
  const isPinkHero = heroMode && !scrolled;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: scrolled ? '72px' : '84px',
          zIndex: 1000,
          backgroundColor: isPinkHero ? 'rgba(216, 10, 104, 0.92)' : 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isPinkHero
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '1px solid rgba(242, 199, 217, 0.6)',
          boxShadow: scrolled ? '0 4px 20px rgba(20, 45, 98, 0.06)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLink('/', e)}
            style={{ display: 'flex', alignItems: 'center', height: '52px' }}
            aria-label="Vijeta Enterprises"
          >
            <img
              src={isPinkHero ? '/assets/images/brand/logo-light.svg' : '/assets/images/brand/logo.svg'}
              alt="VIJETA ENTERPRISES"
              style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem'
            }}
            className="header-desktop-nav"
          >
            <a
              href="/"
              onClick={(e) => handleLink('/', e)}
              style={navLinkStyle(currentPath === '/', isPinkHero)}
            >
              Home
            </a>
            
            <a
              href="/about"
              onClick={(e) => handleLink('/about', e)}
              style={navLinkStyle(currentPath === '/about', isPinkHero)}
            >
              About
            </a>

            {/* Products Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={(e) => handleLink('/products', e)}
                style={{
                  ...navLinkStyle(currentPath.startsWith('/products'), isPinkHero),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer'
                }}
              >
                <span>Products</span>
                <ChevronDown size={15} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {dropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    width: '285px',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 48px -6px rgba(216, 10, 104, 0.18), 0 0 24px rgba(255, 117, 160, 0.12)',
                    border: '1px solid rgba(242, 199, 217, 0.85)',
                    padding: '0.75rem 0',
                    zIndex: 200,
                    animation: 'dropdownFadeIn 0.2s ease-out'
                  }}
                >
                  <a href="/products/floor-cleaner" onClick={(e) => handleLink('/products/floor-cleaner', e)} style={dropdownItemStyle(currentPath === '/products/floor-cleaner')}>
                    Floor Cleaner
                  </a>
                  <a href="/products/dishwash-liquid" onClick={(e) => handleLink('/products/dishwash-liquid', e)} style={dropdownItemStyle(currentPath === '/products/dishwash-liquid')}>
                    Dishwash Liquid
                  </a>
                  <a href="/products/room-freshener" onClick={(e) => handleLink('/products/room-freshener', e)} style={dropdownItemStyle(currentPath === '/products/room-freshener')}>
                    Room Freshener
                  </a>
                  <a href="/products/car-wash" onClick={(e) => handleLink('/products/car-wash', e)} style={dropdownItemStyle(currentPath === '/products/car-wash')}>
                    Car Wash
                  </a>
                  <a href="/products/car-shampoo" onClick={(e) => handleLink('/products/car-shampoo', e)} style={dropdownItemStyle(currentPath === '/products/car-shampoo')}>
                    Car Shampoo (Snow Foam)
                  </a>
                  <a href="/products/liquid-soap" onClick={(e) => handleLink('/products/liquid-soap', e)} style={dropdownItemStyle(currentPath === '/products/liquid-soap')}>
                    Liquid Soap
                  </a>
                  <div style={{ borderTop: '1px solid #F3F4F6', margin: '0.35rem 0' }}></div>
                  <a href="/products" onClick={(e) => handleLink('/products', e)} style={{ ...dropdownItemStyle(false), color: '#D80A68', fontWeight: 700 }}>
                    <span>All Products Catalogue</span>
                    <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                  </a>
                </div>
              )}
            </div>

            <a
              href="/wholesale"
              onClick={(e) => handleLink('/wholesale', e)}
              style={navLinkStyle(currentPath === '/wholesale', isPinkHero)}
            >
              Wholesale
            </a>

            <a
              href="/distributor"
              onClick={(e) => handleLink('/distributor', e)}
              style={navLinkStyle(currentPath === '/distributor', isPinkHero)}
            >
              Distribution
            </a>

            <a
              href="/import-export"
              onClick={(e) => handleLink('/import-export', e)}
              style={navLinkStyle(currentPath === '/import-export', isPinkHero)}
            >
              Export Desk
            </a>

            <a
              href="/contact"
              onClick={(e) => handleLink('/contact', e)}
              style={navLinkStyle(currentPath === '/contact', isPinkHero)}
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              type="button"
              className={isPinkHero ? 'btn btn-light btn-sm' : 'btn btn-primary btn-sm'}
              onClick={() => onOpenEnquiry('Header Quick Action')}
            >
              Enquire Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              style={{
                display: 'none',
                width: '42px',
                height: '42px',
                alignItems: 'center',
                justifyContent: 'center',
                color: isPinkHero ? '#FFFFFF' : '#142D62'
              }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(13, 30, 66, 0.65)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '360px',
              height: '100vh',
              backgroundColor: '#FFFFFF',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
              padding: '1.75rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.25rem', borderBottom: '1px solid #F2C7D9' }}>
                <img src="/assets/images/brand/logo.svg" alt="Vijeta Enterprises" style={{ height: '44px' }} />
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X size={24} style={{ color: '#142D62' }} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.75rem 0' }}>
                <a href="/" onClick={(e) => handleLink('/', e)} style={mobileLinkStyle(currentPath === '/')}>Home</a>
                <a href="/about" onClick={(e) => handleLink('/about', e)} style={mobileLinkStyle(currentPath === '/about')}>About Us</a>
                
                <div>
                  <a href="/products" onClick={(e) => handleLink('/products', e)} style={mobileLinkStyle(currentPath === '/products')}>Products Catalogue</a>
                  <div style={{ paddingLeft: '1rem', borderLeft: '2px solid #F2C7D9', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    <a href="/products/floor-cleaner" onClick={(e) => handleLink('/products/floor-cleaner', e)} style={mobileSublinkStyle(currentPath === '/products/floor-cleaner')}>Floor Cleaner</a>
                    <a href="/products/dishwash-liquid" onClick={(e) => handleLink('/products/dishwash-liquid', e)} style={mobileSublinkStyle(currentPath === '/products/dishwash-liquid')}>Dishwash Liquid</a>
                    <a href="/products/room-freshener" onClick={(e) => handleLink('/products/room-freshener', e)} style={mobileSublinkStyle(currentPath === '/products/room-freshener')}>Room Freshener</a>
                    <a href="/products/car-wash" onClick={(e) => handleLink('/products/car-wash', e)} style={mobileSublinkStyle(currentPath === '/products/car-wash')}>Car Wash</a>
                    <a href="/products/car-shampoo" onClick={(e) => handleLink('/products/car-shampoo', e)} style={mobileSublinkStyle(currentPath === '/products/car-shampoo')}>Car Shampoo</a>
                    <a href="/products/liquid-soap" onClick={(e) => handleLink('/products/liquid-soap', e)} style={mobileSublinkStyle(currentPath === '/products/liquid-soap')}>Liquid Soap</a>
                  </div>
                </div>

                <a href="/wholesale" onClick={(e) => handleLink('/wholesale', e)} style={mobileLinkStyle(currentPath === '/wholesale')}>Wholesale & Bulk</a>
                <a href="/distributor" onClick={(e) => handleLink('/distributor', e)} style={mobileLinkStyle(currentPath === '/distributor')}>Become a Distributor</a>
                <a href="/import-export" onClick={(e) => handleLink('/import-export', e)} style={mobileLinkStyle(currentPath === '/import-export')}>Global Trade & Export</a>
                <a href="/contact" onClick={(e) => handleLink('/contact', e)} style={mobileLinkStyle(currentPath === '/contact')}>Contact</a>
              </div>
            </div>

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #F2C7D9', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => { setMobileOpen(false); onOpenEnquiry('Mobile Drawer'); }}
              >
                Quick Enquiry
              </button>
              <a
                href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises,%20I%20have%20an%20enquiry%20regarding%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} />
                <span>WhatsApp: 9423066050</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query helper via inline style */}
      <style>{`
        @media (min-width: 1024px) {
          .header-desktop-nav { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .header-desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function navLinkStyle(isActive, isPinkHero) {
  return {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--text-sm)',
    fontWeight: 700,
    color: isPinkHero ? (isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.88)') : (isActive ? '#D80A68' : '#142D62'),
    padding: '0.5rem 0.25rem',
    position: 'relative',
    transition: 'color 0.2s',
    borderBottom: isActive ? `2px solid ${isPinkHero ? '#FFFFFF' : '#D80A68'}` : '2px solid transparent'
  };
}

function dropdownItemStyle(isActive) {
  return {
    display: 'flex',
    alignItems: 'center',
    padding: '0.65rem 1.25rem',
    fontSize: '0.875rem',
    color: isActive ? '#D80A68' : '#142D62',
    fontWeight: isActive ? 700 : 500,
    backgroundColor: isActive ? '#FFF5F9' : 'transparent',
    transition: 'background 0.2s, padding-left 0.2s'
  };
}

function mobileLinkStyle(isActive) {
  return {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.125rem',
    fontWeight: 700,
    color: isActive ? '#D80A68' : '#142D62',
    padding: '0.4rem 0'
  };
}

function mobileSublinkStyle(isActive) {
  return {
    fontSize: '0.875rem',
    color: isActive ? '#D80A68' : '#555555',
    fontWeight: isActive ? 700 : 500,
    padding: '0.2rem 0'
  };
}
