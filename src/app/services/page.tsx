import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Our Services | SUTANTRA TECHNOLOGIES",
  description: "Comprehensive range of design and development services.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    id: "01",
    title: "CONSULTATION",
    description: "Come to Braeside or we come to you. What the space allows, what compliance demands, and an honest budget — before anything is ordered.",
  },
  {
    id: "02",
    title: "DESIGN",
    description: "Flooring, wall panels, lighting, handrails, operating panels, door style — the car is specified like a room, not a machine.",
  },
  {
    id: "03",
    title: "INSTALLATION",
    description: "In-house project managers talk directly to your builder. Mechanical, electrical, testing and sign-off from a single team — and where possible the lift arrives fully assembled and is craned into place, cutting weeks off the program.",
  },
  {
    id: "04",
    title: "RETROFIT & REPLACEMENT",
    description: "Outdated, non-compliant or worn out. With multiple manufacturers to draw on, we can usually fit the existing shaft without major building works.",
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Top Header - White Background */}
      <section className="pt-40 pb-16 px-6 md:px-16 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-6 text-[#171717]">
            SERVICES.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl font-medium">
            We offer a comprehensive range of design and development services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Main Content - Grid Layout */}
      <section className="py-16 px-6 md:px-16 bg-white flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-[#f7f8fa] p-10 md:p-14 flex flex-col items-start transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-[5rem] md:text-[6rem] font-black text-slate-200 leading-none mb-8 tracking-tighter select-none">
                  {service.id}
                </span>
                <h3 className="text-sm md:text-base font-bold tracking-[0.15em] uppercase text-[#111827] mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
