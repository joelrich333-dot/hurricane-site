"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const hours = [
  { day: "Montag", time: "09:00 – 19:00" },
  { day: "Dienstag", time: "09:00 – 19:00" },
  { day: "Mittwoch", time: "09:00 – 19:00" },
  { day: "Donnerstag", time: "09:00 – 20:00" },
  { day: "Freitag", time: "09:00 – 19:00" },
  { day: "Samstag", time: "09:00 – 17:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

const today = new Date().toLocaleDateString("de-DE", { weekday: "long" });

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 88%",
          },
        }
      );

      gsap.fromTo(
        ".contact-col",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-cols",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".hours-row",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hours-row",
            start: "top 88%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24"
      style={{ background: "#070707" }}
    >
      {/* Top accent */}
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
          04
        </span>
        <div
          className="h-px flex-1 max-w-[60px]"
          style={{ background: "rgba(245,240,235,0.12)" }}
        />
      </div>

      {/* Heading */}
      <div className="mb-20">
        <h2
          className="contact-heading leading-[0.9] uppercase font-black"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          Besuchen
          <br />
          <span style={{ fontStyle: "italic" }}>Sie uns.</span>
        </h2>
      </div>

      {/* Columns */}
      <div className="contact-cols grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Address + contact */}
        <div className="contact-col flex flex-col gap-8">
          <div>
            <p
              className="text-[10px] tracking-[0.5em] uppercase mb-5"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--red)",
              }}
            >
              Adresse
            </p>
            <div
              className="flex flex-col gap-1"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.25rem",
                color: "rgba(245,240,235,0.8)",
                lineHeight: 1.6,
                letterSpacing: "0.02em",
              }}
            >
              <p className="font-semibold" style={{ color: "var(--white)" }}>
                Hurricane Friseur
              </p>
              <p>Leopoldstraße 42</p>
              <p>80802 München</p>
            </div>
          </div>

          <div>
            <p
              className="text-[10px] tracking-[0.5em] uppercase mb-5"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--red)",
              }}
            >
              Kontakt
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+498912345678"
                className="link-slide flex items-center gap-3 text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.65)",
                  letterSpacing: "0.05em",
                }}
              >
                <span style={{ color: "var(--red)", fontSize: "0.7rem" }}>
                  TEL
                </span>
                +49 89 123 456 78
              </a>
              <a
                href="mailto:info@hurricane-friseur.de"
                className="link-slide flex items-center gap-3 text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.65)",
                  letterSpacing: "0.05em",
                }}
              >
                <span style={{ color: "var(--red)", fontSize: "0.7rem" }}>
                  MAIL
                </span>
                info@hurricane-friseur.de
              </a>
              <a
                href="https://www.instagram.com/hurricane_friseur"
                target="_blank"
                rel="noopener noreferrer"
                className="link-slide flex items-center gap-3 text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.65)",
                  letterSpacing: "0.05em",
                }}
              >
                <span style={{ color: "var(--red)", fontSize: "0.7rem" }}>
                  IG
                </span>
                @hurricane_friseur
              </a>
            </div>
          </div>
        </div>

        {/* Opening hours */}
        <div className="contact-col">
          <div className="flex items-center justify-between mb-5">
            <p
              className="text-[10px] tracking-[0.5em] uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--red)",
              }}
            >
              Öffnungszeiten
            </p>
            {/* Live open indicator */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background:
                    today !== "Sonntag" ? "var(--red)" : "rgba(245,240,235,0.2)",
                  boxShadow:
                    today !== "Sonntag"
                      ? "0 0 6px rgba(232,0,15,0.5)"
                      : "none",
                }}
              />
              <span
                className="text-[9px] tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  color:
                    today !== "Sonntag"
                      ? "var(--red)"
                      : "rgba(245,240,235,0.2)",
                }}
              >
                {today !== "Sonntag" ? "Heute geöffnet" : "Heute geschlossen"}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            {hours.map((h) => {
              const isToday = h.day === today;
              return (
                <div
                  key={h.day}
                  className="hours-row flex items-center justify-between py-3"
                  style={{
                    borderBottom: "1px solid rgba(245,240,235,0.05)",
                    ...(isToday && {
                      borderBottom: "1px solid rgba(232,0,15,0.2)",
                    }),
                  }}
                >
                  <span
                    className="text-xs tracking-wide"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: isToday
                        ? "var(--white)"
                        : "rgba(245,240,235,0.45)",
                      fontWeight: isToday ? "700" : "400",
                    }}
                  >
                    {h.day}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: isToday
                        ? "var(--red)"
                        : h.time === "Geschlossen"
                        ? "rgba(245,240,235,0.2)"
                        : "rgba(245,240,235,0.45)",
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="contact-col flex flex-col justify-between gap-8 lg:col-start-3">
          <div
            className="p-8 flex flex-col gap-6 relative overflow-hidden"
            style={{
              border: "1px solid rgba(232,0,15,0.2)",
              background: "rgba(232,0,15,0.03)",
            }}
          >
            <div
              className="absolute top-0 left-0 h-0.5 w-full"
              style={{ background: "var(--red)" }}
            />
            <p
              className="text-[10px] tracking-[0.4em] uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--red)",
              }}
            >
              Jetzt buchen
            </p>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.2rem",
                color: "rgba(245,240,235,0.7)",
                letterSpacing: "0.03em",
              }}
            >
              Sichern Sie sich Ihren Wunschtermin online — schnell, einfach und
              ohne Wartezeit.
            </p>
            <a
              href="#termin"
              className="inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.3em] uppercase font-bold transition-all duration-300 hover:gap-5 w-fit"
              style={{
                fontFamily: "var(--font-mono)",
                background: "var(--red)",
                color: "var(--white)",
              }}
            >
              Termin buchen
              <span>→</span>
            </a>
          </div>

          {/* Map placeholder */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              height: "180px",
              background: "#111",
              border: "1px solid rgba(245,240,235,0.06)",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <span
                className="text-2xl"
                style={{ color: "rgba(232,0,15,0.4)" }}
              >
                ◎
              </span>
              <span
                className="text-[9px] tracking-[0.4em] uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(245,240,235,0.15)",
                }}
              >
                Leopoldstraße 42, München
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
