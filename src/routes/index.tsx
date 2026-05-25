import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "http://wa.me/9569444462";

const NAV_LINKS = [
  { label: "Problems", href: "#problems" },
  { label: "Systems", href: "#systems" },
  { label: "Services", href: "#services" },
  { label: "Fit", href: "#fit" },
  { label: "FAQ", href: "#faq" },
];

const TOOLS = [
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Zoho", domain: "zoho.com" },
  { name: "Pipedrive", domain: "pipedrive.com" },
  { name: "Apollo", domain: "apollo.io" },
  { name: "Clay", domain: "clay.com" },
  { name: "Instantly", domain: "instantly.ai" },
  { name: "Smartlead", domain: "smartlead.ai" },
  { name: "Zapier", domain: "zapier.com" },
  { name: "Make", domain: "make.com" },
  { name: "n8n", domain: "n8n.io" },
  { name: "Airtable", domain: "airtable.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "WhatsApp", domain: "whatsapp.com" },
  { name: "Google Sheets", domain: "sheets.google.com" },
  { name: "Meta Ads", domain: "meta.com" },
  { name: "GA4", domain: "analytics.google.com" },
];

const SIGNALS = [
  "Reports take a day, and still need explanation.",
  "Important work disappears inside WhatsApp.",
  "Senior people answer the same questions twice a week.",
  "New clients add more chaos than confidence.",
];

const SYSTEMS = [
  {
    title: "Growth",
    body: "Lead intake, outbound rhythm, proposal flow.",
    metric: "Fewer cold starts",
  },
  {
    title: "Delivery",
    body: "Campaign status, ownership, deadlines, QA.",
    metric: "Less chasing",
  },
  {
    title: "Reporting",
    body: "Data pulls, narrative, client-ready updates.",
    metric: "Hours back",
  },
  {
    title: "Knowledge",
    body: "SOPs, templates, handoffs, team memory.",
    metric: "Founder unblocked",
  },
];

const SERVICES = [
  {
    label: "Performance teams",
    title: "Make reporting less painful.",
    pain: "Your team should not spend the first week of every month rebuilding the same client reports.",
    fix: "We connect the data, shape the narrative, and make reporting a repeatable workflow.",
  },
  {
    label: "SEO teams",
    title: "Turn content ops into a system.",
    pain: "Briefs, drafts, QA, and updates get scattered across folders and people.",
    fix: "We build the briefing, production, review, and reporting loop so quality does not depend on memory.",
  },
  {
    label: "Creative teams",
    title: "Clean the brief before work starts.",
    pain: "Unclear inputs create revision loops. Revision loops eat margin.",
    fix: "We structure intake, scope, approvals, and client updates before the project drifts.",
  },
  {
    label: "Full-service teams",
    title: "Let the agency run without you in every thread.",
    pain: "Different service lines have different chaos, and the founder becomes the common API.",
    fix: "We pick the two or three operating systems that remove the most founder dependency first.",
  },
];

const PROCESS = [
  ["Map", "We look at how work actually moves, not how the deck says it moves."],
  ["Choose", "We pick one painful workflow with a clear business reason to fix it."],
  ["Build", "We ship the system inside the tools your team can realistically use."],
  ["Adopt", "We tune the workflow until the team stops routing around it."],
];

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-xl font-black tracking-tight text-slate-950">
          Tyche<span className="text-teal-500">.</span>AI
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-slate-950">
              {link.label}
            </a>
          ))}
          <Link to="/blog" className="transition-colors hover:text-slate-950">
            Blog
          </Link>
        </div>
        <a
          href="#cta"
          className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Start with an audit
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.22),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.75) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.75) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto grid min-h-[calc(100dvh-73px)] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
        <div>
          <div className="inline-flex rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-medium text-teal-100 backdrop-blur">
            For early and growth-stage Indian agencies
          </div>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
            Your agency is growing. Your operations are not keeping up.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            We help agency founders turn messy delivery, reporting, and client communication into
            calm systems the team can actually run.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-100"
            >
              Book an ops diagnostic
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              WhatsApp first
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            We start with one workflow your team already feels every week.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_30px_120px_-45px_rgba(45,212,191,0.65)] backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Ops view</p>
                <p className="mt-1 font-semibold text-white">This week</p>
              </div>
              <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-200">
                3 leaks found
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {SIGNALS.map((signal, index) => (
                <div
                  key={signal}
                  className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                >
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-400/10 text-xs font-semibold text-teal-200">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{signal}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-teal-400/10 p-4 text-sm leading-6 text-teal-50">
              Start small: one workflow, one owner, one measurable before/after.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ToolStrip() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <section className="border-b border-slate-200 bg-white py-5">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Works with the stack your team already knows
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 px-5 md:px-8">
          {row.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex h-12 min-w-40 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`}
                alt={`${tool.name} logo`}
                className="size-5 rounded-sm"
                loading="lazy"
              />
              <span className="text-sm font-medium text-slate-700">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problems" className="bg-slate-50 px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">The real problem</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Growth exposes every manual habit.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Most agencies do not need another tool. They need fewer unclear handoffs, fewer hidden
            decisions, and fewer client updates written from scratch.
          </p>
        </div>
        <div className="grid gap-4">
          {SIGNALS.map((signal) => (
            <div key={signal} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.45)]">
              <p className="text-lg font-medium text-slate-950">{signal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section id="systems" className="bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">What we build</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Operating systems, not automation tricks.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SYSTEMS.map((system) => (
            <div key={system.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.55)]">
              <p className="text-sm font-semibold text-teal-600">{system.metric}</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{system.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{system.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];
  return (
    <section id="services" className="bg-slate-950 px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Services</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Pick the bottleneck. Build the system.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-400">
            We usually start where the founder feels the most drag: sales, delivery, reporting, or
            client communication.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-3">
            {SERVICES.map((item, index) => (
              <button
                key={item.label}
                onClick={() => setActive(index)}
                className={`rounded-2xl border px-5 py-4 text-left transition ${
                  active === index
                    ? "border-teal-300 bg-teal-300 text-slate-950"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                }`}
              >
                <span className="text-sm font-semibold">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 md:p-8">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {service.title}
            </h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm font-semibold text-slate-500">What founders feel</p>
                <p className="mt-3 leading-7 text-slate-300">{service.pain}</p>
              </div>
              <div className="rounded-3xl bg-teal-300 p-6 text-slate-950">
                <p className="text-sm font-semibold text-slate-700">What we change</p>
                <p className="mt-3 leading-7">{service.fix}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="approach" className="bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">How it works</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Small enough to adopt. Serious enough to matter.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {PROCESS.map(([title, body], index) => (
            <div key={title} className="grid gap-4 py-7 md:grid-cols-[0.25fr_0.35fr_1fr] md:items-center">
              <span className="text-sm font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
              <p className="max-w-2xl leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fit() {
  const fit = ["Early-stage agencies finding rhythm", "Growth-stage agencies feeling drag", "Teams where WhatsApp is the operating system", "Founders tired of being the escalation path"];
  return (
    <section id="fit" className="bg-slate-50 px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">Fit</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Built for agencies that care about the craft and the business.
          </h2>
        </div>
        <div className="grid gap-3">
          {fit.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-lg font-medium text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="bg-slate-950 px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Start here</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Bring one messy workflow. We will tell you what is worth fixing.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
          The first step is a 90-minute Ops Diagnostic. You leave with a written scorecard and a
          clear next move.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@tycheailabs.com?subject=Book%20an%20Ops%20Diagnostic"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-100"
          >
            Book an Ops Diagnostic
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            WhatsApp us first
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">₹15,000. Credited toward any build sprint.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-slate-950">Tyche.AI</p>
        <p>Operations systems for Indian agencies.</p>
        <p>© {new Date().getFullYear()} Tyche Labs.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-white text-slate-950">
      <Nav />
      <Hero />
      <ToolStrip />
      <Problems />
      <Systems />
      <Services />
      <Process />
      <Fit />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
