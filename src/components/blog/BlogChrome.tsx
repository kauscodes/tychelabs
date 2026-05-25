import { Link } from "@tanstack/react-router";

export function BlogNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg font-black tracking-tight text-slate-950 md:text-xl">
            Tyche<span className="text-teal-500">.</span>AI
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="/#systems" className="transition-colors hover:text-slate-950">Systems</a>
          <a href="/#services" className="transition-colors hover:text-slate-950">Services</a>
          <a href="/#approach" className="transition-colors hover:text-slate-950">Approach</a>
          <Link
            to="/blog"
            activeProps={{ className: "text-slate-950" }}
            className="transition-colors hover:text-slate-950"
          >
            Blog
          </Link>
        </div>
        <a
          href="/#cta"
          className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Start with an audit
        </a>
      </div>
    </nav>
  );
}

export function BlogFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 text-sm text-slate-500 md:flex-row md:items-center md:px-8">
        <p className="font-semibold text-slate-950">Tyche.AI</p>
        <p>Operating systems for Indian agencies.</p>
        <p>© {new Date().getFullYear()} Tyche Labs.</p>
      </div>
    </footer>
  );
}
