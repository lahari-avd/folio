import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Your Name",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>
      <div className="mt-6 flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
        <p>
          I&apos;m Your Name, a [your role, e.g. product designer / software engineer]
          based in [your city]. I care about building things that are simple,
          functional, and considered.
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
          className="rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:border-black/[.16] dark:border-white/[.12] dark:hover:border-white/[.24]"
        >
          Email
        </a>
        <a
          href="https://github.com/your-username"
          className="rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:border-black/[.16] dark:border-white/[.12] dark:hover:border-white/[.24]"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          className="rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:border-black/[.16] dark:border-white/[.12] dark:hover:border-white/[.24]"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
