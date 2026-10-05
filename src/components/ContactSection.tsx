"use client";

import React, { useState } from "react";

const Pill = ({ 
  active, 
  children, 
  onClick 
}: { 
  active: boolean; 
  children: React.ReactNode; 
  onClick: () => void 
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-5 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
      active 
        ? "bg-white text-[#2A3490] border-white" 
        : "border-white/30 text-white hover:bg-white/10"
    }`}
  >
    {children}
  </button>
);

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string[]>([]);

  const toggleSelection = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter((prev) => 
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-[#2A3490] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black uppercase text-center leading-[1] mb-20 tracking-tight text-white drop-shadow-sm">
          LET&apos;S GET <br /> STARTED
        </h2>

        <form className="space-y-16">
          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Services */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">SERVICES</h3>
              <div className="flex flex-wrap gap-3">
                {["Web App", "Mobile App", "UI / UX Design", "Cloud Infra", "AI Solutions"].map((item) => (
                  <Pill 
                    key={item} 
                    active={selectedServices.includes(item)}
                    onClick={() => toggleSelection(setSelectedServices, item)}
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>

            {/* Project Type */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">PROJECT TYPE</h3>
              <div className="flex flex-wrap gap-3">
                {["MVP", "Full Build", "Redesign", "Consulting", "Not sure"].map((item) => (
                  <Pill 
                    key={item} 
                    active={selectedProject.includes(item)}
                    onClick={() => toggleSelection(setSelectedProject, item)}
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>

            {/* Time Frame */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">TIME FRAME</h3>
              <div className="flex flex-wrap gap-3">
                {["1-2 months", "3-6 months", "6+ months", "Whenever"].map((item) => (
                  <Pill 
                    key={item} 
                    active={selectedTime.includes(item)}
                    onClick={() => toggleSelection(setSelectedTime, item)}
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-12">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white">NAME *</label>
              <input 
                type="text" 
                placeholder="Your name here" 
                className="bg-transparent border-b border-white/30 pb-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white">EMAIL *</label>
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="bg-transparent border-b border-white/30 pb-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white">PHONE *</label>
              <input 
                type="tel" 
                placeholder="0412 345 678" 
                className="bg-transparent border-b border-white/30 pb-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            {/* Company / Postcode */}
            <div className="flex flex-col">
              <label className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white">COMPANY</label>
              <input 
                type="text" 
                placeholder="Your company name" 
                className="bg-transparent border-b border-white/30 pb-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* Footer Area */}
          <div className="flex flex-col items-center justify-center mt-16 pt-8">
            <p className="text-[10px] text-white/50 mb-8 text-center max-w-md">
              This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white">Privacy Policy</a> and <a href="#" className="underline hover:text-white">Terms of Service</a> apply.
            </p>
            
            <button 
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#2A3490] transition-transform hover:scale-105 shadow-xl"
            >
              Submit <span className="font-mono text-sm font-normal ml-1">↗</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
