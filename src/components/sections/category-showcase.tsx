import { ArrowRight } from "lucide-react";

import { Eyebrow } from "@/components/brand";
import { DecorativeVideo } from "@/components/decorative-video";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SHOP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { label: "LED Lighting", video: "/images/home/c-1.mp4", tile: "bg-sun", place: "lg:col-span-2" },
  { label: "Accessories", video: "/images/home/c-2.mp4", tile: "bg-sage-pale", place: "lg:col-span-2" },
  { label: "Personal Care", video: "/images/home/c-3.mp4", tile: "bg-cream", place: "lg:col-span-2" },
  { label: "Home Appliances", video: "/images/home/c-4.mp4", tile: "bg-gold", place: "lg:col-span-3" },
  { label: "Wires & Cables", video: "/images/home/c-5.mp4", tile: "bg-sage", place: "sm:col-span-2 lg:col-span-3" },
] as const;

export function CategoryShowcase() {
  return (
    <section id="section-category-showcase" className="pb-section-sm sm:pb-section">
      <div className="container-site">
        <ScrollReveal className="text-center">
          <Eyebrow>02 / Our Categories</Eyebrow>
          <h2 className="text-section-title mt-5 font-heading text-ink">
            Explore the{" "}
            <span className="text-sage-gradient pr-[0.08em]">Range</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm text-ink-muted">
            A category for every corner of your home. Five ranges, one standard
            of quality.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-14">
          {CATEGORIES.map(({ label, video, tile, place }, i) => (
            <ScrollReveal key={label} delay={(i % 3) * 0.1} className={place}>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={cn(
                    "relative flex h-[clamp(300px,34vw,500px)] items-center justify-center overflow-hidden",
                    tile
                  )}
                >
                  <span className="absolute top-5 left-5 text-xs text-ink/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute aspect-square h-[86%] rounded-full bg-paper/15 transition-transform duration-700 ease-out group-hover:scale-110" />
                  <span className="absolute aspect-square h-[74%] rounded-full bg-paper/20 transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="relative aspect-square h-[62%] overflow-hidden rounded-full shadow-[0_24px_50px_-20px_rgb(35_36_30/0.5)] transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                    <DecorativeVideo src={video} className="scale-110" />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-heading text-2xl text-ink sm:text-[1.875rem]">
                    {label}
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-300 group-hover:border-moss group-hover:bg-moss group-hover:text-paper">
                    <ArrowRight className="size-4" strokeWidth={1.5} />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
