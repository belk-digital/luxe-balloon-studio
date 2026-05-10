import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, Heart, Star, Calendar, Palette, Truck, MapPin,
  Instagram, MessageCircle, Check, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-balloons.jpg";
import gBaby from "@/assets/gallery-baby.jpg";
import gBirthday from "@/assets/gallery-birthday.jpg";
import gWedding from "@/assets/gallery-wedding.jpg";
import gCorporate from "@/assets/gallery-corporate.jpg";
import gBridal from "@/assets/gallery-bridal.jpg";
import gOutdoor from "@/assets/gallery-outdoor.jpg";
import { SectionHeader, PrimaryButton } from "@/components/ui-bits";
import { services, cities, allCities } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Balloon Gal | Luxury Balloon Decor in South Florida" },
      {
        name: "description",
        content:
          "Luxury balloon decor & event styling across Miami, Fort Lauderdale, Boca Raton & Palm Beach. Custom organic balloon garlands, arches, and installations for unforgettable celebrations.",
      },
      { property: "og:title", content: "Luxury Balloon Decor South Florida | The Balloon Gal" },
      {
        property: "og:description",
        content:
          "Custom luxury balloon installations for birthdays, baby showers, weddings, and corporate events across South Florida.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

const faqs = [
  { q: "How much does luxury balloon decor cost in South Florida?", a: "Our installations begin at $450 for intimate setups, with most full event installs ranging between $850 and $4,500+. Pricing depends on size, complexity, palette, and venue. We send a custom quote within 24 hours of your inquiry." },
  { q: "Do you travel across South Florida?", a: "Yes — we serve Miami, Fort Lauderdale, Boca Raton, Palm Beach, Hollywood, Pembroke Pines, Aventura, Weston, Coral Springs, Delray Beach, Kendall, Hialeah, and surrounding South Florida areas. Travel beyond 25 miles includes a small delivery fee." },
  { q: "How far in advance should I book?", a: "We recommend booking 3–6 weeks ahead for weekend dates. Peak season (graduation, holidays, wedding season) books out faster, so reach out as soon as you have a date." },
  { q: "Do balloons last outdoors in Florida weather?", a: "Yes, we use professional-grade balloons treated for outdoor durability. For long daytime events, we plan installations with shade, color choice, and timing in mind to keep your decor looking fresh." },
  { q: "Can you match my event theme and colors?", a: "Absolutely. Every Balloon Gal install is fully custom — we design palettes around your invitation, brand, or mood board." },
  { q: "Do you provide backdrops and rentals?", a: "Yes — we offer circular backdrops, mesh arches, plinths, marquee numbers, neon signs, and a curated rental collection styled into your installation." },
  { q: "What types of events do you decorate?", a: "Birthdays, baby showers, bridal showers, gender reveals, weddings, corporate events, grand openings, brand activations, graduations, and luxury private parties." },
  { q: "How long does setup take?", a: "On-site installation typically takes 1–4 hours depending on scale. We arrive early so your venue is camera-ready before guests arrive." },
  { q: "Do you offer corporate balloon decor?", a: "Yes — brand-aligned installs, step-and-repeat backdrops, and activation pieces for product launches, conferences, and corporate parties throughout South Florida." },
  { q: "Do you handle breakdown after the event?", a: "Yes, full setup and breakdown are included for installations that require it. You enjoy the event — we handle the rest." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Gallery />
      <BeforeAfter />
      <Process />
      <Locations />
      <Trends />
      <InstagramSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
      <CTABanner />
      <ContactPreview />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-luxe pt-12 lg:pt-20 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 animate-float-up">
            <p className="eyebrow">South Florida · Est. 2018</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-6 leading-[0.95] text-foreground">
              Luxury balloon decor that turns moments into{" "}
              <span className="italic text-gradient-gold">experiences.</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Custom installations for birthdays, baby showers, weddings, and
              corporate events — designed for the camera, styled for South
              Florida's most discerning hosts.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton to="/contact" variant="dark">Book Your Event</PrimaryButton>
              <PrimaryButton to="/contact" variant="ghost">Get a Quote</PrimaryButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}</div>
                <span className="text-muted-foreground">5.0 · 200+ events</span>
              </div>
              <a href="https://instagram.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={16} /> 38K on Instagram
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Birthdays", "Weddings", "Baby Showers", "Corporate"].map((t) => (
                <span key={t} className="text-xs tracking-wider uppercase px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-8 bg-gradient-blush rounded-[3rem] -z-10 opacity-70" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-luxe">
              <img
                src={heroImg}
                alt="Luxury organic balloon arch in champagne gold and blush by The Balloon Gal"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -left-4 lg:-left-10 bottom-8 bg-background/95 backdrop-blur-md rounded-2xl shadow-soft p-5 max-w-[220px] animate-float-balloon">
              <p className="eyebrow">Trusted by</p>
              <p className="font-display text-2xl mt-1">200+ hosts</p>
              <p className="text-xs text-muted-foreground mt-1">across South Florida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const stats = [
    { v: "6+", l: "Years Styling" },
    { v: "500+", l: "Events Designed" },
    { v: "12", l: "Cities Served" },
    { v: "5.0★", l: "Client Rating" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-luxe py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center md:text-left">
            <p className="font-display text-4xl md:text-5xl text-foreground">{s.v}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="container-luxe pb-10 flex flex-wrap items-center justify-center md:justify-between gap-6 text-xs uppercase tracking-[0.28em] text-muted-foreground/80">
        {["Luxury Birthdays", "Baby Showers", "Bridal & Weddings", "Corporate", "Brand Activations", "Private Estates"].map((t) => (
          <span key={t}>· {t} ·</span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const featured = services.slice(0, 6);
  const imgs = [gBirthday, gBaby, gWedding, gCorporate, gBridal, gOutdoor];
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Signature Services"
          title={<>Designed for the camera, <em className="font-display italic text-gradient-gold">styled for you.</em></>}
          description="Every installation is fully custom — palettes, scale, and styling tailored to your venue, brand, and vision."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {featured.map((s, i) => (
            <Link
              key={s.slug}
              to="/services"
              className="group rounded-3xl bg-card overflow-hidden border border-border shadow-soft hover:shadow-luxe transition-luxe"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={imgs[i]}
                  alt={`${s.title} by The Balloon Gal`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.blurb}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs uppercase tracking-[0.2em] text-foreground group-hover:text-gold transition-colors">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <PrimaryButton to="/services" variant="ghost">View All Services</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { i: Sparkles, t: "Custom Installations", d: "No templates. Every design is sketched and styled from scratch around your event." },
    { i: Heart, t: "Obsessive Detail", d: "From color matching to balloon clusters, every element is intentional and editorial." },
    { i: Palette, t: "Signature Palettes", d: "Trend-forward color stories — neutral luxe, blush & gold, tropical Miami, monochrome." },
    { i: Star, t: "Premium Materials", d: "Pro-grade balloons, refined finishes, and rental pieces that elevate every install." },
    { i: Truck, t: "Setup & Breakdown", d: "Door-to-door installation across South Florida. You enjoy the event — we handle everything." },
    { i: Calendar, t: "Concierge Process", d: "From inquiry to install, a personalized experience designed to feel effortless." },
  ];
  return (
    <section className="section-pad bg-gradient-luxe">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Why The Balloon Gal"
          title={<>The South Florida choice for hosts who want it <em className="italic text-gradient-gold">elevated.</em></>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-background/70 backdrop-blur-sm border border-border/60 p-7 hover:bg-background hover:shadow-soft transition-luxe">
              <div className="size-12 rounded-full bg-gradient-gold flex items-center justify-center text-ink">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-xl mt-5 text-foreground">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const items = [
    { src: gBirthday, alt: "Luxury birthday balloon arch Miami", cat: "Birthdays", span: "row-span-2" },
    { src: gWedding, alt: "Wedding balloon installation Fort Lauderdale", cat: "Weddings", span: "" },
    { src: gBaby, alt: "Neutral baby shower balloon decor Boca Raton", cat: "Baby Showers", span: "" },
    { src: gCorporate, alt: "Corporate balloon backdrop Miami", cat: "Corporate", span: "row-span-2" },
    { src: gBridal, alt: "Bridal shower balloon decor Palm Beach", cat: "Bridal", span: "" },
    { src: gOutdoor, alt: "Outdoor balloon installation South Florida", cat: "Outdoor", span: "" },
  ];
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>A portfolio that speaks <em className="italic text-gradient-gold">in pastels & gold.</em></>}
          description="A snapshot from recent celebrations across Miami, Fort Lauderdale, Boca Raton, and Palm Beach."
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {items.map((it, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group ${it.span}`}>
              <img src={it.src} alt={it.alt} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 left-4 text-background text-xs uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity">{it.cat}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <PrimaryButton to="/gallery" variant="ghost">View Full Gallery</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BEFORE / AFTER ---------------- */
function BeforeAfter() {
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Transformations"
          title={<>From empty venue to <em className="italic text-gradient-gold">unforgettable.</em></>}
          description="The Balloon Gal experience is about transformation — turning ordinary spaces into editorial-worthy moments."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {[
            { label: "Before", img: gOutdoor, copy: "Bare patio, no focal point, no styled photo moment." },
            { label: "After", img: gBirthday, copy: "A sculpted arch, custom palette, and signage your guests photograph for hours." },
          ].map((b) => (
            <div key={b.label} className="rounded-3xl overflow-hidden bg-card shadow-soft">
              <div className="relative">
                <img src={b.img} alt={`${b.label} balloon installation`} loading="lazy" width={1024} height={1280} className="w-full aspect-[4/3] object-cover" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs uppercase tracking-[0.25em]">{b.label}</span>
              </div>
              <p className="p-6 text-muted-foreground">{b.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Inquiry", d: "Share your event details, mood, and vision through our quick contact form." },
    { n: "02", t: "Consultation", d: "We follow up within 24 hours with palette ideas, sketches, and a custom quote." },
    { n: "03", t: "Custom Design", d: "Once booked, we lock in your color story, scale, and styling pieces." },
    { n: "04", t: "Setup Day", d: "Our team arrives early and installs while you enjoy your morning." },
    { n: "05", t: "Event Perfection", d: "Camera-ready before doors open. Optional breakdown, no stress." },
  ];
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="The Process"
          title={<>How it <em className="italic text-gradient-gold">works.</em></>}
        />
        <div className="mt-16 grid md:grid-cols-5 gap-8 relative">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <p className="font-display text-5xl text-gradient-gold">{s.n}</p>
              <h3 className="font-display text-xl mt-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATIONS ---------------- */
function Locations() {
  return (
    <section className="section-pad bg-ink text-background">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-background/60">Service Area</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Luxury balloon decor across all of <span className="italic text-gradient-gold">South Florida.</span>
            </h2>
            <p className="mt-6 text-background/70 leading-relaxed">
              From oceanfront estates in Palm Beach to penthouse rooftops in Miami,
              The Balloon Gal styles celebrations across the region's most beautiful venues.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {allCities.map((c) => (
                <span key={c} className="text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-background/20 text-background/80 hover:border-gold hover:text-gold transition-colors">
                  <MapPin size={10} className="inline mr-1" />{c}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to="/locations/$city"
                params={{ city: c.slug }}
                className="rounded-2xl border border-background/15 p-7 hover:bg-background/5 transition-luxe group"
              >
                <p className="eyebrow text-gold">Balloon Decor</p>
                <h3 className="font-display text-3xl mt-2">{c.name}</h3>
                <p className="text-sm text-background/60 mt-3 leading-relaxed">
                  Custom luxury balloon installations for {c.name} birthdays, weddings, baby showers, and corporate events.
                </p>
                <span className="inline-flex items-center gap-1 mt-5 text-xs uppercase tracking-[0.25em] text-gold">Explore {c.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRENDS ---------------- */
function Trends() {
  const trends = [
    { t: "Neutral Luxe", d: "Ivory, nude, champagne. Minimal & editorial.", c: "from-stone-200 to-amber-100" },
    { t: "Tropical Miami", d: "Coral, blush, palm greens. South Florida energy.", c: "from-rose-200 to-emerald-200" },
    { t: "White & Gold", d: "Timeless wedding & milestone styling.", c: "from-amber-100 to-yellow-200" },
    { t: "Pastel Baby", d: "Soft blush, pearl, and dusty mauve.", c: "from-pink-100 to-rose-200" },
    { t: "Barbiecore", d: "Hot pink, magenta & chrome accents.", c: "from-pink-300 to-fuchsia-400" },
    { t: "Modern Mono", d: "Matte black & gold for sleek corporate.", c: "from-stone-700 to-amber-700" },
  ];
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Trending Palettes"
          title={<>Color stories <em className="italic text-gradient-gold">South Florida loves.</em></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {trends.map((t) => (
            <div key={t.t} className="rounded-2xl border border-border overflow-hidden hover:shadow-soft transition-luxe">
              <div className={`h-32 bg-gradient-to-br ${t.c}`} />
              <div className="p-6">
                <h3 className="font-display text-2xl">{t.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSTAGRAM ---------------- */
function InstagramSection() {
  const tiles = [gBirthday, gWedding, gBaby, gCorporate, gBridal, gOutdoor];
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="@theballoongal"
          title={<>Seen on <em className="italic text-gradient-gold">Instagram.</em></>}
          description="Trending event aesthetics, custom color themes, and viral-worthy installations from across South Florida."
        />
        <div className="mt-14 grid grid-cols-3 md:grid-cols-6 gap-3">
          {tiles.map((t, i) => (
            <a key={i} href="https://instagram.com" target="_blank" rel="noreferrer" className="aspect-square overflow-hidden rounded-xl group relative">
              <img src={t} alt="Instagram balloon decor" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                <Instagram className="text-background opacity-0 group-hover:opacity-100 transition" size={24} />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm hover:bg-gold hover:text-ink transition-luxe">
            <Instagram size={16} /> Follow Along
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const reviews = [
    { n: "Sofia M.", e: "Sweet 16, Coral Gables", r: "The Balloon Gal completely transformed our venue. Every guest asked who designed it. Worth every dollar — and then some.", },
    { n: "Carlos & Renata", e: "Wedding, Fort Lauderdale", r: "From our first call to the install, everything felt premium. Our sweetheart table was the most photographed moment of the night.", },
    { n: "Hadley Studio", e: "Brand Launch, Miami", r: "Working with The Balloon Gal on our launch event was effortless. Our backdrop went viral on socials within hours.", },
  ];
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <SectionHeader eyebrow="Kind Words" title={<>What South Florida hosts <em className="italic text-gradient-gold">are saying.</em></>} />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-luxe transition-luxe">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}</div>
              <p className="mt-5 font-display text-xl leading-relaxed text-foreground">"{r.r}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-medium text-foreground">{r.n}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.e}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const tiers = [
    { n: "Petite", p: "$450+", f: ["Compact garland", "Up to 4 ft", "1 color story", "Drop-off install"] },
    { n: "Signature", p: "$950+", f: ["Sculpted garland or arch", "Up to 12 ft", "Custom palette", "Setup & styling included"], featured: true },
    { n: "Statement", p: "$2,200+", f: ["Full venue installation", "Backdrop + accents", "Concierge design", "Setup & breakdown"] },
  ];
  return (
    <section className="section-pad bg-gradient-blush">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Investment Preview"
          title={<>Transparent starting <em className="italic text-gradient-gold">pricing.</em></>}
          description="Final pricing depends on scale, location, and styling pieces. Every quote is custom and sent within 24 hours."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {tiers.map((t) => (
            <div
              key={t.n}
              className={`rounded-3xl p-8 border ${t.featured ? "bg-ink text-background border-ink shadow-luxe scale-105" : "bg-background/70 border-border shadow-soft"}`}
            >
              <p className={`eyebrow ${t.featured ? "text-background/60" : ""}`}>{t.featured ? "Most Booked" : "Tier"}</p>
              <h3 className="font-display text-3xl mt-2">{t.n}</h3>
              <p className={`font-display text-5xl mt-4 ${t.featured ? "text-gradient-gold" : "text-foreground"}`}>{t.p}</p>
              <ul className="mt-7 space-y-3 text-sm">
                {t.f.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={14} className="text-gold" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm transition-luxe ${t.featured ? "bg-gradient-gold text-ink" : "bg-foreground text-background hover:bg-gold hover:text-ink"}`}>Request Quote</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad">
      <div className="container-luxe max-w-4xl">
        <SectionHeader eyebrow="FAQ" title={<>Everything <em className="italic text-gradient-gold">you might ask.</em></>} />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-6 group"
            >
              <div className="flex items-center justify-between gap-6">
                <h3 className="font-display text-xl md:text-2xl text-foreground">{f.q}</h3>
                <ChevronDown size={20} className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              {open === i && <p className="mt-4 text-muted-foreground leading-relaxed animate-float-up">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BLOG ---------------- */
function Blog() {
  const posts = [
    { t: "Best Balloon Themes for Baby Showers in 2026", c: "Trends" },
    { t: "Luxury Birthday Party Trends in Miami Right Now", c: "Birthdays" },
    { t: "Balloon Decor Ideas for Corporate Events", c: "Corporate" },
    { t: "Outdoor Balloon Setup Tips for Florida Weather", c: "Outdoor" },
  ];
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-luxe">
        <SectionHeader eyebrow="The Journal" title={<>Inspiration & <em className="italic text-gradient-gold">styling notes.</em></>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {posts.map((p, i) => (
            <article key={i} className="rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition-luxe">
              <p className="eyebrow text-gold">{p.c}</p>
              <h3 className="font-display text-xl mt-3 leading-snug">{p.t}</h3>
              <span className="inline-flex mt-5 text-xs uppercase tracking-[0.25em] text-foreground">Read →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA BANNER ---------------- */
function CTABanner() {
  return (
    <section className="section-pad">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-background p-12 lg:p-20 text-center shadow-luxe">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-gold/30 via-transparent to-blush/30" />
          <div className="relative">
            <p className="eyebrow text-background/60">Let's Create</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4">
              Ready to <em className="italic text-gradient-gold">elevate</em> your event?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-background/70">
              Tell us about your celebration and we'll craft a custom proposal within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <PrimaryButton to="/contact" variant="gold">Get Free Quote</PrimaryButton>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm border border-background/30 hover:bg-background hover:text-ink transition-luxe">
                Book Your Date
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT PREVIEW ---------------- */
function ContactPreview() {
  return (
    <section className="section-pad">
      <div className="container-luxe grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">Let's start <em className="italic text-gradient-gold">styling.</em></h2>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Share your event details and we'll respond within 24 hours with palette ideas and pricing.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3"><MessageCircle size={16} /> hello@theballoongal.com</p>
            <p className="flex items-center gap-3"><MapPin size={16} /> Serving all of South Florida · Miami → Palm Beach</p>
            <p className="flex items-center gap-3"><Calendar size={16} /> Mon–Sat · 9am–7pm</p>
          </div>
        </div>
        <form
          className="rounded-3xl bg-card border border-border p-8 shadow-soft space-y-4"
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch within 24 hours."); }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required maxLength={80} placeholder="Your name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
            <input required type="email" maxLength={120} placeholder="Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input maxLength={80} placeholder="Event type" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            <input type="date" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
          </div>
          <textarea maxLength={1000} rows={4} placeholder="Tell us about your vision…" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
          <button className="w-full rounded-full bg-foreground text-background py-3.5 text-sm tracking-wide hover:bg-gold hover:text-ink transition-luxe">Request My Quote</button>
        </form>
      </div>
    </section>
  );
}
