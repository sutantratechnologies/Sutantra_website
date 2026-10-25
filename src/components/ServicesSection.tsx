"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Fast, responsive websites and web apps built to be found and used — from company sites and portfolios to booking flows, dashboards and online stores. Clean code, sensible content structure, and a site your team can actually update.",
    tags: ["WEBSITES", "WEB APPS", "E-COMMERCE"],
  },
  {
    id: "02",
    title: "Mobile App Development",
    description: "Android and iOS apps from one codebase, so you launch on both without paying twice. Built for real-world conditions — patchy networks, low-end devices, and users who expect things to just work.",
    tags: ["ANDROID & IOS", "CROSS-PLATFORM", "API INTEGRATION"],
  },
  {
    id: "03",
    title: "Graphic & Brand Design",
    description: "Logos, identity systems, brochures, social creatives and UI design that look consistent everywhere. We design the brand first, then build the interface around it — no mismatched assets after launch.",
    tags: ["BRAND IDENTITY", "UI / UX DESIGN", "PRINT & SOCIAL"],
  },
  {
    id: "04",
    title: "Custom Management Software",
    description: "Our core work: school management platforms covering admissions, attendance, fees, exams and reports — plus consultancy, inventory, billing and HR systems built around the way your business already runs, not a template you have to change for.",
    tags: ["SCHOOL SYSTEMS", "CONSULTANCY & CRM", "BILLING & INVENTORY"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white text-[#171717]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-32 max-w-2xl">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-8 text-black">
            WHAT WE BUILD
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
            Four things, done properly: websites, mobile apps, brand design and the custom software that runs your day-to-day operations.
          </p>
          <Link 
            href="/services" 
            className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-black/20 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-colors duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-black scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
              <span>All Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Services List - Exact Match to Uploaded Design */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl transition-all duration-300 hover:bg-[#F8F9FA] cursor-pointer"
            >
              {/* Left Column: Number & Dot */}
              <div className="flex md:flex-col items-center md:items-start gap-1 text-slate-400 font-mono self-start pt-1 md:w-16 shrink-0 select-none">
                <span className="text-base sm:text-lg font-medium">{service.id}</span>
                <span className="text-sm opacity-50 font-sans leading-none">·</span>
              </div>

              {/* Middle Column: Title, Description, Tags */}
              <div className="flex-1 max-w-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black group-hover:text-[#2A3490] transition-colors mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-[#ECEEF1] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-700 transition-colors group-hover:bg-[#E2E5E9]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Dark Circular Arrow Button */}
              <div className="self-end md:self-center shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#18202A] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2A3490] shadow-sm">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
