import { jsx, jsxs } from "react/jsx-runtime";
import { useRouterState, Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { Moon, Sun, X, Menu } from "lucide-react";
import { u as useTheme } from "./router-BoTqLLPi.js";
function Reveal({
  children,
  delay = 0
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.15
      }
    );
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      style: {
        transition: `all 800ms ease ${delay}ms`
      },
      className: `
        transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `,
      children
    }
  );
}
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({
    select: (s) => s.location.pathname
  });
  const { theme, toggle } = useTheme();
  useEffect(() => {
    setOpen(false);
  }, [path]);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "\r\n    fixed\r\n    top-0\r\n    inset-x-0\r\n    z-50\r\n    bg-background/95\r\n    backdrop-blur-lg\r\n    border-b\r\n    border-border\r\n    transition-all\r\n    duration-500\r\n  ",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "\r\n          container-luxe\r\n          flex\r\n          items-center\r\n          justify-between\r\n          h-[88px]\r\n          lg:h-[100px]\r\n          px-5\r\n          lg:px-6\r\n        ",
            children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/",
                  className: "\r\n            flex\r\n            items-center\r\n            shrink-0\r\n            transition-transform\r\n            duration-300\r\n            hover:scale-[1.02]\r\n          ",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "https://i.ibb.co/hJQSF5sQ/logo-transparent-background.png",
                      alt: "Meckie Construction",
                      className: "\r\n    h-[85px]\r\n    sm:h-[95px]\r\n    lg:h-[110px]\r\n    w-auto\r\n    object-contain\r\n    mt-2\r\n  "
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "nav",
                {
                  className: "\r\n            hidden\r\n            lg:flex\r\n            items-center\r\n            gap-10\r\n          ",
                  children: NAV.map((item) => {
                    const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
                    return /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: item.to,
                        className: "\r\n                  relative\r\n                  text-[11px]\r\n                  tracking-[0.22em]\r\n                  uppercase\r\n                  font-medium\r\n                  text-foreground/75\r\n                  hover:text-foreground\r\n                  transition-colors\r\n                  duration-300\r\n                ",
                        children: [
                          item.label,
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              className: "\r\n                    absolute\r\n                    -bottom-2\r\n                    left-1/2\r\n                    -translate-x-1/2\r\n                    h-[1.5px]\r\n                    bg-[var(--brand-orange)]\r\n                    transition-all\r\n                    duration-500\r\n                  ",
                              style: {
                                width: active ? "18px" : "0px"
                              }
                            }
                          )
                        ]
                      },
                      item.to
                    );
                  })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: toggle,
                    "aria-label": "Toggle theme",
                    className: "\r\n    hidden\r\n    sm:inline-flex\r\n    h-10\r\n    w-10\r\n    items-center\r\n    justify-center\r\n    border\r\n    border-foreground/70\r\n    text-foreground\r\n    hover:bg-foreground\r\n    hover:text-background\r\n    transition-all\r\n    duration-300\r\n  ",
                    children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "\r\n    hidden\r\n    md:inline-flex\r\n    items-center\r\n    justify-center\r\n    text-[11px]\r\n    tracking-[0.24em]\r\n    uppercase\r\n    font-medium\r\n    px-6\r\n    h-10\r\n    border\r\n    border-foreground/70\r\n    text-foreground\r\n    hover:bg-foreground\r\n    hover:text-background\r\n    transition-all\r\n    duration-300\r\n  ",
                    children: "Request Quote"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setOpen((v) => !v),
                    className: "\r\n              lg:hidden\r\n              inline-flex\r\n              h-10\r\n              w-10\r\n              items-center\r\n              justify-center\r\n            ",
                    "aria-label": "Menu",
                    children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `
          lg:hidden
          overflow-hidden
          transition-[max-height,opacity]
          duration-500
          ${open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"}
        `,
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "\r\n            container-luxe\r\n            py-10\r\n            flex\r\n            flex-col\r\n            gap-7\r\n            border-t\r\n            border-border\r\n            bg-background\r\n          ",
                children: [
                  NAV.map((item, i) => /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: item.to,
                      className: "\r\n                font-display\r\n                text-3xl\r\n                tracking-wide\r\n              ",
                      style: {
                        animationDelay: `${i * 60}ms`
                      },
                      children: item.label
                    },
                    item.to
                  )),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: toggle,
                      className: "\r\n              self-start\r\n              mt-2\r\n              text-[11px]\r\n              tracking-[0.22em]\r\n              uppercase\r\n              text-muted-foreground\r\n            ",
                      children: theme === "light" ? "Dark mode" : "Light mode"
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("footer", { className: "mt-14 border-t border-border bg-surface", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-luxe py-20 grid gap-14 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://i.ibb.co/hJQSF5sQ/logo-transparent-background.png",
            alt: "Meckie Construction",
            className: "\r\n              h-[120px]\r\n              lg:h-[150px]\r\n              w-auto\r\n              object-contain\r\n              mb-3\r\n            "
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2", children: "Construction · Est. 1995" }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-md text-sm leading-relaxed text-muted-foreground", children: "Premium paving, driveways and architectural surfaces — engineered in Harare, installed with the discipline of three decades." }),
        /* @__PURE__ */ jsx("div", { className: "hairline mt-10" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs italic text-muted-foreground", children: '"Construction Excellence. Every Project. Every Time."' })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Navigate" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-4 text-sm", children: [
          ["/", "Home"],
          ["/about", "About"],
          ["/products", "Products"],
          ["/services", "Services"],
          ["/gallery", "Gallery"],
          ["/contact", "Contact"]
        ].map(([to, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to,
            className: "\r\n                    link-underline\r\n                    text-foreground/80\r\n                    hover:text-foreground\r\n                    transition-colors\r\n                  ",
            children: label
          }
        ) }, to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Visit" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-6 text-sm leading-relaxed text-foreground/80", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Hatfield" }),
            "7 Dawlish Road, Chadcombe, Hatfield, Harare"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Waterfalls" }),
            "3243 Masotsha Ndlovu, Waterfalls, Harare"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex flex-wrap gap-3 items-center", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:+263772989306",
                className: "link-underline",
                children: "+263 77 298 9306"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "·" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:sales@meckieconstruction.co.zw",
                className: "link-underline",
                children: "sales@meckieconstruction.co.zw"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "\r\n          container-luxe\r\n          h-16\r\n          flex\r\n          items-center\r\n          justify-between\r\n          text-[11px]\r\n          tracking-widest\r\n          uppercase\r\n          text-muted-foreground\r\n        ", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Meckie Driveways (Pvt) Ltd"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Harare · Zimbabwe" })
    ] }) })
  ] }) });
}
function PageShell({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-20", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function PageHeader({
  eyebrow,
  title,
  intro
}) {
  return /* @__PURE__ */ jsxs("section", { className: "container-luxe pt-24 pb-20 md:pt-32 md:pb-28", children: [
    /* @__PURE__ */ jsx("p", { className: "eyebrow reveal", children: eyebrow }),
    /* @__PURE__ */ jsx("h1", { className: "reveal reveal-delay-1 mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl", children: title }),
    intro && /* @__PURE__ */ jsx("p", { className: "reveal reveal-delay-2 mt-8 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground", children: intro }),
    /* @__PURE__ */ jsx("div", { className: "hairline mt-16" })
  ] });
}
export {
  PageShell as P,
  Reveal as R,
  PageHeader as a
};
