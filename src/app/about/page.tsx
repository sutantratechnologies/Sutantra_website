import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "About Us | SUTANTRA TECHNOLOGIES",
  description: "Learn more about Sutantra Technologies and our digital engineering expertise.",
};

const founders = [
  {
    name: "Pyarjan Thapa",
    initials: "PT",
    email: "info@pyarjanthapa.com.np",
    linkedin: "https://www.linkedin.com/in/pyarjanthapa",
    portfolio: "https://pyarjanthapa.com.np",
    image: "/pyarjan.png",
    description: "Visionary leader driving AI and enterprise solutions."
  },
  {
    name: "Ashok Rimal",
    initials: "AR",
    email: "ashokrimal@sutantratechnology.com",
    linkedin: "https://www.linkedin.com/in/lamirkohsa",
    portfolio: "https://ashokrimal.com.np",
    image: "/ashok.png",
    description: "Architecting scalable and robust cloud infrastructures."
  },
  {
    name: "Paras Shrestha",
    initials: "PS",
    email: "paras@sutantratechnology.com",
    linkedin: "https://www.linkedin.com/in/paras-shrestha-37a333266",
    portfolio: "https://parasshrestha.com.np",
    image: "/paras.png",
    description: "Crafting beautiful and intuitive user experiences."
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Top Header & Stats */}
      <section className="pt-40 pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter uppercase leading-[0.95] mb-8 text-[#171717]">
            ENTERPRISE<br/>DIGITAL ARCHITECTS
          </h1>
          <p className="text-base md:text-lg text-black/70 max-w-3xl font-medium mb-20 leading-relaxed">
            We don't make the standard... we choose them. For years we've been building the best software solutions for enterprises right here and globally. From robust microservices to fully automated AI designs, we match the right technology to your business needs, without the Australian or US price tag.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t-[3px] border-[#171717] pt-8">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">5+</span>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">20+</span>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Enterprise Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">03</span>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Founding Partners</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">24/7</span>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Client Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & At a Glance */}
      <section className="py-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Who We Are */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase border-b-[3px] border-[#171717] pb-4 mb-8">
                WHO WE ARE
              </h2>
              <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                <p>
                  Right here in Nepal, we have a team of designers, software engineers, project managers, and AI specialists. We carry a project from the first consultation about what you want—through design and software coding, and on to final deployment and 24/7 emergency support—the entire lifecycle every step of the way.
                </p>
                <p>
                  Years of collective experience has taught us the hard parts to software. It is a pacing environment in a global market full of over-complicated tech talk. We cut through the noise, delivering world-class standard architecture with unbeatable local reliability.
                </p>
              </div>
            </div>

            {/* Right: At a Glance */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase border-b-[3px] border-[#171717] pb-4 mb-8">
                AT A GLANCE
              </h2>
              <div className="flex flex-col text-[11px] md:text-xs uppercase tracking-widest font-bold">
                <div className="grid grid-cols-3 py-5 border-b border-slate-200">
                  <span className="text-slate-400">ESTABLISHED</span>
                  <span className="col-span-2 text-right md:text-left text-black">2026 (5+ Years Ind. Exp)</span>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-slate-200">
                  <span className="text-slate-400">LOCATION</span>
                  <span className="col-span-2 text-right md:text-left text-black">Butwal, Lumbini</span>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-slate-200">
                  <span className="text-slate-400">TEAM</span>
                  <span className="col-span-2 text-right md:text-left text-black">Design, Dev, AI, Cloud</span>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-slate-200">
                  <span className="text-slate-400">SCOPE</span>
                  <span className="col-span-2 text-right md:text-left text-black">B2B SaaS, Mobile, Web</span>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-slate-200">
                  <span className="text-slate-400">COMPLIANCE</span>
                  <span className="col-span-2 text-right md:text-left text-black">AWS, GCP, VERCEL</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dark Blue: How We Get On Your List */}
      <section className="py-24 px-6 md:px-16 bg-[#2A3490] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase mb-4">
            HOW A DEVELOPER GETS ON OUR LIST
          </h2>
          <p className="text-xs md:text-sm text-white/80 uppercase tracking-widest font-bold mb-16 border-b border-white/20 pb-8 inline-block pr-12">
            Four questions. All four have to be Yes, or we don't code them.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
            
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest mb-4 border-b border-white/30 pb-2 w-12">01.</span>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 leading-tight">DOES IT FIT THE NEED?</h4>
              <p className="text-xs leading-relaxed text-white/70">
                It's strictly business first. We verify whether the architecture can actually solve your problem or if it's over-engineered.
              </p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest mb-4 border-b border-white/30 pb-2 w-12">02.</span>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 leading-tight">IS IT COMPLIANT?</h4>
              <p className="text-xs leading-relaxed text-white/70">
                Are data, security and cloud infrastructure compliant with modern standards and reliable? We check the whole stack.
              </p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest mb-4 border-b border-white/30 pb-2 w-12">03.</span>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 leading-tight">CAN WE DELIVER?</h4>
              <p className="text-xs leading-relaxed text-white/70">
                We only take on projects where our tech stack is a 100% fit. We have deep expertise for this exact reason.
              </p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest mb-4 border-b border-white/30 pb-2 w-12">04.</span>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 leading-tight">WILL WE SERVICE IT?</h4>
              <p className="text-xs leading-relaxed text-white/70">
                We only build what our own team knows and stands waiting to maintain for months/years ahead.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Three That Made It (Founding Members) */}
      <section className="py-24 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase border-b-[3px] border-[#171717] pb-6 mb-16">
            THE THREE THAT MADE IT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {founders.map((member, index) => (
              <div key={index} className="flex flex-col items-center w-full max-w-[320px] mx-auto md:mx-0">
                {/* The Card */}
                <div className="group relative w-full aspect-[4/5] bg-[#2A3490] rounded-[2.5rem] flex flex-col items-center justify-end transition-all duration-500 hover:shadow-2xl shadow-lg border-4 border-white overflow-visible mb-4 md:mb-0">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20 rounded-[2.5rem] overflow-hidden pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`pattern_scribble_${index}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M15 15 C 20 5, 40 5, 45 15 S 40 30, 30 30 S 15 25, 15 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="50" cy="50" r="3" fill="currentColor" />
                          <circle cx="10" cy="50" r="2" fill="currentColor" />
                          <path d="M45 45 L 55 55 M 55 45 L 45 55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern_scribble_${index})`} className="text-white" />
                    </svg>
                  </div>

                  {/* Short Description (Hover) */}
                  <div className="absolute bottom-6 left-6 right-10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <p className="text-white font-medium text-sm leading-relaxed drop-shadow-md">
                      {member.description}
                    </p>
                  </div>

                  {/* Avatar / Image */}
                  <div className="absolute bottom-0 w-full h-full flex items-end justify-center z-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-[120%] h-[110%] object-cover object-top drop-shadow-2xl translate-y-4" />
                    ) : (
                      <div className="w-[85%] h-[85%] bg-white/10 rounded-t-[5rem] flex items-center justify-center text-7xl font-extrabold text-white/30 border-t border-white/20">
                        {member.initials}
                      </div>
                    )}
                  </div>

                  {/* Vertical Links on Side */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
                    <a href={`mailto:${member.email}`} className="w-11 h-11 bg-white text-[#2A3490] hover:text-orange-500 transition-colors rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white text-[#2A3490] hover:text-orange-500 transition-colors rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-100">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white text-[#2A3490] hover:text-orange-500 transition-colors rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </a>
                  </div>
                </div>

                {/* Name Below Card */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 w-full">
                  <h4 className="text-xl font-extrabold text-[#111827] uppercase">{member.name}</h4>
                  <p className="text-slate-500 text-xs font-bold mt-1 uppercase tracking-widest">Co-Founder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How A Project Runs */}
      <section className="pb-32 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase border-b-[3px] border-[#171717] pb-6 mb-4">
            HOW A PROJECT RUNS
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest mb-16">
            Six steps, the same every time — and the reasons come after 5+ years building.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            <div className="flex flex-col border-t-2 border-slate-200 pt-6">
              <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4">01. CONSULT</h4>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">Our first step starts with a consultation, where your needs are checked and specified. We lock requirements and compliance for your scope.</p>
            </div>
            <div className="flex flex-col border-t-2 border-slate-200 pt-6">
              <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4">02. DESIGN</h4>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">Looking at the big picture through wireframes, architecture, and operation plans. Everything out of our hands gets drawn out reliably.</p>
            </div>
            <div className="flex flex-col border-t-2 border-slate-200 pt-6">
              <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4">03. ARCHITECTURE</h4>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">Our project managers map out and assemble the teams (dev, design, cloud) that fits your business requirements.</p>
            </div>
            <div className="flex flex-col border-t-2 border-slate-200 pt-6">
              <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4">04. BUILD</h4>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">Technicians bring the stack to life — from frontend rendering to backend APIs, coded entirely by our in-house crew.</p>
            </div>
            <div className="flex flex-col border-t-2 border-slate-200 pt-6">
              <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4">05. DEPLOYMENT</h4>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">Final connections, everything switched on, compliance checks performed and a project that is ready to scale.</p>
            </div>
            <div className="flex flex-col border-t-2 border-slate-200 pt-6">
              <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4">06. SERVICE</h4>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">We switch into maintenance mode. Our tech teams keep the infra running, letting you run the business.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

      <Footer />
    </main>
  );
}
