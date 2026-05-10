import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SectionHeader, PrimaryButton } from "@/components/ui-bits";
import hero from "@/assets/hero-balloons.jpg";
import { Check } from "lucide-react";

const data: Record<string, {
  name: string;
  tagline: string;
  intro: string;
  neighborhoods: string[];
  venues: string[];
  events: string[];
  paragraphs: string[];
  faqs: { q: string; a: string }[];
}> = {
  miami: {
    name: "Miami",
    tagline: "Luxury Balloon Decor in Miami, FL",
    intro: "From Brickell penthouses to Coral Gables estates, The Balloon Gal styles Miami's most photographed celebrations. We design custom balloon installations that match the city's style — modern, cinematic, and unmistakably luxe.",
    neighborhoods: ["Brickell", "Coral Gables", "Coconut Grove", "Wynwood", "Miami Beach", "Edgewater", "Bal Harbour", "Doral"],
    venues: ["Faena Hotel", "The Setai", "Edition Miami Beach", "Vizcaya Museum", "Soho Beach House", "1 Hotel South Beach"],
    events: ["Quinceañeras", "Sweet 16s", "Milestone Birthdays", "Corporate Activations", "Weddings", "Baby Showers", "Brand Launches"],
    paragraphs: [
      "Miami is built around moments — and moments deserve installations that match. Whether you're hosting a Brickell rooftop birthday, a Coral Gables wedding, or a Wynwood brand launch, The Balloon Gal designs balloon decor that feels custom to the venue, the palette, and the moment.",
      "Our Miami clients come to us because they want more than a balloon arch — they want a focal point that gets photographed. Every install is designed for the camera, sculpted from professional-grade balloons, and styled with the editorial touch Miami hosts have come to expect.",
      "Common Miami events we style include luxury quinceañeras in Coral Gables, milestone birthdays at Edition Miami Beach, baby showers in Bal Harbour, and corporate activations across Wynwood and Brickell. We handle setup, breakdown, and the concierge details so you can focus on your guests.",
    ],
    faqs: [
      { q: "Do you serve all Miami neighborhoods?", a: "Yes — Brickell, Coral Gables, Coconut Grove, Wynwood, Miami Beach, Bal Harbour, Edgewater, Doral, and surrounding areas." },
      { q: "Can you install at Miami hotels & venues?", a: "Absolutely. We regularly work with Faena, The Setai, Soho House, 1 Hotel, Edition Miami Beach, and most major event venues across the city." },
    ],
  },
  "fort-lauderdale": {
    name: "Fort Lauderdale",
    tagline: "Luxury Balloon Decor in Fort Lauderdale, FL",
    intro: "Fort Lauderdale's waterfront venues and estate weddings deserve installations that hold their own. We design refined, editorial balloon decor for celebrations across the city.",
    neighborhoods: ["Las Olas", "Victoria Park", "Rio Vista", "Coral Ridge", "Wilton Manors", "Harbor Beach"],
    venues: ["W Fort Lauderdale", "The Conrad", "Pier Sixty-Six", "Bonnet House", "Riverside Hotel"],
    events: ["Yacht Parties", "Weddings", "Corporate Mixers", "Baby Showers", "Bridal Showers", "Anniversary Parties"],
    paragraphs: [
      "Fort Lauderdale is the South Florida choice for hosts who want elegance with a coastal edge. The Balloon Gal designs balloon installations for Las Olas penthouses, Harbor Beach estates, yacht receptions, and corporate functions across Broward.",
      "Whether you're styling a sunset wedding on the water or a bridal shower in Coral Ridge, we bring the same editorial approach — custom palettes, sculpted garlands, and rental pieces that elevate every detail.",
      "We routinely install at the W, Conrad, Pier Sixty-Six, the Riverside Hotel, and private estates throughout Fort Lauderdale. Every booking includes setup, styling, and full breakdown.",
    ],
    faqs: [
      { q: "Do you install on yachts in Fort Lauderdale?", a: "Yes — we have extensive experience styling yacht parties along Las Olas and Pier Sixty-Six. We design installs that secure beautifully and travel well." },
      { q: "How far in advance should Fort Lauderdale clients book?", a: "We recommend 4–6 weeks for weekend dates, especially during peak wedding and yacht event season." },
    ],
  },
  "boca-raton": {
    name: "Boca Raton",
    tagline: "Luxury Balloon Decor in Boca Raton, FL",
    intro: "Boca Raton hosts know the difference between styled and elevated. The Balloon Gal designs custom balloon installations for the city's most refined celebrations.",
    neighborhoods: ["Royal Palm Yacht & Country Club", "East Boca", "Mizner Park", "Boca Bath & Tennis", "St. Andrews"],
    venues: ["The Boca Raton", "Mizner Country Club", "Royal Palm Yacht & Country Club", "Saquella Cafe", "The Addison"],
    events: ["Bat Mitzvahs", "Sweet 16s", "Bridal Showers", "Country Club Weddings", "Corporate Galas", "Baby Showers"],
    paragraphs: [
      "Boca Raton celebrations call for understated luxury — neutral palettes, refined silhouettes, and editorial styling. The Balloon Gal designs balloon installations for the city's country clubs, private estates, and signature venues.",
      "From an intimate bridal shower in East Boca to a Bat Mitzvah at The Boca Raton, we design installations that complement the city's aesthetic — nude, ivory, champagne, and gold accents that photograph beautifully against Boca's polished interiors.",
      "Our Boca clients value reliability, refined design, and a concierge experience. We handle every detail from concept to breakdown so you can focus on your guests.",
    ],
    faqs: [
      { q: "Do you work with Boca country clubs?", a: "Yes — we regularly install at Royal Palm, St. Andrews, Mizner Country Club, and The Boca Raton. We coordinate with venue staff for seamless setup." },
      { q: "What's your most-requested Boca palette?", a: "Neutral luxe: ivory, nude, champagne, and gold. It's timeless and photographs perfectly against Boca's elegant venues." },
    ],
  },
  "palm-beach": {
    name: "Palm Beach",
    tagline: "Luxury Balloon Decor in Palm Beach, FL",
    intro: "Palm Beach is the standard for refined Florida luxury — and our installations are designed to match. The Balloon Gal styles celebrations across the island and surrounding communities.",
    neighborhoods: ["Worth Avenue", "Estate Section", "South End", "West Palm Beach", "Manalapan", "Wellington"],
    venues: ["The Breakers", "The Colony Hotel", "Eau Palm Beach", "Mar-a-Lago", "Flagler Museum"],
    events: ["Charity Galas", "Society Weddings", "Milestone Birthdays", "Country Club Events", "Anniversary Parties", "Baby Showers"],
    paragraphs: [
      "Palm Beach hosts expect the absolute best — and our installations rise to it. The Balloon Gal designs custom balloon decor for charity galas, Estate Section weddings, and signature events across the island.",
      "We work in palettes that suit the Palm Beach aesthetic: ivory, blush, champagne gold, and tonal neutrals. Our installations are sculpted to complement architectural details — from the Breakers' grand interiors to oceanfront tents along South Ocean Boulevard.",
      "Whether you're hosting a society wedding, a milestone birthday, or a charity event, expect concierge-level service and editorial design from inquiry through breakdown.",
    ],
    faqs: [
      { q: "Do you install at The Breakers or Mar-a-Lago?", a: "Yes — we have experience working with Palm Beach's signature venues and follow each property's installation protocols." },
      { q: "How does pricing work for Palm Beach events?", a: "Most Palm Beach installations begin at $1,200 and scale based on size and styling. Every quote is custom and sent within 24 hours." },
    ],
  },
};

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }: { params: { city: string } }) => {
    const city = data[params.city];
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    const city = loaderData?.city;
    if (!city) return { meta: [{ title: "Location Not Found" }] };
    const title = `${city.tagline} | The Balloon Gal`;
    const desc = `Luxury balloon decor in ${city.name}, FL. Custom installations for birthdays, weddings, baby showers, and corporate events. Concierge styling by The Balloon Gal.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: hero },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: city.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: CityPage,
  notFoundComponent: () => (
    <div className="container-luxe section-pad text-center">
      <h1 className="font-display text-5xl">City not found</h1>
      <p className="mt-4 text-muted-foreground">View all <Link to="/locations" className="underline">service areas</Link>.</p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-luxe section-pad text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function CityPage() {
  const { city } = Route.useLoaderData() as { city: (typeof data)[string] };
  return (
    <>
      <section className="section-pad">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow">Service Area</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-5 leading-[1.02]">
              {city.tagline.split(city.name)[0]}
              <em className="italic text-gradient-gold">{city.name}</em>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed">{city.intro}</p>
            <div className="mt-8 flex gap-3">
              <PrimaryButton to="/contact" variant="dark">Request a {city.name} Quote</PrimaryButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img src={hero} alt={`Luxury balloon decor in ${city.name}, FL`} loading="lazy" width={1920} height={1080} className="rounded-[2rem] shadow-luxe" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-luxe grid lg:grid-cols-3 gap-10">
          <Card title="Neighborhoods Served" items={city.neighborhoods} />
          <Card title="Venues We Style" items={city.venues} />
          <Card title="Events We Decorate" items={city.events} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe max-w-4xl space-y-8">
          <SectionHeader align="left" eyebrow={`About ${city.name}`} title={<>Why hosts in {city.name} choose <em className="italic text-gradient-gold">The Balloon Gal.</em></>} />
          {city.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-lg">{p}</p>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-luxe max-w-3xl">
          <SectionHeader align="left" eyebrow="FAQ" title={`Common ${city.name} questions`} />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {city.faqs.map((f, i) => (
              <div key={i} className="py-6">
                <h3 className="font-display text-2xl">{f.q}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe text-center">
          <SectionHeader eyebrow="Next Step" title={<>Ready to book {city.name}?</>} />
          <div className="mt-8 flex justify-center gap-3">
            <PrimaryButton to="/contact" variant="dark">Get a Free Quote</PrimaryButton>
            <PrimaryButton to="/gallery" variant="ghost">See the Gallery</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-background border border-border p-8 shadow-soft">
      <p className="eyebrow text-gold">{title}</p>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-foreground"><Check size={14} className="text-gold" />{i}</li>
        ))}
      </ul>
    </div>
  );
}
