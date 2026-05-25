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
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_100px_-55px_rgba(15,23,42,0.7)] md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.18),transparent_32%)]" />
        <span className="relative inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-teal-100">
          Next step
        </span>
        <h3 className="relative mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          {heading}
        </h3>
        <p className="relative mt-5 max-w-xl text-base leading-7 text-slate-300">{copy}</p>
        <a
          href="/#cta"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-100"
        >
          {button}
        </a>
      </div>
    </section>
  );
}
