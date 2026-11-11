import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Droplets, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Pause,
  Building2, 
  Truck, 
  ChevronDown,
  Layers,
  Scale,
  Check,
  AlertCircle
} from 'lucide-react';

export default function ProductFloorCleaner({ onNavigate, onOpenEnquiry }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [dilutionRatio, setDilutionRatio] = useState('daily'); // 'daily' (1:100) | 'heavy' (1:50)

  const handleNav = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(path);
    else window.location.hash = '#' + path;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const faqs = [
    {
      q: 'Is Vijeta Floor Cleaner safe for polished Italian marble and vitrified tiles?',
      a: 'Yes, absolutely. Formulated with a balanced, non-acidic pH (7.2 – 7.8) and gentle citrus surfactants, it dissolves grime and footwear scuffs without etching glossy marble polish or degrading grout sealers.'
    },
    {
      q: 'What is the recommended dilution ratio for daily mopping vs. deep commercial cleaning?',
      a: 'For daily domestic and office maintenance, use 1 cap (approx. 50ml) in 5 litres of water (1:100 ratio). For heavy oil spots, kitchen grease, or hospital corridors, use 100ml in 5 litres (1:50 ratio).'
    },
    {
      q: 'Does it leave a sticky film or require a second rinse with plain water?',
      a: 'No. The fast-evaporating surfactant matrix dries completely streak-free in less than 3 minutes, leaving a sparkling clean shine without any slippery or sticky residue.'
    },
    {
      q: 'What fragrance does it leave in the rooms?',
      a: 'It is infused with refreshing natural citrus blossom essential fragrance oils that eliminate stale indoor odours and leave rooms smelling fresh and clean for hours.'
    },
    {
      q: 'What packaging is available for commercial wholesale?',
      a: 'We supply high-density 5-Litre HDPE canisters with ergonomic handles and leak-proof tamper caps, packed 4 canisters per sturdy corrugated carton for freight transit.'
    }
  ];

  return (
    <div className="product-floor-cleaner-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '86px' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#666666' }}>
          <a href="#/" onClick={(e) => handleNav('/', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="#/products" onClick={(e) => handleNav('/products', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Products</a>
          <span>/</span>
          <span style={{ color: '#D80A68' }}>Vijeta Floor Cleaner — 5 L</span>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 3vw, 5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Visual Column: Packshot & Real Floor Cleaner Commercial Video */}
            <div>
              <div
                className="liquid-glass-card"
                style={{
                  position: 'relative',
                  backgroundColor: '#FFF5F9',
                  borderRadius: '28px',
                  border: '1.5px solid rgba(242, 199, 217, 0.85)',
                  overflow: 'hidden',
                  padding: '2.5rem',
                  boxShadow: '0 20px 48px rgba(216, 10, 104, 0.18), 0 0 28px rgba(255, 117, 160, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '480px'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 10,
                    backgroundColor: '#D80A68',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  Surface Care
                </span>

                <img
                  src="/assets/images/products/floor-cleaner.jpg"
                  alt="Vijeta Floor Cleaner 5L Container"
                  style={{
                    maxHeight: '440px',
                    width: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    filter: 'drop-shadow(0 15px 30px rgba(216, 10, 104, 0.15))'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem', fontSize: '0.75rem', color: '#666666', fontWeight: 600 }}>
                <span>Format: 5-Litre HDPE Canister</span>
                <span>Application: Marble, Vitrified Tiles, Granite</span>
              </div>
            </div>

            {/* Narrative Column: Product Overview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="eyebrow">Commercial Surface Hygiene</div>
              
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 3rem)',
                  fontWeight: 800,
                  color: '#142D62',
                  lineHeight: 1.15,
                  margin: 0
                }}
              >
                Vijeta Floor Cleaner
              </h1>

              <div style={{ fontSize: '1.15rem', color: '#D80A68', fontWeight: 700 }}>
                Citrus Power Multi-Surface Cleaner & Degreaser (5 Litre Canister)
              </div>

              <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
                <strong>Vijeta Floor Cleaner</strong> is an advanced commercial surface cleaning formulation engineered for hospitals, hotels, corporate facilities, and homes. Powered by a specialized citrus surfactant matrix, it rapidly dissolves oily films, stubborn footwear scuffs, and daily atmospheric grime without stripping stone sealers or leaving slippery white streaks.
              </p>

              {/* Quick Specs Matrix */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: '#FFF5F9',
                  borderRadius: '16px',
                  border: '1px solid #F2C7D9'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#D80A68', fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>FORMULA</span>
                  <strong style={{ fontSize: '0.875rem', color: '#142D62' }}>Non-Corrosive pH</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#D80A68', fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>FRAGRANCE</span>
                  <strong style={{ fontSize: '0.875rem', color: '#142D62' }}>Fresh Citrus</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#D80A68', fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>FINISH</span>
                  <strong style={{ fontSize: '0.875rem', color: '#142D62' }}>Streak-Free Shine</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#D80A68', fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>DILUTION</span>
                  <strong style={{ fontSize: '0.875rem', color: '#142D62' }}>1:100 Ratio</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#D80A68', fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>PACKAGING</span>
                  <strong style={{ fontSize: '0.875rem', color: '#142D62' }}>5L Canister</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#D80A68', fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>ORIGIN</span>
                  <strong style={{ fontSize: '0.875rem', color: '#142D62' }}>Kurduwadi, MH</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Floor Cleaner (5 L Citrus)')}
                >
                  <span>Request Wholesale Pricing</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20Vijeta%20Floor%20Cleaner%20bulk%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features & Benefits (काय फायदे आहेत) */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9', borderBottom: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Formulation Excellence</span>
            <h2 className="section-title">Key Features & Proven Benefits</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666666' }}>
              Why commercial facilities, retail stockists, and residential housekeepers choose Vijeta Floor Cleaner.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}><Sparkles size={24} /></div>
              <h3 style={benefitTitleStyle}>Mirror-Finish Streak-Free Clean</h3>
              <p style={benefitDescStyle}>
                Specially formulated to evaporate rapidly without leaving white chalky lines or hazy film on glazed vitrified tiles, polished Italian marble, and natural stone.
              </p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}><ShieldCheck size={24} /></div>
              <h3 style={benefitTitleStyle}>Acid-Free & Non-Corrosive</h3>
              <p style={benefitDescStyle}>
                Contains zero hydrochloric acid or harsh caustics. 100% safe for daily use on marble, epoxy grout lines, polished granite, and sensitive flooring finishes.
              </p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}><Droplets size={24} /></div>
              <h3 style={benefitTitleStyle}>Ultra-High Dilution Economy</h3>
              <p style={benefitDescStyle}>
                A single 5-litre canister produces over 500 litres of ready-to-use cleaning solution at standard 1:100 ratio, dramatically reducing facility procurement cost.
              </p>
            </div>

            <div style={benefitCardStyle}>
              <div style={benefitIconStyle}><Layers size={24} /></div>
              <h3 style={benefitTitleStyle}>Long-Lasting Citrus Freshness</h3>
              <p style={benefitDescStyle}>
                Enriched with natural botanical citrus extracts that neutralize musty washroom odours, damp floor smells, and keep premises smelling invigorated for hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How to Use & Dilution Guide (कसं वापरायचं) */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Application Guidelines</span>
            <h2 className="section-title">How to Use & Dilution Instructions</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666666' }}>
              Follow these simple steps for optimal streak-free performance in homes, offices, and commercial spaces.
            </p>
          </div>

          {/* Interactive Ratio Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <button
              type="button"
              onClick={() => setDilutionRatio('daily')}
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: dilutionRatio === 'daily' ? '2px solid #D80A68' : '1px solid #F2C7D9',
                backgroundColor: dilutionRatio === 'daily' ? '#D80A68' : '#FFF5F9',
                color: dilutionRatio === 'daily' ? '#FFFFFF' : '#142D62',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: dilutionRatio === 'daily' ? '0 4px 14px rgba(216, 10, 104, 0.25)' : 'none'
              }}
            >
              Daily Maintenance (1:100)
            </button>
            <button
              type="button"
              onClick={() => setDilutionRatio('heavy')}
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: dilutionRatio === 'heavy' ? '2px solid #D80A68' : '1px solid #F2C7D9',
                backgroundColor: dilutionRatio === 'heavy' ? '#D80A68' : '#FFF5F9',
                color: dilutionRatio === 'heavy' ? '#FFFFFF' : '#142D62',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: dilutionRatio === 'heavy' ? '0 4px 14px rgba(216, 10, 104, 0.25)' : 'none'
              }}
            >
              Deep Commercial Degreasing (1:50)
            </button>
          </div>

          {/* 3 Step Process Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>01</div>
              <h3 style={stepTitleStyle}>Dilute in Clean Water</h3>
              <p style={stepDescStyle}>
                {dilutionRatio === 'daily'
                  ? 'Add 1 cap (approx. 50ml) of Vijeta Floor Cleaner into 5 litres of clean bucket water.'
                  : 'Add 2 caps (approx. 100ml) into 5 litres of warm water for high-grease kitchen or hospital floors.'}
              </p>
            </div>

            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>02</div>
              <h3 style={stepTitleStyle}>Mop Surfaces Evenly</h3>
              <p style={stepDescStyle}>
                Dip microfiber mop or cotton wiper, wring lightly to remove excess water, and mop the floor in smooth, even strokes across tiles or marble.
              </p>
            </div>

            <div style={stepCardStyle}>
              <div style={stepNumberStyle}>03</div>
              <h3 style={stepTitleStyle}>Allow Rapid Air Dry</h3>
              <p style={stepDescStyle}>
                No secondary water rinse required. The surface naturally dries streak-free in 2 to 3 minutes, leaving a sparkling clean mirror finish and fresh citrus aroma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Technical Specifications */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Technical Integrity</span>
            <h2 className="section-title">Formulation & Packaging Specifications</h2>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #F2C7D9',
              boxShadow: '0 8px 30px rgba(20, 45, 98, 0.05)',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={specRowStyle(true)}>
                <span style={specLabelStyle}>Product Identification</span>
                <span style={{ fontWeight: 800, color: '#142D62' }}>Vijeta Floor Cleaner (5 L Commercial Canister)</span>
              </div>
              <div style={specRowStyle(false)}>
                <span style={specLabelStyle}>Active Chemistry</span>
                <span style={{ color: '#555555' }}>Concentrated Citrus Non-Ionic & Anionic Surfactant Matrix</span>
              </div>
              <div style={specRowStyle(true)}>
                <span style={specLabelStyle}>pH Balanced Range</span>
                <span style={{ color: '#D80A68', fontWeight: 800 }}>7.2 – 7.8 (Neutral & Non-Corrosive to Stone)</span>
              </div>
              <div style={specRowStyle(false)}>
                <span style={specLabelStyle}>Fragrance Profile</span>
                <span style={{ color: '#555555' }}>Natural Fresh Citrus Blossom Essential Aroma</span>
              </div>
              <div style={specRowStyle(true)}>
                <span style={specLabelStyle}>Surface Compatibility</span>
                <span style={{ color: '#555555' }}>Glazed Vitrified Tile, Italian Marble, Granite, Kota Stone, Epoxy</span>
              </div>
              <div style={specRowStyle(false)}>
                <span style={specLabelStyle}>Manufacturing Hub</span>
                <span style={{ color: '#142D62', fontWeight: 700 }}>Kurduwadi, Solapur District, Maharashtra (GST: 27AKUPP1588Q1ZV)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs Accordion (वारंवार विचारले जाणारे प्रश्न) */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Buyer Guidance</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #F2C7D9',
                  borderRadius: '16px',
                  backgroundColor: activeFaq === idx ? '#FFF5F9' : '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'all 0.2s'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: '#142D62' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: '#D80A68',
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                      flexShrink: 0
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.9375rem', color: '#555555', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Prominent Bottom CTAs */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5.5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#142D62',
              color: '#FFFFFF',
              borderRadius: '28px',
              padding: 'clamp(2.5rem, 2rem + 2vw, 4rem)',
              textAlign: 'center'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                padding: '0.35rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.25rem'
              }}
            >
              Direct Factory Dispatch
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-4xl)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
              Order Vijeta Floor Cleaner in Wholesale Volumes
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 2rem' }}>
              Supplying hospitals, corporate facilities, housekeeping contractors, and regional distributors directly from Kurduwadi, Solapur with full GST tax invoicing.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Floor Cleaner (5 L Citrus)')}
              >
                <span>Request Quotation</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20Vijeta%20Floor%20Cleaner%20bulk%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
                style={{ textDecoration: 'none' }}
              >
                <span>WhatsApp Desk: 9423066050</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const benefitCardStyle = {
  backgroundColor: '#FFFFFF',
  padding: '2rem',
  borderRadius: '20px',
  border: '1px solid #F2C7D9',
  boxShadow: '0 4px 16px rgba(20, 45, 98, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
};

const benefitIconStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '14px',
  backgroundColor: '#FFF5F9',
  color: '#D80A68',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #F2C7D9'
};

const benefitTitleStyle = {
  fontSize: '1.15rem',
  fontWeight: 800,
  color: '#142D62',
  margin: 0
};

const benefitDescStyle = {
  fontSize: '0.875rem',
  color: '#555555',
  lineHeight: 1.65,
  margin: 0
};

const stepCardStyle = {
  backgroundColor: '#FFF5F9',
  padding: '2rem',
  borderRadius: '20px',
  border: '1px solid #F2C7D9',
  position: 'relative'
};

const stepNumberStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: '2rem',
  fontWeight: 900,
  color: '#D80A68',
  lineHeight: 1,
  marginBottom: '0.75rem'
};

const stepTitleStyle = {
  fontSize: '1.15rem',
  fontWeight: 800,
  color: '#142D62',
  marginBottom: '0.5rem'
};

const stepDescStyle = {
  fontSize: '0.875rem',
  color: '#555555',
  lineHeight: 1.65,
  margin: 0
};

const specRowStyle = (isAlternate) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1rem',
  padding: '1.15rem 1.75rem',
  backgroundColor: isAlternate ? '#FFF5F9' : '#FFFFFF',
  borderBottom: '1px solid #F2C7D9',
  fontSize: '0.875rem',
  alignItems: 'center'
});

const specLabelStyle = {
  fontWeight: 700,
  color: '#142D62'
};
