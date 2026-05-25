import { useState } from "react";

const FAQS = [
  {
    q: "What do you actually do?",
    a: "We fix the operating workflows that slow agencies down: reporting, delivery tracking, client updates, intake, proposals, SOPs, and handoffs.",
  },
  {
    q: "Is this just automation?",
    a: "No. Automation is only useful after the workflow is clear. We redesign the workflow first, then add the right system around it.",
  },
  {
    q: "Who is this for?",
    a: "Indian marketing and digital agencies that are growing, but feeling drag in delivery, reporting, client communication, or founder dependency.",
  },
  {
    q: "Do we need to replace our tools?",
    a: "Usually no. We prefer working with the tools your team already knows unless the current stack is the real bottleneck.",
  },
  {
    q: "How do we start?",
    a: "Start with one messy workflow. We map it, find the leak, and show you what should be fixed first.",
  },
  {
    q: "What does it cost?",
    a: "The Ops Diagnostic is ₹15,000 and is credited toward a build sprint. Larger work depends on scope.",
  },
  {
    q: "Will this disrupt the team?",
    a: "It should do the opposite. We keep the first build narrow so the team can adopt it without stopping client work.",
  },
  {
    q: "What makes Tyche different?",
    a: "We are not selling prompts, chatbots, or dashboards for the sake of it. We care about whether the agency becomes easier to run.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Short answers.
          </h2>
          <p className="mt-6 max-w-md leading-7 text-slate-600">
            The honest version first. Details can come later.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.q}
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? <p className="pb-6 leading-7 text-slate-600">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
