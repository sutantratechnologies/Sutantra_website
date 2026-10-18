"use client";

import React from "react";

const values = [
  {
    id: "01",
    title: "Built Around Your Workflow",
    description: "We start from your forms, approvals and reports — not from a template. If your fee structure has four exceptions, the software will understand all four."
  },
  {
    id: "02",
    title: "Your Data, Properly Handled",
    description: "Student records and client files deserve real access control. Roles, backups and audit trails are part of the build, not an upgrade sold later."
  },
  {
    id: "03",
    title: "Straight Answers, Clear Scope",
    description: "Fixed scope, visible progress and a direct line to the people writing the code. If something is a bad idea, you will hear it from us early."
  }
];

export default function CoreValuesSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#2A3490] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-4 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            How we work, and why clients stay.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div 
              key={value.id}
              className="bg-[#1c2466] border border-white/10 rounded-2xl p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Top Accent (Replacing Stars) */}
              <div className="text-orange-500 font-black text-2xl mb-6 font-mono">
                {value.id}
              </div>
              
              {/* Content */}
              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8">
                &quot;{value.description}&quot;
              </p>
              
              {/* Footer of card (Replacing user info) */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-black shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{value.title}</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Core Principle</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
