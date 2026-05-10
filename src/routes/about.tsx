import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, PrimaryButton } from "@/components/ui-bits";
import { Sparkles, Heart, Star, Camera, Award, Users, ArrowUpRight, Check, Palette } from "lucide-react";
import portrait from "@/assets/founder-portrait.png";
import heroImg from "@/assets/hero-balloons.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | The Balloon Gal — South Florida's Premier Event Stylist" },
      { name: "description", content: "Discover the artistry and mission behind The Balloon Gal. We redefine celebrations with editorial-grade balloon installations across Miami, Palm Beach, and beyond." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-0">
      {/* --- HERO: Editorial & Immersive --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-ink pt-32 lg:pt-0">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="Abstract luxury balloons" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        
        <div className="container-luxe relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-float-up">
            <p className="eyebrow text-gold mb-6">Since 2018</p>
            <h1 className="text-6xl md:text-8xl text-background leading-[0.9] tracking-tighter">
              Defining the <br />
              <span className="font-serif italic text-gradient-gold">Editorial</span> <br />
              Standard.
            </h1>
            <p className="mt-8 text-xl text-background/60 leading-relaxed max-w-lg">
              We don't just decorate events. We style the moments that become the highlight of your celebration.
            </p>
            <div className="mt-12">
              <PrimaryButton to="/contact" variant="gold">Let's Create Together</PrimaryButton>
            </div>
          </div>
          
          <div className="relative group perspective-1000 hidden lg:block">
             <div className="absolute -inset-10 bg-gradient-gold opacity-10 blur-[100px] group-hover:opacity-20 transition-opacity duration-1000" />
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-background/10 transform hover:rotate-2 transition-transform duration-700">
                <img src={portrait} alt="The Balloon Gal Founder" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-2xl">
                   <p className="font-display text-2xl">Our Philosophy</p>
                   <p className="text-xs mt-2 opacity-70 leading-relaxed italic">"Artistry is in the details, and every celebration is a blank canvas."</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- OUR STORY: The Narrative --- */}
      <section className="section-pad bg-background">
        <div className="container-luxe grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 relative">
             {/* Mobile Portrait view */}
             <div className="lg:hidden mb-12 rounded-[2rem] overflow-hidden shadow-luxe">
                <img src={portrait} alt="Founder portrait" className="w-full" />
             </div>
             
             <div className="space-y-12">
                <SectionHeader 
                  align="left"
                  eyebrow="The Genesis"
                  title={<>From a passion to a <span className="font-serif italic text-gradient-gold">premier studio.</span></>}
                />
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I founded The Balloon Gal in 2018 with a singular mission: to transform a category often seen as "temporary decor" into a form of high-end event artistry.
                  </p>
                  <p>
                    Living and working in South Florida, I saw the need for event styling that matched the region's vibrant, sophisticated lifestyle. We moved away from standard arches and toward organic, sculpted forms that interact with the architecture of a venue.
                  </p>
                  <p>
                    Today, we are honored to style over 200 celebrations annually, from intimate baby showers in Coral Gables to massive corporate activations in Downtown Miami.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
                   <div>
                      <p className="font-display text-5xl text-foreground">500+</p>
                      <p className="text-xs uppercase tracking-widest mt-2 text-gold font-bold">Events Styled</p>
                   </div>
                   <div>
                      <p className="font-display text-5xl text-foreground">6k+</p>
                      <p className="text-xs uppercase tracking-widest mt-2 text-gold font-bold">Happy Hosts</p>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-7 space-y-16">
             {/* Values Cards */}
             <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { t: "Editorial Intent", d: "We compose every installation for the camera. We consider lighting, angles, and scale to ensure your photos look flawless.", i: Camera },
                  { t: "Custom Curation", d: "No templates here. Every palette is custom-blended and every form is hand-sculpted on-site for your specific venue.", i: Palette },
                  { t: "Seamless Concierge", d: "From the initial mood board to the final breakdown, our process is designed to be completely effortless for you.", i: Users },
                  { t: "Sustainability", d: "We exclusively use 100% biodegradable, professional-grade materials from responsible manufacturers.", i: Heart },
                ].map((v, i) => (
                  <div key={i} className="glass p-10 rounded-[2.5rem] hover:bg-background hover:shadow-soft transition-luxe">
                     <div className="size-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-ink mb-6">
                        <v.i size={24} />
                     </div>
                     <h3 className="font-display text-2xl mb-4">{v.t}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                  </div>
                ))}
             </div>
             
             {/* Mission Statement */}
             <div className="bg-ink rounded-[3rem] p-12 text-background relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                   <Sparkles size={120} className="text-gold" />
                </div>
                <div className="relative z-10">
                   <p className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6">Our Mission</p>
                   <p className="font-display text-3xl md:text-4xl leading-snug">
                    "To redefine the celebration experience through avant-garde balloon artistry and intentional event styling that leaves a lasting visual legacy."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- WHY US / RECOGNITION --- */}
      <section className="section-pad bg-secondary/30">
        <div className="container-luxe">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="eyebrow">Trust & Excellence</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4">Recognition of <span className="font-serif italic text-gradient-gold">Craft.</span></h2>
           </div>
           
           <div className="grid md:grid-cols-4 gap-12 text-center opacity-60">
              <div className="space-y-4">
                 <div className="flex justify-center"><Award size={40} /></div>
                 <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold">Voted Top Stylist<br/>Miami Event Awards</p>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-center"><Star size={40} /></div>
                 <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold">5-Star Rated<br/>Across Google & Yelp</p>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-center"><Camera size={40} /></div>
                 <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold">Featured in<br/>Luxe Living Magazine</p>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-center"><Users size={40} /></div>
                 <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold">Preferred Vendor<br/>Ritz-Carlton South Beach</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="section-pad">
         <div className="container-luxe">
            <div className="relative rounded-[4rem] overflow-hidden bg-ink p-16 lg:p-32 text-center">
               <div className="absolute inset-0 opacity-20">
                  <img src={portrait} alt="Background" className="w-full h-full object-cover grayscale" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
               
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="font-display text-5xl md:text-7xl text-background mb-10 leading-tight">
                    Let's make it <br/> <span className="font-serif italic text-gradient-gold">unforgettable.</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6">
                     <PrimaryButton to="/contact" variant="gold">Book Your Date</PrimaryButton>
                     <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-background/20 px-10 py-5 text-sm font-semibold text-background hover:bg-background hover:text-ink transition-all">
                        View Portfolio <ArrowUpRight size={18} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

