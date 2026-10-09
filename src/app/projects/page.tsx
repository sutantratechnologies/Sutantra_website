import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata = {
  title: "Our Work | SUTANTRA TECHNOLOGIES",
  description: "Browse our portfolio of digital products and web applications.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />
      <ProjectsContent />
      <CtaBanner />
      <Footer />
    </main>
  );
}
