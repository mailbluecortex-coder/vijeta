import React from 'react';
import {
  Building2,
  MapPin,
  Phone,
  FileText,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Truck,
  Users,
  Compass,
  Target,
  Eye,
  Award
} from 'lucide-react';

export default function About({ onNavigate, onOpenEnquiry }) {
  const handleNav = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(path);
    else window.location.hash = '#' + path;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="about-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '86px' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#666666' }}>
          <a href="#/" onClick={(e) => handleNav('/', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <span style={{ color: '#D80A68' }}>About Us</span>
        </div>
      </section>

      {/* Editorial Hero */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 1.8rem + 2vw, 3.5rem)', fontWeight: 800, color: '#142D62', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Crafting Everyday Hygiene Essentials with Uncompromising Integrity.
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#555555', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 2rem' }}>
            Headquartered at the key transit hub of Kurduwadi in Solapur district, <strong>VIJETA ENTERPRISES</strong> manufactures dependable personal hygiene, home surface care, and professional automotive cleaning solutions built on our founding motto: <em>Cleanliness • Health • Trust</em>.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenEnquiry && onOpenEnquiry('General Business Inquiry - Vijeta Enterprises')}
            >
              <span>Speak With Management</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleNav('/products')}
            >
              <span>Explore Product Portfolio</span>
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9', borderBottom: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem' }}>
            <h2 className="section-title">Our Mission & Vision</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666666' }}>
              The core principles steering our manufacturing quality, dealer relations, and product safety standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {/* Mission Card */}
            <div
              className="liquid-glass-card"
              style={{
                borderRadius: '24px',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                border: '1px solid rgba(242, 199, 217, 0.75)',
                boxShadow: '0 14px 36px rgba(216, 10, 104, 0.08), 0 0 20px rgba(255, 117, 160, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#FCE4EF', color: '#D80A68', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={28} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Our Mission
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#142D62', margin: 0 }}>
                High-Potency Hygiene with Absolute Honesty
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
                To formulate, manufacture, and distribute honest, skin-safe, and high-potency cleaning essentials to homes, institutions, and detailing businesses across Maharashtra without caustic adulteration, excessive middleman markups, or false claims.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #F3F4F6', fontSize: '0.8125rem', color: '#142D62', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#D80A68' }} />
                  <span>Skin-safe, cosmetic-grade surfactant balances</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#D80A68' }} />
                  <span>High dilution economy for real commercial value</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="liquid-glass-card"
              style={{
                borderRadius: '24px',
                padding: '2.5rem',
                border: '1px solid rgba(242, 199, 217, 0.75)',
                boxShadow: '0 14px 36px rgba(20, 45, 98, 0.08), 0 0 20px rgba(255, 117, 160, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#DBEAFE', color: '#1E40AF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={28} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1E40AF', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Our Vision
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#142D62', margin: 0 }}>
                Maharashtra's Most Trusted Regional FMCG Brand
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
                To become Maharashtra's benchmark FMCG manufacturer for daily hygiene essentials, renowned for dependable batch consistency, memorable floral fragrances, direct factory supply chains, and mutually prosperous dealership networks.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #F3F4F6', fontSize: '0.8125rem', color: '#142D62', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#1E40AF' }} />
                  <span>Transparent factory-direct dealer margins</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#1E40AF' }} />
                  <span>24-to-48 hour replenishment across central transit hubs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values & Editorial Narrative */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(2rem, 3vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Narrative */}
            <div>
              <span className="eyebrow">Our Foundation</span>
              <h2 className="section-title">A Dedicated Regional Manufacturer with Modern Quality Standards</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9375rem', color: '#555555', lineHeight: 1.7, marginBottom: '2rem' }}>
                <p>
                  Vijeta Enterprises was established with a singular, transparent commitment: to formulate everyday cleaning and hygiene essentials that perform reliably, rinse cleanly, and provide true economic value for Indian families, commercial facilities, and institutional enterprises.
                </p>
                <p>
                  From our flagship 5-litre Vijeta Handwash to commercial-grade floor cleaners, grease-cutting dishwash formulations, fine room fresheners, and professional automotive snow foams, every batch is prepared with strict adherence to consistency, active surfactant balance, and skin-safe pH integrity.
                </p>
                <p>
                  Rather than relying on unverified claims or synthetic marketing tropes, we stand on tangible product performance: dense lather, controlled dilution economics, and prompt factory-direct dispatch.
                </p>
              </div>

              {/* 3 Core Pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: '#FFF5F9', borderRadius: '16px', border: '1px solid #F2C7D9' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#D80A68', display: 'block', marginBottom: '0.25rem' }}>01</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62', display: 'block', marginBottom: '0.25rem' }}>Cleanliness</strong>
                  <span style={{ fontSize: '0.75rem', color: '#666666' }}>Effective grease and bacterial lift without caustic harshness</span>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: '#FFF5F9', borderRadius: '16px', border: '1px solid #F2C7D9' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#D80A68', display: 'block', marginBottom: '0.25rem' }}>02</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62', display: 'block', marginBottom: '0.25rem' }}>Health</strong>
                  <span style={{ fontSize: '0.75rem', color: '#666666' }}>Skin-balanced pH, non-drying glycerin condition</span>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: '#FFF5F9', borderRadius: '16px', border: '1px solid #F2C7D9' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#D80A68', display: 'block', marginBottom: '0.25rem' }}>03</span>
                  <strong style={{ fontSize: '0.9375rem', color: '#142D62', display: 'block', marginBottom: '0.25rem' }}>Trust</strong>
                  <span style={{ fontSize: '0.75rem', color: '#666666' }}>Transparent factory pricing & full GST tax invoices</span>
                </div>
              </div>
            </div>

            {/* Right Lifestyle Visual */}
            <div>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid #F2C7D9',
                  boxShadow: '0 20px 48px rgba(20, 45, 98, 0.1)'
                }}
              >
                <img
                  src="/assets/images/lifestyle/clean-home.jpg"
                  alt="Vijeta Clean Environment"
                  style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13, 30, 66, 0.88) 0%, rgba(13, 30, 66, 0.2) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#FF75A0', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                    Manufactured in Maharashtra
                  </span>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                    Kurduwadi, District Solapur, India
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '6px' }}>
                    Central railway & highway junction supplying Solapur, Pune, Satara, and Marathwada districts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Enterprise Credential Profile (Transparent & Verified) */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5.5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Official Business Registry</span>
            <h2 className="section-title">Enterprise Profile & Credentials</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666666', maxWidth: '650px', margin: '0.5rem auto 0' }}>
              Vijeta Enterprises operates as a legally registered commercial enterprise adhering to Indian commercial taxation and trade regulations.
            </p>
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
              <div style={credRowStyle(true)}>
                <span style={credLabelStyle}>
                  <Building2 size={16} style={{ color: '#D80A68', flexShrink: 0 }} />
                  Enterprise Legal Name
                </span>
                <span style={{ fontWeight: 800, color: '#142D62' }}>VIJETA ENTERPRISES</span>
              </div>

              <div style={credRowStyle(false)}>
                <span style={credLabelStyle}>
                  <MapPin size={16} style={{ color: '#D80A68', flexShrink: 0 }} />
                  Headquarters & Facility
                </span>
                <span style={{ color: '#333333' }}>
                  Kurduwadi, Taluka Madha, District Solapur, Maharashtra, India — 413208
                </span>
              </div>

              <div style={credRowStyle(true)}>
                <span style={credLabelStyle}>
                  <FileText size={16} style={{ color: '#D80A68', flexShrink: 0 }} />
                  GSTIN (Tax Identification)
                </span>
                <span style={{ fontFamily: 'monospace', fontWeight: 800, color: '#D80A68', fontSize: '1rem', letterSpacing: '1px' }}>
                  27AKUPP1588Q1ZV
                </span>
              </div>

              <div style={credRowStyle(false)}>
                <span style={credLabelStyle}>
                  <Phone size={16} style={{ color: '#D80A68', flexShrink: 0 }} />
                  Official Business Contact
                </span>
                <span style={{ color: '#142D62', fontWeight: 700 }}>
                  +91 9423066050 (Direct Phone & WhatsApp Support)
                </span>
              </div>

              <div style={credRowStyle(true)}>
                <span style={credLabelStyle}>
                  <Compass size={16} style={{ color: '#D80A68', flexShrink: 0 }} />
                  Product Categories
                </span>
                <span style={{ color: '#555555' }}>
                  Personal Hygiene (Handwash, Liquid Soap), Surface & Floor Care, Kitchen Care (Dishwash), Ambient Aromatics (Room Freshener), Professional Automotive Care (Car Wash, Car Shampoo).
                </span>
              </div>

              <div style={credRowStyle(false)}>
                <span style={credLabelStyle}>
                  <Truck size={16} style={{ color: '#D80A68', flexShrink: 0 }} />
                  Supply Reach
                </span>
                <span style={{ color: '#555555' }}>
                  District Solapur, Western Maharashtra, Marathwada, and commercial transport hubs across Maharashtra.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Quality Principles */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Our Principles</span>
            <h2 className="section-title">Formulated for Performance, Bottled with Care</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: '#FFF5F9', borderRadius: '20px', border: '1px solid #F2C7D9' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FCE4EF', color: '#D80A68', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                Non-Corrosive Raw Materials
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.65 }}>
                We select cosmetic and industrial-grade surfactants that clean effectively without relying on aggressive caustic soda or hazardous acids that degrade surfaces or damage human skin.
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#FFF5F9', borderRadius: '20px', border: '1px solid #F2C7D9' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FCE4EF', color: '#D80A68', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                Direct Dealer Relationships
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.65 }}>
                We believe in genuine, high-trust distributor partnerships. By eliminating convoluted multi-layer middlemen, we ensure healthier margins for local distributors and reasonable pricing for consumers.
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#FFF5F9', borderRadius: '20px', border: '1px solid #F2C7D9' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FCE4EF', color: '#D80A68', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Truck size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                Dependable Supply Chain
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.65 }}>
                Strategically situated in Kurduwadi at a prominent railway and highway junction in Solapur district, enabling rapid dispatch to retail stores, fleet garages, and facility managers across the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
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
              Connect with Management
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-4xl)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
              Partner with Vijeta Enterprises
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 2rem' }}>
              Whether you are exploring retail distributorship in your city or looking for cost-efficient institutional supplies for your facility, we welcome your inquiry.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('General Business Inquiry - Vijeta Enterprises')}
              >
                <span>Send Official Inquiry</span>
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => handleNav('/contact')}
              >
                <span>View Contact Details</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const credRowStyle = (isAlternate) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1rem',
  padding: '1.15rem 1.75rem',
  backgroundColor: isAlternate ? '#FFF5F9' : '#FFFFFF',
  borderBottom: '1px solid #F2C7D9',
  fontSize: '0.875rem',
  alignItems: 'center'
});

const credLabelStyle = {
  fontWeight: 700,
  color: '#142D62',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
};
