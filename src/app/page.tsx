import HeroSection from '@/components/home/HeroSection';
import BarelyZeroStory from '@/components/home/BarelyZeroStory';
import ScallopStory from '@/components/home/ScallopStory';
import CuratedGrid from '@/components/home/CuratedGrid';
import BrandMoment from '@/components/home/BrandMoment';
import LivingCollection from '@/components/home/LivingCollection';
import InTheWorld from '@/components/home/InTheWorld';
import Testimonial from '@/components/home/Testimonial';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Barely Zero Story — the original */}
      <BarelyZeroStory />

      {/* Section 3: Scallop Bra — hero growth product */}
      <ScallopStory />

      {/* Section 4: Curated Editorial Grid */}
      <CuratedGrid />

      {/* Section 4: Brand World Moment */}
      <BrandMoment />

      {/* Section 5: Living Collection */}
      <LivingCollection />

      {/* Section 6: In the World */}
      <InTheWorld />

      {/* Section 7: Curated Testimonial */}
      <Testimonial />

      {/* Section 8: Newsletter + Press */}
      <Newsletter />
    </>
  );
}
