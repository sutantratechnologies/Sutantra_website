"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsLoading(false);
      return;
    }
    sessionStorage.setItem("hasVisited", "true");

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds loading animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2A3490] text-white font-telegraf"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pattern_scribble_preloader" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M15 15 C 20 5, 40 5, 45 15 S 40 30, 30 30 S 15 25, 15 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                  <circle cx="10" cy="50" r="2" fill="currentColor" />
                  <path d="M45 45 L 55 55 M 55 45 L 45 55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern_scribble_preloader)" className="text-white" />
            </svg>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/10 rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
            
            {/* Brand text */}
            <div className="flex flex-col items-center gap-2 overflow-hidden">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white uppercase"
              >
                Sutantra
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-orange-500 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-[0.4em] uppercase mt-2"
              >
                Technologies
              </motion.p>
            </div>

            {/* Premium minimal progress bar */}
            <motion.div 
              className="w-full max-w-sm h-[2px] bg-white/20 mt-16 md:mt-24 relative overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.6 }}
              />
            </motion.div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
