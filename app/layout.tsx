import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { RESEARCH_IDENTITY } from "@/data/research";
import { PUBLICATIONS } from "@/data/publications";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://research.askarisyed.com"),
  title: {
    default: "Muhammad Hassan Askari | Computer Vision & Multimodal AI Research",
    template: "%s | Muhammad Hassan Askari",
  },
  description:
    "Academic research portfolio of Muhammad Hassan Askari, a Computer Science graduate working on robust computer vision, domain adaptation, environmental domain shift, and multimodal AI.",
  keywords: [
    "Muhammad Hassan Askari",
    "computer vision",
    "machine learning",
    "robust AI",
    "domain adaptation",
    "domain generalization",
    "multimodal AI",
    "vision language models",
    "VLM",
    "MLLM",
    "environmental domain shift",
    "computer vision researcher",
    "AI research",
    "USTC",
    "Master's research",
  ],
  authors: [{ name: "Muhammad Hassan Askari", url: "https://research.askarisyed.com" }],
  creator: "Muhammad Hassan Askari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://research.askarisyed.com",
    siteName: "Muhammad Hassan Askari Research Portfolio",
    title: "Muhammad Hassan Askari | Computer Vision & Multimodal AI Research",
    description:
      "Reliable Visual Intelligence Under Environmental Domain Shift. Early-career researcher investigating robust visual perception, domain adaptation, and multimodal AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan Askari | Computer Vision & Multimodal AI Research",
    description:
      "Academic research portfolio of Muhammad Hassan Askari focusing on robust computer vision, domain shift, and multimodal AI.",
  },
  robots: {
    index: true,
    follow: true,
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
        "@id": "https://research.askarisyed.com/#person",
        "name": RESEARCH_IDENTITY.name,
        "jobTitle": "Early-Career AI & Computer Vision Researcher",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "COMSATS University Islamabad",
        },
        "url": "https://research.askarisyed.com",
        "sameAs": [
          RESEARCH_IDENTITY.github,
          RESEARCH_IDENTITY.linkedin,
        ],
        "knowsAbout": [
          "Computer Vision",
          "Robust Machine Learning",
          "Domain Adaptation",
          "Multimodal Artificial Intelligence",
          "Environmental Domain Shift",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://research.askarisyed.com/#website",
        "url": "https://research.askarisyed.com",
        "name": "Muhammad Hassan Askari Academic Research Portfolio",
        "author": {
          "@id": "https://research.askarisyed.com/#person",
        },
      },
      {
        "@type": "ScholarlyArticle",
        "headline": PUBLICATIONS[0].title,
        "author": PUBLICATIONS[0].authors.map((name) => ({
          "@type": "Person",
          "name": name,
        })),
        "description":
          "Research on robust traffic-sign classification under snow-degraded visual conditions using a task-aware multi-stage approach.",
      },
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
      </body>
    </html>
  );
}
