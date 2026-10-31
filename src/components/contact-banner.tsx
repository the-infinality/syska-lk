import { Eyebrow } from "@/components/brand";

function delay(seconds: number) {
  return { animationDelay: `${0.2 + seconds}s` };
}

export function ContactBanner() {
  return (
    <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[linear-gradient(115deg,#f6da8f_0%,#f9e4ab_38%,#e4e6bf_72%,#c7d9ba_100%)] py-24 text-center sm:min-h-[460px]">
      <span
        aria-hidden
        className="absolute aspect-square h-[150%] rounded-full bg-paper/20"
      />
      <span
        aria-hidden
        className="absolute aspect-square h-[118%] rounded-full bg-paper/25"
      />
      <span
        aria-hidden
        className="absolute aspect-square h-[86%] rounded-full border border-sage/40 bg-cream/40"
      />

      <div className="relative px-5">
        <div className="animate-rise" style={delay(0)}>
          <Eyebrow>We&rsquo;re here to help</Eyebrow>
        </div>
        <h1
          className="animate-rise text-display mt-6 font-heading text-ink"
          style={delay(0.1)}
        >
          Contact <span className="text-sage-gradient pr-[0.08em]">Us</span>
        </h1>
        <p
          className="animate-rise mt-7 text-[0.9375rem] text-ink-muted"
          style={delay(0.2)}
        >
          Let&rsquo;s create a brighter, more energy-efficient space together.
        </p>
      </div>
    </section>
  );
}
