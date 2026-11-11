import React, { useState } from 'react';
import {
  Sparkles,
  Wind,
  CheckCircle2,
  ArrowRight,
  Building2,
  Truck,
  ChevronDown,
  Layers,
  Heart,
  Hotel
} from 'lucide-react';

export default function ProductRoomFreshener({ onNavigate, onOpenEnquiry }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'Does Vijeta Room Freshener use aerosol hydrocarbon propellants?',
      a: 'No. Vijeta Room Freshener is an eco-friendly, water-based, non-aerosol fine mist spray. It contains zero butane or propane propellants, making it safe for indoor air quality and non-flammable.'
    },
    {
      q: 'How long does the fragrance linger in an enclosed room?',
      a: 'A single 2–3 pump dispersion in an enclosed room (up to 200 sq. ft.) delivers long-lasting ambient floral aroma that neutralizes odours for hours without overpowering occupants.'
    },
    {
      q: 'Can it be used on curtains, linen, and upholstered furniture?',
      a: 'Yes. The water-based fine mist is formulated to disperse evenly without leaving oily stains, water spots, or fabric discoloration on commercial drapery or upholstery.'
    },
    {
      q: 'Is it available in bulk 5-litre refill containers for housekeeping teams?',
      a: 'Yes. Vijeta Enterprises supplies both handheld mist trigger sprayers and 5-litre economy carboys for commercial hotel housekeeping, corporate offices, and transit hubs.'
    }
  ];

  return (
    <div className="product-room-freshener-page" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FAF5FF', borderBottom: '1px solid #E9D5FF', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#7E22CE' }}>
          <a href="#/" style={{ color: '#7E22CE', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="#/products" style={{ color: '#7E22CE', textDecoration: 'none' }}>Products</a>
          <span>/</span>
          <span style={{ color: '#9333EA' }}>Vijeta Room Freshener (Aerosol-Free Mist)</span>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(2rem, 3vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Visual Column */}
            <div>
              <div
                className="liquid-glass-card"
                style={{
                  position: 'relative',
                  backgroundColor: '#FAF5FF',
                  borderRadius: '28px',
                  border: '1.5px solid rgba(233, 213, 255, 0.85)',
                  overflow: 'hidden',
                  padding: '2.5rem',
                  boxShadow: '0 20px 48px rgba(147, 51, 234, 0.15), 0 0 28px rgba(255, 117, 160, 0.1)',
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
                    backgroundColor: '#9333EA',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  Fine Mist Spray
                </span>

                <img
                  src="/assets/images/products/room-freshener.jpg"
                  alt="Vijeta Room Freshener Dispenser"
                  style={{
                    maxHeight: '440px',
                    width: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    filter: 'drop-shadow(0 15px 30px rgba(147, 51, 234, 0.2))'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem', fontSize: '0.75rem', color: '#7E22CE', fontWeight: 600 }}>
                <span>Format: Fine Mist Dispenser & 5L Economy Refill</span>
                <span>Category: Premium Ambient Fragrance</span>
              </div>
            </div>

            {/* Narrative Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#9333EA',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Wind size={15} />
                <span>Ambient Air Care</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 1.8rem + 1.5vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#142D62',
                  lineHeight: 1.15,
                  margin: 0
                }}
              >
                Vijeta Room Freshener
              </h1>

              <div style={{ fontSize: '1.125rem', color: '#9333EA', fontWeight: 700 }}>
                Aerosol-Free Fine Mist • Long-Lasting Floral Serenity
              </div>

              <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
                A water-based fine mist spray designed to neutralize airborne dampness, closed-room staleness, and traffic traces, substituting them with an uplifting, welcoming atmosphere. Formulated without hydrocarbon propellants, making it safe for indoor air quality and fabrics.
              </p>

              {/* Specification Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.85rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid #E9D5FF',
                  borderBottom: '1px solid #E9D5FF'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Aerosol Free</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>100% Water Base</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Aroma Profile</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Floral Bouquet</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Dispenser</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Fine Mist Trigger</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Fabric Safe</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Zero Staining</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Bulk Refill</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>5L Canister</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Origin</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Kurduwadi, MH</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Room Freshener (Fine Mist)')}
                  style={{ backgroundColor: '#9333EA', borderColor: '#9333EA', padding: '0.85rem 2rem' }}
                >
                  <span>Request Wholesale Pricing</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20Vijeta%20Room%20Freshener%20bulk%20supply."
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

      {/* 2. Key Features & Benefits */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FAF5FF', borderTop: '1px solid #E9D5FF' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Aromatic Superiority
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62' }}>
              Why Choose Vijeta Room Freshener?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #E9D5FF', boxShadow: '0 4px 16px rgba(147, 51, 234, 0.05)' }}>
              <Sparkles size={24} style={{ color: '#9333EA', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Aerosol-Free Water Base</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Formulated without hazardous hydrocarbon compressed gases (LPG/isobutane). Completely ozone-friendly and safe for enclosed conference rooms and bedrooms.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #E9D5FF', boxShadow: '0 4px 16px rgba(147, 51, 234, 0.05)' }}>
              <Droplets size={24} style={{ color: '#9333EA', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Fabric-Safe Non-Staining</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Ultra-fine atomized mist dissipates evenly through the air without depositing heavy oily droplets on curtains, upholstery, bed linen, or carpets.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #E9D5FF', boxShadow: '0 4px 16px rgba(147, 51, 234, 0.05)' }}>
              <ShieldCheck size={24} style={{ color: '#9333EA', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Long-Lasting Odour Elimination</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Actively encapsulates and neutralizes airborne odours from food prep, moisture, and high-footfall washrooms, leaving hours of serene floral freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How to Use / Application Guide */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #E9D5FF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Application Guide
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62' }}>
              How to Use Vijeta Room Freshener
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FAF5FF', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E9D5FF' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9333EA', display: 'block', marginBottom: '0.5rem' }}>STEP 01</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Shake Container</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Shake gently before use to evenly disperse natural essential aroma oils within the aqueous base.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF5FF', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E9D5FF' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9333EA', display: 'block', marginBottom: '0.5rem' }}>STEP 02</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Spray Upwards Towards Centre</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Hold trigger bottle upright and pump 2–3 times upwards towards the centre of the room or near air currents.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF5FF', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E9D5FF' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9333EA', display: 'block', marginBottom: '0.5rem' }}>STEP 03</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Enjoy Extended Serenity</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Allow the microscopic aroma particles to circulate naturally for a lingering, subtle floral atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FAF5FF', borderTop: '1px solid #E9D5FF' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9333EA', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Common Inquiries
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)', fontWeight: 800, color: '#142D62' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E9D5FF',
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
                    color: activeFaq === idx ? '#9333EA' : '#581C87',
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
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.875rem', color: '#555555', lineHeight: 1.65, borderTop: '1px solid #E9D5FF', paddingTop: '0.75rem' }}>
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
