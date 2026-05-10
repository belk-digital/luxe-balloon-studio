import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Calendar, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui-bits";
import heroImg from "@/assets/hero-balloons.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Request Your Custom Proposal — The Balloon Gal" },
      { name: "description", content: "Inquire about our luxury balloon decor services. Serving Miami, Fort Lauderdale, Boca Raton, and Palm Beach with bespoke event styling." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <div className="pt-0">
      {/* --- HERO: Immersive & Direct --- */}
      <section className="relative h-[50vh] flex items-center bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-30">
           <img src={heroImg} alt="Luxury decor" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-transparent" />
        
        <div className="container-luxe relative z-10 pt-20">
           <div className="max-w-3xl animate-float-up">
              <p className="eyebrow text-gold mb-6">Concierge Booking</p>
              <h1 className="text-6xl md:text-8xl text-background leading-tight tracking-tighter">
                Let's style your <br />
                <span className="font-serif italic text-gradient-gold">Next Moment.</span>
              </h1>
           </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-luxe grid lg:grid-cols-12 gap-20">
          
          {/* Left Side: Contact Info & Timeline */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Reach Out"
                title={<>A custom proposal <span className="font-serif italic text-gradient-gold">awaits.</span></>}
                description="We prioritize quality over quantity, taking on a limited number of events to ensure absolute perfection for every client."
              />
              
              <div className="mt-10 grid gap-6">
                {[
                  { i: Mail, t: "Email Us", v: "hello@theballoongal.com" },
                  { i: Phone, t: "Call/Text", v: "(305) 555-0142" },
                  { i: Instagram, t: "Follow", v: "@_theballoongal" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                     <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all">
                        <item.i size={20} />
                     </div>
                     <div>
                        <p className="text-[0.6rem] uppercase tracking-widest text-muted-foreground font-bold">{item.t}</p>
                        <p className="text-lg font-medium">{item.v}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-ink text-background relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10"><Sparkles size={100} /></div>
               <h3 className="font-display text-3xl mb-8">Booking Timeline</h3>
               <div className="space-y-8 relative">
                  <div className="absolute left-2.5 top-2 bottom-2 w-px bg-background/10" />
                  {[
                    { t: "Inquiry", d: "Fill out the form with your event details." },
                    { t: "Design Call", d: "We discuss palette, theme, and scale." },
                    { t: "Proposal", d: "Receive a visual mood board & quote." },
                    { t: "Style Day", d: "We bring your vision to life on-site." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 relative">
                       <div className="size-5 rounded-full bg-gold border-4 border-ink shrink-0 relative z-10" />
                       <div>
                          <p className="font-display text-xl leading-none mb-2">{step.t}</p>
                          <p className="text-sm text-background/60">{step.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center rounded-[3.5rem] bg-gradient-luxe p-12 text-center shadow-soft animate-float-up">
                <div className="size-20 rounded-full bg-gold text-ink flex items-center justify-center mb-8 shadow-gold">
                   <Sparkles size={40} />
                </div>
                <h2 className="font-display text-5xl mb-4">Inquiry Received</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Thank you for choosing The Balloon Gal. <br />
                  Our lead designer will contact you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-xs uppercase tracking-widest font-bold text-gold hover:text-ink transition-colors">Send Another Message</button>
              </div>
            ) : (
              <div className="rounded-[3.5rem] bg-card border border-border p-8 lg:p-14 shadow-luxe">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="size-3 rounded-full bg-gold animate-pulse" />
                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">Accepting 2024–2025 Bookings</p>
                 </div>
                 
                 <form
                   onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                   className="space-y-8"
                 >
                   <div className="grid md:grid-cols-2 gap-8">
                     <Field label="Your Name" placeholder="Alex Rivera" required />
                     <Field label="Email Address" type="email" placeholder="alex@event.com" required />
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                     <Field label="Phone" type="tel" placeholder="(305) 000-0000" />
                     <Field label="Event Date" type="date" required />
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                     <Select label="Occasion" options={["Wedding", "Baby Shower", "Corporate", "Birthday", "Bridal", "Other"]} />
                     <Select label="Location" options={["Miami", "Fort Lauderdale", "Boca Raton", "Palm Beach", "Other"]} />
                   </div>
                   
                   <div>
                     <label className="block text-[0.65rem] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-3 ml-1">Event Vision & Details</label>
                     <textarea 
                        placeholder="Tell us about the vibe, colors, and specific elements you're dreaming of..."
                        rows={6} 
                        className="w-full rounded-3xl border border-border bg-background px-6 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all placeholder:text-muted-foreground/30" 
                     />
                   </div>
                   
                   <button className="group w-full rounded-full bg-ink text-background py-6 text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-luxe flex items-center justify-center gap-3">
                     Submit My Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                   
                   <p className="text-center text-[0.6rem] text-muted-foreground/60 uppercase tracking-widest">
                      Response time: <span className="text-foreground font-bold">Under 24 Hours</span>
                   </p>
                 </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- FAQ / SMALL CTA --- */}
      <section className="section-pad bg-secondary/20">
         <div className="container-luxe text-center">
            <div className="max-w-2xl mx-auto">
               <MessageCircle size={40} className="mx-auto text-gold mb-6" />
               <h2 className="font-display text-4xl mb-6">Common Questions</h2>
               <div className="grid md:grid-cols-2 gap-10 text-left mt-12">
                  {[
                    { q: "How far in advance should I book?", a: "We recommend 4–6 weeks for custom installations, though we sometimes have last-minute openings." },
                    { q: "Do you have a minimum spend?", a: "Our custom organic installations typically start at $800, which includes design and setup." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                       <p className="font-bold text-foreground">{item.q}</p>
                       <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative group">
      <label className="block text-[0.65rem] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-3 ml-1 group-focus-within:text-gold transition-colors">{label}</label>
      <input {...rest} className="w-full rounded-full border border-border bg-background px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all placeholder:text-muted-foreground/30" />
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="relative group">
      <label className="block text-[0.65rem] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-3 ml-1 group-focus-within:text-gold transition-colors">{label}</label>
      <select className="w-full rounded-full border border-border bg-background px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all appearance-none cursor-pointer">
        <option value="">Choose an Option</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

