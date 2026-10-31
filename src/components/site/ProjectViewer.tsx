import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect } from "react";
import { projects, type Project } from "@/lib/site";
import { IllustrativeNote } from "./Reveal";

export function ProjectViewer({ project, onClose, onSelect }: { project: Project; onClose: () => void; onSelect: (p: Project) => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);
  return (
    <div role="dialog" aria-modal="true" aria-label={project.title} className="fixed inset-0 z-[60] overflow-y-auto bg-ink/95 text-ivory animate-in fade-in duration-300">
      <button onClick={onClose} className="fixed right-6 top-6 z-10 rounded-full border border-ivory/30 p-3 hover:bg-ivory hover:text-ink" aria-label="Close project">
        <X className="h-5 w-5" />
      </button>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <img src={project.img} alt={`${project.title} — ${project.category}`} className="max-h-[75vh] w-full object-cover" />
        <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow text-gold">{project.category}</p>
            <h2 className="mt-3 text-5xl">{project.title}</h2>
            <p className="mt-6 leading-relaxed text-ivory/80">{project.text}</p>
            <IllustrativeNote className="mt-4 text-ivory/50" />
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
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
