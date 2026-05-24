import { useState } from "react";

const FAQS = [
  {
    q: "What does \u201CAI-native agency\u201D actually mean?",
    a: "An AI-native agency is not simply an agency using ChatGPT or automation tools. It is an agency that redesigns how it operates around AI-assisted workflows, operational systems, and scalable execution \u2014 delivery, reporting, internal ops, knowledge management, outbound, client comms, and orchestration. The goal is not to replace people. The goal is to increase operational leverage.",
  },
  {
    q: "Are you an AI automation agency?",
    a: "No. We are not a generic automation vendor or chatbot implementation shop. Tyche AI Labs focuses on operational AI transformation for service businesses \u2014 especially agencies. We redesign workflows, operational systems, and execution models so agencies can scale more efficiently. Automation is only one part of the solution.",
  },
  {
    q: "What types of agencies do you work with?",
    a: "Performance marketing agencies, SEO agencies, growth agencies, outbound/GTM agencies, creative agencies, and full-service digital agencies \u2014 especially firms dealing with delivery bottlenecks, operational chaos, scaling inefficiencies, reporting overhead, founder dependency, and margin pressure.",
  },
  {
    q: "What business outcomes do you typically improve?",
    a: "Reduced delivery overhead, faster turnaround, improved operational visibility, higher leverage per employee, lower reporting workload, cleaner internal systems, scalable outbound infrastructure, reduced founder dependency, and better workflow standardization. We focus on measurable operational improvements, not AI experimentation.",
  },
  {
    q: "Will AI reduce our team size?",
    a: "Not necessarily. The goal is not to replace employees. The goal is to reduce repetitive operational work, improve execution efficiency, increase output capacity, and help teams operate with more leverage.",
  },
  {
    q: "How long does implementation usually take?",
    a: "It depends on operational complexity. Engagements typically begin with an operational audit, workflow mapping, pilot system implementation, and optimization. Smaller pilots move quickly. Larger operational redesigns are phased over time.",
  },
  {
    q: "Do we need a technical team internally?",
    a: "No. Most agencies we work with are not deeply technical. We handle operational design, workflow architecture, system implementation, and AI integration strategy. The goal is to create systems your operational team can actually adopt and use.",
  },
  {
    q: "Will this disrupt our current operations?",
    a: "We avoid rip-and-replace transformations. Our approach is phased and operationally practical \u2014 identify bottlenecks first, redesign critical workflows gradually, test pilot systems, and optimize incrementally.",
  },
  {
    q: "What tools do you use?",
    a: "We are tool-agnostic. The right systems depend on your workflows, operational maturity, delivery structure, team capabilities, and business goals. We build scalable operational systems, not push specific software stacks.",
  },
  {
    q: "Is this consulting or implementation?",
    a: "Both. We do not stop at strategy decks. Tyche AI Labs combines operational analysis, workflow redesign, system implementation, process optimization, and AI-assisted operational infrastructure. The focus is execution, not advisory.",
  },
  {
    q: "Do you offer one-time projects or long-term engagements?",
    a: "Both. Some agencies engage us for operational audits, workflow redesign projects, outbound infrastructure, and reporting optimization. Others engage longer-term for operational transformation initiatives.",
  },
  {
    q: "How do you price engagements?",
    a: "Pricing depends on operational complexity, workflow scope, implementation depth, team size, and transformation goals. Most engagements begin with an operational discovery phase before final scoping.",
  },
  {
    q: "Why are agencies rethinking operations now?",
    a: "The agency market is shifting fast: AI-driven workflow changes, rising client expectations, margin pressure, operational complexity, faster delivery cycles, and commoditization of repetitive execution. Agencies that keep operating manually will struggle against AI-native firms.",
  },
  {
    q: "What makes Tyche AI Labs different from AI consultants?",
    a: "Most AI firms focus on isolated automations, chatbots, and tool deployments. We focus on operational systems, workflow redesign, delivery infrastructure, scalable execution models, and agency operating transformation. Our perspective is operational-first, not tool-first.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-y-2 border-black bg-surface-soft px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="inline-block rounded-full border-2 border-black bg-pop-yellow px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1] tracking-tight text-black md:text-5xl">
            Straight answers to the questions agency founders actually ask.
          </h2>
          <p className="mt-6 text-base text-text-soft">
            No jargon, no hype, no theatrical AI talk. Just how we think about operational
            transformation for agencies.
          </p>
          <a
            href="#cta"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-black bg-black px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-pop-yellow hover:text-black"
          >
            Have a different question? Book a call →
          </a>
        </div>
        <div className="md:col-span-7">
          <ul className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={f.q}
                  className="overflow-hidden rounded-xl border-2 border-black bg-white shadow-brutal-sm"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 px-5 py-5 text-left md:px-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm text-pop-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-base uppercase leading-tight tracking-tight text-black md:text-lg">
                        {f.q}
                      </span>
                    </div>
                    <span
                      className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-md border-2 border-black bg-pop-yellow font-display text-lg text-black transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 border-t-2 border-black/10 px-5 py-5 md:px-6">
                      <p className="text-base leading-relaxed text-text-soft">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
