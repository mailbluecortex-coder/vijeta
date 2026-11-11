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
  ShieldCheck,
  Zap,
  Gauge,
  Utensils
} from 'lucide-react';

export default function ProductDishwash({ onNavigate, onOpenEnquiry }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'Does Vijeta Dishwash Liquid leave a white powder film on dried utensils?',
      a: 'No. Formulated with soluble surfactant degreasers and natural lime extracts, it rinses away cleanly with zero powdery mineral film, leaving glassware and stainless steel sparkling clean.'
    },
    {
      q: 'Is it harsh on hands during extended washing sessions?',
      a: 'No. The formulation has a neutral skin-friendly pH (6.5–7.0) and is free from harsh caustic soda, preserving natural dermal moisture even during extended manual dishwashing.'
    },
    {
      q: 'How much liquid is needed per wash load?',
      a: 'Just 1 spoonful (approx 5–7ml) in a bowl of 150ml water is sufficient to clean an entire sink of oily domestic cookware. For commercial sinks, dilute 1:100.'
    },
    {
      q: 'Is this available in bulk 5-litre packaging for restaurants and canteens?',
      a: 'Yes. Vijeta Dishwash Liquid is supplied in 5-litre commercial HDPE carboys packed 4 per carton with tamper-evident seals for institutional kitchens and catering facilities.'
    }
  ];

  return (
    <div className="product-dishwash-page" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#F0FDF4', borderBottom: '1px solid #BBF7D0', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#166534' }}>
          <a href="#/" style={{ color: '#166534', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="#/products" style={{ color: '#166534', textDecoration: 'none' }}>Products</a>
          <span>/</span>
          <span style={{ color: '#15803D' }}>Vijeta Dishwash Liquid (Lime Power)</span>
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
                className="liquid-glass-card"
                style={{
                  position: 'relative',
                  backgroundColor: '#F0FDF4',
                  borderRadius: '28px',
                  border: '1.5px solid rgba(187, 247, 208, 0.85)',
                  overflow: 'hidden',
                  padding: '2.5rem',
                  boxShadow: '0 20px 48px rgba(22, 101, 52, 0.15), 0 0 28px rgba(255, 117, 160, 0.08)',
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
                    backgroundColor: '#16A34A',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  Lime Degreaser
                </span>

                <img
                  src="/assets/images/products/dishwash-liquid.jpg"
                  alt="Vijeta Dishwash Liquid 5L Canister"
                  style={{
                    maxHeight: '440px',
                    width: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    filter: 'drop-shadow(0 15px 30px rgba(22, 101, 52, 0.2))'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem', fontSize: '0.75rem', color: '#166534', fontWeight: 600 }}>
                <span>Format: 5-Litre HDPE Canister</span>
                <span>Category: Commercial Kitchen & Domestic Ware</span>
              </div>
            </div>

            {/* Narrative Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#16A34A',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                <Utensils size={15} />
                <span>Kitchen Hygiene & Degreasing</span>
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
                Vijeta Dishwash Liquid
              </h1>

              <div style={{ fontSize: '1.125rem', color: '#16A34A', fontWeight: 700 }}>
                Concentrated Lime Degreasing Gel for Cookware & Dinnerware
              </div>

              <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
                Formulated with concentrated surfactants and fresh lime extract, Vijeta Dishwash Liquid breaks down stubborn cooking oils, burnt tadka residues, and dried food layers on glassware, stainless steel, and non-stick cookware without leaving chalky white stains or scratching delicate surfaces.
              </p>

              {/* Specification Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.85rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid #BBF7D0',
                  borderBottom: '1px solid #BBF7D0'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Active Base</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Lime Concentrate</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Skin Safety</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Gentle on Hands</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Rinse Qualities</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Zero White Film</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Concentration</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>High Yield Gel</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Packaging</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>5L Bulk Canister</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Origin</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62' }}>Kurduwadi, MH</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Dishwash Liquid (5L Lime Concentrate)')}
                  style={{ backgroundColor: '#16A34A', borderColor: '#16A34A', padding: '0.85rem 2rem' }}
                >
                  <span>Request Wholesale Pricing</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20Vijeta%20Dishwash%20Liquid%20bulk%20supply."
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
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#F0FDF4', borderTop: '1px solid #BBF7D0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Performance Advantages
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62' }}>
              Why Choose Vijeta Dishwash Liquid?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #BBF7D0', boxShadow: '0 4px 16px rgba(22, 101, 52, 0.05)' }}>
              <Zap size={24} style={{ color: '#16A34A', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Instant Grease Encapsulation</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Active lime surfactants penetrate coagulated cooking oils, ghee, and burnt sauces, lifting grease from metal and ceramic without intense scrubbing.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #BBF7D0', boxShadow: '0 4px 16px rgba(22, 101, 52, 0.05)' }}>
              <Droplets size={24} style={{ color: '#16A34A', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Zero White Powdery Film</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Unlike traditional dishwash bars that leave white streaks upon air-drying, this soluble liquid rinses away 100% clean with cold or warm tap water.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #BBF7D0', boxShadow: '0 4px 16px rgba(22, 101, 52, 0.05)' }}>
              <ShieldCheck size={24} style={{ color: '#16A34A', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Skin-Friendly Neutral pH</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Zero harsh caustic soda. Mild, skin-conditioning formulation prevents roughness, peeling, and dryness during lengthy commercial utensil washing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How to Use / Step-by-Step Directions */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #BBF7D0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Usage Instructions
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62' }}>
              How to Use Vijeta Dishwash Liquid
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#F0FDF4', padding: '1.75rem', borderRadius: '16px', border: '1px solid #BBF7D0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#16A34A', display: 'block', marginBottom: '0.5rem' }}>STEP 01</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Dilute in Water Bowl</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Take 1 teaspoon (approx. 5ml) of Vijeta Dishwash Liquid in a small bowl containing 150ml of water.
              </p>
            </div>

            <div style={{ backgroundColor: '#F0FDF4', padding: '1.75rem', borderRadius: '16px', border: '1px solid #BBF7D0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#16A34A', display: 'block', marginBottom: '0.5rem' }}>STEP 02</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Dip Sponge & Lather</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Dip a regular scrub sponge into the diluted mixture and squeeze gently to generate rich grease-lifting green lather.
              </p>
            </div>

            <div style={{ backgroundColor: '#F0FDF4', padding: '1.75rem', borderRadius: '16px', border: '1px solid #BBF7D0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#16A34A', display: 'block', marginBottom: '0.5rem' }}>STEP 03</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>Scrub & Free Rinse</h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                Wipe across plates, cookware, and cutlery. Rinse with clean water for squeaky-clean, sparkling shine with no residue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 5rem) 1.5rem', backgroundColor: '#F0FDF4', borderTop: '1px solid #BBF7D0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
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
                  border: '1px solid #BBF7D0',
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
                    color: activeFaq === idx ? '#16A34A' : '#14532D',
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
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.875rem', color: '#555555', lineHeight: 1.65, borderTop: '1px solid #BBF7D0', paddingTop: '0.75rem' }}>
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
