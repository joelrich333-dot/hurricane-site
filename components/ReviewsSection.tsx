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
    rating: 5,
    text: "Absolut der beste Friseur in München. Das Team ist unglaublich professionell und freundlich. Bin seit 3 Jahren Stammkunde und jeder Besuch überzeugt aufs Neue.",
    via: "Google",
  },
  {
    name: "Sarah L.",
    location: "Schwabing",
    rating: 5,
    text: "Ich bin immer wieder begeistert! Präziser Haarschnitt, entspannte Atmosphäre und faire Preise. Meine Haare wurden noch nie so gut verstanden. Klare Empfehlung!",
    via: "Google",
  },
  {
    name: "Fatima A.",
    location: "München",
    rating: 5,
    text: "Das Hurricane-Team hat meine Haare komplett transformiert. Endlich ein Friseur, der wirklich zuhört und genau das umsetzt, was man sich vorstellt. Einfach perfekt.",
    via: "Google",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".reviews-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reviews-heading",
            start: "top 88%",
          },
        }
      );

      gsap.fromTo(
        ".reviews-rating-block",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reviews-rating-block",
            start: "top 88%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".review-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
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
      id="bewertungen"
      className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24"
      style={{ background: "#0a0a0a" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "rgba(245,240,235,0.06)" }}
      />

      {/* Section label */}
      <div className="flex items-center gap-6 mb-16">
        <span
          className="text-xs tracking-[0.5em] uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--red)",
          }}
        >
          03
        </span>
        <div
          className="h-px flex-1 max-w-[60px]"
          style={{ background: "rgba(245,240,235,0.12)" }}
        />
      </div>

      {/* Heading + rating */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-20">
        <h2
          className="reviews-heading leading-[0.9] uppercase font-black"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          Was unsere
          <br />
          <span style={{ fontStyle: "italic" }}>Kunden</span>
          <br />
          sagen.
        </h2>

        <div className="reviews-rating-block flex flex-col items-start lg:items-end gap-3">
          <div className="flex items-center gap-2">
            {"★★★★★".split("").map((star, i) => (
              <span
                key={i}
                className="text-2xl"
                style={{ color: "var(--red)" }}
              >
                {star}
              </span>
            ))}
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="font-black"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "3rem",
                color: "var(--white)",
                lineHeight: 1,
              }}
            >
              4.9
            </span>
            <span
              className="text-xs tracking-widest"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(245,240,235,0.35)",
              }}
            >
              / 5.0
            </span>
          </div>
          <p
            className="text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(245,240,235,0.3)",
            }}
          >
            Basierend auf 128 Google-Bewertungen
          </p>
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="review-card relative p-8 flex flex-col gap-6 group transition-colors duration-300"
            style={{
              border: "1px solid rgba(245,240,235,0.07)",
              background: "#0d0d0d",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(232,0,15,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(245,240,235,0.07)";
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
              style={{ background: "var(--red)" }}
            />

            {/* Stars */}
            <div className="flex items-center gap-1">
              {"★★★★★".split("").map((s, j) => (
                <span
                  key={j}
                  style={{ color: "var(--red)", fontSize: "0.75rem" }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Text */}
            <blockquote
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.15rem",
                color: "rgba(245,240,235,0.75)",
                lineHeight: 1.7,
                letterSpacing: "0.02em",
                fontStyle: "italic",
                flexGrow: 1,
              }}
            >
              &ldquo;{review.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--white)",
                  }}
                >
                  {review.name}
                </p>
                <p
                  className="text-[10px] tracking-widest mt-0.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(245,240,235,0.3)",
                  }}
                >
                  {review.location}
                </p>
              </div>
              <div
                className="text-[9px] tracking-[0.3em] uppercase px-2 py-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.2)",
                  border: "1px solid rgba(245,240,235,0.08)",
                }}
              >
                Google
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <a
          href="https://g.page/r/hurricane-friseur"
          target="_blank"
          rel="noopener noreferrer"
          className="link-slide text-xs tracking-[0.3em] uppercase flex items-center gap-3"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(245,240,235,0.4)",
          }}
        >
          Alle Bewertungen auf Google ansehen
          <span style={{ color: "var(--red)" }}>↗</span>
        </a>
      </div>
    </section>
  );
}
