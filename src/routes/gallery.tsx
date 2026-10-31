import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories, images, projects, type Project } from "@/lib/site";
import { IllustrativeNote, PageHero } from "@/components/site/Reveal";
import { ProjectViewer } from "@/components/site/ProjectViewer";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Projects & Gallery | La Maison Royale Décor" },
      { name: "description", content: "Explore living rooms, TV consoles, kitchens, walk-in closets and complete interior transformations in Accra, Ghana." },
      { property: "og:title", content: "Projects — La Maison Royale Décor" },
      { property: "og:description", content: "A portfolio of interior design and furniture work from Accra." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All Projects");
  const [active, setActive] = useState<Project | null>(null);
  const list = cat === "All Projects" ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Projects / Gallery" title="Spaces that tell a story." img={images.kitchen} />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={cn("eyebrow shrink-0 border px-5 py-3 text-[0.62rem] transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground")}>
              {c}
            </button>
          ))}
        </div>
        <IllustrativeNote className="mt-6" />
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {list.map((p, i) => (
            <button key={p.id} onClick={() => setActive(p)} className="group mb-6 block w-full break-inside-avoid text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="overflow-hidden">
                <img src={p.img} alt={`${p.title} — ${p.category}`} loading="lazy" className={cn("w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105", i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]")} />
              </div>
              <p className="eyebrow mt-4 text-gold">{p.category}</p>
              <p className="mt-1 font-serif text-2xl">{p.title}</p>
            </button>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">Projects in this category are coming soon.</p>}
        </div>
      </section>
      {active && <ProjectViewer project={active} onClose={() => setActive(null)} onSelect={setActive} />}
    </>
  );
}
