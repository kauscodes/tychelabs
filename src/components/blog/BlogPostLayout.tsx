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
    <main className="bg-brand-bg text-foreground">
      <BlogNav />

      <article>
        <header className="relative overflow-hidden border-b border-hairline">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_60%)]" />
          <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-20 md:pt-28">
            <Link
              to="/blog"
              className="font-mono text-xs uppercase tracking-[0.22em] text-text-mute transition-colors hover:text-primary"
            >
              ← All articles
            </Link>
            <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              <span>{post.category}</span>
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-text-mute">{post.readingTime}</span>
            </div>
            <h1 className="animate-fade-up mt-6 font-serif text-4xl leading-[1.05] text-white md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft">{post.excerpt}</p>
            <div className="mt-10 flex items-center gap-4 border-t border-hairline pt-6 text-sm text-text-mute">
              <div className="flex size-9 items-center justify-center rounded-full border border-hairline bg-surface-soft font-mono text-[11px] text-primary">
                TL
              </div>
              <div>
                <p className="text-white">Tyche AI Labs</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  {post.publishedLabel}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-20 md:py-28">
          <BlogProse blocks={post.body} />
        </div>

        <BlogCTA heading={post.cta.heading} copy={post.cta.copy} button={post.cta.button} />

        {related.length > 0 && (
          <section className="border-t border-hairline py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
              <div className="mb-10 flex items-end justify-between">
                <h2 className="font-serif text-3xl text-white md:text-4xl">Keep reading</h2>
                <Link
                  to="/blog"
                  className="font-mono text-xs uppercase tracking-[0.18em] text-primary hover:underline"
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
