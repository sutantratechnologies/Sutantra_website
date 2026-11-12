"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate, useReducedMotion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What kind of projects do you take on?",
    answer: "Websites and web apps, Android and iOS mobile apps, brand and graphic design, and custom management software — especially school, college, consultancy and small-business systems. If your work runs on registers, spreadsheets and WhatsApp messages today, that is usually a good place to start.",
  },
  {
    id: 2,
    question: "Do you build school management software from scratch?",
    answer: "Yes. We map your admissions process, fee structure, attendance rules, exam pattern and reporting requirements, then build a system around them. Modules can be added in phases, so you are not paying for the whole platform on day one.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer: "A business website usually takes 3–5 weeks, a mobile app 8–12 weeks, and a custom management system 2–4 months depending on modules. You get a written timeline with milestones before work starts — and regular working builds to review, not one big reveal at the end.",
  },
  {
    id: 4,
    question: "What happens after launch?",
    answer: "You get training, documentation and admin access so your team can run the system. We also offer ongoing support covering backups, updates, monitoring, and new features as your needs change.",
  },
  {
    id: 5,
    question: "Can you work with our existing website or records?",
    answer: "Usually, yes. We migrate data from spreadsheets, older databases or another platform, and we can build around an existing website or app instead of replacing everything. We will tell you honestly if a rebuild is the cheaper option.",
  },
  {
    id: 6,
    question: "Who owns the code and the data?",
    answer: "You do. On final payment the code and content built for you are yours, and your data stays in your accounts. Our internal libraries and tooling remain ours, but nothing about your business is locked behind us.",
  },
];

function WallNail() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center"
    >
      {/* Cast shadow on wall */}
      <span className="absolute top-2.5 left-1 w-4 h-4 rounded-full bg-[#111827]/20 blur-[1px]" />
      {/* Steel nail head */}
      <span className="relative z-10 w-4 h-4 rounded-full bg-[#111827] ring-2 ring-[#2A3490]/50 shadow-sm flex items-start justify-start p-[3px]">
        <span className="w-1.5 h-1.5 rounded-full bg-white/45" />
      </span>
    </div>
  );
}

function ScrollCords() {
  return (
    <div aria-hidden="true" className="relative z-0 w-full h-16 sm:h-20 -mb-2">
      {/* V-shaped hanging cords */}
      <svg
        viewBox="0 0 800 80"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible block"
      >
        <line
          x1="402"
          y1="14"
          x2="122"
          y2="80"
          stroke="rgba(17,24,39,0.12)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="402"
          y1="14"
          x2="682"
          y2="80"
          stroke="rgba(17,24,39,0.12)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="400"
          y1="10"
          x2="120"
          y2="80"
          stroke="#111827"
          strokeWidth="2.25"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="400"
          y1="10"
          x2="680"
          y2="80"
          stroke="#111827"
          strokeWidth="2.25"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Cord Loop Wrapped Around Nail */}
      <span className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#111827]" />

      {/* Attachment Rings on Top Roller */}
      <span className="absolute bottom-0 left-[15%] -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#2A3490] border-2 border-[#111827] z-20" />
      <span className="absolute bottom-0 right-[15%] translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#2A3490] border-2 border-[#111827] z-20" />
    </div>
  );
}

