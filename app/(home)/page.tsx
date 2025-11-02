import { FeaturesSection } from '@/components/feature-section';
import { HeroSection } from '@/components/hero-section';
import { CMSHighlights } from '@/components/cms-highlights';
import { TechStack } from '@/components/tech-stack';
import { UseCases } from '@/components/use-cases';
import { WhyChoose } from '@/components/why-choose';
import { GettingStarted } from '@/components/getting-started';
import { FinalCTA } from '@/components/final-cta';
import { Integrations } from '@/components/integrations';
import { FAQSection } from '@/components/faq-section';
import { FooterSection } from '@/components/footer-section';
import { StatsSection } from '@/components/stats-section';

export default function HomePage() {
  return (
    <>
      <main className="flex flex-1 flex-col justify-center text-center">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CMSHighlights />
        <WhyChoose />
        <UseCases />
        <TechStack />
        <Integrations />
        <GettingStarted />
        <FAQSection />
        <FinalCTA />
      </main>
      <FooterSection />
    </>
  );
}
