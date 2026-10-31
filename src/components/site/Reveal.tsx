import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, img }: { eyebrow: string; title: string; text?: string; img: string }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink">
      <img src={img} alt="" className="animate-slowzoom absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 text-ivory md:px-10">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl overflow-hidden text-5xl leading-[1.02] md:text-7xl">
          <span className="animate-rise block">{title}</span>
        </h1>
        {text && <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80">{text}</p>}
      </div>
    </section>
  );
}

export function IllustrativeNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs italic text-muted-foreground", className)}>
      Imagery shown is illustrative design inspiration. Photographs of completed La Maison Royale projects will replace it.
    </p>
  );
}
