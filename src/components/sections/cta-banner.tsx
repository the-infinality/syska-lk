import { Sparkles } from "lucide-react";

import { PillLink } from "@/components/brand";
import { DecorativeVideo } from "@/components/decorative-video";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SHOP_URL } from "@/lib/site";

export function CtaBanner() {
  return (
    <section id="section-cta-banner" className="pb-section-sm sm:pb-section">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6">
        <ScrollReveal className="relative overflow-hidden bg-moss px-7 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-28">
          <DecorativeVideo
            src="/images/home/bulbs.mp4"
            poster="/images/home/bulbs-poster.jpg"
            className="absolute inset-y-0 right-0 w-full opacity-60 mix-blend-screen [mask-image:linear-gradient(to_right,transparent_5%,black_55%)] lg:w-[62%] lg:opacity-90 lg:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
          />
          <svg
            aria-hidden
            viewBox="0 0 600 400"
            className="pointer-events-none absolute -top-24 -right-28 w-[640px] text-paper/15"
            fill="none"
          >
            <ellipse
              cx="330"
              cy="230"
              rx="300"
              ry="130"
              transform="rotate(-24 330 230)"
              stroke="currentColor"
            />
            <ellipse
              cx="300"
              cy="140"
              rx="320"
              ry="160"
              transform="rotate(8 300 140)"
              stroke="currentColor"
            />
          </svg>
          <Sparkles
            aria-hidden
            className="absolute top-8 right-8 size-8 text-sun sm:top-10 sm:right-12"
            strokeWidth={1.25}
            fill="currentColor"
          />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-eyebrow font-semibold uppercase text-gold">
                Your Home, Reimagined
              </p>
              <h2 className="text-section-title mt-6 font-heading text-paper">
                Ready to upgrade
                <br />
                your <span className="text-sun-gradient pr-[0.08em]">lighting?</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/75">
                Explore the full Syska range and find the right fit for every
                room in your home.
              </p>
            </div>
            <PillLink
              href={SHOP_URL}
              external
              variant="cream"
              className="self-start lg:mr-8 lg:self-center"
            >
              Upgrade Today
            </PillLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
