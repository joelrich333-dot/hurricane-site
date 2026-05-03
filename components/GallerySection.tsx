"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const placeholders = [
  { id: 1, label: "IMAGE_PLACEHOLDER", cols: "md:col-span-2", rows: "row-span-2", aspect: "aspect-[4/5]" },
  { id: 2, label: "IMAGE_PLACEHOLDER", cols: "", rows: "", aspect: "aspect-square" },
  { id: 3, label: "IMAGE_PLACEHOLDER", cols: "", rows: "", aspect: "aspect-square" },
  { id: 4, label: "IMAGE_PLACEHOLDER", cols: "", rows: "", aspect: "aspect-[4/3]" },
  { id: 5, label: "IMAGE_PLACEHOLDER", cols: "md:col-span-2", rows: "", aspect: "aspect-[16/7]" },
  { id: 6, label: "IMAGE_PLACEHOLDER", cols: "", rows: "", aspect: "aspect-[3/4]" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gallery-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-heading",
            start: "top 88%",
          },
        }
      );

      gsap.utils
        .toArray<HTMLElement>(".gallery-item")
        .forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              delay: i * 0.07,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="galerie"
      className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24"
      style={{ background: "#070707" }}
    >
      {/* Section label */}
      <div className="flex items-center gap-6 mb-16">
        <span
          className="text-xs tracking-[0.5em] uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--red)",
          }}
        >
          02
        </span>
        <div
          className="h-px flex-1 max-w-[60px]"
          style={{ background: "rgba(245,240,235,0.12)" }}
        />
      </div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <h2
          className="gallery-heading leading-[0.9] uppercase font-black"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          Unsere
          <br />
          <span style={{ fontStyle: "italic" }}>Galerie</span>
        </h2>
        <p
          className="max-w-xs text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.1rem",
            color: "rgba(245,240,235,0.45)",
            letterSpacing: "0.03em",
          }}
        >
          Jeder Haarschnitt ist ein Werk. Jeder Kunde eine Geschichte.
          Bilder werden in Kürze hinzugefügt.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Item 1 — tall left */}
        <div
          className="gallery-item col-span-1 md:col-span-2 row-span-2 relative overflow-hidden group"
          style={{ gridRow: "span 2" }}
        >
          <div
            className="w-full relative overflow-hidden"
            style={{ paddingBottom: "120%" }}
          >
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-transform duration-700 group-hover:scale-105"
              style={{ background: "#111" }}
            >
              <span
                className="text-[9px] tracking-[0.5em] uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.2)",
                }}
              >
                IMAGE_PLACEHOLDER
              </span>
              <div
                className="w-6 h-px"
                style={{ background: "rgba(232,0,15,0.4)" }}
              />
              <span
                className="text-xs tracking-widest"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.1)",
                }}
              >
                01
              </span>
            </div>
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "rgba(232,0,15,0.05)" }}
            />
          </div>
        </div>

        {/* Items 2-6 */}
        {[
          { id: 2, h: "paddingBottom: '100%'" },
          { id: 3, h: "paddingBottom: '100%'" },
          { id: 4, h: "paddingBottom: '75%'" },
          { id: 5, h: "paddingBottom: '75%'" },
          { id: 6, h: "paddingBottom: '100%'" },
        ].map((item) => (
          <div
            key={item.id}
            className="gallery-item col-span-1 relative overflow-hidden group"
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingBottom: item.id === 5 ? "75%" : item.id === 4 ? "80%" : "100%" }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-transform duration-700 group-hover:scale-105"
                style={{ background: item.id % 2 === 0 ? "#0d0d0d" : "#111" }}
              >
                <span
                  className="text-[8px] tracking-[0.5em] uppercase"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(245,240,235,0.15)",
                  }}
                >
                  IMAGE_PLACEHOLDER
                </span>
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(245,240,235,0.08)",
                  }}
                >
                  0{item.id}
                </span>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(232,0,15,0.05)" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p
        className="mt-8 text-center text-xs tracking-[0.3em] uppercase"
        style={{
          fontFamily: "var(--font-mono)",
          color: "rgba(245,240,235,0.15)",
        }}
      >
        Bilder folgen in Kürze
      </p>
    </section>
  );
}
