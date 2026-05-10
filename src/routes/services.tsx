import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, PrimaryButton } from "@/components/ui-bits";
import { services } from "@/lib/site-data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Luxury Balloon Decor & Event Styling — The Balloon Gal" },
      { name: "description", content: "Explore luxury balloon decor services in South Florida — organic garlands, arches, baby shower & wedding decor, corporate installations, custom backdrops, and event rentals." },
      { property: "og:title", content: "Luxury Balloon Decor Services in South Florida" },
      { property: "og:description", content: "Custom balloon installations for every type of South Florida celebration." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="What We Style"
            title={<>Luxury balloon decor for every <em className="italic text-gradient-gold">South Florida moment.</em></>}
            description="From intimate baby showers to brand-defining corporate launches, every Balloon Gal install is custom-designed and editorially styled."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.slug} className="rounded-3xl border border-border bg-card p-8 hover:shadow-luxe transition-luxe group">
              <h2 className="font-display text-3xl text-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.blurb}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
                {["Custom palette", "Setup included", "Pro materials", "South Florida delivery"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground"><Check size={14} className="text-gold" />{f}</li>
                ))}
              </ul>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm hover:bg-gold hover:text-ink transition-luxe">
                Inquire about {s.title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-gradient-luxe">
        <div className="container-luxe text-center">
          <SectionHeader eyebrow="Next Step" title={<>Tell us about your <em className="italic text-gradient-gold">celebration.</em></>} />
          <div className="mt-10 flex justify-center gap-3">
            <PrimaryButton to="/contact" variant="dark">Request a Quote</PrimaryButton>
            <PrimaryButton to="/gallery" variant="ghost">See the Gallery</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
