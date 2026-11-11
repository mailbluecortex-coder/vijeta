import React, { useState } from 'react';
import { 
  Sparkles, 
  Droplets, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Truck, 
  ChevronDown,
  Layers,
  Heart,
  ThermometerSun
} from 'lucide-react';

export default function ProductLiquidSoap({ onNavigate, onOpenEnquiry }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'What is the primary difference between Vijeta Liquid Soap and Vijeta Handwash?',
      a: 'Vijeta Liquid Soap is formulated with a higher concentration of skin conditioners and emollients, designed as a dual-purpose body and hand wash for hospitality guest suites, health clubs, and corporate executive washrooms.'
    },
    {
      q: 'Is it compatible with automatic infrared sensor dispensers?',
      a: 'Yes. The fluid viscosity is balanced (1,200–1,500 cPs) to flow smoothly through standard manual pump dispensers, wall-mounted brackets, and touch-free infrared sensor dispensers without nozzle blockage.'
    },
    {
      q: 'Does it dry or crack sensitive skin with frequent use?',
      a: 'No. Enriched with natural plant-derived glycerin, it preserves the epidermal moisture mantle even during high-frequency hand washing in clinical or office settings.'
    },
    {
      q: 'Can facilities schedule recurring monthly bulk replenishment contracts?',
      a: 'Yes. Vijeta Enterprises provides regular replenishment schedules, bulk pallet cartons, and factory-direct pricing to facility managers across Maharashtra.'
    }
  ];

  return (
    <div className="product-liquid-soap-page" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FDF2F8', borderBottom: '1px solid #FBCFE8', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#9D174D' }}>
          <a href="#/" style={{ color: '#9D174D', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="#/products" style={{ color: '#9D174D', textDecoration: 'none' }}>Products</a>
          <span>/</span>
          <span style={{ color: '#DB2777' }}>Vijeta Liquid Soap (Moisturizing Cream)</span>
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
                  backgroundColor: '#FDF2F8',
                  borderRadius: '28px',
                  border: '1.5px solid rgba(251, 207, 232, 0.85)',
                  overflow: 'hidden',
                  padding: '2.5rem',
                  boxShadow: '0 20px 48px rgba(219, 39, 119, 0.15), 0 0 28px rgba(255, 117, 160, 0.1)',
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
                    backgroundColor: '#DB2777',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  Institutional Soap
                </span>

                <img
                  src="/assets/images/products/liquid-soap.jpg"
                  alt="Vijeta Liquid Soap 5L Container"
                  style={{
                    maxHeight: '440px',
                    width: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    filter: 'drop-shadow(0 15px 30px rgba(219, 39, 119, 0.2))'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem', fontSize: '0.75rem', color: '#9D174D', fontWeight: 600 }}>
                <span>Format: 5-Litre HDPE Canister</span>
                <span>Category: Institutional Personal Hygiene Refill</span>
              </div>
            </div>

            {/* Narrative Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#DB2777',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Heart size={15} />
                <span>Moisturizing Personal Care</span>
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
                Vijeta Liquid Soap
              </h1>

              <div style={{ fontSize: '1.125rem', color: '#DB2777', fontWeight: 700 }}>
                Moisturizing Institutional Liquid Soap for Washrooms & Hospitality
              </div>

              <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
                Engineered for high-traffic washrooms across IT campuses, executive office buildings, educational institutes, and hospitality suites. Formulated with skin-softening glycerin and non-drying cleansing agents that leave hands and skin feeling silky, hydrated, and subtly fragranced.
              </p>

              {/* Specification Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.85rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid #FBCFE8',
                  borderBottom: '1px solid #FBCFE8'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>pH Level</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>5.5 Balanced</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Moisturizer</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Glycerin Rich</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Dispenser</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Non-Clogging</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Packaging</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>5L Bulk Jar</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Fragrance</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Refreshing Mild</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Origin</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Kurduwadi, MH</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Liquid Soap (5L Institutional)')}
                  style={{ backgroundColor: '#DB2777', borderColor: '#DB2777', padding: '0.85rem 2rem' }}
                >
                  <span>Request Wholesale Pricing</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20Vijeta%20Liquid%20Soap%20bulk%20supply."
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
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FDF2F8', borderTop: '1px solid #FBCFE8' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Dermatological Integrity
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62' }}>
              Why Choose Vijeta Liquid Soap?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #FBCFE8', boxShadow: '0 4px 16px rgba(219, 39, 119, 0.05)' }}>
              <Heart size={24} style={{ color: '#DB2777', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Moisturizing Cream Base</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Formulated with soothing cosmetic-grade emollients that nourish the skin barrier, leaving hands silky soft with no feeling of tight or stretched skin.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #FBCFE8', boxShadow: '0 4px 16px rgba(219, 39, 119, 0.05)' }}>
              <Droplets size={24} style={{ color: '#DB2777', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Rich Conditioning Lather</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Generates a luxurious micro-bubble foam that cushions and purifies skin simultaneously, rinsing away cleanly with no slimy after-feel.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #FBCFE8', boxShadow: '0 4px 16px rgba(219, 39, 119, 0.05)' }}>
              <Layers size={24} style={{ color: '#DB2777', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Universal Dispenser Flow</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Calibrated viscosity dispenses effortlessly through wall-mounted pump canisters, automated infrared sensor units, and tabletop push bottles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How to Use / Hygiene Protocol */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #FBCFE8' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Hand Hygiene Protocol
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62' }}>
              How to Use Vijeta Liquid Soap
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FDF2F8', padding: '1.75rem', borderRadius: '16px', border: '1px solid #FBCFE8' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#DB2777', display: 'block', marginBottom: '0.5rem' }}>STEP 01</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Wet Hands & Dispense</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Moisten hands with clean tap water. Dispense 1 to 2 ml of Vijeta Liquid Soap into cupped palms.
              </p>
            </div>

            <div style={{ backgroundColor: '#FDF2F8', padding: '1.75rem', borderRadius: '16px', border: '1px solid #FBCFE8' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#DB2777', display: 'block', marginBottom: '0.5rem' }}>STEP 02</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Lather for 20 Seconds</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Rub hands together to generate rich creamy lather. Ensure coverage between fingers, back of hands, and nail beds.
              </p>
            </div>

            <div style={{ backgroundColor: '#FDF2F8', padding: '1.75rem', borderRadius: '16px', border: '1px solid #FBCFE8' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#DB2777', display: 'block', marginBottom: '0.5rem' }}>STEP 03</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Rinse & Dry</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Rinse thoroughly under running water and dry with a clean paper towel or air dryer for soft, clean hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FDF2F8', borderTop: '1px solid #FBCFE8' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
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
                  border: '1px solid #FBCFE8',
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
                    color: activeFaq === idx ? '#DB2777' : '#831843',
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
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.875rem', color: '#555555', lineHeight: 1.65, borderTop: '1px solid #FBCFE8', paddingTop: '0.75rem' }}>
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
