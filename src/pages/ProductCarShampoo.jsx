import React, { useState } from 'react';
import { 
  Sparkles, 
  Droplets, 
  CheckCircle2, 
  ArrowRight, 
  Truck,
  Building2,
  ChevronDown,
  Layers,
  Zap,
  Gauge,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

export default function ProductCarShampoo({ onNavigate, onOpenEnquiry }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [dilutionMethod, setDilutionMethod] = useState('cannon'); // 'cannon' | 'bucket'

  const faqs = [
    {
      q: 'Will Vijeta Car Shampoo strip ceramic coatings or wax sealants?',
      a: 'No. Vijeta Car Shampoo features a pH 7.0 neutral, non-caustic surfactant matrix that lifts traffic film safely without degrading ceramic coatings, synthetic sealants, or carnauba waxes.'
    },
    {
      q: 'Can it be used in commercial high-pressure snow foam cannons?',
      a: 'Yes. It produces ultra-dense cling foam when diluted 1:9 to 1:12 in high-pressure foam lances (110–160 bar). The foam clings to vertical body panels for 4–5 minutes, encapsulating dirt particles.'
    },
    {
      q: 'Is it suitable for commercial automotive service stations?',
      a: 'Vijeta Car Shampoo is supplied in 5-litre commercial carboys and 20-litre bulk drums specifically tailored for high-volume detailing centres, service garages, and fleet operators.'
    },
    {
      q: 'Does it leave water spots or residue after drying?',
      a: 'The free-rinsing formulation leaves zero polymer haze or water spots when rinsed with clean water and dried with a microfiber towel.'
    }
  ];

  return (
    <div className="product-car-shampoo-page" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B' }}>
          <a href="#/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="#/products" style={{ color: '#64748B', textDecoration: 'none' }}>Products</a>
          <span>/</span>
          <span style={{ color: '#0284C7' }}>Vijeta Car Shampoo (Snow Foam)</span>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Visual Column */}
            <div>
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F0F9FF',
                  borderRadius: '28px',
                  border: '1px solid #BAE6FD',
                  overflow: 'hidden',
                  padding: '2.5rem',
                  boxShadow: '0 20px 48px rgba(2, 132, 199, 0.1)',
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
                    backgroundColor: '#0284C7',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  pH 7.0 Snow Foam
                </span>

                <img
                  src="/assets/images/products/car-shampoo.jpg"
                  alt="Vijeta Car Shampoo 5L Commercial Container"
                  style={{
                    maxHeight: '440px',
                    width: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    filter: 'drop-shadow(0 15px 30px rgba(2, 132, 199, 0.2))'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem', fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                <span>Format: 5-Litre Carboy & 20-Litre Drum</span>
                <span>Category: Professional Snow Foam Care</span>
              </div>
            </div>

            {/* Narrative Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#0284C7',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Sparkles size={15} />
                <span>Professional Automotive Series</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.15,
                  margin: 0
                }}
              >
                Vijeta Car Shampoo
              </h1>

              <div style={{ fontSize: '1.125rem', color: '#0284C7', fontWeight: 700 }}>
                Ultra-Dense Cling Snow Foam Shampoo for Scratch-Free Automotive Washing
              </div>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                Formulated for commercial foam lances and two-bucket detailing systems. Vijeta Car Shampoo produces dense, thick clinging lather that encapsulates abrasive highway road film, floating debris safely away from delicate paintwork without causing swirl marks or stripping wax coatings.
              </p>

              {/* Spec Matrix */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.85rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid #BAE6FD',
                  borderBottom: '1px solid #BAE6FD'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>pH Level</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#0F172A' }}>7.0 Neutral</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Foam Density</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#0F172A' }}>Dense Cling</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Coating Safe</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#0F172A' }}>Ceramic & Wax</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Pack Sizes</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#0F172A' }}>5L Can / 20L Drum</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Origin</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#0F172A' }}>Kurduwadi, MH</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Supply</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#0F172A' }}>Factory Bulk</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Car Shampoo (5L / 20L Bulk)')}
                  style={{ backgroundColor: '#0284C7', borderColor: '#0284C7', padding: '0.85rem 2rem' }}
                >
                  <span>Request Garage Pricing</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20interested%20in%20commercial%20pricing%20for%20Vijeta%20Car%20Shampoo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.85rem 1.75rem' }}
                >
                  WhatsApp Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DILUTION RECOMMENDATION SECTION */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Precision Dilution
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#0F172A' }}>
              Recommended Application Ratios
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <button
              type="button"
              onClick={() => setDilutionMethod('cannon')}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: dilutionMethod === 'cannon' ? '2px solid #0284C7' : '1px solid #CBD5E1',
                backgroundColor: dilutionMethod === 'cannon' ? '#0284C7' : '#FFFFFF',
                color: dilutionMethod === 'cannon' ? '#FFFFFF' : '#0F172A',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: dilutionMethod === 'cannon' ? '0 6px 16px rgba(2, 132, 199, 0.25)' : 'none'
              }}
            >
              Foam Cannon (High Pressure)
            </button>
            <button
              type="button"
              onClick={() => setDilutionMethod('bucket')}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: dilutionMethod === 'bucket' ? '2px solid #0284C7' : '1px solid #CBD5E1',
                backgroundColor: dilutionMethod === 'bucket' ? '#0284C7' : '#FFFFFF',
                color: dilutionMethod === 'bucket' ? '#FFFFFF' : '#0F172A',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: dilutionMethod === 'bucket' ? '0 6px 16px rgba(2, 132, 199, 0.25)' : 'none'
              }}
            >
              Two-Bucket Hand Wash
            </button>
          </div>

          {dilutionMethod === 'cannon' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Gauge size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Ratio</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0284C7', marginBottom: '0.5rem' }}>1 : 9 to 1 : 12</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  100ml shampoo with 900ml water in a 1L foam cannon bottle produces thick clinging foam.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Layers size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Dwell Time</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>4 – 5 Minutes</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Allows thick clinging suds to loosen grime before high-pressure rinsing.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Zap size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Pressure Range</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0284C7', marginBottom: '0.5rem' }}>110 – 160 Bar</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Optimized for commercial high-pressure pressure washers and detailing snow foam lances.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Gauge size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Bucket Dosage</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0284C7', marginBottom: '0.5rem' }}>30 – 50 ml</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Add 30ml to 50ml into a 15-litre wash bucket with grit guard.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Droplets size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Agitation Method</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Microfiber Mitt</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Glide straight-line passes across clear coat panels from top to bottom.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Sparkles size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Rinsing Outcome</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Zero Spots</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Rinses away cleanly with zero streak marks or polymer haze.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Technical Inquiries
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)', fontWeight: 800, color: '#0F172A' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: activeFaq === idx ? '#0284C7' : '#0F172A',
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                      flexShrink: 0
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, borderTop: '1px solid #E2E8F0', paddingTop: '0.75rem' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
