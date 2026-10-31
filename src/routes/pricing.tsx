import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/lib/site";
import { PageHero, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages | La Maison Royale Décor, Accra" },
      { name: "description", content: "Furniture prices, interior design services and complete furnishing packages in Ghana Cedis. Request a custom quote." },
      { property: "og:title", content: "Pricing — La Maison Royale Décor" },
      { property: "og:description", content: "Invest in a space you love." },
    ],
  }),
  component: Pricing,
});

// Prices must be confirmed by the business. `price: null` shows "Price on request".
const products = [
  { name: "Living Room Combination", desc: "Sofa, centre table and TV console, with optional décor styling.", img: images.combo, price: null as number | null },
  { name: "Custom TV Console", desc: "Made-to-measure entertainment unit in quality MDF finishes.", img: images.tv, price: null as number | null },
];

const designServices = ["Living room design", "Kitchen design", "Wardrobe & closet solutions", "Complete room furnishing", "Full-home interior transformation"];

const ghs = (n: number) => `GHS ${n.toLocaleString("en-GH")}`;

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Invest in a space you love." text="Discover our furniture solutions and design packages, thoughtfully developed to bring beauty, functionality and comfort into your home." img={images.combo} />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="eyebrow text-primary">A · Furniture & products</p>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="bg-card">
              <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-8">
                <h3 className="text-3xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t pt-6">
                  <span className="font-serif text-2xl">{p.price ? ghs(p.price) : "Price on request"}</span>
                  <Link to="/contact" className="eyebrow bg-primary px-5 py-3 text-primary-foreground hover:bg-ink">Enquire</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow text-primary">B · Interior design services</p>
          <ul className="mt-10 divide-y border-y">
            {designServices.map((s) => (
              <li key={s} className="flex flex-wrap items-center justify-between gap-4 py-7">
                <span className="font-serif text-3xl">{s}</span>
                <Link to="/contact" className="eyebrow border-b border-foreground pb-1 hover:text-primary">Request a custom quote</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="eyebrow text-primary">C · Complete furnishing packages</p>
        <Reveal className="mt-10 grid overflow-hidden bg-primary text-primary-foreground md:grid-cols-2">
          <img src={images.bedroom} alt="Fully furnished bedroom package" loading="lazy" className="h-full min-h-80 w-full object-cover" />
          <div className="p-10 md:p-14">
            <p className="eyebrow text-gold">Featured package</p>
            <h3 className="mt-4 text-4xl">The Royale Combo</h3>
            <ul className="mt-6 space-y-2 text-primary-foreground/80"><li>— Sofa</li><li>— Centre table</li><li>— TV console</li><li>— Optional decorative artifacts</li></ul>
            <p className="mt-8 font-serif text-3xl">Price on request</p>
            <p className="mt-1 text-sm text-primary-foreground/60">Availability confirmed on enquiry.</p>
            <Link to="/contact" className="eyebrow mt-8 inline-block bg-gold px-7 py-4 text-ink hover:bg-ivory">Enquire about this package</Link>
          </div>
        </Reveal>
        <p className="mt-8 text-sm text-muted-foreground">Custom projects may require a consultation and individual quotation.</p>
      </section>
    </>
  );
}
