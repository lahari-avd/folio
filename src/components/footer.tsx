export function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.12]">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <a
          href="mailto:you@example.com"
          className="hover:text-foreground transition-colors"
        >
          you@example.com
        </a>
      </div>
    </footer>
  );
}
