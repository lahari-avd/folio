export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>&copy; {new Date().getFullYear()} Lahari Avadhanam. All rights reserved.</p>
        <a
          href="mailto:you@example.com"
          className="hover:text-text-primary transition-colors"
        >
          you@example.com
        </a>
      </div>
    </footer>
  );
}
