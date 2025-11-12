import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { VisionSection } from './components/VisionSection';
import { CTASection } from './components/CTASection';

export default function App() {
  return (
    <main className="bg-gradient-to-b from-white via-blue-50/30 to-lavender-50/20 overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <VisionSection />
      <CTASection />
    </main>
  );
}
