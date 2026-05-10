import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background mt-24">
      <div className="container-luxe py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h3 className="font-display text-3xl">
            The Balloon <span className="text-gradient-gold italic">Gal</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-background/70 max-w-md">
            Luxury balloon decor & event styling across South Florida. Custom
            installations for birthdays, baby showers, weddings, and corporate
            events that turn moments into experiences.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center size-10 rounded-full border border-background/20 hover:bg-gold hover:text-ink hover:border-gold transition-luxe"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-background/60">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-background/80">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/locations" className="hover:text-gold">Locations</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-background/60">Get in touch</p>
          <ul className="mt-5 space-y-3 text-sm text-background/80">
            <li className="flex items-center gap-2"><Mail size={14} /> hello@theballoongal.com</li>
            <li className="flex items-center gap-2"><Phone size={14} /> (305) 555-0142</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Serving all of South Florida</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-luxe py-6 text-xs text-background/50 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} The Balloon Gal. All rights reserved.</span>
          <span>Designed for unforgettable moments in South Florida.</span>
        </div>
      </div>
    </footer>
  );
}
