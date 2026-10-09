import React from "react";

export default function CtaBanner() {
  return (
    <section className="relative w-full py-40 px-6 md:px-16 flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-[#2A3490]/90 z-10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070')] bg-cover bg-center bg-no-repeat grayscale z-0 opacity-40" />
      
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter uppercase text-white mb-6 leading-none">
          ROBUST SYSTEMS, DEPLOYED AND SCALING
        </h2>
        <p className="text-white/90 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-10">
          Version 1 deployed. Let's talk about Version 2.0 for your enterprise.
        </p>
        <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-white text-xs font-bold tracking-widest uppercase text-[#2A3490] bg-white hover:bg-transparent hover:text-white transition-all duration-300">
          BOOK A CONSULT
        </a>
      </div>
    </section>
  );
}
