import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIWorkSection from "@/components/AIWorkSection";
import AIMarketingSection from "@/components/AIMarketingSection";
import SkillsSection from "@/components/SkillsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AIWorkSection />
      <AIMarketingSection />
      <SkillsSection />
      <JourneySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
