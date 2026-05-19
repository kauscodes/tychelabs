import { Link } from "@tanstack/react-router";

export function BlogNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-brand-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Tyche AI Labs
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium tracking-wide text-text-soft md:flex">
          <a href="/#approach" className="transition-colors hover:text-white">
            Approach
          </a>
          <a href="/#systems" className="transition-colors hover:text-white">
            Systems
          </a>
          <Link
            to="/blog"
            activeProps={{ className: "text-white" }}
            className="transition-colors hover:text-white"
          >
            Blog
          </Link>
        </div>
        <a
          href="/#cta"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-primary"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}

export function BlogFooter() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 text-xs text-text-mute md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary" />
          <p>Tyche AI Labs builds AI-native operations for modern agencies.</p>
        </div>
        <p>© {new Date().getFullYear()} Tyche AI Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
