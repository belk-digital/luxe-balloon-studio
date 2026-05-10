import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Book Luxury Balloon Decor in South Florida" },
      { name: "description", content: "Request a custom quote from The Balloon Gal — South Florida's luxury balloon decorator. Serving Miami, Fort Lauderdale, Boca Raton, Palm Beach & beyond." },
      { property: "og:title", content: "Contact The Balloon Gal" },
      { property: "og:description", content: "Book luxury balloon decor for your South Florida event." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="section-pad">
        <div className="container-luxe grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <SectionHeader
              align="left"
              eyebrow="Let's Connect"
              title={<>Ready to <em className="italic text-gradient-gold">elevate</em> your event?</>}
              description="Tell us about your celebration and we'll respond within 24 hours with a custom proposal, palette, and pricing."
            />
            <div className="mt-10 space-y-5 text-sm">
              <p className="flex items-center gap-3"><Mail size={16} className="text-gold" /> hello@theballoongal.com</p>
              <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> (305) 555-0142</p>
              <p className="flex items-center gap-3"><Instagram size={16} className="text-gold" /> @theballoongal</p>
              <p className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Serving all of South Florida</p>
              <p className="flex items-center gap-3"><Calendar size={16} className="text-gold" /> Mon–Sat · 9am – 7pm</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-3xl bg-gradient-luxe p-12 text-center shadow-soft">
                <h2 className="font-display text-4xl">Thank you!</h2>
                <p className="mt-3 text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-soft space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" required maxLength={80} />
                  <Field label="Email" type="email" required maxLength={120} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone" type="tel" maxLength={20} />
                  <Field label="Event date" type="date" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Select label="Event type" options={["Birthday", "Baby Shower", "Bridal Shower", "Wedding", "Corporate", "Gender Reveal", "Graduation", "Other"]} />
                  <Select label="Service area" options={["Miami", "Fort Lauderdale", "Boca Raton", "Palm Beach", "Other South Florida"]} />
                </div>
                <Field label="Estimated budget" placeholder="$1,000+ / $2,500+ / $5,000+" maxLength={40} />
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Tell us your vision</label>
                  <textarea maxLength={1000} rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
                </div>
                <button className="w-full rounded-full bg-foreground text-background py-4 text-sm tracking-wide hover:bg-gold hover:text-ink transition-luxe">
                  Request My Custom Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input {...rest} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40">
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
