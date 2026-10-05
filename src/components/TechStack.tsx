"use client";

const techList = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Go",
  "PostgreSQL", "Docker", "Kubernetes", "AWS", "Google Cloud", "PyTorch"
];

export default function TechStack() {
  return (
    <section id="services" className="py-20 px-6 md:px-16 bg-white border-y border-black/5 text-[#171717]">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-orange-500 font-semibold tracking-widest text-xs uppercase">Modern Stack</span>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight uppercase mt-2 mb-10">
          POWERING NEXT-GEN ENTERPRISE PLATFORMS
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {techList.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 rounded-full bg-black/5 border border-black/10 text-sm md:text-base font-semibold text-[#171717] hover:text-white hover:bg-[#2A3490] hover:border-[#2A3490] transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
