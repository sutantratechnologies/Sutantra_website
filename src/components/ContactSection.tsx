"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
const TextAreaField = ({ label, placeholder, required }: { label: string; placeholder: string; required?: boolean }) => (
  <div className="relative group w-full md:col-span-2">
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-slate-400 group-focus-within:text-white transition-colors block">
      {label} {required && <span className="text-orange-500">*</span>}
    </label>
    <textarea 
      placeholder={placeholder}
      rows={4}
      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
      required={required}
    />
  </div>
);

const SelectField = ({ label, options, required }: { label: string; options: string[]; required?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative group w-full md:col-span-2" ref={dropdownRef}>
      <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-slate-400 group-focus-within:text-white transition-colors block">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      
      {/* Custom select trigger */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white focus:outline-none focus:border-white transition-colors cursor-pointer flex items-center justify-between"
      >
        <span className={selected ? "text-white" : "text-white/30"}>
          {selected || "Select a service..."}
        </span>
        <svg 
          width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1L6 6L11 1" />
        </svg>
      </div>

      {/* Hidden input to store value for the form submission */}
      <input type="hidden" name={label.toLowerCase()} value={selected} required={required} />

      {/* Custom dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-full left-0 w-full mt-2 bg-[#2A3490]/95 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden shadow-2xl"
          >
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => {
                  setSelected(opt);
                  setIsOpen(false);
                }}
                className={`px-5 py-3 text-sm sm:text-base cursor-pointer transition-colors ${
                  selected === opt ? "bg-white text-[#2A3490] font-bold" : "text-white hover:bg-white/10"
                }`}
              >
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContactSection() {

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
              Partner with us to engineer scalable software solutions that drive real impact. Fill out the form to get started.
            </p>
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
                <InputField label="Name" type="text" placeholder="Sutantra Technologies" required />
                <InputField label="Email" type="email" placeholder="hello@sutantratechnology.com" required />
                <InputField label="Phone" type="tel" placeholder="+977 987-6543210" required />
                <InputField label="Company" type="text" placeholder="Your Company Ltd." />
                <SelectField 
                  label="Service of Interest" 
                  options={["Web App", "Mobile App", "UI / UX Design", "Cloud Infra", "AI Solutions"]} 
                  required 
                />
                <TextAreaField label="Message" placeholder="Tell us about your project..." required />
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
