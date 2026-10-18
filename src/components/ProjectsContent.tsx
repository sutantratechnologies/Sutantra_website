"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ChevronDown,
  SlidersHorizontal,
  Check,
  Grid,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  RotateCcw,
  ArrowRight,
  Filter,
} from "lucide-react";
import { projects } from "@/data/projects";

interface CategoryOption {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: CategoryOption[] = [
  {
    id: "ALL WORK",
    label: "All Projects",
    shortLabel: "All Work",
    description: "Browse our entire portfolio across all domains",
    icon: Grid,
  },
  {
    id: "WEB APP",
    label: "Web Applications",
    shortLabel: "Web App",
    description: "Next-gen web platforms, dashboards & apps",
    icon: Globe,
  },
  {
    id: "MOBILE APP",
    label: "Mobile Applications",
    shortLabel: "Mobile App",
    description: "iOS & Android native & cross-platform apps",
    icon: Smartphone,
  },
  {
    id: "SAAS",
    label: "SaaS Platforms",
    shortLabel: "SaaS",
    description: "Enterprise software, tooling & management",
    icon: Layers,
  },
  {
    id: "AI",
    label: "AI & Smart Systems",
    shortLabel: "AI / ML",
    description: "Machine learning, AI agents & vision tech",
    icon: Sparkles,
  },
];

const matchesCategory = (project: (typeof projects)[0], categoryId: string) => {
  if (categoryId === "ALL WORK") return true;

  const tagsLower = project.tags.map((t) => t.toLowerCase());
  const techLower = (project.technologies || []).map((t) => t.toLowerCase());

  if (categoryId === "WEB APP") {
    // True web apps: has "web app", "sports platform", or is built with React/Next.js for web (not mobile-exclusive)
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
    // Specifically AI integration or AI in title/tags/tech without false matching "tailwind"
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Track sticky position
  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        setIsSticky(filterRef.current.getBoundingClientRect().top <= 73);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut listener: `/` or `Escape`
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
        if (searchQuery) {
          setSearchQuery("");
        }
      }
      if (
        event.key === "/" &&
        document.activeElement !== searchInputRef.current &&
        !["INPUT", "TEXTAREA"].includes(
          (document.activeElement?.tagName || "").toUpperCase()
        )
      ) {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchQuery]);

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

