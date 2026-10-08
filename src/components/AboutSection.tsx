"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-white text-[#171717]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start mb-24">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight">
              We are your complete digital solution partner specialising in AI, cloud architecture, and enterprise platforms.
            </h2>
            <a
              href="#contact"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-colors duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-black scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Request a free quote <span className="font-mono text-base font-normal">↗</span>
              </span>
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start space-y-8 lg:pl-12 pt-2">
            <p className="text-base md:text-lg text-[#171717]/80 leading-relaxed font-normal">
              For over 5 years we&apos;ve been building the best software solutions for enterprises right here and globally. We&apos;re able to offer the perfect digital platform for your business, not just through how it looks but right down to how it operates. From robust microservices to fully automated AI designs, we match the right technology to your business needs.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-1 hover:text-[#2A3490] hover:border-[#2A3490] transition-colors"
            >
              About Us <span className="font-mono text-base font-normal">↗</span>
            </a>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-black/10 pt-16">
          <p className="text-xs font-bold tracking-widest uppercase text-black/40 mb-10 text-center lg:text-left">
            Our Technology Partners
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 opacity-60 grayscale">
            {/* Replace with actual partner logos later */}
            <div className="text-2xl font-bold tracking-tighter">NEXT.JS</div>
            <div className="text-2xl font-bold tracking-tighter">AWS</div>
            <div className="text-2xl font-bold tracking-tighter">GOOGLE CLOUD</div>
            <div className="text-2xl font-bold tracking-tighter">REACT</div>
          </div>
        </div>
      </div>
    </section>
  );
}
