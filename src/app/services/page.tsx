import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Our Services | SUTANTRA TECHNOLOGIES",
  description:
    "Web development, mobile apps, graphic and brand design, and custom management software for schools, consultancies and growing businesses.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    id: "01",
    title: "WEB DEVELOPMENT",
    description:
      "Websites, landing pages, portals and web apps built for speed, search visibility and everyday use. We handle everything from the first wireframe to hosting, so you get one team instead of five vendors.",
    items: ["Business & portfolio sites", "Custom web applications", "E-commerce & payments", "Hosting, domains & maintenance"],
  },
  {
    id: "02",
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Android and iOS apps built from a single codebase, so a launch on both platforms does not mean two budgets. Designed for real conditions: slow connections, modest devices and users who expect instant feedback.",
    items: ["Cross-platform Android & iOS", "Customer & staff apps", "Offline-capable flows", "Store submission & updates"],
  },
  {
    id: "03",
    title: "GRAPHICS & BRAND DESIGN",
    description:
      "Identity work that holds up outside the design file. Logo and brand systems, print collateral, social creatives and UI design that all speak the same visual language.",
    items: ["Logo & brand identity", "UI / UX design", "Brochures & print", "Social media creatives"],
  },
  {
    id: "04",
    title: "SCHOOL MANAGEMENT SOFTWARE",
    description:
      "A complete platform for schools and colleges: admissions, student records, attendance, fees, exams, results and parent communication. Built to match your academic calendar and reporting requirements.",
    items: ["Admissions & student records", "Attendance & timetables", "Fees, invoices & receipts", "Exams, results & report cards"],
  },
  {
    id: "05",
    title: "BUSINESS & CONSULTANCY SYSTEMS",
    description:
      "Custom software for consultancies, agencies, clinics and service businesses — enquiry to delivery in one place. Your team stops stitching spreadsheets together and starts working from a single source of truth.",
    items: ["Clients, leads & pipelines", "Projects & task tracking", "Quotations & invoicing", "Staff roles & permissions"],
  },
  {
    id: "06",
    title: "MAINTENANCE & SUPPORT",
    description:
      "Software is never finished. We keep what we build — and what others built — patched, backed up, monitored and improving, with a named contact who already knows your system.",
    items: ["Updates & security patches", "Backups & monitoring", "Feature enhancements", "Staff training & handover"],
  },
];

const industries = [
  {
    title: "Schools & Colleges",
    description:
      "Admissions, attendance, fees, exams, transport and parent updates — managed from one dashboard instead of a stack of registers.",
  },
  {
    title: "Consultancies & Agencies",
    description:
      "Track enquiries, proposals, projects, documents and billing in a system that reflects how your team actually sells and delivers.",
  },
  {
    title: "Retail & Distribution",
    description:
      "Inventory, purchases, sales, supplier records and daily reporting, with barcode-ready flows for busy counters.",
  },
  {
    title: "Clinics & Service Businesses",
    description:
      "Appointments, patient or client histories, billing and follow-ups, with access rules that keep sensitive data where it belongs.",
  },
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
            Web, mobile, design and custom management software — planned, built and supported by one in-house team in Butwal.
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
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="bg-[#f7f8fa] p-10 md:p-14 flex flex-col items-start transition-transform duration-300 hover:-translate-y-1 scroll-mt-28"
              >
                <span className="text-[5rem] md:text-[6rem] font-black text-slate-200 leading-none mb-8 tracking-tighter select-none">
                  {service.id}
                </span>
                <h3 className="text-sm md:text-base font-bold tracking-[0.15em] uppercase text-[#111827] mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 w-full border-t border-slate-200 pt-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 font-medium">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Build For */}
      <section className="py-24 px-6 md:px-16 bg-[#2A3490] text-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-4 block">
            Who we build for
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mb-6">
            Every organisation runs on rules. We turn yours into software.
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mb-16">
            We are not trying to sell the same template to everyone. We start with your forms, your approvals, your fee structure and your reporting, then build the system around them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {industries.map((industry, index) => (
              <div key={industry.title} className="border-t border-white/20 pt-6 flex gap-6">
                <span className="text-sm font-bold text-white/40 tabular-nums shrink-0">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
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
