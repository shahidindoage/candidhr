import { Hero } from '../components/Hero';
import { StatsBanner } from '../components/StatsBanner';
import { FeatureDeepDives } from '../components/FeatureDeepDives';
import { IspSolutionsGrid } from '../components/IspSolutionsGrid';
import { RoiCalculator } from '../components/RoiCalculator';
import { WhyNetzur } from '../components/WhyNetzur';
import { CustomerSpotlight } from '../components/CustomerSpotlight';
import { ResourcesSection } from '../components/ResourcesSection';
import { CtaBanner } from '../components/CtaBanner';

// Accept onOpenDemo as a prop so buttons can still trigger the modal
export default function Home1() {
  return (
    <>
      {/* 1. Hero Experience with Interactive ISP SaaS Dashboard */}
      <Hero />

      {/* 2. Why ISPs Choose Netzur */}
      <WhyNetzur />

      {/* 3. Enterprise Stats & Trusted Operators Banner */}
      {/* <StatsBanner /> */}

      {/* 4. Core Feature Deep Dives */}
      <FeatureDeepDives  />

      {/* 5. Solutions in Action */}
      <IspSolutionsGrid  />

      {/* 6. Interactive ROI & Unbilled Revenue Leakage Calculator */}
      {/* <RoiCalculator onOpenDemo={onOpenDemo} /> */}

      {/* 7. Customer Success Spotlight */}
      <CustomerSpotlight />

      {/* 8. Telecom Engineering & BSS Insights Resources */}
      {/* <ResourcesSection onOpenDemo={onOpenDemo} /> */}

      {/* 9. Conversion Banner */}
      {/* <CtaBanner onOpenDemo={onOpenDemo} /> */}
    </>
  );
}