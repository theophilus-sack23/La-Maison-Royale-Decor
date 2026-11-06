import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { images, projects, services, type Project } from "@/lib/site";
import { IllustrativeNote, Reveal } from "@/components/site/Reveal";
import { ProjectViewer } from "@/components/site/ProjectViewer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Maison Royale Décor | Interior Designers in Accra, Ghana" },
      { name: "description", content: "Bespoke interior design, custom TV consoles, modern kitchens, wardrobes and complete home furnishing in Accra, Ghana." },
      { property: "og:title", content: "La Maison Royale Décor — Designing Spaces. Defining Living." },
      { property: "og:description", content: "Luxury interior design and furniture solutions in Accra, Ghana." },
    ],
  }),
  component: Home,
});

const spans = ["md:col-span-7 md:row-span-2", "md:col-span-5", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4"];

function Home() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-ink">
        <img src={images.hero} alt="Luxury living room with green velvet sofa, marble centre table and walnut TV console" width={1920} height={1088} className="animate-slowzoom absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-36 md:px-10">
          <p className="eyebrow text-gold">Interior Design · Furniture · Accra</p>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[0.98] text-ivory sm:text-7xl lg:text-8xl">
            <span className="block overflow-hidden"><span className="animate-rise block">Where elegance meets</span></span>
            <span className="block overflow-hidden"><span className="animate-rise block italic text-beige [animation-delay:200ms]">everyday living.</span></span>
          </h1>
          <p className="mt-8 max-w-xl leading-relaxed text-ivory/80">We transform ordinary spaces into extraordinary experiences through bespoke interior design, exceptional furniture and thoughtfully curated living solutions.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/gallery" className="eyebrow bg-ivory px-7 py-4 text-ink transition-colors hover:bg-gold">Explore our projects</Link>
            <Link to="/contact" className="eyebrow border border-ivory/60 px-7 py-4 text-ivory transition-colors hover:bg-ivory hover:text-ink">Start your transformation</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">The House</p>
          <h2 className="mt-5 text-5xl leading-tight md:text-6xl">More than furniture.<br /><em className="text-primary">A way of living.</em></h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">La Maison Royale Décor is a complete interior design and furniture solutions company in Accra. We bring together function and elegance, craftsmanship and creativity — working in quality MDF and Turkish products — to turn the homes our clients imagine into spaces they live in every day.</p>
          <p className="mt-6 font-serif text-2xl italic">"Every beautiful home begins with thoughtful design and exceptional craftsmanship."</p>
          <Link to="/about" className="eyebrow mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 hover:text-primary">Our story <ArrowUpRight className="h-4 w-4" /></Link>
        </Reveal>
        <Reveal delay={150} className="relative">
          <img src={images.tv} alt="Custom floating TV console with fluted panels" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <img src={images.combo} alt="Sofa, centre table and console combination" loading="lazy" className="absolute -bottom-10 -left-10 hidden w-1/2 border-8 border-background object-cover md:block" />
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-card py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-primary">Services</p>
              <h2 className="mt-5 text-5xl md:text-6xl">Designed around your lifestyle.</h2>
            </div>
            <Link to="/services" className="eyebrow border-b border-foreground pb-1">All services</Link>
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 120}>
                <Link to="/services" hash={s.slug} className="group block">
                  <div className="overflow-hidden"><img src={s.img} alt={s.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" /></div>
                  <p className="eyebrow mt-6 text-gold">0{i + 1}</p>
                  <h3 className="mt-2 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="eyebrow mt-4 inline-flex items-center gap-2 text-primary">Explore service <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">Portfolio</p>
          <h2 className="mt-5 text-5xl md:text-6xl">Spaces that tell a story.</h2>
          <IllustrativeNote className="mt-4" />
        </Reveal>
        <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-12">
          {projects.map((p, i) => (
            <button key={p.id} onClick={() => setActive(p)} className={`group relative overflow-hidden text-left ${spans[i]}`}>
              <img src={p.img} alt={`${p.title} — ${p.category}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6 text-ivory">
                <p className="eyebrow text-gold">{p.category}</p>
                <p className="mt-2 font-serif text-2xl md:text-3xl">{p.title}</p>
                <p className="mt-2 max-w-md text-sm text-ivory/0 transition-colors duration-500 group-hover:text-ivory/80">{p.text}</p>
                <span className="eyebrow mt-3 inline-block text-ivory">View project →</span>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/gallery" className="eyebrow inline-block bg-primary px-8 py-4 text-primary-foreground hover:bg-ink">Explore all projects</Link>
        </div>
      </section>

      {/* Before & after */}
      <section className="bg-secondary/50 py-24">
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow text-primary">Before & After</p>
          <h2 className="mt-5 text-4xl md:text-5xl">Transformation, revealed.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">An interactive before-and-after comparison of a real La Maison Royale transformation will appear here once genuine project photographs are supplied.</p>
        </Reveal>
      </section>

      {/* Signature furniture */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-[1.2fr_1fr] md:px-10">
        <Reveal><img src={images.combo} alt="Sofa, centre table and TV console combination package" loading="lazy" className="w-full object-cover" /></Reveal>
        <Reveal delay={150}>
          <p className="eyebrow text-primary">Signature Combination</p>
          <h2 className="mt-5 text-5xl leading-tight">Exceptional design. Beautifully furnished.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">Our living room combination brings together a sofa, centre table and TV console, with optional decorative artifacts and styling — composed to work as one.</p>
          <ul className="mt-6 space-y-2 font-serif text-xl">
            <li>— Sofa</li><li>— Centre table</li><li>— TV console</li><li>— Optional décor & styling</li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Price available on request.</p>
          <Link to="/contact" className="eyebrow mt-8 inline-block bg-primary px-7 py-4 text-primary-foreground hover:bg-ink">Enquire now</Link>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-ink py-40 text-ivory">
        <img src={images.bedroom} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <Reveal className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="eyebrow text-gold">Our philosophy</p>
          <h2 className="mt-6 text-5xl leading-tight md:text-7xl">We believe every space deserves a <em className="text-gold">royal touch.</em></h2>
          <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 font-serif text-2xl text-beige">
            {["Beauty", "Functionality", "Comfort", "Craftsmanship", "Your lifestyle"].map((w) => <span key={w}>{w}</span>)}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <Reveal>
          <h2 className="text-5xl leading-tight md:text-6xl">Your dream space is closer than you think.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">Whether you are looking to furnish a single room, create a beautiful kitchen or transform your entire home, let us bring your vision to life.</p>
          <Link to="/contact" className="eyebrow mt-10 inline-block bg-primary px-9 py-5 text-primary-foreground hover:bg-ink">Let's design your space</Link>
        </Reveal>
      </section>

      {active && <ProjectViewer project={active} onClose={() => setActive(null)} onSelect={setActive} />}
    </>
  );
}
