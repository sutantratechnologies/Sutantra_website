"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section, footer");
      let currentSection: Element | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 40 && rect.bottom >= 40) {
          currentSection = section;
        }
      });

      if (currentSection) {
        setIsDarkTheme(
          !(currentSection as HTMLElement).classList.contains("bg-white")
        );
      } else if (window.scrollY < 50) {
        setIsDarkTheme(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close the menu if the screen grows to desktop size
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
  ];

  // Custom extremely smooth scroll to top function
  const smoothScrollToTop = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      // Let Next.js handle normal navigation if we are not on the home page
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);
    
    // Push state to history if we want the URL to change to '/' without jump
    window.history.pushState(null, "", "/");
    
    const startY = window.scrollY;
    if (startY === 0) return;
    
    const duration = 1500; // 1.5 seconds for an extremely smooth, slow glide
    const startTime = performance.now();

    // Easing function: cubic ease-in-out
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startY * (1 - easeInOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  // When the menu is open its background is blue, so always use light styling
  const lightUI = isDarkTheme || isOpen;

  const textColor = lightUI ? "text-white" : "text-[#171717]";
  const textHover = lightUI ? "hover:text-orange-400" : "hover:text-orange-600";
  const logoSrc = lightUI ? "/logo_light.svg" : "/logo_dark.svg";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isOpen ? "" : "backdrop-blur-md"
          }`}
      >
        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8 lg:px-0">
          {/* Logo Left */}
          <Link
            href="/"
            onClick={smoothScrollToTop}
            className="flex items-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <Image
              src={logoSrc}
              alt="SUTANTRA TECHNOLOGIES Logo"
              width={180}
              height={42}
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              priority
              loading="eager"
            />
          </Link>

          {/* Center Normal Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative inline-block pb-1 text-xs font-bold tracking-widest uppercase transition-colors duration-200 hover:text-orange-500 ${isDarkTheme ? "text-white" : "text-[#171717]"
                  }`}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-orange-500 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right: Hamburger + Contact */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 focus:outline-none transition-colors ${textColor} ${textHover}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <Link
              href="/contact"
              className={`hidden md:block group relative overflow-hidden px-6 py-2.5 rounded-full font-bold tracking-wide transition-colors duration-300 ${isDarkTheme ? "bg-white text-[#2A3490]" : "bg-[#2A3490] text-white"
                }`}
            >
              <span className="absolute inset-0 w-full h-full bg-orange-500 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu — sibling of <header> so \`fixed\` is relative to the viewport */}
      <div
        aria-hidden={!isOpen}
        className={`md:hidden fixed inset-0 z-40 h-dvh w-full bg-[#2A3490] flex flex-col justify-between px-6 pt-28 pb-8 transition-transform duration-500 ease-in-out ${isOpen
            ? "translate-y-0"
            : "-translate-y-full pointer-events-none"
          }`}
      >
        <div className="flex-1 overflow-y-auto">
          {/* Main Links (2 Column Grid) */}
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 mb-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                className="group relative inline-block w-fit pb-1 text-xl sm:text-3xl font-black tracking-widest text-white uppercase transition-colors duration-200 hover:text-orange-500"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            ))}
          </div>

          {/* Sub Links (2 Column Grid) */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-8">
            <Link href="/#web" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="text-white text-[11px] sm:text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors">WEB APPS</Link>
            <Link href="/#mobile" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="text-white text-[11px] sm:text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors">MOBILE APPS</Link>
            <Link href="/#cloud" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="text-white text-[11px] sm:text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors">CLOUD INFRA</Link>
            <Link href="/#ai" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="text-white text-[11px] sm:text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors">AI SOLUTIONS</Link>
            <Link href="/#enterprise" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="text-white text-[11px] sm:text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors">ENTERPRISE</Link>
            <Link href="/#blog" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="text-white text-[11px] sm:text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors">BLOG</Link>
          </div>
        </div>

        {/* Contact Info at bottom */}
        <div className="flex flex-col gap-5 pt-8 border-t border-white/20 mt-auto">
          <div>
            <div className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">PHONE</div>
            <a href="tel:+9779867139612" tabIndex={isOpen ? 0 : -1} className="text-white text-sm sm:text-base font-extrabold tracking-wide hover:text-orange-500 transition-colors">+977-9867139612</a>
          </div>
          <div>
            <div className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">EMAIL</div>
            <a href="mailto:info@sutantratechnology.com" tabIndex={isOpen ? 0 : -1} className="text-white text-sm sm:text-base font-extrabold tracking-wide hover:text-orange-500 transition-colors">info@sutantratechnology.com</a>
          </div>
          <div>
            <div className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">ADDRESS</div>
            <p className="text-white text-sm sm:text-base font-extrabold tracking-wide">Butwal, Lumbini Province <br /> Nepal</p>
          </div>
        </div>
      </div>
    </>
  );
}
