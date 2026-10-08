"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  // Animate from translateY(200px) down to 0 as the footer comes into view
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <footer ref={container} className="relative overflow-hidden bg-[#2A3490] text-white py-16 px-6 md:px-16 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

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
              <a href="mailto: info@sutantratechnology.com" className="hover:text-orange-400 transition-colors">
                info@sutantratechnology.com
              </a>
            </div>
            <a
              href="#contact"
              className="mt-4 group relative overflow-hidden px-6 py-2.5 rounded-full border border-white/40 text-sm font-semibold tracking-wide text-white transition-colors duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2A3490]">
                CONTACT US
              </span>
            </a>
          </div>

          {/* Middle Column: Navigation */}
          <div className="col-span-1 md:col-span-5">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-white/80">
              <div className="flex flex-col gap-3">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/projects">Projects</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
              </div>
              <div className="flex flex-col gap-3">
                <FooterLink href="#web-dev">Web Development</FooterLink>
                <FooterLink href="#app-dev">App Development</FooterLink>
                <FooterLink href="#ai">AI Solutions</FooterLink>
                <FooterLink href="#cloud">Cloud Services</FooterLink>
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
              <a href="https://facebook.com/sutantratechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/sutantratechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/SutantraDigital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/sutantratechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@sutantratech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2A3490] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.25-.8 4.54-2.19 6.28-1.57 2-4.04 3.32-6.57 3.23-2.61-.09-5.11-1.39-6.66-3.35-1.55-1.95-2.22-4.52-1.74-6.99.37-2.03 1.5-3.86 3.14-5 1.58-1.1 3.52-1.5 5.42-1.16v4.14c-1.3-.12-2.65.17-3.69.96-.92.68-1.5 1.76-1.5 2.89-.01 1.13.56 2.22 1.48 2.9.91.68 2.11.96 3.2.73 1.35-.29 2.5-1.38 2.79-2.73.1-.47.14-.96.14-1.44V.02z" />
                </svg>
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
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white relative z-10">
          <p>
            © {new Date().getFullYear()} Sutantra Technologies Pvt. Ltd.
          </p>
          <a href="#terms" className="group relative inline-block pb-1 transition-colors duration-300">
            Terms & Conditions
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
          </a>
        </div>

        {/* Giant Background Text */}
        <div className="w-full flex justify-center items-center mt-12 md:mt-16 select-none pointer-events-none">
          <motion.span 
            style={{ y }}
            className="text-[16vw] md:text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent"
          >
            SUTANTRA
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
