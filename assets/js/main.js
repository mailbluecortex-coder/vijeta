/**
 * VIJETA ENTERPRISES — CORE JAVASCRIPT
 * Brand: VIJETA ENTERPRISES (Vijeta Enterprises)
 * Tagline: Cleanliness • Health • Trust
 * Business Contact: 9423066050 (Kurduwadi, Solapur, Maharashtra)
 */

(function () {
  'use strict';

  // --- Verified Brand Constants ---
  const BRAND_CONFIG = {
    name: 'VIJETA ENTERPRISES',
    nameMarathi: 'VIJETA ENTERPRISES',
    taglineMarathi: 'Cleanliness • Health • Trust',
    location: 'Kurduwadi, District Solapur, Maharashtra, India',
    phone: '9423066050',
    whatsappCountryCode: '91',
    whatsappNumber: '919423066050',
    gstin: '27AKUPP1588Q1ZV'
  };

  // --- DOM Elements ---
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');
  const backToTopBtn = document.querySelector('.back-to-top');
  const yearSpans = document.querySelectorAll('.current-year');

  // --- Set Current Copyright Year ---
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });

  // --- Sticky Header Controller ---
  function handleHeaderScroll() {
    if (!header) return;
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Toggle Back to Top Button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Mobile Drawer Controller ---
  function openDrawer() {
    if (mobileDrawer && mobileBackdrop && mobileToggle) {
      mobileDrawer.classList.add('open');
      mobileBackdrop.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && mobileBackdrop && mobileToggle) {
      mobileDrawer.classList.remove('open');
      mobileBackdrop.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeModal();
    }
  });

  // --- Products Filter Bar Controller ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.products-grid .product-card');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetCategory = btn.getAttribute('data-filter');
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        productCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (targetCategory === 'all' || cardCategory === targetCategory) {
            card.style.display = 'flex';
            setTimeout(() => { card.style.opacity = '1'; }, 10);
          } else {
            card.style.opacity = '0';
            setTimeout(() => { card.style.display = 'none'; }, 200);
          }
        });
      });
    });
  }

  // --- Enquiry Modal & WhatsApp Dispatcher ---
  const enquiryModal = document.getElementById('enquiryModal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const triggerEnquiryBtns = document.querySelectorAll('[data-open-enquiry]');
  const modalProductSelect = document.getElementById('modalProductSelect');

  window.openEnquiryModal = function (productName = '') {
    if (!enquiryModal) return;
    if (modalProductSelect && productName) {
      modalProductSelect.value = productName;
    }
    enquiryModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (enquiryModal) {
      enquiryModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (enquiryModal) {
    enquiryModal.addEventListener('click', (e) => {
      if (e.target === enquiryModal) {
        closeModal();
      }
    });
  }

  triggerEnquiryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || '';
      window.openEnquiryModal(product);
    });
  });

  // --- Quick WhatsApp Link Generator ---
  window.sendWhatsAppInquiry = function (productName = 'Vijeta Cleaning Range', customMsg = '') {
    const text = `Hello Vijeta Enterprises, I am inquiring regarding *${productName}*. ${customMsg}\nPlease share product details and pricing.`;
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // --- Form Validation & WhatsApp/Mailto Handler ---
  const enquiryForms = document.querySelectorAll('form[data-enquiry-form]');
  enquiryForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      let isValid = true;
      const requiredInputs = form.querySelectorAll('[required]');
      
      requiredInputs.forEach(input => {
        const group = input.closest('.form-group');
        if (!input.value.trim()) {
          isValid = false;
          if (group) group.classList.add('has-error');
        } else {
          if (group) group.classList.remove('has-error');
        }
      });

      if (!isValid) {
        const firstError = form.querySelector('.has-error input, .has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      // Collect field values
      const name = (form.querySelector('[name="name"]') || {}).value || 'Customer';
      const phone = (form.querySelector('[name="phone"]') || {}).value || '';
      const email = (form.querySelector('[name="email"]') || {}).value || '';
      const product = (form.querySelector('[name="product"]') || {}).value || 'General Cleaning Products';
      const quantity = (form.querySelector('[name="quantity"]') || {}).value || '';
      const city = (form.querySelector('[name="city"]') || {}).value || '';
      const message = (form.querySelector('[name="message"]') || {}).value || '';
      const formType = form.getAttribute('data-enquiry-type') || 'General Enquiry';

      // Build WhatsApp message
      const waMessage = 
`*NEW ENQUIRY — VIJETA ENTERPRISES*
----------------------------------
*Type:* ${formType}
*Name:* ${name}
*Contact:* ${phone}
${email ? `*Email:* ${email}\n` : ''}${city ? `*Location:* ${city}\n` : ''}*Requirement:* ${product}
${quantity ? `*Estimated Quantity:* ${quantity}\n` : ''}${message ? `*Notes:* ${message}\n` : ''}
Sent from www.vijetaenterprises.com`;

      const alertBox = form.querySelector('.form-status-alert');
      if (alertBox) {
        alertBox.className = 'form-status-alert alert-success';
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<strong>Enquiry Prepared!</strong> Redirecting to WhatsApp to send your requirement to Vijeta Enterprises (9423066050)...`;
      }

      setTimeout(() => {
        const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        if (enquiryModal && enquiryModal.classList.contains('open')) {
          closeModal();
        }
      }, 900);
    });
  });

  // --- ScrollTrigger / GSAP Fallback Enhancement ---
  document.addEventListener('DOMContentLoaded', () => {
    // If GSAP is present, add subtle reveal animations
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      window.gsap.from('.hero-headline', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1
      });

      window.gsap.from('.hero-product-img', {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.2
      });

      // Brand pillars: reveal on scroll
      window.gsap.to('.brand-pillar-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.brand-strip-section',
          start: 'top 90%',
          once: true
        }
      });

      // Product cards reveal
      window.gsap.from('.product-card', {
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }
  });

})();
