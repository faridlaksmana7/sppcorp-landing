import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MetricsSection } from "./components/MetricsSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { CoverageSection } from "./components/CoverageSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ProcessSection } from "./components/ProcessSection";
import { ClientsSection } from "./components/ClientsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState<"en" | "id">("en");

  return (
    <div className="min-h-screen bg-[#060E1F]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <MetricsSection lang={lang} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <PortfolioSection lang={lang} />
      <CoverageSection lang={lang} />
      <WhyChooseSection lang={lang} />
      <ProcessSection lang={lang} />
      <ClientsSection lang={lang} />
      <CTASection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
