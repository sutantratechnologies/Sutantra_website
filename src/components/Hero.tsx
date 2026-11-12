"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  "Web Development",
  "Mobile App Development",
  "Graphic & Brand Design",
  "School Management Software",
  "Business & Consultancy Systems",
  "Maintenance & Support",
];

function FourPointStar() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="w-4 h-4 text-white shrink-0"
      fill="currentColor"
    >
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      data-theme="light"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#EEF1F7] text-[#111827] pt-28 sm:pt-36 selection:bg-[#2A3490] selection:text-white"
    >
      {/* Clean Architectural Grid on Solid Bluish-Grey Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(42, 52, 144, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 52, 144, 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Main Editorial Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-12 my-auto py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#2A3490]/15 bg-white/80 backdrop-blur-sm px-4 py-1.5 mb-8 shadow-2xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2A3490]" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2A3490]">
            Software Studio · Butwal, Nepal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[7.25rem] font-black tracking-tighter uppercase leading-[0.9] text-[#111827] max-w-5xl"
        >
          BUILT <span className="text-[#2A3490]">AROUND</span>
          <br />
          YOUR BUSINESS.
        </motion.h1>

        {/* Split Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 pt-8 border-t border-[#2A3490]/15 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <p className="max-w-xl text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            We build <span className="text-[#111827] font-semibold">websites, mobile apps, brand visuals</span> and custom
            management software for schools, consultancies and growing businesses — designed around how your team already works.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#2A3490] hover:bg-[#1E2670] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 shadow-sm"
            >
              Start Your Project
            </Link>

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#2A3490]/25 bg-white hover:border-[#2A3490] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#111827] hover:text-[#2A3490] transition-colors duration-200"
            >
              <span>See What We Build</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Infinite Services Marquee Strip */}
      <div className="relative z-10 w-full bg-[#2A3490] text-white border-t border-[#1D256E] overflow-hidden">
        <div
          className="w-full overflow-hidden py-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex w-max items-center animate-marquee-x hover:[animation-play-state:paused]">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                aria-hidden={dup === 1}
                className="flex items-center shrink-0"
              >
                {services.map((service) => (
                  <React.Fragment key={`${dup}-${service}`}>
                    <span className="text-sm sm:text-base font-bold tracking-tight text-white whitespace-nowrap px-6 sm:px-8">
                      {service}
                    </span>
                    <FourPointStar />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
