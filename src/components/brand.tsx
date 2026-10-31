import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SOCIAL_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  accentClassName = "text-sage",
}: {
  className?: string;
  accentClassName?: string;
}) {
  return (
    <span
      className={cn("text-[1.6rem] font-normal tracking-[-0.03em]", className)}
    >
      syska<span className={accentClassName}>.lk</span>
    </span>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-semibold tracking-[0.24em] uppercase text-moss",
        className
      )}
    >
      {children}
    </p>
  );
}

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "cream";
  external?: boolean;
  className?: string;
};

const PILL_VARIANTS = {
  solid: "bg-moss text-paper hover:bg-night",
  outline: "border border-ink/70 text-ink hover:bg-ink hover:text-paper",
  cream: "bg-cream text-moss hover:bg-paper",
} as const;

export function PillLink({
  href,
  children,
  variant = "solid",
  external = false,
  className,
}: PillLinkProps) {
  const classes = cn(
    "group inline-flex h-[52px] items-center justify-center gap-4 rounded-full px-7 text-sm font-semibold transition-colors duration-300",
    PILL_VARIANTS[variant],
    className
  );
  const content = (
    <>
      {children}
      {variant !== "outline" && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M14.5 8.5h2V5h-2.4C11.6 5 10.5 6.6 10.5 9v2H8v3.4h2.5V21H14v-6.6h2.5l.5-3.4h-3V9.3c0-.5.2-.8.5-.8Z" />
    </svg>
  );
}

const SOCIAL_ICONS = { facebook: FacebookIcon };

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      {SOCIAL_LINKS.map(({ href, label, icon }) => {
        const Icon = SOCIAL_ICONS[icon];
        const external = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={cn(
              "flex size-9 items-center justify-center rounded-full border transition-colors duration-300",
              className
            )}
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}
