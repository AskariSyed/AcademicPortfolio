import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { RESEARCH_IDENTITY } from "@/data/research";
import { PUBLICATIONS } from "@/data/publications";
import { Analytics } from "@vercel/analytics/next";

import CookieBanner from "@/components/ui/CookieBanner";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://research-with-askari.vercel.app"),
  title: {
    default: "Muhammad Hassan Askari | Computer Science Graduate & Aspiring Researcher",
    template: "%s | Muhammad Hassan Askari",
  },
  description:
    "Recent Computer Science graduate exploring research across AI/ML, Computer Vision, Data Science, Software Engineering, and Algorithms.",
  keywords: [
    "Muhammad Hassan Askari",
    "Computer Science Graduate",
    "Aspiring Researcher",
    "AI/ML Research",
    "Computer Vision",
    "Data Science",
    "Software Engineering",
    "Algorithms and Optimization",
    "Distribution Shift",
    "Few-Shot Adaptation",
    "COMSATS University Islamabad",
  ],
  authors: [{ name: "Muhammad Hassan Askari", url: "https://research-with-askari.vercel.app/" }],
  creator: "Muhammad Hassan Askari",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://research-with-askari.vercel.app/",
    siteName: "Muhammad Hassan Askari Portfolio",
    title: "Muhammad Hassan Askari | Computer Science Graduate & Aspiring Researcher",
    description:
      "Recent Computer Science graduate exploring research across AI/ML, Computer Vision, Data Science, Software Engineering, and Algorithms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan Askari | Computer Science Graduate & Aspiring Researcher",
    description:
      "Recent Computer Science graduate exploring research across AI/ML, Computer Vision, Data Science, Software Engineering, and Algorithms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://research-with-askari.vercel.app/#person",
        "name": "Muhammad Hassan Askari",
        "url": "https://research-with-askari.vercel.app/",
        "jobTitle": "Computer Science Graduate & Aspiring Researcher",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "COMSATS University Islamabad",
        },
        "sameAs": [
          "https://github.com/AskariSyed",
          "https://www.linkedin.com/in/syed-hassan-askari/",
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Computer Vision",
          "Data Science",
          "Software Engineering",
          "Algorithms and Optimization",
          "Distribution Shift",
          "Reliable AI",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://research-with-askari.vercel.app/#website",
        "url": "https://research-with-askari.vercel.app/",
        "name": "Muhammad Hassan Askari Portfolio",
        "author": {
          "@id": "https://research-with-askari.vercel.app/#person",
        },
      },
      ...PUBLICATIONS.map((pub) => ({
        "@type": "ScholarlyArticle",
        "headline": pub.title,
        "author": pub.authors.map((name) => ({
          "@type": "Person",
          "name": name,
        })),
        "description": pub.description,
      })),
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50/50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
