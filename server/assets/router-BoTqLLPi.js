import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
const appCss = "/meckie-foundations/assets/styles-COriFNUA.css";
const ThemeCtx = createContext({
  theme: "light",
  toggle: () => {
  }
});
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("meckie-theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("meckie-theme", theme);
  }, [theme]);
  return /* @__PURE__ */ jsx(ThemeCtx.Provider, { value: { theme, toggle: () => setTheme((t) => t === "light" ? "dark" : "light") }, children });
}
const useTheme = () => useContext(ThemeCtx);
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-6 font-display text-6xl", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "The page you're looking for has moved or no longer exists." }),
    /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "mt-8 inline-flex items-center text-[11px] tracking-[0.22em] uppercase font-medium px-6 h-10 border border-foreground hover:bg-foreground hover:text-background transition-colors",
        children: "Return Home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: error.message }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "mt-8 inline-flex items-center text-[11px] tracking-[0.22em] uppercase font-medium px-6 h-10 border border-foreground hover:bg-foreground hover:text-background transition-colors",
        children: "Try again"
      }
    )
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Meckie Construction — Premium Paving & Driveways · Harare" },
      { name: "description", content: "Meckie Construction designs and installs premium driveways, pavers, slabs and perimeter walls in Harare, Zimbabwe. Engineered since 1995." },
      { name: "author", content: "Meckie Driveways (Pvt) Ltd" },
      { property: "og:title", content: "Meckie Construction — Premium Paving & Driveways" },
      { property: "og:description", content: "Imagination becomes reality. Premium paving and driveway solutions engineered for lasting beauty." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$5 = () => import("./services-BGLgh_qS.js");
const Route$5 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Driveways & Perimeter Walls · Meckie"
    }, {
      name: "description",
      content: "Two services. One standard. Driveway design and installation, and engineered perimeter walls across Harare."
    }, {
      property: "og:title",
      content: "Meckie Services — Driveways & Walls"
    }, {
      property: "og:description",
      content: "From consultation to final inspection — a four-step practice for paving and perimeter walls."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./products-CszxTWDr.js");
const Route$4 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Products — Premium Paving Catalogue · Meckie"
    }, {
      name: "description",
      content: "Driveway pavers, cobbles, slabs, hexagonal pavers, coping, blocks, cladding and architectural feature pieces."
    }, {
      property: "og:title",
      content: "Meckie Catalogue — Premium Paving"
    }, {
      property: "og:description",
      content: "An architectural catalogue of paving, slabs and feature pieces, engineered in Harare."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const gallery = "/meckie-foundations/assets/gallery-greendale-BuUDks8a.jpg";
const $$splitComponentImporter$3 = () => import("./gallery-zURHNaE1.js");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Signature Installations · Meckie"
    }, {
      name: "description",
      content: "Selected installations across Harare — Greendale, Jewel Earth Workshop, Westlea and Southview Park."
    }, {
      property: "og:title",
      content: "Meckie — Our Work Speaks for Itself"
    }, {
      property: "og:description",
      content: "A visual archive of paved driveways, courtyards and perimeter walls across Harare."
    }, {
      property: "og:image",
      content: gallery
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CXJO1Tji.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Meckie Construction · Harare"
    }, {
      name: "description",
      content: "Visit our Hatfield or Waterfalls yard, or send a project enquiry. We respond within 48 hours."
    }, {
      property: "og:title",
      content: "Contact Meckie Construction"
    }, {
      property: "og:description",
      content: "Two yards in Harare. One standard of response. Begin a project with us."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-NV_l9Dor.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Meckie Construction · Trusted Since 1995"
    }, {
      name: "description",
      content: "Built on precision. Trusted since 1995. The story, vision and values behind Meckie Construction in Harare."
    }, {
      property: "og:title",
      content: "About Meckie Construction"
    }, {
      property: "og:description",
      content: "Three decades of paving Harare's most demanding residential and architectural projects."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const hero = "/meckie-foundations/assets/hero-driveway-C0-egtac.png";
const $$splitComponentImporter = () => import("./index-CjARFOls.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Meckie Construction — Built for Lasting Impressions."
    }, {
      name: "description",
      content: "Premium paving and driveway solutions engineered for lasting beauty. Harare, Zimbabwe."
    }, {
      property: "og:image",
      content: hero
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const ProductsRoute = Route$4.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$6
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  ProductsRoute,
  ServicesRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  gallery as g,
  hero as h,
  router as r,
  useTheme as u
};
