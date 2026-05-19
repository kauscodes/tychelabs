# Tyche AI Labs

A React + TypeScript landing site built with Vite, TanStack React Router, and TanStack React Start.

## Overview

This repo is a marketing site for Tyche AI Labs. It uses a file-based route structure with server-side rendering support and includes:

- Home page at `/`
- Blog listing at `/blog`
- Blog post pages at `/blog/:slug`
- XML sitemap at `/sitemap.xml`
- Custom 404 and error pages

## Key technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Radix UI primitives
- `@tanstack/react-router`
- `@tanstack/react-start`
- `@tanstack/react-query`

## Project structure

- `src/routes/` — route entry files
- `src/components/` — UI and blog components
- `src/router.tsx` — router creation
- `src/routeTree.gen.ts` — generated route tree
- `src/server.ts` — server entrypoint
- `src/start.ts` — React Start configuration
- `src/styles.css` — global styles

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Notes

- The route tree is generated automatically by TanStack Router and should not be manually edited.
- The app is designed for deployment on a Cloudflare-compatible runtime, but Vite development works locally.
