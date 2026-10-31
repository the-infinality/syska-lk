"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";

import { Wordmark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getLenis } from "@/components/smooth-scroll-provider";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color] duration-300",
        // Soft strip below the bar so it fades into the page instead of ending on a hard edge.
        "after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-8 after:bg-gradient-to-b after:from-paper/80 after:to-transparent after:transition-opacity after:duration-300",
        scrolled
          ? "bg-gradient-to-b from-sage-pale/60 to-paper/80 backdrop-blur-md after:opacity-100"
          : "bg-gradient-to-b from-sage-pale/50 to-paper after:opacity-0"
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-[72px]" : "h-[72px] sm:h-[96px]"
        )}
      >
        <Link href="/" aria-label="Syska home" className="text-ink">
          <Wordmark accentClassName="text-moss/70" />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-9">
            {NAV_LINKS.map((link) => {
              const isActive = !link.external && pathname === link.href;
              const className = cn(
                "relative py-2 text-sm text-ink transition-colors hover:text-moss",
                "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-moss after:transition-transform after:duration-300",
                isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
              );
              return link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={className}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group inline-flex h-11 items-center gap-6 rounded-full border border-ink/80 px-6 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            Let&rsquo;s talk
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <Sheet
          onOpenChange={(open) => {
            const lenis = getLenis();
            if (!lenis) return;
            if (open) lenis.stop();
            else lenis.start();
          }}
        >
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-ink hover:bg-paper/60 md:hidden"
              />
            }
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-paper text-ink">
            <SheetHeader>
              <SheetTitle className="text-ink">
                <Wordmark />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => {
                const isActive = !link.external && pathname === link.href;
                const className = cn(
                  "rounded-md px-3 py-3 font-heading text-2xl transition-colors hover:bg-sand",
                  isActive ? "text-sage" : "text-ink"
                );
                return (
                  <SheetClose
                    key={link.label}
                    nativeButton={false}
                    render={
                      link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        />
                      ) : (
                        <Link
                          href={link.href}
                          aria-current={isActive ? "page" : undefined}
                          className={className}
                        />
                      )
                    }
                  >
                    {link.label}
                  </SheetClose>
                );
              })}
            </nav>
            <div className="mt-auto p-4">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="/contact"
                    className="flex h-12 w-full items-center justify-center gap-3 rounded-full bg-moss text-sm font-semibold text-paper"
                  />
                }
              >
                Let&rsquo;s talk
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
