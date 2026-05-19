import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import opsFlow from "@/assets/ops-flow.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV_LINKS = [
  { label: "Approach", href: "#approach" },
  { label: "Systems", href: "#systems" },
  { label: "Who it's for", href: "#audience" },
  { label: "Contact", href: "#cta" },
];

const DIFFERENTIATORS = [
  {
    eyebrow: "01 / Purpose",
    reject: "We do not sell AI tools.",
    affirm: "We redesign agency workflows.",
    detail:
      "Most agencies add software until they break. We do the opposite — we simplify through systemic redesign.",
  },
  {
    eyebrow: "02 / Focus",
    reject: "We do not chase hype.",
    affirm: "We focus on measurable outcomes.",
    detail: "Margins, capacity, leverage. No buzzwords, no agent theater.",
  },
  {
    eyebrow: "03 / Delivery",
    reject: "We do not deliver slide decks.",
    affirm: "We build practical systems your team uses.",
    detail: "Shipped infrastructure, not a deck of recommendations.",
  },
  {
    eyebrow: "04 / Logic",
    reject: "We do not automate everything.",
    affirm: "We design the right human–AI split.",
    detail: "Some workflows shouldn't be automated. We know which.",
  },
];

const OLD_ENGINE = [
  "Founder memory",
  "Scattered SOPs",
  "Manual reporting",
  "Disconnected tools",
  "Inconsistent delivery",
  "Repetitive internal work",
];

const APPROACH = [
  {
    n: "01",
    title: "Diagnose",
    body: "We map how your agency actually works — sales, delivery, reporting, client comms, QA, and internal ops.",
  },
  {
    n: "02",
    title: "Redesign",
    body: "We identify high-friction workflows and rebuild them for AI-assisted execution.",
  },
  {
    n: "03",
    title: "Deploy",
    body: "We implement systems, automations, and workflows that your team actually adopts.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "We track what saves time, improves quality, and increases output — then iterate.",
  },
];

const SYSTEMS = [
  {
    title: "Growth Systems",
    body: "Outbound, lead qualification, account research, proposal workflows, and pipeline operations.",
  },
  {
    title: "Delivery Systems",
    body: "Campaign ops, reporting, content workflows, QA, client updates, and execution tracking.",
  },
  {
    title: "Internal Systems",
    body: "SOP generation, knowledge management, task routing, team visibility, and operational memory.",
  },
  {
    title: "Client Experience",
    body: "Faster onboarding, cleaner reporting, sharper communication, and more consistent delivery.",
  },
];

const AUDIENCE = [
  "Performance marketing agencies",
  "SEO agencies",
  "Creative agencies",
  "Growth agencies",
  "Outbound & GTM agencies",
  "Full-service digital agencies",
];

