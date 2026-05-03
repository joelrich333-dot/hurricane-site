"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const damen = [
  { name: "Haarschnitt", price: "ab €15" },
  { name: "Waschen & Schneiden", price: "ab €22" },
  { name: "Coloration", price: "ab €45" },
  { name: "Balayage", price: "ab €65" },
  { name: "Hochsteckfrisur", price: "ab €35" },
];

const herren = [
  { name: "Haarschnitt", price: "ab €11" },
  { name: "Waschen & Schneiden", price: "ab €18" },
  { name: "Bart rasieren", price: "ab €8" },
  { name: "Rasur mit Messer", price: "ab €15" },
  { name: "Coloration", price: "ab €18" },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".svc-heading",
        { opacity: 0, y: 45 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".svc-heading", start: "top 88%" },
        }
      );
      gsap.fromTo(
        ".svc-col",
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.18, ease: "power3.out",
          scrollTrigger: { trigger: ".svc-cols", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".svc-row",
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0, duration: 0.45, stagger: 0.045, ease: "power2.out",
          scrollTrigger: { trigger: ".svc-row", start: "top 88%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="leistungen"
      className="py-28 md:py-40 px-8 md:px-14 lg:px-20"
      style={{ background: "var(--bg2)" }}
    >
      {/* Label */}
      <div className="flex items-center gap-4 mb-14">
        <span
          className="text-[10px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--teal)" }}
        >
          01
        </span>
        <div className="h-px w-10" style={{ background: "var(--border-t)" }} />
      </div>

      {/* Heading */}
      <h2
        className="svc-heading font-black uppercase leading-[0.9] mb-20"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2.2rem, 6vw, 6rem)",
          color: "var(--white)",
          letterSpacing: "-0.02em",
        }}
      >
        Unsere{" "}
        <span style={{ color: "var(--teal)", fontStyle: "italic" }}>
          Leistungen
        </span>
      </h2>

      {/* Two columns */}
      <div className="svc-cols grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        {[
          { title: "Damen", subtitle: "ab €15", items: damen },
          { title: "Herren", subtitle: "ab €11", items: herren },
        ].map((col) => (
          <div key={col.title} className="svc-col">
            {/* Category header */}
            <div className="flex items-baseline justify-between mb-8 pb-5" style={{ borderBottom: "1px solid var(--border-t)" }}>
              <h3
                className="font-black uppercase"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                  color: "var(--white)",
                  letterSpacing: "-0.01em",
                }}
              >
                {col.title}
              </h3>
              <span
                className="text-lg font-black"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--teal)",
                }}
              >
                {col.subtitle}
              </span>
            </div>

            {/* Service rows */}
            <div className="flex flex-col gap-0">
              {col.items.map((s) => (
                <div
                  key={s.name}
                  className="svc-row flex items-center justify-between py-4 transition-colors duration-200"
                  style={{ borderBottom: "1px solid rgba(0,196,189,0.07)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.15rem",
                      color: "var(--dim)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.name}
                  </span>
                  <span
                    className="svc-price text-xs tracking-widest transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "rgba(235,245,244,0.3)",
                    }}
                  >
                    {s.price}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="mt-5 text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(0,196,189,0.35)" }}
            >
              Weitere Leistungen auf Anfrage
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 flex justify-center">
        <a
          href="#kontakt"
          className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--red)",
            border: "1px solid var(--border-r)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "var(--red)";
            el.style.color = "var(--white)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.color = "var(--red)";
          }}
        >
          Termin vereinbaren →
        </a>
      </div>
    </section>
  );
}
