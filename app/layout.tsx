import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, Cormorant } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hurricane Friseur — Erstklassige Friseurkunst",
  description:
    "Premium-Friseur in München. Präzision, Stil und Leidenschaft für Ihr Haar.",
  openGraph: {
    title: "Hurricane Friseur",
    description: "Erstklassige Friseurkunst. Dein Haar. Unsere Leidenschaft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${spaceMono.variable} ${cormorant.variable}`}
    >
      <body>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
