import React from 'react';
import { MapPin, Phone, FileText } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLink = (path, e) => {
    if (e) e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer
      style={{
        backgroundColor: '#0D1E42',
        color: 'rgba(255, 255, 255, 0.82)',
        paddingTop: 'clamp(4rem, 3rem + 2vw, 6rem)',
        paddingBottom: '2.5rem',
        borderTop: '4px solid #D80A68'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <a href="/" onClick={(e) => handleLink('/', e)} style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img src="/assets/images/brand/logo-light.svg" alt="VIJETA ENTERPRISES" style={{ height: '48px', width: 'auto' }} />
            </a>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.72)', marginBottom: '1rem' }}>
              <strong>VIJETA ENTERPRISES</strong> is a premier manufacturer and supplier of everyday cleaning and hygiene essentials based in Kurduwadi, Solapur.
            </p>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '1.5px', color: '#FF75A0', textTransform: 'uppercase' }}>
              Cleanliness • Health • Trust
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={footerColTitleStyle}>Navigation</h4>
            <ul style={footerListStyle}>
              <li><a href="/" onClick={(e) => handleLink('/', e)} style={footerLinkStyle}>Home</a></li>
              <li><a href="/about" onClick={(e) => handleLink('/about', e)} style={footerLinkStyle}>About Us</a></li>
              <li><a href="/products" onClick={(e) => handleLink('/products', e)} style={footerLinkStyle}>All Products</a></li>
              <li><a href="/wholesale" onClick={(e) => handleLink('/wholesale', e)} style={footerLinkStyle}>Wholesale & Bulk</a></li>
              <li><a href="/distributor" onClick={(e) => handleLink('/distributor', e)} style={footerLinkStyle}>Become a Distributor</a></li>
              <li><a href="/import-export" onClick={(e) => handleLink('/import-export', e)} style={footerLinkStyle}>Global Trade & Export</a></li>
              <li><a href="/contact" onClick={(e) => handleLink('/contact', e)} style={footerLinkStyle}>Contact</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 style={footerColTitleStyle}>Product Range</h4>
            <ul style={footerListStyle}>
              <li><a href="/products/handwash" onClick={(e) => handleLink('/products/handwash', e)} style={footerLinkStyle}>Vijeta Handwash (5 L)</a></li>
              <li><a href="/products/floor-cleaner" onClick={(e) => handleLink('/products/floor-cleaner', e)} style={footerLinkStyle}>Floor Cleaner</a></li>
              <li><a href="/products/dishwash-liquid" onClick={(e) => handleLink('/products/dishwash-liquid', e)} style={footerLinkStyle}>Dishwash Liquid</a></li>
              <li><a href="/products/room-freshener" onClick={(e) => handleLink('/products/room-freshener', e)} style={footerLinkStyle}>Room Freshener</a></li>
              <li><a href="/products/car-wash" onClick={(e) => handleLink('/products/car-wash', e)} style={footerLinkStyle}>Car Wash</a></li>
              <li><a href="/products/car-shampoo" onClick={(e) => handleLink('/products/car-shampoo', e)} style={footerLinkStyle}>Car Shampoo (Snow Foam)</a></li>
              <li><a href="/products/liquid-soap" onClick={(e) => handleLink('/products/liquid-soap', e)} style={footerLinkStyle}>Liquid Soap</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={footerColTitleStyle}>Headquarters</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: '#FF75A0', flexShrink: 0, marginTop: '3px' }} />
                <span>Kurduwadi, District Solapur, Maharashtra, India</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Phone size={18} style={{ color: '#FF75A0', flexShrink: 0, marginTop: '3px' }} />
                <span>
                  <strong>Phone / WhatsApp:</strong><br />
                  <a href="tel:9423066050" style={{ color: '#FFFFFF', fontWeight: 600 }}>+91 9423066050</a>
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <FileText size={18} style={{ color: '#FF75A0', flexShrink: 0, marginTop: '3px' }} />
                <span>
                  <strong>GSTIN:</strong> 27AKUPP1588Q1ZV
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.55)'
          }}
        >
          <div>
            &copy; {currentYear} Emerlixa Technologies Private Limited. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/privacy-policy" onClick={(e) => handleLink('/privacy-policy', e)} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Privacy Policy</a>
            <a href="/terms" onClick={(e) => handleLink('/terms', e)} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Terms & Conditions</a>
            <a href="/disclaimer" onClick={(e) => handleLink('/disclaimer', e)} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Disclaimer</a>
            <a href="/contact" onClick={(e) => handleLink('/contact', e)} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Customer Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerColTitleStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1rem',
  fontWeight: 700,
  color: '#FFFFFF',
  marginBottom: '1.25rem',
  letterSpacing: '0.5px'
};

const footerListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.65rem'
};

const footerLinkStyle = {
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.72)',
  transition: 'color 0.2s, padding-left 0.2s'
};

