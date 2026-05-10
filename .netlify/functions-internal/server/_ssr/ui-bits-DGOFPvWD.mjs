import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-5", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 leading-[0.9] text-foreground", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: description })
  ] });
}
function PrimaryButton({
  to,
  href,
  children,
  variant = "dark"
}) {
  const cls = variant === "dark" ? "bg-foreground text-background hover:bg-gold hover:text-ink hover:scale-105" : variant === "gold" ? "bg-gradient-gold text-ink hover:shadow-gold hover:scale-105" : variant === "glass" ? "glass text-foreground hover:bg-foreground hover:text-background hover:scale-105" : "bg-transparent text-foreground border border-foreground/30 hover:border-foreground hover:scale-105";
  const base = `inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-luxe ${cls} active:scale-95`;
  if (to) return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: base, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18, className: "opacity-70" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: base, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18, className: "opacity-70" })
  ] });
}
export {
  PrimaryButton as P,
  SectionHeader as S
};
