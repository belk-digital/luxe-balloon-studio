import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowUpRight, Camera, Star, MapPin, Instagram, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-balloons.jpg";
import gBaby from "@/assets/gallery-baby.jpg";
import gBirthday from "@/assets/gallery-birthday.jpg";
import gWedding from "@/assets/gallery-wedding.jpg";
import gCorporate from "@/assets/gallery-corporate.jpg";
import gBridal from "@/assets/gallery-bridal.jpg";
import gOutdoor from "@/assets/gallery-outdoor.jpg";
import { SectionHeader } from "@/components/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Balloon Gal | Luxury Balloon Decor & Event Styling South Florida" },
      { name: "description", content: "South Florida's premier luxury balloon studio. Artisan installations for Miami, Fort Lauderdale, Boca Raton, and Palm Beach." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="pt-0">
      <Hero />
      <BrandPhilosophy />
      <BentoServices />
      <ShowcaseMarquee />
      <LocationsSection />
      <TheLuxeStandard />
      <TestimonialHero />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

const faqs = [
  { q: "How much does luxury balloon decor cost?", a: "Our installations begin at $450 for intimate setups, with most full event installs ranging between $850 and $4,500+. We send a custom quote within 24 hours of your inquiry." },
  { q: "Do you travel across South Florida?", a: "Yes — we serve Miami, Fort Lauderdale, Boca Raton, Palm Beach, and surrounding areas. Travel beyond 25 miles includes a small delivery fee." },
  { q: "How far in advance should I book?", a: "We recommend booking 3–6 weeks ahead for weekend dates to ensure availability." },
  { q: "Do balloons last outdoors in Florida?", a: "Yes, we use professional-grade balloons treated for durability. We plan installations based on sun exposure and timing to keep them looking fresh." },
  { q: "Can you match my event theme?", a: "Absolutely. Every install is fully custom — we design palettes around your specific mood board or invitation." },
];

/* --- 1. HERO: Cinematic & Bold --- */
function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Luxury balloons" className="w-full h-full object-cover opacity-60 scale-105 animate-reveal" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/20 to-ink/90" />
      </div>

      <div className="container-luxe relative z-10 w-full pt-20">
        <div className="max-w-4xl animate-float-up">
          <p className="eyebrow text-gold mb-8 inline-flex items-center gap-4">
             <span className="w-12 h-px bg-gold/50" />
             South Florida's Premier Studio
          </p>
          <h1 className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] tracking-tighter text-background font-semibold">
            Artisan <br />
            <span className="font-serif italic text-gradient-gold">Balloons.</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-background/70 max-w-2xl font-light leading-relaxed">
            Redefining celebration with high-impact, organic styling for Miami's most exclusive events.
          </p>
          
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link to="/contact" className="px-10 py-5 bg-gold text-ink rounded-full font-bold uppercase tracking-widest text-sm hover:bg-background transition-all shadow-gold">
               Start My Design
            </Link>
            <Link to="/gallery" className="group flex items-center gap-4 text-background/80 hover:text-gold transition-colors">
               <span className="text-sm font-bold uppercase tracking-widest">Explore Portfolio</span>
               <div className="size-10 rounded-full border border-background/20 flex items-center justify-center group-hover:border-gold transition-all">
                  <ArrowUpRight size={18} />
               </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-40">
         <div className="w-px h-16 bg-gradient-to-b from-transparent to-background" />
      </div>
    </section>
  );
}

