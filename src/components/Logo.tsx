import { Link } from "@tanstack/react-router";

export function Logo({ className = "", isDark = false }: { className?: string; isDark?: boolean }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group transition-all duration-500 hover:scale-105 ${className}`}>
      <div className="flex flex-col items-start leading-none">
        <span className={`font-serif text-[0.9rem] md:text-[1rem] tracking-[0.1em] uppercase ${isDark ? 'text-background' : 'text-ink'}`}>
          The Balloon
        </span>
        <span className="font-serif italic text-2xl md:text-3xl text-gradient-gold tracking-tight -mt-1">
          Gal.
        </span>
      </div>
    </Link>
  );
}




