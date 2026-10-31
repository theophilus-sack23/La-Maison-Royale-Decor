import hero from "@/assets/hero-living.jpg";
import kitchen from "@/assets/kitchen.jpg";
import closet from "@/assets/closet.jpg";
import tv from "@/assets/tv-console.jpg";
import combo from "@/assets/combo.jpg";
import bedroom from "@/assets/bedroom.jpg";

/**
 * Business contact details. PENDING CLIENT CONFIRMATION — leave null until verified.
 * Phone/WhatsApp must be in international format without "+", e.g. "233XXXXXXXXX".
 */
export const CONTACT = {
  instagram: "https://www.instagram.com/lamaisonroyaledecor",
  instagramHandle: "@lamaisonroyaledecor",
  whatsapp: null as string | null,
  phone: null as string | null,
  email: null as string | null,
  location: "Accra, Ghana",
};

export function whatsappLink(message: string) {
  if (!CONTACT.whatsapp) return null;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const images = { hero, kitchen, closet, tv, combo, bedroom };

export const services = [
  { slug: "interior", title: "Interior Design & Space Transformation", img: hero, text: "Complete concepts that reshape how a room looks, flows and feels — from layout to the final styled detail." },
  { slug: "tv", title: "Custom TV Consoles & Entertainment Units", img: tv, text: "Bespoke media walls in MDF and fine finishes, with fluted panels, concealed storage and integrated lighting." },
  { slug: "kitchen", title: "Modern Kitchen Designs", img: kitchen, text: "Fitted kitchens planned around how you cook and gather, finished with Turkish hardware and lasting surfaces." },
  { slug: "closet", title: "Walk-in Closets & Wardrobes", img: closet, text: "Wardrobes and dressing rooms with considered storage, lighting and a sense of quiet ceremony." },
  { slug: "living", title: "Living Room Furniture & Décor", img: combo, text: "Sofas, centre tables and curated décor composed into living rooms that invite you to stay." },
  { slug: "furnishing", title: "Complete Home Furnishing", img: bedroom, text: "Every room furnished and styled as one coherent story — ready to move in and live beautifully." },
];

export type Category = "Living Rooms" | "TV Consoles" | "Kitchens" | "Walk-in Closets" | "Furniture" | "Complete Interior Transformations";

export const categories: ("All Projects" | Category)[] = [
  "All Projects", "Living Rooms", "TV Consoles", "Kitchens", "Walk-in Closets", "Furniture", "Complete Interior Transformations",
];

export type Project = { id: string; title: string; category: Category; img: string; text: string; highlights: string[] };

/** ILLUSTRATIVE PLACEHOLDERS — replace with real La Maison Royale project photos before launch. */
export const projects: Project[] = [
  { id: "emerald-residence", title: "The Emerald Living Room", category: "Living Rooms", img: hero, text: "A calm living room anchored by deep green velvet, a marble centre table and a fluted walnut media wall.", highlights: ["Fluted walnut console", "Marble centre table", "Layered warm lighting"] },
  { id: "noir-media-wall", title: "Noir Media Wall", category: "TV Consoles", img: tv, text: "A floating console against a stone-effect backdrop, framed by vertical slats and soft concealed LED.", highlights: ["Floating MDF console", "Concealed cable management", "LED under-lighting"] },
  { id: "forest-kitchen", title: "The Forest Kitchen", category: "Kitchens", img: kitchen, text: "Shaker-profile cabinetry in forest green with warm stone surfaces and brushed brass hardware.", highlights: ["Full-height storage", "Stone island", "Brass hardware"] },
  { id: "gilded-dressing-room", title: "Gilded Dressing Room", category: "Walk-in Closets", img: closet, text: "Glass-fronted wardrobes with champagne trim, an ivory island and lighting that glows like a boutique.", highlights: ["Glass-front wardrobes", "Central drawer island", "Integrated LED"] },
  { id: "soft-living-combo", title: "Soft Living Combination", category: "Furniture", img: combo, text: "A curved sofa, sculptural centre table and low walnut console styled as one harmonious set.", highlights: ["Sofa, table & console", "Neutral palette", "Styled artifacts"] },
  { id: "sage-suite", title: "The Sage Suite", category: "Complete Interior Transformations", img: bedroom, text: "A fully furnished bedroom with panelled green walls, upholstered headboard and built-in wardrobes.", highlights: ["Wall panelling", "Built-in wardrobes", "Full styling"] },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/gallery", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact Us" },
] as const;
