"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      data-theme="light"
      className="py-24 md:py-32 bg-[#EEF1F7] text-[#111827] border-t border-[#2A3490]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Bold Charcoal Showcase Container */}
        <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#111827] text-white p-7 sm:p-10 md:p-14 shadow-2xl">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/15">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/90">
                  Featured Work · 0{projects.length} Shipped Builds
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] text-white">
                Make your next <br />
                move digital.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/75 max-w-xl leading-relaxed">
                Websites, mobile applications, and custom software built around real workflows — explore what we&apos;ve shipped.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#2A3490] hover:bg-[#111827] hover:text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200"
              >
                <span>Discuss Your Idea</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Interactive 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-10 items-stretch">
            {/* Left: Project Selector List */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full text-left rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                      isActive
                        ? "bg-white text-[#111827] border-white shadow-md"
                        : "bg-[#1F2773]/60 text-white border-white/10 hover:bg-[#1F2773] hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`text-xs font-mono font-bold shrink-0 ${
                          isActive ? "text-[#2A3490]" : "text-white/50"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-extrabold tracking-tight truncate">
                          {project.title}
                        </h3>
                        <p
                          className={`text-[11px] font-mono uppercase tracking-wider mt-0.5 truncate ${
                            isActive ? "text-[#2A3490]/80" : "text-white/55"
                          }`}
                        >
                          {project.tags[0]} · {project.year}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isActive
                          ? "text-[#2A3490] translate-x-0.5 -translate-y-0.5"
                          : "text-white/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Active Project Preview Stage */}
            <div className="lg:col-span-7 flex flex-col rounded-2xl sm:rounded-3xl bg-[#1A2266] border border-white/15 overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-[#111827] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.slug}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2266] via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <span className="absolute top-4 left-4 z-10 rounded-full bg-[#111827]/85 backdrop-blur-sm border border-white/15 px-3.5 py-1 text-[10px] font-mono uppercase tracking-widest text-white">
                  {activeProject.client}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 flex-1">
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
                    {activeProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projects/${activeProject.slug}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#2A3490] hover:bg-[#111827] hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-widest shrink-0 transition-colors duration-200"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
