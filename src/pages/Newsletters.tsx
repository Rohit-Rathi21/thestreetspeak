import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const newsletters = [
  {
    title: "hygiene,a gamble?",
    text: "The gap between food safety policies and street-level realities in India’s street food ecosystem.",
    tag: "Street food",
    url: "https://substack.com/@aditiprakash3/note/c-249618109",
  },
  {
    title: "CCTV or real safety?",
    text: "Cameras watch. Infrastructure protects.",
    tag: "SAFETY CHECK",
    url: "https://substack.com/@aditiprakash3/note/c-246740100",
  },
  {
    title: "Why is waste still everywhere?",
    text: "Rules exist. Execution fails.",
    tag: "BROKEN SYSTEM",
    url: "https://substack.com/home/post/p-195787050",
  },
  {
    title: "Is AQI hiding the real danger?",
    text: "Averages lie. Streets suffer.",
    tag: "HIDDEN EXPOSURE",
    url: "https://substack.com/@aditiprakash3/note/c-249029464",
  },
  {
    title: "Homes rise. People don’t.",
    text: "Shelters exist, but streets remain home.",
    tag: "NO ROOF, NO SYSTEM",
    url: "https://substack.com/@aditiprakash3/note/c-243347530",
  },
  {
    title: "Who owns the street?",
    text: "Livelihoods vs city rules.",
    tag: "STREET ECONOMY",
    url: "https://substack.com/@aditiprakash3/note/c-241788376",
  },
  {
    title: "One mistake. One life gone.",
    text: "Roads fail when systems and people do.",
    tag: "ROAD REALITY",
    url: "https://substack.com/home/post/p-185356961",
  },
  {
    title: "Why don’t we slow down?",
    text: "One moment changes everything.",
    tag: "ROAD REALITY",
    url: "https://substack.com/home/post/p-184645929",
  },
];

const Newsletters = () => {
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
            <Mail className="h-4 w-4" /> Newsletters
          </p>
          <h1 className="max-w-5xl font-display text-6xl font-black italic leading-none md:text-8xl">All the street dispatches in one place.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft md:text-xl">Stories, visuals, and community voices from everyday life — collected here as new newsletters are published.</p>
        </div>
      </section>

      <section className="bg-paper-deep px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {newsletters.map((item, index) => (
            <article key={item.title} className="border-2 border-primary bg-background p-6 shadow-cut transition-all hover:-translate-y-2 hover:shadow-none">
              <div className="mb-12 flex items-center justify-between">
                <span className="bg-secondary px-3 py-1 text-sm font-black uppercase text-secondary-foreground">{item.tag}</span>
                <span className="font-display text-4xl italic text-muted-foreground">0{index + 1}</span>
              </div>
              <h2 className="font-display text-3xl font-black leading-tight">{item.title}</h2>
              <p className="mt-4 leading-7 text-muted-foreground">{item.text}</p>
              <Button className="mt-8" variant="paper" asChild>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Read on Substack <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Newsletters;