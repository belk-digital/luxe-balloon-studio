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
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.05] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
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
  variant?: "dark" | "gold" | "ghost";
}) {
  const cls =
    variant === "dark"
      ? "bg-foreground text-background hover:bg-gold hover:text-ink"
      : variant === "gold"
        ? "bg-gradient-gold text-ink hover:shadow-gold"
        : "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background";
  const base = `inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm tracking-wide transition-luxe ${cls}`;
  if (to) return <Link to={to} className={base}>{children}<ArrowUpRight size={16} /></Link>;
  return <a href={href} className={base}>{children}<ArrowUpRight size={16} /></a>;
}
