import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/lib/site";
import { PageHero, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | La Maison Royale Décor, Accra" },
      { name: "description", content: "Meet La Maison Royale Décor — an Accra interior design and furniture company combining thoughtful design with quality craftsmanship." },
      { property: "og:title", content: "About La Maison Royale Décor" },
      { property: "og:description", content: "Creating spaces that feel like home in Accra, Ghana." },
    ],
  }),
  component: About,
});

const pillars = [
  { t: "Brand philosophy", d: "Every beautiful home begins with thoughtful design and exceptional craftsmanship. We design for the way you actually live." },
  { t: "Commitment to quality", d: "Each piece is planned, measured and finished with care, so that it looks right on day one and for years after." },
  { t: "Craftsmanship & materials", d: "We work with quality MDF boards and Turkish products, chosen for their finish, durability and refined detail." },
  { t: "Design approach", d: "We listen first, then shape layout, furniture, finishes and styling into one coherent concept for your space." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Creating spaces that feel like home." text="An interior design and furniture solutions company based in Accra, Ghana." img={images.bedroom} />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:px-10">
        <Reveal>
          <h2 className="text-5xl leading-tight">Design, furniture and transformation — under one roof.</h2>
        </Reveal>
        <Reveal delay={120} className="space-y-6 leading-relaxed text-muted-foreground">
          <p>La Maison Royale Décor provides interior design, furniture solutions, home decoration and complete space transformation. We combine modern aesthetics, functional furniture and quality craftsmanship to turn residential spaces into beautiful, comfortable environments.</p>
          <p>From a single custom TV console to a fully furnished home, we offer both complete design services and custom furniture design and supply.</p>
        </Reveal>
      </section>
      <section className="bg-card py-28">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 sm:grid-cols-2 md:mx-10 lg:mx-auto">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 100} className="bg-card p-10 md:p-14">
              <p className="eyebrow text-gold">0{i + 1}</p>
              <h3 className="mt-4 text-3xl">{p.t}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:px-10">
        <Reveal><img src={images.kitchen} alt="Forest green fitted kitchen with brass hardware" loading="lazy" className="aspect-[4/5] w-full object-cover" /></Reveal>
        <Reveal delay={120}>
          <p className="eyebrow text-primary">Why La Maison Royale</p>
          <h2 className="mt-5 text-5xl">A single partner for your whole home.</h2>
          <ul className="mt-8 space-y-4 text-muted-foreground">
            <li>— Design and furniture made to work together</li>
            <li>— Custom pieces built to your space and measurements</li>
            <li>— Quality MDF and Turkish finishes</li>
            <li>— Care in every detail, from concept to styling</li>
          </ul>
          <Link to="/contact" className="eyebrow mt-10 inline-block bg-primary px-7 py-4 text-primary-foreground hover:bg-ink">Book a consultation</Link>
        </Reveal>
      </section>
    </>
  );
}
