import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return {};

  return {
    title: `${project.title} | SUTANTRA TECHNOLOGIES`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const currentIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);
  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-16 bg-[#2A3490] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>

          <div className="flex flex-col gap-12">
            <div className="w-full">
              <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tight mb-6 leading-tight uppercase">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 w-full">
                {project.fullDescription}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/50 mb-2 font-semibold">Client</h4>
                  <p className="font-medium text-white">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/50 mb-2 font-semibold">Year</h4>
                  <p className="font-medium text-white">{project.year}</p>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <h4 className="text-sm uppercase tracking-wider text-white/50 mb-2 font-semibold">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/90">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group w-full mt-4">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 inline-flex items-center justify-center px-8 py-4 bg-white text-[#2A3490] rounded-full font-bold hover:scale-105 transition-transform shadow-lg z-10"
                >
                  Live Preview
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem, What We Did, The Result */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#2A3490]">
                The Problem
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-xl text-black/80 leading-relaxed">
                {project.theProblem}
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/10"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#2A3490]">
                What We Did
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-xl text-black/80 leading-relaxed">
                {project.whatWeDid}
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/10"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#2A3490]">
                The Result
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-xl text-black/80 leading-relaxed">
                {project.theResult}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-16 bg-[#2A3490] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-6">
              Have a similar <span className="text-orange-500">problem?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Tell us how your team works today. We will tell you honestly what is worth building — and what is not.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex md:justify-end">
            <Link 
              href="/#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/50 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#2A3490] transition-colors duration-300 shadow-xl whitespace-nowrap"
            >
              Start a Project
              <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-16 px-6 md:px-16 bg-white overflow-hidden border-t border-black/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.2em] text-black/40 uppercase mb-3">
              Next Project
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-black leading-[1.1] mb-5">
              {nextProject.title}
            </h2>
            <div className="text-xs font-bold tracking-[0.1em] text-black/40 uppercase mb-8">
              {nextProject.tags.join(" • ")}
            </div>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center text-sm font-bold text-black hover:text-orange-500 transition-colors uppercase tracking-widest border-b-2 border-black hover:border-orange-500 pb-1 w-fit group"
            >
              View Project
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <div className="border-[6px] border-[#2A3490] bg-[#2A3490] rounded-2xl">
              <div className="aspect-video w-full relative group overflow-hidden bg-white rounded-xl">
                <Link href={`/projects/${nextProject.slug}`} className="block w-full h-full">
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
