import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroDemo } from "@/components/ui/animated-hero-demo";

export const Route = createFileRoute("/animated-hero-demo")({
  component: AnimatedHeroDemoPage,
});

function AnimatedHeroDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border px-5 py-4">
        <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          Back to Tyche site
        </Link>
      </div>
      <HeroDemo />
    </main>
  );
}
