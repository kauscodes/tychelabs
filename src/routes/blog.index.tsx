import { createFileRoute } from "@tanstack/react-router";
import { BlogNav, BlogFooter } from "@/components/blog/BlogChrome";
import { BlogCard } from "@/components/blog/BlogCard";
import { POSTS } from "@/components/blog/posts";

const SITE = "https://tychelabs.lovable.app";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Insights — Agency operations for India | Tyche Labs" },
      {
        name: "description",
        content:
          "Essays on Indian agency operations, workflow redesign, margin leakage, WhatsApp chaos, delivery systems, and practical AI adoption.",
      },
      {
        property: "og:title",
        content: "Insights — Agency operations for India | Tyche Labs",
      },
      {
        property: "og:description",
        content:
          "Essays on Indian agency operations, workflow redesign, margin leakage, and practical AI adoption.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Tyche Labs Insights",
          url: `${SITE}/blog`,
          publisher: { "@type": "Organization", name: "Tyche Labs" },
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE}/blog/${p.slug}`,
            datePublished: p.publishedISO,
            description: p.metaDescription,
          })),
        }),
      },
    ],
  }),
});

const CATEGORIES = Array.from(new Set(POSTS.map((p) => p.category)));

function BlogIndex() {
  const [featured, ...rest] = POSTS;
  return (
    <main className="bg-white text-slate-950">
      <BlogNav />

      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_30%),linear-gradient(135deg,#020617,#0f172a)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-teal-100">
            Insights
          </span>
          <h1 className="animate-fade-up mt-6 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl lg:text-[6rem]">
            Notes on building calmer agencies.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Short essays on delivery, reporting, client communication, and the habits that make
            growth easier to carry.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="bg-slate-50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2">
          <BlogCard post={featured} featured />
          {rest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
        </div>
      </section>

      <BlogFooter />
    </main>
  );
}
