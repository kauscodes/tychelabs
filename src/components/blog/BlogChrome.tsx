import { Link } from "@tanstack/react-router";

export function BlogNav() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-black bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg uppercase tracking-tight text-black md:text-xl">
            TYCHE<span className="text-pop-red">.</span>AI
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-semibold text-black md:flex">
          <a href="/#systems" className="transition-colors hover:text-pop-red">Systems</a>
          <a href="/#approach" className="transition-colors hover:text-pop-red">Approach</a>
          <Link
            to="/blog"
            activeProps={{ className: "text-pop-red" }}
            className="transition-colors hover:text-pop-red"
          >
            Blog
          </Link>
        </div>
        <a
          href="/#cta"
          className="rounded-md border-2 border-black bg-black px-4 py-2 text-xs font-display uppercase tracking-wider text-white shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-pop-yellow hover:text-black md:px-5 md:py-2.5 md:text-sm"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export function BlogFooter() {
  return (
    <footer className="border-t-2 border-black bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 text-xs md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-2">
          <span className="font-display uppercase">Tyche<span className="text-pop-red">.</span>AI</span>
          <span className="text-white/60">— AI-native operations for modern agencies.</span>
        </div>
        <p className="text-white/60">© {new Date().getFullYear()} Tyche AI Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
