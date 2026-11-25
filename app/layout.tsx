import type { Metadata } from "next";
import { Fraunces, Geist, Inter, Inter_Tight } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/site/Nav";
import TopBlur from "@/components/site/TopBlur";
import Footer from "@/components/site/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Reveal from "@/components/motion/Reveal";
import "./globals.css";
import "./motion.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Serif used inside the WeWire app mockups. Figma: "Fraunces SuperSoft 28pt" (SOFT 100, opsz 28).
const fraunces = Fraunces({ subsets: ["latin"], axes: ["SOFT", "opsz"], variable: "--font-fraunces" });

// Title, description and share card match ebi-yaa.com. Icons and the share image are file
// conventions in app/ (favicon.ico, icon1/2.png, apple-icon.png, opengraph-/twitter-image.png).
const TITLE = "Ebi-Yaa Kwaw | UX & Interaction Designer";
const DESCRIPTION =
  "Ebi-Yaa Kwaw - UX & interaction designer based in Limerick, Ireland, designing intuitive digital products for fintech and product teams.";

export const metadata: Metadata = {
  // Share images need absolute URLs; this is the live domain.
  metadataBase: new URL("https://www.ebi-yaa.com"),
  title: { default: TITLE, template: "%s | Ebi-Yaa Kwaw" },
  description: DESCRIPTION,
  openGraph: { type: "website", url: "/", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Before first paint: hold the first screen's text back until Reveal.tsx animates it in
// (skipped with reduced motion; cleared after 2.5s in case scripts never run).
const revealPending = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.dataset.revealPending='';setTimeout(function(){delete d.dataset.revealPending},2500)}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${interTight.variable} ${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body>
        <Script id="reveal-pending" strategy="beforeInteractive">
          {revealPending}
        </Script>
        <TopBlur />
        <Nav />
        <main>{children}</main>
        <Footer />
        <SmoothScroll />
        <Reveal />
      </body>
    </html>
  );
}
