import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader } from "./ui-bits-DGOFPvWD.mjs";
import { c as cities, a as allCities } from "./site-data-CJT_axhB.mjs";
import { h as heroImg, g as gFtL } from "./gallery-outdoor-CaWkR6dz.mjs";
import { b as gCorporate, a as gBaby, g as gWedding } from "./gallery-corporate-BD7GJlAQ.mjs";
import { A as ArrowUpRight, j as House, B as Building2, k as TreePalm, b as MapPin, S as Sparkles } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function LocationsPage() {
  const cityImgs = {
    "miami": gWedding,
    "fort-lauderdale": gFtL,
    "boca-raton": gBaby,
    "palm-beach": gCorporate
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[60vh] flex items-center overflow-hidden bg-ink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "South Florida venues", className: "w-full h-full object-cover opacity-50 scale-105 animate-reveal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/90" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative z-10 pt-20 animate-float-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold mb-6", children: "Concierge Coverage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-8xl font-display text-background leading-[0.9] tracking-tighter", children: [
          "Serving South ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "Florida's" }),
          " Finest."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Primary Hubs", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Dedicated styling for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "the coast." })
      ] }), description: "We maintain a consistent presence in the region's most vibrant event centers, ensuring white-glove delivery and installation for every client." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-2 gap-10", children: cities.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/locations/$city", params: {
        city: c.slug
      }, className: "group relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-luxe transition-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cityImgs[c.slug] || heroImg, alt: c.name, className: "w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-10 left-10 right-10 flex items-end justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold mb-2", children: "Luxury Decor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl text-background", children: c.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-gold text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 24 }) })
        ] })
      ] }, c.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-12", children: [{
      i: House,
      t: "Oceanfront Estates",
      d: "We specialize in grand-scale outdoor installations for private residences along the Atlantic."
    }, {
      i: Building2,
      t: "Luxury Penthouses",
      d: "Expert coordination for high-rise installations in Miami's most exclusive towers."
    }, {
      i: TreePalm,
      t: "Country Clubs",
      d: "Sophisticated decor tailored for South Florida's prestigious golf and yacht clubs."
    }].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-12 rounded-[2.5rem] hover:bg-background transition-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-ink mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.i, { size: 24 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl mb-4", children: v.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: v.d })
    ] }, i)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Full Directory", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Where we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "style." })
      ] }), description: "If your city isn't listed below, we still likely serve your area. Our team travels up to 50 miles from our central Miami studio." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex flex-wrap gap-3", children: allCities.map((c) => {
        const slug = c.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/locations/$city", params: {
          city: slug
        }, className: "group flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-gold transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12, className: "text-gold/50 group-hover:text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: c })
        ] }, c);
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[4rem] bg-ink text-background p-16 lg:p-32 text-center relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 40, className: "mx-auto text-gold mb-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl mb-8 leading-tight", children: [
        "Ready to style ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "Event?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-background/60 mb-12 max-w-2xl mx-auto", children: "Our team is ready to bring the magic to your venue across South Florida." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-12 py-6 bg-gold text-ink rounded-full font-bold uppercase tracking-widest text-sm hover:bg-background transition-all", children: "Start My Proposal" })
    ] }) }) }) })
  ] });
}
export {
  LocationsPage as component
};
