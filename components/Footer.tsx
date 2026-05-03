export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-8 md:px-14 lg:px-20"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border-t)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col gap-0.5">
          <span
            className="font-black uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", color: "var(--white)" }}
          >
            Hurricane
          </span>
          <span
            className="text-[9px] tracking-[0.45em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--teal)" }}
          >
            Friseur
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {["Impressum", "Datenschutz"].map((l) => (
            <a
              key={l}
              href="#"
              className="link-line text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--dim)" }}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "rgba(235,245,244,0.2)" }}
        >
          © {year} Hurricane Friseur
        </p>
      </div>
    </footer>
  );
}
