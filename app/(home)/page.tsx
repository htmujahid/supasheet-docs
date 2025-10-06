import { FeaturesSection } from '@/components/feature-section';
import { HeroSection } from '@/components/hero-section';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
