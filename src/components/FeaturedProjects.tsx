import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

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
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`group relative cursor-pointer block ${index === 1 ? "md:mt-32" : ""
                }`}
            >
              {/* Image Container with Glassmorphism Effect */}
              <div className="p-2 md:p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
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
                <p className="text-white/60 text-sm mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
