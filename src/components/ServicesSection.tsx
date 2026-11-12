"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Smartphone, PenTool, Layers } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Development",
    href: "/services#web-development",
    icon: Globe,
    description:
      "Fast, responsive websites and web apps built to be found and used — from company sites and portfolios to booking flows, dashboards and online stores. Clean code, sensible content structure, and a site your team can actually update.",
    tags: ["WEBSITES", "WEB APPS", "E-COMMERCE"],
  },
  {
    id: "02",
    title: "Mobile App Development",
    href: "/services#mobile-app-development",
    icon: Smartphone,
    description:
      "Android and iOS apps from one codebase, so you launch on both without paying twice. Built for real-world conditions — patchy networks, low-end devices, and users who expect things to just work.",
    tags: ["ANDROID & IOS", "CROSS-PLATFORM", "API INTEGRATION"],
  },
  {
    id: "03",
    title: "Graphic & Brand Design",
    href: "/services#graphics-brand-design",
    icon: PenTool,
    description:
      "Logos, identity systems, brochures, social creatives and UI design that look consistent everywhere. We design the brand first, then build the interface around it — no mismatched assets after launch.",
    tags: ["BRAND IDENTITY", "UI / UX DESIGN", "PRINT & SOCIAL"],
  },
  {
    id: "04",
    title: "Custom Management Software",
    href: "/services#school-management-software",
    icon: Layers,
    description:
      "Our core work: school management platforms covering admissions, attendance, fees, exams and reports — plus consultancy, inventory, billing and HR systems built around the way your business already runs, not a template you have to change for.",
    tags: ["SCHOOL SYSTEMS", "CONSULTANCY & CRM", "BILLING & INVENTORY"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-theme="light"
      className="py-24 md:py-32 bg-[#EEF1F7] text-[#111827] border-t border-[#2A3490]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Top Split Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#2A3490] mb-4 block">
              Capabilities · 01 — 04
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight uppercase leading-[0.95] text-[#111827]">
              WHAT WE <span className="text-[#2A3490]">BUILD</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start lg:items-end lg:text-right gap-5">
            <p className="text-sm sm:text-base text-[#111827]/70 leading-relaxed">
              Four things, done properly: websites, mobile apps, brand design and the custom software that runs your day-to-day operations.
            </p>
            <Link
              href="/services"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-[#111827]/25 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#111827] transition-colors duration-300 hover:border-[#2A3490]"
            >
              <span className="absolute inset-0 w-full h-full bg-[#2A3490] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                <span>All Services</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* 2x2 Bento Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#2A3490] text-white border border-white/10 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#2A3490]/30"
              >
                <div>
                  {/* Card Top Bar */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-white group-hover:text-[#2A3490]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-white/70 group-hover:text-white transition-colors">
                        {service.id}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#2A3490] group-hover:border-white">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-8 mb-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="pt-6 border-t border-white/15 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 text-[10px] font-bold tracking-widest uppercase text-white/90 transition-colors group-hover:bg-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
