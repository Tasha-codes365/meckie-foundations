import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="container-luxe py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-display text-3xl tracking-wider">MECKIE</div>
          <p className="eyebrow mt-1">Construction · Est. 1995</p>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Premium paving, driveways and architectural surfaces — engineered in Harare,
            installed with the discipline of three decades.
          </p>
          <div className="hairline mt-10" />
          <p className="mt-6 text-xs text-muted-foreground">
            “Imagination Becomes.”
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/products", "Products"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="link-underline text-foreground/80 hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Visit</p>
          <ul className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/80">
            <li>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">Hatfield</span>
              7 Dawlish Road, Chadcombe, Hatfield, Harare
            </li>
            <li>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">Waterfalls</span>
              3243 Masotsha Ndlovu, Waterfalls, Harare
            </li>
            <li>
              <a href="tel:+263772000000" className="link-underline">+263 772 000 000</a>
              <span className="mx-3 text-muted-foreground">·</span>
              <a href="mailto:hello@meckie.co.zw" className="link-underline">hello@meckie.co.zw</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxe h-16 flex items-center justify-between text-[11px] tracking-widest uppercase text-muted-foreground">
          <span>© {new Date().getFullYear()} Meckie Driveways (Pvt) Ltd</span>
          <span className="hidden md:inline">Harare · Zimbabwe</span>
        </div>
      </div>
    </footer>
  );
}
