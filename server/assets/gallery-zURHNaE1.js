import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, a as PageHeader, R as Reveal } from "./PageShell-B39ydFW4.js";
import { g as gallery } from "./router-BoTqLLPi.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@tanstack/react-query";
const jewel = "/meckie-foundations/assets/gallery-jewel-bsNT8SXK.jpg";
const westlea = "/meckie-foundations/assets/gallery-westlea-BLcn69QL.jpg";
const southview = "/meckie-foundations/assets/gallery-southview-FdkBDdPV.jpg";
const before1 = "/meckie-foundations/assets/before-1-BhFcNzp1.jpg";
const before2 = "/meckie-foundations/assets/before-2-CllrkuvT.jpg";
const PROJECTS = [{
  title: "Greendale Residence",
  suburb: "Greendale, Harare",
  scope: "420 m² entry forecourt · Charcoal driveway pavers",
  after: gallery,
  before: before1
}, {
  title: "Jewel Earth Workshop",
  suburb: "Industrial, Harare",
  scope: "Workshop forecourt & perimeter wall · Heavy-duty pavers",
  after: jewel,
  before: before2
}, {
  title: "Westlea Project",
  suburb: "Westlea, Harare",
  scope: "Courtyard · Antique cobble herringbone",
  after: westlea,
  before: before1
}, {
  title: "Southview Park",
  suburb: "Hatfield, Harare",
  scope: "Curved entrance · Hexagonal pavers",
  after: southview,
  before: before2
}];
function GalleryPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Selected Work", title: "Our work speaks for itself.", intro: "A small set of recent installations, paired with their before — because the surface is only half the story." }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("section", { className: "container-luxe pb-32 space-y-32", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxs("article", { className: "grid md:grid-cols-12 gap-8 items-end", children: [
      /* @__PURE__ */ jsx("div", { className: `md:col-span-9 ${i % 2 ? "md:col-start-4" : ""}`, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[16/10] overflow-hidden group", children: /* @__PURE__ */ jsx("img", { src: p.after, loading: "lazy", width: 1600, height: 1100, alt: `${p.title} — after`, className: "img-zoom absolute inset-0 h-full w-full object-cover" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: `md:col-span-3 ${i % 2 ? "md:col-start-1 md:row-start-1" : ""}`, children: [
        /* @__PURE__ */ jsxs("p", { className: "eyebrow", children: [
          "Project 0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-3xl leading-[1.05] tracking-wide", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs uppercase tracking-widest text-muted-foreground", children: p.suburb }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm leading-relaxed text-foreground/75", children: p.scope }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex items-end gap-4", children: /* @__PURE__ */ jsxs("figure", { children: [
          /* @__PURE__ */ jsx("div", { className: "relative w-32 aspect-square overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: p.before, loading: "lazy", width: 400, height: 400, alt: `${p.title} — before`, className: "absolute inset-0 h-full w-full object-cover grayscale opacity-80" }) }),
          /* @__PURE__ */ jsx("figcaption", { className: "mt-2 text-[10px] tracking-widest uppercase text-muted-foreground", children: "Before" })
        ] }) })
      ] })
    ] }, p.title)) }) })
  ] });
}
export {
  GalleryPage as component
};
