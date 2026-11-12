"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="group relative inline-block w-fit text-white/85 hover:text-white transition-colors duration-300 pb-1">
    {children}
    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
  </Link>
);

export default function Footer() {
  const logoSrc = "/logo_light.png";

  return (
    <div className="bg-[#EEF1F7] px-3 sm:px-5 md:px-6 pt-4 pb-3 sm:pb-5">
      <footer className="relative overflow-hidden bg-[#2A3490] text-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] py-14 md:py-16 font-sans">

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10">
            {/* Left Column: Logo & Brand Description */}
            <div className="col-span-1 md:col-span-4 flex flex-col items-start gap-4">
              <Image
                src={logoSrc}
                alt="SUTANTRA TECHNOLOGIES"
                width={180}
                height={60}
                className="h-10 md:h-12 w-auto object-contain mb-1"
                priority
                loading="eager"
              />
              <p className="text-sm text-white/75 leading-relaxed max-w-sm font-normal">
                A software studio in Nepal building websites, mobile apps, brand identities, and custom management software.
              </p>
              <a
                href="mailto:info@sutantratechnology.com"
                className="text-xs font-semibold text-white/85 hover:text-white transition-colors tracking-wide pt-1"
              >
                info@sutantratechnology.com
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
                  <FooterLink href="/services#web-development">Web Development</FooterLink>
                  <FooterLink href="/services#mobile-app-development">Mobile Apps</FooterLink>
                  <FooterLink href="/services#graphics-brand-design">Graphic Design</FooterLink>
                  <FooterLink href="/services#school-management-software">School Software</FooterLink>
                  <FooterLink href="/services#business-consultancy-systems">Business Systems</FooterLink>
                </div>
              </div>
            </div>

            {/* Right Column: Socials */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white">
                Socials
              </h3>
              <div className="flex flex-wrap gap-3">
                {/* Facebook */}
                <a href="https://www.facebook.com/sutantradigital" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                  <FiFacebook className="w-5 h-5" />
                </a>
                {/* Instagram */}
                <a href="https://instagram.com/sutantratechnology" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                  <FaInstagram className="w-5 h-5" />
                </a>
                {/* X (Twitter) */}
                <a href="https://x.com/SutantraDigital" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                  <FaXTwitter className="w-5 h-5" />
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/company/sutantratechnology" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@sutantratech" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                  <FaTiktok />
                </a>
              </div>

              <h3 className="text-xs font-bold tracking-widest uppercase mt-10 mb-4 text-white">
                Location
              </h3>
              <div className="text-sm text-white/80 leading-relaxed flex flex-col gap-1">
                <span>Butwal, Lumbini Province</span>
                <span>Nepal</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 border-t border-white/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/85 relative z-10">
            <p>
              © {new Date().getFullYear()} Sutantra Technologies Pvt. Ltd.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="group relative inline-block pb-1 transition-colors duration-300 hover:text-white">
                Terms &amp; Conditions
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/privacy" className="group relative inline-block pb-1 transition-colors duration-300 hover:text-white">
                Privacy Policy
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
