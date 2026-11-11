import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      {/* Editorial Breadcrumb */}
      <section className="bg-pale-blush border-b border-border/40 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal/60">
          <a href="#/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-primary font-bold">Privacy Policy</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="badge badge-pink font-semibold">Statutory Compliance</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-charcoal/60">
              Last updated: November 2026 | Governing Entity: VIJETA ENTERPRISES, Kurduwadi, Solapur, Maharashtra, India.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-charcoal/80 space-y-8 leading-relaxed text-sm md:text-base">
            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">1. Introduction & Overview</h2>
              <p>
                Vijeta Enterprises ("we," "our," or "us"), headquartered in Kurduwadi, Solapur (GSTIN: 27AKUPP1588Q1ZV), respects your privacy and is dedicated to protecting personal information shared through our official website. This Privacy Policy details the types of information we collect, how it is used, and the steps we take to safeguard your data in compliance with the Information Technology Act, 2000 and applicable digital personal data protection laws of India.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">2. Information We Collect</h2>
              <p>
                We do not collect personal data passively or sell your information to third-party ad networks. We only collect details that you voluntarily submit through our interactive quote calculators, distributorship forms, or WhatsApp inquiry links:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Full Name and commercial entity / shop name</li>
                <li>Phone number and WhatsApp contact details</li>
                <li>Delivery destination, city, and pincode</li>
                <li>Product requirement specifications and volume estimates</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">3. Purpose of Processing</h2>
              <p>
                Information supplied by you is processed exclusively for legitimate commercial purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Generating customized B2B wholesale quotations and freight estimates</li>
                <li>Evaluating authorized dealership applications across Maharashtra</li>
                <li>Dispatching consignments and issuing official GST tax invoices</li>
                <li>Communicating delivery schedules and consignment consignment tracking numbers (LR)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">4. Third-Party Links & Messaging</h2>
              <p>
                Our website utilizes direct WhatsApp Web and API redirection links (wa.me) for immediate customer communication. Once you transition to the WhatsApp platform, interactions are governed by WhatsApp's end-to-end encryption standards and privacy terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">5. Contact Information</h2>
              <p>
                For questions regarding this privacy policy or to request deletion of your commercial inquiry record, contact:
              </p>
              <div className="p-5 rounded-2xl bg-pale-blush/40 border border-border/60 text-sm space-y-1">
                <p className="font-bold text-navy">VIJETA ENTERPRISES</p>
                <p>Kurduwadi, Taluka Madha, District Solapur, Maharashtra, India — 413208</p>
                <p>Phone / WhatsApp: +91 9423066050 | GSTIN: 27AKUPP1588Q1ZV</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

