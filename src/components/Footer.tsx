"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="group relative inline-block w-fit text-white hover:text-orange-500 transition-colors duration-300 pb-1">
    {children}
    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-orange-500 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
  </a>
);

export default function Footer() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  return (
    <footer ref={container} className="relative overflow-hidden bg-[#2A3490] text-white py-10 px-6 md:px-16 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10">

          {/* Left Column: Logo & Contact Info */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start gap-6">
            <Image
              src="/logo_light.svg"
              alt="SUTANTRA TECHNOLOGIES"
              width={180}
              height={42}
              className="h-10 w-auto object-contain mb-2"
              priority
              loading="eager"
            />
            <div className="flex flex-col gap-2 text-white/90 font-medium">
              <a href="tel:+9779867139612" className="hover:text-orange-400 transition-colors">
                +977- 9867-139612
              </a>
              <a href="mailto:info@sutantratechnology.com" className="hover:text-orange-400 transition-colors">
                info@sutantratechnology.com
              </a>
            </div>
            <a
              href="/contact"
              className="mt-4 group relative overflow-hidden px-6 py-2.5 rounded-full border border-white/40 text-sm font-semibold tracking-wide text-white transition-colors duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2A3490]">
                CONTACT US
              </span>
            </a>
          </div>

          {/* Middle Column: Navigation + Services */}
          <div className="col-span-1 md:col-span-5 grid grid-cols-2 gap-x-4 items-start">
            {/* Navigation */}
            <div className="flex flex-col items-start">
              <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white">
                Navigation
              </h3>
              <div className="flex flex-col gap-3 text-sm text-white/80">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/projects">Projects</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col items-start">
              <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white">
                Services
              </h3>
              <div className="flex flex-col gap-3 text-sm text-white/80">
                <span className="pb-1">Web Development</span>
                <span className="pb-1">App Development</span>
                <span className="pb-1">AI Solutions</span>
                <span className="pb-1">Cloud Services</span>
              </div>
            </div>
          </div>

          {/* Right Column: Socials */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white">
              Socials
            </h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/sutantradigital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <FiFacebook className="w-5 h-5" />
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/sutantratechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/SutantraDigital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <FaXTwitter className="w-5 h-5" />
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/sutantratechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@sutantratech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <FaTiktok />
              </a>
            </div>

            <h3 className="text-xs font-bold tracking-widest uppercase mt-12 mb-4 text-white">
              Location
            </h3>
            <div className="text-sm text-white/80 leading-relaxed flex flex-col gap-1">
              <span>Butwal, Lumbini Province</span>
              <span>Nepal</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white relative z-10">
          <p>
            © {new Date().getFullYear()} Sutantra Technologies Pvt. Ltd.
          </p>
          <a href="/terms" className="group relative inline-block pb-1 transition-colors duration-300">
            Terms & Conditions
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
          </a>
        </div>
      </div>
    </footer>
  );
}