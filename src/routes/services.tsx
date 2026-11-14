import { createFileRoute, Link } from "@tanstack/react-router";
import { images, services } from "@/lib/site";
import { IllustrativeNote, PageHero, Reveal } from "@/components/site/Reveal";
import { FilmCard } from "@/components/site/Film";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Custom TV Consoles, Kitchens & Wardrobes in Accra" },
      { name: "description", content: "Interior design, custom TV consoles, modern kitchens, walk-in closets, living room furniture and complete home furnishing in Accra." },
      { property: "og:title", content: "Services — La Maison Royale Décor" },
      { property: "og:description", content: "Designed around your lifestyle: interior design and furniture solutions in Ghana." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Designed around your lifestyle." text="From one statement piece to a complete transformation." img={images.tv} />
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <IllustrativeNote />
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-28 border-b py-20">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <Reveal className={i % 2 ? "md:order-2" : ""}>
                <img src={s.img} alt={s.title} loading="lazy" className={s.realPhoto ? "mx-auto aspect-[3/4] w-full max-w-md object-cover" : "aspect-[4/3] w-full object-cover"} />
              </Reveal>
              <Reveal delay={120}>
                <p className="eyebrow text-gold">0{i + 1}</p>
                <h2 className="mt-4 text-4xl md:text-5xl">{s.title}</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">{s.text}</p>
                <Link to="/contact" className="eyebrow mt-8 inline-block border-b border-foreground pb-1 hover:text-primary">Request a custom quote</Link>
              </Reveal>
            </div>
            {s.films?.length ? (
              <Reveal className="mt-20">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow text-gold">See it in motion</p>
                    <h3 className="mt-3 text-3xl md:text-4xl">Films from our recent installations</h3>
                  </div>
                  <Link to="/gallery" className="eyebrow border-b border-foreground pb-1 hover:text-primary">View all projects</Link>
                </div>
                <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
                  {s.films.map((f) => (
                    <FilmCard key={f.src} film={f} className="w-[70vw] max-w-xs shrink-0 snap-start md:w-auto md:max-w-none" />
                  ))}
                </div>
              </Reveal>
            ) : null}
          </section>
        ))}
      </div>
    </>
  );
}
