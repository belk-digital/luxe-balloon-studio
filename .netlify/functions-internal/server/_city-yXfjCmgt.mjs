import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PrimaryButton, S as SectionHeader } from "./_ssr/ui-bits-DGOFPvWD.mjs";
import { h as heroImg } from "./_ssr/hero-balloons-Bx8Y3er3.mjs";
import { g as gWedding, a as gBaby, b as gCorporate } from "./_ssr/gallery-corporate-BD7GJlAQ.mjs";
import { R as Route } from "./_ssr/router-DPgieXLG.mjs";
import { b as MapPin, A as ArrowUpRight, C as Check, H as Heart, S as Sparkles, h as Star, d as Palette, T as Truck, l as Calendar } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
function LocationPage() {
  const {
    city
  } = Route.useParams();
  const cityName = city.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[60vh] flex items-center bg-ink overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: `${cityName} balloon decor`, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl animate-float-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow text-gold mb-6 inline-flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
          " Service Area: ",
          cityName,
          ", Florida"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl text-background leading-tight", children: [
          "Luxury balloon ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "styling in ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif italic text-gradient-gold", children: [
            cityName,
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryButton, { to: "/contact", variant: "gold", children: [
            "Request ",
            cityName,
            " Quote"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 rounded-full border border-background/20 px-8 py-4 text-sm font-semibold text-background hover:bg-background hover:text-ink transition-all", children: [
            "View Portfolio ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16 })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe grid lg:grid-cols-12 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "The Luxe Standard", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Bespoke installations for ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif italic text-gradient-gold", children: [
            cityName,
            "'s"
          ] }),
          " finest celebrations."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg text-muted-foreground leading-relaxed space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Whether you're planning an intimate celebration at a private estate in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: cityName }),
            " or a large-scale corporate activation at one of the area's premier venues, The Balloon Gal provides the editorial-quality decor your event deserves."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            'We specialize in organic balloon garlands, custom backdrops, and full-venue transformations that move away from the traditional "party store" look and toward a sophisticated, high-end aesthetic. Our team understands the unique vibe of ',
            cityName,
            ", tailoring every palette and installation to reflect the local style."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 !pl-0 list-none", children: ["Custom color-matching to your event palette", "Professional-grade, biodegradable materials", "Full-service installation and breakdown", "Concierge design process from start to finish"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 rounded-full bg-gold/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12, className: "text-gold" }) }),
            item
          ] }, item)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[3rem] overflow-hidden shadow-luxe aspect-[4/5]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gWedding, alt: "Luxury styling", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-10 left-10 glass p-6 rounded-2xl max-w-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg leading-tight", children: "Editorial Quality" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-2 opacity-70", children: [
            "Serving the most beautiful venues across ",
            cityName,
            "."
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Local Favorites", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Trending in ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif italic text-gradient-gold", children: [
          cityName,
          "."
        ] })
      ] }), description: `Explore the most requested balloon installations and event styles for ${cityName} celebrations.` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 mt-16", children: [{
        t: "Private Estate Soirées",
        d: "Custom poolside garlands and grand entrance arches for home celebrations.",
        i: Heart
      }, {
        t: "Corporate Activations",
        d: "Brand-aligned installations for retail openings and corporate headquarters.",
        i: Sparkles
      }, {
        t: "Luxury Venue Styling",
        d: "Full ballroom transformations at the area's premier hotels and clubs.",
        i: Star
      }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-10 rounded-[2.5rem] hover:bg-background transition-luxe hover:shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-ink mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.i, { size: 24 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-4", children: item.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.d })
      ] }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Recent Work", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Designed in ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif italic text-gradient-gold", children: [
            cityName,
            "."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { to: "/gallery", variant: "ghost", children: "View Full Portfolio" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-6", children: [gBaby, gCorporate, heroImg].map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft hover:shadow-luxe transition-luxe group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "Gallery item", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-ink text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Local FAQ", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Common questions for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: cityName }),
        " events."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 space-y-12", children: [{
        q: `Do you charge a travel fee for ${cityName}?`,
        a: "Our standard service area includes many South Florida locations. Travel fees, if applicable, are calculated based on the distance from our studio and will be clearly outlined in your custom proposal."
      }, {
        q: `Which ${cityName} venues do you work with?`,
        a: `We've styled events at major hotels, private country clubs, and community centers throughout ${cityName}. We coordinate directly with your venue to handle the setup and breakdown logistics.`
      }, {
        q: "How do I book for a weekend event?",
        a: "Weekend dates in South Florida book up quickly! We recommend reaching out 4-6 weeks in advance to secure your date in our calendar."
      }].map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-gold", children: faq.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-background/60 leading-relaxed", children: faq.a })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-[3.5rem] p-16 lg:p-24 text-center shadow-luxe relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--blush-soft)_0%,_transparent_70%)] opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl mb-8 leading-tight", children: [
          "Ready to elevate your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: cityName }),
          " celebration?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { to: "/contact", variant: "dark", children: "Request My Custom Quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-muted-foreground uppercase tracking-widest font-bold", children: "Proposal sent within 24 hours" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16 }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.6rem] uppercase tracking-widest font-bold", children: "Organic Design" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { size: 16 }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.6rem] uppercase tracking-widest font-bold", children: "Custom Palettes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 16 }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.6rem] uppercase tracking-widest font-bold", children: "On-Time Setup" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16 }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.6rem] uppercase tracking-widest font-bold", children: "Est. 2018" })
      ] })
    ] }) })
  ] }, city);
}
export {
  LocationPage as component
};
