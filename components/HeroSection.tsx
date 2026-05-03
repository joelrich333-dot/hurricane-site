"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-tag",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.5
      )
        .fromTo(
          ".hero-line-1",
          { opacity: 0, y: 80, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1 },
          0.75
        )
        .fromTo(
          ".hero-line-2",
          { opacity: 0, y: 80, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1 },
          0.95
        )
        .fromTo(
          ".hero-line-3",
          { opacity: 0, y: 80, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1 },
          1.15
        )
        .fromTo(
          ".hero-ctas",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.55
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          2.0
        )
        .fromTo(
          ".hero-red-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.2, ease: "power3.inOut" },
          0.6
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="termin"
      className="relative w-full grain"
      style={{ minHeight: "100svh", background: "var(--black)" }}
    >
      {/* Video placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "#050505" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 60%, rgba(232,0,15,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,240,235,0.02) 0%, transparent 50%)",
            }}
          />
          <span
            className="text-[10px] tracking-[0.6em] uppercase select-none"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(245,240,235,0.08)",
            }}
          >
            ▶ VIDEO_PLACEHOLDER
          </span>
        </div>
        {/* Cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.8) 100%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.7) 100%)",
          }}
        />
      </div>

      {/* Red horizontal accent line */}
      <div
        className="hero-red-line absolute left-0 right-0"
        style={{
          top: "calc(50% + 2rem)",
          height: "1px",
          background: "var(--red)",
          opacity: 0.15,
          transformOrigin: "left",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-between h-full px-8 md:px-16 lg:px-24 pt-36 pb-16"
        style={{ minHeight: "100svh" }}
      >
        {/* Top tag */}
        <div className="hero-tag flex items-center gap-4">
          <span
            className="w-8 h-px block"
            style={{ background: "var(--red)" }}
          />
          <span
            className="text-[10px] tracking-[0.5em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(245,240,235,0.5)",
            }}
          >
            München — Seit 2015
          </span>
        </div>

        {/* Main headline */}
        <div className="flex-1 flex flex-col justify-center py-12">
          <div className="overflow-hidden">
            <h1
              className="hero-line-1 leading-[0.85] uppercase font-black"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3.5rem, 13vw, 14rem)",
                color: "var(--white)",
                letterSpacing: "-0.02em",
              }}
            >
              Erstklassige
            </h1>
          </div>
          <div className="overflow-hidden pl-[8%] md:pl-[12%]">
            <h1
              className="hero-line-2 leading-[0.85] uppercase font-black"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3.5rem, 13vw, 14rem)",
                color: "var(--white)",
                letterSpacing: "-0.02em",
              }}
            >
              Friseur—
            </h1>
          </div>
          <div className="overflow-hidden pl-[16%] md:pl-[24%]">
            <h1
              className="hero-line-3 leading-[0.85] uppercase font-black"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3.5rem, 13vw, 14rem)",
                color: "var(--white)",
                letterSpacing: "-0.02em",
              }}
            >
              Kunst.
            </h1>
          </div>
        </div>

        {/* Bottom: CTAs + scroll */}
        <div className="hero-ctas flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href="#leistungen"
              className="inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 hover:gap-5"
              style={{
                fontFamily: "var(--font-mono)",
                background: "var(--red)",
                color: "var(--white)",
              }}
            >
              Jetzt Termin buchen
              <span className="text-base leading-none">→</span>
            </a>
            <a
              href="#leistungen"
              className="link-slide text-xs tracking-[0.25em] uppercase flex items-center gap-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(245,240,235,0.65)",
              }}
            >
              Preise entdecken
              <span className="text-base leading-none">↓</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="hero-scroll hidden sm:flex flex-col items-center gap-3 scroll-bounce"
            style={{ color: "rgba(245,240,235,0.3)" }}
          >
            <span
              className="text-[9px] tracking-[0.5em] uppercase rotate-90 origin-center"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              scrollen
            </span>
            <div
              className="w-px"
              style={{ height: "40px", background: "rgba(245,240,235,0.2)" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(245,240,235,0.06)" }}
      />
    </section>
  );
}
