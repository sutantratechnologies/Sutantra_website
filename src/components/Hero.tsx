"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#2A3490] text-white pt-20">
      
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* The provided SVG */}
        <Image
          src="/background.svg"
          alt="Sutantra Hero Background"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        
        {/* Animated Glowing Orbs for that modern tech feel */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#2A3490]/60 blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/30 blur-[150px] pointer-events-none" 
        />
        
        {/* Deep vignette overlay to make text pop perfectly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A3490]/80 via-transparent to-[#2A3490] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-16 flex flex-col items-center justify-center text-center">
        
        {/* Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            Award-Winning Engineering
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.9] text-white drop-shadow-2xl mb-8 flex flex-col"
        >
          <span>
            Reliable <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">Code.</span>
          </span>
          <span className="text-white">Real Impact.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-12"
        >
          For over <span className="text-white font-bold">5+ years</span>, Sutantra Technologies has transformed global enterprises with scalable software architecture and cutting-edge digital experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="/contact"
            className="w-full sm:w-auto group relative overflow-hidden rounded-full bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.7)]"
          >
            <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-orange-600">
              Start Your Project
            </span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto group relative overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
          >
            <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Services
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
