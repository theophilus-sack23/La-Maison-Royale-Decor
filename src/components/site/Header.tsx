import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ light }: { light?: boolean }) {
  // TODO: replace with the supplied La Maison Royale logo file.
  return (
    <Link to="/" className={cn("flex flex-col leading-none", light ? "text-ivory" : "text-foreground")} aria-label="La Maison Royale Décor home">
      <span className="font-serif text-2xl tracking-wide">La Maison Royale</span>
      <span className="eyebrow mt-1 text-[0.55rem] text-gold">Décor · Accra</span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  const solid = scrolled || open;
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", solid ? "bg-background/95 py-3 shadow-sm backdrop-blur" : "bg-transparent py-6")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Logo light={!solid} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={cn("eyebrow text-[0.65rem] transition-colors hover:text-gold", solid ? "text-foreground" : "text-ivory")} activeProps={{ className: "!text-gold" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className={cn("eyebrow hidden border px-5 py-3 text-[0.62rem] transition-colors sm:inline-block", solid ? "border-primary bg-primary text-primary-foreground hover:bg-ink" : "border-ivory/60 text-ivory hover:bg-ivory hover:text-ink")}>
            Book a Consultation
          </Link>
          <button className={cn("lg:hidden", solid ? "text-foreground" : "text-ivory")} onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background px-6 py-8 lg:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="block py-3 font-serif text-3xl" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="eyebrow mt-6 inline-block bg-primary px-6 py-4 text-primary-foreground">Book a Consultation</Link>
        </nav>
      )}
    </header>
  );
}
