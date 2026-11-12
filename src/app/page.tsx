import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEF1F7] text-[#111827] flex flex-col font-telegraf selection:bg-[#2A3490] selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      {/* <FeaturedProjects /> */}
      <ServicesSection />
      <CoreValuesSection />
      <ProcessSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