const LOGOS = ["FORGE MEDIA", "ASCENT GROWTH", "VECTOR DIGITAL", "KINETIC OPS", "PRISM SEO"];

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-brand-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Tyche AI Labs
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium tracking-wide text-text-soft md:flex">
          {NAV_LINKS.slice(0, 3).map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-primary"
        >
          Book a Transformation Call
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-20 pb-32 md:pt-28 md:pb-44">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-brand-bg/70 to-brand-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/60 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-4xl animate-fade-up">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-soft/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-soft">
            <span className="size-1.5 rounded-full bg-primary" />
            Operational AI Transformation
          </span>
          <h1 className="mb-8 font-serif text-5xl leading-[1.05] text-white md:text-7xl lg:text-[7.5rem]">
            Turn your agency into an{" "}
            <span className="italic text-white/95">AI-native</span> operating machine.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-text-soft md:text-xl">
            We help marketing agencies redesign how they sell, deliver, and scale — not with more
            tools, not with another dashboard. We build the systems that make your agency faster,
            leaner, and harder to copy.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 md:text-lg"
            >
              Book a Transformation Call
            </a>
            <a
              href="#approach"
              className="rounded-full border border-hairline px-6 py-4 text-sm text-text-soft transition-colors hover:border-white/30 hover:text-white"
            >
              See the approach →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function LogoStrip() {
  return (
    <section className="border-y border-hairline bg-surface-soft/40 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 md:px-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-mute">
          Built for agencies like
        </span>
        {LOGOS.map((l) => (
          <span
            key={l}
            className="font-mono text-xs font-medium tracking-[0.2em] text-text-soft/60"
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

function SubHero() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            The Pressure
          </span>
        </div>
        <div className="md:col-span-8">
          <h2 className="mb-6 font-serif text-3xl leading-tight text-balance text-white md:text-5xl">
            Agencies are under pressure from every side — margin squeeze, delivery chaos, hiring
            costs, and clients who expect more for less.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-text-soft">
            Tyche AI Labs helps agencies move beyond manual execution and build AI-native
            operations that actually improve business outcomes. We identify the parts of your
            agency that should be automated, augmented, or completely redesigned — then we build
            the operating system around it.
          </p>
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  return (
    <section className="border-y border-hairline bg-surface-soft/30">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            What makes us different
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
            We redesign the operating model. We don't sell automation.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.eyebrow}
              className="flex flex-col gap-6 bg-brand-bg p-8 md:p-12"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-mute">
                {d.eyebrow}
              </span>
              <div className="space-y-2">
                <p className="text-sm text-text-mute line-through decoration-text-mute/40">
                  {d.reject}
                </p>
                <p className="font-serif text-2xl leading-snug text-white md:text-3xl">
                  {d.affirm}
                </p>
              </div>
              <p className="mt-auto text-sm leading-relaxed text-text-soft">{d.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              The Problem
            </span>
            <h2 className="mt-4 mb-6 font-serif text-4xl leading-tight text-white md:text-5xl">
              Your agency cannot scale linearly with headcount forever.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-text-soft">
              Most agencies are still running on Slack messages and founder memory. That model
              burns time, kills margins, and creates bottlenecks everywhere. More clients should
              not mean more operational chaos.
            </p>
            <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface-soft">
              <img
                src={opsFlow}
                alt="Operational flow visualization"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-12">
            <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-text-mute">
              Most agencies are still running on
            </p>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {OLD_ENGINE.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-center justify-between py-6 transition-colors hover:bg-surface-soft/40"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-text-mute">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-2xl text-white md:text-3xl">{item}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary opacity-70 transition-opacity group-hover:opacity-100">
                    Replace →
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="border-y border-hairline bg-surface-soft/30 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Our Approach
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
              From manual delivery to AI-native operations, in four steps.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-text-soft">
            Successful AI adoption requires process redesign, not tool adoption. Here is how we
            run the redesign.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((step) => (
            <div key={step.n} className="flex flex-col gap-6 bg-brand-bg p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-primary">{step.n}</span>
                <span className="h-px flex-1 bg-hairline ml-4" />
              </div>
              <h3 className="font-serif text-3xl text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-soft">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section id="systems" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            What we help with
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
            Four systems. One operating model.
          </h2>
          <p className="mt-4 text-text-soft">
            We rebuild the parts of your agency that consume the most time and create the most
            friction.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
          {SYSTEMS.map((s, i) => (
            <div
              key={s.title}
              className="group relative flex flex-col gap-6 bg-brand-bg p-10 transition-colors hover:bg-surface-soft md:p-14"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-mute">
                0{i + 1} / System
              </span>
              <h3 className="font-serif text-3xl text-white md:text-4xl">{s.title}</h3>
              <p className="max-w-md text-base leading-relaxed text-text-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id="audience" className="border-y border-hairline bg-surface-soft/30 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            Who it's for
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
            Built for agencies ready to stop running manually.
          </h2>
          <p className="mt-6 text-text-soft">
            If your agency depends on humans doing repetitive work every day, we can redesign it.
          </p>
        </div>
        <div className="md:col-span-7">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
            {AUDIENCE.map((a, i) => (
              <li
                key={a}
                className="flex items-center gap-4 bg-brand-bg p-6 text-white md:p-7"
              >
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <span className="font-serif text-xl md:text-2xl">{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-lg font-serif text-2xl italic leading-snug text-white">
            "Tyche AI Labs helps agencies become AI-native — not by adding tools, but by rebuilding
            operations around AI."
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-32 md:py-44">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          The Next Step
        </span>
        <h2 className="mt-6 font-serif text-5xl italic leading-[1.05] text-white md:text-7xl">
          Ready to redesign your agency?
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-soft md:text-xl">
          If your team is still spending too much time on repetitive work, slow execution, and
          scattered operations, it is time to change the operating model.
        </p>
        <div className="mt-12 inline-block">
          <a
            href="mailto:hello@tycheailabs.com"
            className="inline-block rounded-full bg-white px-10 py-5 text-lg font-semibold text-black transition-all hover:scale-[1.02] hover:bg-primary"
          >
            Book a call with Tyche AI Labs
          </a>
        </div>
        <p className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-text-mute">
          Stop running manually. Start operating intelligently.
        </p>
      </div>
    </section>
  );
}

function Footer() {
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

function Index() {
  return (
    <main className="bg-brand-bg text-foreground">
      <Nav />
      <Hero />
      <LogoStrip />
      <SubHero />
      <Differentiators />
      <Problem />
      <Approach />
      <Systems />
      <Audience />
      <CTA />
      <Footer />
    </main>
  );
}
