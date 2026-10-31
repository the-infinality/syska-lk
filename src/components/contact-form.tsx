"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", placeholder: "e.g. Amaya Perera", required: true },
  { name: "email", label: "Email Address", type: "email", placeholder: "hello@example.com", required: true },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+94 77 989 8988", required: false },
] as const;

const LABEL_CLASS =
  "block text-[0.625rem] font-medium uppercase tracking-[0.2em] text-ink-muted";
const INPUT_CLASS =
  "mt-2 w-full border-0 border-b border-ink/25 bg-transparent pb-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-moss disabled:opacity-60";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  const disabled = status === "submitting";

  return (
    <div className="bg-sand px-6 py-10 shadow-[0_30px_70px_-40px_rgb(35_36_30/0.35)] sm:px-11 sm:py-12">
      <div className="flex items-baseline justify-between">
        <h3 className="font-heading text-2xl text-ink sm:text-[1.75rem]">
          Send us a message
        </h3>
        <span className="text-[0.625rem] tracking-[0.2em] text-ink-muted">
          01 &mdash; 04
        </span>
      </div>

      {status === "success" ? (
        <div className="mt-10 flex flex-col items-start gap-3">
          <CheckCircle2 className="size-6 text-sage" />
          <p className="font-semibold text-ink">Message sent.</p>
          <p className="text-sm text-ink-muted">
            Thanks for reaching out &mdash; our team will get back to you
            shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 rounded-full border border-ink/40 px-6 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          {FIELDS.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className={LABEL_CLASS}>
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                disabled={disabled}
                className={INPUT_CLASS}
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className={LABEL_CLASS}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us a little about your project…"
              required
              disabled={disabled}
              rows={4}
              className={`${INPUT_CLASS} resize-y`}
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-destructive">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={disabled}
            className="group flex h-[52px] w-full items-center justify-center gap-4 rounded-full bg-moss text-sm font-semibold text-paper transition-colors duration-300 hover:bg-night disabled:opacity-70"
          >
            {disabled && <Loader2 className="size-4 animate-spin" />}
            {disabled ? "Sending..." : "Send Message"}
            {!disabled && (
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            )}
          </button>
        </form>
      )}
    </div>
  );
}
