import React from 'react';
import { FileText, ShieldCheck, Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="terms-page">
      {/* Editorial Breadcrumb */}
      <section className="bg-pale-blush border-b border-border/40 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal/60">
          <a href="#/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-primary font-bold">Terms of Commercial Supply</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="badge badge-pink font-semibold">Legal & Commercial Terms</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm text-charcoal/60">
              Last updated: November 2026 | Governing Entity: VIJETA ENTERPRISES (Kurduwadi, Solapur)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-charcoal/80 space-y-8 leading-relaxed text-sm md:text-base">
            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">1. Commercial Scope</h2>
              <p>
                These Terms and Conditions govern the sale and dispatch of all hygiene essentials, surface cleaning concentrates, and automotive detailing products supplied by VIJETA ENTERPRISES (GSTIN: 27AKUPP1588Q1ZV) to retail customers, commercial distributors, institutions, and bulk buyers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">2. Quotations, Pricing & GST</h2>
              <p>
                All wholesale quotations issued via phone, WhatsApp, or formal proforma invoice are valid for 15 calendar days from the date of issuance unless specified otherwise. Prices are quoted exclusive of applicable Goods and Services Tax (GST) unless explicitly noted as GST-inclusive. Invoices are generated with full HSN code classification and statutory tax itemization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">3. Order Fulfillment & Dispatch</h2>
              <p>
                Standard bulk dispatches originate from our manufacturing and logistics base in Kurduwadi, Solapur. Transit timelines communicated are estimated based on regional third-party logistics carriers. Consignment tracking (Lorry Receipt / LR) is shared upon dispatch handover.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">4. Inspection & Transit Claims</h2>
              <p>
                Consignees must inspect cartons and carboys upon arrival for packaging integrity and seal condition. Any damage or shortage sustained during transit must be endorsed on the transporter delivery receipt and notified to Vijeta Enterprises within 48 hours with photographic evidence for prompt replacement or credit adjustment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy">5. Governing Law & Jurisdiction</h2>
              <p>
                All commercial sales, contractual agreements, and supply engagements are executed under the laws of the Republic of India. Any unresolved dispute arising out of or in connection with transactions with Vijeta Enterprises shall be subject to the exclusive jurisdiction of the competent courts in Solapur, Maharashtra, India.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

