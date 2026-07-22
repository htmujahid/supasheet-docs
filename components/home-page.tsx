import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { HeroSection } from '@/components/hero-section';
import { UseCases } from '@/components/use-cases';
import { ProblemSection } from '@/components/problem-section';
import { FeaturesSection } from '@/components/feature-section';
import { CMSHighlights } from '@/components/cms-highlights';
import { ComparisonSection } from '@/components/comparison-section';
import { WhyChoose } from '@/components/why-choose';
import { StatsSection } from '@/components/stats-section';
import { FAQSection } from '@/components/faq-section';
import { FinalCTA } from '@/components/final-cta';
import { FooterSection } from '@/components/footer-section';

/**
 * The marketing homepage, rendered at `/` from `app/(docs)/[[...slug]]/page.tsx`
 * when there is no slug. Uses fumadocs' `HomeLayout` (plain top nav, no docs
 * sidebar) instead of `DocsLayout`, which is applied separately for actual
 * doc pages so docs navigation is unaffected.
 */
export function HomePage() {
  return (
    <HomeLayout {...baseOptions()} links={[{ text: 'Documentation', url: '/installation' }]}>
      <main className="flex flex-1 flex-col justify-center text-center">
        <HeroSection />
        <UseCases />
        <ProblemSection />
        <FeaturesSection />
        <CMSHighlights />
        <ComparisonSection />
        <WhyChoose />
        <StatsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <FooterSection />
    </HomeLayout>
  );
}
