"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { PillLink } from "@/components/brand";
import { SHOP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const BASE_DELAY = 0.3;
const SLIDE_MS = 5500;

const SLIDES = [
  {
    src: "/images/home/banner-2.jpg",
    product: "/images/home/banner-2-1.png",
    productAlt: "Syska decorative lighting",
    caption: "Warmth, engineered",
  },
  {
    src: "/images/home/banner-1.jpg",
    product: "/images/home/banner-1-1.png",
    productAlt: "Syska smart LED bulb",
    caption: "Homes that glow",
  },
  {
    src: "/images/home/banner-3.jpg",
    product: "/images/home/banner-3-1.png",
    productAlt: "Syska ambient lighting",
    caption: "Built for the city",
  },
] as const;

function delay(seconds: number) {
  return { animationDelay: `${BASE_DELAY + seconds}s` };
}

export function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % SLIDES.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, [slide]);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 size-[34rem] rounded-full bg-[radial-gradient(circle,rgb(247_208_112/0.22),transparent_65%)]"
      />

      <div className="container-site relative grid grid-cols-1 items-center gap-14 pt-14 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-16 lg:pb-28">
        <div>
          <div className="animate-rise flex items-center gap-4" style={delay(0)}>
            <span className="h-px w-10 bg-sage" />
            <span className="text-eyebrow font-medium uppercase text-moss">
              Energy-Efficient LED Lighting
            </span>
          </div>

          <h1 className="text-display mt-8 font-heading text-ink">
            <span className="animate-rise block" style={delay(0.12)}>
              Light Years
            </span>
            <span
              className="animate-rise relative block w-fit pl-[0.7em] sm:pl-[0.75em]"
              style={delay(0.24)}
            >
              <span className="text-sage-gradient pr-[0.08em]">Ahead.</span>
              <svg
                aria-hidden
                viewBox="0 0 320 24"
                className="absolute -bottom-[0.12em] left-[38%] w-[56%] text-gold"
                fill="none"
              >
                <path
                  d="M4 18 C 90 22, 210 18, 316 4"
                  pathLength={1}
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-draw"
                  style={delay(0.7)}
                />
              </svg>
            </span>
          </h1>

          <div className="sm:pl-[clamp(2.4rem,4.6vw,5.25rem)]">
            <p
              className="animate-rise mt-10 max-w-md text-base leading-[1.75] text-ink-muted sm:text-[1.0625rem]"
              style={delay(0.36)}
            >
              Smart, energy-efficient lighting solutions built to save up to 90%
              more power for every room, every mood.
            </p>

            <div
              className="animate-rise mt-10 flex flex-wrap items-center gap-3"
              style={delay(0.48)}
            >
              <PillLink href="/contact" className="min-w-[160px]">
                Contact Us
              </PillLink>
              <PillLink
                href={SHOP_URL}
                external
                variant="outline"
                className="min-w-[150px]"
              >
                Explore Products
              </PillLink>
            </div>
          </div>
        </div>

        <div
          className="animate-rise relative mx-auto w-full max-w-[560px] lg:mr-0 lg:ml-auto"
          style={delay(0.1)}
        >
          <div className="relative aspect-square overflow-hidden rounded-[50%_50%_10px_10px/50%_50%_10px_10px] bg-night shadow-[0_40px_80px_-30px_rgb(35_36_30/0.35)]">
            {SLIDES.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt=""
                fill
                preload={i === 0}
                loading="eager"
                sizes="(min-width: 1024px) 560px, 92vw"
                className={cn(
                  "object-cover transition-[opacity,scale] duration-[1400ms] ease-out",
                  i === slide ? "scale-100 opacity-100" : "scale-[1.08] opacity-0"
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            {SLIDES.map((s, i) => (
              <div
                key={s.product}
                className={cn(
                  "absolute right-0 bottom-0 aspect-[687/596] w-[62%] transition-[opacity,translate] duration-[1000ms] ease-out",
                  i === slide
                    ? "translate-y-0 opacity-100 delay-300"
                    : "translate-y-6 opacity-0"
                )}
              >
                <Image
                  src={s.product}
                  alt={s.productAlt}
                  fill
                  preload={i === 0}
                  sizes="(min-width: 1024px) 350px, 58vw"
                  className="object-contain object-right-bottom drop-shadow-[0_24px_30px_rgb(0_0_0/0.55)]"
                />
              </div>
            ))}

            <div className="absolute bottom-6 left-6 text-paper">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full border border-paper/70 text-[0.6875rem]">
                  {String(slide + 1).padStart(2, "0")}
                </span>
                <span
                  key={slide}
                  className="animate-rise text-xs font-medium tracking-[0.06em]"
                >
                  {SLIDES[slide].caption}
                </span>
              </div>
            </div>

            <div className="absolute bottom-[4.25rem] left-6 flex gap-1.5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    i === slide ? "w-6 bg-paper" : "w-2 bg-paper/50 hover:bg-paper/80"
                  )}
                />
              ))}
            </div>
          </div>

          <div
            className="animate-pop absolute top-[34%] -left-3 flex size-24 flex-col items-center justify-center rounded-full bg-sun text-ink shadow-[0_18px_40px_-14px_rgb(247_208_112/0.9)] sm:-left-10 sm:size-28"
            style={delay(0.9)}
          >
            <span className="font-heading text-2xl sm:text-[1.75rem]">90%</span>
            <span className="mt-0.5 text-[0.5625rem] font-medium uppercase tracking-[0.14em]">
              Less Energy
            </span>
          </div>
        </div>
      </div>

      <div className="container-site relative -mt-14 hidden pb-6 lg:block">
        <div className="flex items-center gap-4 text-[0.625rem] uppercase tracking-[0.24em] text-ink-muted">
          Scroll to discover
          <span className="relative h-px w-16 bg-sage/60">
            <span className="absolute -top-[2.5px] right-0 size-1.5 animate-arrow-nudge rounded-full bg-sage" />
          </span>
        </div>
      </div>
    </section>
  );
}
