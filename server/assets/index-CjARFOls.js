import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, R as Reveal } from "./PageShell-B39ydFW4.js";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { a as ProductCard, P as PRODUCTS } from "./ProductCard-RiEaHGb_.js";
import { h as hero, g as gallery } from "./router-BoTqLLPi.js";
import { s as service1 } from "./service-driveways-DuLohezU.js";
import { s as service2 } from "./service-walls-W8vaWFf4.js";
import "lucide-react";
import "@tanstack/react-query";
const STATS = [["30+", "Years of Practice"], ["21+", "Paver Products"], ["100+", "Projects Delivered"], ["1", "City. Harare."]];
const PILLARS = [["01", "Engineered to last", "Every paver, slab and edging is produced and laid to a tolerance the surface itself never reveals."], ["02", "Restraint as a discipline", "We design with one fewer line. The surface, the joint, the shadow — never the gimmick."], ["03", "Site-led precision", "Each project is set out, levelled and inspected against drawings before a single piece is bedded."], ["04", "A signature, not a trend", "Our installations are intended to age into the property, not out of fashion."]];
const TESTIMONIALS = [{
  q: "The driveway at our Borrowdale home is the first thing every visitor remarks on. Three years in — still flawless.",
  a: "Tendai M.",
  role: "Borrowdale, Harare"
}, {
  q: "Meckie's team set out our forecourt and perimeter walls with the precision of a surveyor. Quietly excellent.",
  a: "Architect's office",
  role: "Greendale Project"
}, {
  q: "We replaced a tired concrete drive. The result is unrecognisable — and the property valuation reflects it.",
  a: "R. & N. Chiwenga",
  role: "Mount Pleasant"
}];
function AnimatedCounter({
  end
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCount(0);
        let start = 0;
        const duration = 700;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, {
      threshold: 0.4
    });
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [end]);
  return /* @__PURE__ */ jsxs("div", { ref, children: [
    count,
    "+"
  ] });
}
function HomePage() {
  const featured = PRODUCTS.slice(0, 3);
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxs("section", { className: "\r\n    relative\r\n    h-[64vh]\r\n    sm:h-[68vh]\r\n    md:h-[72vh]\r\n    lg:h-[80vh]\r\n    min-h-[420px]\r\n    lg:min-h-[580px]\r\n    w-full\r\n    overflow-hidden\r\n    -mt-20\r\n    pt-20\r\n  ", children: [
      /* @__PURE__ */ jsx("img", { src: hero, alt: "Premium paved driveway at golden hour", width: 1920, height: 1280, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/55" }),
      /* @__PURE__ */ jsxs("div", { className: "\r\n    relative\r\n    h-full\r\n    container-luxe\r\n    flex\r\n    flex-col\r\n    justify-center\r\n    pt-2\r\n    sm:pt-4\r\n    md:pt-10\r\n    text-white\r\n    px-4\r\n    sm:px-6\r\n  ", children: [
        /* @__PURE__ */ jsx("p", { className: "\r\n    reveal\r\n    text-[9px]\r\n    sm:text-[11px]\r\n    tracking-[0.28em]\r\n    uppercase\r\n    opacity-90\r\n    mb-4\r\n  ", children: "Meckie Construction · Est. 1995" }),
        /* @__PURE__ */ jsxs("h1", { className: "\r\n    reveal\r\n    reveal-delay-1\r\n    font-display\r\n    text-[2rem]\r\n    min-[350px]:text-[2.6rem]\r\n    sm:text-5xl\r\n    md:text-7xl\r\n    lg:text-[6rem]\r\n    leading-[0.92]\r\n    tracking-[-0.04em]\r\n    max-w-[950px]\r\n    mb-8\r\n  ", children: [
          "Built for Lasting",
          /* @__PURE__ */ jsx("br", {}),
          "Impressions."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "\r\n    reveal\r\n    reveal-delay-2\r\n    max-w-[260px]\r\n    sm:max-w-xl\r\n    text-[15px]\r\n    sm:text-base\r\n    md:text-lg\r\n    opacity-90\r\n    leading-[1.7]\r\n    mt-1\r\n  ", children: "Premium paving and driveway solutions engineered for lasting beauty." }),
        /* @__PURE__ */ jsxs("div", { className: "\r\n    reveal\r\n    reveal-delay-3\r\n    mt-8\r\n    flex\r\n    flex-col\r\n    min-[300px]:flex-row\r\n    gap-4\r\n  ", children: [
          /* @__PURE__ */ jsx(Link, { to: "/products", className: "\r\n    inline-flex\r\n    justify-center\r\n    items-center\r\n    text-[10px]\r\n    tracking-[0.22em]\r\n    uppercase\r\n    font-medium\r\n    px-6\r\n    h-11\r\n    text-white\r\n  ", style: {
            background: "var(--brand-orange)"
          }, children: "View Products" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "\r\n    inline-flex\r\n    justify-center\r\n    items-center\r\n    text-[10px]\r\n    tracking-[0.22em]\r\n    uppercase\r\n    font-medium\r\n    px-6\r\n    h-11\r\n    border\r\n    border-white/70\r\n    hover:bg-white\r\n    hover:text-foreground\r\n    transition-colors\r\n  ", children: "Request a Quote" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container-luxe grid grid-cols-2 md:grid-cols-4 divide-x divide-border", children: STATS.map(([n, l]) => /* @__PURE__ */ jsxs("div", { className: "py-12 px-2 text-center first:pl-0", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-5xl md:text-6xl", children: n === "1" ? n : /* @__PURE__ */ jsx(AnimatedCounter, { end: parseInt(n) }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 eyebrow", children: l })
    ] }, l)) }) }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("section", { className: "container-luxe py-28 md:py-40 grid gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Why Meckie" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-4xl md:text-5xl leading-[1] max-w-sm", children: [
          "A practice built",
          /* @__PURE__ */ jsx("br", {}),
          "on precision."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm leading-relaxed text-muted-foreground max-w-sm", children: "Three decades of paving the most demanding residential and architectural projects in Harare. Our work is the quiet kind — the kind that holds." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-14", children: PILLARS.map(([n, t, d]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-widest text-muted-foreground", children: n }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-2xl tracking-wide", children: t }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/75", children: d })
      ] }, n)) })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("section", { className: "container-luxe pb-28 md:pb-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-14", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Featured Catalogue" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Selected surfaces." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/products", className: "hidden sm:inline-flex link-underline text-[11px] tracking-[0.22em] uppercase", children: "All products →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-x-10 gap-y-16", children: featured.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id)) })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("section", { className: "bg-surface py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 relative aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: gallery, loading: "lazy", width: 1600, height: 1200, alt: "Signature paved residence", className: "absolute inset-0 h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Signature Installation" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-4xl md:text-5xl leading-[1]", children: [
          "Greendale",
          /* @__PURE__ */ jsx("br", {}),
          "Residence."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm leading-relaxed text-muted-foreground max-w-md", children: "A 420 m² entry forecourt in charcoal driveway pavers, edged with honed wall caps and a radial fan at the threshold. Installed in 14 days." }),
        /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "mt-8 inline-flex link-underline text-[11px] tracking-[0.22em] uppercase", children: "See the gallery →" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("section", { className: "container-luxe py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-12 items-end", children: [
      /* @__PURE__ */ jsxs("h2", { className: "md:col-span-8 font-display text-5xl md:text-7xl leading-[0.95]", children: [
        "Begin with a",
        /* @__PURE__ */ jsx("br", {}),
        "site visit."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Share the property, the brief, the timeline. We'll respond with a measured plan within 48 hours." }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "mt-8 inline-flex items-center text-[11px] tracking-[0.22em] uppercase font-medium px-7 h-12 text-white", style: {
          background: "var(--brand-orange)"
        }, children: "Request a Quote" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("section", { className: "bg-surface py-28 md:py-36 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow text-center", children: "In their words" }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-12", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxs("figure", { className: "border-t border-border pt-8", children: [
        /* @__PURE__ */ jsxs("blockquote", { className: "font-display text-2xl leading-[1.15] tracking-wide", children: [
          "“",
          t.q,
          "”"
        ] }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-8 text-xs uppercase tracking-widest text-muted-foreground", children: [
          t.a,
          " · ",
          t.role
        ] })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("section", { className: "container-luxe py-28 md:py-36 grid md:grid-cols-2 gap-10", children: [{
      img: service1,
      title: "Driveways",
      to: "/services"
    }, {
      img: service2,
      title: "Perimeter Walls",
      to: "/services"
    }].map((s) => /* @__PURE__ */ jsxs(Link, { to: s.to, className: "group block", children: [
      /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: s.img, loading: "lazy", width: 1600, height: 1100, alt: s.title, className: "img-zoom absolute inset-0 h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl tracking-wide", children: s.title }),
        /* @__PURE__ */ jsx("span", { className: "link-underline text-[11px] tracking-[0.22em] uppercase", children: "View →" })
      ] })
    ] }, s.title)) }) })
  ] });
}
export {
  HomePage as component
};
