import React, { useState } from 'react';
import { 
  Building2, 
  Truck, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  Clock, 
  Layers,
  Sparkles,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export default function Wholesale({ onNavigate, onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    city: '',
    state: 'Maharashtra',
    country: 'India',
    product: 'Vijeta Handwash — 5 L (Pink Fragrance)',
    quantity: '26 to 50 units (Small Commercial)',
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

  const handleWholesaleQuote = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!formData.businessName.trim()) {
      setError('Please enter your business or company name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9 (numbers only).');
      return;
    }

    if (!formData.city.trim()) {
      setError('Please enter your city or delivery destination.');
      return;
    }

    setError('');
    setSubmitted(true);

    const text = 
`*NEW WHOLESALE PROCUREMENT INQUIRY — VIJETA ENTERPRISES*
--------------------------------------------------------
*Contact Person:* ${formData.fullName.trim()}
*Business Name:* ${formData.businessName.trim()}
*Contact Phone:* +91 ${formData.phone.trim()}
${formData.email ? `*Email:* ${formData.email.trim()}\n` : ''}*Location:* ${formData.city.trim()}, ${formData.state}, ${formData.country}
*Product Line:* ${formData.product}
*Estimated Volume:* ${formData.quantity}
${formData.message ? `*Notes / Requirements:* ${formData.message.trim()}\n` : ''}
Please share GST tax invoice pricing and dispatch schedule from Kurduwadi, Solapur.`;

    setTimeout(() => {
      window.open(`https://wa.me/919423066050?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
    }, 700);
  };

  return (
    <div className="wholesale-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '86px' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#666666' }}>
          <a href="#/" onClick={(e) => handleNav('/', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <span style={{ color: '#D80A68' }}>Wholesale & Institutional Bulk Supply</span>
        </div>
      </section>

      {/* Hero Header */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} style={{ marginRight: '4px' }} />
            Factory Direct Commercial Supply
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 1.8rem + 2vw, 3.5rem)', fontWeight: 800, color: '#142D62', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Direct Bulk & Wholesale Supply from Vijeta Enterprises
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#555555', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto' }}>
            Supplying commercial enterprises, hospitality chains, educational campuses, hospitals, and fleet cleaning stations across Maharashtra with transparent pricing and prompt factory dispatch.
          </p>
        </div>
      </section>

      {/* Wholesale Pillars Grid */}
      <section style={{ padding: '3.5rem 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9', borderBottom: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={pillarCardStyle}>
              <div style={iconBoxStyle}><FileText size={22} /></div>
              <h3 style={pillarTitleStyle}>100% GST Invoiced</h3>
              <p style={pillarDescStyle}>
                Full input tax credit eligibility with valid GSTIN: <strong>27AKUPP1588Q1ZV</strong> on every commercial dispatch.
              </p>
            </div>

            <div style={pillarCardStyle}>
              <div style={iconBoxStyle}><Truck size={22} /></div>
              <h3 style={pillarTitleStyle}>Reliable Dispatch</h3>
              <p style={pillarDescStyle}>
                Strategic location in Kurduwadi provides rapid freight connectivity to Solapur, Pune, Satara, and Marathwada.
              </p>
            </div>

            <div style={pillarCardStyle}>
              <div style={iconBoxStyle}><Layers size={22} /></div>
              <h3 style={pillarTitleStyle}>Consistent Batches</h3>
              <p style={pillarDescStyle}>
                Standardized formulation ratios, active surfactant density, and pH balance batch after batch.
              </p>
            </div>

            <div style={pillarCardStyle}>
              <div style={iconBoxStyle}><Clock size={22} /></div>
              <h3 style={pillarTitleStyle}>Direct Management Support</h3>
              <p style={pillarDescStyle}>
                Direct access to company management via phone and WhatsApp at <strong>+91 9423066050</strong> for rapid order fulfilment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Field Interactive Quotation Calculator & Form */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left Info Column */}
            <div>
              <span className="eyebrow">Instant Quote Request</span>
              <h2 className="section-title">Get an Official Wholesale Quotation in Minutes</h2>
              <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.7, marginBottom: '2rem' }}>
                Select your required formulation, volume tier, and region. Our commercial dispatch team in Kurduwadi, Solapur will generate a customized pricing sheet with applicable freight and bulk slab discounts.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#142D62', fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0 }} />
                  <span>Minimum Order Quantity: 10 Carboys (5L each)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#142D62', fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0 }} />
                  <span>Pallet & Full Truckload (FTL) discounts available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#142D62', fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0 }} />
                  <span>Direct bank transfer (NEFT/RTGS/UPI) accepted</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#142D62', fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0 }} />
                  <span>Doorstep logistics support across Maharashtra</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout Box */}
              <div style={{ padding: '1.75rem', backgroundColor: '#FFF5F9', border: '1px solid #F2C7D9', borderRadius: '20px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                  Prefer Immediate Phone/WhatsApp Discussion?
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#666666', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Connect directly with Vijeta Enterprises dispatch desk for current batch availability and special distributor rates.
                </p>
                <a
                  href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20wholesale%20bulk%20product%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', textDecoration: 'none' }}
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Directly: +91 9423066050</span>
                </a>
              </div>
            </div>

            {/* Right 10-Field Form Box */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: 'clamp(2rem, 1.5rem + 2vw, 2.75rem)',
                border: '1px solid #F2C7D9',
                boxShadow: '0 16px 40px rgba(20, 45, 98, 0.08)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                Wholesale Quotation Form
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#777777', marginBottom: '1.5rem' }}>
                Fill out the 10 commercial specifications below to receive an official proforma quote.
              </p>

              {error && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.75rem 1rem', borderRadius: '12px', backgroundColor: '#FEE2E2', color: '#B91C1C', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem', border: '1px solid #FCA5A5' }}>
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{error}</span>
                </div>
              )}

              {submitted && (
                <div style={{ padding: '0.75rem 1rem', borderRadius: '12px', backgroundColor: '#DEF7EC', color: '#03543F', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                  ✓ Quotation prepared! Opening WhatsApp...
                </div>
              )}

              <form onSubmit={handleWholesaleQuote} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {/* 1 & 2: Full Name & Business Name */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Full Name <span style={{ color: '#D80A68' }}>*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patil"
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Business / Enterprise Name <span style={{ color: '#D80A68' }}>*</span></label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Patil Distributors / Hotel Royal"
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>

                {/* 3 & 4: Mobile Number & Email */}
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
                      placeholder="procurement@business.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* 5, 6 & 7: City, State, Country */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>City / Town <span style={{ color: '#D80A68' }}>*</span></label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Solapur, Pune"
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
                      <option value="Other">Other State</option>
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

                {/* 8: Product Line */}
                <div>
                  <label style={labelStyle}>Product Line Required <span style={{ color: '#D80A68' }}>*</span></label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  >
                    <option value="Vijeta Handwash — 5 L (Pink Fragrance)">Vijeta Handwash — 5 L (Pink Fragrance)</option>
                    <option value="Vijeta Floor Cleaner (5 L Citrus)">Vijeta Floor Cleaner — 5 L (Citrus Power)</option>
                    <option value="Vijeta Dishwash Liquid (5 L Concentrate)">Vijeta Dishwash Liquid — 5 L</option>
                    <option value="Vijeta Room Freshener (Fine Mist)">Vijeta Room Freshener</option>
                    <option value="Vijeta Car Wash (5 L High-Gloss)">Vijeta Car Wash — 5 L</option>
                    <option value="Vijeta Car Shampoo (5 L Snow Foam)">Vijeta Car Shampoo — 5 L (Snow Foam)</option>
                    <option value="Vijeta Liquid Soap (5 L Institutional)">Vijeta Liquid Soap — 5 L</option>
                    <option value="Assorted Multi-Product Bulk Consignment">Assorted Multi-Product Bulk Consignment</option>
                  </select>
                </div>

                {/* 9: Quantity Tier */}
                <div>
                  <label style={labelStyle}>Estimated Quantity Tier <span style={{ color: '#D80A68' }}>*</span></label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  >
                    <option value="10 to 25 units (Sample / Trial Bulk)">10 to 25 units (Sample / Trial Bulk)</option>
                    <option value="26 to 50 units (Small Commercial)">26 to 50 units (Small Commercial Tier)</option>
                    <option value="51 to 100 units (Medium Facility Tier)">51 to 100 units (Medium Facility Tier)</option>
                    <option value="101 to 500 units (Wholesale Tier 1)">101 to 500 units (Wholesale Tier 1)</option>
                    <option value="500+ units (Master Distributor / Full Truckload FTL)">500+ units (Full Truckload / Master Distributor)</option>
                  </select>
                </div>

                {/* 10: Special Notes / Message */}
                <div>
                  <label style={labelStyle}>Notes / Delivery Schedule (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify any preferred freight transporter, packaging instructions, or delivery timeline..."
                    style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', height: '52px', fontSize: '0.9375rem', fontWeight: 700 }}
                >
                  <MessageSquare size={18} />
                  <span>Request Official Wholesale Quote</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHOLESALE VS. DISTRIBUTION: IN-DEPTH DISTINCTION SECTION */}
      <section style={{ padding: 'clamp(4rem, 3rem + 3vw, 5.5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', fontWeight: 800, color: '#142D62', marginBottom: '0.75rem' }}>
              Wholesale Supply vs. Dealership Network — <span style={{ color: '#D80A68' }}>Which Fits Your Business?</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.65 }}>
              Understanding the fundamental difference between bulk purchasing for your internal facility use versus establishing an authorized regional dealership.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Wholesale Model Card */}
            <div className="liquid-glass-card" style={{ padding: '2.25rem', borderRadius: '24px', border: '2px solid rgba(216, 10, 104, 0.3)', boxShadow: '0 16px 36px rgba(216, 10, 104, 0.12)' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#FFF5F9', color: '#D80A68', padding: '0.35rem 0.9rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid #F2C7D9' }}>
                Model A • Bulk Direct Consumption (You Are Here)
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#142D62', marginBottom: '0.75rem' }}>
                Wholesale & Institutional Supply
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                For enterprises purchasing cleaning liquids in high volume to consume inside their own premises, washrooms, kitchens, or fleet operations.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#333333' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Target Buyers:</strong> Hotels, hospitals, universities, corporate offices, catering kitchens, and automotive wash centres.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Order Volumes:</strong> Flexible 10 to 100+ carboys (5L each) dispatched on demand from Kurduwadi.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Commitment:</strong> No ongoing sales quotas or territory lock-ins. Buy as per monthly facility demand.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#D80A68', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Billing:</strong> 100% Tax Invoiced with full GST Input Tax Credit (ITC) eligibility (GSTIN: 27AKUPP1588Q1ZV).</span>
                </li>
              </ul>

              <button type="button" className="btn btn-primary" onClick={() => window.scrollTo({ top: 380, behavior: 'smooth' })} style={{ width: '100%' }}>
                <span>Fill Wholesale Form Above</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Distribution Model Card */}
            <div className="liquid-glass-card" style={{ padding: '2.25rem', borderRadius: '24px', border: '2px solid rgba(20, 45, 98, 0.2)', boxShadow: '0 16px 36px rgba(20, 45, 98, 0.08)' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#EFF6FF', color: '#1E40AF', padding: '0.35rem 0.9rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid #BFDBFE' }}>
                Model B • Regional Channel Reselling
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#142D62', marginBottom: '0.75rem' }}>
                Authorized Distributorship
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                For traders, stockists, and retail distributors looking to resell Vijeta products to local retail shops, kirana networks, and institutional clients.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#333333' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Target Partners:</strong> FMCG super-stockists, regional trade distributors, wholesale chemical merchants.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Territory Rights:</strong> Assigned geographic districts/talukas with protected dealer profit margins.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Channel Margins:</strong> 18% to 28% channel markup with revolving credit for verified partners.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Factory Support:</strong> Marketing standees, product sample kits, freight priority, and dedicated management desk.</span>
                </li>
              </ul>

              <button type="button" className="btn btn-secondary" onClick={(e) => handleNav('/distributor', e)} style={{ width: '100%' }}>
                <span>Switch to Distributorship Application</span>
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

const pillarCardStyle = {
  backgroundColor: '#FFFFFF',
  padding: '1.75rem',
  borderRadius: '20px',
  border: '1px solid #F2C7D9',
  boxShadow: '0 4px 16px rgba(20, 45, 98, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
};

const iconBoxStyle = {
  width: '46px',
  height: '46px',
  borderRadius: '12px',
  backgroundColor: '#FCE4EF',
  color: '#D80A68',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const pillarTitleStyle = {
  fontSize: '1.15rem',
  fontWeight: 800,
  color: '#142D62',
  margin: 0
};

const pillarDescStyle = {
  fontSize: '0.8125rem',
  color: '#666666',
  lineHeight: 1.6,
  margin: 0
};
