"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";

import { Eyebrow, PillLink } from "@/components/brand";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextReveal } from "@/components/text-reveal";
import { SHOP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Wide Application",
    description:
      "Energy-efficient LED bulbs for every room: bedroom, living room, kitchen, garage, bathroom, and more.",
  },
  {
    title: "Easy to Install",
    description:
      "The base diameter is 22mm, you can easily install it. The standard light bulbs get full bright and stable lights for your space without waiting after turning the switch on.",
  },
  {
    title: "Energy Saving",
    description:
      "9 Watt, >900 Lumens, Eco-friendly daylight led light bulbs to replace light bulbs 100 watt, consume 90% less energy compared to incandescent bulbs, saving big money on energy bills. [Input Voltage] - AC 90-300V, 50Hz, [CRI] - >80",
  },
  {
    title: "Long Lasting",
    description:
      "A+ energy efficient led light bulbs equivalent are a great replacement for incandescent, halogen, and CFL lamps, last 20 times longer, up to 50000 hrs lifetime (based on hours of use each day).",
  },
  {
    title: "Designed for your well-being",
    description:
      "Lower Power Consumption, No UV/IR light, safe to use, Replacement for CFL, Wide Operating Voltage, Eco-Friendly, Good for Eyes and Visibility.",
  },
] as const;

export function FeaturedSpotlight() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="section-featured-spotlight" className="py-section-sm sm:py-section">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <ScrollReveal>
            <Eyebrow>01 / Featured Product</Eyebrow>
            <h2 className="text-section-title mt-6 font-heading text-ink">
              A better bulb for
              <br />
              <span className="text-sage-gradient pr-[0.08em]">
                everyday living.
              </span>
            </h2>
          </ScrollReveal>
          <TextReveal
            as="p"
            by="lines"
            className="max-w-md text-[0.9375rem] leading-[1.75] text-ink-muted lg:mb-3"
          >
            Improve the illumination of a room with Syska LED bulb. It ensures
            maximum savings and is an eco-friendly alternative compared with
            CFL bulbs. Consume 90% less energy compared to incandescent bulbs,
            reducing your energy consumption through superior technology.
          </TextReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-line lg:mt-20 lg:grid-cols-[1fr_1.4fr]">
          <ScrollReveal className="relative flex aspect-square items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#fbf0d4_0%,#f8e4b2_100%)] lg:aspect-auto lg:min-h-[560px]">
            <span className="absolute aspect-square w-[82%] rounded-full bg-gold/35" />
            <span className="absolute aspect-square w-[64%] rounded-full bg-gold/60" />
            <div className="relative h-[52%] w-[72%]">
              <Image
                src="/images/home/feached-1.png"
                alt="Syska 9W LED bulb"
                fill
                sizes="(min-width: 1024px) 30vw, 70vw"
                className="object-contain drop-shadow-[0_30px_30px_rgb(85_90_62/0.25)]"
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:border-l lg:border-line">
            {FEATURES.map(({ title, description }, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={title}
                  className={cn(
                    "border-b border-line transition-colors duration-500",
                    isOpen ? "bg-[#eef1e7]" : "hover:bg-sand/60"
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-6 px-5 py-7 text-left sm:gap-9 sm:px-8"
                  >
                    <span className="w-5 shrink-0 text-[0.6875rem] text-sage">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-heading text-xl text-ink sm:text-[1.625rem]">
                      {title}
                    </span>
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                        isOpen
                          ? "border-sage/60 text-moss"
                          : "border-ink/25 text-ink"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="size-3" strokeWidth={1.5} />
                      ) : (
                        <Plus className="size-3" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl px-5 pb-7 pl-[3.95rem] text-[0.8125rem] leading-[1.75] text-ink-muted sm:px-8 sm:pl-[5.3rem]">
                          {description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <div className="flex flex-1 items-end px-5 pt-10 pb-2 sm:px-8 lg:pb-8">
              <PillLink href={SHOP_URL} external>
                Shop Now
              </PillLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
