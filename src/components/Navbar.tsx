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
        // 40px offset roughly matches where the navbar sits
        if (rect.top <= 40 && rect.bottom >= 40) {
          currentSection = section;
        }
      });

      if (currentSection) {
        if ((currentSection as HTMLElement).classList.contains("bg-white")) {
          setIsDarkTheme(false);
        } else {
          setIsDarkTheme(true);
        }
      } else if (window.scrollY < 50) {
        setIsDarkTheme(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Services", href: "#services" }
  ];

  const headerBg = isDarkTheme
    ? "backdrop-blur-md"
    : "backdrop-blur-md";

  const textColor = isDarkTheme ? "text-white" : "text-[#171717]";
  const textHover = isDarkTheme ? "hover:text-orange-400" : "hover:text-orange-600";
  const logoSrc = isDarkTheme ? "/logo_light.svg" : "/logo_dark.svg";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 transition-colors duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-2 z-10 transition-transform hover:scale-[1.02]">
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

        {/* Right Hamburger Icon & Quick Contact */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 focus:outline-none transition-colors ${textColor} ${textHover}`}
            aria-label="Toggle navigation menu"
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
          
          {/* Desktop Contact Button */}
          <Link
            href="#contact"
            className={`hidden md:block group relative overflow-hidden px-6 py-2.5 rounded-full font-bold tracking-wide transition-colors duration-300 ${
              isDarkTheme 
                ? "bg-white text-[#2A3490]"
                : "bg-[#2A3490] text-white"
            }`}
          >
            <span className="absolute inset-0 w-full h-full bg-orange-500 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-[-1] bg-[#2A3490] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 mt-16">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group relative inline-block w-fit pb-1 text-3xl font-bold tracking-widest text-white uppercase transition-colors duration-200 hover:text-orange-500"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
