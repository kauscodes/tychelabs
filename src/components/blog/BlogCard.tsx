import { Link } from "@tanstack/react-router";
import type { Post } from "./posts";

export function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={`group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_30px_80px_-44px_rgba(20,184,166,0.45)] ${
        featured ? "md:col-span-2 md:p-12" : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
          <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-teal-700">
            {post.category}
          </span>
          <span>{post.readingTime}</span>
        </div>
        <h3
          className={`mt-6 font-display font-semibold leading-tight tracking-tight text-slate-950 ${
            featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{post.excerpt}</p>
      </div>
      <div className="mt-8 flex items-center justify-between text-sm">
        <span className="text-slate-500">
          {post.publishedLabel}
        </span>
        <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-teal-600">
          Read
        </span>
      </div>
    </Link>
  );
}
