"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const images = [
  { src: "/images/gallery/gallery_1.png", alt: "Hurricane Friseur — Galerie 1" },
  { src: "/images/gallery/gallery_2.png", alt: "Hurricane Friseur — Galerie 2" },
  { src: "/images/gallery/gallery_3.png", alt: "Hurricane Friseur — Galerie 3" },
];

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gal-heading",
        { opacity: 0, y: 45 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".gal-heading", start: "top 88%" },
        }
      );
      gsap.utils.toArray<HTMLElement>(".gal-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out",
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
      id="galerie"
      className="py-44 md:py-64 px-8 md:px-14 lg:px-20"
      style={{ background: "var(--bg)" }}
    >
      {/* Label */}
      <div className="flex items-center gap-4 mb-14">
        <span
          className="text-[10px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--teal)" }}
        >
          02
        </span>
        <div className="h-px w-10" style={{ background: "var(--border-t)" }} />
      </div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <h2
          className="gal-heading font-black uppercase leading-[0.9]"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 6vw, 6rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          Unsere{" "}
          <span style={{ color: "var(--teal)", fontStyle: "italic" }}>Galerie</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.1rem",
            color: "var(--dim)",
            letterSpacing: "0.03em",
            maxWidth: "20rem",
          }}
        >
          Jeder Haarschnitt ist ein Werk. Jeder Kunde eine Geschichte.
        </p>
      </div>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-4 sm:hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className="gal-item relative overflow-hidden"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop: editorial grid — large left + two stacked right */}
      <div
        className="hidden sm:grid sm:grid-cols-3 gap-4"
        style={{ height: "clamp(420px, 68vh, 800px)" }}
      >
        {/* Large left image spans 2 columns */}
        <div className="gal-item col-span-2 relative overflow-hidden group">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            sizes="66vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "rgba(0,196,189,0.06)" }}
          />
        </div>

        {/* Two stacked right images */}
        <div className="flex flex-col gap-4">
          {[images[1], images[2]].map((img, i) => (
            <div
              key={i}
              className="gal-item relative overflow-hidden group flex-1"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(0,196,189,0.06)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
