"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    let ticking = false;

    const checkTheme = () => {
      const sections = document.querySelectorAll("section, footer");
      let currentSection: Element | null = null;
      const checkY = 50;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= checkY && rect.bottom >= checkY) {
          currentSection = section;
        }
      });

      if (currentSection) {
        const el = currentSection as HTMLElement;
        const classStr = el.className || "";
        const dataTheme = el.getAttribute("data-theme");

        // Robust detection for light sections (like ProcessSection, AboutSection, ServicesSection, etc.)
        const isLight =
          dataTheme === "light" ||
          classStr.includes("bg-white") ||
          classStr.includes("bg-[#FCFCFB]") ||
          classStr.includes("bg-[#fcfcfb]") ||
          classStr.includes("bg-slate-50") ||
          classStr.includes("text-[#0F172A]") ||
          classStr.includes("text-[#171717]") ||
          classStr.includes("text-[#111827]");

        setIsDarkTheme(!isLight);
      } else if (window.scrollY < 50) {
        setIsDarkTheme(true);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkTheme);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    checkTheme();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll while the full screen menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { label: "About", href: "/about", number: "01" },
    { label: "Services", href: "/services", number: "02" },
    { label: "Projects", href: "/projects", number: "03" },
    { label: "Careers", href: "/careers", number: "04" },
  ];

  const subServices = [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile App Development", href: "/services#mobile-app-development" },
    { label: "Graphic & Brand Design", href: "/services#graphics-brand-design" },
    { label: "School Management ERP", href: "/services#school-management-software" },
    { label: "Business & CRM Systems", href: "/services#business-consultancy-systems" },
    { label: "Our Shipped Work", href: "/projects" },
  ];

  // Custom smooth scroll to top when clicking logo
  const smoothScrollToTop = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);
    window.history.pushState(null, "", "/");

    const startY = window.scrollY;
    if (startY === 0) return;

    const duration = 1200;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startY * (1 - easeInOutCubic(progress)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // When the menu is open its background is blue, so always use light styling
  const lightUI = isDarkTheme || isOpen;
  const textColor = lightUI ? "text-white" : "text-[#171717]";
  const textHover = lightUI ? "hover:text-orange-400" : "hover:text-orange-600";
  const logoSrc = lightUI
    ? "/dashin_white_logo.png"
    : "/dashin_dark_logo.png";

  return (
    <>
      {/* HEADER BAR (Same minimal style on both mobile and big screen) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isOpen
            ? "bg-transparent"
            : lightUI
            ? "backdrop-blur-md bg-transparent"
            : "backdrop-blur-md bg-white/80"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          {/* Logo Left */}
          <Link
            href="/"
            onClick={smoothScrollToTop}
            className="flex items-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer relative z-50"
          >
            <Image
              src={logoSrc}
              alt="SUTANTRA TECHNOLOGIES Logo"
              width={180}
              height={56}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              priority
              loading="eager"
            />
          </Link>

          {/* Right Controls: Contact Us + Hamburger Menu (Available on all screens) */}
          <div className="flex items-center gap-3 sm:gap-4 relative z-50">
            {/* Quick Contact Link */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isOpen
                  ? "bg-white text-[#2A3490] hover:bg-orange-500 hover:text-white"
                  : isDarkTheme
                  ? "bg-white text-[#2A3490] hover:bg-orange-500 hover:text-white"
                  : "bg-[#2A3490] text-white hover:bg-orange-500"
              }`}
            >
              Contact Us
            </Link>

            {/* Menu Toggle Button (Visible on both mobile & desktop) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 focus:outline-hidden ${
                isOpen
                  ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                  : lightUI
                  ? "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                  : "border-black/20 bg-black/5 text-[#171717] hover:border-black/40 hover:bg-black/10"
              }`}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest pl-1">
                {isOpen ? "CLOSE" : "MENU"}
              </span>

              {/* Animated Hamburger / Close Icon */}
              <div className="w-5 h-5 flex items-center justify-center">
                {isOpen ? (
                  <svg className="w-5 h-5 transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <div className="flex flex-col gap-1 w-4">
                    <span className="w-full h-[2px] bg-current rounded-full transition-all group-hover:w-full" />
                    <span className="w-3 h-[2px] bg-current rounded-full transition-all group-hover:w-full self-end" />
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MENU DRAWER (Available on both mobile and big screen) */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 h-dvh w-full bg-[#2A3490] text-white flex flex-col justify-between transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar [&::-webkit-scrollbar]:hidden max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-12 pt-28 sm:pt-32 pb-8 flex flex-col justify-between">
          
          {/* Main Grid: Primary Links (Left) + Sub Services & Details (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 my-auto items-center">
            
            {/* Left Column: Big Bold Primary Links */}
            <div className="lg:col-span-7 flex flex-col space-y-3 sm:space-y-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white/50 mb-2 block">
                // Navigation
              </span>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="group flex items-baseline gap-4 sm:gap-6 py-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white hover:text-orange-400 transition-colors w-fit"
                >
                  <span className="text-sm sm:text-base md:text-lg font-mono font-bold text-orange-400/80 group-hover:text-orange-400 transition-colors">
                    {item.number}
                  </span>
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-400 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Column: Specialized Solutions & Quick Info */}
            <div className="lg:col-span-5 flex flex-col space-y-8 lg:border-l lg:border-white/15 lg:pl-12">
              
              {/* Specialized Services */}
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white/50 mb-4 block">
                  // Specialized Solutions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {subServices.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      tabIndex={isOpen ? 0 : -1}
                      className="group flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 hover:text-orange-400 p-2 rounded-lg hover:bg-white/5 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-125 transition-transform" />
                        {sub.label}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Project Inquiry Box */}
              <div className="p-5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-orange-400 block mb-1">
                  Have a Project in Mind?
                </span>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  We build custom software, web platforms, and mobile apps for schools, consultancies, and enterprises.
                </p>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-500/20"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* Footer Contact Info Strip */}
          <div className="pt-6 sm:pt-8 border-t border-white/15 mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="tel:+9779867139612"
                tabIndex={isOpen ? 0 : -1}
                className="flex items-center gap-2 text-white/80 hover:text-orange-400 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>+977-9867139612</span>
              </a>

              <a
                href="mailto:info@sutantratechnology.com"
                tabIndex={isOpen ? 0 : -1}
                className="flex items-center gap-2 text-white/80 hover:text-orange-400 transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>info@sutantratechnology.com</span>
              </a>

              <span className="hidden sm:flex items-center gap-2 text-white/60">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>Butwal, Lumbini Province, Nepal</span>
              </span>
            </div>

            <span className="text-[11px] font-mono text-white/40">
              Sutantra Technologies © 2026
            </span>
          </div>

        </div>
      </div>
    </>
  );
}
