import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us | SUTANTRA TECHNOLOGIES",
  description: "Get in touch with Sutantra Technologies.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Top Header - White Background */}
      <section className="pt-40 pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-6 text-[#171717]">
            CONTACT US.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl font-medium">
            Partner with us to engineer scalable software solutions that drive real impact.
          </p>
        </div>
      </section>

      {/* Main Content - Reuses the ContactSection Component */}
      <ContactSection />
      
      <Footer />
    </main>
  );
}
