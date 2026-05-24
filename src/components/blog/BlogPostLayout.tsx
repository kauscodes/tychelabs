import { Link } from "@tanstack/react-router";
import { BlogNav, BlogFooter } from "./BlogChrome";
import { BlogProse } from "./BlogProse";
import { BlogCTA } from "./BlogCTA";
import { BlogCard } from "./BlogCard";
import type { Post } from "./posts";
import { getRelated } from "./posts";

export function BlogPostLayout({ post }: { post: Post }) {
  const related = getRelated(post.relatedSlugs);
  return (
    <main className="bg-white text-foreground">
      <BlogNav />

      <article>
        <header className="relative overflow-hidden border-b-2 border-black bg-pop-yellow">
          <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-16 md:px-8 md:pt-24 md:pb-20">
            <Link
              to="/blog"
              className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-black transition-colors hover:text-pop-red"
            >
              ← All articles
            </Link>
            <div className="mt-8 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black">
              <span className="rounded-full border-2 border-black bg-white px-3 py-0.5">
                {post.category}
              </span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="animate-fade-up mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight text-black md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/80">{post.excerpt}</p>
            <div className="mt-10 flex items-center gap-4 border-t-2 border-black/15 pt-6 text-sm text-black">
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-black bg-black font-display text-xs text-pop-yellow">
                TL
              </div>
              <div>
                <p className="font-bold text-black">Tyche AI Labs</p>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/70">
                  {post.publishedLabel}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white px-5 py-16 md:px-8 md:py-24">
          <BlogProse blocks={post.body} />
        </div>

        <BlogCTA heading={post.cta.heading} copy={post.cta.copy} button={post.cta.button} />

        {related.length > 0 && (
          <section className="border-t-2 border-black bg-surface-soft py-20">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="mb-10 flex items-end justify-between">
                <h2 className="font-display text-3xl uppercase tracking-tight text-black md:text-5xl">
                  Keep reading
                </h2>
                <Link
                  to="/blog"
                  className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-black hover:text-pop-red"
                >
                  All articles →
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {related.map((r) => (
                  <BlogCard key={r.slug} post={r} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <BlogFooter />
    </main>
  );
}
