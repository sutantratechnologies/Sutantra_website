"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-[#2A3490] text-white font-telegraf selection:bg-orange-500 selection:text-white relative overflow-hidden">
      
      {/* Background large text for aesthetic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span className="text-[40vw] font-black leading-none tracking-tighter">
          404
        </span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight uppercase mb-4">
          PAGE NOT FOUND.
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-lg mb-12 font-medium leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <Link
          href="/"
          className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/10"
        >
          <span className="relative z-10 flex items-center gap-2">
            Return to Homepage
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </motion.div>
    </main>
  );
}
