"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

type Project = (typeof projects)[number];

const COLUMN_COUNT = 6;

/* Split projects across columns and pad so every column is long enough to loop */
const buildColumn = (colIndex: number): Project[] => {
  // offset each column so neighbouring columns don't show the same card side by side
  const rotated = projects.map((_, i) => projects[(i + colIndex) % projects.length]);
  let list = rotated.filter((_, i) => i % 2 === 0);
  if (list.length === 0) list = [...projects];
  while (list.length < 5) list = [...list, ...list];
  return list;
};

function MarqueeColumn({
  items,
  direction,
  duration,
  className = "",
}: {
  items: Project[];
  direction: "up" | "down";
  duration: number;
  className?: string;
}) {
  const doubled = [...items, ...items]; // twice = seamless loop at -50%

  return (
    <div className={`overflow-hidden h-full ${className}`}>
      <div
        className={`flex flex-col gap-4 sm:gap-5 marquee-col ${direction === "up" ? "marquee-up" : "marquee-down"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((project, i) => (
          <div
            key={`${project.id}-${i}`}
            className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-950 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)]"
          >
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 30vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const columns = useMemo(
    () => Array.from({ length: COLUMN_COUNT }, (_, i) => buildColumn(i)),
    []
  );

  // durations / directions per column (alternating up / down, slightly different speeds)
  const config: { dir: "up" | "down"; dur: number; offset: string }[] = [
    { dir: "up", dur: 46, offset: "mt-0" },
    { dir: "down", dur: 54, offset: "-mt-16" },
    { dir: "up", dur: 50, offset: "-mt-6" },
    { dir: "down", dur: 58, offset: "-mt-20" },
    { dir: "up", dur: 48, offset: "-mt-10" },
    { dir: "down", dur: 52, offset: "-mt-4" },
  ];

  return (
    <section
      id="projects"
      className="relative isolate min-h-[720px] md:min-h-[820px] flex items-center justify-center overflow-hidden bg-[#0a0d3a] text-white py-28 md:py-36"
    >
      {/* ===== BACKGROUND: tilted wall of project cards moving up / down ===== */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none [perspective:1600px]">
        <div className="marquee-wall absolute -inset-x-[25%] -inset-y-[35%] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 [transform:rotateX(14deg)_rotateZ(-14deg)] [transform-style:preserve-3d]">
          {columns.map((items, i) => (
            <MarqueeColumn
              key={i}
              items={items}
              direction={config[i].dir}
              duration={config[i].dur}
              className={`${config[i].offset} ${i >= 4 ? "hidden lg:block" : i >= 2 ? "hidden sm:block" : ""}`}
            />
          ))}
        </div>

        {/* Dark brand-tinted overlay so the text stays readable */}
        <div className="absolute inset-0 bg-[#080b33]/65" />
        {/* Vignette: darker towards the centre where the text sits, and at top / bottom edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,11,51,0.88)_0%,rgba(8,11,51,0.45)_55%,rgba(8,11,51,0.8)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0d3a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0d3a] to-transparent" />
      </div>

      {/* ===== FOREGROUND: title, description, CTAs (Centered) ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1] drop-shadow-2xl text-white">
            Make your next <br />
            move digital.
          </h2>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/90 font-normal leading-relaxed drop-shadow-md text-center">
            Websites, mobile applications, and custom software that help turn your next move into reality.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)] transition-all duration-300 hover:scale-105"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <span>Discuss Your Idea</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Feature chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["Websites", "Mobile Apps", "School Software", "Brand Design", "Custom Systems"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee animation */}
      <style jsx global>{`
        @keyframes marquee-up {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
        @keyframes marquee-down {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }
        .marquee-col {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .marquee-up {
          animation-name: marquee-up;
        }
        .marquee-down {
          animation-name: marquee-down;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-col {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}