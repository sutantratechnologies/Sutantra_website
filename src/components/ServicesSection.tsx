import React from "react";

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
    <section id="services" className="py-24 px-6 md:px-16 bg-white text-[#171717]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-32 max-w-2xl">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-8 text-black">
            WHAT WE BUILD
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
            Four things, done properly: websites, mobile apps, brand design and the custom software that runs your day-to-day operations.
          </p>
          <a 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-[#2A3490] hover:border-[#2A3490] transition-colors"
          >
            ALL SERVICES <span className="font-mono text-sm font-normal">›</span>
          </a>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 group ${
                index === 0 ? "border-t border-gray-200" : "border-t border-gray-200"
              }`}
            >
              {/* Number Column */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex flex-col text-gray-400 font-medium">
                  <span className="text-lg tracking-wide">{service.id}</span>
                  <span className="text-lg leading-4 mt-1 opacity-50 font-serif">. .</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="col-span-1 md:col-span-10 flex flex-col items-start">
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-black group-hover:text-[#2A3490] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 rounded-full bg-gray-100 text-[10px] font-bold tracking-widest uppercase text-gray-600 transition-colors group-hover:bg-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Final Bottom Border */}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
