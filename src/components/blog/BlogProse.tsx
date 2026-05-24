import type { Block } from "./posts";

export function BlogProse({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-2xl">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-14 mb-5 font-display text-3xl uppercase leading-[1] tracking-tight text-black md:text-4xl"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3
              key={i}
              className="mt-10 mb-4 font-display text-2xl uppercase tracking-tight text-black"
            >
              {b.text}
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="my-6 space-y-3 pl-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-lg leading-relaxed text-text-soft">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-pop-red" />
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
              className="my-10 rounded-xl border-2 border-black bg-pop-yellow p-6 font-display text-xl uppercase leading-[1.15] tracking-tight text-black shadow-brutal-sm md:text-2xl"
            >
              "{b.text}"
            </blockquote>
          );
        }
        return (
          <p key={i} className="my-5 text-lg leading-[1.8] text-text-soft">
            {b.text}
          </p>
        );
      })}
    </div>
  );
}
