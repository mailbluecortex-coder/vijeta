import React from 'react';
import { ArrowRight, Sparkles, Shield, Droplets } from 'lucide-react';

export default function HeroCinematic({ onNavigate, onOpenEnquiry }) {
  const navigate = onNavigate || ((path) => { window.location.hash = '#' + path; });
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--gradient-hero-pink)',
        color: '#FFFFFF',
        paddingTop: '130px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambience & Lighting Glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }} aria-hidden="true">
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 117, 160, 0.35) 0%, rgba(216, 10, 104, 0) 70%)',
            filter: 'blur(50px)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '-10%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(140, 6, 66, 0.45) 0%, rgba(216, 10, 104, 0) 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: Editorial Hero Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '620px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1.15rem',
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                borderRadius: '9999px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                width: 'fit-content',
                backdropFilter: 'blur(8px)'
              }}
            >
              <span>VIJETA ENTERPRISES</span>
              <span style={{ opacity: 0.85, paddingLeft: '0.5rem', borderLeft: '1px solid rgba(255, 255, 255, 0.35)' }}>
                Cleanliness • Health • Trust
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-hero)',
                fontWeight: 800,
                lineHeight: 1.08,
                color: '#FFFFFF',
                letterSpacing: '-0.02em'
              }}
            >
              Make Every Day
              <span style={{ display: 'block', color: '#FFF5F9', fontStyle: 'italic', fontWeight: 400 }}>
                Feel Fresh.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.92)',
                maxWidth: '52ch'
              }}
            >
              Everyday cleaning and hygiene essentials from Vijeta Enterprises. Formulated for superior cleanliness, lasting fragrance, and family care.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => navigate('/products')}
              >
                <span>Explore Products</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => navigate('/about')}
              >
                <span>Discover Vijeta</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                marginTop: '1rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.92)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Droplets size={18} />
                <span>5 L Canister Economy</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} />
                <span>Rose Pink Fragrance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={18} />
                <span>Kurduwadi, Solapur (MS)</span>
              </div>
            </div>
          </div>

          {/* Right: Master 4K FMCG Studio Product Stage */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                aspectRatio: '1 / 1.15',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Podium Shadow Depth */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '6%',
                  width: '80%',
                  height: '45px',
                  background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 70%)',
                  borderRadius: '50%',
                  filter: 'blur(12px)',
                  zIndex: 1
                }}
              />

              {/* Floating Feature Tag Top Right */}
              <div
                className="hero-badge-top"
                style={{
                  position: 'absolute',
                  top: '12%',
                  right: '-4%',
                  zIndex: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#142D62',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '16px',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.18)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#FCE4EF',
                    color: '#D80A68',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', fontWeight: 800, color: '#142D62' }}>
                    Pink Fragrance
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: '#555555' }}>Refreshing floral notes</span>
                </div>
              </div>

              {/* The Actual Studio Bottle Image (Rich depth, vibrant pink liquid, clear English label) */}
              <img
                src="/assets/images/products/handwash-5l-hero-commercial.jpg"
                alt="Vijeta Handwash 5-Litre Canister in Commercial FMCG Studio Lighting"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '94%',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  borderRadius: '20px',
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                }}
              />

              {/* Floating Feature Tag Bottom Left */}
              <div
                className="hero-badge-bottom"
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '-6%',
                  zIndex: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#142D62',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '16px',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.18)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#FCE4EF',
                    color: '#D80A68',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Droplets size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', fontWeight: 800, color: '#142D62' }}>
                    5 Litres Capacity
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: '#555555' }}>Institutional & home refills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-badge-top {
            right: 0 !important;
            top: 2% !important;
            padding: 0.5rem 0.85rem !important;
          }
          .hero-badge-bottom {
            left: 0 !important;
            bottom: 2% !important;
            padding: 0.5rem 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}

