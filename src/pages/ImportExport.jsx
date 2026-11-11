import React, { useState } from 'react';
import { 
  Ship, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Mail, 
  Phone, 
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Package
} from 'lucide-react';

export default function ImportExport({ onNavigate, onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    port: '',
    countryCode: '+91',
    phone: '',
    email: '',
    businessType: 'Direct Importer',
    product: 'Vijeta Handwash (5 L Pink)',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleNav = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(path);
    else window.location.hash = '#' + path;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    return `*INTERNATIONAL TRADE INQUIRY — VIJETA ENTERPRISES*
----------------------------------------
*Contact Person:* ${formData.name}
*Company / Entity:* ${formData.company}
*Destination Country:* ${formData.country}
${formData.port ? `*Port of Discharge:* ${formData.port}\n` : ''}*Contact:* ${formData.countryCode} ${formData.phone}
*Email:* ${formData.email}
*Business Type:* ${formData.businessType}
*Product Line:* ${formData.product}
${formData.quantity ? `*Target Volume:* ${formData.quantity}\n` : ''}${formData.message ? `*Notes / Incoterms:* ${formData.message}\n` : ''}
Sent via Vijeta Enterprises Global Trade Desk (Kurduwadi, Solapur, India)`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.company.trim() || !formData.country.trim() || !formData.phone.trim()) {
      setError('Please fill in required fields: Name, Company, Destination Country, and Contact Number.');
      return;
    }
    setError('');
    const waUrl = `https://wa.me/919423066050?text=${encodeURIComponent(generateWhatsAppMessage())}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.company.trim() || !formData.country.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in required fields: Name, Company, Country, Corporate Email, and Phone.');
      return;
    }
    setError('');
    setSubmitted(true);
    const subject = `International Trade Inquiry — ${formData.company} (${formData.country})`;
    const body = generateWhatsAppMessage();
    window.location.href = `mailto:trade@vijetaenterprises.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="import-export-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '86px' }}>
      {/* Editorial Breadcrumb */}
      <section style={{ backgroundColor: '#FFF5F9', borderBottom: '1px solid #F2C7D9', padding: '0.85rem 1.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#666666' }}>
          <a href="#/" onClick={(e) => handleNav('/', e)} style={{ color: '#142D62', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <span style={{ color: '#D80A68' }}>Global Trade Desk — Import & Export</span>
        </div>
      </section>

      {/* Trade Hero Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #091734 0%, #142D62 55%, #300821 100%)',
          color: '#FFFFFF',
          padding: 'clamp(3.5rem, 3rem + 3vw, 5.5rem) 1.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(216, 10, 104, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 1.8rem + 2vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.25rem'
            }}
          >
            Global Commercial <span style={{ color: '#FF75A0' }}>Supply Desk</span>
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}
          >
            Connecting international FMCG distributors, overseas trading houses, and institutional buyers with verified Indian cleaning formulations. Direct factory communication with manufacturing management in Kurduwadi, Solapur.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#trade-form"
              className="btn btn-primary"
              style={{ padding: '0.75rem 2rem', textDecoration: 'none' }}
            >
              <span>Submit Trade Requirements</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/919423066050?text=Hello%20Vijeta%20Enterprises%2C%20I%20am%20inquiring%20about%20international%20cross-border%20supply%20and%20export%20terms."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.75rem 2rem', textDecoration: 'none' }}
            >
              <MessageSquare size={16} />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trade Competencies */}
      <section style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5rem) 1.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <Ship size={14} style={{ marginRight: '4px' }} />
              Manufacturing & Shipping Readiness
            </div>
            <h2 className="section-title">Institutional Capabilities for Trade Partners</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            <div style={{ padding: '2rem', backgroundColor: '#FFF5F9', border: '1px solid #F2C7D9', borderRadius: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#D80A68', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Package size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                FCL & LCL Palletization
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.65 }}>
                Engineered container-ready 5 L jerricans and reinforced master cartons configured for high-density ocean freight and break-bulk stability.
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#FFF5F9', border: '1px solid #F2C7D9', borderRadius: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#D80A68', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <FileText size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                Commercial Documentation
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.65 }}>
                GST-compliant commercial invoicing, packing lists, Certificate of Origin documentation support, and custom batch identification.
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#FFF5F9', border: '1px solid #F2C7D9', borderRadius: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#D80A68', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                Multilingual Labelling
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.65 }}>
                Consultation on regulatory front-panel English wording, Devanagari branding, and localized ingredient compliance for specific destination markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Field International Inquiry Form */}
      <section id="trade-form" style={{ padding: 'clamp(3.5rem, 3rem + 2vw, 5.5rem) 1.5rem', backgroundColor: '#FFF5F9', borderTop: '1px solid #F2C7D9' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: 'clamp(2rem, 1.5rem + 2vw, 3.5rem)',
              border: '1px solid #F2C7D9',
              boxShadow: '0 20px 50px rgba(20, 45, 98, 0.08)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>Trade Desk Form</div>
              <h2 className="section-title">International Business Enquiry</h2>
              <p style={{ fontSize: '0.875rem', color: '#666666', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                Please provide complete corporate information for international consignment analysis. Submissions route directly to factory management in Kurduwadi, Solapur.
              </p>
            </div>

            {error && (
              <div style={{ padding: '0.85rem 1.25rem', backgroundColor: '#FDE8E8', color: '#9B1C1C', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                {error}
              </div>
            )}

            {submitted && (
              <div style={{ padding: '0.85rem 1.25rem', backgroundColor: '#DEF7EC', color: '#03543F', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                ✓ Inquiry Prepared! Redirecting to email and WhatsApp transmission...
              </div>
            )}

            <form onSubmit={handleMailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Row 1: Name & Company */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>Contact Person / Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. David Al Mansoor"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company / Legal Entity *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Gulf Horizon Trading LLC"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Destination Country & Port */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>Destination Country *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. United Arab Emirates, Kenya, Sri Lanka"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Port of Discharge / City</label>
                  <input
                    type="text"
                    name="port"
                    value={formData.port}
                    onChange={handleChange}
                    placeholder="e.g. Jebel Ali Port, Colombo"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Row 3: Country Code, Phone, Corporate Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 1.3fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Code *</label>
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    placeholder="+971"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Contact Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="50 1234567"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Corporate Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="trade@company.com"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              {/* Row 4: Business Classification & Product Line */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>Business Classification *</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  >
                    <option value="Direct Importer">Direct Importer</option>
                    <option value="FMCG Wholesaler / Distributor">FMCG Wholesaler / Distributor</option>
                    <option value="Institutional Procurement / Hotel Chain">Institutional Procurement / Hotel Chain</option>
                    <option value="General Trading Corporation">General Trading Corporation</option>
                    <option value="Import Agent / Broker">Import Agent / Broker</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Product Line Required *</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  >
                    <option value="Vijeta Handwash (5 L Pink)">Vijeta Handwash (5 L Pink)</option>
                    <option value="Floor Cleaner & Dishwash Range">Floor Cleaner & Dishwash Range</option>
                    <option value="Automotive Detailing (Wash & Shampoo)">Automotive Detailing (Wash & Shampoo)</option>
                    <option value="Room Freshener (Fine Mist)">Room Freshener (Fine Mist)</option>
                    <option value="Complete 7-Product Assortment">Complete 7-Product Assortment</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Target Volume / Shipment Requirements */}
              <div>
                <label style={labelStyle}>Target Volume / Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 1 x 20ft FCL container / 500 Carboys initial trial consignment"
                  style={inputStyle}
                />
              </div>

              {/* Row 6: Incoterms / Message */}
              <div>
                <label style={labelStyle}>Incoterms / Detailed Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="State preferred Incoterms (FOB / CIF / Ex-Works), container stuffing schedule, and compliance documentation needed..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.75rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1, minWidth: '220px', padding: '0.85rem 1.75rem' }}
                >
                  <Mail size={18} />
                  <span>Generate Trade Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="btn btn-whatsapp"
                  style={{ flex: 1, minWidth: '220px', padding: '0.85rem 1.75rem' }}
                >
                  <MessageSquare size={18} />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </form>
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

