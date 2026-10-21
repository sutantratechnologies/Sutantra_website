import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SUTANTRA TECHNOLOGIES",
  description: "Privacy policy and data protection practices at Sutantra Technologies.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-36 sm:pt-40 pb-12 sm:pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.95] mb-5 text-[#171717]">
            PRIVACY POLICY
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
              1. Overview & Commitment
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              At Sutantra Technologies Pvt. Ltd. (&quot;Sutantra&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we value and respect your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard personal and business information when you visit our website (<a href="https://www.sutantratechnology.com" className="text-[#2A3490] hover:underline">sutantratechnology.com</a>), communicate with our team, or utilize our web, mobile, brand design, and custom software development services.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              2. Information We Collect
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              We only collect information that is strictly necessary to communicate with you, evaluate your project requirements, and deliver our services:
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li>
                <strong>Contact Information:</strong> Your name, email address, telephone number, organization name, and service preferences submitted through our inquiry or contact forms.
              </li>
              <li>
                <strong>Project Documentation:</strong> Specifications, architectural briefs, workflows, and brand assets shared during scoping, consultations, or active development.
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> Standard server logs, IP addresses, browser types, operating systems, and page interaction timestamps gathered to maintain website performance and security.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              3. How We Use Your Information
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              We process your data exclusively for legitimate business purposes:
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li>Responding to project inquiries, scheduling discovery consultations, and providing accurate scope and price estimates.</li>
              <li>Designing, developing, deploying, and supporting custom applications, portals, and software systems.</li>
              <li>Issuing project agreements, invoices, statements of work, and ongoing maintenance updates.</li>
              <li>Preventing unauthorized activity, ensuring server security, and fulfilling regulatory and legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              4. Client Data & Strict Confidentiality
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              We never sell, rent, monetise, or trade your personal or business data to third parties or data brokers. All client proprietary workflows, database structures, business logic, student records, and company records remain the sole intellectual property of the client. Our team operates under strict confidentiality protocols, and we execute formal Non-Disclosure Agreements (NDAs) prior to commencing sensitive builds.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              5. Third-Party Infrastructure & Subprocessors
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-4">
              To operate our website and reliably deliver digital products, we partner with industry-standard, security-certified infrastructure providers:
            </p>
            <ul className="list-disc list-outside ml-5 text-sm md:text-base text-slate-600 leading-relaxed font-normal space-y-2">
              <li><strong>Cloud & Hosting Platforms:</strong> Vercel and secure global cloud servers for hosting and asset delivery.</li>
              <li><strong>Email Communications:</strong> Resend and certified SMTP relays for transacting contact requests and automated system notifications.</li>
              <li><strong>Databases & APIs:</strong> Enterprise-grade database engines (such as Supabase, PostgreSQL, AWS) configured with encrypted storage and restricted role-based credentials.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              6. Data Security & Storage
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              We implement industry-standard technical and operational safeguards to protect your data against unauthorized access, loss, alteration, or disclosure. All data transmissions across our platform are secured using HTTPS/TLS encryption. Access to production environments and databases is restricted strictly to authorized senior engineers on a need-to-know basis.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              7. Cookies & Analytics
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Our website uses minimal, non-invasive cookies to optimize navigation performance and ensure basic session security. We do not deploy invasive third-party cross-site advertising trackers. You can disable cookies in your browser settings at any time without impacting your core browsing experience.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              8. Your Rights
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              You hold the right to request access to the personal information we hold about you, request corrections to inaccurate records, or request deletion of your information from our communications registry. To exercise any of these rights, please email us directly.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase mb-3 text-[#171717]">
              9. Contact Us
            </h2>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-7 text-sm text-slate-700 leading-relaxed">
              <p className="font-medium mb-3">
                If you have questions, feedback, or concerns regarding our privacy practices, please contact our data team:
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
