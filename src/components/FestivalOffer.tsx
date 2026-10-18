"use client";

/**
 * FestivalOffer — seasonal Dashain–Tihar campaign section.
 *
 * To take it down: remove the <FestivalOffer /> line (and its import) in
 * src/app/page.tsx. Nothing else on the site depends on this component.
 *
 * To update the campaign: edit `offers`, `ENDS_ON` and the copy below.
 */

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ENDS_ON = "30 November 2026";

const offers = [
  {
    id: "01",
    service: "Web Development",
    headline: "20% off",
    detail: "your first business website, with domain and hosting set up for you.",
  },
  {
    id: "02",
    service: "Mobile Apps",
    headline: "15% off",
    detail: "an MVP build, plus free Play Store and App Store submission.",
  },
  {
    id: "03",
    service: "Graphic & Brand Design",
    headline: "Free logo concept",
    detail: "with every full brand kit booked this season.",
  },
  {
    id: "04",
    service: "School Management Software",
    headline: "Free setup",
    detail: "data migration, staff training and first-term support included.",
  },
  {
    id: "05",
    service: "Business & Consultancy Systems",
    headline: "Free workflow audit",
    detail: "then 15% off your first module when you go ahead.",
  },
  {
    id: "06",
    service: "Maintenance & Support",
    headline: "3 months free",
    detail: "of support and monitoring with any new project signed now.",
  },
];

type KiteProps = {
  color: string;
  accent: string;
  size: number;
  left: string;
  top: number;
  bob: number;
  tilt: number;
};

function Kite({ color, accent, size, left, top, bob, tilt }: KiteProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="absolute"
      style={{ left, top, width: size }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -14, 5, 0],
              rotate: [tilt, tilt + 7, tilt - 5, tilt],
            }
      }
      transition={{ duration: bob, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 120 175" className="h-auto w-full" fill="none">
        {/* Tail and bows */}
        <path
          d="M60 96 C 72 115 50 130 61 146 C 68 157 57 165 51 171"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 5"
          opacity="0.85"
        />
        <path d="M64 118 l11 5 -12 4 z" fill={accent} opacity="0.9" />
        <path d="M54 141 l12 4 -11 6 z" fill={accent} opacity="0.75" />
        {/* Sail */}
        <path
          d="M60 6 L110 56 L60 100 L10 56 Z"
          fill={color}
          stroke={accent}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M60 6 V100 M10 56 H110" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        <path d="M60 6 L110 56 L60 56 Z" fill="#ffffff" opacity="0.18" />
        <path d="M60 100 L60 56 L10 56 Z" fill="#000000" opacity="0.08" />
      </svg>
    </motion.div>
  );
}

type KiteTrackProps = {
  duration: number;
  delay: number;
  kites: KiteProps[];
};

function KiteTrack({ duration, delay, kites }: KiteTrackProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-40 pointer-events-none"
      initial={reduceMotion ? false : { x: "-80%" }}
      animate={reduceMotion ? { x: "0%" } : { x: "100%" }}
      transition={
        reduceMotion ? { duration: 0 } : { duration, delay, repeat: Infinity, ease: "linear" }
      }
    >
      {kites.map((kite, index) => (
        <Kite key={index} {...kite} />
      ))}
    </motion.div>
  );
}

export default function FestivalOffer() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <section
      id="festival-offer"
      className="relative overflow-hidden bg-[#6B1420] text-[#FDF6E9] selection:bg-[#E8C46A] selection:text-[#3D0A12]"
    >
      {/* Festive background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,196,106,0.22),transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full border border-[#E8C46A]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-40 h-80 w-80 rounded-full border border-[#E8C46A]/10"
      />

      {/* Kites flying across the top of the section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden">
        <KiteTrack
          duration={46}
          delay={0}
          kites={[
            { color: "#E8C46A", accent: "#7A1B27", size: 64, left: "14%", top: 4, bob: 5.5, tilt: -6 },
            { color: "#F08A4B", accent: "#6B1420", size: 44, left: "48%", top: 48, bob: 6.5, tilt: 4 },
          ]}
        />
        <KiteTrack
          duration={62}
          delay={6}
          kites={[
            { color: "#F2D7A0", accent: "#8A2A34", size: 50, left: "32%", top: 24, bob: 7, tilt: 8 },
            { color: "#C8455A", accent: "#F2D7A0", size: 58, left: "72%", top: 6, bob: 6, tilt: -3 },
          ]}
        />
      </div>

      {/* Dismiss — hides the section for this page visit */}
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss festival offer"
        className="absolute right-4 top-4 z-20 rounded-full border border-white/20 p-2 text-white/60 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white md:right-6 md:top-6"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-36 md:px-16 md:pb-16 md:pt-40">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E8C46A]/40 bg-[#E8C46A]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E8C46A]">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1.8 2.4 2.7 4.5 2.7 6.3 0 2.1-1.2 3.4-2.7 3.4s-2.7-1.3-2.7-3.4C9.3 7.5 10.2 5.4 12 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 15c1.4 3 4.3 4.8 8 4.8s6.6-1.8 8-4.8" />
                </svg>
                Dashain–Tihar 2026
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#F2D7A0]/70">
                शुभ दशैं • शुभ तिहार
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[3.5rem]">
              Festive season <br className="hidden sm:block" />
              <span className="text-[#E8C46A]">offers.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#FDF6E9]/75 md:text-base">
              Kites up, prices down. Book any of our six services before {ENDS_ON} and start the new year
              with something your team actually uses.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#E8C46A] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#3D0A12] transition-colors duration-300 hover:bg-[#F2D7A0]"
            >
              Claim an offer
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="text-[10px] uppercase tracking-widest text-[#FDF6E9]/50">
              One offer per project
            </p>
          </div>
        </div>

        {/* Offer cards */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative flex w-[78%] shrink-0 snap-start flex-col rounded-2xl border border-[#E8C46A]/20 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-[#E8C46A]/50 hover:bg-white/[0.07] sm:w-auto sm:shrink"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F2D7A0]/70">
                  {offer.service}
                </span>
                <span className="font-mono text-[10px] text-[#E8C46A]/45">{offer.id}</span>
              </div>

              <p className="text-xl font-extrabold leading-tight tracking-tight text-[#E8C46A] md:text-2xl">
                {offer.headline}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#FDF6E9]/70 md:text-sm">
                {offer.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[#FDF6E9]/45">
          Offers apply to projects confirmed by {ENDS_ON}. Cannot be combined with other discounts.
        </p>
      </div>
    </section>
  );
}
