import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BlogNav, BlogFooter } from "@/components/blog/BlogChrome";
import { getPost, POSTS } from "@/components/blog/posts";

const SITE = "https://tychelabs.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const url = `${SITE}/blog/${post.slug}`;
    return {
      meta: [
        { title: post.seoTitle },
        { name: "description", content: post.metaDescription },
        { name: "keywords", content: post.keywords.join(", ") },
        { property: "og:title", content: post.seoTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.publishedISO },
        { property: "article:section", content: post.category },
        { name: "twitter:title", content: post.seoTitle },
        { name: "twitter:description", content: post.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.publishedISO,
            author: { "@type": "Organization", name: "Tyche Labs", url: SITE },
            publisher: {
              "@type": "Organization",
              name: "Tyche Labs",
              url: SITE,
            },
            mainEntityOfPage: url,
            articleSection: post.category,
            keywords: post.keywords.join(", "),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: PostRoute,
  notFoundComponent: PostNotFound,
});

function PostRoute() {
  const { post } = Route.useLoaderData();
  return <BlogPostLayout post={post} />;
}

function PostNotFound() {
  return (
    <main className="bg-brand-bg text-foreground">
      <BlogNav />
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">/ 404</p>
        <h1 className="mt-6 font-serif text-5xl text-white">Article not found.</h1>
        <p className="mt-4 text-text-soft">The piece you’re looking for may have moved.</p>
        <Link
          to="/blog"
          className="mt-8 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-primary"
        >
          Browse all articles
        </Link>
        <div className="mt-12 grid gap-3 text-left">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-lg border border-hairline bg-surface-soft p-4 text-sm text-text-soft hover:text-white"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </section>
      <BlogFooter />
    </main>
  );
}
