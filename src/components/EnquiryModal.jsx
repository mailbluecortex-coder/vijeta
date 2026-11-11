import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, initialProduct = '', defaultProduct = '' }) {
  const chosen = initialProduct || defaultProduct || 'Vijeta Handwash — 5 L (Pink Fragrance)';
  const [product, setProduct] = useState(chosen);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialProduct || defaultProduct) {
      setProduct(initialProduct || defaultProduct);
    }
  }, [initialProduct, defaultProduct]);

  if (!isOpen) return null;

  // Strict Phone Validation (Only 10 digits starting with 6, 7, 8, or 9)
  const validatePhone = (p) => {
    const cleaned = p.replace(/\D/g, ''); // strip non-digits
    return /^[6-9]\d{9}$/.test(cleaned);
  };

  const handlePhoneChange = (e) => {
    // Only allow numbers
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(val);
    if (error && (val.length === 10 && /^[6-9]/.test(val))) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || name.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9 (numbers only, no letters).');
      return;
    }

    if (!city.trim()) {
      setError('Please enter your city or town.');
      return;
    }

    setError('');
    setSubmitted(true);

    const waText =
      `*NEW PRODUCT ENQUIRY — VIJETA ENTERPRISES*
---------------------------------------
*Product Interest:* ${product}
*Customer Name:* ${name.trim()}
*Contact Phone:* +91 ${phone.trim()}
*City / Location:* ${city.trim()}
${quantity ? `*Estimated Quantity:* ${quantity.trim()}\n` : ''}${message ? `*Notes / Requirements:* ${message.trim()}\n` : ''}
Sent via official website: www.vijetaenterprises.com`;

    setTimeout(() => {
      const waUrl = `https://wa.me/919423066050?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 700);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(13, 30, 66, 0.65)',
        backdropFilter: 'blur(6px)'
      }}
      onClick={onClose}
    >
      <div
        className="liquid-glass"
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRadius: '26px',
          boxShadow: '0 25px 60px -8px rgba(216, 10, 104, 0.28), 0 0 35px rgba(255, 117, 160, 0.18)',
          border: '1.5px solid rgba(242, 199, 217, 0.9)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '92vh'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid #F2C7D9',
            backgroundColor: '#FFF5F9'
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#142D62', margin: 0 }}>
              Product Enquiry & Quotation
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#D80A68', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              VIJETA ENTERPRISES • Kurduwadi, Solapur
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #F2C7D9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#555555',
              cursor: 'pointer'
            }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem', overflowY: 'auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142D62', marginBottom: '0.5rem' }}>
                Enquiry Successfully Prepared!
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.6 }}>
                Opening WhatsApp to connect you directly with Vijeta Enterprises management (+91 9423066050)...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.75rem 1rem', borderRadius: '12px', backgroundColor: '#FEE2E2', color: '#B91C1C', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem', border: '1px solid #FCA5A5' }}>
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{error}</span>
                </div>
              )}

              <div style={{ marginBottom: '1.15rem' }}>
                <label style={labelStyle}>Selected Product <span style={{ color: '#D80A68' }}>*</span></label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  style={inputStyle}
                  required
                >
                  <option value="Vijeta Handwash — 5 L (Pink Fragrance)">Vijeta Handwash — 5 L (Pink Fragrance)</option>
                  <option value="Vijeta Floor Cleaner (5 L Citrus)">Vijeta Floor Cleaner — 5 L</option>
                  <option value="Vijeta Dishwash Liquid (5 L Concentrate)">Vijeta Dishwash Liquid — 5 L</option>
                  <option value="Vijeta Room Freshener (Fine Mist)">Vijeta Room Freshener</option>
                  <option value="Vijeta Car Wash (5 L High-Gloss)">Vijeta Car Wash — 5 L</option>
                  <option value="Vijeta Car Shampoo (5 L Snow Foam)">Vijeta Car Shampoo — 5 L</option>
                  <option value="Vijeta Liquid Soap (5 L Institutional)">Vijeta Liquid Soap — 5 L</option>
                  <option value="Wholesale Bulk Requirement">Wholesale Institutional Pallet</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.15rem' }}>
                <div>
                  <label style={labelStyle}>Your Name <span style={{ color: '#D80A68' }}>*</span></label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Full name"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Mobile Number <span style={{ color: '#D80A68' }}>*</span> (10 Digits)
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="e.g. 9423066050"
                    style={{
                      ...inputStyle,
                      borderColor: error && !validatePhone(phone) ? '#DC2626' : '#F2C7D9',
                      backgroundColor: error && !validatePhone(phone) ? '#FEF2F2' : '#FFFFFF'
                    }}
                    required
                  />
                  <span style={{ fontSize: '0.7rem', color: '#777777', marginTop: '3px', display: 'block' }}>
                    Numbers only (e.g. 9876543210)
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.15rem' }}>
                <div>
                  <label style={labelStyle}>City / Town <span style={{ color: '#D80A68' }}>*</span></label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="e.g. Solapur, Pune, Barshi"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Estimated Quantity</label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 10 Cans, 50 Cans, 1 Pallet"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Specific Notes (Optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any special instructions, packaging requirements, or delivery location..."
                  style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp"
                style={{ width: '100%', height: '52px', fontSize: '0.9375rem', fontWeight: 700 }}
              >
                <MessageSquare size={18} />
                <span>Send Requirement to WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
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
