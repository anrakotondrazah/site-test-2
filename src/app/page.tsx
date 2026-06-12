import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ImageTextSection from "@/components/ImageTextSection";
import ProcessSection from "@/components/ProcessSection";
import ComparisonSection from "@/components/ComparisonSection";
import PartnersSection from "@/components/PartnersSection";
import AISection from "@/components/AISection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ImageTextSection />
        <ServicesSection />
        <ProcessSection />
        <ComparisonSection />
        <PartnersSection />
        <AISection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
