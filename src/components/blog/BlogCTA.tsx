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
    <section className="mx-auto my-16 max-w-4xl px-5 md:px-6">
      <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-black p-8 text-white shadow-brutal md:p-12">
        <div
          className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #facc15 2px, transparent 2px)",
            backgroundSize: "12px 12px",
          }}
        />
        <span className="inline-block rounded-full border-2 border-pop-yellow bg-transparent px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pop-yellow">
          / Next step
        </span>
        <h3 className="mt-5 font-display text-3xl uppercase leading-[1] tracking-tight text-white md:text-5xl">
          {heading}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">{copy}</p>
        <a
          href="/#cta"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-black bg-pop-yellow px-6 py-3 font-display text-sm uppercase tracking-wider text-black shadow-brutal-sm transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          {button}
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
