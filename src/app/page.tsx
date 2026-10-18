import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FestivalOffer from "@/components/FestivalOffer";
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
    <main className="min-h-screen bg-white text-[#171717] flex flex-col font-telegraf selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      {/* Seasonal campaign — remove this one line to take it down */}
      <FestivalOffer />
      <AboutSection />
      <FeaturedProjects />
      <ServicesSection />
      <CoreValuesSection />
      <ProcessSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
