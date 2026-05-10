import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, PrimaryButton } from "@/components/ui-bits";
import { 
  MapPin, Sparkles, Star, Heart, Calendar, 
  Palette, Truck, MessageCircle, ArrowUpRight, Check 
} from "lucide-react";
import heroImg from "@/assets/hero-balloons.jpg";
import gWedding from "@/assets/gallery-wedding.jpg";
import gBaby from "@/assets/gallery-baby.jpg";
import gCorporate from "@/assets/gallery-corporate.jpg";

export const Route = createFileRoute("/locations/$city")({
  head: ({ params }) => {
    const cityName = params.city
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      meta: [
        { title: `Luxury Balloon Decor ${cityName} | The Balloon Gal` },
        { 
          name: "description", 
          content: `Premium balloon installations and event styling in ${cityName}, FL. Custom organic garlands, arches, and backdrops for weddings, birthdays, and corporate events.` 
        },
      ],
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const { city } = Route.useParams();
  const cityName = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div key={city} className="pt-20">
      {/* --- HERO --- */}
      <section className="relative h-[60vh] flex items-center bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt={`${cityName} balloon decor`} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        
        <div className="container-luxe relative z-10">
          <div className="max-w-3xl animate-float-up">
            <p className="eyebrow text-gold mb-6 inline-flex items-center gap-3">
              <MapPin size={14} /> Service Area: {cityName}, Florida
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-background leading-tight">
              Luxury balloon <br />
              styling in <span className="font-serif italic text-gradient-gold">{cityName}.</span>
            </h1>
            <div className="mt-10 flex flex-wrap gap-5">
              <PrimaryButton to="/contact" variant="gold">Request {cityName} Quote</PrimaryButton>
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-background/20 px-8 py-4 text-sm font-semibold text-background hover:bg-background hover:text-ink transition-all">
                View Portfolio <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- NARRATIVE CONTENT (SEO Heavy) --- */}
      <section className="section-pad bg-background">
        <div className="container-luxe grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <SectionHeader
              align="left"
              eyebrow="The Luxe Standard"
              title={<>Bespoke installations for <span className="font-serif italic text-gradient-gold">{cityName}'s</span> finest celebrations.</>}
            />
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Whether you're planning an intimate celebration at a private estate in <strong>{cityName}</strong> or a large-scale corporate activation at one of the area's premier venues, The Balloon Gal provides the editorial-quality decor your event deserves.
              </p>
              <p>
                We specialize in organic balloon garlands, custom backdrops, and full-venue transformations that move away from the traditional "party store" look and toward a sophisticated, high-end aesthetic. Our team understands the unique vibe of {cityName}, tailoring every palette and installation to reflect the local style.
              </p>
              <ul className="space-y-4 !pl-0 list-none">
                {[
                  "Custom color-matching to your event palette",
                  "Professional-grade, biodegradable materials",
                  "Full-service installation and breakdown",
                  "Concierge design process from start to finish"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="size-5 rounded-full bg-gold/20 flex items-center justify-center">
                      <Check size={12} className="text-gold" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-[3rem] overflow-hidden shadow-luxe aspect-[4/5]">
              <img src={gWedding} alt="Luxury styling" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl max-w-[240px]">
                <p className="font-display text-lg leading-tight">Editorial Quality</p>
                <p className="text-xs mt-2 opacity-70">Serving the most beautiful venues across {cityName}.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- POPULAR IN THIS AREA --- */}
      <section className="section-pad bg-secondary/30">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Local Favorites"
            title={<>Trending in <span className="font-serif italic text-gradient-gold">{cityName}.</span></>}
            description={`Explore the most requested balloon installations and event styles for ${cityName} celebrations.`}
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { t: "Private Estate Soirées", d: "Custom poolside garlands and grand entrance arches for home celebrations.", i: Heart },
              { t: "Corporate Activations", d: "Brand-aligned installations for retail openings and corporate headquarters.", i: Sparkles },
              { t: "Luxury Venue Styling", d: "Full ballroom transformations at the area's premier hotels and clubs.", i: Star }
            ].map((item, idx) => (
              <div key={idx} className="glass p-10 rounded-[2.5rem] hover:bg-background transition-luxe hover:shadow-soft">
                <div className="size-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-ink mb-8">
                  <item.i size={24} />
                </div>
                <h3 className="font-display text-2xl mb-4">{item.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCAL PORTFOLIO PREVIEW --- */}
      <section className="section-pad">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
             <SectionHeader
              align="left"
              eyebrow="Recent Work"
              title={<>Designed in <span className="font-serif italic text-gradient-gold">{cityName}.</span></>}
            />
            <div className="pb-2">
              <PrimaryButton to="/gallery" variant="ghost">View Full Portfolio</PrimaryButton>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[gBaby, gCorporate, heroImg].map((img, i) => (
              <div key={i} className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft hover:shadow-luxe transition-luxe group">
                <img src={img} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AREA FAQ --- */}
      <section className="section-pad bg-ink text-background">
        <div className="container-luxe">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Local FAQ"
              title={<>Common questions for <span className="font-serif italic text-gradient-gold">{cityName}</span> events.</>}
            />
            
            <div className="mt-16 space-y-12">
              {[
                { q: `Do you charge a travel fee for ${cityName}?`, a: "Our standard service area includes many South Florida locations. Travel fees, if applicable, are calculated based on the distance from our studio and will be clearly outlined in your custom proposal." },
                { q: `Which ${cityName} venues do you work with?`, a: `We've styled events at major hotels, private country clubs, and community centers throughout ${cityName}. We coordinate directly with your venue to handle the setup and breakdown logistics.` },
                { q: "How do I book for a weekend event?", a: "Weekend dates in South Florida book up quickly! We recommend reaching out 4-6 weeks in advance to secure your date in our calendar." }
              ].map((faq, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="font-display text-2xl text-gold">{faq.q}</h3>
                  <p className="text-lg text-background/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="section-pad">
        <div className="container-luxe">
           <div className="glass rounded-[3.5rem] p-16 lg:p-24 text-center shadow-luxe relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--blush-soft)_0%,_transparent_70%)] opacity-30" />
             <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
                  Ready to elevate your <br /> <span className="font-serif italic text-gradient-gold">{cityName}</span> celebration?
                </h2>
                <PrimaryButton to="/contact" variant="dark">Request My Custom Quote</PrimaryButton>
                <p className="mt-8 text-sm text-muted-foreground uppercase tracking-widest font-bold">Proposal sent within 24 hours</p>
             </div>
           </div>
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <section className="py-12 border-t border-border/50">
        <div className="container-luxe flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale">
          <div className="flex items-center gap-2"><Sparkles size={16} /> <span className="text-[0.6rem] uppercase tracking-widest font-bold">Organic Design</span></div>
          <div className="flex items-center gap-2"><Palette size={16} /> <span className="text-[0.6rem] uppercase tracking-widest font-bold">Custom Palettes</span></div>
          <div className="flex items-center gap-2"><Truck size={16} /> <span className="text-[0.6rem] uppercase tracking-widest font-bold">On-Time Setup</span></div>
          <div className="flex items-center gap-2"><Calendar size={16} /> <span className="text-[0.6rem] uppercase tracking-widest font-bold">Est. 2018</span></div>
        </div>
      </section>
    </div>
  );
}
