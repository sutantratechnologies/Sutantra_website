"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = ["ALL WORK", "WEB APP", "MOBILE APP", "SAAS", "AI"];

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("ALL WORK");
  const [isSticky, setIsSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        // It's sticky when its top reaches the sticky offset (72px)
        setIsSticky(filterRef.current.getBoundingClientRect().top <= 73);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "ALL WORK") return true;
    
    const tagsLower = project.tags.map((t) => t.toLowerCase());
    const hasTag = (searchTags: string[]) => 
      searchTags.some((searchTag) => tagsLower.some((t) => t.includes(searchTag)));
    
    if (activeCategory === "WEB APP") return hasTag(["web app", "react", "next", "sports platform"]);
    if (activeCategory === "MOBILE APP") return hasTag(["mobile app", "game"]);
    if (activeCategory === "SAAS") return hasTag(["saas", "agency management", "career tools", "resume builder"]);
    if (activeCategory === "AI") return hasTag(["ai integration"]);
    
    return false;
  });

  const textMuted = isSticky ? "text-white/70" : "text-[#2A3490]/70";
  const borderColor = isSticky ? "border-white/10" : "border-[#2A3490]/20";

  return (
    <>
      {/* Top Header - White Background */}
      <section className="pt-40 pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-6 text-[#171717]">
            OUR WORK.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl font-medium">
            Browse our portfolio of digital products, web applications, and mobile solutions.
          </p>
        </div>
      </section>

      {/* Filter Bar - Glassmorphism Background */}
      <div 
        ref={filterRef}
        className={`backdrop-blur-md border-b sticky top-[72px] z-40 transition-colors duration-300 ${borderColor}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div data-lenis-prevent="true" className="flex flex-row items-center gap-4 md:gap-8 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <span className={`${textMuted} text-xs font-bold tracking-widest uppercase hidden md:block whitespace-nowrap transition-colors duration-300`}>
              FILTER
            </span>
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                
                // Dynamic colors for pills based on isSticky and isActive
                const btnStyle = isActive
                  ? isSticky 
                    ? "bg-white text-[#2A3490] border-transparent" 
                    : "bg-[#2A3490] text-white border-transparent"
                  : isSticky
                    ? "bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
                    : "bg-transparent text-[#2A3490] border-[#2A3490]/30 hover:border-[#2A3490] hover:bg-[#2A3490]/10";

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${btnStyle}`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <div className={`${textMuted} text-xs font-bold tracking-widest uppercase w-full md:w-auto text-center md:text-right whitespace-nowrap transition-colors duration-300`}>
            {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? 'S' : ''}
          </div>
        </div>
      </div>

      {/* Projects Grid - Blue Background */}
      <section className="py-24 px-6 md:px-16 bg-[#2A3490] text-white flex-grow min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white/50">No projects found in this category.</h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group relative cursor-pointer block"
                >
                  {/* Image Container with Glassmorphism Effect */}
                  <div className="p-2 md:p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Tags inside image */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold tracking-wide text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description under image */}
                  <div className="mt-6 md:pr-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-3 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
