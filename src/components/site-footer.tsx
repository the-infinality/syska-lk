import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { SocialLinks, Wordmark } from "@/components/brand";
import { NAV_LINKS } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-paper">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-12 pt-16 pb-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_auto] lg:pt-20 lg:pb-24">
          <div>
            <Wordmark className="text-paper" accentClassName="text-sun" />
            <p className="mt-4 font-heading text-lg text-sage">
              Light for life, thoughtfully engineered.
            </p>
          </div>

          <div>
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-paper/45">
              Navigate
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/85 transition-colors hover:text-sun"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-paper/85 transition-colors hover:text-sun"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-paper/45">
              Follow Us
            </p>
            <div className="mt-5">
              <SocialLinks className="border-paper/25 text-paper/85 hover:border-sun hover:text-sun" />
            </div>
          </div>

          <a
            href="#top"
            className="group flex items-center gap-4 self-start text-sm text-paper/85 transition-colors hover:text-sun"
          >
            Go to top
            <span className="flex size-10 items-center justify-center rounded-full border border-paper/25 transition-colors group-hover:border-sun">
              <ArrowUp className="size-4" strokeWidth={1.5} />
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper/12 py-7 text-[0.625rem] uppercase tracking-[0.18em] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Syska.lk. All rights reserved</p>
          <p>Energy made visible.</p>
        </div>
      </div>
    </footer>
  );
}
