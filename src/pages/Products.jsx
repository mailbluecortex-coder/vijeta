import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Droplets, 
  ShieldCheck, 
  Video,
  Play
} from 'lucide-react';

export default function Products({ onNavigate, onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleNavigate = (path, e) => {
    if (e) e.preventDefault();
    const cleanPath = path.replace(/^#/, '');
    if (onNavigate) {
      onNavigate(cleanPath);
    } else {
      window.location.hash = '#' + cleanPath;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const products = [
    {
      id: 'handwash',
      name: 'Vijeta Handwash (5 L)',
      tagline: 'Rose-Infused 5L Commercial Hygiene Refill',
      category: 'personal',
      categoryLabel: 'Personal Care & Hygiene',
      format: '5 Litre Commercial Canister',
      highlight: 'Flagship Formulation',
      hasVideo: true,
      image: '/assets/images/products/handwash-5l-hero-commercial.jpg',
      description: 'Our flagship 5L personal care formulation. Features a delicate rose floral fragrance, rich conditioning suds, and non-drying daily skin balance.',
      specs: ['pH 6.5 Skin Balanced', 'Rich Lather', '5L Institutional Can'],
      path: '/products/handwash'
    },
    {
      id: 'car-wash',
      name: 'Vijeta Car Wash',
      tagline: 'High-Gloss Hydrophobic Surface Wash',
      category: 'auto',
      categoryLabel: 'Automotive Detailing',
      format: '5 Litre Carboy & 20 Litre Drum',
      highlight: 'Automotive Series',
      hasVideo: true,
      image: '/assets/images/products/car-wash.jpg',
      description: 'Engineered for car washing centres and automotive enthusiasts. Cuts traffic film and encapsulates grit with hydrophobic water-beading finish.',
      specs: ['High Hydrophobic Sheen', 'Clear-Coat Safe', 'Quick-Rinse Chemistry'],
      path: '/products/car-wash'
    },
    {
      id: 'floor-cleaner',
      name: 'Vijeta Floor Cleaner',
      tagline: 'Citrus Power Multi-Surface Cleaner',
      category: 'home',
      categoryLabel: 'Home & Surface Care',
      format: '5 Litre Commercial Pack',
      highlight: 'High Dilution Economy',
      hasVideo: true,
      image: '/assets/images/products/floor-cleaner.jpg',
      description: 'Heavy-duty citrus surface cleaner for marble, granite, vitrified tile, and polished concrete. Leaves a sparkling streak-free shine.',
      specs: ['Streak-Free Finish', 'Tile & Marble Safe', 'Economical 1:100 Ratio'],
      path: '/products/floor-cleaner'
    },
    {
      id: 'car-shampoo',
      name: 'Vijeta Car Shampoo',
      tagline: 'Ultra-Dense Snow Foam Detailing Formula',
      category: 'auto',
      categoryLabel: 'Automotive Detailing',
      format: '5 Litre Can / 20 Litre Bulk',
      highlight: 'Snow Foam Tech',
      hasVideo: true,
      image: '/assets/images/products/car-shampoo.jpg',
      description: 'pH-neutral snow foam shampoo designed for high-pressure foam cannons and scratch-free two-bucket manual washes.',
      specs: ['pH 7.0 Neutral', 'Dense Cling Lather', 'Ceramic Safe'],
      path: '/products/car-shampoo'
    },
    {
      id: 'dishwash-liquid',
      name: 'Vijeta Dishwash Liquid',
      tagline: 'Lemon Active Grease-Cutting Concentrate',
      category: 'home',
      categoryLabel: 'Home & Surface Care',
      format: '5 Litre Institutional Canister',
      highlight: 'Commercial Kitchen Grade',
      hasVideo: true,
      image: '/assets/images/products/dishwash-liquid.jpg',
      description: 'Concentrated citrus degreaser that cuts stubborn oil, burnt ghee, and food residue on commercial cookware and domestic glassware.',
      specs: ['Active Lemon Degreaser', 'Gentle on Hands', 'Zero Water Spots'],
      path: '/products/dishwash-liquid'
    },
    {
      id: 'room-freshener',
      name: 'Vijeta Room Freshener',
      tagline: 'Fine Mist Long-Lasting Ambient Aroma',
      category: 'home',
      categoryLabel: 'Home & Surface Care',
      format: 'Commercial Mist Dispenser / 5L Refill',
      highlight: 'Aerosol-Free Mist',
      hasVideo: true,
      image: '/assets/images/products/room-freshener.jpg',
      description: 'Water-based aerosol-free ambient freshener with botanical floral bouquet. Neutralizes odors in executive cabins, hotels, and washrooms.',
      specs: ['Water-Based Formula', 'Long-Lasting Aroma', 'Aerosol Free'],
      path: '/products/room-freshener'
    },
    {
      id: 'liquid-soap',
      name: 'Vijeta Liquid Soap',
      tagline: 'Moisturizing Institutional Hand & Body Wash',
      category: 'personal',
      categoryLabel: 'Personal Care & Hygiene',
      format: '5 Litre Commercial Refill',
      highlight: 'Dispenser Optimized',
      hasVideo: true,
      image: '/assets/images/products/liquid-soap.jpg',
      description: 'Balanced viscosity liquid soap designed for smooth flow in automatic sensor dispensers and high-traffic washroom pump stations.',
      specs: ['Glycerin Enriched', 'Smooth Sensor Flow', 'pH 5.5 Balanced'],
      path: '/products/liquid-soap'
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '100px' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <a href="#/" onClick={(e) => handleNavigate('/', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <span style={{ color: '#D80A68', fontWeight: 700 }}>Products Catalogue</span>
        </div>
      </section>

      {/* Catalogue Header */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 5rem) 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center', margin: '0 auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} style={{ marginRight: '4px' }} />
            Vijeta Product Portfolio
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-4xl)', fontWeight: 800, color: '#142D62', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Everyday Cleaning & Hygiene Essentials
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: '#555555', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Manufactured in Kurduwadi, Solapur for dependable personal care, spotless surface hygiene, and high-performance automotive detailing.
          </p>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              style={{
                padding: '0.65rem 1.45rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: activeCategory === 'all' ? '2px solid #D80A68' : '1px solid #F2C7D9',
                backgroundColor: activeCategory === 'all' ? '#D80A68' : '#FFF5F9',
                color: activeCategory === 'all' ? '#FFFFFF' : '#142D62',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeCategory === 'all' ? '0 4px 14px rgba(216, 10, 104, 0.25)' : 'none'
              }}
            >
              All Products ({products.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('personal')}
              style={{
                padding: '0.65rem 1.45rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: activeCategory === 'personal' ? '2px solid #D80A68' : '1px solid #F2C7D9',
                backgroundColor: activeCategory === 'personal' ? '#D80A68' : '#FFF5F9',
                color: activeCategory === 'personal' ? '#FFFFFF' : '#142D62',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeCategory === 'personal' ? '0 4px 14px rgba(216, 10, 104, 0.25)' : 'none'
              }}
            >
              Personal Care & Hygiene
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('home')}
              style={{
                padding: '0.65rem 1.45rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: activeCategory === 'home' ? '2px solid #D80A68' : '1px solid #F2C7D9',
                backgroundColor: activeCategory === 'home' ? '#D80A68' : '#FFF5F9',
                color: activeCategory === 'home' ? '#FFFFFF' : '#142D62',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeCategory === 'home' ? '0 4px 14px rgba(216, 10, 104, 0.25)' : 'none'
              }}
            >
              Home & Surface Care
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('auto')}
              style={{
                padding: '0.65rem 1.45rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: activeCategory === 'auto' ? '2px solid #D80A68' : '1px solid #F2C7D9',
                backgroundColor: activeCategory === 'auto' ? '#D80A68' : '#FFF5F9',
                color: activeCategory === 'auto' ? '#FFFFFF' : '#142D62',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeCategory === 'auto' ? '0 4px 14px rgba(216, 10, 104, 0.25)' : 'none'
              }}
            >
              Automotive Detailing
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section style={{ paddingBottom: '5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {filteredProducts.map((p) => (
              <article
                key={p.id}
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
                {/* Visual Header with Badges */}
                <a
                  href={'#' + p.path}
                  onClick={(e) => handleNavigate(p.path, e)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 0.95',
                    backgroundColor: '#FFF5F9',
                    padding: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  {/* Top Left Highlight Tag */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: p.id === 'handwash' ? '#D80A68' : '#142D62',
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
                    {p.highlight}
                  </span>

                  {/* Top Right Video Demo Indicator */}
                  {p.hasVideo && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        color: '#D80A68',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        border: '1px solid #F2C7D9',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                        zIndex: 2
                      }}
                    >
                      <Play size={11} fill="#D80A68" />
                      <span>Video Demo</span>
                    </span>
                  )}

                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      maxHeight: '85%',
                      maxWidth: '85%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 12px 24px rgba(20, 45, 98, 0.12))',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                </a>

                {/* Body Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D80A68', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    {p.categoryLabel}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#142D62', marginBottom: '0.4rem' }}>
                    <a
                      href={'#' + p.path}
                      onClick={(e) => handleNavigate(p.path, e)}
                      style={{ color: '#142D62', textDecoration: 'none', transition: 'color 0.2s' }}
                    >
                      {p.name}
                    </a>
                  </h3>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#777777', marginBottom: '0.85rem' }}>
                    Format: {p.format}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.65, marginBottom: '1.25rem', flexGrow: 1 }}>
                    {p.description}
                  </p>

                  {/* Specs Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', paddingTop: '0.5rem', borderTop: '1px solid #F3F4F6' }}>
                    {p.specs.map((spec, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          backgroundColor: '#FFF5F9',
                          color: '#142D62',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '8px'
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: '#D80A68', flexShrink: 0 }} />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.85rem', alignItems: 'center' }}>
                    <a
                      href={'#' + p.path}
                      className="btn btn-secondary btn-sm"
                      onClick={(e) => handleNavigate(p.path, e)}
                      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                    </a>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(p.name)}
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

      {/* Commercial Bulk Banner */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5.5rem) 0', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#142D62',
              color: '#FFFFFF',
              borderRadius: '28px',
              padding: 'clamp(2.5rem, 2rem + 2vw, 4rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '1rem'
                }}
              >
                Bulk Institutional Supply
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem' }}>
                Custom Packing & Consignment Quantities
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.65 }}>
                We supply corporate enterprises, hospitals, hotels, detailing garages, and municipal cleaning contractors with high-volume consignments directly from Kurduwadi, Solapur.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', smDirection: 'row', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNavigate('/wholesale')}
              >
                <span>Wholesale Pricing</span>
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => handleNavigate('/distributor')}
              >
                <span>Distributor Program</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
