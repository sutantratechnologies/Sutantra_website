"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#2A3490] text-white pt-28 pb-12 px-6 md:px-16">
      {/* Background SVG Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.svg"
          alt="Sutantra Hero Background"
          fill
          priority
          className="object-cover object-center opacity-90 scale-105 transition-transform duration-1000"
        />
        {/* Soft overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A3490]/80 via-transparent to-[#2A3490]/40 pointer-events-none" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto">
          {/* Left Spacer / Graphic Focus area matching reference */}
          <div className="lg:col-span-4" />

          {/* Right Main Text & Headline */}
          <div className="lg:col-span-8 flex flex-col items-start lg:items-end text-left lg:text-right space-y-8">
            {/* Big Uppercase Bold Title (Reference style: RELIABLE LIFTS. REMARKABLE SERVICE.) */}
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-[1] text-white drop-shadow-lg whitespace-nowrap">
              RELIABLE CODE.
              <br />
              <span className="text-white/95">REAL IMPACT.</span>
            </h1>

            {/* Subtext and Pill Button on Bottom Right */}
            <div className="max-w-xl flex flex-col items-start lg:items-end space-y-6 pt-4">
              <p className="text-base sm:text-lg md:text-xl font-normal text-slate-200 leading-relaxed drop-shadow">
                For over <span className="text-orange-500 font-bold">5+ years</span>, Sutantra Technologies has been serving global enterprises with cutting-edge software engineering and digital transformation solutions from concept to completion.
              </p>

              <a
                href="#services"
                className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-colors duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-black">
                  <span>Explore Our Solutions</span>
                  <span className="transition-transform group-hover:translate-x-1 font-mono text-base">›</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
