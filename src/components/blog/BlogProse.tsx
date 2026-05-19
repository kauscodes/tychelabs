import type { Block } from "./posts";

export function BlogProse({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-2xl">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-16 mb-6 font-serif text-3xl leading-tight text-white md:text-4xl"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3 key={i} className="mt-10 mb-4 font-serif text-2xl text-white">
              {b.text}
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="my-6 space-y-3 pl-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-lg leading-relaxed text-text-soft">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
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
              className="my-10 border-l-2 border-primary pl-6 font-serif text-2xl leading-snug text-white"
            >
              {b.text}
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
