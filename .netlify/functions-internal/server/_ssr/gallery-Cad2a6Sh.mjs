import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader } from "./ui-bits-DGOFPvWD.mjs";
import { a as gBaby, g as gWedding, b as gCorporate } from "./gallery-corporate-BD7GJlAQ.mjs";
import { g as gFtL, h as heroImg } from "./gallery-outdoor-CaWkR6dz.mjs";
import { g as gBridal } from "./gallery-bridal-B2cVn-HT.mjs";
import { h as heroImg$1 } from "./hero-balloons-Bx8Y3er3.mjs";
import { e as Camera, S as Sparkles, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
const items = [{
  src: gFtL,
  cat: "Birthdays",
  alt: "Pink and gold birthday balloon arch Miami"
}, {
  src: gBaby,
  cat: "Baby Showers",
  alt: "Neutral baby shower balloon decor"
}, {
  src: gWedding,
  cat: "Weddings",
  alt: "White and gold wedding balloon installation"
}, {
  src: gCorporate,
  cat: "Corporate",
  alt: "Corporate balloon backdrop Miami"
}, {
  src: gBridal,
  cat: "Bridal",
  alt: "Blush bridal shower balloon decor"
}, {
  src: heroImg,
  cat: "Outdoor",
  alt: "Tropical outdoor balloon arch"
}, {
  src: heroImg$1,
  cat: "Luxury",
  alt: "Champagne luxury balloon arch"
}, {
  src: gFtL,
  cat: "Birthdays",
  alt: "Pink luxury birthday party"
}, {
  src: gWedding,
  cat: "Weddings",
  alt: "Wedding head table balloon installation"
}];
const cats = ["All", "Birthdays", "Baby Showers", "Weddings", "Corporate", "Bridal", "Outdoor", "Luxury"];
function GalleryPage() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[45vh] flex items-center bg-ink overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg$1, alt: "Gallery hero", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe relative z-10 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl animate-float-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold mb-6", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl md:text-8xl text-background leading-tight tracking-tighter", children: [
          "The Art of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "Celebration." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Curated Work", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Memories captured in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "living color." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pb-2", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: `px-6 py-2.5 rounded-full text-[0.6rem] uppercase tracking-[0.2em] font-bold border transition-luxe ${active === c ? "bg-ink text-background border-ink shadow-soft" : "border-border text-muted-foreground hover:border-gold hover:text-gold"}`, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:_balance]", children: filtered.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 break-inside-avoid relative group rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-luxe transition-luxe cursor-pointer", style: {
        animationDelay: `${i * 0.1}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.src, alt: it.alt, loading: "lazy", className: "w-full h-auto transition-transform duration-[1.5s] group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-background/10 backdrop-blur-md border border-background/20 flex items-center justify-center text-background mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background font-display text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75", children: it.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-8 bg-gold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-6 left-6 text-background/80 bg-ink/30 backdrop-blur px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold group-hover:opacity-0 transition-opacity", children: it.cat })
      ] }, i)) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-32 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground italic", children: "No installations found in this category. Check back soon!" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-pad bg-ink text-background relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--blush-soft)_0%,_transparent_70%)] opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative z-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 40, className: "mx-auto text-gold mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl max-w-4xl mx-auto leading-tight", children: [
          '"The Balloon Gal transformed our venue into something ',
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "straight out of a magazine." }),
          ' Unparalleled detail."'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full border border-gold p-1 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full bg-secondary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold", children: "Sofia R. · Miami Bride" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl mb-8", children: [
        "Ready to be our next ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "success story?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-3 rounded-full bg-ink text-background px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-luxe group", children: [
        "Start My Design ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18, className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
      ] })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
