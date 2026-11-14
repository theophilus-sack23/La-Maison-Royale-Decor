import { Link } from "@tanstack/react-router";
import { CONTACT, navLinks, services, whatsappLink } from "@/lib/site";

export function Footer() {
  const wa = whatsappLink("Hello La Maison Royale Décor, I'd like to enquire about your services.");
  return (
    <footer className="bg-ink text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <img src="/logo-light.png" alt="La Maison Royale Décor" width={942} height={857} loading="lazy" className="h-28 w-auto" />
          <p className="mt-6 text-sm leading-relaxed">Interior design, bespoke furniture and complete space transformation. Designing Spaces. Defining Living.</p>
        </div>
        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-5 space-y-2 text-sm">
            {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Services</p>
          <ul className="mt-5 space-y-2 text-sm">
            {services.map((s) => <li key={s.slug}><Link to="/services" className="hover:text-gold">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Connect</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">Instagram {CONTACT.instagramHandle}</a></li>
            {wa && <li><a href={wa} target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp 020 384 1980</a></li>}
            {CONTACT.phones.map((p) => <li key={p.tel}><a href={`tel:+${p.tel}`} className="hover:text-gold">{p.display}</a></li>)}
            {CONTACT.email && <li><a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a></li>}
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-ivory/50 md:px-10">© {new Date().getFullYear()} La Maison Royale Décor. All rights reserved.</p>
      </div>
    </footer>
  );
}