/* --- 2. PHILOSOPHY: The Intro --- */
function BrandPhilosophy() {
  return (
    <section className="section-pad bg-background">
      <div className="container-luxe">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <SectionHeader
                 align="left"
                 eyebrow="The Experience"
                 title={<>For hosts who want <span className="font-serif italic text-gradient-gold">more.</span></>}
                 description="We don't just provide balloons; we architect environments. Every installation is a custom-colored, hand-sculpted piece of temporary art designed to turn a venue into an experience."
               />
               <div className="mt-10 grid grid-cols-2 gap-10">
                  <div>
                     <p className="font-display text-4xl mb-2">600+</p>
                     <p className="text-[0.6rem] uppercase tracking-widest font-bold text-muted-foreground">Events Styled</p>
                  </div>
                  <div>
                     <p className="font-display text-4xl mb-2">5.0★</p>
                     <p className="text-[0.6rem] uppercase tracking-widest font-bold text-muted-foreground">Client Rating</p>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-luxe group">
                  <img src={gWedding} alt="Wedding decor" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
               </div>
               <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-luxe max-w-[240px] animate-float-balloon">
                  <p className="italic text-lg leading-relaxed">"A visual masterpiece that our guests are still talking about weeks later."</p>
                  <p className="mt-4 text-[0.6rem] uppercase tracking-widest font-bold text-gold">Sofia R. · Miami</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

/* --- 3. BENTO SERVICES: Visual Grid --- */
function BentoServices() {
  const items = [
    { t: "Weddings", d: "Editorial styling for high-end ceremonies.", img: gWedding, span: "md:col-span-2 md:row-span-2" },
    { t: "Corporate", d: "Brand-aligned activations.", img: gCorporate, span: "md:col-span-1 md:row-span-1" },
    { t: "Birthdays", d: "From first to fiftieth.", img: gBirthday, span: "md:col-span-1 md:row-span-2" },
    { t: "Showers", d: "Bespoke baby & bridal designs.", img: gBaby, span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section className="section-pad bg-secondary/30">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Signature Services"
          title={<>Curated for your <span className="font-serif italic text-gradient-gold">Milestones.</span></>}
        />
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[240px] md:auto-rows-[280px]">
          {items.map((it, i) => (
            <Link key={i} to="/services" className={`group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-soft ${it.span}`}>
              <img src={it.img} alt={it.t} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                 <h3 className="font-display text-2xl md:text-3xl text-background mb-2">{it.t}</h3>
                 <p className="text-xs md:text-sm text-background/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">{it.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 4. SHOWCASE MARQUEE: Immersive --- */
function ShowcaseMarquee() {
  return (
    <section className="py-20 md:py-32 overflow-hidden bg-ink text-background relative">
       <div className="container-luxe mb-10 md:mb-16">
          <SectionHeader
            eyebrow="Portfolio"
            title={<>A snapshot of <span className="font-serif italic text-gradient-gold">Artistry.</span></>}
          />
       </div>
       <div className="flex gap-4 md:gap-6 animate-parallax-float px-6 md:px-0" style={{ animationDuration: '40s' }}>
          {[gOutdoor, gBridal, heroImg, gBaby, gWedding].map((img, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[400px] h-[350px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative group">
               <img src={img} alt="Showcase" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="text-background" size={40} />
               </div>
            </div>
          ))}
       </div>
    </section>
  );
}

/* --- 5. LOCATIONS: Restored --- */
function LocationsSection() {
  const cities = ["Miami", "Fort Lauderdale", "Boca Raton", "Palm Beach"];
  return (
    <section className="section-pad bg-background">
       <div className="container-luxe">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
             <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-luxe">
                <img src={gOutdoor} alt="South Florida service area" className="w-full h-full object-cover" />
             </div>
             <div>
                <SectionHeader
                  align="left"
                  eyebrow="Service Areas"
                  title={<>Across all of <span className="font-serif italic text-gradient-gold">South Florida.</span></>}
                  description="From oceanfront estates to corporate headquarters, we bring our signature styling to the region's most beautiful venues."
                />
                <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {cities.map(city => (
                      <Link 
                        key={city} 
                        to="/locations" 
                        className="p-5 md:p-6 rounded-[1.5rem] md:rounded-3xl border border-border hover:border-gold hover:text-gold transition-all group"
                      >
                         <MapPin size={16} className="mb-2 md:mb-3 text-gold" />
                         <p className="font-display text-lg md:text-xl">{city}</p>
                         <span className="text-[0.6rem] uppercase tracking-widest font-bold opacity-60 md:opacity-40 md:group-hover:opacity-100 transition-opacity">Explore →</span>
                      </Link>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}


/* --- 5. THE STANDARD: Why Us --- */
function TheLuxeStandard() {
  const items = [
    { t: "Organic Styling", d: "No rigid templates. We mimic the natural movement of bubbles and clouds." },
    { t: "Custom Palettes", d: "We hand-layer balloons to create unique colors you won't find anywhere else." },
    { t: "White-Glove Service", d: "From first sketch to final teardown, every detail is handled by our expert team." }
  ];

  return (
    <section className="section-pad bg-background relative overflow-hidden">
       <div className="container-luxe">
          <div className="max-w-4xl">
             <SectionHeader
               align="left"
               eyebrow="The Standard"
               title={<>Why we're the <span className="font-serif italic text-gradient-gold">Choice</span> of South Florida.</>}
             />
             <div className="mt-12 md:mt-20 space-y-8 md:space-y-16">
                {items.map((it, i) => (
                   <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group">
                      <div className="md:col-span-1">
                         <span className="font-display text-3xl md:text-4xl text-gold/30 group-hover:text-gold transition-colors">0{i+1}</span>
                      </div>
                      <div className="md:col-span-4">
                         <h3 className="font-display text-2xl md:text-3xl">{it.t}</h3>
                      </div>
                      <div className="md:col-span-7">
                         <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{it.d}</p>
                      </div>
                      <div className="hidden md:block md:col-span-12 h-px bg-border group-hover:bg-gold/30 transition-colors" />
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}

/* --- 6. TESTIMONIAL HERO --- */
function TestimonialHero() {
  return (
    <section className="section-pad bg-secondary/20">
       <div className="container-luxe text-center px-4">
          <div className="size-16 md:size-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8 md:mb-12">
             <Star className="text-gold fill-gold" size={24} md:size={30} />
          </div>
          <h2 className="font-display text-2xl md:text-6xl max-w-4xl mx-auto leading-tight">
             "The Balloon Gal transformed our empty ballroom into a <span className="font-serif italic text-gradient-gold">visual masterpiece.</span> Their attention to detail is unmatched in Miami."
          </h2>
          <p className="mt-8 md:mt-10 eyebrow text-gold">Hadley Events · Corporate Client</p>
       </div>
    </section>
  );
}

/* --- 7. FINAL CTA --- */
function FinalCTA() {
  return (
    <section className="px-4 py-12 md:section-pad">
       <div className="container-luxe">
          <div className="rounded-[2.5rem] md:rounded-[4rem] bg-ink text-background p-8 md:p-16 lg:p-32 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)]" />
             <div className="relative z-10">
                <Sparkles size={32} md:size={40} className="mx-auto text-gold mb-6 md:mb-10" />
                <h2 className="font-display text-4xl md:text-8xl mb-6 md:mb-8 leading-tight md:leading-[0.9]">Ready to <br /> <span className="font-serif italic text-gradient-gold">Elevate?</span></h2>
                <p className="text-base md:text-xl text-background/60 mb-8 md:mb-12 max-w-2xl mx-auto px-4">Limited availability for 2024–2025. Contact our concierge to secure your date.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                   <Link to="/contact" className="px-10 md:px-12 py-4 md:py-6 bg-gold text-ink rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-background transition-all">
                      Inquire Now
                   </Link>
                   <Link to="/gallery" className="px-10 md:px-12 py-4 md:py-6 border border-background/20 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-background hover:text-ink transition-all">
                      View Portfolio
                   </Link>
                </div>
                
                <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-10 opacity-40 grayscale hover:grayscale-0 transition-all">
                   <Instagram size={20} md:size={24} />
                   <p className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest font-bold">Miami</p>
                   <p className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest font-bold">Fort Lauderdale</p>
                   <p className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest font-bold">Palm Beach</p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

/* --- 8. FAQ: Restored --- */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-background">
      <div className="container-luxe max-w-4xl">
        <SectionHeader eyebrow="FAQ" title={<>Common <span className="font-serif italic text-gradient-gold">Questions.</span></>} />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-8 group"
            >
              <div className="flex items-center justify-between gap-6">
                <h3 className="font-display text-2xl group-hover:text-gold transition-colors">{f.q}</h3>
                <ChevronDown size={20} className={`shrink-0 transition-transform duration-500 ${open === i ? "rotate-180 text-gold" : ""}`} />
              </div>
              {open === i && (
                <div className="mt-4 text-lg text-muted-foreground leading-relaxed animate-float-up">
                  {f.a}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

