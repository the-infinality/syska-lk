import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import { Eyebrow, SocialLinks } from "@/components/brand";
import { ContactBanner } from "@/components/contact-banner";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTACT_EMAIL, PHONE_NUMBERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Syska sales team — send a message, email us, or call our customer care line.",
};

const DETAILS = [
  {
    icon: Mail,
    label: "Email",
    items: [{ text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
  },
  {
    icon: Phone,
    label: "Phone",
    items: PHONE_NUMBERS.map((number) => ({
      text: number,
      href: `tel:${number.replace(/\s+/g, "")}`,
    })),
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactBanner />

      <section className="py-section-sm sm:py-section">
        <div className="container-site grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <ScrollReveal>
            <Eyebrow className="text-[0.625rem] text-sage">
              Start a conversation
            </Eyebrow>
            <h2 className="mt-6 font-heading text-[clamp(2.5rem,1.4rem+2.6vw,4rem)] leading-[1.02] text-ink">
              Good lighting begins
              <br />
              with a{" "}
              <span className="text-sage-gradient pr-[0.08em]">good chat.</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-[1.75] text-ink-muted">
              Whether you need advice for one room or a complete lighting plan,
              our team would love to hear from you.
            </p>

            <ul className="mt-10 max-w-md border-t border-line">
              {DETAILS.map(({ icon: Icon, label, items }) => (
                <li
                  key={label}
                  className="flex items-start gap-5 border-b border-line py-6"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-moss">
                    <Icon className="size-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-ink-muted">
                      {label}
                    </p>
                    <div className="mt-1.5 flex flex-col gap-1">
                      {items.map(({ text, href }) => (
                        <a
                          key={text}
                          href={href}
                          className="text-sm font-semibold text-ink transition-colors hover:text-sage"
                        >
                          {text}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-5">
              <span className="text-xs text-ink-muted">Find us online</span>
              <SocialLinks className="border-ink/20 text-ink hover:border-moss hover:bg-moss hover:text-paper" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
