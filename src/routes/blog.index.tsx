import { createFileRoute } from "@tanstack/react-router";
import { BlogNav, BlogFooter } from "@/components/blog/BlogChrome";
import { BlogCard } from "@/components/blog/BlogCard";
import { POSTS } from "@/components/blog/posts";

const SITE = "https://tychelabs.lovable.app";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Insights — Operational Intelligence for Modern Agencies | Tyche AI Labs" },
      {
        name: "description",
        content:
          "Essays on AI-native operations, agency systems, workflow redesign, growth infrastructure, and the future of service businesses.",
      },
      {
        property: "og:title",
        content: "Insights — Operational Intelligence for Modern Agencies | Tyche AI Labs",
      },
      {
        property: "og:description",
        content:
          "Essays on AI-native operations, agency systems, workflow redesign, and the future of service businesses.",
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
          name: "Tyche AI Labs Insights",
          url: `${SITE}/blog`,
          publisher: { "@type": "Organization", name: "Tyche AI Labs" },
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
    <main className="bg-white text-foreground">
      <BlogNav />

      <header className="relative overflow-hidden border-b-2 border-black bg-pop-yellow">
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
          <span className="inline-block rounded-full border-2 border-black bg-black px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pop-yellow">
            / Insights
          </span>
          <h1 className="animate-fade-up mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.95] tracking-tight text-black md:text-7xl lg:text-[6rem]">
            Operational intelligence for modern agencies.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/80">
            Sharp essays on AI-native operations, agency systems, workflow redesign, growth
            infrastructure, and the future of service businesses.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="rounded-full border-2 border-black bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <BlogCard post={featured} featured />
          {rest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <BlogFooter />
    </main>
  );
}
