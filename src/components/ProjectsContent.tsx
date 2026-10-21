"use client";

import React, { useState, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, RotateCcw } from "lucide-react";
import { projects } from "@/data/projects";

interface CategoryOption {
  id: string;
  label: string;
  shortLabel: string;
}

const CATEGORIES: CategoryOption[] = [
  { id: "ALL WORK", label: "All Projects", shortLabel: "All Work" },
  { id: "WEB APP", label: "Web Applications", shortLabel: "Web Apps" },
  { id: "MOBILE APP", label: "Mobile Applications", shortLabel: "Mobile Apps" },
  { id: "SAAS", label: "SaaS Platforms", shortLabel: "SaaS" },
  { id: "AI", label: "AI & Smart Systems", shortLabel: "AI / ML" },
];

const matchesCategory = (project: (typeof projects)[0], categoryId: string) => {
  if (categoryId === "ALL WORK") return true;

  const tagsLower = project.tags.map((t) => t.toLowerCase());
  const techLower = (project.technologies || []).map((t) => t.toLowerCase());

  if (categoryId === "WEB APP") {
    const isMobileExclusive =
      tagsLower.includes("mobile app") && !tagsLower.includes("web app");
    if (isMobileExclusive) return false;
    return (
      tagsLower.some((t) =>
        ["web app", "sports platform", "league management"].includes(t)
      ) ||
      techLower.some(
        (t) =>
          t === "next.js" ||
          (t === "react" && !techLower.includes("react native"))
      )
    );
  }

  if (categoryId === "MOBILE APP") {
    return (
      tagsLower.some((t) => t.includes("mobile") || t === "game") ||
      techLower.some(
        (t) => t.includes("react native") || t.includes("mobile")
      )
    );
  }

  if (categoryId === "SAAS") {
    return (
      tagsLower.some((t) =>
        [
          "saas",
          "agency management",
          "career tools",
          "resume builder",
        ].includes(t)
      ) || (project.description || "").toLowerCase().includes("saas")
    );
  }

  if (categoryId === "AI") {
    return (
      tagsLower.some(
        (t) =>
          t === "ai" ||
          t.startsWith("ai ") ||
          t.endsWith(" ai") ||
          t.includes("ai integration") ||
          t.includes("artificial intelligence")
      ) ||
      techLower.some(
        (t) =>
          t.toLowerCase().includes("ai image") ||
          t.toLowerCase().includes("ai recognition") ||
          t.toLowerCase().includes("ai integration")
      ) ||
      (project.description || "").toLowerCase().includes("ai species")
    );
  }

  return false;
};

const matchesSearch = (project: (typeof projects)[0], query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const searchableFields = [
    project.title,
    project.description,
    project.fullDescription || "",
    project.theProblem || "",
    project.whatWeDid || "",
    project.theResult || "",
    project.client || "",
    project.year || "",
    ...project.tags,
    ...(project.technologies || []),
  ].map((s) => s.toLowerCase());

  return searchableFields.some((field) => field.includes(q));
};

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("ALL WORK");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((cat) => {
      counts[cat.id] = projects.filter((p) =>
        matchesCategory(p, cat.id)
      ).length;
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return (
        matchesCategory(project, activeCategory) &&
        matchesSearch(project, searchQuery)
      );
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryObj = useMemo(() => {
    return (
      CATEGORIES.find((cat) => cat.id === activeCategory) || CATEGORIES[0]
    );
  }, [activeCategory]);

  const resetAllFilters = () => {
    setActiveCategory("ALL WORK");
    setSearchQuery("");
    searchInputRef.current?.focus();
  };

  const hasActiveFilters =
    activeCategory !== "ALL WORK" || searchQuery.trim().length > 0;

  return (
    <>
      {/* Top Header */}
      <section className="pt-36 sm:pt-40 pb-12 sm:pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-5 text-[#171717]">
            OUR WORK.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black/60 max-w-2xl font-medium leading-relaxed">
            Platforms, apps and brands we have designed and built — for sports associations, nonprofits, agencies and product teams.
          </p>
        </div>
      </section>

      {/* Projects Showcase Section (Blue Canvas) */}
      <section className="pt-10 pb-24 md:pb-28 px-6 md:px-16 bg-[#2A3490] text-white flex-grow min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {/* Sleek Filter Tabs & Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-12 sm:mb-16 pb-8 border-b border-white/15">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                const count = categoryCounts[cat.id] || 0;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`group px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "bg-white text-[#2A3490] shadow-md scale-[1.02]"
                        : "bg-white/10 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span>{cat.shortLabel}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                        isSelected
                          ? "bg-[#2A3490]/10 text-[#2A3490]"
                          : "bg-white/10 text-white/60 group-hover:text-white"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Minimalist Search Bar */}
            <div className="relative w-full lg:w-72 sm:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                aria-label="Search projects"
                className="w-full h-10 sm:h-11 pl-10 pr-9 rounded-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-white text-white placeholder-white/50 text-xs sm:text-sm font-medium outline-none transition-all shadow-inner focus:ring-2 focus:ring-white/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    searchInputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-white/60 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 md:py-24 px-6 text-center max-w-xl mx-auto bg-white/5 border border-white/10 rounded-3xl shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 text-white/80">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-3">
                No Projects Found
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                {searchQuery ? (
                  <>
                    We couldn&apos;t find any projects matching &ldquo;
                    <span className="text-white font-semibold">
                      {searchQuery}
                    </span>
                    &rdquo; in{" "}
                    <span className="text-white font-semibold">
                      {activeCategoryObj.label}
                    </span>
                    .
                  </>
                ) : (
                  <>
                    There are currently no projects in the{" "}
                    <span className="text-white font-semibold">
                      {activeCategoryObj.label}
                    </span>{" "}
                    category.
                  </>
                )}
              </p>

              <button
                type="button"
                onClick={resetAllFilters}
                className="px-6 py-2.5 rounded-full bg-white text-[#2A3490] text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            </motion.div>
          ) : (
            /* Frameless Projects Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block h-full cursor-pointer"
                    >
                      {/* Frameless Showcase Image */}
                      <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/20 shadow-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Top-Right Year Pill */}
                        {project.year && (
                          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white tracking-widest uppercase">
                            {project.year}
                          </div>
                        )}

                        {/* Bottom Tags Inside Image */}
                        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold tracking-wide text-white shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content Below Image */}
                      <div className="mt-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-4">
                            <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {project.title}
                            </h2>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/50 group-hover:text-white group-hover:border-white group-hover:bg-white/10 group-hover:translate-x-1 transition-all">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>

                          <p className="text-white/60 text-sm mt-2.5 leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies Preview Chips */}
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] font-medium text-white/60 bg-white/5 px-2.5 py-1 rounded border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
