"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const reviews = [
  {
    name: "Michael K.",
    location: "München",
    text: "Absolut der beste Friseur in München. Das Team ist unglaublich professionell und freundlich. Bin seit 3 Jahren Stammkunde.",
  },
  {
    name: "Sarah L.",
    location: "Schwabing",
    text: "Ich bin immer wieder begeistert! Präziser Haarschnitt, entspannte Atmosphäre und faire Preise. Klare Empfehlung!",
  },
  {
    name: "Fatima A.",
    location: "München",
    text: "Das Hurricane-Team hat meine Haare komplett transformiert. Endlich ein Friseur, der wirklich zuhört.",
  },
];

export default function ReviewsSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".rev-heading",
        { opacity: 0, y: 45 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".rev-heading", start: "top 88%" },
        }
      );
      gsap.fromTo(
        ".rev-rating",
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1, scale: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".rev-rating", start: "top 88%" },
        }
      );
      gsap.utils.toArray<HTMLElement>(".rev-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="bewertungen"
      className="py-28 md:py-40 px-8 md:px-14 lg:px-20"
      style={{ background: "var(--bg2)" }}
    >
      {/* Label */}
      <div className="flex items-center gap-4 mb-14">
        <span
          className="text-[10px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--teal)" }}
        >
          03
        </span>
        <div className="h-px w-10" style={{ background: "var(--border-t)" }} />
      </div>

      {/* Heading + rating side by side */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16">
        <h2
          className="rev-heading font-black uppercase leading-[0.9]"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 6vw, 6rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          Was Kunden{" "}
          <span style={{ color: "var(--teal)", fontStyle: "italic" }}>sagen.</span>
        </h2>

        <div className="rev-rating flex flex-col gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "var(--teal)", fontSize: "1.4rem" }}>★</span>
            ))}
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="font-black"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "2.8rem", color: "var(--white)", lineHeight: 1 }}
            >
              4.9
            </span>
            <span
              className="text-xs tracking-widest"
              style={{ fontFamily: "var(--font-mono)", color: "var(--dim)" }}
            >
              / 5.0 · 128 Bewertungen
            </span>
          </div>
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="rev-card flex flex-col gap-5 p-8 transition-colors duration-300"
            style={{
              border: "1px solid var(--border-t)",
              background: "rgba(0,196,189,0.03)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,196,189,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-t)";
            }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <span key={j} style={{ color: "var(--teal)", fontSize: "0.7rem" }}>★</span>
              ))}
            </div>
            <blockquote
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.1rem",
                color: "var(--dim)",
                lineHeight: 1.75,
                letterSpacing: "0.02em",
                fontStyle: "italic",
                flexGrow: 1,
              }}
            >
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--white)" }}>
                  {r.name}
                </p>
                <p className="text-[10px] tracking-widest mt-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--dim)" }}>
                  {r.location}
                </p>
              </div>
              <span className="text-[9px] tracking-[0.3em] uppercase px-2 py-1" style={{ fontFamily: "var(--font-mono)", color: "var(--dim)", border: "1px solid var(--border-t)" }}>
                Google
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
