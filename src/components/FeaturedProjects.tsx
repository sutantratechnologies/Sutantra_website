import React from "react";

const projects = [
  {
    id: 1,
    title: "First in Country: Swift Pro Home Lift",
    description: "Southern Lifts installed the first Swift Pro home lift in Victoria, providing a modern and efficient solution for residential lift access.",
    tags: ["Swift Pro", "Residential"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    title: "Access upgrades for Architectural Style",
    description: "Southern Lifts installed a Swift Pro home lift into an existing stairwell, providing a seamless and stylish solution for the client.",
    tags: ["Swift Pro", "Retrofit", "Architectural"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-[#2A3490] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight uppercase leading-[0.95] text-white">
            FEATURED <br /> PROJECTS
          </h2>
          <a 
            href="#all-projects" 
            className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-sm font-semibold tracking-wide text-white transition-colors duration-300 w-fit md:mb-4"
          >
            <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2A3490]">
              View All Projects ↗
            </span>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative cursor-pointer ${
                index === 1 ? "md:mt-32" : ""
              }`}
            >
              {/* Image Container with Cyan Matte and White Border */}
              <div className="border-[10px] border-white transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Tags inside image */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold tracking-wide text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Title and Description under image */}
              <div className="mt-6 md:pr-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
