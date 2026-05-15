import { jsxs, jsx } from "react/jsx-runtime";
const driveway = "/meckie-foundations/assets/product-driveway-pavers-60eXgJgg.jpg";
const cobbles = "/meckie-foundations/assets/product-cobbles-DmLDp8f4.jpg";
const hexagonal = "/meckie-foundations/assets/product-hexagonal-DnIzbGwc.jpg";
const coping = "/meckie-foundations/assets/product-coping-BW33C-tE.jpg";
const cladding = "/meckie-foundations/assets/product-cladding-CNI2cB2b.jpg";
const feature = "/meckie-foundations/assets/product-feature-BVrxaVDp.jpg";
const CATEGORIES = [
  "Driveway Pavers",
  "Cobbles & Slabs",
  "Hexagonal Pavers",
  "Coping & Edging",
  "Blocks & Cladding",
  "Feature Pieces"
];
const PRODUCTS = [
  { id: "dp-60", name: "Standard Driveway Paver 60mm", category: "Driveway Pavers", price: "$0.85 / piece", spec: "200×100×60mm · Charcoal, Grey, Terracotta", description: "The architectural workhorse — engineered for daily vehicle load with a refined surface finish.", image: driveway },
  { id: "dp-80", name: "Heavy-Duty Paver 80mm", category: "Driveway Pavers", price: "$1.10 / piece", spec: "200×100×80mm · Reinforced concrete", description: "Reinforced profile for high-traffic and commercial entrances. Quiet underfoot, decisive in load.", image: driveway },
  { id: "dp-bond", name: "Bond Paver", category: "Driveway Pavers", price: "$0.95 / piece", spec: "225×112×60mm · Interlocking", description: "A tighter geometric weave for residential driveways with a contemporary edge.", image: driveway },
  { id: "cs-cob", name: "Antique Cobble", category: "Cobbles & Slabs", price: "$1.20 / piece", spec: "100×100×60mm · Tumbled finish", description: "Hand-tumbled edges for a quietly aged, courtyard-quality surface.", image: cobbles },
  { id: "cs-slab", name: "Architectural Slab 400", category: "Cobbles & Slabs", price: "$3.40 / piece", spec: "400×400×40mm · Smooth honed", description: "Generous format for terraces and patios — restrained, modern, monumental.", image: cobbles },
  { id: "cs-mini", name: "Mini Cobble", category: "Cobbles & Slabs", price: "$0.65 / piece", spec: "100×50×60mm · Sandstone, Ash", description: "A finer scale for pathways, courtyards and decorative bands.", image: cobbles },
  { id: "hx-200", name: "Hexagonal Paver 200", category: "Hexagonal Pavers", price: "$1.45 / piece", spec: "200mm flat-to-flat · 60mm thick", description: "Six-sided geometry that draws a precise, architectural line through any landscape.", image: hexagonal },
  { id: "hx-150", name: "Hexagonal Paver 150", category: "Hexagonal Pavers", price: "$1.10 / piece", spec: "150mm flat-to-flat · 50mm thick", description: "A finer hex module for pedestrian areas and feature courtyards.", image: hexagonal },
  { id: "ce-bull", name: "Bullnose Coping", category: "Coping & Edging", price: "$4.20 / metre", spec: "300×600×40mm · Honed white", description: "A soft, rounded profile for pool perimeters and elevated terraces.", image: coping },
  { id: "ce-edge", name: "Garden Edge Strip", category: "Coping & Edging", price: "$2.80 / metre", spec: "1000×80×40mm · Charcoal, Stone", description: "Disciplined linework — defines lawns, beds and paved transitions.", image: coping },
  { id: "ce-step", name: "Step Tread", category: "Coping & Edging", price: "$6.50 / piece", spec: "1200×350×50mm · Anti-slip", description: "Long-format treads for monolithic, modern stair runs.", image: coping },
  { id: "bc-stack", name: "Stacked Stone Cladding", category: "Blocks & Cladding", price: "$36 / m²", spec: "Sandstone, Slate · Ledged finish", description: "Architectural skin for perimeter walls, columns and feature elevations.", image: cladding },
  { id: "bc-block", name: "Architectural Block 200", category: "Blocks & Cladding", price: "$1.10 / piece", spec: "390×190×190mm · Hollow", description: "A precision masonry unit — engineered for boundary walls and screens.", image: cladding },
  { id: "bc-cap", name: "Wall Cap", category: "Blocks & Cladding", price: "$3.20 / piece", spec: "300×300×60mm · Weathered", description: "A clean architectural cap to crown perimeter walls.", image: cladding },
  { id: "fp-med", name: "Compass Medallion", category: "Feature Pieces", price: "$185 / piece", spec: "Ø 1200mm · Cast concrete relief", description: "A centrepiece for forecourts and entrance driveways. One singular gesture.", image: feature },
  { id: "fp-fan", name: "Radial Fan Set", category: "Feature Pieces", price: "$240 / set", spec: "Ø 2400mm · 32 pieces", description: "A full radial composition for circular driveways and grand entrances.", image: feature },
  { id: "fp-band", name: "Inlay Band", category: "Feature Pieces", price: "$28 / metre", spec: "200mm wide · Contrasting tone", description: "A linear inlay to articulate paths, thresholds and boundaries.", image: feature }
];
const WA = "https://wa.me/263772000000?text=";
function ProductCard({ product }) {
  const enquire = `${WA}${encodeURIComponent(`Hello Meckie, I'd like to enquire about: ${product.name} (${product.id}).`)}`;
  return /* @__PURE__ */ jsxs("article", { className: "group", children: [
    /* @__PURE__ */ jsx("div", { className: "relative aspect-square overflow-hidden bg-surface-2", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: product.image,
        alt: product.name,
        loading: "lazy",
        width: 1024,
        height: 1024,
        className: "img-zoom h-full w-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "pt-6 flex items-start justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: product.category }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl tracking-wide", children: product.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: product.spec })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-right shrink-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", style: { color: "var(--brand-orange)" }, children: product.price }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-foreground/75 max-w-md", children: product.description }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: enquire,
        target: "_blank",
        rel: "noreferrer",
        className: "mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium link-underline",
        children: "Enquire on WhatsApp →"
      }
    )
  ] });
}
export {
  CATEGORIES as C,
  PRODUCTS as P,
  ProductCard as a
};
