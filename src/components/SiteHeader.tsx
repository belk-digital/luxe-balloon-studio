import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-background/90 backdrop-blur-xl border-border/10 py-3 shadow-luxe" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className={`container-luxe flex items-center justify-between transition-colors duration-500 ${scrolled ? "text-ink" : "text-background"}`}>
        <Logo isDark={!scrolled} />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: scrolled ? "text-gold font-bold" : "text-white font-bold" }}
              inactiveProps={{ className: scrolled ? "text-ink/60 hover:text-ink" : "text-background/70 hover:text-white" }}
              className="text-[0.7rem] uppercase tracking-[0.3em] transition-all duration-500 relative group py-2"
            >
              {n.label}
              <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-500 rounded-full`} />
              {/* Active indicator dot */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-gold opacity-0 scale-0 transition-all duration-500 [[data-status=active]_&]:opacity-100 [[data-status=active]_&]:scale-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.2em] font-bold transition-all duration-500 shadow-luxe group hover:scale-105 active:scale-95 ${
              scrolled ? "bg-ink text-background hover:bg-gold hover:text-ink" : "bg-white text-ink hover:bg-gold"
            }`}
          >
            Book Your Date <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-3 rounded-full bg-ink/5 hover:bg-ink/10 transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[-1] bg-background/95 backdrop-blur-2xl animate-in fade-in duration-500">
          <div className="container-luxe pt-32 pb-12 h-full flex flex-col justify-between">
            <nav className="flex flex-col gap-8">
              {nav.map((n, i) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-5xl font-display text-foreground hover:text-gold transition-colors flex items-center justify-between group animate-float-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {n.label}
                  <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
            
            <div className="space-y-8 animate-float-up" style={{ animationDelay: "0.6s" }}>
              <div className="h-px bg-border/50" />
              <div className="flex flex-col gap-4 text-center">
                <p className="eyebrow text-gold">South Florida's Premier Studio</p>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-foreground text-background py-5 text-sm font-bold tracking-widest uppercase"
                >
                  Request A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


