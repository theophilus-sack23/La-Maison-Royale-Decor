import hero from "@/assets/hero-living.jpg";
import kitchen from "@/assets/kitchen.jpg";
import closet from "@/assets/closet.jpg";
import tv from "@/assets/tv-console.jpg";
import combo from "@/assets/combo.jpg";
import bedroom from "@/assets/bedroom.jpg";
import kitchenProject from "@/assets/kitchen-project.jpg";
import tvConsoleProject from "@/assets/tv-console-project.jpg";
import ivoryFrame1 from "@/assets/tv/ivory-frame-1.jpg";
import ivoryFrame2 from "@/assets/tv/ivory-frame-2.jpg";
import ivoryFrame3 from "@/assets/tv/ivory-frame-3.jpg";
import ivoryFrame4 from "@/assets/tv/ivory-frame-4.jpg";
import champagneSmoke2 from "@/assets/tv/champagne-smoke-2.jpg";
import linenHalo from "@/assets/tv/linen-halo.jpg";
import goldenHour from "@/assets/tv/golden-hour.jpg";

/**
 * Business contact details. Confirmed by client.
 * Phone/WhatsApp must be in international format without "+", e.g. "233XXXXXXXXX".
 */
export const CONTACT = {
  instagram: "https://www.instagram.com/lamaisonroyaledecor",
  instagramHandle: "@lamaisonroyaledecor",
  whatsapp: "233203841980" as string | null,
  /** Call lines: tel = international format without "+", display = how it is shown on the site. */
  phones: [
    { tel: "233249774083", display: "024 977 4083" },
    { tel: "233591110768", display: "059 111 0768" },
  ],
  email: "maisonroyaledecor@gmail.com" as string | null,
  location: "11 Golden Street, Accra, Ghana",
};

