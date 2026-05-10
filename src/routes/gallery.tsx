import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/ui-bits";
import gBaby from "@/assets/gallery-baby.jpg";
import gBirthday from "@/assets/gallery-birthday.jpg";
import gWedding from "@/assets/gallery-wedding.jpg";
import gCorporate from "@/assets/gallery-corporate.jpg";
import gBridal from "@/assets/gallery-bridal.jpg";
import gOutdoor from "@/assets/gallery-outdoor.jpg";
import hero from "@/assets/hero-balloons.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Luxury Balloon Decor Portfolio — The Balloon Gal" },
      { name: "description", content: "Browse our portfolio of luxury balloon installations across South Florida — birthdays, baby showers, weddings, corporate events, and outdoor celebrations." },
      { property: "og:title", content: "Luxury Balloon Decor Portfolio | The Balloon Gal" },
      { property: "og:description", content: "Editorial balloon installations across Miami, Fort Lauderdale, Boca Raton & Palm Beach." },
      { property: "og:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: gBirthday, cat: "Birthdays", alt: "Pink and gold birthday balloon arch Miami" },
  { src: gBaby, cat: "Baby Showers", alt: "Neutral baby shower balloon decor" },
  { src: gWedding, cat: "Weddings", alt: "White and gold wedding balloon installation" },
  { src: gCorporate, cat: "Corporate", alt: "Corporate balloon backdrop Miami" },
  { src: gBridal, cat: "Bridal", alt: "Blush bridal shower balloon decor" },
  { src: gOutdoor, cat: "Outdoor", alt: "Tropical outdoor balloon arch" },
  { src: hero, cat: "Luxury", alt: "Champagne luxury balloon arch" },
  { src: gBirthday, cat: "Birthdays", alt: "Pink luxury birthday party" },
  { src: gWedding, cat: "Weddings", alt: "Wedding head table balloon installation" },
];

const cats = ["All", "Birthdays", "Baby Showers", "Weddings", "Corporate", "Bridal", "Outdoor", "Luxury"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Portfolio"
          title={<>Selected <em className="italic text-gradient-gold">work.</em></>}
          description="A curated look at recent celebrations across South Florida — from intimate showers to full venue transformations."
        />
        <div className="flex flex-wrap justify-center gap-2 mt-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] border transition-luxe ${
                active === c ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-12 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <div key={i} className="mb-4 break-inside-avoid relative group rounded-2xl overflow-hidden">
              <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute bottom-3 left-3 text-background bg-ink/60 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity">{it.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
