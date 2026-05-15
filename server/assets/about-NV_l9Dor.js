import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, a as PageHeader, R as Reveal } from "./PageShell-B39ydFW4.js";
import { Link } from "@tanstack/react-router";
import { s as service1 } from "./service-driveways-DuLohezU.js";
import "react";
import "lucide-react";
import "./router-BoTqLLPi.js";
import "@tanstack/react-query";
const VALUES = [["Vision", "To set the architectural standard for outdoor surfaces in Southern Africa — surfaces that age into the property, not out of fashion."], ["Mission", "Engineer and install paving, slabs and perimeter walls of measurable, lasting quality, on every site, every time."], ["Values", "Precision · Restraint · Authority · Trust. The four words on every drawing we issue."]];
function AboutPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "About Meckie · Est. 1995", title: "Built on precision. Trusted since 1995.", intro: "Meckie Driveways (Pvt) Ltd — trading as Meckie Construction — has spent three decades engineering and installing premium outdoor surfaces across Harare. Two yards. One standard." }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0, children: /* @__PURE__ */ jsxs("section", { className: "container-luxe pb-24 grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "The Practice" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-4xl md:text-5xl leading-[1]", children: [
          "A quiet",
          /* @__PURE__ */ jsx("br", {}),
          "discipline."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/80", children: [
        /* @__PURE__ */ jsx("p", { children: "Meckie was founded in 1995 with a single conviction: a paved surface should be engineered with the same rigour as the building it serves. Thirty years later, that conviction is unchanged — and it now informs every set-out, every joint, every inspection on every site we run." }),
        /* @__PURE__ */ jsx("p", { children: "We operate from two yards in Harare — Hatfield and Waterfalls — and supply directly to private clients, architects and contractors. Our catalogue spans driveway pavers, cobbles, slabs, hexagonal pavers, coping, edging, blocks, cladding and feature pieces." }),
        /* @__PURE__ */ jsx("p", { children: "We don't subcontract our installation crews. The team that walks your property in week one is the team that hands it back to you in week three." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsx("section", { className: "container-luxe", children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[16/8] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: service1, loading: "lazy", width: 1920, height: 1100, alt: "Architectural driveway installation", className: "absolute inset-0 h-full w-full object-cover" }) }) }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsx("section", { className: "container-luxe py-28 md:py-40 grid gap-12 md:grid-cols-3", children: VALUES.map(([t, d]) => /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-8", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: t }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 font-display text-2xl leading-[1.15] tracking-wide", children: d })
    ] }, t)) }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsx("section", { className: "bg-surface py-28 md:py-36", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Leadership" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-4xl md:text-5xl leading-[1]", children: [
          "Hands",
          /* @__PURE__ */ jsx("br", {}),
          "on every",
          /* @__PURE__ */ jsx("br", {}),
          "site."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 space-y-6 text-base leading-relaxed text-foreground/80 max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { children: "Meckie is run by a small leadership team drawn from civil engineering, architectural drafting and master masonry. Every installation is signed off by a director — not delegated." }),
        /* @__PURE__ */ jsx("p", { children: "We hold ourselves to a single internal standard: would we be willing to put our name on a brass plate at the property's entrance? If not, the work doesn't leave the yard." }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex link-underline text-[11px] tracking-[0.22em] uppercase pt-4", children: "Speak with the team →" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 400, children: /* @__PURE__ */ jsxs("section", { className: "container-luxe py-28 md:py-36", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow text-center", children: "A few of the people we've worked with" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center text-muted-foreground", children: ["Greendale Estate", "Jewel Earth", "Studio H+H", "Westlea Residences", "Southview Park"].map((c) => /* @__PURE__ */ jsx("div", { className: "font-display text-xl tracking-widest opacity-70", children: c }, c)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
