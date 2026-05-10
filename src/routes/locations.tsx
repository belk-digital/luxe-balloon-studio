import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-bits";
import { cities, allCities } from "@/lib/site-data";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Service Areas | Luxury Balloon Decor Across South Florida" },
      { name: "description", content: "The Balloon Gal serves Miami, Fort Lauderdale, Boca Raton, Palm Beach and all of South Florida with luxury balloon decor and event styling." },
      { property: "og:title", content: "Luxury Balloon Decor — South Florida Service Areas" },
      { property: "og:description", content: "Custom balloon installations across Miami, Fort Lauderdale, Boca Raton & Palm Beach." },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Service Areas"
            title={<>Luxury balloon decor across <em className="italic text-gradient-gold">South Florida.</em></>}
            description="From Miami to Palm Beach, we travel across South Florida to style unforgettable celebrations at the region's most beautiful venues."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {cities.map((c) => (
              <Link key={c.slug} to="/locations/$city" params={{ city: c.slug }} className="rounded-3xl bg-card border border-border p-8 hover:shadow-luxe transition-luxe group">
                <p className="eyebrow text-gold">Balloon Decor</p>
                <h2 className="font-display text-4xl mt-2">{c.name}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Custom luxury balloon installations for {c.name} birthdays, weddings,
                  baby showers, and corporate events. Editorial styling, on-time setup,
                  and the kind of detail that turns moments into experiences.
                </p>
                <span className="inline-flex items-center gap-1 mt-6 text-xs uppercase tracking-[0.25em] text-foreground group-hover:text-gold transition-colors">Explore {c.name} →</span>
              </Link>
            ))}
          </div>
          <div className="mt-14 rounded-3xl bg-gradient-luxe p-10">
            <p className="eyebrow">Also serving</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {allCities.map((c) => (
                <span key={c} className="text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-background/70 border border-border">
                  <MapPin size={10} className="inline mr-1" />{c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
