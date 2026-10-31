"use client";

import { useEffect, useState } from "react";

import { Wordmark } from "@/components/brand";
import { cn } from "@/lib/utils";

const FADE_MS = 600;
// window "load" waits on every autoplay video, which on mobile data can take
// many seconds; never hold the page behind the loader longer than this.
const MAX_WAIT_MS = 1800;

export function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      const id = requestAnimationFrame(() => setLoaded(true));
      return () => cancelAnimationFrame(id);
    }
    const onLoad = () => setLoaded(true);
    window.addEventListener("load", onLoad);
    const cap = setTimeout(onLoad, MAX_WAIT_MS);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(cap);
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timeout = setTimeout(() => setHidden(true), FADE_MS);
    return () => clearTimeout(timeout);
  }, [loaded]);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-paper text-ink transition-opacity duration-[600ms] ease-in-out",
        loaded ? "opacity-0" : "opacity-100"
      )}
    >
      <Wordmark className="text-3xl" />
    </div>
  );
}
