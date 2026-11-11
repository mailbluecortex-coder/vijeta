import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, 
  Sparkles, 
  Droplets, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Truck, 
  Building2, 
  ChevronDown,
  Gauge,
  Layers,
  Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductCarWash({ onNavigate, onOpenEnquiry }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [activeScene, setActiveScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);
  const [dilutionType, setDilutionType] = useState('cannon'); // 'cannon' | 'bucket'

  const scenes = [
    {
      num: '01',
      tag: 'SCENE 01 — THE VEHICLE',
      title: 'Real-World Surface Contamination',
      desc: 'Dust, fine road grime, oily highway traffic residues, and brake dust accumulate on automotive clear-coats, requiring a paint-safe decontamination surfactant.',
      image: '/assets/images/car-wash/scene-01-the-car.jpg',
      metric: 'Clear-Coat Safe',
      time: 0.5
    },
    {
      num: '02',
      tag: 'SCENE 02 — HIGH-PRESSURE WATER',
      title: 'Initial Hydration & Particle Release',
      desc: 'Pressurized water cascades across the bodywork, loosening heavy road particulate to minimize frictional resistance prior to mechanical contact.',
      image: '/assets/images/car-wash/scene-02-water.jpg',
      metric: 'Hydro-Decontamination',
      time: 2.8
    },
    {
      num: '03',
      tag: 'SCENE 03 — DENSE SNOW FOAM',
      title: 'High-Lubricity Foam Encapsulation',
      desc: 'Vijeta Car Wash generates ultra-dense clinging suds that encapsulate abrasive grit, holding dirt suspended safely away from the clear-coat.',
      image: '/assets/images/car-wash/scene-03-foam.jpg',
      metric: 'Micro-Foam Matrix',
      time: 5.2
    },
    {
      num: '04',
      tag: 'SCENE 04 — SCRATCH-FREE WASH',
      title: 'Smooth, Low-Friction Contact Wash',
      desc: 'Plush microfiber wash mitts glide effortlessly across lubricated panels, releasing oily road film without leaving swirl marks, marring, or spider webbing.',
      image: '/assets/images/car-wash/scene-04-wash.jpg',
      metric: 'Zero Swirl Marks',
      time: 7.6
    },
    {
      num: '05',
      tag: 'SCENE 05 — HYDROPHOBIC FINISH',
      title: 'Streak-Free Hydrophobic Sheen',
      desc: 'Rinses completely clean without water spots or mineral haze, creating hydrophobic water-beading and revealing deep showroom gloss.',
      image: '/assets/images/car-wash/scene-05-finish.jpg',
      metric: 'Mirror-Gloss Reflection',
      time: 10.0
    }
  ];

  const faqs = [
    {
      q: 'Will Vijeta Car Wash strip ceramic coatings or wax layers?',
      a: 'No. Formulated with neutral pH and gentle surface lubricants, it effectively removes road grime without degrading ceramic coatings, paint sealants, or natural carnauba wax.'
    },
    {
      q: 'Can this product be used in high-pressure foam cannons?',
      a: 'Yes. For high-pressure foam cannons (120–180 bar), dilute 1:9 to 1:12. For standard bucket washing, mix 30–50ml per 15 litres of water.'
    },
    {
      q: 'Is it suitable for commercial automotive service centres?',
      a: 'Vijeta Car Wash is packaged in heavy-gauge 5-litre carboys and 20-litre commercial drums engineered specifically for detailing studios, service stations, and bus fleets.'
    },
    {
      q: 'Does it leave chalky residue or water spots upon drying?',
      a: 'No. The advanced free-rinsing formulation leaves zero mineral film or powdery haze when rinsed thoroughly with clean water.'
    }
  ];

  // Scroll scrub for video & scenes
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '+=250%',
        pin: true,
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress;
          const duration = video.duration || 12;
          if (video && !isNaN(duration) && duration > 0) {
            video.currentTime = Math.min(duration - 0.05, Math.max(0, progress * duration));
          }
          const sceneIdx = Math.min(scenes.length - 1, Math.floor(progress * scenes.length));
          setActiveScene(sceneIdx);
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const jumpToScene = (idx) => {
    setActiveScene(idx);
    const video = videoRef.current;
    if (video) {
      video.currentTime = scenes[idx].time;
    }
  };

  const toggleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const cur = scenes[activeScene];

  return (
    <div className="product-car-wash-page" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B' }}>
          <a href="#/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="#/products" style={{ color: '#64748B', textDecoration: 'none' }}>Products</a>
          <span>/</span>
          <span style={{ color: '#0284C7' }}>Vijeta Car Wash (Cinematic Experience)</span>
        </div>
      </section>

      {/* Top Hero Overview Header */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 4.5rem) 1.5rem 2rem', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#E0F2FE',
              color: '#0284C7',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={14} />
            <span>Automotive Detailing Series</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 1.8rem + 1.8vw, 3.5rem)',
              fontWeight: 800,
              color: '#0F172A',
              lineHeight: 1.15,
              marginBottom: '1rem'
            }}
          >
            Vijeta Car Wash <span style={{ color: '#0284C7' }}>Cinematic Demonstration</span>
          </h1>

          <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Engineered for high-end automotive detailing studios, commercial wash centres, and car enthusiasts who demand high-lubricity foam and scratch-free hydrophobic finish.
          </p>
        </div>
      </section>

      {/* PINNED CINEMATIC VIDEO STAGE */}
      <section
        ref={containerRef}
        style={{
          position: 'relative',
          height: '100vh',
          maxHeight: '100vh',
          backgroundColor: '#0A1128',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 1.5rem',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        <div
          className="container"
          style={{
            width: '100%',
            maxWidth: '1240px',
            height: '100%',
            maxHeight: 'calc(100vh - 40px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1rem 0',
            boxSizing: 'border-box'
          }}
        >
          {/* Top HUD Stage Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '0.65rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              flexShrink: 0
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  backgroundColor: 'rgba(2, 132, 199, 0.25)',
                  color: '#38BDF8',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                Live Video Demonstration
              </span>
              <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 700 }}>
                High-Lubricity Clear-Coat Cleaning
              </span>
            </div>

            {/* Scene Selector Pills */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {scenes.map((sc, idx) => (
                <button
                  key={sc.num}
                  type="button"
                  onClick={() => jumpToScene(idx)}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    border: activeScene === idx ? '2px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: activeScene === idx ? '#0284C7' : 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{sc.num}</span>
                  <span className="hidden sm:inline" style={{ marginLeft: '4px' }}>{sc.metric}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center 2-Column Stage: Video on Left + Scene Details on Right */}
          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.2fr) minmax(300px, 1fr)',
              gap: '2.5rem',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 0,
              padding: '0.5rem 0'
            }}
          >
            {/* Left: HD Car Wash Video Player */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxHeight: 'min(520px, 62vh)',
                aspectRatio: '16 / 9',
                backgroundColor: '#000000',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <video
                ref={videoRef}
                src="/assets/videos/car-wash-commercial.mp4"
                playsInline
                muted={isMuted}
                loop
                autoPlay
                preload="auto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Video Controls Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '14px',
                  right: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '9999px',
                  color: '#FFFFFF'
                }}
              >
                <button
                  type="button"
                  onClick={toggleVideoPlay}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700 }}>
                  {cur.tag}
                </span>

                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer'
                  }}
                  aria-label="Toggle Mute"
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
              </div>
            </div>

            {/* Right: Scene Details & Technical Highlights */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem',
                maxWidth: '560px'
              }}
            >
              {/* Scene Indicator */}
              <div style={{ display: 'flex', gap: '6px', width: '100%' }}>
                {scenes.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: '4px',
                      borderRadius: '2px',
                      backgroundColor: i === activeScene ? '#38BDF8' : 'rgba(255, 255, 255, 0.2)',
                      transition: 'background-color 0.3s'
                    }}
                  />
                ))}
              </div>

              <div style={{ color: '#38BDF8', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                {cur.tag}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.4rem, 1.2rem + 1vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  margin: 0
                }}
              >
                {cur.title}
              </h3>

              <p style={{ fontSize: '0.9375rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.65, margin: 0 }}>
                {cur.desc}
              </p>

              {/* Technical Attribute Box */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                  <span>pH Neutral Formulation (Safe for Ceramic & Wax)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                  <span>Ultra-Dense Micro-Suds for Maximum Lubricity</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                  <span>Rapid Water Sheeting (Prevents Hard Water Spotting)</span>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.25rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Car Wash (Commercial 5L / 20L)')}
                  style={{ backgroundColor: '#0284C7', borderColor: '#0284C7' }}
                >
                  <span>Request Garage Pricing</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20interested%20in%20bulk%20commercial%20pricing%20for%20Vijeta%20Car%20Wash."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL DILUTION & APPLICATION GUIDE */}
      <section style={{ padding: 'clamp(4rem, 3rem + 3vw, 6rem) 1.5rem', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
              Precision Application
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
              Professional Dilution Recommendations
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#64748B', maxWidth: '640px', margin: '0 auto' }}>
              Follow these recommended ratios to achieve maximum surface lubricity, thick foam density, and scratch-free cleaning results.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <button
              type="button"
              onClick={() => setDilutionType('cannon')}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: dilutionType === 'cannon' ? '2px solid #0284C7' : '1px solid #CBD5E1',
                backgroundColor: dilutionType === 'cannon' ? '#0284C7' : '#FFFFFF',
                color: dilutionType === 'cannon' ? '#FFFFFF' : '#0F172A',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: dilutionType === 'cannon' ? '0 6px 16px rgba(2, 132, 199, 0.25)' : 'none'
              }}
            >
              Foam Cannon (High Pressure)
            </button>
            <button
              type="button"
              onClick={() => setDilutionType('bucket')}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: dilutionType === 'bucket' ? '2px solid #0284C7' : '1px solid #CBD5E1',
                backgroundColor: dilutionType === 'bucket' ? '#0284C7' : '#FFFFFF',
                color: dilutionType === 'bucket' ? '#FFFFFF' : '#0F172A',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: dilutionType === 'bucket' ? '0 6px 16px rgba(2, 132, 199, 0.25)' : 'none'
              }}
            >
              Two-Bucket Hand Wash
            </button>
          </div>

          {/* Dilution Spec Cards */}
          {dilutionType === 'cannon' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Gauge size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Dilution Ratio</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0284C7', marginBottom: '0.5rem' }}>1 : 9 to 1 : 12</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Add 100ml shampoo with 900ml water into a 1L foam cannon bottle for ultra-dense clinging suds.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Layers size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Dwell Time</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>4 – 5 Minutes</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Allow clinging foam to encapsulate and soften traffic film before high-pressure rinse-down.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Zap size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Recommended Pressure</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>110 – 160 Bar</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Compatible with commercial high-pressure pressure washers and professional snow foam lances.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Gauge size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Bucket Quantity</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0284C7', marginBottom: '0.5rem' }}>30 – 50 ml</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Mix 30ml to 50ml into 15 litres of water in a standard wash bucket with grit guard.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Droplets size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Agitation Method</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Microfiber Mitt</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Use straight-line passes from top to bottom of vehicle. Rinse mitt frequently in rinse bucket.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)' }}>
                <Sparkles size={24} style={{ color: '#0284C7', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Rinse Characteristics</h4>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Free-Rinsing</div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Rinses completely clean without water spotting, polymer residue, or hazy streaking.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* COMMERCIAL PACKAGING & WHOLESALE CTA */}
      <section style={{ padding: 'clamp(4rem, 3rem + 3vw, 6rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: '28px',
              padding: 'clamp(2.5rem, 2rem + 2vw, 4rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                Bulk Commercial Supply
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
                Operating a Fleet, Auto Garage, or Car Wash Facility?
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Vijeta Enterprises supplies high-volume detailing facilities across Maharashtra with dependable, factory-direct pricing on 5L carboys and 20L commercial drums with GST billing (27AKUPP1588Q1ZV).
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Truck size={16} style={{ color: '#38BDF8' }} /> Kurduwadi Fast Dispatch
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Building2 size={16} style={{ color: '#38BDF8' }} /> GST Input Credit
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Bulk Supply - Vijeta Car Wash (Commercial Drums)')}
                style={{ backgroundColor: '#0284C7', borderColor: '#0284C7', padding: '0.85rem 1.5rem', justifyContent: 'center' }}
              >
                <span>Request Commercial Price Sheet</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="#/wholesale"
                className="btn btn-outline-light"
                style={{ justifyContent: 'center', padding: '0.85rem 1.5rem' }}
              >
                <span>Explore Wholesale Terms</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: 'clamp(3rem, 2.5rem + 2vw, 5rem) 1.5rem', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
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
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
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
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
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
