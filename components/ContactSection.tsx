"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const hours = [
  { day: "Mo – Fr", time: "09:00 – 19:00 Uhr" },
  { day: "Samstag", time: "09:00 – 17:00 Uhr" },
  { day: "Sonntag", time: "Geschlossen" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".con-heading",
        { opacity: 0, y: 45 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".con-heading", start: "top 88%" },
        }
      );
      gsap.fromTo(
        ".con-col",
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".con-cols", start: "top 85%" },
        }
      );
    },
    { scope: ref }
  );

  const today = new Date().toLocaleDateString("de-DE", { weekday: "long" });
  const isOpen = !["Sonntag"].includes(today);

  return (
    <section
      ref={ref}
      id="kontakt"
      className="py-28 md:py-40 px-8 md:px-14 lg:px-20"
      style={{ background: "var(--bg)" }}
    >
      {/* Label */}
      <div className="flex items-center gap-4 mb-14">
        <span
          className="text-[10px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--teal)" }}
        >
          04
        </span>
        <div className="h-px w-10" style={{ background: "var(--border-t)" }} />
      </div>

      {/* Heading */}
      <h2
        className="con-heading font-black uppercase leading-[0.9] mb-20"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2.2rem, 6vw, 6rem)",
          color: "var(--white)",
          letterSpacing: "-0.02em",
        }}
      >
        Besuchen{" "}
        <span style={{ color: "var(--teal)", fontStyle: "italic" }}>Sie uns.</span>
      </h2>

      <div className="con-cols grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Address + contact */}
        <div className="con-col flex flex-col gap-12">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-5" style={{ fontFamily: "var(--font-mono)", color: "var(--teal)" }}>
              Adresse
            </p>
            <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", color: "var(--dim)", lineHeight: 1.7 }}>
              <p className="font-semibold" style={{ color: "var(--white)" }}>Hurricane Friseur</p>
              <p>Leopoldstraße 42</p>
              <p>80802 München</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-5" style={{ fontFamily: "var(--font-mono)", color: "var(--teal)" }}>
              Kontakt
            </p>
            <div className="flex flex-col gap-4">
              {[
                { label: "Tel", value: "+49 89 123 456 78", href: "tel:+498912345678" },
                { label: "Mail", value: "info@hurricane-friseur.de", href: "mailto:info@hurricane-friseur.de" },
                { label: "IG", value: "@hurricane_friseur", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="link-line flex items-center gap-3"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--dim)", letterSpacing: "0.04em" }}
                >
                  <span className="text-[9px] uppercase tracking-widest w-8" style={{ color: "var(--teal)" }}>
                    {item.label}
                  </span>
                  {item.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="con-col">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[10px] tracking-[0.5em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--teal)" }}>
              Öffnungszeiten
            </p>
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: isOpen ? "var(--teal)" : "rgba(235,245,244,0.15)",
                  boxShadow: isOpen ? "0 0 6px rgba(0,196,189,0.5)" : "none",
                }}
              />
              <span className="text-[9px] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: isOpen ? "var(--teal)" : "var(--dim)" }}>
                {isOpen ? "Geöffnet" : "Geschlossen"}
              </span>
            </div>
          </div>

          <div className="flex flex-col mb-14">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between py-4"
                style={{ borderBottom: "1px solid var(--border-t)" }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--dim)" }}>
                  {h.day}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: h.time === "Geschlossen" ? "rgba(235,245,244,0.2)" : "var(--white)",
                  }}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>

          {/* Booking CTA */}
          <a
            href="#termin"
            className="inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300"
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--red)",
              color: "var(--white)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Jetzt Termin buchen →
          </a>
        </div>
      </div>
    </section>
  );
}
