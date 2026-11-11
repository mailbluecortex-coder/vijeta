import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Sparkles,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export default function Distributor({ onNavigate, onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    city: '',
    state: 'Maharashtra',
    country: 'India',
    territory: 'Solapur / Madha / Pandharpur',
    experienceYears: '3 to 5 years (Active FMCG Route)',
    message: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNav = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(path);
    else window.location.hash = '#' + path;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const val = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: val }));
      if (error && val.length === 10 && /^[6-9]/.test(val)) setError('');
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (error) setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!formData.businessName.trim()) {
      setError('Please enter your existing business or distribution entity name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9 (numbers only).');
      return;
    }

    if (!formData.city.trim()) {
      setError('Please enter your base city / headquarters.');
      return;
    }

    setError('');
    setSubmitted(true);

    const text = 
`*NEW AUTHORIZED DISTRIBUTOR APPLICATION — VIJETA ENTERPRISES*
-----------------------------------------------------------
*Applicant Name:* ${formData.fullName.trim()}
*Firm / Entity:* ${formData.businessName.trim()}
*Contact Phone:* +91 ${formData.phone.trim()}
${formData.email ? `*Email:* ${formData.email.trim()}\n` : ''}*Headquarters:* ${formData.city.trim()}, ${formData.state}, ${formData.country}
*Target Territory:* ${formData.territory}
*FMCG Experience:* ${formData.experienceYears}
${formData.message ? `*Existing Distribution Infrastructure:* ${formData.message.trim()}\n` : ''}
Please review our distributor profile and share territory dealership terms.`;

    setTimeout(() => {
      window.open(`https://wa.me/919423066050?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
    }, 700);
  };

  return (
    <div className="distributor-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '86px' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#666666' }}>
          <a href="#/" onClick={(e) => handleNav('/', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <span style={{ color: '#D80A68' }}>Authorized Distributorship Program</span>
        </div>
      </section>

      {/* Hero Header */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <Award size={14} style={{ marginRight: '4px' }} />
            Regional Dealership & Partner Network
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 1.8rem + 2vw, 3.5rem)', fontWeight: 800, color: '#142D62', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Grow Your Business as an Authorized Vijeta Distributor
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#555555', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto' }}>
            Partner with Vijeta Enterprises to distribute essential everyday cleaning, hygiene, and automotive care products across Western Maharashtra and Marathwada districts.
          </p>
        </div>
      </section>

      {/* Why Distribute Vijeta */}
      <section style={{ padding: '3.5rem 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9', borderBottom: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>The Vijeta Advantage</span>
            <h2 className="section-title">Why Stockists & Distributors Choose Vijeta</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={distCardStyle}>
              <div style={distIconStyle}><TrendingUp size={24} /></div>
              <h3 style={distCardTitleStyle}>Healthy Trade Margins</h3>
              <p style={distCardDescStyle}>
                By purchasing directly from the manufacturing unit in Kurduwadi without national brand royalty markups, our distributors retain competitive margins on retail and commercial sales.
              </p>
            </div>

            <div style={distCardStyle}>
              <div style={distIconStyle}><MapPin size={24} /></div>
              <h3 style={distCardTitleStyle}>Exclusive Territory Protection</h3>
              <p style={distCardDescStyle}>
                We assign designated geographic territories per block, taluka, or city to prevent internal price competition and protect your marketing investment.
              </p>
            </div>

            <div style={distCardStyle}>
              <div style={distIconStyle}><ShieldCheck size={24} /></div>
              <h3 style={distCardTitleStyle}>Reliable Stock Availability</h3>
              <p style={distCardDescStyle}>
                Consistent production capacity ensures that your inventory can be restocked within 24 to 48 hours, eliminating stock-outs during high-demand festival seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Field Application Form */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: 'clamp(2rem, 1.5rem + 2vw, 3.5rem)',
              border: '1px solid #F2C7D9',
              boxShadow: '0 16px 40px rgba(20, 45, 98, 0.08)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Dealership Application</span>
              <h2 className="section-title">Apply for Authorized Distributorship</h2>
              <p style={{ fontSize: '0.875rem', color: '#666666', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                Complete the business profile below. Our channel management team will review your application and initiate territory onboarding.
              </p>
            </div>

            {error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.75rem 1rem', borderRadius: '12px', backgroundColor: '#FEE2E2', color: '#B91C1C', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem', border: '1px solid #FCA5A5' }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            {submitted && (
              <div style={{ padding: '0.75rem 1rem', borderRadius: '12px', backgroundColor: '#DEF7EC', color: '#03543F', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                ✓ Application prepared! Opening WhatsApp...
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {/* 1 & 2: Full Name & Firm Name */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Full Name / Proprietor <span style={{ color: '#D80A68' }}>*</span></label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Anand Deshmukh"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Firm / Business Name <span style={{ color: '#D80A68' }}>*</span></label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Deshmukh Enterprises"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              {/* 3 & 4: Mobile & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>
                    Mobile Number <span style={{ color: '#D80A68' }}>*</span> (10 Digits)
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9423066050"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="distributor@firm.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* 5, 6 & 7: City, State, Country */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>City / Base Headquarters <span style={{ color: '#D80A68' }}>*</span></label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Barshi, Solapur, Pandharpur"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Goa">Goa</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    style={inputStyle}
                    readOnly
                  />
                </div>
              </div>

              {/* 8: Target Distribution Area / Territory */}
              <div>
                <label style={labelStyle}>Target Distribution Territory / Taluka <span style={{ color: '#D80A68' }}>*</span></label>
                <input
                  type="text"
                  name="territory"
                  value={formData.territory}
                  onChange={handleChange}
                  placeholder="e.g. District Solapur (Madha, Karmala, Barshi talukas)"
                  style={inputStyle}
                  required
                />
              </div>

              {/* 9: FMCG Experience */}
              <div>
                <label style={labelStyle}>FMCG Trade Experience Tier</label>
                <select
                  name="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="1 to 3 years (Emerging Agency)">1 to 3 years (Emerging Agency)</option>
                  <option value="3 to 5 years (Active FMCG Route)">3 to 5 years (Active FMCG Route)</option>
                  <option value="5+ years (Established Wholesale Network)">5+ years (Established Wholesale Network)</option>
                  <option value="New Business Venture">New Business Venture with Warehousing</option>
                </select>
              </div>

              {/* 10: Infrastructure / Notes */}
              <div>
                <label style={labelStyle}>Current Infrastructure & Notes (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention warehouse square footage, delivery vehicles, retail accounts covered..."
                  style={{ ...inputStyle, minHeight: '85px', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', height: '52px', fontSize: '0.9375rem', fontWeight: 700 }}
              >
                <MessageSquare size={18} />
                <span>Submit Dealership Application to WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHOLESALE VS. DISTRIBUTION: IN-DEPTH DISTINCTION SECTION */}
      <section style={{ padding: 'clamp(4rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62', marginBottom: '0.75rem' }}>
              Dealership Network vs. Wholesale Supply — <span style={{ color: '#D80A68' }}>Key Differences Explained</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.65 }}>
              Ensure you are applying through the correct channel based on whether you wish to resell products to retail shops or purchase for your own facility.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Distribution Model Card */}
            <div className="liquid-glass-card" style={{ padding: '2.25rem', borderRadius: '24px', border: '2px solid rgba(216, 10, 104, 0.3)', boxShadow: '0 16px 36px rgba(216, 10, 104, 0.12)' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#FFF5F9', color: '#D80A68', padding: '0.35rem 0.9rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid #F2C7D9' }}>
                Model B • Regional Channel Reselling (You Are Here)
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#142D62', marginBottom: '0.75rem' }}>
                Authorized Distributorship
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                For traders, stockists, and retail distributors looking to resell Vijeta products to local retail shops, kirana networks, and institutional clients.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#333333' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Target Partners:</strong> FMCG super-stockists, regional trade distributors, wholesale chemical merchants.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Territory Rights:</strong> Assigned geographic districts/talukas with protected dealer profit margins.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Channel Margins:</strong> 18% to 28% channel markup with revolving credit for verified partners.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Factory Support:</strong> Marketing standees, product sample kits, freight priority, and dedicated management desk.</span>
                </li>
              </ul>

              <button type="button" className="btn btn-primary" onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })} style={{ width: '100%' }}>
                <span>Fill Dealership Application Above</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Wholesale Model Card */}
            <div className="liquid-glass-card" style={{ padding: '2.25rem', borderRadius: '24px', border: '2px solid rgba(20, 45, 98, 0.2)', boxShadow: '0 16px 36px rgba(20, 45, 98, 0.08)' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#EFF6FF', color: '#1E40AF', padding: '0.35rem 0.9rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid #BFDBFE' }}>
                Model A • Bulk Direct Consumption
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#142D62', marginBottom: '0.75rem' }}>
                Wholesale & Institutional Supply
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                For enterprises purchasing cleaning liquids in high volume to consume inside their own premises, washrooms, kitchens, or fleet operations.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#333333' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Target Buyers:</strong> Hotels, hospitals, universities, corporate offices, catering kitchens, and automotive wash centres.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Order Volumes:</strong> Flexible 10 to 100+ carboys (5L each) dispatched on demand from Kurduwadi.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Commitment:</strong> No ongoing sales quotas or territory lock-ins. Buy as per monthly facility demand.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Billing:</strong> 100% Tax Invoiced with full GST Input Tax Credit (ITC) eligibility (GSTIN: 27AKUPP1588Q1ZV).</span>
                </li>
              </ul>

              <button type="button" className="btn btn-secondary" onClick={(e) => handleNav('/wholesale', e)} style={{ width: '100%' }}>
                <span>Switch to Wholesale Supply Page</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: '#142D62',
  marginBottom: '0.45rem'
};

const inputStyle = {
  width: '100%',
  backgroundColor: '#FFFFFF',
  border: '1px solid #F2C7D9',
  borderRadius: '12px',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  color: '#242424',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box'
};

const distCardStyle = {
  backgroundColor: '#FFFFFF',
  padding: '2rem',
  borderRadius: '20px',
  border: '1px solid #F2C7D9',
  boxShadow: '0 4px 16px rgba(20, 45, 98, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.85rem'
};

const distIconStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '14px',
  backgroundColor: '#FCE4EF',
  color: '#D80A68',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const distCardTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 800,
  color: '#142D62',
  margin: 0
};

const distCardDescStyle = {
  fontSize: '0.875rem',
  color: '#666666',
  lineHeight: 1.65,
  margin: 0
};
