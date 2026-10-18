"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

const getHashTarget = () => {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return null;

  const id = decodeURIComponent(hash.slice(1));
  return document.getElementById(id);
};

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07, // Smaller = smoother/slower easing
      duration: 1.2,
      wheelMultiplier: 1.0,
      smoothWheel: true,
    });
    
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Jump to the hashed section on navigation, otherwise reset scroll to the top
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const target = getHashTarget();
    if (target) {
      // Wait a frame so the newly rendered route has been measured
      const id = requestAnimationFrame(() => lenis.scrollTo(target, { offset: -90 }));
      return () => cancelAnimationFrame(id);
    }

    lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  // Handle hash-only changes (e.g. clicking a service link in the mobile menu)
  useEffect(() => {
    const onHashChange = () => {
      const target = getHashTarget();
      if (target) lenisRef.current?.scrollTo(target, { offset: -90 });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <>{children}</>;
}
