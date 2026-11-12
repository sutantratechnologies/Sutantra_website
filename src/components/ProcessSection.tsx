"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

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
      className="py-24 sm:py-28 md:py-32 bg-[#EEF1F7] text-[#111827] border-t border-[#2A3490]/10"
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
          
          {/* LEFT COLUMN: Sticky Phase Roadmap & Live Progress (Hidden on small screens, desktop-only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24 lg:top-28 z-20">
            <div className="rounded-3xl border border-white/10 bg-[#2A3490] text-white p-5 sm:p-6 shadow-xl relative overflow-hidden">
              {/* Top Progress Header */}
              <div className="flex items-center justify-between gap-4 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/75 block">
                    Delivery Roadmap
                  </span>
                  <span className="text-xs font-bold text-white mt-0.5 block">
                    Phase 0{activePhase + 1} of 0{PHASES.length}
                  </span>
                </div>
                <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-mono font-bold text-white">
                  {Math.round(((activePhase + 1) / PHASES.length) * 100)}%
                </span>
              </div>

              {/* Smooth Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden mb-4">
                <div
                  className="h-full rounded-full bg-white transition-all duration-500 ease-out"
                  style={{ width: `${((activePhase + 1) / PHASES.length) * 100}%` }}
                />
              </div>

              {/* Connected Vertical Phase Stepper */}
              <div className="relative pl-5 space-y-1.5 before:content-[''] before:absolute before:left-[7px] before:top-4 before:bottom-4 before:w-[1.5px] before:bg-white/20">
                {PHASES.map((phase, idx) => {
                  const isActive = idx === activePhase;
                  const isCompleted = idx < activePhase;
                  return (
                    <button
                      key={phase.id}
                      type="button"
                      onClick={() => scrollToPhase(idx)}
                      className={`relative w-full text-left px-3 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer group ${
                        isActive
                          ? "bg-white border-white text-[#2A3490] shadow-md"
                          : "bg-white/5 border-transparent hover:bg-white/10 text-white"
                      }`}
                    >
                      {/* Stepper Node on Vertical Rail */}
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[21px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                          isActive
                            ? "bg-white border-[#2A3490] ring-2 ring-white"
                            : isCompleted
                            ? "bg-white border-white"
                            : "bg-[#2A3490] border-white/40 group-hover:border-white"
                        }`}
                      />

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`text-[11px] font-mono font-bold shrink-0 ${
                              isActive ? "text-[#2A3490]" : "text-white/60"
                            }`}
                          >
                            {phase.id}
                          </span>
                          <span className={`text-xs font-bold truncate ${isActive ? "text-[#2A3490]" : "text-white"}`}>
                            {phase.title}
                          </span>
                        </div>
                        <span
                          className={`text-[9px] font-mono uppercase tracking-wider shrink-0 ${
                            isActive ? "text-[#2A3490] font-bold" : isCompleted ? "text-white/70" : "text-white/45"
                          }`}
                        >
                          {isActive ? "Active" : isCompleted ? "Done" : "Next"}
                        </span>
                      </div>

                      {isActive && (
                        <p className="mt-1.5 pt-1.5 border-t border-[#2A3490]/15 text-[10px] font-mono text-[#2A3490]/80 truncate">
                          {phase.teamInvolved}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Footer Strip */}
              <div className="pt-3.5 mt-3.5 border-t border-white/15 flex items-center justify-between text-[11px] font-mono">
                <span className="text-white/60">100% In-House Team</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-bold text-white hover:text-orange-400 transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
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
                  } ${
                    index === PHASES.length - 1
                      ? "lg:min-h-[435px] lg:flex lg:flex-col lg:justify-between"
                      : ""
                  }`}
                >
                  <div>
                    {/* Category Eyebrow Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300 ${
                        isActive ? "text-[#2A3490]" : "text-slate-400"
                      }`}
                    >
                      Phase {phase.id} — {phase.category}
                    </span>
                  </div>

                  {/* Main Phase Title */}
                  <h3
                    className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] mb-5 transition-colors duration-300 ${
                      isActive ? "text-[#2A3490]" : "text-[#0F172A]"
                    }`}
                  >
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2A3490] shrink-0" />
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