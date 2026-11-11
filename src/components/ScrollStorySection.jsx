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

  // ScrollTrigger pinned scroll scrub — VIDEO ADVANCES STRICTLY ON SCROLL (NO AUTO-RUN)
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

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: 'storyTrigger',
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
            // Video reaches completion by progress 0.88 to leave generous dwell hold for Step 04
            const videoProgress = Math.min(1, progress / 0.88);
            const targetTime = Math.min(duration - 0.05, Math.max(0, videoProgress * duration));
            video.currentTime = targetTime;
            // Guarantee video remains strictly paused
            if (!video.paused) {
              video.pause();
            }
          }

          // Step thresholds with generous dwell buffer for Step 04
          let stepIndex = 0;
          if (progress >= 0.66) stepIndex = 3;
          else if (progress >= 0.44) stepIndex = 2;
          else if (progress >= 0.22) stepIndex = 1;
          else stepIndex = 0;

          setActiveStep(stepIndex);
        }
      });
    }, el);

    return () => {
      video.removeEventListener('loadedmetadata', onMeta);
      ctx.revert();
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
        minHeight: '100vh',
        height: '100vh',
        backgroundColor: '#FFF5F9',
        borderTop: '1px solid #F2C7D9',
        borderBottom: '1px solid #F2C7D9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 'clamp(72px, 8vh, 88px)',
        paddingBottom: 'clamp(20px, 3vh, 36px)',
        paddingLeft: 'clamp(1rem, 2vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 2vw, 2.5rem)',
        overflow: 'hidden',
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
          boxSizing: 'border-box'
        }}
      >
        {/* Top Header Bar — Centered & Clear */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '880px',
            margin: '0 auto',
            marginBottom: 'clamp(0.6rem, 1.4vh, 1.1rem)',
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
              margin: '0 0 0.55rem 0',
              lineHeight: 1.15
            }}
          >
            The Science of <span style={{ color: '#D80A68' }}>Vijeta Handwash</span>
          </h2>

          {/* 4 Step Navigation Pills */}
          <div style={{ display: 'flex', gap: '0.45rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {steps.map((st, idx) => (
              <button
                key={st.id}
                type="button"
                onClick={() => seekToStep(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.28rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
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

        {/* Main Stage Grid: Grand 9:16 Video on Left + Clear Narrative on Right */}
        <div
          style={{
            width: '100%',
            maxWidth: '1120px',
            display: 'grid',
            gridTemplateColumns: 'minmax(260px, 320px) minmax(340px, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 3.5rem)',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            flexShrink: 0
          }}
        >
          {/* Left: Proper 9:16 High-Definition Video Player with Liquid Glass Pink Glow Shadow */}
          <div
            className="liquid-glass-card"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '320px',
              height: 'clamp(420px, 56vh, 520px)',
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
            {/* Edge-to-Edge Pure Video with Exact 9:16 Ratio — Full Display Without Crop */}
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

          {/* Right: Synced Step Narrative with Liquid Glass Styling */}
          <div
            className="liquid-glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 1vh, 0.75rem)',
              maxWidth: '600px',
              padding: 'clamp(1.2rem, 2vw, 1.75rem)',
              borderRadius: '22px',
              border: '1px solid rgba(242, 199, 217, 0.85)',
              boxShadow: '0 16px 40px rgba(216, 10, 104, 0.1), 0 0 24px rgba(255, 117, 160, 0.08)'
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
                fontSize: '0.72rem',
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
                fontSize: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.65rem)',
                fontWeight: 800,
                color: '#142D62',
                lineHeight: 1.2,
                margin: 0
              }}
            >
              {cur.title}
            </h3>

            {/* Subtitle */}
            <div
              style={{
                fontSize: '0.875rem',
                color: '#D80A68',
                fontWeight: 700
              }}
            >
              {cur.subtitle}
            </div>

            {/* Step Narrative Description */}
            <p
              style={{
                fontSize: '0.84rem',
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
                padding: '0.65rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                boxShadow: '0 3px 10px rgba(216, 10, 104, 0.04)',
                margin: '2px 0'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.78rem', color: '#142D62', fontWeight: 600 }}>
                <CheckCircle2 size={15} style={{ color: '#D80A68', flexShrink: 0 }} />
                <span>Micro-bubble surfactant suspension removes dirt without stripping skin</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.78rem', color: '#142D62', fontWeight: 600 }}>
                <CheckCircle2 size={15} style={{ color: '#D80A68', flexShrink: 0 }} />
                <span>Refreshing pink rose fragrance formulated for lasting washroom aroma</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.78rem', color: '#142D62', fontWeight: 600 }}>
                <CheckCircle2 size={15} style={{ color: '#D80A68', flexShrink: 0 }} />
                <span>Manufactured under verified quality standards in Kurduwadi, Solapur</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', paddingTop: '0.3rem' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Vijeta Handwash — 5 L (Pink Fragrance)')}
                style={{
                  padding: '0.65rem 1.65rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
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
