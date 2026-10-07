"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Pill = ({
  active,
  children,
  onClick
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative overflow-hidden px-5 py-2.5 rounded-full border text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${active
        ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        : "border-white/20 text-slate-300"
      }`}
  >
    {/* Bottom-to-top white fill */}
    <span 
      className={`absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-out origin-bottom ${
        active ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
      }`} 
    />
    <span 
      className={`relative z-10 transition-colors duration-300 ${
        active ? "text-[#2A3490]" : "group-hover:text-[#2A3490]"
      }`}
    >
      {children}
    </span>
  </button>
);

const InputField = ({ label, type, placeholder, required }: { label: string; type: string; placeholder: string; required?: boolean }) => (
  <div className="relative group w-full">
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-slate-400 group-focus-within:text-white transition-colors block">
      {label} {required && <span className="text-orange-500">*</span>}
    </label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
      required={required}
    />
  </div>
);

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleSelection = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-16 bg-[#2A3490] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Headline & Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-8">
              Let&apos;s Build <br />
              Together.
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
              Partner with us to engineer scalable software solutions that drive real impact. Select the services you need below.
            </p>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-white">Services of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {["Web App", "Mobile App", "UI / UX Design", "Cloud Infra", "AI Solutions"].map((item) => (
                  <Pill
                    key={item}
                    active={selectedServices.includes(item)}
                    onClick={() => toggleSelection(item)}
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                <InputField label="Name" type="text" placeholder="John Doe" required />
                <InputField label="Email" type="email" placeholder="john@example.com" required />
                <InputField label="Phone" type="tel" placeholder="+1 (555) 000-0000" required />
                <InputField label="Company" type="text" placeholder="Your Company Ltd." />
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                <p className="text-[10px] text-slate-400 max-w-[200px] leading-relaxed">
                  Protected by reCAPTCHA. <br />
                  <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> & <a href="#" className="underline hover:text-white transition-colors">Terms</a> apply.
                </p>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-full border border-white/30 hover:border-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 w-full sm:w-auto hover:bg-white/5"
                >
                  Send Message
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
