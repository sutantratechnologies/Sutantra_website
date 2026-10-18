"use client";

/**
 * FestivalWelcome — one-time Dashain–Tihar–Chhath greeting card.
 *
 * Shown once per browser (localStorage), only until WISHES_END.
 * It is a small corner card, not a modal: no backdrop, no scroll lock,
 * and it sits below the navbar and mobile menu so those stay usable.
 *
 * To take it down: remove <FestivalWelcome /> (and its import) in
 * src/app/layout.tsx. Nothing else depends on this component.
 */

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const STORAGE_KEY = "sutantra-festival-welcome-2026";
const WISHES_END = new Date("2026-12-01T00:00:00+05:45");

function Sparkle({ className, delay }: { className: string; delay: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute text-[#F2D7A0] ${className}`}
      animate={
        reduceMotion
          ? undefined
          : { opacity: [0.15, 0.9, 0.15], scale: [0.85, 1.12, 0.85] }
      }
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path
        d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

function MiniKite({ delay, reduceMotion }: { delay: number; reduceMotion: boolean | null }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 80 120"
      className="h-auto w-full"
      fill="none"
      animate={
        reduceMotion ? undefined : { y: [0, -7, 3, 0], rotate: [6, 12, 2, 6] }
      }
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path
        d="M40 62 C 48 76 34 86 41 97 C 46 105 38 111 34 115"
        stroke="#F2D7A0"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 4"
        opacity="0.7"
      />
      <path
        d="M40 4 L70 36 L40 64 L10 36 Z"
        fill="#E8C46A"
        stroke="#7A1B27"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M40 4 V64 M10 36 H70" stroke="#7A1B27" strokeWidth="1" opacity="0.45" />
      <path d="M40 4 L70 36 L40 36 Z" fill="#ffffff" opacity="0.22" />
    </motion.svg>
  );
}

export default function FestivalWelcome() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (Date.now() > WISHES_END.getTime()) return;

    let alreadySeen = true;
    try {
      alreadySeen = localStorage.getItem(STORAGE_KEY) === "seen";
    } catch {
      // Storage can be blocked (private mode); still show once per load.
      alreadySeen = false;
    }
    if (alreadySeen) return;

    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      // Ignore storage failures — the card simply reappears next visit.
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <motion.div
      role="dialog"
      aria-labelledby="festival-welcome-title"
      aria-describedby="festival-welcome-body"
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-4 bottom-4 z-30 overflow-hidden rounded-2xl border border-[#E8C46A]/40 bg-[#5E1119] text-[#FDF6E9] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[380px]"
    >
      {/* Soft festive glow + sparks, entirely contained in the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(232,196,106,0.22),transparent_65%)]"
      />
      <Sparkle className="left-4 top-12 h-3 w-3" delay={0} />
      <Sparkle className="bottom-16 right-5 h-2.5 w-2.5" delay={1.2} />
      <Sparkle className="bottom-6 left-1/3 h-2 w-2" delay={2.1} />

      {/* Two small kites tucked into the top corner, clear of the close button */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-1 top-10 w-16 opacity-45">
        <MiniKite reduceMotion={reduceMotion} delay={0} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-14 top-12 w-9 opacity-30">
        <MiniKite reduceMotion={reduceMotion} delay={1.4} />
      </div>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Close festive greeting"
        className="absolute right-3 top-3 z-20 rounded-full border border-white/20 bg-[#3D0A12]/50 p-1.5 text-white/70 transition-colors hover:border-white/50 hover:bg-[#3D0A12]/80 hover:text-white"
      >
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative z-10 p-5 sm:p-6">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#E8C46A]">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1.8 2.4 2.7 4.5 2.7 6.3 0 2.1-1.2 3.4-2.7 3.4s-2.7-1.3-2.7-3.4C9.3 7.5 10.2 5.4 12 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 15c1.4 3 4.3 4.8 8 4.8s6.6-1.8 8-4.8" />
          </svg>
          Dashain · Tihar · Chhath 2026
        </span>

        <h2
          id="festival-welcome-title"
          className="mt-3 max-w-[15rem] text-xl font-extrabold leading-tight tracking-tight sm:text-2xl"
        >
          Happy Dashain, Tihar <span className="text-[#E8C46A]">&amp; Chhath!</span>
        </h2>

        <p id="festival-welcome-body" className="mt-2 text-sm leading-relaxed text-[#FDF6E9]/75">
          शुभ दशैं, शुभ तिहार र छठको हार्दिक शुभकामना। Wishing you light, family and a season
          worth celebrating — from all of us at Sutantra Technologies.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href="/#festival-offer"
            onClick={dismiss}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#E8C46A] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#3D0A12] transition-colors hover:bg-[#F2D7A0]"
          >
            Festive offers
            <span aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="text-[10px] font-semibold uppercase tracking-widest text-[#FDF6E9]/50 transition-colors hover:text-[#FDF6E9]"
          >                No thanks
              </button>
        </div>
      </div>
    </motion.div>
  );
}