function ScrollRoller({ label }: { label?: string }) {
  return (
    <div aria-hidden="true" className="relative z-10 w-full flex items-center">
      {/* Left Finial Handle */}
      <div className="flex items-center shrink-0">
        <div className="w-3.5 sm:w-4 h-7 sm:h-8 rounded-l-full bg-[#111827] border border-[#111827] shadow-sm" />
        <div className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#1C246B]" />
      </div>

      {/* Main Cylindrical Roller */}
      <div className="relative flex-1 h-9 sm:h-11 rounded-full bg-gradient-to-b from-[#3E4AB8] via-[#2A3490] to-[#1A2266] shadow-[0_8px_20px_-6px_rgba(17,24,39,0.45)] border border-[#111827]/25 flex items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-x-4 top-1.5 h-1 rounded-full bg-white/15" />

        <div className="relative z-10 h-full px-5 sm:px-7 bg-[#111827] flex items-center justify-center border-x border-white/10">
          {label ? (
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/90">
              {label}
            </span>
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          )}
        </div>
      </div>

      {/* Right Finial Handle */}
      <div className="flex items-center shrink-0">
        <div className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#1C246B]" />
        <div className="w-3.5 sm:w-4 h-7 sm:h-8 rounded-r-full bg-[#111827] border border-[#111827] shadow-sm" />
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const prefersReducedMotion = useReducedMotion();
  const clickSwing = useMotionValue(0);
  const swingAnimRef = useRef<ReturnType<typeof animate> | null>(null);

  const triggerPendulum = (dir: number, strength: number) => {
    if (prefersReducedMotion) return;
    swingAnimRef.current?.stop();
    const peak = dir * strength;
    swingAnimRef.current = animate(
      clickSwing,
      [clickSwing.get(), peak, -peak * 0.58, peak * 0.28, -peak * 0.1, 0],
      { duration: 1.9, ease: "easeOut" }
    );
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offset = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dir = offset >= 0 ? -1 : 1;
    const strength = 1.1 + Math.min(Math.abs(offset), 1) * 1.3;
    triggerPendulum(dir, strength);
  };

  const handleHoverGust = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const fromLeft = e.clientX < rect.left + rect.width / 2;
    triggerPendulum(fromLeft ? 1 : -1, 0.75);
  };

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      data-theme="light"
      className="py-24 md:py-32 bg-[#EEF1F7] text-[#111827] border-t border-[#2A3490]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tight uppercase leading-[1] text-[#111827]">
              FREQUENTLY <br /> <span className="text-[#2A3490]">ASKED QUESTIONS</span>
            </h2>
            <p className="text-[#111827]/65 text-xs md:text-sm max-w-2xl mx-auto mt-6">
              Straight answers about timelines, ownership, support and how we build custom systems.
            </p>
          </div>

          {/* Open Deckled Scroll Hanging on Nail */}
          <div className="relative w-full">
            {/* Fixed Nail in the Wall */}
            <WallNail />

            {/* Ambient Wind Sway Layer */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { rotate: [0, 0.55, -0.3, 0.45, -0.5, 0] }
              }
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "50% 8px" }}
              className="w-full"
            >
              {/* Interactive Click / Breeze Impulse Layer */}
              <motion.div
                onClick={handleScrollClick}
                onMouseEnter={handleHoverGust}
                style={{ rotate: clickSwing, transformOrigin: "50% 8px" }}
                className="w-full will-change-transform"
              >
                <ScrollCords />
                <ScrollRoller label="FAQs" />

            {/* Drop-shadow wrapper follows the deckled zigzag edges */}
            <div className="mx-4 sm:mx-8 drop-shadow-[0_14px_28px_rgba(17,24,39,0.14)]">
              <div className="relative paper-deckled-mask paper-sheet-surface">
                {/* Fine paper grain texture */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply paper-grain-overlay"
                />

                {/* Top paper curl shadow under roller */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none relative z-10 h-6 w-full bg-gradient-to-b from-[#111827]/15 via-[#2A3490]/5 to-transparent"
                />

                <div className="relative z-10 px-7 sm:px-12 pb-3">
                  {faqs.map((faq, idx) => (
                    <div
                      key={faq.id}
                      className={
                        idx < faqs.length - 1
                          ? "border-b border-[#2A3490]/15"
                          : ""
                      }
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className={`w-full flex items-center justify-between py-5 sm:py-6 px-3 sm:px-4 rounded-xl transition-colors duration-200 cursor-pointer ${
                          openId === faq.id
                            ? "bg-white/60"
                            : "hover:bg-white/35"
                        }`}
                      >
                        <div className="flex items-baseline gap-3 sm:gap-4 text-left">
                          <span className="text-xs font-mono font-bold text-[#2A3490] shrink-0">
                            0{faq.id}
                          </span>
                          <span className="text-sm md:text-base font-bold text-[#111827]">
                            {faq.question}
                          </span>
                        </div>

                        <motion.div
                          animate={{ rotate: openId === faq.id ? 45 : 0 }}
                          transition={{ duration: 0.25, ease: "anticipate" }}
                          className="flex-shrink-0 ml-4 text-[#2A3490] font-light text-2xl leading-none"
                        >
                          +
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {openId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 pb-6 px-3 sm:px-4 pl-10 sm:pl-12 text-sm md:text-base text-[#111827]/75 max-w-3xl leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Bottom paper curl shadow above roller */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none relative z-10 h-6 w-full bg-gradient-to-t from-[#111827]/15 via-[#2A3490]/5 to-transparent"
                />
              </div>
            </div>

                <ScrollRoller />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
