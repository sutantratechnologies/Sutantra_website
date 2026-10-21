import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

function formatDisplayUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
  }
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

      {/* Project Showcase Section */}
      <section className="pt-32 md:pt-40 pb-20 px-6 md:px-16 bg-white text-[#171717]">
        <div className="max-w-6xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link
              href="/projects"
              className="group inline-flex items-center text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-[#2A3490] transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </div>

          {/* Header Row: Title & Visit Live Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#171717]">
              {project.title}
            </h1>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#2A3490] text-white hover:bg-orange-500 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] shrink-0 w-fit"
              >
                Visit Live
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            ) : null}
          </div>

          {/* Featured Image Card */}
          <div className="relative w-full aspect-video sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-50 mb-14 md:mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="w-full h-full object-contain"
            />
          </div>

          {/* 2-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Overview, The Challenge, The Solution, Impact */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-10 sm:space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-3 sm:mb-4">
                  OVERVIEW
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* The Challenge */}
              {project.theProblem && (
                <div className="border-l-2 border-[#2A3490] pl-5 sm:pl-6 py-0.5">
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-900 mb-2 sm:mb-3">
                    THE CHALLENGE
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {project.theProblem}
                  </p>
                </div>
              )}

              {/* The Solution */}
              {project.whatWeDid && (
                <div className="border-l-2 border-[#2A3490] pl-5 sm:pl-6 py-0.5">
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-900 mb-2 sm:mb-3">
                    THE SOLUTION
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {project.whatWeDid}
                  </p>
                </div>
              )}

              {/* Impact Card */}
              {project.theResult && (
                <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200/80 shadow-xs">
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-900 mb-2.5">
                    IMPACT
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    {project.theResult}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Tech Stack, Links, Client, Shipped Cards */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-5">
              {/* Tech Stack Card */}
              <div className="rounded-2xl p-6 sm:p-7 bg-slate-50 border border-slate-200/80 shadow-xs">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4">
                  TECH STACK
                </h3>
                <div className="divide-y divide-slate-200/80">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="py-3 first:pt-0 last:pb-0 flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links Card */}
              <div className="rounded-2xl p-6 sm:p-7 bg-slate-50 border border-slate-200/80 shadow-xs">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4">
                  LINKS
                </h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-[#2A3490] hover:text-[#2A3490] transition-all shadow-xs"
                  >
                    <span className="font-mono text-xs sm:text-sm font-medium text-slate-700 group-hover:text-[#2A3490] truncate">
                      {formatDisplayUrl(project.link)}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2A3490] shrink-0 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="px-4 py-3 rounded-xl bg-slate-100/60 border border-slate-200/60 text-xs font-medium text-slate-400">
                    Internal / Private Platform
                  </div>
                )}
              </div>

              {/* Client Card */}
              {project.client && (
                <div className="rounded-2xl p-6 sm:p-7 bg-slate-50 border border-slate-200/80 shadow-xs">
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">
                    CLIENT
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {project.client}
                  </div>
                </div>
              )}

              {/* Shipped Card */}
              {project.year && (
                <div className="rounded-2xl p-6 sm:p-7 bg-slate-50 border border-slate-200/80 shadow-xs">
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">
                    SHIPPED
                  </h3>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {project.year}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-16 bg-[#2A3490] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6 leading-tight">
              Have a similar <span className="text-orange-500">problem?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
              Tell us how your team works today. We will tell you honestly what is worth building — and what is not.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex md:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/50 text-white rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-[#2A3490] transition-all duration-300 shadow-xl whitespace-nowrap"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-16 px-6 md:px-16 bg-white overflow-hidden border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
              Next Project
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 leading-[1.1] mb-4">
              {nextProject.title}
            </h2>
            <div className="text-xs font-bold tracking-[0.1em] text-slate-400 uppercase mb-8">
              {nextProject.tags.join(" • ")}
            </div>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-900 hover:text-orange-500 transition-colors uppercase tracking-widest border-b-2 border-slate-900 hover:border-orange-500 pb-1 w-fit group"
            >
              View Project
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <div className="border-[6px] border-[#2A3490] bg-[#2A3490] rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video w-full relative group overflow-hidden bg-white rounded-xl">
                <Link href={`/projects/${nextProject.slug}`} className="block w-full h-full relative">
                  <Image
                    src={nextProject.image}
                    alt={nextProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
