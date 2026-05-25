import { createFileRoute, Link } from "@tanstack/react-router";
import HeroDemo from "@/components/ui/animated-shader-hero-demo";

export const Route = createFileRoute("/animated-shader-hero-demo")({
  component: AnimatedShaderHeroDemoPage,
});

function AnimatedShaderHeroDemoPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="absolute left-0 right-0 top-0 z-20 border-b border-white/10 px-5 py-4">
        <Link to="/" className="text-sm font-medium text-white/70 hover:text-white">
          Back to Tyche site
        </Link>
      </div>
      <HeroDemo />
    </main>
  );
}
