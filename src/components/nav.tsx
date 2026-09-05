import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.12]">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 sm:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Your Name
        </Link>
        <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
