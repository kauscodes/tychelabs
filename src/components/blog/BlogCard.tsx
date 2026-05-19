import { Link } from "@tanstack/react-router";
import type { Post } from "./posts";

export function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-surface-soft p-8 transition-all hover:border-primary/40 hover:bg-surface-hard ${
        featured ? "md:col-span-2 md:p-12" : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          <span>{post.category}</span>
          <span className="h-px w-8 bg-primary/40" />
          <span className="text-text-mute">{post.readingTime}</span>
        </div>
        <h3
          className={`mt-6 font-serif leading-[1.1] text-white ${
            featured ? "text-4xl md:text-5xl" : "text-2xl md:text-[28px]"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-soft">{post.excerpt}</p>
      </div>
      <div className="mt-8 flex items-center justify-between text-xs text-text-mute">
        <span className="font-mono uppercase tracking-[0.18em]">{post.publishedLabel}</span>
        <span className="font-mono uppercase tracking-[0.18em] text-primary transition-transform group-hover:translate-x-1">
          Read →
        </span>
      </div>
    </Link>
  );
}
