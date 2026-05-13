import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-wider">MECKIE</span>
          <span className="eyebrow text-[10px] hidden sm:inline">Construction</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-[12px] tracking-[0.18em] uppercase font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
                <span
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-px bg-[var(--brand-orange)] transition-all duration-500"
                  style={{ width: active ? "16px" : "0px" }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-foreground/40 transition-colors"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center text-[11px] tracking-[0.22em] uppercase font-medium px-5 h-9 border border-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Request Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-luxe py-8 flex flex-col gap-6 border-t border-border">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-3xl tracking-wider"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="self-start mt-4 text-[11px] tracking-[0.22em] uppercase text-muted-foreground"
          >
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
