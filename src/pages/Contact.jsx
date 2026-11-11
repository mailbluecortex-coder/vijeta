import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export default function Contact({ onNavigate, onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Retail / General Inquiry',
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

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9 (numbers only).');
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter your inquiry message or requirement.');
      return;
    }

    setError('');
    setSubmitted(true);

    const text = 
`*NEW WEBSITE INQUIRY — VIJETA ENTERPRISES*
-----------------------------------------
*From:* ${formData.name.trim()}
*Contact Phone:* +91 ${formData.phone.trim()}
${formData.email ? `*Email:* ${formData.email.trim()}\n` : ''}*Category:* ${formData.category}
*Message:* ${formData.message.trim()}
Sent from www.vijetaenterprises.com (Kurduwadi, Solapur)`;

    setTimeout(() => {
      window.open(`https://wa.me/919423066050?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
    }, 700);
  };

  return (
    <div className="contact-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '86px' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#666666' }}>
          <a href="#/" onClick={(e) => handleNav('/', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <span style={{ color: '#D80A68' }}>Contact Vijeta Enterprises</span>
        </div>
      </section>

      {/* Hero Header */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} style={{ marginRight: '4px' }} />
            Direct Communication & Support
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 1.8rem + 2vw, 3.5rem)', fontWeight: 800, color: '#142D62', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            We Are Here to Assist You
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#555555', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
            Reach out directly to our manufacturing headquarters in Kurduwadi, Solapur for product details, institutional wholesale orders, or dealership opportunities.
          </p>
        </div>
      </section>

      {/* Details & Form Grid */}
      <section style={{ padding: 'clamp(2rem, 1.5rem + 2vw, 4.5rem) 1.5rem 5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left Contact Details Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                  Factory & Business Headquarters
                </h2>
                <p style={{ fontSize: '0.9375rem', color: '#666666', lineHeight: 1.65 }}>
                  VIJETA ENTERPRISES is legally registered and based at the prominent central transit junction of Kurduwadi in Solapur district, Maharashtra.
                </p>
              </div>

              {/* Address Card */}
              <div style={contactBoxStyle}>
                <div style={contactIconStyle}><MapPin size={22} /></div>
                <div>
                  <h4 style={contactBoxTitleStyle}>Factory Address</h4>
                  <p style={contactBoxTextStyle}>
                    VIJETA ENTERPRISES<br />
                    Kurduwadi, Taluka Madha,<br />
                    District Solapur, Maharashtra, India — 413208
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp Card */}
              <div style={contactBoxStyle}>
                <div style={contactIconStyle}><Phone size={22} /></div>
                <div>
                  <h4 style={contactBoxTitleStyle}>Official Phone & WhatsApp</h4>
                  <p style={{ ...contactBoxTextStyle, fontWeight: 700, color: '#D80A68', fontSize: '1.1rem' }}>
                    <a href="tel:+919423066050" style={{ color: '#D80A68', textDecoration: 'none' }}>+91 9423066050</a>
                  </p>
                  <span style={{ fontSize: '0.75rem', color: '#777777', display: 'block', marginTop: '3px' }}>
                    Direct management desk for product quotes & order dispatch.
                  </span>
                </div>
              </div>

              {/* GSTIN Card */}
              <div style={contactBoxStyle}>
                <div style={contactIconStyle}><FileText size={22} /></div>
                <div>
                  <h4 style={contactBoxTitleStyle}>Commercial Tax Registration</h4>
                  <p style={{ ...contactBoxTextStyle, fontFamily: 'monospace', fontWeight: 800, fontSize: '1.05rem', color: '#142D62' }}>
                    GSTIN: 27AKUPP1588Q1ZV
                  </p>
                  <span style={{ fontSize: '0.75rem', color: '#777777', display: 'block', marginTop: '3px' }}>
                    Registered commercial enterprise with full tax invoice eligibility.
                  </span>
                </div>
              </div>

              {/* Hours Card */}
              <div style={contactBoxStyle}>
                <div style={contactIconStyle}><Clock size={22} /></div>
                <div>
                  <h4 style={contactBoxTitleStyle}>Business Hours</h4>
                  <p style={contactBoxTextStyle}>
                    Monday to Saturday: 9:00 AM – 7:30 PM IST<br />
                    Sunday: WhatsApp Inquiries Monitored
                  </p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '28px',
                padding: 'clamp(2rem, 1.5rem + 2vw, 2.75rem)',
                border: '1px solid #F2C7D9',
                boxShadow: '0 16px 40px rgba(20, 45, 98, 0.08)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                Send Us a Direct Message
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#666666', marginBottom: '1.5rem' }}>
                Fill out the verified form below. Our response will be transmitted directly via phone or WhatsApp.
              </p>

              {error && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.75rem 1rem', borderRadius: '12px', backgroundColor: '#FEE2E2', color: '#B91C1C', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem', border: '1px solid #FCA5A5' }}>
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{error}</span>
                </div>
              )}

              {submitted && (
                <div style={{ padding: '0.75rem 1rem', borderRadius: '12px', backgroundColor: '#DEF7EC', color: '#03543F', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                  ✓ Message prepared! Opening WhatsApp...
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div>
                  <label style={labelStyle}>Your Full Name <span style={{ color: '#D80A68' }}>*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sunil Kadam"
                    style={inputStyle}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
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
                      placeholder="sunil@example.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Inquiry Classification</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="Retail / General Inquiry">Retail / General Product Inquiry</option>
                    <option value="Wholesale Bulk Procurement (5L Cans)">Wholesale Bulk Procurement (5L Cans)</option>
                    <option value="Authorized Dealership Application">Authorized Dealership Application</option>
                    <option value="Automotive Detailing Garage Supplies">Automotive Detailing Garage Supplies</option>
                    <option value="Institutional Facility Cleaning Contract">Institutional Facility Cleaning Contract</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Requirement / Message <span style={{ color: '#D80A68' }}>*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your product requirement, desired quantities, or inquiry details..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', height: '52px', fontSize: '0.9375rem', fontWeight: 700 }}
                >
                  <MessageSquare size={18} />
                  <span>Transmit Inquiry to WhatsApp</span>
                </button>
              </form>
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

const contactBoxStyle = {
  backgroundColor: '#FFFFFF',
  padding: '1.5rem',
  borderRadius: '20px',
  border: '1px solid #F2C7D9',
  boxShadow: '0 4px 16px rgba(20, 45, 98, 0.04)',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.15rem'
};

const contactIconStyle = {
  width: '46px',
  height: '46px',
  borderRadius: '14px',
  backgroundColor: '#FFF5F9',
  color: '#D80A68',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  border: '1px solid #F2C7D9'
};

const contactBoxTitleStyle = {
  fontSize: '1rem',
  fontWeight: 800,
  color: '#142D62',
  marginBottom: '0.35rem'
};

const contactBoxTextStyle = {
  fontSize: '0.875rem',
  color: '#555555',
  lineHeight: 1.6,
  margin: 0
};
