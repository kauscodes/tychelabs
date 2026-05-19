# Plan: Tyche AI Labs Blog

Add a fully designed blog section with 5 long-form posts, each on its own route for SSR + SEO.

## Routes to create

- `src/routes/blog.tsx` — blog index (hero "Operational Intelligence for Modern Agencies" + subtext, card grid of 5 posts with category, title, excerpt, reading time, hover state)
- `src/routes/blog.why-most-agencies-will-struggle-in-the-ai-era.tsx`
- `src/routes/blog.hidden-operational-costs-killing-agency-margins.tsx`
- `src/routes/blog.ai-automation-not-enough-operational-redesign.tsx`
- `src/routes/blog.ai-native-agencies-scale-with-smaller-teams.tsx`
- `src/routes/blog.seo-ai-search-geo-agencies.tsx`

TanStack flat dot-notation maps these to `/blog`, `/blog/why-most-...`, etc.

## Shared design system

Create `src/components/blog/` with:
- `BlogPostLayout.tsx` — wraps every post: sticky nav (reuse styling from index), article header (category eyebrow, serif H1, meta row with author "Tyche AI Labs" + reading time + category), optional hero image area (gradient placeholder using brand tokens — no broken image imports), prose body, CTA banner, related posts strip, footer.
- `BlogProse.tsx` — typography wrapper enforcing editorial reading column: max-w-2xl, serif H2/H3, generous line-height, emerald accent on links, large drop-cap optional on first paragraph.
- `BlogCard.tsx` — card used on index and related strip.
- `BlogCTA.tsx` — reusable CTA banner with variant prop (1/2/3 from spec).
- `posts.ts` — single source of truth: array of `{slug, title, seoTitle, metaDescription, category, readingTime, excerpt, cta: {heading, copy, button}, relatedSlugs, body: ReactNode}`. Body authored as JSX using BlogProse children. Drives both index and per-post pages so related-links stay consistent.

## Per-route head()

Each post route calls `head()` with: title (SEO title from spec), description (meta desc), og:title, og:description, og:type=article, canonical link, JSON-LD `Article` schema (headline, author Organization "Tyche AI Labs", datePublished placeholder ISO). Blog index gets its own title/description and `Blog` JSON-LD.

## Homepage integration

- Add "Blog" link to the existing nav in `src/routes/index.tsx`.
- Add `<Link>` import from `@tanstack/react-router` if not already.

## Sitemap

Add entries for `/blog` and each of the 5 post slugs to `src/routes/sitemap[.]xml.ts` if it exists; otherwise create it per the project rules (only if user wants — will create since SEO is the explicit goal here).

## Design language (matches existing executive-cinematic site)

- Dark `bg-brand-bg`, `Instrument Serif` headlines, Inter body, JetBrains Mono eyebrows.
- Note: spec mentions "dark text on light background" for blogs, but the site is established dark editorial. Will keep dark theme for consistency — articles use slightly lighter surface (`bg-surface-soft`) for the reading column to soften contrast, with off-white body text. This keeps brand cohesion. If user prefers light blog pages specifically, easy follow-up swap.
- Emerald accent (`--primary`) for links, eyebrow rules, CTA buttons.
- Generous spacing: section py-24, prose paragraphs leading-relaxed text-lg.
- Subtle `animate-fade-up` on article header.
- No images required (spec gives prompts but content stands without them) — use typographic hero with category eyebrow + large serif title. Can generate images later if requested.

## Files changed

- created: 6 route files, 5 blog component files
- edited: `src/routes/index.tsx` (nav link), optionally sitemap

## Out of scope

- CMS / dynamic content (posts are TSX modules)
- Generating featured images (defer until requested)
- Light-mode toggle for blog
