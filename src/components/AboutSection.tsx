import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiTailwindcss,
  SiFigma,
  SiPython,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";

const tools = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Firebase", icon: SiFirebase },
  { name: "AWS", icon: FaAws },
  { name: "Vercel", icon: SiVercel },
  { name: "Docker", icon: SiDocker },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
];

export default function AboutSection() {
  return (
    <section id="about" data-theme="light" className="py-24 md:py-32 bg-[#EEF1F7] text-[#111827]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start mb-20">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight text-[#111827]">
              A software studio for the schools, consultancies and businesses that need systems built around how they actually work.
            </h2>
            <a
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-[#111827]/25 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#111827] transition-colors duration-300 hover:border-[#2A3490]"
            >
              <span className="absolute inset-0 w-full h-full bg-[#2A3490] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Request a free quote <span className="font-mono text-base font-normal">↗</span>
              </span>
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start space-y-8 lg:pl-12 pt-2">
            <p className="text-base md:text-lg text-[#111827]/75 leading-relaxed font-normal">
              Our designers and engineers have spent years building and maintaining the unglamorous software that keeps organisations running — admissions, attendance, fees, client records, billing and reporting. We keep the team small and senior, so the people who plan your project are the same people who build it, launch it and stay on to support it. Websites, mobile apps, brand design and custom management systems: one team, one point of contact.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111827] border-b border-[#111827] pb-1 hover:text-[#2A3490] hover:border-[#2A3490] transition-colors"
            >
              About Us <span className="font-mono text-base font-normal">↗</span>
            </a>
          </div>
        </div>

        {/* Toolkit Section: Infinite Marquee of Logos */}
        <div className="border-t border-[#111827]/10 pt-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#2A3490]/75 mb-10 text-center lg:text-left">
            Tools we build with
          </p>
          <div
            className="w-full overflow-hidden py-4"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <div className="flex w-max items-center animate-marquee-x hover:[animation-play-state:paused]">
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  aria-hidden={dup === 1}
                  className="flex items-center shrink-0 gap-10 sm:gap-14 md:gap-16 pr-10 sm:pr-14 md:pr-16"
                >
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <div
                        key={`${dup}-${tool.name}`}
                        className="group relative flex items-center justify-center text-[#111827]/45 hover:text-[#2A3490] transition-all duration-300 hover:scale-110 cursor-pointer"
                        title={tool.name}
                        aria-label={tool.name}
                      >
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transition-colors" />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
