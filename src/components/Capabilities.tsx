"use client";

const capabilities = [
  {
    title: "Web Development",
    description: "Fast, responsive websites, web applications and online stores, built to be found, used and updated by your own team.",
    tag: "01 / WEB",
  },
  {
    title: "Mobile Applications",
    description: "Android and iOS apps from one codebase, designed for real networks, real devices and real users.",
    tag: "02 / MOBILE",
  },
  {
    title: "Graphic & Brand Design",
    description: "Logo and identity systems, print collateral, social creatives and interface design that stay consistent everywhere.",
    tag: "03 / DESIGN",
  },
  {
    title: "Management Software",
    description: "School, consultancy and business systems covering records, attendance, fees, billing, inventory and reporting.",
    tag: "04 / SYSTEMS",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 md:px-16 bg-[#2A3490] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-orange-500 font-semibold tracking-widest text-xs uppercase">Core Competencies</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mt-2">
              ENGINEERED FOR EXCELLENCE
            </h2>
          </div>
          <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-sm md:text-base">
            Delivering robust end-to-end software solutions designed to scale seamlessly with your business ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-orange-400 transition-colors">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold uppercase mt-4 text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                <span className="text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
