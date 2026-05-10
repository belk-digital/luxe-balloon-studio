import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader, P as PrimaryButton } from "./ui-bits-DGOFPvWD.mjs";
import { s as services } from "./site-data-CJT_axhB.mjs";
import { h as heroImg } from "./hero-balloons-Bx8Y3er3.mjs";
import { g as gWedding, a as gBaby, b as gCorporate } from "./gallery-corporate-BD7GJlAQ.mjs";
import { A as ArrowUpRight, S as Sparkles, d as Palette, T as Truck, H as Heart, C as Check } from "../_libs/lucide-react.mjs";
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
const sBackdrop = "/assets/service-backdrop-DCGOaTXG.png";
function ServicesPage() {
  const serviceAssets = [gWedding, gBaby, gCorporate, sBackdrop];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[60vh] flex items-center bg-ink overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Luxury balloons", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl animate-float-up pt-32 lg:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold mb-6", children: "Bespoke Styling" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl md:text-8xl text-background leading-tight tracking-tighter", children: [
          "Elevating every ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "Experience." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xl text-background/60 leading-relaxed max-w-xl", children: "From intimate celebrations to massive activations, we bring an editorial eye to every installation across South Florida." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Our Expertise", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Custom styling for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "bespoke events." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { to: "/contact", variant: "ghost", children: "Get My Custom Proposal" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-12", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-soft hover:shadow-luxe transition-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: serviceAssets[i % serviceAssets.length], alt: s.title, className: "w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 p-12 flex flex-col justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity", children: "Premier Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl text-background mb-6", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/70 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700", children: s.blurb }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-md border border-background/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-background hover:bg-background hover:text-ink transition-all", children: [
            "Inquire Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
          ] }) })
        ] }) })
      ] }, s.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-pad bg-secondary/30 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 p-24 opacity-5 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 400, className: "text-ink" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "The Experience" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl mt-4", children: [
            "The path to an ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "extraordinary" }),
            " event."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: [{
          n: "01",
          t: "Design Discovery",
          i: Palette,
          d: "We begin with your vision. Through a collaborative mood board process, we align on palette, scale, and venue-specific opportunities."
        }, {
          n: "02",
          t: "The Installation",
          i: Truck,
          d: "Our team arrives on-site with meticulous timing. We hand-sculpt your installation, ensuring every organic curve is positioned for maximum impact."
        }, {
          n: "03",
          t: "Full Breakdown",
          i: Heart,
          d: "The luxury experience means zero stress for you. We return post-event to professionally strike the installation, leaving the venue pristine."
        }].map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-12 rounded-[3.5rem] relative hover:bg-background hover:shadow-soft transition-luxe", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 right-10 font-display text-5xl text-gold/20 select-none", children: step.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-2xl bg-gradient-gold flex items-center justify-center text-ink mb-10 shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.i, { size: 28 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-6", children: step.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-lg", children: step.d })
        ] }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe grid lg:grid-cols-2 gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[3rem] overflow-hidden aspect-square shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sBackdrop, alt: "Custom add-ons", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Signature Details", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "The elements that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "define the vibe." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: [{
          t: "Custom Neon Signage",
          d: "Add a personalized glow to your backdrops with custom-lettered neon signs."
        }, {
          t: "Floral Integration",
          d: "Sophisticated silk or fresh floral accents woven into organic balloon forms."
        }, {
          t: "Themed Rentals",
          d: "From vintage champagne carts to modern acrylic plinths and marquee letters."
        }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full border border-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-ink transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl mb-2", children: item.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.d })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { to: "/contact", variant: "dark", children: "Explore My Options" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-pad bg-ink text-background text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--blush-soft)_0%,_transparent_70%)] opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl mb-10 leading-tight", children: [
          "Let's design ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "legacy moment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { to: "/contact", variant: "gold", children: "Inquire Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 rounded-full border border-background/20 px-10 py-5 text-sm font-semibold text-background hover:bg-background hover:text-ink transition-all", children: [
            "Browse Gallery ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18 })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ServicesPage as component
};
