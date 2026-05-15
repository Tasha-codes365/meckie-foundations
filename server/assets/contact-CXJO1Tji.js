import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, a as PageHeader, R as Reveal } from "./PageShell-B39ydFW4.js";
import { useState } from "react";
import "@tanstack/react-router";
import "lucide-react";
import "./router-BoTqLLPi.js";
import "@tanstack/react-query";
const LOCATIONS = [{
  name: "Hatfield Yard",
  address: "7 Dawlish Road, Chadcombe, Hatfield, Harare",
  map: "https://www.google.com/maps?q=7+Dawlish+Road+Chadcombe+Hatfield+Harare&output=embed"
}, {
  name: "Waterfalls Yard",
  address: "3243 Masotsha Ndlovu, Waterfalls, Harare",
  map: "https://www.google.com/maps?q=3243+Masotsha+Ndlovu+Waterfalls+Harare&output=embed"
}];
function ContactPage() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Contact", title: "Begin a project with Meckie.", intro: "Tell us about the property, the brief and the timeline. We'll respond with a measured plan within 48 hours." }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("section", { className: "container-luxe pb-32 grid md:grid-cols-12 gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 space-y-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Direct" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-4 text-base", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+263772989306", className: "link-underline", children: "+263 772 989 306" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:sales@meckieconstruction.co.zw", className: "link-underline", children: "sales@meckieconstruction.co.zw" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/+263719989306", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-3 mt-2 px-5 h-11 text-[11px] tracking-[0.22em] uppercase font-medium text-white", style: {
              background: "var(--brand-green)"
            }, children: "WhatsApp the studio" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-10", children: LOCATIONS.map((loc) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: loc.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed", children: loc.address }),
          /* @__PURE__ */ jsx("div", { className: "mt-5 aspect-[16/10] overflow-hidden border border-border", children: /* @__PURE__ */ jsx("iframe", { src: loc.map, title: `Map of ${loc.name}`, loading: "lazy", className: "h-full w-full grayscale contrast-[0.95]", referrerPolicy: "no-referrer-when-downgrade" }) })
        ] }, loc.name)) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Hours" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: [
            "Mon – Fri · 08:00 – 17:00",
            /* @__PURE__ */ jsx("br", {}),
            "Sat · 08:00 – 13:00"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "space-y-8", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Project Enquiry" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx(FormField, { label: "Full name", name: "name", required: true }),
          /* @__PURE__ */ jsx(FormField, { label: "Email", type: "email", name: "email", required: true }),
          /* @__PURE__ */ jsx(FormField, { label: "Phone", name: "phone" }),
          /* @__PURE__ */ jsx(FormField, { label: "Suburb / location", name: "suburb" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx(FormSelect, { label: "Service", name: "service", options: ["Driveway", "Perimeter wall", "Both", "Materials only", "Other"] }),
          /* @__PURE__ */ jsx(FormSelect, { label: "Approximate area", name: "area", options: ["Under 100 m²", "100 – 300 m²", "300 – 600 m²", "600 m²+", "Not yet sure"] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "eyebrow block", children: "Project notes" }),
          /* @__PURE__ */ jsx("textarea", { name: "notes", rows: 5, className: "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base resize-none transition-colors", placeholder: "Tell us about the property, the brief and your ideal start date." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
          /* @__PURE__ */ jsx("button", { type: "submit", className: "inline-flex items-center text-[11px] tracking-[0.22em] uppercase font-medium px-8 h-12 text-white", style: {
            background: "var(--brand-orange)"
          }, children: "Send Enquiry" }),
          sent && /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-foreground/80", children: "Thank you. A director will respond within 48 hours." })
        ] })
      ] }) })
    ] }) })
  ] });
}
function FormField({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxs("label", { className: "eyebrow block", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsx("input", { name, type, required, className: "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base transition-colors" })
  ] });
}
function FormSelect({
  label,
  name,
  options
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("label", { className: "eyebrow block", children: label }),
    /* @__PURE__ */ jsxs("select", { name, defaultValue: "", className: "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base transition-colors", children: [
      /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select…" }),
      options.map((o) => /* @__PURE__ */ jsx("option", { value: o, className: "bg-background", children: o }, o))
    ] })
  ] });
}
export {
  ContactPage as component
};
