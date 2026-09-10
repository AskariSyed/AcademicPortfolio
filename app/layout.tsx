import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { RESEARCH_IDENTITY } from "@/data/research";
import { PUBLICATIONS } from "@/data/publications";
import { Analytics } from "@vercel/analytics/next";

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
    default: "Muhammad Hassan Askari | Computer Science Graduate | AI/ML",
    template: "%s | Muhammad Hassan Askari",
  },
  description:
    "Muhammad Hassan Askari is a Computer Science graduate from COMSATS University Islamabad working on AI/ML, trustworthy AI, robust machine learning, computer vision, LLM-based systems, and RAG.",
  keywords: [
    "Muhammad Hassan Askari",
    "Computer Science Graduate",
    "AI/ML",
    "trustworthy AI",
    "robust machine learning",
    "computer vision",
    "LLM-based systems",
    "RAG",
    "domain adaptation",
    "environmental domain shift",
    "COMSATS University Islamabad",
  ],
  authors: [{ name: "Muhammad Hassan Askari", url: "https://research-with-askari.vercel.app/" }],
  creator: "Muhammad Hassan Askari",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://research-with-askari.vercel.app/",
    siteName: "Muhammad Hassan Askari Portfolio",
    title: "Muhammad Hassan Askari | Computer Science Graduate | AI/ML",
    description:
      "Muhammad Hassan Askari is a Computer Science graduate from COMSATS University Islamabad working on AI/ML, trustworthy AI, robust machine learning, computer vision, LLM-based systems, and RAG.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan Askari | Computer Science Graduate | AI/ML",
    description:
      "Muhammad Hassan Askari is a Computer Science graduate from COMSATS University Islamabad working on AI/ML, trustworthy AI, robust machine learning, computer vision, LLM-based systems, and RAG.",
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
        "jobTitle": "Computer Science Graduate",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "COMSATS University Islamabad",
        },
        "sameAs": [
          "https://github.com/AskariSyed",
          "https://www.linkedin.com/in/syed-hassan-askari/",
        ],
        "knowsAbout": [
          "Computer Vision",
          "Trustworthy AI",
          "Robust Machine Learning",
          "Domain Adaptation",
          "Multimodal Artificial Intelligence",
          "Environmental Domain Shift",
          "Large Language Models",
          "Retrieval-Augmented Generation",
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
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
