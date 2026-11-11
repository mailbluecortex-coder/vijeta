import React from 'react';
import { ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

export default function Disclaimer({ onNavigate }) {
  const handleNav = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(path);
    else window.location.hash = '#' + path;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="disclaimer-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '86px' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#666666' }}>
          <a href="#/" onClick={(e) => handleNav('/', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <span style={{ color: '#D80A68' }}>Website & Product Disclaimer</span>
        </div>
      </section>

      {/* Header */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 4.5rem) 1.5rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <ShieldCheck size={14} style={{ marginRight: '4px' }} />
            Transparency & Regulatory Notice
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 1.8rem + 1.8vw, 2.75rem)', fontWeight: 800, color: '#142D62', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            Website & Product Disclaimer
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#777777' }}>
            Effective Date: January 1, 2026 | VIJETA ENTERPRISES (Kurduwadi, Solapur, Maharashtra)
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 4.5rem) 1.5rem', backgroundColor: '#FFF5F9' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(2rem, 1.5rem + 2vw, 3.5rem)',
              border: '1px solid #F2C7D9',
              boxShadow: '0 8px 30px rgba(20, 45, 98, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              lineHeight: 1.7,
              color: '#333333'
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                1. General Information Only
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#555555' }}>
                The information published on www.vijetaenterprises.com is provided in good faith for general informational, educational, and business discovery purposes. While VIJETA ENTERPRISES makes reasonable efforts to keep product information, imagery, and specifications updated, we make no representations or warranties of any kind regarding completeness or specific suitability for unrecommended applications.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                2. Product Claims & Safe Usage
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#555555' }}>
                Cleaning and hygiene liquids (including Handwash, Floor Cleaner, Dishwash Liquid, Room Freshener, Car Wash, Car Shampoo, and Liquid Soap) must be used strictly in accordance with container directions and dilution instructions. Users must perform a spot test on delicate automotive finishes, marble, or unsealed flooring before full application. Avoid contact with eyes; keep out of reach of unattended children.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                3. Pricing, Promotional Offers & Stock Availability
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#555555' }}>
                Any promotional creative, discount banners, or previous campaign material (including historical or temporary promotional pricing) are subject to stock availability and management verification. Formal trade pricing is confirmed exclusively via written quotation or direct communication with our sales desk at +91 9423066050.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                4. External Communications & WhatsApp Transmission
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#555555' }}>
                This website provides links to external services such as WhatsApp (wa.me) and default email applications (mailto:). We do not control and are not responsible for third-party messaging platforms, their terms of service, or their encryption and data transmission protocols.
              </p>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid #F2C7D9', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleNav('/contact')}
              >
                <span>Contact Management</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNav('/products')}
              >
                <span>Explore Products</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

