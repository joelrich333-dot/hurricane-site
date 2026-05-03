"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const damenServices = [
  { name: "Haarschnitt", price: "ab €15" },
  { name: "Waschen & Schneiden", price: "ab €22" },
  { name: "Föhnen & Stylen", price: "ab €12" },
  { name: "Coloration", price: "ab €45" },
  { name: "Balayage", price: "ab €65" },
  { name: "Tönung", price: "ab €28" },
  { name: "Haarkur", price: "ab €15" },
  { name: "Hochsteckfrisur", price: "ab €35" },
];

const herrenServices = [
  { name: "Haarschnitt", price: "ab €11" },
  { name: "Waschen & Schneiden", price: "ab €18" },
  { name: "Bart rasieren", price: "ab €8" },
  { name: "Rasur mit Messer", price: "ab €15" },
  { name: "Bart formen & föhnen", price: "ab €12" },
  { name: "Coloration", price: "ab €18" },
  { name: "Haarkur", price: "ab €12" },
  { name: "Haarverlängerung", price: "auf Anfrage" },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".services-number",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-number",
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        ".services-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-heading",
            start: "top 88%",
          },
        }
      );

      gsap.fromTo(
        ".services-category",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".service-row",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-row",
            start: "top 85%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="leistungen"
      className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24"
      style={{ background: "var(--black)" }}
    >
      {/* Section label */}
      <div className="flex items-center gap-6 mb-16">
        <span
          className="services-number text-xs tracking-[0.5em] uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--red)",
          }}
        >
          01
        </span>
        <div
          className="h-px flex-1 max-w-[60px]"
          style={{ background: "rgba(245,240,235,0.12)" }}
        />
      </div>

      {/* Heading */}
      <div className="mb-20 max-w-4xl">
        <h2
          className="services-heading leading-[0.9] uppercase font-black"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          Unsere
          <br />
          <span style={{ color: "var(--white)", fontStyle: "italic" }}>
            Leistungen
          </span>
        </h2>
      </div>

      {/* Category hero prices */}
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {[
          { label: "Damen", price: "ab €15", count: damenServices.length },
          { label: "Herren", price: "ab €11", count: herrenServices.length },
        ].map((cat) => (
          <div
            key={cat.label}
            className="services-category relative p-10 overflow-hidden"
            style={{
              border: "1px solid rgba(245,240,235,0.08)",
            }}
          >
            <div
              className="absolute top-0 left-0 h-1 w-12"
              style={{ background: "var(--red)" }}
            />
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(245,240,235,0.4)",
              }}
            >
              {cat.label}
            </p>
            <p
              className="font-black uppercase leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "var(--white)",
              }}
            >
              {cat.price}
            </p>
            <p
              className="mt-4 text-xs tracking-widest"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(245,240,235,0.25)",
              }}
            >
              {cat.count} Leistungen verfügbar
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div
        className="h-px w-full mb-16"
        style={{ background: "rgba(245,240,235,0.06)" }}
      />

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-0">
        {/* Damen */}
        <div>
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(245,240,235,0.3)",
            }}
          >
            — Damen
          </p>
          <div className="flex flex-col">
            {damenServices.map((s) => (
              <div
                key={s.name}
                className="service-row accent-diagonal flex items-center justify-between py-4 pl-4"
                style={{
                  borderBottom: "1px solid rgba(245,240,235,0.05)",
                }}
              >
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.1rem",
                    color: "rgba(245,240,235,0.8)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.name}
                </span>
                <span
                  className="service-price text-xs tracking-widest ml-8"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(245,240,235,0.4)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Herren */}
        <div className="mt-12 md:mt-0">
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(245,240,235,0.3)",
            }}
          >
            — Herren
          </p>
          <div className="flex flex-col">
            {herrenServices.map((s) => (
              <div
                key={s.name}
                className="service-row accent-diagonal flex items-center justify-between py-4 pl-4"
                style={{
                  borderBottom: "1px solid rgba(245,240,235,0.05)",
                }}
              >
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.1rem",
                    color: "rgba(245,240,235,0.8)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.name}
                </span>
                <span
                  className="service-price text-xs tracking-widest ml-8"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(245,240,235,0.4)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 flex justify-center">
        <a
          href="#termin"
          className="inline-flex items-center gap-4 px-10 py-5 text-xs tracking-[0.3em] uppercase font-bold transition-all duration-300"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--white)",
            border: "1px solid rgba(245,240,235,0.2)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "var(--red)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--red)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(245,240,235,0.2)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--white)";
          }}
        >
          Termin vereinbaren
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
