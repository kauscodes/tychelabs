import { createFileRoute, Link } from "@tanstack/react-router";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV_LINKS = [
  { label: "Systems", href: "#systems" },
  { label: "Approach", href: "#approach" },
  { label: "Who it's for", href: "#audience" },
  { label: "FAQ", href: "#faq" },
];

// Marblism-style "character" cards — but reframed as Agency Systems
const OPERATORS = [
  { name: "GROWTH",   role: "Outbound & Pipeline",   color: "#22c55e", text: "#0a0a0a" },
  { name: "DELIVERY", role: "Campaign Ops",          color: "#f97316", text: "#0a0a0a" },
  { name: "INSIGHT",  role: "Reporting & QA",        color: "#3b82f6", text: "#ffffff" },
  { name: "MEMORY",   role: "SOPs & Knowledge",      color: "#b91c5c", text: "#ffffff" },
  { name: "INTAKE",   role: "Lead Qualification",    color: "#ec4899", text: "#0a0a0a" },
  { name: "BRIEF",    role: "Proposal Workflows",    color: "#a855f7", text: "#ffffff" },
  { name: "PULSE",    role: "Client Comms",          color: "#facc15", text: "#0a0a0a" },
  { name: "FORGE",    role: "Content Production",    color: "#ef4444", text: "#ffffff" },
];

const DIFFERENTIATORS = [
  { n: "01", reject: "We do not sell AI tools.",        affirm: "We redesign agency workflows.",         detail: "Most agencies add software until they break. We do the opposite." },
  { n: "02", reject: "We do not chase hype.",           affirm: "We focus on measurable outcomes.",      detail: "Margins, capacity, leverage. No buzzwords, no agent theater." },
  { n: "03", reject: "We do not deliver slide decks.",  affirm: "We build practical systems your team uses.", detail: "Shipped infrastructure, not a deck of recommendations." },
  { n: "04", reject: "We do not automate everything.",  affirm: "We design the right human–AI split.",   detail: "Some workflows shouldn't be automated. We know which." },
];

const OLD_ENGINE = [
  "Founder memory", "Scattered SOPs", "Manual reporting",
  "Disconnected tools", "Inconsistent delivery", "Repetitive internal work",
];

const APPROACH = [
  { n: "01", title: "Diagnose", body: "We map how your agency actually works — sales, delivery, reporting, client comms, QA, internal ops." },
  { n: "02", title: "Redesign", body: "We identify high-friction workflows and rebuild them for AI-assisted execution." },
  { n: "03", title: "Deploy",   body: "We implement systems and automations your team actually adopts." },
  { n: "04", title: "Optimize", body: "We track what saves time, improves quality, and increases output — then iterate." },
];

const SYSTEMS = [
  { title: "Growth Systems",    body: "Outbound, lead qualification, account research, proposal workflows, pipeline operations.", color: "#22c55e" },
  { title: "Delivery Systems",  body: "Campaign ops, reporting, content workflows, QA, client updates, execution tracking.", color: "#f97316" },
  { title: "Internal Systems",  body: "SOP generation, knowledge management, task routing, team visibility, operational memory.", color: "#3b82f6" },
  { title: "Client Experience", body: "Faster onboarding, cleaner reporting, sharper communication, more consistent delivery.", color: "#ec4899" },
];

const AUDIENCE = [
  "Performance marketing agencies", "SEO agencies", "Creative agencies",
  "Growth agencies", "Outbound & GTM agencies", "Full-service digital agencies",
];

const LOGOS = ["FORGE MEDIA", "ASCENT GROWTH", "VECTOR DIGITAL", "KINETIC OPS", "PRISM SEO"];

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-black bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-lg uppercase tracking-tight text-black md:text-xl">
            TYCHE<span className="text-pop-red">.</span>AI
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-black md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-pop-red">
              {l.label}
            </a>
          ))}
          <Link to="/blog" className="transition-colors hover:text-pop-red">
            Blog
          </Link>
        </div>
        <a
          href="#cta"
          className="rounded-md border-2 border-black bg-black px-4 py-2 text-xs font-display uppercase tracking-wider text-white transition-all hover:bg-pop-yellow hover:text-black md:px-5 md:py-2.5 md:text-sm shadow-brutal-sm hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

