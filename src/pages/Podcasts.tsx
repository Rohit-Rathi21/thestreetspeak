import { ArrowLeft, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const podcasts = [
  {
    title: "Episode 01 — Coming soon",
    description: "Honest conversations with educators, students, and mental-health voices.",
    tag: "Pilot",
    videoUrl: "", // Paste a YouTube embed URL or direct .mp4 here
  },
];

const isYouTube = (url: string) => /youtube\.com|youtu\.be/.test(url);

const Podcasts = () => {
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
            <Mic2 className="h-4 w-4" /> Podcasts
          </p>
          <h1 className="max-w-5xl font-display text-6xl font-black italic leading-none md:text-8xl">Voices from the street, in their own words.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft md:text-xl">Watch full episodes below. New conversations drop as we record them.</p>
        </div>
      </section>

      <section className="bg-paper-deep px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          {podcasts.map((ep, index) => (
            <article key={ep.title} className="flex flex-col border-2 border-primary bg-background p-6 shadow-cut">
              <div className="mb-6 flex items-center justify-between">
                <span className="bg-secondary px-3 py-1 text-sm font-black uppercase text-secondary-foreground">{ep.tag}</span>
                <span className="font-display text-4xl italic text-muted-foreground">0{index + 1}</span>
              </div>

              <div className="relative mb-6 aspect-video w-full border-2 border-primary bg-muted">
                {ep.videoUrl ? (
                  isYouTube(ep.videoUrl) ? (
                    <iframe
                      src={ep.videoUrl}
                      title={ep.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video src={ep.videoUrl} controls className="h-full w-full object-cover" />
                  )
                ) : (
                  <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm font-black uppercase text-muted-foreground">
                    Video coming soon
                  </div>
                )}
              </div>

              <h2 className="font-display text-3xl font-black leading-tight">{ep.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{ep.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Podcasts;
