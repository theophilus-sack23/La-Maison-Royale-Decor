import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Film } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Silent, looping background video. Falls back to the poster image when the
 * visitor prefers reduced motion or the browser blocks autoplay.
 */
export function AmbientVideo({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React does not reliably render the `muted` attribute, which autoplay requires.
    v.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={className}
    />
  );
}

/** Poster with a play button; plays inline with sound and controls once tapped. */
export function FilmCard({ film, className }: { film: Film; className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className={cn("group", className)}>
      <div className="relative aspect-[9/16] overflow-hidden bg-ink">
        {playing ? (
          <video src={film.src} poster={film.poster} controls autoPlay playsInline className="h-full w-full object-cover" />
        ) : (
          <button onClick={() => setPlaying(true)} className="absolute inset-0 block h-full w-full" aria-label={`Play film: ${film.title}`}>
            <img src={film.poster} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 bg-ink/30 text-ivory backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
              <Play className="ml-1 h-6 w-6 fill-current" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 font-serif text-xl">{film.title}</figcaption>
    </figure>
  );
}
