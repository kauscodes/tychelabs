export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  readingTime: string;
  publishedISO: string;
  publishedLabel: string;
  excerpt: string;
  keywords: string[];
  cta: { heading: string; copy: string; button: string };
  relatedSlugs: string[];
  body: Block[];
};

const p = (text: string): Block => ({ type: "p", text });
const h2 = (text: string): Block => ({ type: "h2", text });
const ul = (items: string[]): Block => ({ type: "ul", items });

export const POSTS: Post[] = [
  {
    slug: "indian-agency-operations-problem",
    title: "The Indian Agency Operations Problem Nobody Talks About",
    seoTitle: "The Indian Agency Operations Problem Nobody Talks About | Tyche Labs",
    metaDescription:
      "Why Indian marketing agencies lose margin to WhatsApp chaos, retainer creep, founder dependency, and manual reporting.",
    category: "Indian Agency Ops",
    readingTime: "7 min read",
    publishedISO: "2026-05-21",
    publishedLabel: "May 21, 2026",
    excerpt:
      "Indian agencies are not short on demand. They are short on operating systems that can keep up with growth.",
    keywords: [
      "Indian marketing agencies",
      "agency operations India",
      "WhatsApp agency operations",
      "agency margin leakage",
      "digital agency systems",
    ],
    cta: {
      heading: "Your agency probably does not need another tool.",
      copy: "It needs a clearer operating system for intake, delivery, reporting, and client communication.",
      button: "Take a free ops audit",
    },
    relatedSlugs: [
      "indian-agencies-lose-margins-win-revenue",
      "replace-agency-whatsapp-group-with-system",
    ],
    body: [
      p(
        "Indian agencies are very good at winning work. Performance retainers, SEO mandates, social media packages, website builds, influencer campaigns, outbound programs: demand is everywhere.",
      ),
      p(
        "The problem starts after the sale. Work moves into WhatsApp groups, scattered sheets, drive folders, voice notes, founder memory, and half-written SOPs. The agency grows, but the operating system does not.",
      ),
      h2("The real operating channel is WhatsApp"),
      p(
        "Many Indian agencies pretend the work lives in project management software. In reality, the important context often lives in WhatsApp. Client approvals, internal follow-ups, campaign changes, escalation notes, and urgent reminders all happen there.",
      ),
      p(
        "WhatsApp is fast, familiar, and impossible to ignore. It is also a terrible system of record. It does not assign ownership cleanly, preserve context reliably, or show where delivery is stuck.",
      ),
      h2("Retainers hide the leak"),
      p(
        "Retainer pricing makes the problem harder to see. The client asks for one more creative, one more report, one more call, one more small edit. Each request looks reasonable. Together, they eat the margin.",
      ),
      ul([
        "Scope creep is not tracked against delivery effort",
        "Senior review time is not counted honestly",
        "Reporting effort is treated as free hygiene work",
        "Client follow-up time disappears into chat threads",
      ]),
      h2("The founder becomes the API"),
      p(
        "In many 20-person agencies, the founder or one senior operator becomes the routing layer for everything. Who should do this? What did we promise? What is the client expecting? Where is the last report? The answer is usually inside one person's head.",
      ),
      p(
        "That works until the agency crosses a threshold. Then the founder is no longer leading the business. They are operating the queue.",
      ),
      h2("The fix is not more dashboards"),
      p(
        "A dashboard does not fix unclear ownership. A chatbot does not fix broken handoffs. The first fix is workflow clarity: what enters the system, who owns it, what standard it must meet, where context lives, and how the client gets updated.",
      ),
      p(
        "Once that is clear, AI and automation become useful. They can summarize context, draft updates, generate report narratives, route work, and preserve operational memory. But the system has to come first.",
      ),
      p(
        "That is the operating problem Indian agencies need to solve now: not how to look more advanced, but how to stop losing margin through invisible chaos.",
      ),
    ],
  },
  {
    slug: "15-person-performance-agency-work-of-30",
    title: "How a 15-Person Performance Marketing Agency Can Do the Work of 30",
    seoTitle: "How a 15-Person Performance Marketing Agency Can Do the Work of 30 | Tyche Labs",
    metaDescription:
      "A practical operating model for Indian performance agencies that need more output without doubling headcount.",
    category: "Agency Leverage",
    readingTime: "8 min read",
    publishedISO: "2026-05-17",
    publishedLabel: "May 17, 2026",
    excerpt:
      "The answer is not making people work harder. It is removing the work that should never have required a person.",
    keywords: [
      "performance marketing agency operations",
      "scale agency without hiring",
      "agency workflow automation",
      "agency leverage",
      "Indian performance agency",
    ],
    cta: {
      heading: "Before hiring five more people, audit the work first.",
      copy: "We help agencies find which workflows should be systemized before they add headcount.",
      button: "Audit my agency ops",
    },
    relatedSlugs: [
      "six-agency-workflows-automate-before-hiring",
      "indian-agencies-lose-margins-win-revenue",
    ],
    body: [
      p(
        "A 15-person performance agency usually does not need to become a 30-person agency immediately. It needs to stop using senior humans for work that can be standardized, assisted, or removed.",
      ),
      p(
        "This is not about replacing talent. It is about protecting talent from repetitive coordination, reporting, research, and follow-up work.",
      ),
      h2("Start with the weekly work map"),
      p("List every recurring task across sales, onboarding, campaign delivery, reporting, and client communication. Then mark each task by judgment level."),
      ul([
        "High judgment: strategy, budget allocation, creative direction, client trust",
        "Medium judgment: QA, recommendations, prioritization, diagnosis",
        "Low judgment: formatting reports, chasing updates, collecting inputs, first drafts",
      ]),
      p(
        "Most agencies discover that too much senior time is sitting in low-judgment work. That is the leverage gap.",
      ),
      h2("Build leverage around four roles"),
      ul([
        "Strategists own judgment and client outcomes",
        "Operators own workflow movement and delivery hygiene",
        "Systems own templates, automations, and reporting logic",
        "AI assists with drafts, summaries, QA checklists, research, and routing",
      ]),
      p(
        "The team does not become less human. It becomes less wasteful. People spend more time deciding, reviewing, and improving, and less time carrying information between tools.",
      ),
      h2("The 30-person output comes from repeatability"),
      p(
        "If every proposal starts from scratch, every report needs manual cleanup, every campaign update requires a meeting, and every SOP is tribal knowledge, you will need more people forever.",
      ),
      p(
        "If the agency has reusable briefs, standardized QA, automated reporting narratives, clean intake, and clear escalation rules, the same team can handle more volume with less panic.",
      ),
      h2("What to measure"),
      ul([
        "Hours spent on reporting per client per month",
        "Number of internal follow-ups per deliverable",
        "Senior review time per campaign",
        "Rework caused by unclear briefs",
        "Client update time per account",
        "Tasks completed without founder involvement",
      ]),
      p(
        "The goal is not a magical productivity claim. The goal is simple: reduce operational drag until the current team can produce more without becoming fragile.",
      ),
    ],
  },
  {
    slug: "six-agency-workflows-automate-before-hiring",
    title: "The 6 Workflows Every Agency Should Automate Before Hiring Their Next Person",
    seoTitle: "6 Agency Workflows to Automate Before Hiring | Tyche Labs",
    metaDescription:
      "Six practical agency workflows to systemize before adding headcount: intake, reporting, briefs, QA, client updates, and SOP capture.",
    category: "Workflow Automation",
    readingTime: "9 min read",
    publishedISO: "2026-05-13",
    publishedLabel: "May 13, 2026",
    excerpt:
      "If a workflow repeats every week and still needs manual chasing, fix that before writing another job description.",
    keywords: [
      "agency workflow automation",
      "automate agency operations",
      "agency hiring",
      "agency SOPs",
      "agency reporting automation",
    ],
    cta: {
      heading: "Hiring should not be your first ops fix.",
      copy: "We help agencies systemize repeated work before payroll becomes the only growth lever.",
      button: "Find the first workflow",
    },
    relatedSlugs: [
      "15-person-performance-agency-work-of-30",
      "replace-agency-whatsapp-group-with-system",
    ],
    body: [
      p(
        "Hiring is sometimes necessary. But many agencies hire because the workflow is broken, not because the business truly needs another person.",
      ),
      p(
        "Before adding headcount, inspect the work that repeats every week. If it is predictable, messy, and manually chased, it is a candidate for systemization.",
      ),
      h2("1. Lead intake"),
      p(
        "Every inbound lead should be captured, enriched, qualified, and routed before it reaches the founder's calendar. A bad-fit lead should not consume senior time.",
      ),
      h2("2. Proposal and brief creation"),
      p(
        "Most proposals and briefs are variations of previous work. Build templates, inputs, and AI-assisted first drafts so teams stop starting from a blank page.",
      ),
      h2("3. Client onboarding"),
      p(
        "Asset collection, access requests, kickoff notes, account setup, and first-week communication should follow a checklist. Onboarding should not depend on who remembered what last time.",
      ),
      h2("4. Reporting narratives"),
      p(
        "Data may come from ad platforms, analytics tools, CRM exports, or Sheets. The narrative should not be rewritten manually every month. Standardize the data pull and automate the first report draft.",
      ),
      h2("5. QA and delivery checks"),
      p(
        "Campaigns, content, landing pages, and reports need consistent review standards. QA should be a system, not the mood of the senior person checking it.",
      ),
      h2("6. SOP capture"),
      p(
        "Every repeated fix should become reusable knowledge. If a senior operator explains the same thing three times, the fourth answer should live in the system.",
      ),
      h2("How to choose the first workflow"),
      ul([
        "It happens every week",
        "It causes visible delay",
        "It creates rework",
        "It needs repeated follow-up",
        "It does not require deep strategy every time",
      ]),
      p(
        "Start there. The best automation project is not the flashiest one. It is the one that gives the team back time immediately.",
      ),
    ],
  },
  {
    slug: "indian-agencies-lose-margins-win-revenue",
    title: "Why Indian Agencies Lose on Margins but Win on Revenue",
    seoTitle: "Why Indian Agencies Lose on Margins but Win on Revenue | Tyche Labs",
    metaDescription:
      "Indian agencies often grow revenue while margins stay weak. Here is why retainer pricing, scope creep, and delivery chaos create the gap.",
    category: "Agency Margins",
    readingTime: "7 min read",
    publishedISO: "2026-05-08",
    publishedLabel: "May 8, 2026",
    excerpt:
      "Revenue growth can hide a weak operating model. The danger shows up when every new client adds more chaos than profit.",
    keywords: [
      "agency margins India",
      "retainer scope creep",
      "digital agency pricing India",
      "agency profitability",
      "agency delivery operations",
    ],
    cta: {
      heading: "Revenue is not the same as leverage.",
      copy: "We help agencies find where margin is leaking inside delivery, reporting, and client communication.",
      button: "Check my margin leaks",
    },
    relatedSlugs: [
      "indian-agency-operations-problem",
      "six-agency-workflows-automate-before-hiring",
    ],
    body: [
      p(
        "A lot of Indian agencies are good at selling. They add accounts, retainers, projects, and new service lines. The top line looks healthy.",
      ),
      p(
        "But inside the business, the team is stretched. Reports take too long. Client changes never stop. Seniors are pulled into execution. Juniors need constant review. The founder is still solving delivery problems.",
      ),
      h2("The revenue problem is not visible enough"),
      p(
        "When revenue rises, operational weakness can look like growth. Everyone is busy. The team feels important. The founder feels momentum. But busyness is not margin.",
      ),
      p(
        "If every new client adds disproportionate coordination, the agency is not scaling. It is accumulating operational debt.",
      ),
      h2("Retainers create hidden scope creep"),
      p(
        "Indian clients often expect flexibility. That is not wrong. But if the agency does not track extra work clearly, flexibility becomes margin leakage.",
      ),
      ul([
        "Extra creatives that are not counted",
        "Extra calls that do not change pricing",
        "Extra reports created because the client asked once",
        "Extra revisions because the brief was unclear",
        "Extra senior involvement because the process lacks guardrails",
      ]),
      h2("Cheap execution is not a strategy"),
      p(
        "Many agencies try to protect margins by hiring cheaper execution talent. That helps for a while, but it creates another cost: management drag.",
      ),
      p(
        "If juniors need too much handholding, senior people become reviewers, editors, trainers, and emergency operators. The salary line looks efficient, but the hidden senior load is expensive.",
      ),
      h2("The margin fix is operational design"),
      p(
        "Better margins come from cleaner intake, sharper scope control, reusable templates, standard QA, reporting automation, and client update systems. The agency needs fewer invisible handoffs and fewer founder interventions.",
      ),
      p(
        "That is how revenue growth becomes healthier: not by saying yes to less work, but by making repeated work easier to deliver profitably.",
      ),
    ],
  },
  {
    slug: "replace-agency-whatsapp-group-with-system",
    title: "What Happens When You Replace Your Agency's WhatsApp Group With a System",
    seoTitle: "Replace Your Agency WhatsApp Group With a System | Tyche Labs",
    metaDescription:
      "What changes when Indian agencies move client updates, delivery follow-ups, and internal context out of WhatsApp chaos and into an operating system.",
    category: "Client Communication",
    readingTime: "6 min read",
    publishedISO: "2026-05-02",
    publishedLabel: "May 2, 2026",
    excerpt:
      "WhatsApp is great for urgency. It is terrible for ownership, memory, reporting, and delivery control.",
    keywords: [
      "WhatsApp agency operations",
      "agency client communication",
      "agency delivery system",
      "Indian agency workflow",
      "agency operating system",
    ],
    cta: {
      heading: "WhatsApp can stay. It just cannot be the system.",
      copy: "We help agencies move ownership, context, reporting, and follow-ups into workflows the team can trust.",
      button: "Talk to us",
    },
    relatedSlugs: [
      "indian-agency-operations-problem",
      "six-agency-workflows-automate-before-hiring",
    ],
    body: [
      p(
        "No Indian agency is going to stop using WhatsApp tomorrow. Clients like it. Teams respond quickly. Founders can get attention immediately.",
      ),
      p(
        "The goal is not to ban WhatsApp. The goal is to stop pretending it is an operating system.",
      ),
      h2("What breaks inside WhatsApp"),
      ul([
        "Ownership is unclear",
        "Decisions get buried",
        "Context is impossible to retrieve later",
        "The loudest message gets the most attention",
        "Follow-ups depend on memory",
        "Client expectations drift without a record",
      ]),
      h2("The system should carry the memory"),
      p(
        "A real workflow captures the request, assigns an owner, stores context, tracks status, creates reminders, and produces a client update. WhatsApp can still be the notification layer. It should not be the only source of truth.",
      ),
      h2("The first week feels calmer"),
      p(
        "When a system replaces the group as the source of truth, the team stops asking the same questions repeatedly. The founder stops forwarding screenshots. Account managers stop chasing basic status. Clients get clearer updates.",
      ),
      h2("The second month shows the margin impact"),
      p(
        "The value becomes obvious when fewer tasks fall through cracks, reports take less time, and senior people stop being pulled into routine coordination. The agency does not just feel cleaner. It becomes cheaper to run.",
      ),
      h2("What to move out of WhatsApp first"),
      ul([
        "Client requests",
        "Deliverable status",
        "Approval history",
        "Report notes",
        "Escalation reasons",
        "Recurring follow-ups",
      ]),
      p(
        "WhatsApp should remain useful: quick, human, responsive. But the agency's memory, ownership, and delivery control should live somewhere stronger.",
      ),
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const getRelated = (slugs: string[]) =>
  slugs.map((s) => POSTS.find((p) => p.slug === s)).filter((p): p is Post => Boolean(p));
