"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface PhaseData {
  id: string;
  category: string;
  title: string;
  lead: string;
  details: string;
  deliverables: string[];
  teamInvolved: string;
}

const PHASES: PhaseData[] = [
  {
    id: "01",
    category: "FOUNDATION & ALIGNMENT",
    title: "Discovery and System Architecture",
    lead: "We analyze how your school, consultancy or enterprise actually operates before a single line of code is written.",
    details:
      "Our senior engineers audit your existing workflows, legacy paper forms, spreadsheets, and databases. We define the full technical roadmap, data schemas, API specifications, and budget milestones upfront to guarantee zero scope drift.",
    deliverables: ["Technical Architecture Specification", "Database Schema & Entity Map", "Fixed Timeline & Sprint Plan"],
    teamInvolved: "Lead Architect · Solutions Engineer · Product Strategist",
  },
  {
    id: "02",
    category: "INTERFACE & PROTOTYPING",
    title: "Clickable Prototypes and Design Tokens",
    lead: "Ideas transform into interactive, clickable prototypes you test and approve early — including complete brand design.",
    details:
      "We build your typography scales, color palettes, and component library in Figma first. Every critical user journey (admissions flow, admin ledger, student portal, checkout) is tested on mobile and desktop before front-end engineering begins.",
    deliverables: ["Interactive High-Fidelity Prototype", "Production Figma Design System", "User Journey & UX Wireframes"],
    teamInvolved: "UI/UX Designer · Creative Director · Frontend Architect",
  },
  {
    id: "03",
    category: "ENGINEERING & SPRINTS",
    title: "Modular Software Engineering",
    lead: "Clean, modular code delivered in bi-weekly reviewable sprints with direct senior developer communication.",
    details:
      "Next.js 16 web applications, cross-platform React Native mobile platforms, and bespoke ERP backends built with clean architecture, strict TypeScript types, automated unit tests, and secure role-based access control.",
    deliverables: ["Weekly Staging Environments", "Production-Ready Source Code", "Automated CI/CD Pipeline"],
    teamInvolved: "Senior Fullstack Engineers · Mobile Specialists · Database Architect",
  },
  {
    id: "04",
    category: "QUALITY & SECURITY",
    title: "Rigorous QA and Stress Testing",
    lead: "Every feature is validated on real devices, patchy connections, and simulated high-concurrency traffic.",
    details:
      "We perform cross-browser verification, database query profiling, automated regression testing, security permission audits, and edge-case simulation to guarantee lightning-fast load times and uncompromised stability under load.",
    deliverables: ["Security Audit Report", "Performance Optimization Benchmarks", "Cross-Device QA Sign-off"],
    teamInvolved: "QA Engineers · Security Specialist · Lead Developer",
  },
  {
    id: "05",
    category: "DEPLOYMENT & HANDOVER",
    title: "Zero-Downtime Launch and Data Migration",
    lead: "A smooth, zero-surprise production release — with your historical records and user accounts securely carried over.",
    details:
      "We manage server provisioning, domain DNS cutover, automated database migration, and hands-on staff training sessions. We remain on live stand-by during launch day to ensure zero operational interruptions.",
    deliverables: ["Live Production Deployment", "Historical Data Migration Verified", "Admin & Staff Handover Training"],
    teamInvolved: "DevOps Engineer · Lead Architect · Client Success Manager",
  },
  {
    id: "06",
    category: "SCALE & STEWARDSHIP",
    title: "Ongoing Support, Monitoring and Evolution",
    lead: "We remain your dedicated long-term software partner as user numbers, admissions, and transaction volumes scale.",
    details:
      "Continuous 24/7 uptime monitoring, automated off-site daily backups, security patch releases, performance tuning, and planned feature sprints as your business requirements expand over time.",
    deliverables: ["Guaranteed SLA Response Times", "Daily Automated Cloud Backups", "Quarterly Roadmap Iterations"],
    teamInvolved: "DevOps Engineer · Support Team · Senior Engineers",
  },
];

