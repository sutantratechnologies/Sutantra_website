"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const processSteps = [
  {
    id: "01",
    title: "DISCOVERY & STRATEGY",
    summary: "We learn how your school, consultancy or business actually runs before writing a line of code.",
    items: ["Workflow & form mapping", "Requirements gathering", "Scope & budget review"],
    deliverable: "Project roadmap",
  },
  {
    id: "02",
    title: "DESIGN & PROTOTYPING",
    summary: "Ideas become clickable screens you can test and approve early — including your brand language.",
    items: ["Wireframing & UX mapping", "Brand & UI design", "Interactive prototyping"],
    deliverable: "Approved prototype",
  },
  {
    id: "03",
    title: "DEVELOPMENT",
    summary: "Clean, modular engineering delivered in short, reviewable sprints.",
    items: ["Web & mobile engineering", "Payments & SMS integrations", "Roles, permissions & reporting"],
    deliverable: "Working product builds",
  },
  {
    id: "04",
    title: "QA & TESTING",
    summary: "Every feature is tested on real data, real devices and slow connections.",
    items: ["Manual & automated testing", "Performance optimization", "Access & security review"],
    deliverable: "Test & audit report",
  },
  {
    id: "05",
    title: "LAUNCH & DEPLOYMENT",
    summary: "A smooth, zero-surprise release — with your old records carried across.",
    items: ["Data migration & import", "Staff training & handover", "Production deployment"],
    deliverable: "Live product",
  },
  {
    id: "06",
    title: "SUPPORT & SCALE",
    summary: "We stay with you as usage grows and requirements evolve.",
    items: ["Support & monitoring", "Backups & updates", "New features as you grow"],
    deliverable: "Growth & maintenance plan",
  },
];

const GAP = 20;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const target = useRef(0); // raw scroll progress 0..1
  const current = useRef(0); // smoothed progress
  const maxShiftRef = useRef(0);
  const [active, setActive] = useState(0);

  const n = processSteps.length;

  // Measure shift required so the last card aligns with the right end width of the container
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const clientW = window.innerWidth;
    const cards = track.children;
    if (!cards || cards.length === 0) return;

    const firstCard = cards[0] as HTMLElement;
    const lastCard = cards[cards.length - 1] as HTMLElement;

    const leftPad = firstCard.offsetLeft;
    const rightEdge = lastCard.offsetLeft + lastCard.offsetWidth;

    // Shift so last card's right edge aligns with (clientW - leftPad), i.e. symmetric padding
    const maxShift = Math.max(0, rightEdge + leftPad - clientW);
    maxShiftRef.current = maxShift;
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    const timer = setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(timer);
    };
  }, [measure]);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      target.current = Math.min(Math.max(-rect.top / scrollable, 0), 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let raf = 0;
    const tick = () => {
      // ease toward the target for a smooth, carousel-like glide
      current.current += (target.current - current.current) * 0.15;
      if (Math.abs(target.current - current.current) < 0.0004) {
        current.current = target.current;
      }
      const p = current.current;
      const shift = p * maxShiftRef.current;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-shift}px,0,0)`;
      }
      setActive(Math.min(n - 1, Math.round(p * (n - 1))));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [n]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${100 + (n - 1) * 80}vh` }}
    >
      <div className="sticky top-0 h-screen py-20 md:py-28 flex flex-col justify-between overflow-hidden select-none">
        {/* Heading */}
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 mb-6 md:mb-8 flex items-end justify-between gap-6 shrink-0">
          <h2 className="max-w-xl text-4xl md:text-5xl font-black tracking-tight leading-tight text-[#0F172A]">
            From first conversation to go-live
          </h2>
          <div className="hidden sm:block text-right shrink-0">
            <span className="text-5xl font-black text-[#2A3490] tabular-nums">
              {processSteps[active].id}
            </span>
            <span className="text-lg font-bold text-slate-400"> / {String(n).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Full-bleed carousel track */}
        <div className="w-full overflow-hidden my-auto">
          <div
            ref={trackRef}
            className="flex items-start will-change-transform"
            style={{
              gap: GAP,
              // aligns first card with the heading's left edge and last card with right container edge
              paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 2rem))",
              paddingRight: "max(1.5rem, calc((100vw - 80rem) / 2 + 2rem))",
            }}
          >
            {processSteps.map((step, i) => {
              const isActive = i === active;
              return (
                <article
                  key={step.id}
                  className={`shrink-0 transition-all duration-500 rounded-2xl overflow-hidden border ${
                    isActive ? "border-[#2A3490] shadow-lg" : "border-slate-200"
                  }`}
                  style={{
                    width: "clamp(300px, 85vw, 520px)",
                    opacity: i < active ? 0.45 : 1,
                  }}
                >
                  {/* Header bar */}
                  <div
                    className={`h-20 px-6 flex items-center justify-between transition-colors duration-500 ${
                      isActive ? "bg-[#2A3490]" : "bg-[#E5E6E9]"
                    }`}
                  >
                    <h3
                      className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-colors duration-500 ${
                        isActive ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <span
                      className={`text-sm sm:text-base font-bold tabular-nums transition-colors duration-500 ${
                        isActive ? "text-white/60" : "text-slate-400"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="px-6 pt-8 pb-10">
                    <p
                      className={`text-sm sm:text-base leading-relaxed mb-6 transition-colors duration-500 ${
                        isActive ? "text-slate-700" : "text-slate-400"
                      }`}
                    >
                      {step.summary}
                    </p>
                    <ul className="space-y-4">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-3 text-sm sm:text-base transition-colors duration-500 ${
                            isActive ? "text-slate-600" : "text-slate-400"
                          }`}
                        >
                          <span
                            className={`mt-[7px] h-2 w-2 shrink-0 rounded-full transition-colors duration-500 ${
                              isActive ? "bg-orange-500" : "bg-slate-300"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`mt-8 inline-block border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-500 rounded-md ${
                        isActive
                          ? "border-[#2A3490] text-[#2A3490]"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      Output: {step.deliverable}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}