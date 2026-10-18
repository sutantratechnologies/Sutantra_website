import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | SUTANTRA TECHNOLOGIES",
  description: "Terms and conditions for using Sutantra Technologies services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.95] mb-6 text-[#171717]">
            TERMS & CONDITIONS
          </h1>
          <p className="text-sm md:text-base text-black/60 font-bold uppercase tracking-widest border-b-[3px] border-[#171717] pb-6">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase mb-4">1. Agreement to Terms</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              By accessing or using our website and services at Sutantra Technologies Pvt. Ltd., you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase mb-4">2. Services Provided</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-4">
              Sutantra Technologies provides website and web application development, mobile application development, graphic and brand design, custom management software (including school, college, consultancy and business systems), and related maintenance and support services (the &quot;Services&quot;).
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-medium space-y-2">
              <li>All project timelines, deliverables, and fees will be outlined in a separate Statement of Work (SOW) or project agreement.</li>
              <li>We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase mb-4">3. Intellectual Property</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              Unless otherwise agreed upon in writing, Sutantra Technologies retains all intellectual property rights to the source code, frameworks, and architectures we develop until full payment is received. Upon receipt of final payment, IP rights to the work created specifically for you transfer to you as specified in the project agreement. Our proprietary background tech, internal libraries, and reusable design systems remain our exclusive property. Client data always remains the property of the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase mb-4">4. Payment and Billing</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              Invoices are strictly due within the timeframe stipulated on the invoice. Late payments may incur a penalty fee. We reserve the right to halt development, suspend hosting, or revoke access to digital assets if payments remain outstanding past the agreed terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase mb-4">5. Confidentiality</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              Both parties agree to keep all business plans, codebases, server architectures, and sensitive company information strictly confidential. A separate Non-Disclosure Agreement (NDA) may be signed upon request before commencement of any project.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase mb-4">6. Limitation of Liability</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              Sutantra Technologies shall not be held liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. We do not warrant that our software will be entirely error-free or uninterrupted, though we strive for maximum uptime and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase mb-4">7. Governing Law</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in Butwal, Lumbini Province.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold tracking-tight uppercase mb-4">8. Contact Information</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium border-t-2 border-slate-100 pt-6">
              If you have any questions or concerns regarding these Terms and Conditions, please contact us at:<br/><br/>
              <strong>Email:</strong> <a href="mailto:info@sutantratechnology.com" className="text-[#2A3490] hover:underline font-bold">info@sutantratechnology.com</a><br/>
              <strong>Location:</strong> Butwal, Lumbini Province, Nepal
            </p>
          </div>

        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
