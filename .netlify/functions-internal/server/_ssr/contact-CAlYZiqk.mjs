import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./ui-bits-DGOFPvWD.mjs";
import { h as heroImg } from "./hero-balloons-Bx8Y3er3.mjs";
import { a as Mail, P as Phone, I as Instagram, S as Sparkles, f as ArrowRight, c as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[50vh] flex items-center bg-ink overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Luxury decor", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe relative z-10 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl animate-float-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold mb-6", children: "Concierge Booking" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl md:text-8xl text-background leading-tight tracking-tighter", children: [
          "Let's style your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "Next Moment." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe grid lg:grid-cols-12 gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Reach Out", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "A custom proposal ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient-gold", children: "awaits." })
          ] }), description: "We prioritize quality over quantity, taking on a limited number of events to ensure absolute perfection for every client." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6", children: [{
            i: Mail,
            t: "Email Us",
            v: "hello@theballoongal.com"
          }, {
            i: Phone,
            t: "Call/Text",
            v: "(305) 555-0142"
          }, {
            i: Instagram,
            t: "Follow",
            v: "@_theballoongal"
          }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-secondary flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.i, { size: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.6rem] uppercase tracking-widest text-muted-foreground font-bold", children: item.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: item.v })
            ] })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 rounded-[3rem] bg-ink text-background relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-8 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 100 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-8", children: "Booking Timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2.5 top-2 bottom-2 w-px bg-background/10" }),
            [{
              t: "Inquiry",
              d: "Fill out the form with your event details."
            }, {
              t: "Design Call",
              d: "We discuss palette, theme, and scale."
            }, {
              t: "Proposal",
              d: "Receive a visual mood board & quote."
            }, {
              t: "Style Day",
              d: "We bring your vision to life on-site."
            }].map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 rounded-full bg-gold border-4 border-ink shrink-0 relative z-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl leading-none mb-2", children: step.t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-background/60", children: step.d })
              ] })
            ] }, idx))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center rounded-[3.5rem] bg-gradient-luxe p-12 text-center shadow-soft animate-float-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 rounded-full bg-gold text-ink flex items-center justify-center mb-8 shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 40 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl mb-4", children: "Inquiry Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-muted-foreground leading-relaxed", children: [
          "Thank you for choosing The Balloon Gal. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Our lead designer will contact you within 24 hours."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubmitted(false), className: "mt-10 text-xs uppercase tracking-widest font-bold text-gold hover:text-ink transition-colors", children: "Send Another Message" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[3.5rem] bg-card border border-border p-8 lg:p-14 shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-3 rounded-full bg-gold animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground", children: "Accepting 2024–2025 Bookings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSubmitted(true);
        }, className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Name", placeholder: "Alex Rivera", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", type: "email", placeholder: "alex@event.com", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", type: "tel", placeholder: "(305) 000-0000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Event Date", type: "date", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Occasion", options: ["Wedding", "Baby Shower", "Corporate", "Birthday", "Bridal", "Other"] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Location", options: ["Miami", "Fort Lauderdale", "Boca Raton", "Palm Beach", "Other"] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[0.65rem] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-3 ml-1", children: "Event Vision & Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "Tell us about the vibe, colors, and specific elements you're dreaming of...", rows: 6, className: "w-full rounded-3xl border border-border bg-background px-6 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all placeholder:text-muted-foreground/30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group w-full rounded-full bg-ink text-background py-6 text-sm font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-luxe flex items-center justify-center gap-3", children: [
            "Submit My Inquiry ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[0.6rem] text-muted-foreground/60 uppercase tracking-widest", children: [
            "Response time: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: "Under 24 Hours" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-secondary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 40, className: "mx-auto text-gold mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mb-6", children: "Common Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-10 text-left mt-12", children: [{
        q: "How far in advance should I book?",
        a: "We recommend 4–6 weeks for custom installations, though we sometimes have last-minute openings."
      }, {
        q: "Do you have a minimum spend?",
        a: "Our custom organic installations typically start at $800, which includes design and setup."
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: item.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.a })
      ] }, i)) })
    ] }) }) })
  ] });
}
function Field({
  label,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[0.65rem] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-3 ml-1 group-focus-within:text-gold transition-colors", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...rest, className: "w-full rounded-full border border-border bg-background px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all placeholder:text-muted-foreground/30" })
  ] });
}
function Select({
  label,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[0.65rem] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-3 ml-1 group-focus-within:text-gold transition-colors", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full rounded-full border border-border bg-background px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all appearance-none cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose an Option" }),
      options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: o }, o))
    ] })
  ] });
}
export {
  ContactPage as component
};
