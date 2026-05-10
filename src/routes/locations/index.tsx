import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-bits";
import { cities, allCities } from "@/lib/site-data";
import { MapPin, ArrowUpRight, Sparkles, Home, Building2, Palmtree } from "lucide-react";
import heroImg from "@/assets/gallery-outdoor.jpg";
import gMiami from "@/assets/gallery-wedding.jpg";
import gFtL from "@/assets/gallery-birthday.jpg";
import gBoca from "@/assets/gallery-baby.jpg";
import gPalm from "@/assets/gallery-corporate.jpg";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Service Areas | Luxury Balloon Decor Across South Florida" },
      { name: "description", content: "The Balloon Gal serves Miami, Fort Lauderdale, Boca Raton, Palm Beach and all of South Florida with luxury balloon decor and event styling." },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const cityImgs: Record<string, string> = {
    "miami": gMiami,
    "fort-lauderdale": gFtL,
    "boca-raton": gBoca,
    "palm-beach": gPalm
  };

  return (
    <div className="pt-0">
      {/* 1. HERO */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img src={heroImg} alt="South Florida venues" className="w-full h-full object-cover opacity-50 scale-105 animate-reveal" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/90" />
        </div>
        <div className="container-luxe relative z-10 pt-20 animate-float-up">
           <p className="eyebrow text-gold mb-6">Concierge Coverage</p>
           <h1 className="text-5xl md:text-8xl font-display text-background leading-[0.9] tracking-tighter">
             Serving South <br />
             <span className="font-serif italic text-gradient-gold">Florida's</span> Finest.
           </h1>
        </div>
      </section>

      {/* 2. PRIMARY HUBS */}
      <section className="section-pad bg-background">
        <div className="container-luxe">
          <SectionHeader
            align="left"
            eyebrow="Primary Hubs"
            title={<>Dedicated styling for <span className="font-serif italic text-gradient-gold">the coast.</span></>}
            description="We maintain a consistent presence in the region's most vibrant event centers, ensuring white-glove delivery and installation for every client."
          />
          
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {cities.map((c) => (
              <Link 
                key={c.slug} 
                to="/locations/$city" 
                params={{ city: c.slug }} 
                className="group relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-luxe transition-luxe"
              >
                <img 
                  src={cityImgs[c.slug] || heroImg} 
                  alt={c.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                   <div>
                      <p className="eyebrow text-gold mb-2">Luxury Decor</p>
                      <h3 className="font-display text-4xl text-background">{c.name}</h3>
                   </div>
                   <div className="size-14 rounded-full bg-gold text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-gold">
                      <ArrowUpRight size={24} />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VENUE EXPERTISE */}
      <section className="section-pad bg-secondary/30">
         <div className="container-luxe">
            <div className="grid lg:grid-cols-3 gap-12">
               {[
                  { i: Home, t: "Oceanfront Estates", d: "We specialize in grand-scale outdoor installations for private residences along the Atlantic." },
                  { i: Building2, t: "Luxury Penthouses", d: "Expert coordination for high-rise installations in Miami's most exclusive towers." },
                  { i: Palmtree, t: "Country Clubs", d: "Sophisticated decor tailored for South Florida's prestigious golf and yacht clubs." }
               ].map((v, i) => (
                  <div key={i} className="glass p-12 rounded-[2.5rem] hover:bg-background transition-luxe">
                     <div className="size-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-ink mb-8">
                        <v.i size={24} />
                     </div>
                     <h4 className="font-display text-2xl mb-4">{v.t}</h4>
                     <p className="text-muted-foreground leading-relaxed">{v.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. FULL DIRECTORY */}
      <section className="section-pad">
         <div className="container-luxe">
            <div className="max-w-4xl">
               <SectionHeader
                 align="left"
                 eyebrow="Full Directory"
                 title={<>Where we <span className="font-serif italic text-gradient-gold">style.</span></>}
                 description="If your city isn't listed below, we still likely serve your area. Our team travels up to 50 miles from our central Miami studio."
               />
               <div className="mt-16 flex flex-wrap gap-3">
                  {allCities.map((c) => {
                    const slug = c.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
                    return (
                      <Link 
                        key={c} 
                        to="/locations/$city" 
                        params={{ city: slug }}
                        className="group flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-gold transition-all"
                      >
                        <MapPin size={12} className="text-gold/50 group-hover:text-gold" />
                        <span className="text-sm font-medium">{c}</span>
                      </Link>
                    );
                  })}
               </div>
            </div>
         </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="section-pad">
         <div className="container-luxe">
            <div className="rounded-[4rem] bg-ink text-background p-16 lg:p-32 text-center relative overflow-hidden">
               <div className="relative z-10">
                  <Sparkles size={40} className="mx-auto text-gold mb-10" />
                  <h2 className="font-display text-5xl md:text-7xl mb-8 leading-tight">Ready to style <br /> your <span className="font-serif italic text-gradient-gold">Event?</span></h2>
                  <p className="text-xl text-background/60 mb-12 max-w-2xl mx-auto">Our team is ready to bring the magic to your venue across South Florida.</p>
                  <Link to="/contact" className="px-12 py-6 bg-gold text-ink rounded-full font-bold uppercase tracking-widest text-sm hover:bg-background transition-all">
                     Start My Proposal
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
