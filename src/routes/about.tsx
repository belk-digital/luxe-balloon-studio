import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, PrimaryButton } from "@/components/ui-bits";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | The Balloon Gal — South Florida Event Stylist" },
      { name: "description", content: "Meet the woman behind The Balloon Gal — a South Florida luxury balloon decorator and event stylist transforming celebrations into editorial-worthy experiences." },
      { property: "og:title", content: "About The Balloon Gal" },
      { property: "og:description", content: "A South Florida luxury balloon decorator and event stylist." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-5 leading-[1.02]">
              Hi, I'm the <em className="italic text-gradient-gold">Balloon Gal.</em>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
              I started The Balloon Gal in 2018 with one mission: bring an editorial,
              luxury aesthetic to a category that desperately needed it. South Florida
              hosts deserve more than party-store balloons — they deserve installations
              that feel like the magazine spread of their celebration.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Today, my studio styles 200+ events a year across Miami, Fort Lauderdale,
              Boca Raton, and Palm Beach — birthdays, weddings, brand activations, and
              every moment in between. Each install is fully custom, designed for the
              camera, and styled with the kind of detail that turns guests into
              repeat clients.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "6+", l: "Years" },
                { v: "500+", l: "Events" },
                { v: "38K", l: "Followers" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl text-foreground">{s.v}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <PrimaryButton to="/contact" variant="dark">Work With Me</PrimaryButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-blush rounded-[2.5rem] -z-10" />
              <img src={portrait} alt="The Balloon Gal — South Florida event stylist" width={1024} height={1280} loading="lazy" className="rounded-[2rem] shadow-luxe" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="What We Believe"
            title={<>A studio built around <em className="italic text-gradient-gold">three values.</em></>}
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { t: "Editorial First", d: "Every install is composed for the camera. Color, scale, and styling are intentional." },
              { t: "Custom Always", d: "No two events look alike. Your story, palette, and venue drive the design." },
              { t: "Effortless Experience", d: "Concierge process, on-time install, and full breakdown — so you can be present." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-background p-8 border border-border">
                <h3 className="font-display text-2xl">{v.t}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
