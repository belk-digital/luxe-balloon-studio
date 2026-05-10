import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/ui-bits";
import { Sparkles, Camera, ArrowUpRight } from "lucide-react";
import gBaby from "@/assets/gallery-baby.jpg";
import gBirthday from "@/assets/gallery-birthday.jpg";
import gWedding from "@/assets/gallery-wedding.jpg";
import gCorporate from "@/assets/gallery-corporate.jpg";
import gBridal from "@/assets/gallery-bridal.jpg";
import gOutdoor from "@/assets/gallery-outdoor.jpg";
import heroImg from "@/assets/hero-balloons.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Portfolio | Luxury Balloon Decor Gallery — The Balloon Gal" },
      { name: "description", content: "Explore our editorial gallery of luxury balloon installations across South Florida's most prestigious events." },
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
  { src: heroImg, cat: "Luxury", alt: "Champagne luxury balloon arch" },
  { src: gBirthday, cat: "Birthdays", alt: "Pink luxury birthday party" },
  { src: gWedding, cat: "Weddings", alt: "Wedding head table balloon installation" },
];

const cats = ["All", "Birthdays", "Baby Showers", "Weddings", "Corporate", "Bridal", "Outdoor", "Luxury"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <div className="pt-0">
      {/* --- HERO: Visual Showcase --- */}
      <section className="relative h-[45vh] flex items-center bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src={heroImg} alt="Gallery hero" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        
        <div className="container-luxe relative z-10 pt-20">
           <div className="max-w-3xl animate-float-up">
              <p className="eyebrow text-gold mb-6">Portfolio</p>
              <h1 className="text-6xl md:text-8xl text-background leading-tight tracking-tighter">
                The Art of <br />
                <span className="font-serif italic text-gradient-gold">Celebration.</span>
              </h1>
           </div>
        </div>
      </section>

      {/* --- GALLERY FILTER & GRID --- */}
      <section className="section-pad bg-background">
        <div className="container-luxe">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <SectionHeader
                align="left"
                eyebrow="Curated Work"
                title={<>Memories captured in <span className="font-serif italic text-gradient-gold">living color.</span></>}
              />
              
              {/* Category Chips */}
              <div className="flex flex-wrap gap-2 pb-2">
                {cats.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`px-6 py-2.5 rounded-full text-[0.6rem] uppercase tracking-[0.2em] font-bold border transition-luxe ${
                      active === c 
                        ? "bg-ink text-background border-ink shadow-soft" 
                        : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
           </div>

           {/* Masonry Grid */}
           <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
             {filtered.map((it, i) => (
               <div 
                 key={i} 
                 className="mb-8 break-inside-avoid relative group rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-luxe transition-luxe cursor-pointer"
                 style={{ animationDelay: `${i * 0.1}s` }}
               >
                 <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-auto transition-transform duration-[1.5s] group-hover:scale-110" />
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                    <div className="size-12 rounded-full bg-background/10 backdrop-blur-md border border-background/20 flex items-center justify-center text-background mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <Camera size={20} />
                    </div>
                    <p className="text-background font-display text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{it.cat}</p>
                    <div className="h-px w-8 bg-gold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100" />
                 </div>
                 
                 <span className="absolute top-6 left-6 text-background/80 bg-ink/30 backdrop-blur px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold group-hover:opacity-0 transition-opacity">
                    {it.cat}
                 </span>
               </div>
             ))}
           </div>
           
           {/* No Results Fallback */}
           {filtered.length === 0 && (
              <div className="py-32 text-center">
                 <p className="text-xl text-muted-foreground italic">No installations found in this category. Check back soon!</p>
              </div>
           )}
        </div>
      </section>

      {/* --- REVIEWS / TRUST --- */}
      <section className="section-pad bg-ink text-background relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--blush-soft)_0%,_transparent_70%)] opacity-10" />
         <div className="container-luxe relative z-10 text-center">
            <Sparkles size={40} className="mx-auto text-gold mb-8" />
            <h2 className="font-display text-4xl md:text-6xl max-w-4xl mx-auto leading-tight">
               "The Balloon Gal transformed our venue into something <span className="font-serif italic text-gradient-gold">straight out of a magazine.</span> Unparalleled detail."
            </h2>
            <div className="mt-10 flex flex-col items-center">
               <div className="size-16 rounded-full border border-gold p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-secondary" />
               </div>
               <p className="eyebrow text-gold">Sofia R. · Miami Bride</p>
            </div>
         </div>
      </section>

      {/* --- CTA --- */}
      <section className="section-pad">
         <div className="container-luxe text-center">
            <h2 className="font-display text-5xl mb-8">Ready to be our next <br /> <span className="font-serif italic text-gradient-gold">success story?</span></h2>
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-ink text-background px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-luxe group">
               Start My Design <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
         </div>
      </section>
    </div>
  );
}

