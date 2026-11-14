import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { projects, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";
import { IllustrativeNote } from "./Reveal";

type Media = { kind: "film" | "photo"; src: string; poster: string };

export function ProjectViewer({ project, onClose, onSelect }: { project: Project; onClose: () => void; onSelect: (p: Project) => void }) {
  // Films first, then photos. A film-only project uses its poster as the cover, not as a photo.
  const media: Media[] = [
    ...(project.films ?? []).map((f) => ({ kind: "film" as const, src: f.src, poster: f.poster })),
    ...(project.gallery?.length ? project.gallery : project.films?.length ? [] : [project.img]).map((src) => ({ kind: "photo" as const, src, poster: src })),
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => setIndex(0), [project.id]);
  const current = media[Math.min(index, media.length - 1)] ?? { kind: "photo" as const, src: project.img, poster: project.img };

  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);
  const next = () => setIndex((i) => (i + 1) % media.length);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (media.length > 1 && e.key === "ArrowLeft") setIndex((i) => (i - 1 + media.length) % media.length);
      if (media.length > 1 && e.key === "ArrowRight") setIndex((i) => (i + 1) % media.length);
    };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose, media.length]);

  // Related: same category first, then the rest.
  const related = [
    ...projects.filter((p) => p.id !== project.id && p.category === project.category),
    ...projects.filter((p) => p.id !== project.id && p.category !== project.category),
  ].slice(0, 3);

  return (
    <div role="dialog" aria-modal="true" aria-label={project.title} className="fixed inset-0 z-[60] overflow-y-auto bg-ink/95 text-ivory animate-in fade-in duration-300">
      <button onClick={onClose} className="fixed right-6 top-6 z-10 rounded-full border border-ivory/30 bg-ink/60 p-3 hover:bg-ivory hover:text-ink" aria-label="Close project">
        <X className="h-5 w-5" />
      </button>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative flex items-center justify-center">
          {current.kind === "film" ? (
            <video
              key={current.src}
              src={current.src}
              poster={current.poster}
              controls
              autoPlay
              playsInline
              aria-label={`${project.title} — project film`}
              className="max-h-[75vh] w-auto max-w-full bg-ink animate-in fade-in duration-500"
            />
          ) : (
            <img
              key={current.src}
              src={current.src}
              alt={`${project.title} — ${project.category}${media.length > 1 ? `, ${index + 1} of ${media.length}` : ""}`}
              className={cn("max-h-[75vh] w-auto max-w-full animate-in fade-in duration-500", project.real ? "object-contain" : "w-full object-cover")}
            />
          )}
          {media.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-ivory/30 bg-ink/60 p-3 hover:bg-ivory hover:text-ink sm:-left-2" aria-label="Previous photo">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-ivory/30 bg-ink/60 p-3 hover:bg-ivory hover:text-ink sm:-right-2" aria-label="Next photo">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        {media.length > 1 && (
          <div className="mt-6 flex justify-center gap-3 overflow-x-auto pb-1">
            {media.map((m, i) => (
              <button
                key={m.src}
                onClick={() => setIndex(i)}
                aria-label={m.kind === "film" ? `Play film ${i + 1}` : `Show photo ${i + 1}`}
                aria-current={i === index}
                className={cn("relative shrink-0 overflow-hidden border transition-opacity", i === index ? "border-gold opacity-100" : "border-transparent opacity-50 hover:opacity-90")}
              >
                <img src={m.poster} alt="" loading="lazy" className="h-20 w-16 object-cover" />
                {m.kind === "film" && <Play className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 fill-ivory text-ivory drop-shadow" />}
              </button>
            ))}
          </div>
        )}
        <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow text-gold">{project.category}</p>
            <h2 className="mt-3 text-5xl">{project.title}</h2>
            {project.tagline && <p className="mt-3 font-serif text-2xl italic text-beige">{project.tagline}</p>}
            <p className="mt-6 leading-relaxed text-ivory/80">{project.text}</p>
            {!project.real && <IllustrativeNote className="mt-4 text-ivory/50" />}
          </div>
          <div>
            <p className="eyebrow text-gold">Design highlights</p>
            <ul className="mt-4 space-y-3 border-t border-ivory/15 pt-4">
              {project.highlights.map((h) => <li key={h} className="font-serif text-xl">{h}</li>)}
            </ul>
            <Link to="/contact" onClick={onClose} className="eyebrow mt-8 inline-block bg-gold px-6 py-4 text-ink hover:bg-ivory">Enquire about this project</Link>
          </div>
        </div>
        <p className="eyebrow mt-20 text-gold">Related projects</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <button key={r.id} onClick={() => onSelect(r)} className="group text-left">
              <div className="overflow-hidden"><img src={r.img} alt={r.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <p className="mt-3 font-serif text-xl">{r.title}</p>
              {r.tagline && <p className="mt-1 text-sm italic text-ivory/60">{r.tagline}</p>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
