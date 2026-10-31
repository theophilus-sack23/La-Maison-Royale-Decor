import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CONTACT, images, services, whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/site/Reveal";
import { validateEnquiry, type Enquiry } from "@/lib/enquiry";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Book an Interior Design Consultation in Accra" },
      { name: "description", content: "Contact La Maison Royale Décor to book a consultation or request a quote for interior design and furniture in Accra, Ghana." },
      { property: "og:title", content: "Contact La Maison Royale Décor" },
      { property: "og:description", content: "Let's create something beautiful." },
    ],
  }),
  component: Contact,
});

const empty: Enquiry = { name: "", email: "", phone: "", service: "", budget: "", message: "", method: "WhatsApp" };
const field = "w-full border-b border-input bg-transparent py-3 outline-none transition-colors focus:border-primary";

function Contact() {
  const [form, setForm] = useState<Enquiry>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Enquiry, string>>>({});
  const [status, setStatus] = useState<"idle" | "sent" | "pending">("idle");
  const set = (k: keyof Enquiry) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateEnquiry(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const msg = `Hello La Maison Royale Décor,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget || "—"}\nPreferred contact: ${form.method}\n\n${form.message}`;
    const wa = whatsappLink(msg);
    if (wa) {
      window.open(wa, "_blank", "noopener");
      setStatus("sent");
    } else if (CONTACT.email) {
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(msg)}`;
      setStatus("sent");
    } else {
      setStatus("pending");
    }
  };

  const err = (k: keyof Enquiry) => errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>;
  const wa = whatsappLink("Hello La Maison Royale Décor, I'd like to book a consultation.");

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's create something beautiful." img={images.closet} />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-10">
        <aside className="space-y-8">
          <div><p className="eyebrow text-gold">Studio</p><p className="mt-2 font-serif text-2xl">{CONTACT.location}</p></div>
          <div><p className="eyebrow text-gold">Instagram</p><a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="mt-2 block font-serif text-2xl hover:text-primary">{CONTACT.instagramHandle}</a></div>
          {CONTACT.phone && <div><p className="eyebrow text-gold">Phone</p><a href={`tel:+${CONTACT.phone}`} className="mt-2 block font-serif text-2xl">+{CONTACT.phone}</a></div>}
          {CONTACT.email && <div><p className="eyebrow text-gold">Email</p><a href={`mailto:${CONTACT.email}`} className="mt-2 block font-serif text-2xl">{CONTACT.email}</a></div>}
          {wa && <a href={wa} target="_blank" rel="noreferrer" className="eyebrow inline-block bg-primary px-6 py-4 text-primary-foreground">Chat on WhatsApp</a>}
        </aside>

        <form onSubmit={submit} noValidate className="grid gap-8 sm:grid-cols-2">
          <label className="block"><span className="eyebrow text-muted-foreground">Full name *</span><input className={field} value={form.name} onChange={set("name")} />{err("name")}</label>
          <label className="block"><span className="eyebrow text-muted-foreground">Email address *</span><input type="email" className={field} value={form.email} onChange={set("email")} />{err("email")}</label>
          <label className="block"><span className="eyebrow text-muted-foreground">Phone number *</span><input type="tel" className={field} value={form.phone} onChange={set("phone")} />{err("phone")}</label>
          <label className="block"><span className="eyebrow text-muted-foreground">Service interested in *</span>
            <select className={field} value={form.service} onChange={set("service")}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            </select>{err("service")}
          </label>
          <label className="block"><span className="eyebrow text-muted-foreground">Budget range</span>
            <select className={field} value={form.budget} onChange={set("budget")}>
              <option value="">Prefer not to say</option>
              <option>Under GHS 10,000</option><option>GHS 10,000 – 30,000</option><option>GHS 30,000 – 80,000</option><option>Above GHS 80,000</option>
            </select>
          </label>
          <fieldset><legend className="eyebrow text-muted-foreground">Preferred contact</legend>
            <div className="mt-3 flex gap-5 text-sm">
              {["WhatsApp", "Phone", "Email"].map((m) => (
                <label key={m} className="flex items-center gap-2"><input type="radio" name="method" checked={form.method === m} onChange={() => setForm({ ...form, method: m })} className="accent-primary" />{m}</label>
              ))}
            </div>
          </fieldset>
          <label className="block sm:col-span-2"><span className="eyebrow text-muted-foreground">Project description *</span><textarea rows={5} className={field} value={form.message} onChange={set("message")} />{err("message")}</label>
          <div className="sm:col-span-2">
            <button type="submit" className="eyebrow bg-primary px-9 py-5 text-primary-foreground hover:bg-ink">Send enquiry</button>
            {status === "sent" && <p role="status" className="mt-4 text-sm text-primary">Thank you — your enquiry is ready to send. We'll be in touch shortly.</p>}
            {status === "pending" && <p role="status" className="mt-4 text-sm text-muted-foreground">Thank you. Online enquiries are being set up — for now, please message us on Instagram {CONTACT.instagramHandle}.</p>}
          </div>
        </form>
      </section>
    </>
  );
}
