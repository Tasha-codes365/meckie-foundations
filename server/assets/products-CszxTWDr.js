import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, a as PageHeader, R as Reveal } from "./PageShell-B39ydFW4.js";
import { useState, useMemo } from "react";
import { P as PRODUCTS, C as CATEGORIES, a as ProductCard } from "./ProductCard-RiEaHGb_.js";
import { Search } from "lucide-react";
import "@tanstack/react-router";
import "./router-BoTqLLPi.js";
import "@tanstack/react-query";
function ProductsPage() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (active !== "All" && p.category !== active) return false;
      if (q.trim() && !`${p.name} ${p.spec} ${p.description}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [active, q]);
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "The Catalogue", title: "A library of architectural surfaces.", intro: "Twenty-one engineered products — from driveway pavers to feature medallions — produced to a single standard." }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0, children: /* @__PURE__ */ jsx("section", { className: "container-luxe pb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-1 gap-y-2 -ml-3", children: ["All", ...CATEGORIES].map((c) => {
        const isActive = active === c;
        return /* @__PURE__ */ jsxs("button", { onClick: () => setActive(c), className: `relative px-3 py-2 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`, children: [
          c,
          isActive && /* @__PURE__ */ jsx("span", { className: "absolute left-3 right-3 -bottom-px h-px", style: {
            background: "var(--brand-orange)"
          } })
        ] }, c);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-xs w-full", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search the catalogue", className: "w-full bg-transparent border-b border-border focus:border-foreground outline-none pl-7 pr-2 py-3 text-sm placeholder:text-muted-foreground transition-colors" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsx("section", { className: "container-luxe pb-32", children: filtered.length === 0 ? /* @__PURE__ */ jsx("p", { className: "py-24 text-center text-muted-foreground", children: "No products match that search." }) : /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20", children: filtered.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) }) }) })
  ] });
}
export {
  ProductsPage as component
};
