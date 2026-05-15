import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, a as PageHeader, R as Reveal } from "./PageShell-B39ydFW4.js";
import { Link } from "@tanstack/react-router";
import { s as service1 } from "./service-driveways-DuLohezU.js";
import { s as service2 } from "./service-walls-W8vaWFf4.js";
import "react";
import "lucide-react";
import "./router-BoTqLLPi.js";
import "@tanstack/react-query";
const STEPS = [["01", "Consultation", "A site visit. We listen first, measure second. No obligation, no template proposal."], ["02", "Design & Quote", "Drawings, material schedule and a fixed quote — issued within 48 hours."], ["03", "Installation", "Set-out, base preparation, bedding, laying, jointing — overseen by a director."], ["04", "Final Inspection", "A walk-through with the client. We sign off only when you do."]];
function ServiceBlock({
  img,
  eyebrow,
  title,
  body,
  reverse = false
}) {
  return /* @__PURE__ */ jsx(Reveal, { delay: 0, children: /* @__PURE__ */ jsxs("section", { className: "container-luxe py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: `md:col-span-7 ${reverse ? "md:order-2" : ""}`, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[5/4] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: img, loading: "lazy", width: 1600, height: 1100, alt: title, className: "absolute inset-0 h-full w-full object-cover" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: `md:col-span-5 ${reverse ? "md:order-1" : ""}`, children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-5xl md:text-6xl leading-[0.95]", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-base leading-relaxed text-foreground/80 max-w-md", children: body }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "mt-8 inline-flex link-underline text-[11px] tracking-[0.22em] uppercase", children: "Discuss a project →" })
    ] })
  ] }) });
}
function ServicesPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Services", title: "Two services. One standard.", intro: "We do two things, well. Driveway and architectural surface installation, and engineered perimeter walls — both delivered against the same internal standard since 1995." }),
    /* @__PURE__ */ jsx(ServiceBlock, { img: service1, eyebrow: "Service 01", title: "Driveways.", body: "From a single residential entrance to a 1,200 m² estate forecourt — we set out, prepare, bed and lay every metre to a tolerance the surface itself never reveals. Includes drainage, edging and feature inlays." }),
    /* @__PURE__ */ jsx(ServiceBlock, { img: service2, eyebrow: "Service 02", title: "Perimeter walls.", body: "Engineered boundary walls in architectural block, finished with stacked stone cladding or smooth render. Built with footings, reinforcement and capping detailed by the team that designs them.", reverse: true }),
    /* @__PURE__ */ jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsx("section", { className: "bg-surface py-28 md:py-36 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-12 items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "The Process" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-5xl md:text-6xl leading-[0.95]", children: [
            "Four steps.",
            /* @__PURE__ */ jsx("br", {}),
            "No surprises."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "md:col-span-7 text-base leading-relaxed text-muted-foreground max-w-xl", children: "From the first conversation to the final walk-through — a sequence we have refined over three decades and several hundred installations." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-4 gap-px bg-border border border-border", children: STEPS.map(([n, t, d]) => /* @__PURE__ */ jsxs("div", { className: "bg-surface p-8 md:p-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-widest text-muted-foreground", children: n }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-2xl tracking-wide", children: t }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-foreground/75", children: d })
      ] }, n)) })
    ] }) }) })
  ] });
}
export {
  ServicesPage as component
};
