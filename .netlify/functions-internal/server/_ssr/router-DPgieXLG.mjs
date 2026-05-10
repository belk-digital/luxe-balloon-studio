import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as ArrowUpRight, X, M as Menu, I as Instagram, a as Mail, P as Phone, b as MapPin, c as MessageCircle } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-CAtasCkK.css";
function Logo({ className = "", isDark = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: `flex items-center gap-3 group transition-all duration-500 hover:scale-105 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start leading-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-serif text-[0.9rem] md:text-[1rem] tracking-[0.1em] uppercase ${isDark ? "text-background" : "text-ink"}`, children: "The Balloon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-2xl md:text-3xl text-gradient-gold tracking-tight -mt-1", children: "Gal." })
  ] }) });
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-background/90 backdrop-blur-xl border-border/10 py-3 shadow-luxe" : "bg-transparent border-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `container-luxe flex items-center justify-between transition-colors duration-500 ${scrolled ? "text-ink" : "text-background"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { isDark: !scrolled }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-10", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: n.to,
              activeOptions: { exact: n.to === "/" },
              activeProps: { className: scrolled ? "text-gold font-bold" : "text-white font-bold" },
              inactiveProps: { className: scrolled ? "text-ink/60 hover:text-ink" : "text-background/70 hover:text-white" },
              className: "text-[0.7rem] uppercase tracking-[0.3em] transition-all duration-500 relative group py-2",
              children: [
                n.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-500 rounded-full` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-gold opacity-0 scale-0 transition-all duration-500 [[data-status=active]_&]:opacity-100 [[data-status=active]_&]:scale-100" })
              ]
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: `inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.2em] font-bold transition-all duration-500 shadow-luxe group hover:scale-105 active:scale-95 ${scrolled ? "bg-ink text-background hover:bg-gold hover:text-ink" : "bg-white text-ink hover:bg-gold"}`,
              children: [
                "Book Your Date ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14, className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Open menu",
              onClick: () => setOpen((v) => !v),
              className: "lg:hidden p-3 rounded-full bg-ink/5 hover:bg-ink/10 transition-colors",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden fixed inset-0 z-[-1] bg-background/95 backdrop-blur-2xl animate-in fade-in duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe pt-32 pb-12 h-full flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-8", children: nav.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: "text-5xl font-display text-foreground hover:text-gold transition-colors flex items-center justify-between group animate-float-up",
              style: { animationDelay: `${i * 0.1}s` },
              children: [
                n.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 32, className: "opacity-0 group-hover:opacity-100 transition-opacity" })
              ]
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 animate-float-up", style: { animationDelay: "0.6s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border/50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold", children: "South Florida's Premier Studio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setOpen(false),
                  className: "inline-flex items-center justify-center rounded-full bg-foreground text-background py-5 text-sm font-bold tracking-widest uppercase",
                  children: "Request A Quote"
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-ink text-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe py-24 lg:py-32 grid gap-16 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { isDark: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-background/60 max-w-xl", children: "We don't just decorate rooms — we sculpt atmospheres. Luxury balloon decor & event styling across South Florida's most beautiful venues." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://instagram.com/_theballoongal",
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "Instagram",
            className: "inline-flex items-center justify-center size-12 rounded-full border border-background/20 hover:bg-gradient-gold hover:text-ink hover:border-gold transition-all duration-500 hover:scale-110 shadow-soft",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 20 })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold mb-8", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-base text-background/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-gold transition-colors", children: "Signature Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "hover:text-gold transition-colors", children: "Portfolio Gallery" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-gold transition-colors", children: "Our Story" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/locations", className: "hover:text-gold transition-colors", children: "Service Areas" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-gold transition-colors", children: "Request a Quote" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold mb-8", children: "Contact Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-6 text-base text-background/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, className: "text-gold" }),
            " hello@theballoongal.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18, className: "text-gold" }),
            " (305) 555-0142"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18, className: "text-gold mt-1" }),
            " Miami · Fort Lauderdale · Boca Raton · Palm Beach"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-background/10 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.2em] text-background/40", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " The Balloon Gal · Handcrafted in South Florida"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 text-[0.6rem] uppercase tracking-[0.3em] text-background/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: "Terms of Service" })
      ] })
    ] }) })
  ] });
}
function FloatingCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "https://wa.me/13055550142",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-5 py-3 shadow-luxe hover:bg-gold hover:text-ink transition-luxe",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm tracking-wide hidden sm:inline", children: "Quick Quote" })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl text-foreground", children: "This page floated away" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm hover:bg-gold hover:text-ink transition-luxe",
        children: "Back home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please try again." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-foreground text-background px-6 py-3 text-sm",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border border-border px-6 py-3 text-sm", children: "Home" })
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Balloon Gal | Luxury Balloon Decor South Florida" },
      {
        name: "description",
        content: "Luxury balloon decor & event styling across South Florida. Custom organic balloon garlands, arches, and installations for birthdays, baby showers, weddings, and corporate events in Miami, Fort Lauderdale, Boca Raton & Palm Beach."
      },
      { name: "author", content: "The Balloon Gal" },
      { property: "og:title", content: "The Balloon Gal | Luxury Balloon Decor South Florida" },
      {
        property: "og:description",
        content: "Custom luxury balloon installations for unforgettable South Florida events."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "The Balloon Gal",
          image: "https://theballoongal.com/og.jpg",
          description: "Luxury balloon decor and event styling across South Florida.",
          telephone: "+1-305-555-0142",
          email: "hello@theballoongal.com",
          address: {
            "@type": "PostalAddress",
            addressRegion: "FL",
            addressCountry: "US",
            addressLocality: "Miami"
          },
          areaServed: [
            "Miami",
            "Fort Lauderdale",
            "Boca Raton",
            "Palm Beach",
            "Hollywood",
            "Pembroke Pines",
            "Coral Springs",
            "Weston",
            "Delray Beach",
            "Aventura",
            "Kendall",
            "Hialeah"
          ],
          priceRange: "$$$"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./services-uVlagNxJ.mjs");
const Route$7 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services | Luxury Balloon Decor & Event Styling — The Balloon Gal"
    }, {
      name: "description",
      content: "Explore our premium balloon decor services: Organic Garlands, Custom Backdrops, Corporate Branding, and Wedding Styling across South Florida."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./locations-BFsOu0JM.mjs");
const Route$6 = createFileRoute("/locations")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./gallery-Cad2a6Sh.mjs");
const Route$5 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Portfolio | Luxury Balloon Decor Gallery — The Balloon Gal"
    }, {
      name: "description",
      content: "Explore our editorial gallery of luxury balloon installations across South Florida's most prestigious events."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-CAlYZiqk.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact | Request Your Custom Proposal — The Balloon Gal"
    }, {
      name: "description",
      content: "Inquire about our luxury balloon decor services. Serving Miami, Fort Lauderdale, Boca Raton, and Palm Beach with bespoke event styling."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-Bj8gLWfi.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Our Story | The Balloon Gal — South Florida's Premier Event Stylist"
    }, {
      name: "description",
      content: "Discover the artistry and mission behind The Balloon Gal. We redefine celebrations with editorial-grade balloon installations across Miami, Palm Beach, and beyond."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-Bn9jGv94.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The Balloon Gal | Luxury Balloon Decor & Event Styling South Florida"
    }, {
      name: "description",
      content: "South Florida's premier luxury balloon studio. Artisan installations for Miami, Fort Lauderdale, Boca Raton, and Palm Beach."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-B6xTbZD1.mjs");
const Route$1 = createFileRoute("/locations/")({
  head: () => ({
    meta: [{
      title: "Service Areas | Luxury Balloon Decor Across South Florida"
    }, {
      name: "description",
      content: "The Balloon Gal serves Miami, Fort Lauderdale, Boca Raton, Palm Beach and all of South Florida with luxury balloon decor and event styling."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_city-yXfjCmgt.mjs");
const Route = createFileRoute("/locations/$city")({
  head: ({
    params
  }) => {
    const cityName = params.city.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return {
      meta: [{
        title: `Luxury Balloon Decor ${cityName} | The Balloon Gal`
      }, {
        name: "description",
        content: `Premium balloon installations and event styling in ${cityName}, FL. Custom organic garlands, arches, and backdrops for weddings, birthdays, and corporate events.`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$7.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const LocationsRoute = Route$6.update({
  id: "/locations",
  path: "/locations",
  getParentRoute: () => Route$8
});
const GalleryRoute = Route$5.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const LocationsIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => LocationsRoute
});
const LocationsCityRoute = Route.update({
  id: "/$city",
  path: "/$city",
  getParentRoute: () => LocationsRoute
});
const LocationsRouteChildren = {
  LocationsCityRoute,
  LocationsIndexRoute
};
const LocationsRouteWithChildren = LocationsRoute._addFileChildren(
  LocationsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  LocationsRoute: LocationsRouteWithChildren,
  ServicesRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
