import { Hero } from "@/components/hero";
import { FeaturedSpotlight } from "@/components/sections/featured-spotlight";
import { CategoryShowcase } from "@/components/sections/category-showcase";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSpotlight />
      <CategoryShowcase />
      <CtaBanner />
    </>
  );
}
