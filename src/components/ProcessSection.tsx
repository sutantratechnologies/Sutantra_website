"use client";

import React, { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    id: "01",
    title: "DISCOVERY & STRATEGY",
    summary: "We learn your business, users and constraints before writing a line of code.",
    items: ["Requirements gathering", "Competitor analysis", "Technical feasibility review"],
    deliverable: "Project roadmap",
  },
  {
    id: "02",
    title: "DESIGN & PROTOTYPING",
    summary: "Ideas become clickable experiences you can test and approve early.",
    items: ["Wireframing & UX mapping", "High-fidelity UI design", "Interactive prototyping"],
    deliverable: "Approved prototype",
  },
  {
    id: "03",
    title: "DEVELOPMENT",
    summary: "Clean, modular engineering delivered in short, reviewable sprints.",
    items: ["Frontend & Backend engineering", "API integrations", "Scalable cloud architecture"],
    deliverable: "Working product builds",
  },
  {
    id: "04",
    title: "QA & TESTING",
    summary: "Every feature is stress-tested for bugs, speed and security.",
    items: ["Automated & manual testing", "Performance optimization", "Security auditing"],
    deliverable: "Test & audit report",
  },
  {
    id: "05",
    title: "LAUNCH & DEPLOYMENT",
    summary: "A smooth, zero-surprise release into production.",
    items: ["CI/CD pipeline setup", "Production deployment", "Post-launch monitoring"],
    deliverable: "Live product",
  },
  {
    id: "06",
    title: "SUPPORT & SCALE",
    summary: "We stay with you as usage grows and requirements evolve.",
    items: ["24/7 SLA-based support", "Feature enhancements", "Ongoing optimizations"],
    deliverable: "Growth & maintenance plan",
  },
];

const GAP = 16;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const target = useRef(0); // raw scroll progress 0..1
  const current = useRef(0); // smoothed progress
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cardW, setCardW] = useState(320);

  const n = processSteps.length;

  useEffect(() => {
    const measure = () => setCardW(window.innerWidth < 640 ? 260 : 320);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      target.current = Math.min(Math.max(-rect.top / scrollable, 0), 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let raf = 0;
    const tick = () => {
      // ease toward the target for a smooth, carousel-like glide
      current.current += (target.current - current.current) * 0.1;
      if (Math.abs(target.current - current.current) < 0.0005) {
        current.current = target.current;
      }
      const p = current.current;
      const shift = p * (n - 1) * (cardW + GAP);
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-shift}px,0,0)`;
      }
      setProgress(p);
      setActive(Math.round(p * (n - 1)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [cardW, n]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${100 + (n - 1) * 80}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Heading */}
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 mb-12 md:mb-16 flex items-end justify-between gap-6">
          <h2 className="max-w-xl text-4xl md:text-5xl font-black tracking-tight leading-tight text-[#0F172A]">
            Our approach to flawless projects
          </h2>
          <div className="hidden sm:block text-right shrink-0">
            <span className="text-5xl font-black text-[#2A3490] tabular-nums">
              {processSteps[active].id}
            </span>
            <span className="text-lg font-bold text-slate-400"> / {String(n).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Full-bleed carousel track */}
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-start will-change-transform"
            style={{
              gap: GAP,
              // aligns first card with the heading's left edge
              paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 2rem))",
              paddingRight: "1.5rem",
            }}
          >
            {processSteps.map((step, i) => {
              const isActive = i === active;
              return (
                <article
                  key={step.id}
                  className="shrink-0 transition-opacity duration-500"
                  style={{ width: cardW, opacity: i < active ? 0.45 : 1 }}
                >
                  {/* Header bar */}
                  <div
                    className={`h-16 px-5 flex items-center justify-between transition-colors duration-500 ${
                      isActive ? "bg-[#2A3490]" : "bg-[#E5E6E9]"
                    }`}
                  >
                    <h3
                      className={`text-[11px] sm:text-xs font-extrabold tracking-wider uppercase transition-colors duration-500 ${
                        isActive ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <span
                      className={`text-xs font-bold tabular-nums transition-colors duration-500 ${
                        isActive ? "text-white/60" : "text-slate-400"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="px-5 pt-6">
                    <p
                      className={`text-[13px] leading-relaxed mb-5 transition-colors duration-500 ${
                        isActive ? "text-slate-700" : "text-slate-400"
                      }`}
                    >
                      {step.summary}
                    </p>
                    <ul className="space-y-3">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-3 text-[13px] transition-colors duration-500 ${
                            isActive ? "text-slate-600" : "text-slate-400"
                          }`}
                        >
                          <span
                            className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500 ${
                              isActive ? "bg-orange-500" : "bg-slate-300"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`mt-6 inline-block border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${
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

        {/* Progress bar */}
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 mt-12 md:mt-16">
          <div className="h-[2px] w-full bg-[#E5E6E9]">
            <div
              className="h-full bg-[#2A3490]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}