  // Filtered projects based on active category AND search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return (
        matchesCategory(project, activeCategory) &&
        matchesSearch(project, searchQuery)
      );
    });
  }, [activeCategory, searchQuery]);

  // Check how many matches exist across all categories when current category returns 0
  const totalMatchesAcrossAll = useMemo(() => {
    if (!searchQuery.trim()) return projects.length;
    return projects.filter((p) => matchesSearch(p, searchQuery)).length;
  }, [searchQuery]);

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

  // Adaptive styling classes for sticky vs non-sticky
  const barBgClass = isSticky
    ? "bg-[#2A3490]/90 backdrop-blur-xl border-white/15 text-white shadow-2xl"
    : "bg-white/95 backdrop-blur-xl border-slate-200 text-[#171717] shadow-sm";

  const searchInputBgClass = isSticky
    ? "bg-white/10 hover:bg-white/15 focus:bg-white/20 text-white placeholder-white/40 border-white/20 focus:border-white focus:ring-white/20"
    : "bg-slate-100 hover:bg-slate-200/60 focus:bg-white text-slate-900 placeholder-slate-400 border-slate-200 focus:border-[#2A3490] focus:ring-[#2A3490]/15";

  const searchIconClass = isSticky ? "text-white/60" : "text-slate-400";

  const dropdownBtnClass = isSticky
    ? isDropdownOpen
      ? "bg-white text-[#2A3490] border-transparent shadow-lg"
      : "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40"
    : isDropdownOpen
      ? "bg-[#2A3490] text-white border-transparent shadow-lg"
      : "bg-slate-100 hover:bg-slate-200/70 text-slate-800 border-slate-200 hover:border-slate-300";

  const dropdownMenuClass = isSticky
    ? "bg-[#1f2771]/98 border-white/20 text-white shadow-2xl"
    : "bg-white border-slate-200 text-slate-800 shadow-2xl";

  return (
    <>
      {/* Top Header - White Background */}
      <section className="pt-40 pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-6 text-[#171717]">
            OUR WORK.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl font-medium">
            Platforms, apps and brands we have designed and built — for sports associations, nonprofits, agencies and product teams.
          </p>
        </div>
      </section>

      {/* Filter Bar with Search & Category Dropdown */}
      <div
        ref={filterRef}
        className={`border-b sticky top-[72px] z-40 transition-colors duration-300 ${barBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-3.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
            {/* Left: Category Dropdown */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                type="button"
                id="category-filter-dropdown"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-label="Filter projects by category"
                className={`w-full sm:w-auto h-11 inline-flex items-center justify-between sm:justify-start gap-2.5 px-5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${dropdownBtnClass}`}
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 shrink-0" />
                  <span className="truncate">
                    {activeCategoryObj.shortLabel}
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu Popup */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    role="listbox"
                    aria-labelledby="category-filter-dropdown"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className={`absolute z-50 top-full left-0 mt-2 w-full sm:w-80 rounded-2xl p-2 backdrop-blur-2xl border shadow-2xl overflow-hidden ${dropdownMenuClass}`}
                  >
                    <div className="px-3 py-2 border-b border-black/5 dark:border-white/10 flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold tracking-widest uppercase opacity-60 flex items-center gap-1.5">
                        <SlidersHorizontal className="w-3 h-3" />
                        Filter By Category
                      </span>
                      <span className="text-[10px] opacity-60 font-medium">
                        {CATEGORIES.length} Categories
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 max-h-[340px] overflow-y-auto">
                      {CATEGORIES.map((cat) => {
                        const isSelected = activeCategory === cat.id;
                        const IconComponent = cat.icon;
                        const count = categoryCounts[cat.id] || 0;

                        return (
                          <button
                            key={cat.id}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setActiveCategory(cat.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 group cursor-pointer ${
                              isSelected
                                ? isSticky
                                  ? "bg-white text-[#2A3490] font-bold shadow-sm"
                                  : "bg-[#2A3490] text-white font-bold shadow-sm"
                                : isSticky
                                  ? "hover:bg-white/10 text-white/90"
                                  : "hover:bg-slate-100 text-slate-700"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? isSticky
                                      ? "bg-[#2A3490]/10 text-[#2A3490]"
                                      : "bg-white/20 text-white"
                                    : isSticky
                                      ? "bg-white/10 text-white/80 group-hover:bg-white/20"
                                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                                }`}
                              >
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs uppercase tracking-wide truncate">
                                  {cat.label}
                                </div>
                                <div
                                  className={`text-[10px] font-normal truncate ${
                                    isSelected
                                      ? isSticky
                                        ? "text-[#2A3490]/70"
                                        : "text-white/80"
                                      : isSticky
                                        ? "text-white/50"
                                        : "text-slate-400"
                                  }`}
                                >
                                  {cat.description}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  isSelected
                                    ? isSticky
                                      ? "bg-[#2A3490]/10 text-[#2A3490]"
                                      : "bg-white/20 text-white"
                                    : isSticky
                                      ? "bg-white/10 text-white/70"
                                      : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                {count}
                              </span>
                              {isSelected && (
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Search Bar (+ inline Reset button) */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <div className="relative w-full sm:w-72 md:w-80 lg:w-96">
                <div className="relative flex items-center">
                  <Search
                    className={`absolute left-3.5 w-4 h-4 pointer-events-none transition-colors ${searchIconClass}`}
                  />
                  <input
                    ref={searchInputRef}
                    type="text"
                    id="projects-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeCategory === "ALL WORK"
                        ? "Search all projects by name, tags, or tech..."
                        : `Search in ${activeCategoryObj.label}...`
                    }
                    aria-label={`Search projects in ${activeCategoryObj.label}`}
                    className={`w-full h-11 pl-10 pr-10 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 outline-none border focus:ring-4 ${searchInputBgClass}`}
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        searchInputRef.current?.focus();
                      }}
                      aria-label="Clear search query"
                      className={`absolute right-3 p-1 rounded-full transition-colors cursor-pointer ${
                        isSticky
                          ? "text-white/70 hover:text-white hover:bg-white/20"
                          : "text-slate-400 hover:text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <kbd
                      title="Press / to focus"
                      className={`hidden sm:inline-flex items-center justify-center absolute right-3 px-1.5 py-0.5 text-[10px] font-mono rounded border select-none pointer-events-none ${
                        isSticky
                          ? "border-white/20 text-white/40"
                          : "border-slate-300 text-slate-400"
                      }`}
                    >
                      /
                    </kbd>
                  )}
                </div>
              </div>

              {/* Reset button right next to search bar if filters are active */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  title="Reset all filters"
                  className={`h-11 inline-flex items-center gap-1.5 px-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                    isSticky
                      ? "text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
                      : "text-slate-600 hover:text-[#2A3490] hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Chips / Feedback Row */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-2.5 pt-2.5 border-t border-black/5 dark:border-white/10">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${
                  isSticky ? "text-white/60" : "text-slate-400"
                }`}
              >
                Active Filters:
              </span>

              {activeCategory !== "ALL WORK" && (
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide uppercase ${
                    isSticky
                      ? "bg-white/15 text-white border border-white/20"
                      : "bg-[#2A3490]/10 text-[#2A3490] border border-[#2A3490]/20"
                  }`}
                >
                  <Filter className="w-3 h-3" />
                  {activeCategoryObj.shortLabel}
                  <button
                    type="button"
                    onClick={() => setActiveCategory("ALL WORK")}
                    aria-label={`Remove ${activeCategoryObj.label} filter`}
                    className="hover:opacity-70 ml-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {searchQuery.trim().length > 0 && (
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide ${
                    isSticky
                      ? "bg-white/15 text-white border border-white/20"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  <Search className="w-3 h-3 opacity-60" />
                  &ldquo;{searchQuery}&rdquo;
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Remove search filter"
                    className="hover:opacity-70 ml-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid - Blue Background */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-[#2A3490] text-white flex-grow min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 md:py-24 px-6 text-center max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
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
                    &rdquo; in the{" "}
                    <span className="text-white font-semibold">
                      {activeCategoryObj.label}
                    </span>{" "}
                    category.
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

              {/* Suggestion to search across all if matches exist elsewhere */}
              {searchQuery &&
                activeCategory !== "ALL WORK" &&
                totalMatchesAcrossAll > 0 && (
                  <div className="mb-6 p-4 rounded-2xl bg-white/10 border border-white/20 text-xs text-white/90">
                    <p className="font-semibold mb-2">
                      💡 Found {totalMatchesAcrossAll} matching project
                      {totalMatchesAcrossAll !== 1 ? "s" : ""} in other
                      categories.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveCategory("ALL WORK")}
                      className="px-4 py-2 rounded-xl bg-white text-[#2A3490] font-bold uppercase tracking-wider text-[10px] hover:bg-white/90 transition-all cursor-pointer shadow-md inline-flex items-center gap-1.5"
                    >
                      Search All Projects ({totalMatchesAcrossAll})
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}

              <div className="flex flex-wrap items-center justify-center gap-3">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="px-5 py-2.5 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Clear Search Query
                  </button>
                )}
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="px-6 py-2.5 rounded-full bg-white text-[#2A3490] text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all cursor-pointer shadow-lg inline-flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset All Filters
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            /* Projects Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group relative cursor-pointer block h-full"
                    >
                      {/* Image Container with Glassmorphism Effect */}
                      <div className="p-2 md:p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20 group-hover:bg-white/10">
                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/20">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Top-right year/client badge */}
                          {project.year && (
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white tracking-widest uppercase">
                              {project.year}
                            </div>
                          )}

                          {/* Tags inside image */}
                          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold tracking-wide text-white shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Title and Description under image */}
                      <div className="mt-6 md:pr-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-4">
                            <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                              {project.title}
                            </h2>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/50 group-hover:text-white group-hover:border-white group-hover:bg-white/10 group-hover:translate-x-1 transition-all">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>

                          <p className="text-white/60 text-sm mt-3 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies preview chips */}
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="mt-4 flex flex-wrap items-center gap-1.5">
                              {project.technologies.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] font-medium text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 4 && (
                                <span className="text-[10px] text-white/40">
                                  +{project.technologies.length - 4} more
                                </span>
                              )}
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
