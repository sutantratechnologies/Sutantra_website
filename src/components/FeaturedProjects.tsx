"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const maxShiftRef = useRef(0);

  const [active, setActive] = useState(0);

  // Exactly 4 projects only
  const featuredList = projects.slice(0, 4);
  const totalCards = featuredList.length;

  // Shift required so the last card aligns with the right end width of the container
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

    // Shift to position last card's right edge at (clientW - leftPad), aligning to right end width
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

  // Sync scroll position with horizontal translation
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      targetProgress.current = Math.min(Math.max(-rect.top / scrollable, 0), 1);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let rafId = 0;
    const tick = () => {
      // Smooth interpolation toward target for fluid glide
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.18;
      if (Math.abs(targetProgress.current - currentProgress.current) < 0.0004) {
        currentProgress.current = targetProgress.current;
      }
      const p = currentProgress.current;
      const shift = p * maxShiftRef.current;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-shift}px, 0, 0)`;
      }

      const activeIdx = Math.min(totalCards - 1, Math.round(p * (totalCards - 1)));
      setActive(activeIdx);

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [totalCards]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#2A3490] text-white"
      style={{ height: `${100 + (totalCards - 1) * 75}vh` }}
    >
      {/* Sticky viewport container with top padding to clear fixed navbar */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 md:pb-10 overflow-hidden select-none">

        {/* Subtle white ambient background lights (no colors) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl"
        />

        {/* Top Header - safely cleared below fixed navbar */}
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 flex items-end justify-between gap-6 shrink-0 relative z-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-white/75">
                Selected Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight uppercase leading-[0.95] text-white">
              FEATURED <br className="hidden sm:inline" /> PROJECTS
            </h2>
          </div>

          {/* Right Header: View All Link */}
          <div>
            <Link
              href="/projects"
              id="featured-projects-view-all-link"
              className="group relative overflow-hidden inline-flex items-center gap-1.5 sm:gap-2 px-5 py-2.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold tracking-wide text-white transition-colors duration-300 w-fit shrink-0"
            >
              <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2A3490]">
                View All Projects ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Full-bleed Horizontal Track */}
        <div className="w-full overflow-hidden my-auto py-2 relative z-10">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 sm:gap-8 md:gap-10 will-change-transform"
            style={{
              paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 2rem))",
              paddingRight: "max(1.5rem, calc((100vw - 80rem) / 2 + 2rem))",
            }}
          >
            {/* 4 Project Cards */}
            {featuredList.map((project, index) => {
              const isActive = index === active;
              return (
                <article
                  key={project.id}
                  className={`w-[82vw] sm:w-[460px] md:w-[520px] lg:w-[580px] max-w-[600px] shrink-0 rounded-3xl overflow-hidden transition-all duration-500 flex flex-col border-0 shadow-2xl ${isActive
                      ? "opacity-100 scale-[1.01]"
                      : index < active
                        ? "opacity-40 hover:opacity-75"
                        : "opacity-85 hover:opacity-100"
                    } group cursor-pointer`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block h-full flex flex-col"
                  >
                    {/* Image — top half */}
                    <div className="relative aspect-video max-h-[220px] sm:max-h-[250px] md:max-h-[280px] overflow-hidden bg-black/20 shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 520px, 580px"
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={index < 2}
                      />

                      {/* Top tag badge only (year removed) */}
                      <div className="absolute top-3 left-3 right-3 flex items-center pointer-events-none gap-2">
                        {project.tags?.[0] && (
                          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold text-white tracking-wide">
                            {project.tags[0]}
                          </span>
                        )}
                      </div>

                      {/* Bottom Tags */}
                      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 pointer-events-none">
                        {project.tags?.slice(1, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-medium text-white/95"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* White content — bottom half */}
                    <div className="bg-white flex-1 flex flex-col justify-between px-5 py-4 sm:px-6 sm:py-5">
                      <div>
                        {/* Title & Arrow */}
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1a1a2e] tracking-tight line-clamp-1">
                            {project.title}
                          </h3>
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#2A3490]/20 flex items-center justify-center shrink-0 text-[#2A3490] group-hover:bg-[#2A3490] group-hover:text-white group-hover:border-[#2A3490] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed font-normal">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                        <div className="flex flex-wrap gap-1.5 items-center">
                          {project.technologies?.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-[#2A3490]/8 text-[#2A3490] border border-[#2A3490]/15"
                            >
                              {tech}
                            </span>
                          ))}
                          {(project.technologies?.length || 0) > 3 && (
                            <span className="text-[10px] text-gray-400">
                              +{(project.technologies?.length || 0) - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
