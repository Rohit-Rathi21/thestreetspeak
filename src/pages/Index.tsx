import { ArrowRight, BookOpen, Mic2, Newspaper, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/streets-hero.jpg";

const articles = [
  {
    title: "Why is basic hygiene still a gamble?",
    text: "The gap between food safety policies and street-level realities in India’s street food ecosystem.",
    tag: "Street food",
  },
  {
    title: "Classrooms under fire",
    text: "How conflict disrupts learning, safety, and futures.",
    tag: "Case study",
  },
  {
    title: "The memorization trap",
    text: "Why rote learning can intensify exam anxiety.",
    tag: "Newsletter",
  },
];

const channels = [
  { icon: Newspaper, label: "Newsletters", detail: "Practical reads on education, careers, and student life." },
  { icon: Mic2, label: "Podcasts", detail: "Honest conversations with educators, students, and mental-health voices." },
  { icon: BookOpen, label: "Guides", detail: "Simple explainers for choices that usually feel overwhelming." },
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-30 border-b-2 border-primary bg-primary/95 px-5 py-4 text-primary-foreground backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="font-display text-2xl font-bold tracking-normal">The Street&apos;s Speak</a>
          <div className="hidden items-center gap-7 text-sm font-bold uppercase tracking-normal md:flex">
            <a href="#about" className="transition-colors hover:text-warm">About</a>
            <a href="#stories" className="transition-colors hover:text-warm">Stories</a>
            <a href="#join" className="transition-colors hover:text-warm">Join</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-[88vh] border-b-2 border-primary pt-20">
        <img src={heroImage} alt="Students reading thoughtfully by a window" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="grain-overlay absolute inset-0 opacity-25" />
        <div className="relative z-10 mx-auto flex min-h-[calc(88vh-5rem)] max-w-7xl flex-col justify-center px-5 py-20 md:px-10">
          <div className="max-w-4xl animate-float border-4 border-primary-foreground/90 bg-primary/20 px-6 py-8 text-primary-foreground shadow-soft backdrop-blur-sm md:px-14 md:py-12">
            <p className="mb-4 inline-flex items-center gap-2 bg-accent px-3 py-1 text-sm font-black uppercase text-accent-foreground">
              <Sparkles className="h-4 w-4" /> Culture, Streets, Stories
            </p>
            <h1 className="text-balance font-display text-6xl font-black italic leading-none md:text-8xl">The Street&apos;s Speak</h1>
            <p className="mt-6 max-w-2xl text-xl font-bold italic leading-relaxed md:text-2xl">Life as it happens, not as it’s told.</p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-background px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="sticky top-28">
            <span className="bg-muted px-3 py-1 font-display text-4xl uppercase shadow-cut md:text-5xl">About street’s</span>
          </div>
          <div className="space-y-6 text-lg leading-8 text-ink-soft md:text-xl">
            <p>The Streets Speak - that's the space where the everyday city comes alive through the people, places and experiences that make up the fabric of urban life – especially the stuff that often gets overlooked.</p>
            <p>From the messy beauty of street food to the rhythms of daily life and the secret stories that shape who we are, it's a place where the voices of real people bring the streets to life in all their messy glory.</p>
            <p>Its got articles and visuals and stories from the community, turning ordinary, everyday moments into something genuinely meaningful - none of the sugar coating or polish here, just the real deal, stuff that feels real and true to life.</p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-primary bg-primary py-4 text-primary-foreground">
        <div className="flex w-[200%] animate-ticker gap-8 whitespace-nowrap font-display text-3xl italic md:text-5xl">
          {[...Array(2)].map((_, group) => (
            <div key={group} className="flex gap-8">
              <span>learn more</span><span>fear less</span><span>reflect together</span><span>choose clearly</span><span>grow honestly</span>
            </div>
          ))}
        </div>
      </section>

      <section id="stories" className="bg-paper-deep px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase text-accent">Current conversations</p>
              <h2 className="mt-2 font-display text-5xl leading-tight md:text-7xl">Stories students actually talk about.</h2>
            </div>
            <Button variant="paper" size="lg">Explore case studies <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article, index) => (
              <article key={article.title} className="group border-2 border-primary bg-background p-6 shadow-cut transition-all hover:-translate-y-2 hover:shadow-none">
                <div className="mb-12 flex items-center justify-between">
                  <span className="bg-secondary px-3 py-1 text-sm font-black uppercase text-secondary-foreground">{article.tag}</span>
                  <span className="font-display text-4xl italic text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="font-display text-3xl font-black leading-tight">{article.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{article.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {channels.map((item) => {
            const content = (
              <>
              <item.icon className="mb-8 h-10 w-10 text-accent" />
              <h3 className="font-display text-3xl font-black">{item.label}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{item.detail}</p>
              </>
            );

            return item.label === "Newsletters" ? (
              <Link key={item.label} to="/newsletters" className="border-2 border-primary bg-card p-7 transition-transform hover:-rotate-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                {content}
              </Link>
            ) : (
              <div key={item.label} className="border-2 border-primary bg-card p-7 transition-transform hover:-rotate-1">
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section id="join" className="bg-editorial px-5 py-20 text-accent-foreground md:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl font-display text-5xl font-black italic leading-tight md:text-7xl">A space to learn, reflect, and grow together.</h2>
          <Button variant="editorial" size="lg" asChild>
            <a href="https://substack.com/@aditiprakash3" target="_blank" rel="noopener noreferrer">
              Follow our Substack <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;