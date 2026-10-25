"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Detect if device is a mobile / touch device
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        window.innerWidth < 768);

    let animationFrameId = 0;
    let isRunning = false;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let cellW = 0;
    let cellH = 0;
    let dpr = 1;
    let cellEnergies: Float32Array;

    // Grid configuration: slightly larger blocks on mobile for peak performance
    const targetBlockSize = isTouch ? 40 : 36;
    const gap = 1.5;

    const initGrid = () => {
      dpr = isTouch ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / targetBlockSize);
      rows = Math.ceil(height / targetBlockSize);
      cellW = width / cols;
      cellH = height / rows;

      cellEnergies = new Float32Array(cols * rows);
    };

    initGrid();

    // Pure, beautiful flat background rendering (0% CPU once drawn)
    const drawFlatGrid = () => {
      ctx.fillStyle = "#07041a";
      ctx.fillRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const bw0 = cellW - gap;
      const bh0 = cellH - gap;

      for (let r = 0; r < rows; r++) {
        const y = r * cellH;
        const centerY = y + cellH * 0.5;
        const dyCenter = (centerY - cy) / cy;

        for (let c = 0; c < cols; c++) {
          const x = c * cellW;
          const centerX = x + cellW * 0.5;
          const dxCenter = (centerX - cx) / cx;
          const distCenterNorm = Math.min(Math.hypot(dxCenter * 1.1, dyCenter * 0.9), 1.4);
          const colStripeOffset = Math.sin(c * 0.8) * 2.2 + ((c % 2) - 0.5) * 1.8;
          const baseL = Math.max(8, 43 - distCenterNorm * 28 + colStripeOffset);
          const baseH = 268 + Math.sin(c * 0.3 + r * 0.2) * 5;
          const baseS = 78;

          ctx.fillStyle = `hsl(${baseH}, ${baseS}%, ${baseL}%)`;
          ctx.fillRect(x + gap * 0.5, y + gap * 0.5, bw0, bh0);
        }
      }
    };

    // ON MOBILE / TOUCH DEVICES:
    // Render once, NO infinite animation loop, NO touch listeners, completely non-blocking scrolling!
    if (isTouch) {
      drawFlatGrid();

      const handleResize = () => {
        initGrid();
        drawFlatGrid();
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    // ON DESKTOP: Full interactive proximity & click ripples with smart idle sleep
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170,
      active: false,
    };

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      intensity: number;
    }
    const ripples: Ripple[] = [];

    const requestFrame = () => {
      if (!isRunning && isVisible) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
      requestFrame();
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      requestFrame();
    };

    const handlePointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        maxRadius: Math.max(width, height) * 0.7,
        speed: 14,
        intensity: 1.0,
      });
      requestFrame();
    };

    const handleResize = () => {
      initGrid();
      drawFlatGrid();
      requestFrame();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("pointerdown", handlePointerDown);

    // Pause when hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          requestFrame();
        } else if (isRunning) {
          cancelAnimationFrame(animationFrameId);
          isRunning = false;
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const roundRectPath = (x: number, y: number, w: number, h: number, rad: number) => {
      const r = Math.min(rad, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    // Render loop
    const render = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.22;
        mouse.y += (mouse.targetY - mouse.y) * 0.22;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.intensity *= 0.96;
        if (r.radius > r.maxRadius || r.intensity < 0.02) {
          ripples.splice(i, 1);
        }
      }

      const cx = width * 0.5;
      const cy = height * 0.5;

      ctx.fillStyle = "#07041a";
      ctx.fillRect(0, 0, width, height);

      const bw0 = cellW - gap;
      const bh0 = cellH - gap;
      const raised: { x: number; y: number; energy: number; h: number; s: number; l: number }[] = [];
      let maxEnergyRemaining = 0;

      for (let r = 0; r < rows; r++) {
        const y = r * cellH;
        const centerY = y + cellH * 0.5;
        const dyCenter = (centerY - cy) / cy;

        for (let c = 0; c < cols; c++) {
          const x = c * cellW;
          const centerX = x + cellW * 0.5;
          const idx = r * cols + c;

          const dxCenter = (centerX - cx) / cx;
          const distCenterNorm = Math.min(Math.hypot(dxCenter * 1.1, dyCenter * 0.9), 1.4);
          const colStripeOffset = Math.sin(c * 0.8) * 2.2 + ((c % 2) - 0.5) * 1.8;
          const baseL = Math.max(8, 43 - distCenterNorm * 28 + colStripeOffset);
          const baseH = 268 + Math.sin(c * 0.3 + r * 0.2) * 5;
          const baseS = 78;

          if (mouse.active) {
            const distMouse = Math.hypot(centerX - mouse.x, centerY - mouse.y);
            if (distMouse < mouse.radius) {
              const t = 1 - distMouse / mouse.radius;
              const proximityFactor = t * t * (3 - 2 * t);
              cellEnergies[idx] = Math.max(cellEnergies[idx], proximityFactor * 1.1);
            }
          }

          for (let i = 0; i < ripples.length; i++) {
            const rip = ripples[i];
            const distRip = Math.hypot(centerX - rip.x, centerY - rip.y);
            const ripDiff = Math.abs(distRip - rip.radius);
            if (ripDiff < 50) {
              const ripFactor = (1 - ripDiff / 50) * rip.intensity;
              cellEnergies[idx] = Math.max(cellEnergies[idx], ripFactor * 1.2);
            }
          }

          cellEnergies[idx] *= 0.91;
          const energy = cellEnergies[idx];
          if (energy > maxEnergyRemaining) maxEnergyRemaining = energy;

          ctx.fillStyle = `hsl(${baseH}, ${baseS}%, ${baseL}%)`;
          ctx.fillRect(x + gap * 0.5, y + gap * 0.5, bw0, bh0);

          if (energy > 0.06) {
            raised.push({
              x,
              y,
              energy,
              h: baseH - energy * 14,
              s: Math.min(98, baseS + energy * 18),
              l: Math.min(85, baseL + energy * 26),
            });
          }
        }
      }

      // Draw raised blocks with subtle pop
      raised.sort((a, b) => a.energy - b.energy);
      for (const b of raised) {
        const e = Math.min(b.energy, 1);
        const scale = 1 + e * 0.4;
        const bw = bw0 * scale;
        const bh = bh0 * scale;
        const bx = b.x + cellW / 2 - bw / 2;
        const by = b.y + cellH / 2 - bh / 2;
        const radius = 2 + e * 3;

        ctx.save();
        ctx.shadowColor = `rgba(5, 0, 30, ${0.15 + e * 0.35})`;
        ctx.shadowBlur = (6 + e * 14) * dpr;
        ctx.shadowOffsetY = (2 + e * 5) * dpr;
        ctx.fillStyle = `hsl(${b.h}, ${b.s}%, ${b.l}%)`;
        roundRectPath(bx, by, bw, bh, radius);
        ctx.fill();
        ctx.restore();

        ctx.lineWidth = 1;
        ctx.strokeStyle = `hsla(${b.h}, 100%, 88%, ${e * 0.45})`;
        roundRectPath(bx + 0.5, by + 0.5, bw - 1, bh - 1, radius);
        ctx.stroke();
      }

      // IDLE SLEEP: If mouse is not active, ripples are done, and all energy decayed, stop running
      if (!mouse.active && ripples.length === 0 && maxEnergyRemaining < 0.01) {
        isRunning = false;
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Initial render
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#07041a] text-white pt-32 sm:pt-36 md:pt-40 pb-20 selection:bg-orange-500 selection:text-white"
    >
      {/* 1. SQUARE BLOCK CANVAS (Non-interactive on mobile for effortless scrolling, interactive on desktop) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none md:pointer-events-auto md:cursor-crosshair"
      />

      {/* 2. ATMOSPHERIC OVERLAYS */}
      {/* Top vignette to blend smoothly under the curved navbar */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#07041a]/95 via-[#07041a]/60 to-transparent pointer-events-none z-1" />

      {/* Bottom vignette to transition into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07041a] via-[#07041a]/80 to-transparent pointer-events-none z-1" />

      {/* Subtle tactile grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col items-center justify-center text-center pointer-events-none">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.9] text-white drop-shadow-2xl mb-8 flex flex-col"
        >
          <span>
            BUILT <span className="text-orange-500">AROUND</span>
          </span>
          <span className="text-white">YOUR BUSINESS.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed font-light mb-12 drop-shadow-md"
        >
          We build <span className="text-white font-bold">websites, mobile apps, brand visuals</span> and custom
          management software for schools, consultancies and growing businesses — designed around how your team already works.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto group relative overflow-hidden rounded-full bg-orange-500 hover:bg-orange-600 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.7)]"
          >
            <span className="relative z-10">START YOUR PROJECT</span>
          </Link>

          <a
            href="#services"
            className="w-full sm:w-auto group relative overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              SEE WHAT WE BUILD
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* 4. BOTTOM SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50 pointer-events-none z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-9 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
