import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStorySection({ onNavigate, onOpenEnquiry }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 901 : false);

  const steps = [
    {
      id: '01',
      badge: 'Step 01 • Concentrated Infusion',
      title: 'Concentrated Formula Meets Pure Water',
      subtitle: 'Instant Surfactant Dispersion in Water',
      description: 'A single concentrated drop of Vijeta Handwash enters water, activating high-potency surfactants that disperse instantly to break surface tension and initiate deep dirt encapsulation.',
      timeTarget: 1.0,
      highlight: 'Concentrated Formula'
    },
    {
      id: '02',
      badge: 'Step 02 • Micro-Bubble Foam (Face Zala)',
      title: 'Instant Dense Velvet Foam Formation',
      subtitle: 'Rich Cushioning Lather Between Palms',
      description: 'Gentle hand friction whips the infused liquid into millions of luxurious micro-bubbles. This velvety foam cushions hands, suspending dirt and grease without harsh abrasives.',
      timeTarget: 3.5,
      highlight: 'Dense Velvet Lather'
    },
    {
      id: '03',
      badge: 'Step 03 • Fragrance Bloom (Changla Sughand)',
      title: 'Blooming Fresh Rose Botanical Aroma',
      subtitle: 'Delicate Floral Essence That Stays Fresh',
      description: 'Warm agitation releases the encapsulated rose botanical fragrance oils. An uplifting floral aroma blooms into the air, leaving washrooms smelling fresh and hands subtly perfumed.',
      timeTarget: 6.2,
      highlight: 'Signature Pink Rose'
    },
    {
      id: '04',
      badge: 'Step 04 • Silky Moisture Rinse',
      title: 'Free-Rinsing Clean with Soft Hydration',
      subtitle: 'Zero Sticky Residue & Supple Skin Touch',
      description: 'The balanced formula rinses away completely with clean running water. Enriched with skin-conditioning glycerin, it protects the moisture barrier for soft, clean hands.',
      timeTarget: 8.8,
      highlight: 'pH 6.5 Skin Balanced'
    }
  ];

  // Responsive resize watcher
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 901);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ScrollTrigger pinned scroll scrub on desktop; fluid unpinned scrub on mobile
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    // Strictly pause video so it NEVER auto-runs
    video.pause();
    video.currentTime = 0;

    const onMeta = () => {
      video.pause();
    };
    video.addEventListener('loadedmetadata', onMeta);

    const mm = gsap.matchMedia();

    // Desktop: full pinned scroll scrub
    mm.add("(min-width: 901px)", () => {
      ScrollTrigger.create({
        id: 'storyTriggerDesktop',
        trigger: el,
        start: 'top top',
        end: '+=240%',
        pin: true,
        pinSpacing: true,
        scrub: 0.25,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const duration = video.duration || 10;
          if (video && !isNaN(duration) && duration > 0) {
            const videoProgress = Math.min(1, progress / 0.88);
            const targetTime = Math.min(duration - 0.05, Math.max(0, videoProgress * duration));
            video.currentTime = targetTime;
            if (!video.paused) {
              video.pause();
            }
          }

          let stepIndex = 0;
          if (progress >= 0.66) stepIndex = 3;
          else if (progress >= 0.44) stepIndex = 2;
          else if (progress >= 0.22) stepIndex = 1;
          else stepIndex = 0;

          setActiveStep(stepIndex);
        }
      });
    });

    // Mobile & Tablet: fluid natural scroll scrub without pinning
    mm.add("(max-width: 900px)", () => {
      ScrollTrigger.create({
        id: 'storyTriggerMobile',
        trigger: el,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 0.3,
        onUpdate: (self) => {
          const progress = self.progress;
          const duration = video.duration || 10;
          let stepIndex = 0;
          if (progress >= 0.70) stepIndex = 3;
          else if (progress >= 0.45) stepIndex = 2;
          else if (progress >= 0.20) stepIndex = 1;
          else stepIndex = 0;

          setActiveStep(stepIndex);
          if (video && !isNaN(duration) && duration > 0) {
            const targetTime = Math.min(duration - 0.05, Math.max(0, steps[stepIndex].timeTarget));
            video.currentTime = targetTime;
            if (!video.paused) video.pause();
          }
        }
      });
    });

    return () => {
      video.removeEventListener('loadedmetadata', onMeta);
      mm.revert();
    };
  }, []);

  // Jump to specific step timestamp on pill click
  const seekToStep = (index) => {
    setActiveStep(index);
    const video = videoRef.current;
    if (video) {
      video.currentTime = steps[index].timeTarget;
      video.pause();
    }
  };

  const cur = steps[activeStep];

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: isMobile ? 'auto' : '100vh',
        height: isMobile ? 'auto' : '100vh',
        backgroundColor: '#FFF5F9',
        borderTop: '1px solid #F2C7D9',
        borderBottom: '1px solid #F2C7D9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: isMobile ? 'clamp(3rem, 6vh, 4.5rem)' : 'clamp(72px, 8vh, 88px)',
        paddingBottom: isMobile ? 'clamp(2.5rem, 5vh, 4rem)' : 'clamp(20px, 3vh, 36px)',
        paddingLeft: isMobile ? '1rem' : 'clamp(1rem, 2vw, 2.5rem)',
        paddingRight: isMobile ? '1rem' : 'clamp(1rem, 2vw, 2.5rem)',
        overflow: isMobile ? 'visible' : 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <div
        className="container"
        style={{
          width: '100%',
          maxWidth: '1180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          boxSizing: 'border-box',
          padding: 0
        }}
      >
        {/* Top Header Bar — Centered & Clear */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '880px',
            width: '100%',
            margin: '0 auto',
            marginBottom: isMobile ? '1.25rem' : 'clamp(0.6rem, 1.4vh, 1.1rem)',
            flexShrink: 0
          }}
        >
          {/* Section Main Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.35rem, 1.2rem + 0.8vw, 1.95rem)',
              fontWeight: 800,
              color: '#142D62',
              margin: '0 0 0.65rem 0',
              lineHeight: 1.18
            }}
          >
            The Science of <span style={{ color: '#D80A68' }}>Vijeta Handwash</span>
          </h2>

          {/* 4 Step Navigation Pills */}
          <div 
            style={{ 
              display: 'flex', 
              gap: isMobile ? '0.35rem' : '0.45rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}
          >
            {steps.map((st, idx) => (
              <button
                key={st.id}
                type="button"
                onClick={() => seekToStep(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: isMobile ? '0.32rem 0.65rem' : '0.28rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: isMobile ? '0.7rem' : '0.74rem',
                  fontWeight: 700,
                  border: activeStep === idx ? '2px solid #D80A68' : '1px solid #F2C7D9',
                  backgroundColor: activeStep === idx ? '#D80A68' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  color: activeStep === idx ? '#FFFFFF' : '#142D62',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: activeStep === idx ? '0 4px 12px rgba(216, 10, 104, 0.28)' : '0 2px 6px rgba(0,0,0,0.03)'
                }}
              >
                <span style={{ fontWeight: 800 }}>{st.id}</span>
                <span>{st.highlight}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Stage Grid: Responsive Single-col on Mobile, 2-col on Desktop */}
        <div
          style={{
            width: '100%',
            maxWidth: isMobile ? '560px' : '1120px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'minmax(260px, 320px) minmax(340px, 1fr)',
            gap: isMobile ? '1.5rem' : 'clamp(1.5rem, 3vw, 3.5rem)',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            flexShrink: 0
          }}
        >
          {/* Left / Top: 9:16 Video Player with Liquid Glass Pink Glow Shadow */}
          <div
            className="liquid-glass-card"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: isMobile ? '240px' : '320px',
              height: isMobile ? 'clamp(260px, 35vh, 320px)' : 'clamp(420px, 56vh, 520px)',
              aspectRatio: '9 / 16',
              margin: '0 auto',
              backgroundColor: '#0D1E42',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 22px 54px rgba(216, 10, 104, 0.2), 0 0 32px rgba(255, 117, 160, 0.12)',
              border: '2px solid rgba(242, 199, 217, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <video
              ref={videoRef}
              src="/assets/videos/pink-handwash-commercial.mp4"
              playsInline
              muted
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Right / Bottom: Synced Step Narrative with Liquid Glass Styling */}
          <div
            className="liquid-glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 1vh, 0.75rem)',
              width: '100%',
              maxWidth: isMobile ? '100%' : '600px',
              padding: isMobile ? '1.25rem 1rem' : 'clamp(1.2rem, 2vw, 1.75rem)',
              borderRadius: '22px',
              border: '1px solid rgba(242, 199, 217, 0.85)',
              boxShadow: '0 16px 40px rgba(216, 10, 104, 0.1), 0 0 24px rgba(255, 117, 160, 0.08)',
              boxSizing: 'border-box'
            }}
          >
            {/* Step Progress Line */}
            <div style={{ display: 'flex', gap: '6px', width: '100%', marginBottom: '2px' }}>
              {steps.map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: i === activeStep ? '#D80A68' : '#F2C7D9',
                    transition: 'background-color 0.3s'
                  }}
                />
              ))}
            </div>

            {/* Step Eyebrow Badge */}
            <div
              style={{
                color: '#D80A68',
                fontFamily: 'var(--font-heading)',
                fontSize: isMobile ? '0.68rem' : '0.72rem',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              {cur.badge}
            </div>

            {/* Step Title */}
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: isMobile ? '1.2rem' : 'clamp(1.25rem, 1.15rem + 0.5vw, 1.65rem)',
                fontWeight: 800,
                color: '#142D62',
                lineHeight: 1.22,
                margin: 0
              }}
            >
              {cur.title}
            </h3>

            {/* Subtitle */}
            <div
              style={{
                fontSize: isMobile ? '0.825rem' : '0.875rem',
                color: '#D80A68',
                fontWeight: 700
              }}
            >
              {cur.subtitle}
            </div>

            {/* Step Narrative Description */}
            <p
              style={{
                fontSize: isMobile ? '0.82rem' : '0.84rem',
                color: '#555555',
                lineHeight: 1.55,
                margin: 0
              }}
            >
              {cur.description}
            </p>

            {/* Feature Checklist Box */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #F2C7D9',
                padding: isMobile ? '0.65rem 0.75rem' : '0.65rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
                boxShadow: '0 3px 10px rgba(216, 10, 104, 0.04)',
                margin: '2px 0'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: isMobile ? '0.75rem' : '0.78rem', color: '#142D62', fontWeight: 600, lineHeight: 1.4 }}>
                <CheckCircle2 size={15} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                <span>Micro-bubble surfactant suspension removes dirt without stripping skin</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: isMobile ? '0.75rem' : '0.78rem', color: '#142D62', fontWeight: 600, lineHeight: 1.4 }}>
                <CheckCircle2 size={15} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                <span>Refreshing pink rose fragrance formulated for lasting washroom aroma</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: isMobile ? '0.75rem' : '0.78rem', color: '#142D62', fontWeight: 600, lineHeight: 1.4 }}>
                <CheckCircle2 size={15} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                <span>Manufactured under verified quality standards in Kurduwadi, Solapur</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', paddingTop: '0.3rem', width: '100%' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Handwash — 5 L (Pink Fragrance)')}
                style={{
                  width: isMobile ? '100%' : 'auto',
                  padding: '0.65rem 1.65rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Request Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
