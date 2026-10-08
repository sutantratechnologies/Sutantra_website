import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Careers | SUTANTRA TECHNOLOGIES",
  description: "Join our team at Sutantra Technologies.",
};

const jobs: any[] = [];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Top Header - White Background */}
      <section className="pt-40 pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-6 text-[#171717]">
            CAREERS.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl font-medium">
            Join us in building the future of digital solutions. We're always looking for talented individuals to join our growing team.
          </p>
        </div>
      </section>

      {/* Main Content - Blue Background */}
      <section className="py-24 px-6 md:px-16 bg-[#2A3490] text-white flex-grow min-h-[50vh]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-12">Open Positions</h2>
          
          {jobs.length > 0 ? (
            <div className="flex flex-col">
              {jobs.map((job, index) => (
                <div 
                  key={job.id} 
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between py-10 group ${
                    index === 0 ? "border-t border-white/20" : "border-t border-white/20"
                  }`}
                >
                  <div className="flex flex-col mb-6 md:mb-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#00d2ff] transition-colors mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/60 text-sm font-medium tracking-wide">
                      <span>{job.type}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30"></span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <Link 
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/30 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#2A3490] transition-colors duration-300"
                  >
                    Apply Now ↗
                  </Link>
                </div>
              ))}
              <div className="border-t border-white/20" />
            </div>
          ) : (
            <div className="py-12 border-t border-b border-white/20">
              <p className="text-white/70 text-lg">There are currently no open positions. Please check back later.</p>
            </div>
          )}
          
          <div className="mt-20 text-center">
            <p className="text-white/60 mb-6">Don't see a role that fits? Send us your resume anyway.</p>
            <a href="mailto:careers@sutantratechnology.com" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2A3490] rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
