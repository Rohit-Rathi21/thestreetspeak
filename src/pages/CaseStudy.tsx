import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseStudy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="border-b-2 border-primary bg-primary px-5 py-4 text-primary-foreground md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold tracking-normal">The Street&apos;s Speak</Link>
          <Button variant="editorial" size="sm" asChild>
            <Link to="/"><ArrowLeft className="h-4 w-4" /> Back home</Link>
          </Button>
        </div>
      </nav>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 inline-flex items-center gap-2 bg-accent px-3 py-1 text-sm font-black uppercase text-accent-foreground">
            <BookOpen className="h-4 w-4" /> Case Study
          </p>
          <h1 className="max-w-5xl font-display text-6xl font-black italic leading-none md:text-8xl">The most happening street</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft md:text-xl">Add your case study here.</p>
        </div>
      </section>
    </main>
  );
};

export default CaseStudy;