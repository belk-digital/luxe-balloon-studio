import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 leading-[0.9] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  to,
  href,
  children,
  variant = "dark",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "dark" | "gold" | "ghost" | "glass";
}) {
  const cls =
    variant === "dark"
      ? "bg-foreground text-background hover:bg-gold hover:text-ink hover:scale-105"
      : variant === "gold"
        ? "bg-gradient-gold text-ink hover:shadow-gold hover:scale-105"
        : variant === "glass"
          ? "glass text-foreground hover:bg-foreground hover:text-background hover:scale-105"
          : "bg-transparent text-foreground border border-foreground/30 hover:border-foreground hover:scale-105";
  const base = `inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-luxe ${cls} active:scale-95`;
  if (to) return <Link to={to} className={base}>{children}<ArrowUpRight size={18} className="opacity-70" /></Link>;
  return <a href={href} className={base}>{children}<ArrowUpRight size={18} className="opacity-70" /></a>;
}
