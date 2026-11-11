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
  Heart,
  ChevronDown,
  Layers,
  Scale
} from 'lucide-react';

export default function ProductHandwash({ onNavigate, onOpenEnquiry }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'How many standard dispenser refills does one 5-litre container provide?',
      a: 'One 5-litre commercial canister refills approximately 20 standard 250ml washroom pump bottles or 10 larger 500ml institutional wall-mounted dispensers.'
    },
    {
      q: 'Is Vijeta Handwash safe for frequent, repeated daily hand washing?',
      a: 'Yes. Formulated with a balanced pH of 6.5 and enriched with cosmetic-grade glycerin, it cleans effectively without stripping natural sebum or drying the skin.'
    },
    {
      q: 'Is it compatible with automatic sensor-based touchless dispensers?',
      a: 'Yes. The formulation maintains a calibrated liquid viscosity (1,400–1,600 cPs) that dispenses smoothly without clogging narrow spray nozzles or gravity tubes.'
    },
    {
      q: 'What is the minimum commercial order quantity for wholesale dispatch?',
      a: 'Standard minimum wholesale dispatch is 1 carton (4 canisters of 5L each). Pallet and full truckload (FTL) orders are dispatched directly from our Kurduwadi manufacturing unit.'
    }
  ];

  return (
    <div className="product-handwash-page" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#666666' }}>
          <a href="#/" style={{ color: '#666666', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="#/products" style={{ color: '#666666', textDecoration: 'none' }}>Products</a>
          <span>/</span>
          <span style={{ color: '#D80A68' }}>Vijeta Handwash — 5 L Pink Fragrance</span>
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
            {/* Visual Column: Switchable Packshot & Live Commercial Video */}
            <div>
              <div
                className="liquid-glass-card"
                style={{
                  position: 'relative',
                  backgroundColor: '#FFF5F9',
                  borderRadius: '28px',
                  border: '1.5px solid rgba(242, 199, 217, 0.85)',
                  overflow: 'hidden',
                  padding: 'clamp(1rem, 3vw, 2.5rem)',
                  boxShadow: '0 20px 48px rgba(216, 10, 104, 0.18), 0 0 28px rgba(255, 117, 160, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '480px'
                }}
              >
                {/* Badge Left */}
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
                  Flagship FMCG Formula
                </span>

                <img
                  src="/assets/images/products/handwash-5l-hero-commercial.jpg"
                  alt="Vijeta Handwash 5L Commercial Container"
                  style={{
                    maxHeight: '440px',
                    width: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    filter: 'drop-shadow(0 15px 30px rgba(216, 10, 104, 0.2))'
                  }}
                />
              </div>

              {/* Packshot Caption */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem', fontSize: '0.75rem', color: '#666666', fontWeight: 600 }}>
                <span>Format: 5-Litre HDPE Canister</span>
                <span>Category: Personal Hygiene Refill</span>
              </div>
            </div>

            {/* Product Narrative Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#D80A68',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Heart size={15} />
                <span>Everyday Hygiene & Family Care</span>
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
                Vijeta Handwash
              </h1>

              <div style={{ fontSize: '1.125rem', color: '#D80A68', fontWeight: 700 }}>
                5 Litres • Rose-Infused Moisturizing Handwash
              </div>

              <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
                The cornerstone product of Vijeta Enterprises. Formulated for everyday commercial and domestic hygiene, this 5-litre refill balances active dirt-lifting suds with skin-nourishing moisturizers. Infused with a delicate, long-lasting rose floral bouquet that keeps washrooms smelling fresh.
              </p>

              {/* Technical Specifications Matrix */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.85rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid #F2C7D9',
                  borderBottom: '1px solid #F2C7D9'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>pH Level</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>6.5 Balanced</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Fragrance</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Rose Bouquet</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Moisturizer</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Glycerin Rich</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Net Volume</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>5 Litres (HDPE)</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Dispenser</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Pump & Sensor</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Origin</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Kurduwadi, MH</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Handwash (5 L Pink Fragrance)')}
                  style={{ padding: '0.85rem 2rem' }}
                >
                  <span>Request Wholesale Pricing</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20Vijeta%20Handwash%205L%20pricing."
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

      {/* DISPENSER REFILL ECONOMICS */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Facility Cost Efficiency
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62' }}>
              Why 5-Litre Refills Make Economic Sense
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#555555', maxWidth: '640px', margin: '0.5rem auto 0' }}>
              Designed for offices, schools, hospitals, hotels, and large households to slash single-use plastic waste and reduce per-wash operational costs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #F2C7D9', boxShadow: '0 4px 16px rgba(216, 10, 104, 0.05)' }}>
              <Scale size={24} style={{ color: '#D80A68', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>20 x 250ml Refills</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                One 5L canister refills 20 standard sink pump dispensers, reducing plastic footprint by up to 80% compared to purchasing individual bottles.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #F2C7D9', boxShadow: '0 4px 16px rgba(216, 10, 104, 0.05)' }}>
              <Layers size={24} style={{ color: '#D80A68', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Calibrated Viscosity</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Engineered to flow reliably through automatic touch-free sensor dispensers and wall-mounted commercial push brackets without clogging.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #F2C7D9', boxShadow: '0 4px 16px rgba(216, 10, 104, 0.05)' }}>
              <Truck size={24} style={{ color: '#D80A68', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Factory Direct Pricing</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Direct factory-to-institution supply from Kurduwadi, Solapur with full GST input credit (27AKUPP1588Q1ZV) on commercial tax invoices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE / HYGIENE PROTOCOL */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Hand Washing Guide
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62' }}>
              How to Use Vijeta Handwash
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FFF5F9', padding: '1.75rem', borderRadius: '16px', border: '1px solid #F2C7D9' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', display: 'block', marginBottom: '0.5rem' }}>STEP 01</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Wet Hands & Pump</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Wet hands with clean tap water. Depress pump once to dispense 1–2ml of rich rose liquid into cupped palms.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFF5F9', padding: '1.75rem', borderRadius: '16px', border: '1px solid #F2C7D9' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', display: 'block', marginBottom: '0.5rem' }}>STEP 02</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Work Dense Foam Lather</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Rub hands together vigorously for 20 seconds. Ensure foam covers palms, between fingers, thumbs, and wrists.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFF5F9', padding: '1.75rem', borderRadius: '16px', border: '1px solid #F2C7D9' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', display: 'block', marginBottom: '0.5rem' }}>STEP 03</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Rinse Clean & Dry</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Rinse thoroughly under clean running water until foam is fully washed off. Hands stay soft, hydrated, and pleasantly perfumed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
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
                  backgroundColor: '#FFF5F9',
                  borderRadius: '16px',
                  border: '1px solid #F2C7D9',
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
                    color: activeFaq === idx ? '#D80A68' : '#142D62',
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
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.875rem', color: '#555555', lineHeight: 1.65, borderTop: '1px solid rgba(216, 10, 104, 0.15)', paddingTop: '0.75rem' }}>
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
