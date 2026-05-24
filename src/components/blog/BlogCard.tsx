import { Link } from "@tanstack/react-router";
import type { Post } from "./posts";

const ACCENTS = ["#facc15", "#22c55e", "#3b82f6", "#ec4899", "#f97316", "#a855f7"];

function hashAccent(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return ACCENTS[h % ACCENTS.length];
}

export function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const accent = hashAccent(post.slug);
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-black bg-white p-7 shadow-brutal-sm transition-transform hover:-translate-y-1 hover:shadow-brutal ${
        featured ? "md:col-span-2 md:p-12" : ""
      }`}
    >
      <div
        className="absolute right-0 top-0 h-3 w-full"
        style={{ backgroundColor: accent }}
      />
      <div>
        <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black">
          <span
            className="rounded-full border-2 border-black px-2.5 py-0.5"
            style={{ backgroundColor: accent }}
          >
            {post.category}
          </span>
          <span className="text-text-mute">{post.readingTime}</span>
        </div>
        <h3
          className={`mt-6 font-display uppercase leading-[1] tracking-tight text-black ${
            featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-soft">{post.excerpt}</p>
      </div>
      <div className="mt-8 flex items-center justify-between text-xs">
        <span className="font-mono font-bold uppercase tracking-[0.18em] text-text-mute">
          {post.publishedLabel}
        </span>
        <span className="rounded-md border-2 border-black bg-black px-3 py-1.5 font-display text-xs uppercase tracking-widest text-white transition-colors group-hover:bg-pop-yellow group-hover:text-black">
          Read →
        </span>
      </div>
    </Link>
  );
}