/* ---------------- Operator marquee (Marblism-style character strip) ---------------- */
function OperatorStrip() {
  const row = [...OPERATORS, ...OPERATORS];
  return (
    <div className="relative overflow-hidden border-b-2 border-black bg-white py-4">
      <div className="flex w-max gap-3 animate-marquee px-3">
        {row.map((op, i) => (
          <div
            key={i}
            className="relative flex h-40 w-40 shrink-0 flex-col justify-between overflow-hidden rounded-xl border-2 border-black p-3 md:h-52 md:w-52 md:p-4"
            style={{ backgroundColor: op.color, color: op.text }}
          >
            <span
              className="font-display text-3xl leading-none tracking-tight md:text-5xl"
              style={{ WebkitTextStroke: op.text === "#ffffff" ? "0" : "0", color: op.text }}
            >
              {op.name}
            </span>
            <div>
              <div
                className="inline-block rounded-md px-2 py-1 font-mono text-[9px] uppercase tracking-widest md:text-[10px]"
                style={{
                  backgroundColor: op.text === "#ffffff" ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.45)",
                  color: op.text,
                }}
              >
                {op.role}
              </div>
            </div>
            {/* halftone dots */}
            <div
              className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full opacity-20"
              style={{ backgroundImage: "radial-gradient(circle, #0a0a0a 1.5px, transparent 1.5px)", backgroundSize: "8px 8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <header id="top" className="relative overflow-hidden bg-white px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-black bg-pop-yellow px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black">
          <span className="size-1.5 rounded-full bg-black" />
          Operational AI for Marketing Agencies
        </div>
        <h1 className="font-display text-5xl uppercase leading-[0.92] tracking-tight text-black md:text-7xl lg:text-[8rem]">
          AI-Native Systems
          <br />
          To Scale Your
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-black">Agency</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-pop-yellow md:h-6 lg:h-8" />
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-soft md:text-xl">
          We redesign how marketing agencies sell, deliver, and scale — not with more tools or
          another dashboard, but with operational systems that make you faster, leaner, and
          harder to copy.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center rounded-lg border-2 border-black bg-pop-yellow px-8 py-4 font-display text-base uppercase tracking-wider text-black shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-brutal-sm md:text-lg"
          >
            Book a Transformation Call
          </a>
          <a
            href="#systems"
            className="inline-flex items-center rounded-lg border-2 border-black bg-white px-6 py-4 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
          >
            See the systems →
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-text-soft">
          <div className="flex items-center gap-2">
            <span className="font-display text-pop-green">★★★★★</span>
            <span>Trusted by 40+ agency teams</span>
          </div>
          <div className="hidden md:block">·</div>
          <div>No tool theatre. Just operational leverage.</div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Logo strip ---------------- */
function LogoStrip() {
  return (
    <section className="border-y-2 border-black bg-surface-soft py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 md:px-8">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black">
          Built for agencies like ↓
        </span>
        {LOGOS.map((l) => (
          <span key={l} className="font-display text-sm uppercase tracking-[0.15em] text-black/70">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SubHero ---------------- */
function SubHero() {
  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full border-2 border-black bg-pop-pink px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black">
          The Pressure
        </span>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl uppercase leading-[1] tracking-tight text-black md:text-6xl">
          You want to scale your agency,
          <br />
          <span className="text-pop-red">but…</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-soft">
          Agencies are under pressure from every side — margin squeeze, delivery chaos, hiring
          costs, and clients who expect more for less. More clients shouldn't mean more
          operational chaos.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Pain comic cards ---------------- */
function Pain() {
  const pains = [
    { color: "#facc15", label: "You start your day with 100+ unread emails" },
    { color: "#ef4444", label: "Your best people waste hours on repetitive execution", txt: "#fff" },
    { color: "#3b82f6", label: "Reports take a full day instead of a few minutes", txt: "#fff" },
    { color: "#22c55e", label: "Founder memory is your only real SOP" },
    { color: "#ec4899", label: "Hiring more humans no longer fixes the bottleneck" },
    { color: "#a855f7", label: "Slack is where work goes to die", txt: "#fff" },
  ];
  return (
    <section className="border-y-2 border-black bg-surface-soft px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="inline-block rounded-full border-2 border-black bg-white px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            What's actually broken
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1] tracking-tight text-black md:text-5xl">
            Most agencies are still running on Slack messages and founder memory.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl border-2 border-black p-6 shadow-brutal-sm transition-transform hover:-translate-y-1 md:p-8"
              style={{ backgroundColor: p.color, color: p.txt ?? "#0a0a0a" }}
            >
              <span className="font-mono text-xs font-bold opacity-70">0{i + 1}</span>
              <p className="mt-4 font-display text-xl uppercase leading-[1.05] md:text-2xl">
                "{p.label}."
              </p>
              <div
                className="pointer-events-none absolute -right-8 -bottom-8 size-32 rounded-full opacity-15"
                style={{ backgroundImage: "radial-gradient(circle, #0a0a0a 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentiators ---------------- */
function Differentiators() {
  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block rounded-full border-2 border-black bg-pop-green px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            What makes us different
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1] tracking-tight text-black md:text-6xl">
            We redesign the operating model. <span className="text-pop-red">Not</span> the toolstack.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-text-soft">
            We are not a chatbot agency. We are not Zapier consultants. We are not prompt
            engineers. We build the systems that change how your agency actually runs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.n}
              className="relative rounded-2xl border-2 border-black bg-white p-8 shadow-brutal-sm transition-transform hover:-translate-y-1 md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-pop-red md:text-4xl">{d.n}</span>
                <span className="rounded-full border-2 border-black bg-pop-yellow px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest">
                  Principle
                </span>
              </div>
              <p className="mt-6 text-sm text-text-mute line-through decoration-text-mute/50">
                {d.reject}
              </p>
              <p className="mt-2 font-display text-2xl uppercase leading-[1.1] text-black md:text-3xl">
                {d.affirm}
              </p>
              <p className="mt-5 text-base leading-relaxed text-text-soft">{d.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Old engine list ---------------- */
function OldEngine() {
  return (
    <section className="border-y-2 border-black bg-black px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="inline-block rounded-full border-2 border-pop-yellow bg-transparent px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pop-yellow">
            The Old Engine
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1] tracking-tight text-white md:text-5xl">
            Your agency cannot scale linearly with headcount forever.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            That model burns time, kills margins, and creates bottlenecks everywhere. We replace
            it — one workflow at a time.
          </p>
        </div>
        <div className="md:col-span-7">
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {OLD_ENGINE.map((item, i) => (
              <li
                key={item}
                className="group flex items-center justify-between py-5 transition-colors hover:bg-white/5"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-pop-yellow">0{i + 1}</span>
                  <span className="font-display text-2xl uppercase tracking-tight md:text-3xl">
                    {item}
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pop-yellow opacity-60 transition-opacity group-hover:opacity-100">
                  Replace →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Approach ---------------- */
function Approach() {
  const tints = ["#facc15", "#22c55e", "#3b82f6", "#ec4899"];
  return (
    <section id="approach" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border-2 border-black bg-pop-blue px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Our Approach
            </span>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[1] tracking-tight text-black md:text-6xl">
              From manual delivery to AI-native ops, in four moves.
            </h2>
          </div>
          <p className="max-w-sm text-base text-text-soft">
            Successful AI adoption requires process redesign — not tool adoption. Here's how we
            run that redesign.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((step, i) => (
            <div
              key={step.n}
              className="relative flex h-full flex-col gap-5 rounded-2xl border-2 border-black p-7 shadow-brutal-sm transition-transform hover:-translate-y-1"
              style={{ backgroundColor: tints[i] }}
            >
              <span className="font-display text-5xl text-black">{step.n}</span>
              <h3 className="font-display text-3xl uppercase tracking-tight text-black">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-black/80">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Systems ---------------- */
function Systems() {
  return (
    <section id="systems" className="border-y-2 border-black bg-surface-soft px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block rounded-full border-2 border-black bg-pop-orange px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            What we help with
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1] tracking-tight text-black md:text-6xl">
            Four systems. One operating model.
          </h2>
          <p className="mt-6 text-lg text-text-soft">
            We rebuild the parts of your agency that consume the most time and create the most
            friction.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SYSTEMS.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border-2 border-black bg-white p-8 shadow-brutal transition-transform hover:-translate-y-1 md:p-12"
            >
              <div
                className="absolute right-0 top-0 h-3 w-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text-mute">
                0{i + 1} / System
              </span>
              <h3 className="mt-4 font-display text-3xl uppercase tracking-tight text-black md:text-4xl">
                {s.title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-text-soft">{s.body}</p>
              <div
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-black px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-black"
                style={{ backgroundColor: s.color }}
              >
                <span className="size-1.5 rounded-full bg-black" />
                Live system
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Audience ---------------- */
function Audience() {
  const tints = ["#facc15", "#22c55e", "#3b82f6", "#ec4899", "#f97316", "#a855f7"];
  return (
    <section id="audience" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="inline-block rounded-full border-2 border-black bg-pop-magenta px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Who it's for
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1] tracking-tight text-black md:text-6xl">
            Built for agencies ready to stop running manually.
          </h2>
          <p className="mt-6 max-w-md text-base text-text-soft">
            If your agency depends on humans doing repetitive work every day, we can redesign it.
          </p>
          <p className="mt-10 max-w-lg font-serif text-2xl italic leading-snug text-black">
            "Tyche AI Labs helps agencies become AI-native — not by adding tools, but by
            rebuilding operations around AI."
          </p>
        </div>
        <div className="md:col-span-7">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {AUDIENCE.map((a, i) => (
              <li
                key={a}
                className="flex items-center gap-4 rounded-xl border-2 border-black bg-white p-5 shadow-brutal-sm transition-transform hover:-translate-y-0.5"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg border-2 border-black font-display text-sm text-black"
                  style={{ backgroundColor: tints[i % tints.length] }}
                >
                  0{i + 1}
                </span>
                <span className="font-display text-base uppercase tracking-tight text-black md:text-lg">
                  {a}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="cta" className="bg-pop-yellow px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full border-2 border-black bg-black px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pop-yellow">
          The Next Step
        </span>
        <h2 className="mt-6 font-display text-5xl uppercase leading-[0.95] tracking-tight text-black md:text-7xl lg:text-[7rem]">
          Ready to redesign
          <br />
          your agency?
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black/80 md:text-xl">
          If your team is still spending too much time on repetitive work and scattered
          operations, it's time to change the operating model.
        </p>
        <div className="mt-10">
          <a
            href="mailto:hello@tycheailabs.com"
            className="inline-flex items-center rounded-lg border-2 border-black bg-black px-10 py-5 font-display text-lg uppercase tracking-wider text-white shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-brutal-sm md:text-xl"
          >
            Book a Transformation Call
          </a>
        </div>
        <p className="mt-10 font-mono text-xs font-bold uppercase tracking-[0.3em] text-black/70">
          Stop running manually. Start operating intelligently.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
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

function Index() {
  return (
    <main className="bg-white text-foreground">
      <Nav />
      <OperatorStrip />
      <Hero />
      <LogoStrip />
      <SubHero />
      <Pain />
      <Differentiators />
      <OldEngine />
      <Approach />
      <Systems />
      <Audience />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
