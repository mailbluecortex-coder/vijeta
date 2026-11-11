import React from 'react';
import HeroCinematic from '../components/HeroCinematic';
import ScrollStorySection from '../components/ScrollStorySection';
import { Sparkles, Shield, Droplets, ArrowRight, MessageSquare, CheckCircle, Package, Building2, MapPin, CheckCircle2 } from 'lucide-react';

export default function Home({ onNavigate, onOpenEnquiry }) {
  const products = [
    {
      id: 'handwash',
      name: 'Vijeta Handwash (5 L)',
      category: 'Personal Hygiene',
      tag: 'Hero Product',
      desc: 'High-capacity rose-pink scented handwash formulated for thorough everyday cleansing and skin comfort.',
      pack: '5 Litres Canister',
      spec: 'Pink Fragrance',
      image: '/assets/images/products/handwash-5l-hero-commercial.jpg',
      url: '/products/handwash'
    },
    {
      id: 'floor-cleaner',
      name: 'Floor Cleaner',
      category: 'Surface Care',
      tag: 'Disinfectant',
      desc: 'High-performance floor cleaner that dissolves surface grime and tile smudges, leaving streak-free shine.',
      pack: 'Multi-Surface Safe',
      spec: 'Tile & Marble',
      image: '/assets/images/products/floor-cleaner.jpg',
      url: '/products/floor-cleaner'
    },
    {
      id: 'dishwash-liquid',
      name: 'Dishwash Liquid',
      category: 'Kitchen Essentials',
      tag: 'Grease Buster',
      desc: 'Concentrated grease-cutting gel infused with fresh lime power to dissolve stubborn burnt oils from cookware.',
      pack: 'Active Lime Gel',
      spec: 'Gentle on Hands',
      image: '/assets/images/products/dishwash-liquid.jpg',
      url: '/products/dishwash-liquid'
    },
    {
      id: 'room-freshener',
      name: 'Room Freshener',
      category: 'Air Care',
      tag: 'Ambient Fragrance',
      desc: 'Fine non-aerosol mist that neutralizes airborne odours and creates a sophisticated, calming living atmosphere.',
      pack: 'Aerosol-Free Mist',
      spec: 'Long-Lasting Aroma',
      image: '/assets/images/products/room-freshener.jpg',
      url: '/products/room-freshener'
    },
    {
      id: 'car-wash',
      name: 'Car Wash',
      category: 'Automotive Detailing',
      tag: 'Cinematic Experience',
      desc: 'Paint-safe exterior wash engineered to lift abrasive road film without scratching delicate clear coats.',
      pack: 'Clear-Coat Safe',
      spec: 'High Lubricity',
      image: '/assets/images/products/car-wash.jpg',
      url: '/products/car-wash'
    },
    {
      id: 'car-shampoo',
      name: 'Car Shampoo',
      category: 'Automotive Detailing',
      tag: 'Snow Foam',
      desc: 'Hyper-concentrated snow foam formula blanketing vehicles in thick suds for touchless or contact detailing.',
      pack: 'Dense Foam Lather',
      spec: 'pH Neutral Gloss',
      image: '/assets/images/products/car-shampoo.jpg',
      url: '/products/car-shampoo'
    },
    {
      id: 'liquid-soap',
      name: 'Liquid Soap',
      category: 'Personal Hygiene',
      tag: 'Skin Conditioning',
      desc: 'Mild moisturizing liquid soap creating a creamy conditioning lather for washbasins and body cleansing.',
      pack: 'Moisturizing Cream',
      spec: 'All Skin Types',
      image: '/assets/images/products/liquid-soap.jpg',
      url: '/products/liquid-soap'
    }
  ];

  return (
    <div>
      {/* 1. Full Pink Hero */}
      <HeroCinematic onNavigate={onNavigate} onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Brand Promise Strip (Cleanliness • Health • Trust) */}
      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #F2C7D9', padding: '2.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '2rem'
            }}
          >
            <div className="liquid-glass-card" style={brandPillarCardStyle}>
              <div style={brandPillarIconBoxStyle}>
                <Droplets size={24} />
              </div>
              <div>
                <h3 style={brandPillarTitleStyle}>Cleanliness</h3>
                <p style={brandPillarDescStyle}>
                  Formulations designed to eliminate dirt, stains, and grease thoroughly without leaving sticky chemical residues.
                </p>
              </div>
            </div>

            <div className="liquid-glass-card" style={brandPillarCardStyle}>
              <div style={brandPillarIconBoxStyle}>
                <Sparkles size={24} />
              </div>
              <div>
                <h3 style={brandPillarTitleStyle}>Health</h3>
                <p style={brandPillarDescStyle}>
                  Skin-balanced pH in personal soaps and gentle floral aromas that keep breathing spaces wholesome and invigorating.
                </p>
              </div>
            </div>

            <div className="liquid-glass-card" style={brandPillarCardStyle}>
              <div style={brandPillarIconBoxStyle}>
                <Shield size={24} />
              </div>
              <div>
                <h3 style={brandPillarTitleStyle}>Trust</h3>
                <p style={brandPillarDescStyle}>
                  Genuine business practices from Kurduwadi, Solapur, backed by dependable batch quality and verified owner support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 About Us Overview Section (Before Interactive Commercial) */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(4rem, 3rem + 3vw, 6.5rem) 0', borderBottom: '1px solid #F2C7D9' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(2rem, 3vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left: Editorial Story */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '580px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 800,
                  color: '#142D62',
                  lineHeight: 1.2
                }}
              >
                Crafted in Kurduwadi. <span style={{ color: '#D80A68' }}>Trusted Across Maharashtra.</span>
              </h2>

              <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.7 }}>
                Headquartered at the key transit junction of Kurduwadi in Solapur district, <strong>VIJETA ENTERPRISES</strong> is a dedicated FMCG manufacturer committed to producing honest, high-performance cleaning and personal hygiene essentials.
              </p>

              <p style={{ fontSize: '0.9375rem', color: '#666666', lineHeight: 1.65 }}>
                Every formulation is developed on the timeless principles of <strong>Cleanliness, Health, and Trust</strong>. We avoid caustic adulterants, prioritizing skin-safe pH integrity, genuine dilution economy, and prompt factory-direct dispatch for homes, commercial establishments, and institutions.
              </p>

              {/* 3 Quick Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '1rem',
                  paddingTop: '0.75rem'
                }}
              >
                <div style={{ padding: '0.85rem 1rem', backgroundColor: '#FFF5F9', border: '1px solid #F2C7D9', borderRadius: '12px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Origin</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#142D62' }}>Kurduwadi, Solapur</span>
                </div>
                <div style={{ padding: '0.85rem 1rem', backgroundColor: '#FFF5F9', border: '1px solid #F2C7D9', borderRadius: '12px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Standards</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#142D62' }}>Skin-Balanced pH</span>
                </div>
                <div style={{ padding: '0.85rem 1rem', backgroundColor: '#FFF5F9', border: '1px solid #F2C7D9', borderRadius: '12px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Commercial</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#142D62' }}>GST 27AKUPP1588Q1ZV</span>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onNavigate && onNavigate('/about')}
                >
                  <span>Read Full About Us Story</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => onNavigate && onNavigate('/wholesale')}
                >
                  <span>Wholesale & Supply</span>
                </button>
              </div>
            </div>

            {/* Right: Lifestyle Imagery Card */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid #F2C7D9',
                  boxShadow: '0 20px 45px rgba(20, 45, 98, 0.08)'
                }}
              >
                <img
                  src="/assets/images/lifestyle/clean-home.jpg"
                  alt="Vijeta Clean Environment"
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13, 30, 66, 0.85) 0%, rgba(13, 30, 66, 0.2) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#FF75A0', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                    Regional Manufacturing Hub
                  </span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                    Supplying Solapur, Pune & Maharashtra
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '6px' }}>
                    Direct dealer supplies, commercial institutional refills, and retail distribution networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pinned Scroll Storytelling Section (GSAP Scrubbing) */}
      <ScrollStorySection onNavigate={onNavigate} onOpenEnquiry={onOpenEnquiry} />

      {/* 4. Complete Product Collection */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <div className="eyebrow">Catalogue Overview</div>
            <h2 className="section-title">Explore the <span className="highlight">Vijeta Range</span></h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              Seven core cleaning and hygiene categories manufactured to meet daily domestic, institutional, and automotive demands.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1.25rem, 2vw, 2rem)'
            }}
          >
            {products.map((item) => (
              <article
                key={item.id}
                className="liquid-glass-card"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 12px 30px rgba(216, 10, 104, 0.08), 0 0 16px rgba(255, 117, 160, 0.05)',
                  border: '1px solid rgba(242, 199, 217, 0.75)'
                }}
              >
                <a
                  href={'#' + item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate(item.url);
                    else window.location.hash = '#' + item.url;
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', backgroundColor: '#FFF5F9', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: item.id === 'handwash' ? '#D80A68' : '#142D62',
                      color: '#FFFFFF',
                      fontSize: '0.6875rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      zIndex: 2
                    }}
                  >
                    {item.tag}
                  </span>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ maxHeight: '85%', maxWidth: '85%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(20, 45, 98, 0.12))', transition: 'transform 0.3s' }}
                  />
                </a>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {item.category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#142D62', marginBottom: '0.65rem' }}>
                    <a
                      href={'#' + item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigate) onNavigate(item.url);
                        else window.location.hash = '#' + item.url;
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      style={{ color: '#142D62', textDecoration: 'none', transition: 'color 0.2s' }}
                    >
                      {item.name}
                    </a>
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '0.65rem', paddingBottom: '1.25rem', borderBottom: '1px solid #F3F4F6', marginBottom: '1.25rem', fontSize: '0.75rem', fontWeight: 700, color: '#142D62' }}>
                    <span style={{ backgroundColor: '#FFF5F9', padding: '0.3rem 0.65rem', borderRadius: '6px' }}>{item.pack}</span>
                    <span style={{ backgroundColor: '#FFF5F9', padding: '0.3rem 0.65rem', borderRadius: '6px' }}>{item.spec}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem', alignItems: 'center' }}>
                    <a
                      href={'#' + item.url}
                      className="btn btn-secondary btn-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigate) onNavigate(item.url);
                        else window.location.hash = '#' + item.url;
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                    </a>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(item.name)}
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Product Quality & Everyday Living (Editorial Photography Split) */}
      <section className="section-padding" style={{ backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(2rem, 3vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="eyebrow">Hygiene & Quality</div>
              <h2 className="section-title">Clean Spaces. <span className="highlight">Better Everyday Living.</span></h2>
              <p className="section-lead" style={{ marginBottom: '1.5rem' }}>
                At Vijeta Enterprises, we believe reliable cleanliness forms the bedrock of peaceful homes, healthy families, and productive workplaces.
              </p>
              <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.7, marginBottom: '2rem' }}>
                From our manufacturing base in Kurduwadi, Solapur, we create formulated cleaning liquids with balanced chemical proportions, pleasant fragrances, and robust packaging that withstand daily demands.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '14px', border: '1px solid #F2C7D9' }}>
                  <strong style={{ display: 'block', color: '#142D62', fontSize: '1rem', marginBottom: '0.25rem' }}>
                    Consistent Batches
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: '#666666' }}>
                    Strict raw material selection for uniform performance and fragrance stability.
                  </span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '14px', border: '1px solid #F2C7D9' }}>
                  <strong style={{ display: 'block', color: '#142D62', fontSize: '1rem', marginBottom: '0.25rem' }}>
                    Direct Relationship
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: '#666666' }}>
                    Direct owner access for wholesale dispatches and regional dealerships.
                  </span>
                </div>
              </div>

              <button type="button" className="btn btn-secondary" onClick={() => onNavigate('/about')}>
                <span>Read Our Full Story</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div>
              <img
                src="/assets/images/lifestyle/clean-home.jpg"
                alt="Pristine hygienic modern interior"
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 16px 36px rgba(20, 45, 98, 0.1)', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Wholesale Banner */}
      <section style={{ backgroundColor: '#142D62', color: '#FFFFFF', padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow eyebrow-light">Bulk Supply</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                Looking for Bulk Product Supply?
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2rem', lineHeight: 1.6 }}>
                We supply hotels, hospitals, cleaning contractors, and retail chains with dependable 5-Litre canisters at factory-direct trade pricing.
              </p>
              <button type="button" className="btn btn-light" onClick={() => onNavigate('/wholesale')}>
                <span>Explore Wholesale Supply</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '24px', padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>Fast Wholesale Quote</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.5rem' }}>
                Connect directly with management on WhatsApp to discuss volumes, pallet dispatch, and delivery terms.
              </p>
              <a
                href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises,%20I%20am%20inquiring%20about%20wholesale%20bulk%20product%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} />
                <span>WhatsApp: 9423066050</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Distributor Banner */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <div className="eyebrow">Dealership Program</div>
          <h2 className="section-title">Grow Your Business With <span className="highlight">Vijeta Enterprises</span></h2>
          <p className="section-lead" style={{ margin: '0 auto 2rem' }}>
            We are actively expanding our distribution network across Maharashtra districts. Partner with an established manufacturer.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary" onClick={() => onNavigate('/distributor')}>
              <span>Become a Distributor</span>
              <ArrowRight size={18} />
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => onNavigate('/contact')}>
              <span>Speak With Sales</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7.5 Global Trade & Export Desk Callout */}
      <section style={{ backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9', borderBottom: '1px solid #F2C7D9', padding: 'clamp(3rem, 2.5rem + 2vw, 4.5rem) 0' }}>
        <div className="container">
          <div
            className="liquid-glass-card"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              padding: 'clamp(1.5rem, 3vw, 3rem)',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              borderRadius: '24px',
              border: '1px solid rgba(242, 199, 217, 0.85)',
              boxShadow: '0 16px 40px rgba(216, 10, 104, 0.1), 0 0 24px rgba(255, 117, 160, 0.08)'
            }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 1.3rem + 0.8vw, 2.1rem)', fontWeight: 800, color: '#142D62', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                International <span style={{ color: '#D80A68' }}>Trade & Export Desk</span>
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555555', lineHeight: 1.65, margin: 0 }}>
                Facilitating containerized FOB/CIF shipments, export documentation, and contract manufacturing for international distributors and global institutional procurement teams.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onNavigate('/import-export')}
              >
                <span>Access Export Desk</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20international%20export%20and%20containerized%20shipping."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>Export WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Contact CTA */}
      <section style={{ background: 'var(--gradient-hero-pink)', color: '#FFFFFF', padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-4xl)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Let's Connect.
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.92)', marginBottom: '2rem' }}>
            Reach out to our team in Kurduwadi, Solapur for product details, quotations, or sample trials.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-light" onClick={() => onNavigate('/contact')}>
              <span>Contact Us</span>
            </button>
            <a
              href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises,%20I%20would%20like%20to%20connect%20regarding%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={18} />
              <span>WhatsApp: 9423066050</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const brandPillarCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  padding: '1.5rem',
  backgroundColor: '#FFF5F9',
  border: '1px solid #F2C7D9',
  borderRadius: '18px'
};

const brandPillarIconBoxStyle = {
  width: '52px',
  height: '52px',
  borderRadius: '14px',
  backgroundColor: '#D80A68',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const brandPillarSubStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.6875rem',
  fontWeight: 800,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#D80A68',
  display: 'block',
  marginBottom: '0.2rem'
};

const brandPillarTitleStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 800,
  color: '#142D62',
  marginBottom: '0.25rem'
};

const brandPillarDescStyle = {
  fontSize: '0.8125rem',
  color: '#555555',
  lineHeight: 1.5
};

