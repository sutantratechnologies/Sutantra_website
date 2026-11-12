"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const InputField = ({ label, type, placeholder, required, name }: { label: string; type: string; placeholder: string; required?: boolean; name?: string }) => (
  <div className="relative group w-full">
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-[#2A3490] transition-colors block">
      {label} {required && <span className="text-[#111827]/50">*</span>}
    </label>
    <input
      name={name || label.toLowerCase()}
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-[#111827]/20 pb-3 text-sm sm:text-base text-[#111827] placeholder-[#111827]/35 focus:outline-none focus:border-[#2A3490] transition-colors"
      required={required}
    />
  </div>
);

const TextAreaField = ({ label, placeholder, required, name }: { label: string; placeholder: string; required?: boolean; name?: string }) => (
  <div className="relative group w-full md:col-span-2">
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-[#2A3490] transition-colors block">
      {label} {required && <span className="text-[#111827]/50">*</span>}
    </label>
    <textarea
      name={name || label.toLowerCase()}
      placeholder={placeholder}
      rows={4}
      className="w-full bg-transparent border-b border-[#111827]/20 pb-3 text-sm sm:text-base text-[#111827] placeholder-[#111827]/35 focus:outline-none focus:border-[#2A3490] transition-colors resize-none"
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
      <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-[#2A3490] transition-colors block">
        {label} {required && <span className="text-[#111827]/50">*</span>}
      </label>

      {/* Custom select trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b border-[#111827]/20 pb-3 text-sm sm:text-base text-[#111827] focus:outline-none focus:border-[#2A3490] transition-colors cursor-pointer flex items-center justify-between"
      >
        <span className={selected ? "text-[#111827]" : "text-[#111827]/35"}>
          {selected || "Select a service..."}
        </span>
        <svg
          width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-300 text-[#2A3490] ${isOpen ? "rotate-180" : ""}`}
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
            className="absolute z-50 top-full left-0 w-full mt-2 bg-white border border-[#2A3490]/15 rounded-xl overflow-hidden shadow-xl"
          >
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => {
                  setSelected(opt);
                  setIsOpen(false);
                }}
                className={`px-5 py-3 text-sm sm:text-base cursor-pointer transition-colors ${
                  selected === opt
                    ? "bg-[#2A3490] text-white font-bold"
                    : "text-[#111827] hover:bg-[#EEF1F7]"
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

function DeckledSheetBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 drop-shadow-[0_14px_28px_rgba(17,24,39,0.14)]"
    >
      <div className="w-full h-full paper-deckled-mask bg-white border-y border-[#2A3490]/15" />
    </div>
  );
}

function PaperClipPin({ isHovered, reducedMotion }: { isHovered: boolean; reducedMotion: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={
        reducedMotion
          ? undefined
          : isHovered
          ? { rotate: [6, -2, 9, 4], y: -2 }
          : { rotate: 6, y: 0 }
      }
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{ transformOrigin: "50% 45%" }}
      className="pointer-events-none absolute -top-5 right-8 sm:right-12 z-30 drop-shadow-[0_5px_8px_rgba(17,24,39,0.22)]"
    >
      <svg
        viewBox="0 -4 42 74"
        className="w-9 h-14 sm:w-10 sm:h-16 overflow-visible"
        fill="none"
      >
        {/* Main dark metallic paperclip wire */}
        <path
          d="M 15 44 L 15 16 A 7 7 0 0 1 29 16 L 29 52 A 11 11 0 0 1 7 52 L 7 14 A 14 14 0 0 1 35 14 L 35 46"
          stroke="#2A3490"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Subtle top metallic highlight */}
        <path
          d="M 15 43 L 15 16 A 7 7 0 0 1 29 16 L 29 52 A 11 11 0 0 1 7 52 L 7 14 A 14 14 0 0 1 35 14 L 35 45"
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");
  const [isCardHovered, setIsCardHovered] = useState(false);
  const prefersReducedMotion = Boolean(useReducedMotion());

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
    <section
      id="contact"
      data-theme="light"
      className="relative py-24 md:py-32 bg-[#EEF1F7] text-[#111827] border-t border-[#2A3490]/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Headline */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.05] tracking-tight mb-8 text-[#111827]">
              Let&apos;s Build <br />
              <span className="text-[#2A3490]">Together.</span>
            </h2>
            <p className="text-[#111827]/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
              Website, mobile app, brand design or a custom system for your school or consultancy — tell us what you need and we&apos;ll reply within one working day with honest next steps.
            </p>

            <div className="flex flex-col gap-3 text-sm font-medium text-[#111827]/85 mb-12">
              <a href="tel:+9779867139612" className="hover:text-[#2A3490] transition-colors w-fit">
                +977-9867139612
              </a>
              <a href="mailto:info@sutantratechnology.com" className="hover:text-[#2A3490] transition-colors w-fit">
                info@sutantratechnology.com
              </a>
              <span className="text-[#111827]/55">Butwal, Lumbini Province, Nepal</span>
            </div>
          </div>

          {/* Right Column: Form / Success */}
          <motion.div
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    rotate: isCardHovered ? -0.9 : 0,
                    y: isCardHovered ? -4 : 0,
                  }
            }
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            style={{ transformOrigin: "88% 0%" }}
            className="relative"
          >
            <PaperClipPin isHovered={isCardHovered} reducedMotion={prefersReducedMotion} />
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative p-10 md:p-14 flex flex-col items-center text-center py-20"
                >
                  <DeckledSheetBackdrop />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.15 }}
                    className="relative z-10 w-20 h-20 rounded-full bg-[#EEF1F7] border border-[#2A3490]/25 flex items-center justify-center mb-6"
                  >
                    <svg className="w-10 h-10 text-[#2A3490]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-[#111827]">Message Sent!</h3>
                  <p className="relative z-10 text-[#111827]/75 max-w-sm mb-8">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="relative z-10 rounded-full border border-[#2A3490]/25 hover:border-[#2A3490] px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#111827] hover:text-[#2A3490] transition-all"
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
                  className="relative px-9 py-12 sm:px-14 sm:py-14"
                >
                  <DeckledSheetBackdrop />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 relative z-20">
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
                        className="mt-8 flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3 relative z-10"
                      >
                        <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-red-900">Message not sent</p>
                          <p className="text-sm text-red-700">{msg}</p>
                        </div>
                        <button type="button" onClick={() => setStatus("idle")} aria-label="Dismiss" className="text-red-600 hover:text-red-900">
                          ✕
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                    <p className="text-[10px] text-[#111827]/55 max-w-[200px] leading-relaxed">
                      <a href="/terms" className="underline hover:text-[#2A3490] transition-colors">Terms &amp; Conditions</a>{" "}
                      apply to every engagement.
                    </p>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex items-center justify-center gap-2 rounded-full bg-[#2A3490] hover:bg-[#1E2670] px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
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
