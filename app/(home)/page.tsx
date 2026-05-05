import { FeaturesSection } from '@/components/feature-section';
import { HeroSection } from '@/components/hero-section';
import { CMSHighlights } from '@/components/cms-highlights';
import { UseCases } from '@/components/use-cases';
import { WhyChoose } from '@/components/why-choose';
import { FinalCTA } from '@/components/final-cta';
import { FooterSection } from '@/components/footer-section';
import { StatsSection } from '@/components/stats-section';
import { ProblemSection } from '@/components/problem-section';
import { ComparisonSection } from '@/components/comparison-section';
import { FAQSection } from '@/components/faq-section';

export default function HomePage() {
  return (
    <>
      <main className="flex flex-1 flex-col justify-center text-center">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <CMSHighlights />
        <UseCases />
        <ComparisonSection />
        <WhyChoose />
        <StatsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <FooterSection />
    </>
  );
}
