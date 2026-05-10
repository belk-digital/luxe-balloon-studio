import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background">
      <div className="container-luxe py-24 lg:py-32 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6 space-y-8">
          <Logo isDark={true} />
          <p className="text-lg leading-relaxed text-background/60 max-w-xl">
            We don't just decorate rooms — we sculpt atmospheres. Luxury balloon decor & event styling across South Florida's most beautiful venues.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/_theballoongal"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center size-12 rounded-full border border-background/20 hover:bg-gradient-gold hover:text-ink hover:border-gold transition-all duration-500 hover:scale-110 shadow-soft"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-gold mb-8">Navigation</p>
          <ul className="space-y-4 text-base text-background/80">
            <li><Link to="/services" className="hover:text-gold transition-colors">Signature Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Portfolio Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/locations" className="hover:text-gold transition-colors">Service Areas</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Request a Quote</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-gold mb-8">Contact Information</p>
          <ul className="space-y-6 text-base text-background/80">
            <li className="flex items-center gap-3"><Mail size={18} className="text-gold" /> hello@theballoongal.com</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-gold" /> (305) 555-0142</li>
            <li className="flex items-start gap-3"><MapPin size={18} className="text-gold mt-1" /> Miami · Fort Lauderdale · Boca Raton · Palm Beach</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-10">
        <div className="container-luxe flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-background/40">
            © {new Date().getFullYear()} The Balloon Gal · Handcrafted in South Florida
          </p>
          <div className="flex gap-8 text-[0.6rem] uppercase tracking-[0.3em] text-background/30">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
