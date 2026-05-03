"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1.0 }
    );
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#galerie", label: "Galerie" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-5 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(7,15,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-t)" : "none",
      }}
    >
      <Link
        href="/"
        className="flex flex-col leading-none gap-0.5"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--white)" }}>
          Hurricane
        </span>
        <span className="text-[9px] tracking-[0.45em] uppercase" style={{ color: "var(--teal)" }}>
          Friseur
        </span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="link-line text-[11px] tracking-[0.25em] uppercase transition-opacity duration-300"
            style={{ fontFamily: "var(--font-mono)", color: "var(--dim)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          className="text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 transition-all duration-300"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--teal)",
            border: "1px solid var(--border-t)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "var(--teal)";
            el.style.color = "var(--bg)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.color = "var(--teal)";
          }}
        >
          Termin buchen
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="flex md:hidden flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menü"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block h-px transition-all duration-300"
            style={{
              width: i === 1 ? "16px" : "22px",
              background: "var(--white)",
              opacity: menuOpen && i === 1 ? 0 : 1,
              transform:
                menuOpen && i === 0
                  ? "rotate(45deg) translateY(6px)"
                  : menuOpen && i === 2
                  ? "rotate(-45deg) translateY(-6px)"
                  : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col py-8 px-8 gap-5 md:hidden"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border-t)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--white)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="text-sm tracking-[0.25em] uppercase px-5 py-3 text-center mt-2"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--teal)",
              border: "1px solid var(--border-t)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Termin buchen
          </a>
        </div>
      )}
    </nav>
  );
}
