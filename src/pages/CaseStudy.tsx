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
          <h1 className="max-w-6xl font-display text-6xl font-black italic leading-none md:text-8xl">The most happening street: Majnu ka tilla</h1>
        </div>
      </section>

      <section className="bg-paper-deep px-5 py-16 md:px-10 md:py-24">
        <article className="mx-auto max-w-4xl space-y-12 text-lg leading-8 text-ink-soft md:text-xl md:leading-9">
          <div className="space-y-5">
            <h2 className="font-display text-4xl font-black text-foreground md:text-5xl">Introduction</h2>
            <p>Deep in North Delhi, Majnu Ka Tilla is hiding in plain sight. One won&apos;t find any flashy signs or grand entrances proclaiming its importance but the moment one step into its narrow side streets the atmosphere changes. Not just in the smells, but in the very rhythm of the place. You&apos;ll catch snippets of conversations in accents you don&apos;t quite recognise, and prayer flags strung above a tangle of wires. It&apos;s almost as if the street itself starts speaking in a language that&apos;s half Delhi, half not quite.</p>
            <p>This isn&apos;t just a place it&apos;s a place with stories layered on top of each other of people who&apos;ve moved here, struggled to make a life for themselves, adapted to a new world and somehow quietly found a way to make it work.</p>
          </div>

          <div className="space-y-5">
            <h2 className="font-display text-4xl font-black text-foreground md:text-5xl">The Street as a Living Story</h2>
            <p>People often call Majnu Ka Tilla Delhi&apos;s Tibetan colony but that term barely scratches the surface. What the streets here actually are is a kind of living archive but not one where you find dusty old books or dusty old records, it&apos;s more like a lived in history. Dozens of cafes line the streets each with their own handwritten menus listing out the usual Tibetan staples like thukpa, momos and butter tea. These aren&apos;t spots that have been carefully set up for tourists they&apos;re just neighbourhood cafes homey sorts of places where people have memories of the food and the people. Walls are plastered with photos, flags and symbols from back home, a home that&apos;s long gone, but still very much alive in people minds. Walking down these streets feels like stepping into one of those family stories you never quite heard the full version of. You know just bits and pieces strung together.</p>
          </div>

          <div className="space-y-5">
            <h2 className="font-display text-4xl font-black text-foreground md:text-5xl">People Who Make the Street What It Is</h2>
            <p>Majnu Ka Tilla is really all about its people.</p>
            <p>Monks move quietly, almost as if they&apos;re invisible which is good because their calm energy helps steady the place. Shopkeepers juggle Hindi and English and Tibetan, negotiating deals with customers with this unhurried rhythm that makes them look like they have all the time in the world even though they&apos;re in the middle of a madly busy city. Young visitors, backpackers and Delhiites trying out something new come here looking for something different. Some come for the food or the cool cafes but a lot of folks end up leaving with something a lot more unexpected a sense that they&apos;ve stumbled into a different version of the city. There&apos;s also this underlying sort of coexistence going on between people who&apos;ve built their lives here and people who just pop in for a visit. The street manages to be welcoming to both but still never really quite belonging to either.</p>
          </div>

          <div className="space-y-5">
            <h2 className="font-display text-4xl font-black text-foreground md:text-5xl">The Contradictions of This Place</h2>
            <p>Despite all its calm and peacefulness Majnu Ka Tilla isn&apos;t immune to the aches of city life. Behind all the bright colours and comfy cafes lies a harsh reality tight spaces, more and more commercialisation and the gradual shift away from what this place once was and more towards what people want to experience. The street is kind of stuck in a tug of war between being true to who it is and changing to fit in, being authentic and just being a show, being somewhere you can really call home versus being a place where you can just go for a show. And yet somehow it just keeps going absorbing change without completely losing its sense of self.</p>
          </div>

          <div className="space-y-5">
            <h2 className="font-display text-4xl font-black text-foreground md:text-5xl">What the Street Tells Us</h2>
            <p>Majnu Ka Tilla tells us something pretty fundamental about cities that they&apos;re not just built of concrete and roads and buildings but of the people who live here and who come here and who settle and who make a new life for themselves. In this place the street doesn&apos;t shout out its story it tells it in tiny little whispers. In the steam rising off a bowl of thukpa, in the quiet rumble of the prayer wheels, in the snippets of conversation that blend languages without ever coming to a pause. In conversations that blend languages without pause, in the feeling of being both inside and outside Delhi at the same time is a reminder that some of the most powerful urban narratives exist not in landmarks, but in overlooked spaces.</p>
          </div>

          <div className="space-y-5">
            <h2 className="font-display text-4xl font-black text-foreground md:text-5xl">Conclusion</h2>
            <p>Majnu Ka Tilla does not try to be understood quickly. It resists simplification. It asks the observer to slow down, to notice, to listen.</p>
            <p>Because here, the street does not merely exist. It speaks.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default CaseStudy;