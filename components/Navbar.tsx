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
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 1.2 }
    );

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#galerie", label: "Galerie" },
    { href: "#bewertungen", label: "Bewertungen" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(245,240,235,0.06)"
          : "none",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex flex-col leading-none"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span
          className="text-xs tracking-[0.35em] uppercase"
          style={{ color: "var(--white)" }}
        >
          Hurricane
        </span>
        <span
          className="text-[9px] tracking-[0.5em] uppercase"
          style={{ color: "var(--red)" }}
        >
          Friseur
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="link-slide text-xs tracking-[0.25em] uppercase transition-opacity duration-300 hover:opacity-100"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(245,240,235,0.55)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#termin"
          className="text-xs tracking-[0.25em] uppercase px-5 py-2.5 transition-all duration-300"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--red)",
            border: "1px solid var(--red)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "var(--red)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--white)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--red)";
          }}
        >
          Termin buchen
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="flex md:hidden flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menü"
      >
        <span
          className="block w-6 h-px transition-all duration-300"
          style={{
            background: "var(--white)",
            transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none",
          }}
        />
        <span
          className="block w-4 h-px transition-all duration-300"
          style={{
            background: "var(--white)",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-px transition-all duration-300"
          style={{
            background: "var(--white)",
            transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none",
          }}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col py-8 px-8 gap-6 md:hidden"
          style={{ background: "var(--black)", borderTop: "1px solid rgba(245,240,235,0.1)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--white)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#termin"
            className="text-sm tracking-[0.25em] uppercase px-5 py-3 text-center"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--red)",
              border: "1px solid var(--red)",
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
