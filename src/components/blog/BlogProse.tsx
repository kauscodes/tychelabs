import type { Block } from "./posts";

export function BlogProse({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-2xl">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-14 mb-5 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-4xl"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3
              key={i}
              className="mt-10 mb-4 font-display text-2xl font-semibold tracking-tight text-slate-950"
            >
              {b.text}
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="my-6 space-y-3 pl-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-lg leading-8 text-slate-600">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-teal-500" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (b.type === "quote") {
          return (
            <blockquote
              key={i}
              className="my-10 rounded-3xl border border-teal-100 bg-teal-50 p-6 text-xl font-medium leading-8 tracking-tight text-slate-950 md:text-2xl"
            >
              "{b.text}"
            </blockquote>
          );
        }
        return (
          <p key={i} className="my-5 text-lg leading-8 text-slate-600">
            {b.text}
          </p>
        );
      })}
    </div>
  );
}
