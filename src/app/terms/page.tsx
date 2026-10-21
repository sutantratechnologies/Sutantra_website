import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | SUTANTRA TECHNOLOGIES",
  description: "Terms and conditions governing web, mobile, brand design, and custom software development services by Sutantra Technologies.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-36 sm:pt-40 pb-12 sm:pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.95] mb-5 text-[#171717]">
            TERMS & CONDITIONS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-widest">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              1. Agreement to Terms & Applicability
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              These Terms and Conditions constitute a legally binding agreement between you (whether individually or on behalf of an entity, &quot;Client&quot;, &quot;you&quot;) and Sutantra Technologies Pvt. Ltd. (&quot;Sutantra&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our website (<a href="https://www.sutantratechnology.com" className="text-[#2A3490] hover:underline">sutantratechnology.com</a>), approving a proposal, executing a Statement of Work, or engaging us for software engineering, design, or consultancy services, you acknowledge that you have read, understood, and agreed to be bound by these terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              2. Scope of Services & Statements of Work
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              Sutantra provides specialized software development and design services, including website and web platform development, iOS and Android mobile applications, graphic and brand identity design, and custom management software (such as school, college, CRM, inventory, and enterprise systems):
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li>Each project engagement is governed by a dedicated Statement of Work (SOW), proposal, or contract detailing the specific deliverables, milestones, tech stack, and timeline.</li>
              <li>Preliminary estimates, discovery notes, and oral discussions are exploratory and non-binding until confirmed in an approved SOW or written agreement.</li>
              <li>We build all software with senior in-house teams. Should a third-party audit or specialized integration be required, terms will be mutually agreed in writing before kickoff.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              3. Client Responsibilities & Asset Provision
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              Successful project delivery relies on timely collaboration. The Client agrees to:
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li>Designate a primary project representative authorized to make binding decisions, clarify requirements, and approve deliverables.</li>
              <li>Supply necessary brand assets, copywriting, credentials, and API access within the scheduled timeframe agreed during sprint planning.</li>
              <li>Warrant that all materials, media, fonts, and data provided to Sutantra are legally owned by or licensed to the Client, free of copyright or trademark infringement.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              4. Change Requests & Scope Modifications
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Any feature, architectural alteration, or workflow addition not explicitly detailed in the approved SOW constitutes a Change Request. Upon receiving a change request, Sutantra will evaluate its technical impact, estimate the necessary hours, and provide an addendum. Work on additional scope will proceed only upon written client authorization.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              5. Review, Testing & Milestone Acceptance
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              To ensure transparency and consistent momentum:
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li>Deliverables will be deployed to a staging environment for Client evaluation and testing during sprint demos.</li>
              <li>The Client will have a designated review period (typically 7 to 10 business days from handover notification) to report reproducible defects against the SOW specifications.</li>
              <li>If no written notice of non-compliance is provided within the review period, or if the system is placed into commercial or production use, the milestone shall be deemed fully accepted.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              6. Intellectual Property & Code Ownership
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              Ownership of created software and creative assets is defined as follows:
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li><strong>Client IP:</strong> All client data, trade secrets, trademarks, and custom business logic remain the exclusive property of the Client at all times.</li>
              <li><strong>Custom Deliverables:</strong> Upon complete receipt of all contractually agreed milestone payments, copyright and intellectual property rights to the custom application code developed specifically for the Client transfer to the Client.</li>
              <li><strong>Background IP:</strong> Sutantra retains ownership of our proprietary frameworks, scaffolding tooling, pre-existing libraries, and reusable utility scripts. Clients receive a perpetual, non-exclusive, royalty-free license to utilize such components within their deployed solution.</li>
              <li><strong>Portfolio Demonstration:</strong> Sutantra reserves the right to display project visuals, mockups, and non-confidential case summaries in our portfolio and professional showcases, unless explicitly restricted by an NDA.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              7. Payment Terms, Invoicing & Late Fees
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              Our financial arrangements reflect predictable and fair business operations:
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li>Projects typically operate on structured milestone schedules (e.g., initial deposit upon signing, intermediate milestone payments upon staging validation, and final balance prior to production handover).</li>
              <li>Invoices are due within the payment timeframe stated on the invoice (standard Net-7 or Net-14 terms).</li>
              <li>Invoices overdue past thirty (30) days may incur a 1.5% monthly late fee. Sutantra reserves the right to suspend active development, pause staging instances, or withhold production releases until outstanding balances are cleared.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              8. Hosting, Cloud Infrastructure & Third-Party APIs
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Unless a dedicated managed maintenance agreement is active, clients are responsible for recurring hosting, cloud database, domain registration, and third-party API subscription costs (e.g., AWS, Vercel, Google Maps, payment gateways, live sports feeds). While Sutantra architecturally optimizes systems for high uptime and resilience, we are not liable for service interruptions caused by upstream third-party service outages or API breaking changes.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              9. Warranty & Post-Launch Support Window
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Every custom software build delivered by Sutantra includes a complimentary thirty (30) day post-launch warranty period commencing upon production launch. During this period, our team will promptly investigate and rectify any reproducible bugs or software defects directly conflicting with the agreed SOW specifications at no additional cost. New features, functional enhancements, or issues resulting from third-party modifications are handled under an ongoing support retainer.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              10. Confidentiality & Non-Disclosure
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Both Sutantra and the Client agree to treat all business plans, financial records, client databases, architectural diagrams, and proprietary algorithms as strictly confidential. Neither party will disclose confidential information to any third party without prior written authorization, except as strictly required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              11. Limitation of Liability
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              To the maximum extent permitted by applicable law, in no event shall Sutantra Technologies, its founders, directors, or employees be liable for any indirect, incidental, punitive, or consequential damages (including loss of profits, business revenue, data, or operational downtime) arising from the use or inability to use our deliverables. Sutantra&apos;s aggregate liability arising out of or related to any project engagement shall not exceed the total professional service fees actually paid by the Client to Sutantra under the applicable SOW.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              12. Termination & Suspension
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              Either party may terminate an agreement upon fourteen (14) days written notice under the following conditions:
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li>In the event of material breach of contract that remains uncured within the notice period.</li>
              <li>Upon termination, the Client shall pay Sutantra for all services rendered and billable hours expended up to the effective termination date.</li>
              <li>Upon receipt of final payment, Sutantra will deliver all completed work products, repositories, and documentation developed up to that point.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              13. Governing Law & Jurisdiction
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Nepal. Any dispute, controversy, or claim arising out of or in connection with these terms that cannot be resolved amicably through good-faith negotiation shall be submitted to the exclusive jurisdiction of the competent courts in Butwal, Lumbini Province, Nepal.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              14. Contact Information
            </h2>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-7 text-sm text-slate-700 leading-relaxed">
              <p className="font-medium mb-3">
                If you have questions, require legal clarification, or wish to discuss custom contract terms:
              </p>
              <div className="space-y-1 text-slate-800">
                <p><strong>Email:</strong> <a href="mailto:info@sutantratechnology.com" className="text-[#2A3490] hover:underline font-bold">info@sutantratechnology.com</a></p>
                <p><strong>Company:</strong> Sutantra Technologies Pvt. Ltd.</p>
                <p><strong>Location:</strong> Butwal, Lumbini Province, Nepal</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