export default function ProcessSection() {
  const [activePhase, setActivePhase] = useState(0);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track active phase on natural scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActivePhase(index);
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    phaseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToPhase = (index: number) => {
    setActivePhase(index);
    const targetEl = phaseRefs.current[index];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="process"
      data-theme="light"
      className="py-24 sm:py-28 md:py-32 bg-white bg-[#FCFCFB] text-[#0F172A] border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2A3490]" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500 font-mono">
              Engineering Architecture & Delivery
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] uppercase leading-[1.02]">
            HOW WE BUILD <br />
            <span className="text-[#2A3490]">AND DELIVER SOFTWARE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A structured, transparent lifecycle engineered to eliminate ambiguity, ship working software early, and ensure every system is built to last.
          </p>
        </div>

        {/* 2-COLUMN SPLIT SCREEN (Left Sticky Diagram + Right Editorial Narrative) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Architecture / Flow Diagram (Hidden on small screens, desktop-only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 lg:top-36 z-20">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              
              {/* Diagram Header & Legend */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-[11px] font-mono text-slate-500">
                <span className="font-bold uppercase tracking-wider text-slate-400">
                  How Decisions Move
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-[2px] bg-[#2A3490] inline-block" />
                    <span>Active phase</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-[2px] border-t border-dashed border-slate-300 inline-block" />
                    <span>Feedback</span>
                  </span>
                </div>
              </div>

              {/* Diagram Tree Nodes Container */}
              <div className="pt-6 pb-2 flex flex-col items-center">
                
                {/* 1. Top Executive / Lead Architecture Node */}
                <div className="w-full max-w-[280px] p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center gap-2.5 shadow-2xs">
                  <span className="w-6 h-6 rounded-full bg-[#2A3490] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                    ST
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    Sutantra Technical Direction
                  </span>
                </div>

                {/* SVG Connecting Tree Line */}
                <div className="w-full flex justify-center py-2 relative">
                  <div className="w-[1.5px] h-6 bg-slate-200" />
                </div>

                {/* 2. Dual Coordinators Row (Split with red/blue highlights like the screenshot) */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  {/* Left Coordinator: Technical Architecture */}
                  <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-start gap-1.5 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#2A3490] text-[9px] font-bold flex items-center justify-center font-mono">
                        TA
                      </span>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Technical Architects
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">Design & Core Code</span>
                  </div>

                  {/* Right Coordinator: Client & Quality Ops */}
                  <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-start gap-1.5 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-orange-600 text-[9px] font-bold flex items-center justify-center font-mono">
                        CQ
                      </span>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Client Operations
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">Reviews & QA Sync</span>
                  </div>
                </div>

                {/* SVG Connecting Tree Line */}
                <div className="w-full flex justify-center py-2 relative">
                  <div className="w-[1.5px] h-6 bg-slate-200" />
                </div>

                {/* 3. The 6 Project Phases (Interactive List styled like reference diagram cards) */}
                <div className="w-full space-y-2">
                  {PHASES.map((phase, idx) => {
                    const isActive = idx === activePhase;
                    return (
                      <button
                        key={phase.id}
                        onClick={() => scrollToPhase(idx)}
                        className={`w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                          isActive
                            ? "bg-[#2A3490]/5 border-[#2A3490] shadow-sm"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span
                            className={`w-5 h-5 rounded-md text-[10px] font-mono font-bold flex items-center justify-center transition-colors ${
                              isActive
                                ? "bg-[#2A3490] text-white"
                                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                            }`}
                          >
                            {phase.id}
                          </span>
                          <span
                            className={`text-xs font-bold transition-colors truncate ${
                              isActive ? "text-[#2A3490]" : "text-slate-700"
                            }`}
                          >
                            {phase.title}
                          </span>
                        </div>

                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-full transition-colors shrink-0 ${
                            isActive
                              ? "bg-[#2A3490] text-white font-semibold"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          Phase {phase.id}
                        </span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Quick Help Prompt */}
              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Click any phase to navigate</span>
                <span className="text-[#2A3490] font-bold">100% In-House</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Narrative (Takes full width on mobile/tablet) */}
          <div className="w-full lg:col-span-7 space-y-20 lg:space-y-28">
            {PHASES.map((phase, index) => {
              const isActive = index === activePhase;
              return (
                <div
                  key={phase.id}
                  data-index={index}
                  ref={(el) => {
                    phaseRefs.current[index] = el;
                  }}
                  className={`scroll-mt-36 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* Category Eyebrow Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
                      Phase {phase.id} — {phase.category}
                    </span>
                  </div>

                  {/* Main Phase Title */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.08] mb-5">
                    {phase.title}
                  </h3>

                  {/* Lead Summary Paragraph */}
                  <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-6">
                    {phase.lead}
                  </p>

                  {/* Indented Callout Note with Vertical Bar (Exactly like reference image) */}
                  <div className="border-l-2 border-slate-300 pl-5 mb-8">
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {phase.details}
                    </p>
                  </div>

                  {/* Deliverables Checklist Chips */}
                  <div className="pt-4 border-t border-slate-200/70">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                      Phase Artifacts & Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {phase.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hairline Divider between steps (as shown in reference) */}
                  {index < PHASES.length - 1 && (
                    <div className="border-t border-slate-200/80 mt-16 sm:mt-20" />
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}