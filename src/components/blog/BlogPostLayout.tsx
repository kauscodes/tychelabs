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
    <main className="bg-white text-slate-950">
      <BlogNav />

      <article>
        <header className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_30%),linear-gradient(135deg,#020617,#0f172a)]" />
          <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
            <Link
              to="/blog"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              All articles
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs font-medium text-slate-300">
              <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-teal-100">
                {post.category}
              </span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{post.excerpt}</p>
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6 text-sm text-slate-300">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-950">
                TL
              </div>
              <div>
                <p className="font-semibold text-white">Tyche Labs</p>
                <p className="text-xs text-slate-400">
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
          <section className="border-t border-slate-200 bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="mb-10 flex items-end justify-between">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  Keep reading
                </h2>
                <Link
                  to="/blog"
                  className="text-sm font-semibold text-slate-600 hover:text-slate-950"
                >
                  All articles
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
