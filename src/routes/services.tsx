import { createFileRoute, Link } from "@tanstack/react-router";
import { images, services } from "@/lib/site";
import { IllustrativeNote, PageHero, Reveal } from "@/components/site/Reveal";

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
          <section key={s.slug} id={s.slug} className="grid scroll-mt-28 items-center gap-12 border-b py-20 md:grid-cols-2">
            <Reveal className={i % 2 ? "md:order-2" : ""}>
              <img src={s.img} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow text-gold">0{i + 1}</p>
              <h2 className="mt-4 text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{s.text}</p>
              <Link to="/contact" className="eyebrow mt-8 inline-block border-b border-foreground pb-1 hover:text-primary">Request a custom quote</Link>
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
