export function BlogCTA({
  heading,
  copy,
  button,
}: {
  heading: string;
  copy: string;
  button: string;
}) {
  return (
    <section className="mx-auto my-20 max-w-4xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-surface-hard via-surface-soft to-brand-bg p-10 md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl" />
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
          / Next step
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl">{heading}</h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-soft">{copy}</p>
        <a
          href="/#cta"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          {button}
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
