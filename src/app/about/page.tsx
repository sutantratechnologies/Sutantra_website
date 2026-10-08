import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | SUTANTRA TECHNOLOGIES",
  description: "Learn more about Sutantra Technologies.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Top Header - White Background */}
      <section className="pt-40 pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-6 text-[#171717]">
            ABOUT US.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl font-medium">
            We are your complete digital solution partner specialising in AI, cloud architecture, and enterprise platforms.
          </p>
        </div>
      </section>

      {/* Main Content - Blue Background */}
      <section className="py-24 px-6 md:px-16 bg-[#2A3490] text-white flex-grow min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start mb-24">
            {/* Left Column */}
            <div className="flex flex-col items-start space-y-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight">
                Building the future of digital solutions, one line of code at a time.
              </h2>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col items-start space-y-8 lg:pl-12 pt-2">
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal">
                For over 5 years we've been building the best software solutions for enterprises right here and globally. We're able to offer the perfect digital platform for your business, not just through how it looks but right down to how it operates. From robust microservices to fully automated AI designs, we match the right technology to your business needs.
              </p>
            </div>
          </div>
          
          {/* Partners Section */}
          <div className="border-t border-white/20 pt-16">
            <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-10 text-center lg:text-left">
              Our Technology Partners
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 opacity-80">
              <div className="text-2xl font-bold tracking-tighter">NEXT.JS</div>
              <div className="text-2xl font-bold tracking-tighter">AWS</div>
              <div className="text-2xl font-bold tracking-tighter">GOOGLE CLOUD</div>
              <div className="text-2xl font-bold tracking-tighter">REACT</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
