import { HeroSection } from "@/components/sections/hero";
import { FeatureSection } from "@/components/sections/feature";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
