import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, PrimaryButton } from "@/components/ui-bits";
import { services } from "@/lib/site-data";
import { Check, ArrowUpRight, Sparkles, Palette, Calendar, Truck, Heart } from "lucide-react";
import heroImg from "@/assets/hero-balloons.jpg";
import gWedding from "@/assets/gallery-wedding.jpg";
import gBaby from "@/assets/gallery-baby.jpg";
import gCorporate from "@/assets/gallery-corporate.jpg";
import sBackdrop from "@/assets/service-backdrop.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Luxury Balloon Decor & Event Styling — The Balloon Gal" },
      { name: "description", content: "Explore our premium balloon decor services: Organic Garlands, Custom Backdrops, Corporate Branding, and Wedding Styling across South Florida." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const serviceAssets = [gWedding, gBaby, gCorporate, sBackdrop];

  return (
    <div className="pt-0">
      {/* --- HERO: High Contrast & Bold --- */}
      <section className="relative h-[60vh] flex items-center bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src={heroImg} alt="Luxury balloons" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        
        <div className="container-luxe relative z-10">
           <div className="max-w-3xl animate-float-up pt-32 lg:pt-0">
              <p className="eyebrow text-gold mb-6">Bespoke Styling</p>
              <h1 className="text-6xl md:text-8xl text-background leading-tight tracking-tighter">
                Elevating every <br />
                <span className="font-serif italic text-gradient-gold">Experience.</span>
              </h1>
              <p className="mt-8 text-xl text-background/60 leading-relaxed max-w-xl">
                From intimate celebrations to massive activations, we bring an editorial eye to every installation across South Florida.
              </p>
           </div>
        </div>
      </section>

      {/* --- SERVICE CATEGORIES: Visual Grid --- */}
      <section className="section-pad bg-background">
        <div className="container-luxe">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <SectionHeader 
                align="left"
                eyebrow="Our Expertise"
                title={<>Custom styling for <span className="font-serif italic text-gradient-gold">bespoke events.</span></>}
              />
              <div className="pb-2">
                 <PrimaryButton to="/contact" variant="ghost">Get My Custom Proposal</PrimaryButton>
              </div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((s, i) => (
                <div key={s.slug} className="group relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-soft hover:shadow-luxe transition-luxe">
                   <img src={serviceAssets[i % serviceAssets.length]} alt={s.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                   
                   <div className="absolute inset-0 p-12 flex flex-col justify-end">
                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                         <p className="eyebrow text-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Premier Service</p>
                         <h2 className="font-display text-4xl lg:text-5xl text-background mb-6">{s.title}</h2>
                         <p className="text-background/70 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">{s.blurb}</p>
                         
                         <div className="mt-10 flex flex-wrap gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-md border border-background/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-background hover:bg-background hover:text-ink transition-all">
                               Inquire Now <ArrowUpRight size={14} />
                            </Link>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- HOW IT WORKS: The Luxury Process --- */}
      <section className="section-pad bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 p-24 opacity-5 pointer-events-none">
           <Sparkles size={400} className="text-ink" />
        </div>
        
        <div className="container-luxe relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="eyebrow">The Experience</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4">The path to an <span className="font-serif italic text-gradient-gold">extraordinary</span> event.</h2>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  n: "01", t: "Design Discovery", i: Palette,
                  d: "We begin with your vision. Through a collaborative mood board process, we align on palette, scale, and venue-specific opportunities." 
                },
                { 
                  n: "02", t: "The Installation", i: Truck,
                  d: "Our team arrives on-site with meticulous timing. We hand-sculpt your installation, ensuring every organic curve is positioned for maximum impact." 
                },
                { 
                  n: "03", t: "Full Breakdown", i: Heart,
                  d: "The luxury experience means zero stress for you. We return post-event to professionally strike the installation, leaving the venue pristine." 
                }
              ].map((step, idx) => (
                <div key={idx} className="glass p-12 rounded-[3.5rem] relative hover:bg-background hover:shadow-soft transition-luxe">
                   <div className="absolute top-10 right-10 font-display text-5xl text-gold/20 select-none">{step.n}</div>
                   <div className="size-16 rounded-2xl bg-gradient-gold flex items-center justify-center text-ink mb-10 shadow-gold">
                      <step.i size={28} />
                   </div>
                   <h3 className="font-display text-3xl mb-6">{step.t}</h3>
                   <p className="text-muted-foreground leading-relaxed text-lg">{step.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- ENHANCEMENTS: The Finishing Touches --- */}
      <section className="section-pad">
         <div className="container-luxe grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-luxe">
               <img src={sBackdrop} alt="Custom add-ons" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="space-y-12">
               <SectionHeader 
                  align="left"
                  eyebrow="Signature Details"
                  title={<>The elements that <span className="font-serif italic text-gradient-gold">define the vibe.</span></>}
               />
               <div className="space-y-8">
                  {[
                    { t: "Custom Neon Signage", d: "Add a personalized glow to your backdrops with custom-lettered neon signs." },
                    { t: "Floral Integration", d: "Sophisticated silk or fresh floral accents woven into organic balloon forms." },
                    { t: "Themed Rentals", d: "From vintage champagne carts to modern acrylic plinths and marquee letters." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                       <div className="size-12 rounded-full border border-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-ink transition-all">
                          <Check size={18} />
                       </div>
                       <div>
                          <h4 className="font-display text-2xl mb-2">{item.t}</h4>
                          <p className="text-muted-foreground leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="pt-8">
                  <PrimaryButton to="/contact" variant="dark">Explore My Options</PrimaryButton>
               </div>
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="section-pad bg-ink text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--blush-soft)_0%,_transparent_70%)] opacity-20" />
        <div className="container-luxe relative z-10">
           <h2 className="font-display text-5xl md:text-7xl mb-10 leading-tight">
             Let's design <br /> your <span className="font-serif italic text-gradient-gold">legacy moment.</span>
           </h2>
           <div className="flex flex-wrap justify-center gap-6">
              <PrimaryButton to="/contact" variant="gold">Inquire Now</PrimaryButton>
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-background/20 px-10 py-5 text-sm font-semibold text-background hover:bg-background hover:text-ink transition-all">
                 Browse Gallery <ArrowUpRight size={18} />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}

