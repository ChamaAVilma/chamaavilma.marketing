import { Header } from "./components/Header";
import { Reveal } from "./components/Reveal";
import { ServiceCatalog } from "./sections/ServiceCatalog";
import { HeroSection } from "./sections/HeroSection";
import { FeaturedServicesSection } from "./sections/FeaturedServicesSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CoverageSection } from "./sections/CoverageSection";
import { ContactSection } from "./sections/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <Reveal direction="bottom">
          <ServiceCatalog />
        </Reveal>

        <FeaturedServicesSection />

        <BenefitsSection />

        <CoverageSection />

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
