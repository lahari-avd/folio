import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Lahari Avadhanam",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <h1 className="text-2xl font-semibold tracking-tight text-text-primary">About</h1>
      <div className="mt-6 flex flex-col gap-4 text-text-secondary">
        <p>
          I&apos;m Lahari Avadhanam, a product designer and visual storyteller.
          I care about building things that are simple, functional, and considered.
        </p>
        <p>
          Replace this paragraph with a bit more about your background,
          the kind of work you like doing, and what you&apos;re currently focused on.
        </p>
        <p>
          Outside of work I [a sentence about your interests — keeps this
          page feeling human rather than a resume].
        </p>
      </div>

      <div className="mt-10 flex gap-4 text-sm">
        <a
          href="mailto:you@example.com"
          className="rounded-full border border-border-default px-4 py-2 text-text-primary transition-colors hover:border-text-muted"
        >
          Email
        </a>
        <a
          href="https://github.com/your-username"
          className="rounded-full border border-border-default px-4 py-2 text-text-primary transition-colors hover:border-text-muted"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          className="rounded-full border border-border-default px-4 py-2 text-text-primary transition-colors hover:border-text-muted"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
