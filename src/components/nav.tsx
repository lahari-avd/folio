import Link from "next/link";

export function Nav() {
  return (
    <header>
      <nav className="flex items-center justify-center gap-3 py-8 text-sm text-text-primary">
        <Link href="/" className="hover:text-text-secondary transition-colors">
          Work
        </Link>
        <span className="h-1 w-1 rounded-full bg-bordeaux-500" aria-hidden="true" />
        <Link href="/about" className="hover:text-text-secondary transition-colors">
          About
        </Link>
      </nav>
    </header>
  );
}