export function whatsappLink(message: string) {
  if (!CONTACT.whatsapp) return null;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const images = { hero, kitchen, closet, tv, combo, bedroom };

/** A short project film. Files live in public/videos (compressed 720p MP4 + poster frame). */
export type Film = { src: string; poster: string; title: string };

export const films = {
  marbleShowcase: { src: "/videos/marble-showcase.mp4", poster: "/videos/marble-showcase.jpg", title: "The Marble Showcase" },
  finalTouches: { src: "/videos/final-touches.mp4", poster: "/videos/final-touches.jpg", title: "Final Touches" },
  blackMarbleSuite: { src: "/videos/black-marble-suite.mp4", poster: "/videos/black-marble-suite.jpg", title: "The Black Marble Suite" },
  houseTour: { src: "/videos/house-tour.mp4", poster: "/videos/house-tour.jpg", title: "Home Tour" },
} satisfies Record<string, Film>;

/** Silent looping clip for the home page intro (no audio track, smaller file). */
export const homeLoop = { src: "/videos/marble-showcase-loop.mp4", poster: "/videos/marble-showcase.jpg" };

export const services: { slug: string; title: string; img: string; realPhoto?: boolean; films?: Film[]; text: string }[] = [
  { slug: "interior", title: "Interior Design & Space Transformation", img: hero, text: "Complete concepts that reshape how a room looks, flows and feels — from layout to the final styled detail." },
  { slug: "tv", title: "Custom TV Consoles & Entertainment Units", img: tvConsoleProject, realPhoto: true, films: [films.marbleShowcase, films.finalTouches, films.houseTour], text: "Bespoke media walls in MDF and fine finishes, with fluted panels, concealed storage and integrated lighting." },
  { slug: "kitchen", title: "Modern Kitchen Designs", img: kitchenProject, realPhoto: true, text: "Fitted kitchens planned around how you cook and gather, finished with Turkish hardware and lasting surfaces." },
  { slug: "closet", title: "Walk-in Closets & Wardrobes", img: closet, text: "Wardrobes and dressing rooms with considered storage, lighting and a sense of quiet ceremony." },
  { slug: "living", title: "Living Room Furniture & Décor", img: combo, text: "Sofas, centre tables and curated décor composed into living rooms that invite you to stay." },
  { slug: "furnishing", title: "Complete Home Furnishing", img: bedroom, films: [films.blackMarbleSuite], text: "Every room furnished and styled as one coherent story — ready to move in and live beautifully." },
];

export type Category = "Living Rooms" | "TV Consoles" | "Kitchens" | "Walk-in Closets" | "Furniture" | "Complete Interior Transformations";

export const categories: ("All Projects" | Category)[] = [
  "All Projects", "Living Rooms", "TV Consoles", "Kitchens", "Walk-in Closets", "Furniture", "Complete Interior Transformations",
];

export type Project = {
  id: string;
  title: string;
  /** Short catchy line shown under the title. */
  tagline?: string;
  category: Category;
  /** Cover image. */
  img: string;
  /** All photos of this project, cover first. Defaults to [img]. */
  gallery?: string[];
  /** Project films, shown before the photos in the project viewer. */
  films?: Film[];
  /** true = a real, completed La Maison Royale project (not placeholder imagery). */
  real?: boolean;
  text: string;
  highlights: string[];
};

/**
 * Projects. Entries marked `real: true` are completed La Maison Royale work;
 * the rest are ILLUSTRATIVE PLACEHOLDERS to replace with real project photos.
 */
export const projects: Project[] = [
  {
    id: "the-ivory-frame",
    title: "The Ivory Frame",
    tagline: "Light, framed.",
    category: "TV Consoles",
    real: true,
    img: ivoryFrame1,
    gallery: [ivoryFrame1, ivoryFrame2, ivoryFrame3, ivoryFrame4],
    text: "A wall-to-wall ivory media wall with a recessed black-glass screen bay, a floating gloss console and LED light that traces every edge. Calm and architectural by day, pure cinema by night.",
    highlights: ["Recessed black-glass screen bay", "Wall-to-wall floating console", "LED halo & under-lighting"],
  },
  {
    id: "champagne-and-smoke",
    title: "Champagne & Smoke",
    tagline: "Gloss that glows. Glass that hides.",
    category: "TV Consoles",
    real: true,
    img: tvConsoleProject,
    gallery: [tvConsoleProject, champagneSmoke2],
    text: "High-gloss champagne panels flanked by tall smoked-glass display towers, finished with a jet-black ledge and floating drawers. Storage that disappears, style that doesn't.",
    highlights: ["High-gloss champagne panelling", "Smoked-glass display towers", "Floating handle-free drawers"],
  },
  {
    id: "the-linen-halo",
    title: "The Linen Halo",
    tagline: "Soft texture. Floating light.",
    category: "TV Consoles",
    real: true,
    img: linenHalo,
    text: "A linen-textured frame that seems to hover off the wall on a warm LED glow, above a slim piano-black console. Refined, compact and made for intimate rooms.",
    highlights: ["Linen-texture wall frame", "Backlit floating effect", "Piano-black gloss console"],
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    tagline: "Your screen, set in gold.",
    category: "TV Consoles",
    real: true,
    img: goldenHour,
    text: "A screen set flush into mirror-gloss champagne panels, grounded by a black ledge and cream gloss storage that runs the full length of the room.",
    highlights: ["Flush-recessed screen niche", "Mirror-gloss champagne panels", "Full-length gloss storage"],
  },
  {
    id: "the-marble-showcase",
    title: "The Marble Showcase",
    tagline: "Stone, light, and everything you love on display.",
    category: "TV Consoles",
    real: true,
    img: films.marbleShowcase.poster,
    films: [films.marbleShowcase],
    text: "A marble-effect media wall flanked by glass display shelving lit from within, so every vase, book and keepsake glows. A long floating console keeps the floor clear and the room feeling open.",
    highlights: ["Marble-effect wall panelling", "Lit glass display shelving", "Long floating console"],
  },
  {
    id: "final-touches",
    title: "Final Touches",
    tagline: "Polished by hand, down to the last reflection.",
    category: "TV Consoles",
    real: true,
    img: films.finalTouches.poster,
    films: [films.finalTouches],
    text: "Handover day on a backlit, mirror-framed media wall. Our team checks every edge, every light and every surface before a room is called finished.",
    highlights: ["Backlit mirror frame", "Floating gloss console", "Hand-finished handover"],
  },
  {
    id: "the-black-marble-suite",
    title: "The Black Marble Suite",
    tagline: "Drama on the wall. Calm in every room.",
    category: "Complete Interior Transformations",
    real: true,
    img: films.blackMarbleSuite.poster,
    films: [films.blackMarbleSuite],
    text: "A whole-home finish that pairs a veined black-marble media wall under a glowing cove ceiling with a matching bedroom suite: upholstered bed, statement headboard, gold-detailed bedside cabinets and floor-to-ceiling drapery.",
    highlights: ["Black-marble media wall", "Bespoke bedroom suite", "LED cove ceilings & drapery"],
  },
  {
    id: "home-tour",
    title: "Home Tour",
    tagline: "Walk through a home we finished, room by room.",
    category: "TV Consoles",
    real: true,
    img: films.houseTour.poster,
    films: [films.houseTour],
    text: "From the stairwell chandelier to the living room media wall and the bedroom, follow a complete home finished by La Maison Royale, with two framed, backlit TV walls along the way.",
    highlights: ["Two backlit media walls", "Bedroom & dressing furniture", "Whole-home finishing"],
  },
  { id: "emerald-residence", title: "The Emerald Living Room", category: "Living Rooms", img: hero, text: "A calm living room anchored by deep green velvet, a marble centre table and a fluted walnut media wall.", highlights: ["Fluted walnut console", "Marble centre table", "Layered warm lighting"] },
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

/** One project per category (first listed), real projects first — used for the home page portfolio grid. */
export const featuredProjects: Project[] = categories
  .filter((c): c is Category => c !== "All Projects")
  .map((c) => projects.find((p) => p.category === c))
  .filter((p): p is Project => Boolean(p))
  .sort((a, b) => Number(Boolean(b.real)) - Number(Boolean(a.real)));
