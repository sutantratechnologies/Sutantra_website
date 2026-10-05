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
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Services", href: "#services" },
  ];

  // When the menu is open its background is blue, so always use light styling
  const lightUI = isDarkTheme || isOpen;

  const textColor = lightUI ? "text-white" : "text-[#171717]";
  const textHover = lightUI ? "hover:text-orange-400" : "hover:text-orange-600";
  const logoSrc = lightUI ? "/logo_light.svg" : "/logo_dark.svg";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isOpen ? "" : "backdrop-blur-md"
        }`}
      >
        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          {/* Logo Left */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 transition-transform hover:scale-[1.02]"
          >
            <Image
              src={logoSrc}
              alt="SUTANTRA TECHNOLOGIES Logo"
              width={180}
              height={42}
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Center Normal Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative inline-block pb-1 text-xs font-bold tracking-widest uppercase transition-colors duration-200 hover:text-orange-500 ${
                  isDarkTheme ? "text-white" : "text-[#171717]"
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
              href="#contact"
              className={`hidden md:block group relative overflow-hidden px-6 py-2.5 rounded-full font-bold tracking-wide transition-colors duration-300 ${
                isDarkTheme ? "bg-white text-[#2A3490]" : "bg-[#2A3490] text-white"
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
        className={`md:hidden fixed inset-0 z-40 h-dvh w-full bg-[#2A3490] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0"
            : "-translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className="group relative inline-block w-fit pb-1 text-3xl font-bold tracking-widest text-white uppercase transition-colors duration-200 hover:text-orange-500"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className="mt-4 rounded-full bg-white px-8 py-3 font-bold tracking-wide text-[#2A3490] transition-colors hover:bg-orange-500 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
