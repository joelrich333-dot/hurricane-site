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
      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
        .fromTo(".hero-line-1", { opacity: 0, y: 70 }, { opacity: 1, y: 0, duration: 1 }, 0.75)
        .fromTo(".hero-line-2", { opacity: 0, y: 70 }, { opacity: 1, y: 0, duration: 1 }, 0.95)
        .fromTo(".hero-line-3", { opacity: 0, y: 70 }, { opacity: 1, y: 0, duration: 1 }, 1.1)
        .fromTo(".hero-cta", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 1.45)
        .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.9);
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="termin"
      className="relative w-full"
      style={{ minHeight: "100svh", background: "var(--bg)" }}
    >
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,15,15,0.55) 0%, rgba(7,15,15,0.2) 50%, rgba(7,15,15,0.85) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-between px-8 md:px-14 lg:px-20 pt-32 pb-16"
        style={{ minHeight: "100svh" }}
      >
        {/* Eyebrow */}
        <div className="hero-eyebrow flex items-center gap-4 mt-4">
          <span className="w-6 h-px block" style={{ background: "var(--teal)" }} />
          <span
            className="text-[10px] tracking-[0.5em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--dim)" }}
          >
            München — Seit 2015
          </span>
        </div>

        {/* Headline — cascading offset */}
        <div className="flex-1 flex flex-col justify-center py-10">
          <div className="overflow-hidden">
            <p
              className="hero-line-1 font-black uppercase leading-[0.88]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3.2rem, 12vw, 13rem)",
                color: "var(--white)",
                letterSpacing: "-0.02em",
              }}
            >
              Erstklassige
            </p>
          </div>
          <div className="overflow-hidden" style={{ paddingLeft: "clamp(1.5rem, 6vw, 7rem)" }}>
            <p
              className="hero-line-2 font-black uppercase leading-[0.88]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3.2rem, 12vw, 13rem)",
                color: "var(--white)",
                letterSpacing: "-0.02em",
              }}
            >
              Friseur—
            </p>
          </div>
          <div className="overflow-hidden" style={{ paddingLeft: "clamp(3rem, 12vw, 14rem)" }}>
            <p
              className="hero-line-3 font-black uppercase leading-[0.88]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3.2rem, 12vw, 13rem)",
                color: "var(--teal)",
                letterSpacing: "-0.02em",
              }}
            >
              Kunst.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="hero-cta flex items-end justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300"
              style={{
                fontFamily: "var(--font-mono)",
                background: "var(--red)",
                color: "var(--white)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Jetzt Termin buchen
              <span>→</span>
            </a>
            <a
              href="#leistungen"
              className="link-line text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--dim)" }}
            >
              Preise entdecken ↓
            </a>
          </div>

          <div className="hero-scroll hidden sm:flex flex-col items-center gap-2 bounce">
            <span
              className="text-[9px] tracking-[0.5em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(235,245,244,0.25)" }}
            >
              Scrollen
            </span>
            <div className="w-px h-10" style={{ background: "rgba(0,196,189,0.25)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
