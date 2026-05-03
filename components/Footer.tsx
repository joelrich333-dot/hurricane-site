export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 px-8 md:px-16 lg:px-24"
      style={{ background: "#050505" }}
    >
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "rgba(245,240,235,0.06)" }}
      />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col leading-none">
            <span
              className="font-black uppercase tracking-wider"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.5rem",
                color: "var(--white)",
              }}
            >
              Hurricane
            </span>
            <span
              className="text-xs tracking-[0.5em] uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--red)",
              }}
            >
              Friseur
            </span>
          </div>
          <p
            className="text-xs max-w-xs leading-relaxed"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "0.95rem",
              color: "rgba(245,240,235,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            Erstklassige Friseurkunst. Präzision, Stil und Leidenschaft
            für Ihr Haar — seit 2015 in München.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="flex flex-col gap-3">
            <p
              className="text-[9px] tracking-[0.4em] uppercase mb-1"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(245,240,235,0.2)",
              }}
            >
              Navigation
            </p>
            {[
              { href: "#leistungen", label: "Leistungen" },
              { href: "#galerie", label: "Galerie" },
              { href: "#bewertungen", label: "Bewertungen" },
              { href: "#kontakt", label: "Kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-slide text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.35)",
                  width: "fit-content",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p
              className="text-[9px] tracking-[0.4em] uppercase mb-1"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(245,240,235,0.2)",
              }}
            >
              Rechtliches
            </p>
            {[
              { href: "#", label: "Impressum" },
              { href: "#", label: "Datenschutz" },
              { href: "#", label: "AGB" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-slide text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.35)",
                  width: "fit-content",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mt-16 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        style={{ borderTop: "1px solid rgba(245,240,235,0.04)" }}
      >
        <p
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(245,240,235,0.18)",
          }}
        >
          © {year} Hurricane Friseur GmbH. Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-2">
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--red)" }}
          />
          <p
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(245,240,235,0.18)",
            }}
          >
            München, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}
