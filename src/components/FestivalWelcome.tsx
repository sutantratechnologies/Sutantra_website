"use client";


import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const STORAGE_KEY = "sutantra-festive-modal-2026-v4";
const WISHES_END = new Date("2026-12-01T00:00:00+05:45");

export default function FestivalWelcome() {
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const reduceMotion = useReducedMotion();

  // Show after mounting if within season and not yet seen
  useEffect(() => {
    if (Date.now() > WISHES_END.getTime()) return;

    let alreadySeen = false;
    try {
      alreadySeen = localStorage.getItem(STORAGE_KEY) === "seen";
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) return;

    const timer = window.setTimeout(() => setOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  // 5-second countdown timer once opened
  useEffect(() => {
    if (!open) return;

    const interval = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [open]);

  // Lock body scroll while popup is open
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const canClose = countdown === 0;

  const dismiss = useCallback(() => {
    if (!canClose) return;
    try {
      localStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      // Storage blocked; proceed
    }
    setOpen(false);
  }, [canClose]);

  // Handle ESC key (only allowed once countdown finishes)
  useEffect(() => {
    if (!open || !canClose) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, canClose, dismiss]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
          {/* Dimmed backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={dismiss}
            aria-hidden="true"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Borderless & Paddingless Image Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Festive Special Offer"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] select-none leading-none"
          >
            {/* Top-Right Close Button with 5-Second Countdown */}
            <div className="absolute right-3 top-3 z-30 sm:right-4 sm:top-4">
              {canClose ? (
                <button
                  type="button"
                  onClick={dismiss}
                  aria-label="Close offer banner"
                  className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/70 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:border-white hover:bg-black/90"
                >
                  <svg
                    className="h-4 w-4 transition-transform group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-label={`Close enabled in ${countdown} seconds`}
                  title={`Close will be enabled in ${countdown}s`}
                  className="flex cursor-not-allowed select-none items-center gap-1.5 rounded-full border border-[#E8C46A]/40 bg-black/65 px-3 py-1.5 text-xs font-bold text-[#E8C46A] shadow-xl backdrop-blur-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8C46A] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8C46A]" />
                  </span>
                  <span>{countdown}s</span>
                </button>
              )}
            </div>

            {/* Banner Image */}
            <Image
              src="/specialOffer.png"
              alt="Sutantra Technologies - Special 15% Off In All Services"
              width={1254}
              height={1254}
              priority
              className="block h-auto w-full object-cover"
            />

            {/* Bottom-Left CTA Button: Claim My Offer */}
            <div className="absolute bottom-4 left-4 z-30 sm:bottom-6 sm:left-6">
              <Link
                href="/contact"
                onClick={dismiss}
                className="group inline-flex items-center gap-2 rounded-full bg-[#E8C46A] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#06142e] shadow-2xl transition-all duration-200 hover:bg-[#F2D7A0] hover:scale-105 active:scale-95"
              >
                <span>Claim Offer</span>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
