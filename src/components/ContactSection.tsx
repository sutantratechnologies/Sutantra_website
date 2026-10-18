"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InputField = ({ label, type, placeholder, required, name }: { label: string; type: string; placeholder: string; required?: boolean; name?: string }) => (
  <div className="relative group w-full">
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-slate-400 group-focus-within:text-white transition-colors block">
      {label} {required && <span className="text-orange-500">*</span>}
    </label>
    <input
      name={name || label.toLowerCase()}
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
      required={required}
    />
  </div>
);

const TextAreaField = ({ label, placeholder, required, name }: { label: string; placeholder: string; required?: boolean; name?: string }) => (
  <div className="relative group w-full md:col-span-2">
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-slate-400 group-focus-within:text-white transition-colors block">
      {label} {required && <span className="text-orange-500">*</span>}
    </label>
    <textarea
      name={name || label.toLowerCase()}
      placeholder={placeholder}
      rows={4}
      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
      required={required}
    />
  </div>
);

const SelectField = ({ label, options, required, name }: { label: string; options: string[]; required?: boolean; name?: string }) => {
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
      <input type="hidden" name={name || label.toLowerCase()} value={selected} required={required} />

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
                className={`px-5 py-3 text-sm sm:text-base cursor-pointer transition-colors ${selected === opt ? "bg-white text-[#2A3490] font-bold" : "text-white hover:bg-white/10"
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const json = await res.json().catch(() => null);
        setMsg(json?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-16 bg-[#2A3490] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Headline */}
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
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
              Website, mobile app, brand design or a custom system for your school or consultancy — tell us what you need and we&apos;ll reply within one working day with honest next steps.
            </p>

            <div className="flex flex-col gap-3 text-sm font-medium text-white/80 mb-12">
              <a href="tel:+9779867139612" className="hover:text-orange-400 transition-colors w-fit">
                +977-9867139612
              </a>
              <a href="mailto:info@sutantratechnology.com" className="hover:text-orange-400 transition-colors w-fit">
                info@sutantratechnology.com
              </a>
              <span className="text-white/50">Butwal, Lumbini Province, Nepal</span>
            </div>
          </motion.div>

          {/* Right Column: Form / Success */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.15 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 border border-green-400/50 flex items-center justify-center mb-6"
                  >
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">Message Sent!</h3>
                  <p className="text-slate-300 max-w-sm mb-8">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rounded-full border border-white/30 hover:border-white hover:bg-white/5 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                    <InputField label="Name" type="text" placeholder="Your full name" required />
                    <InputField label="Email" type="email" placeholder="you@example.com" required />
                    <InputField label="Phone" type="tel" placeholder="+977 987-6543210" required />
                    <InputField label="Company" type="text" placeholder="Your Company Ltd." />
                    <SelectField
                      label="Service of Interest"
                      name="service"
                      options={["Web Development", "Mobile App", "Graphic & Brand Design", "School Management Software", "Business / Consultancy Software", "Maintenance & Support"]}
                      required
                    />
                    <TextAreaField label="Message" placeholder="Tell us about your project..." required />
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        role="alert"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mt-8 flex items-start gap-3 rounded-xl border border-red-400/40 bg-red-500/15 px-4 py-3 relative z-10"
                      >
                        <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-red-200">Message not sent</p>
                          <p className="text-sm text-red-100/80">{msg}</p>
                        </div>
                        <button type="button" onClick={() => setStatus("idle")} aria-label="Dismiss" className="text-red-200/70 hover:text-white">
                          ✕
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                    <p className="text-[10px] text-slate-400 max-w-[200px] leading-relaxed">
                      <a href="/terms" className="underline hover:text-white transition-colors">Terms &amp; Conditions</a>{" "}
                      apply to every engagement.
                    </p>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex items-center justify-center gap-2 rounded-full border border-white/30 hover:border-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 w-full sm:w-auto hover:bg-white/5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                      {status !== "loading" && (
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}