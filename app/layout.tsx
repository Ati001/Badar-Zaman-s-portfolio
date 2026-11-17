import "@/app/css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/ui/header";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goapexstudio.me"),
  title: {
    default: "The Apex Visuals | Professional Video Editor & Motion Designer",
    template: "%s | The Apex Visuals",
  },
  description:
    "The Apex Visuals by Badar Zaman — professional video editing and motion graphics for SaaS brands, YouTube creators, and digital agencies. High-retention edits, product explainers, and scroll-stopping content.",
  keywords: [
    "video editor for hire",
    "SaaS explainer video production",
    "B2B SaaS video editor",
    "product demo video editor",
    "motion graphics designer",
    "high retention YouTube video editor",
    "white label video editing agency",
    "overflow video editing partner",
    "2D motion graphics and compositing",
    "commercial ad video editor",
    "short form video editor",
    "Instagram reels and TikTok editor",
    "freelance video editor",
    "cinematic storytelling editor",
    "Badar Zaman video editor",
    "The Apex Visuals",
    "Go Apex Studio",
  ],
  authors: [{ name: "Badar Zaman", url: "https://www.goapexstudio.me" }],
  creator: "Badar Zaman",
  publisher: "The Apex Visuals",
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
  alternates: {
    canonical: "https://www.goapexstudio.me",
  },
  openGraph: {
    title: "The Apex Visuals | Professional Video Editor & Motion Designer",
    description:
      "Cinematic video editing and motion graphics by Badar Zaman. Helping SaaS brands, YouTube creators, and agencies grow through scroll-stopping visual content.",
    url: "https://www.goapexstudio.me",
    siteName: "The Apex Visuals",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The Apex Visuals — Video Editing & Motion Graphics by Badar Zaman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Apex Visuals | Video Editing & Motion Graphics",
    description:
      "Professional video editing and motion graphics by Badar Zaman. High-retention content for SaaS brands and creators.",
    images: ["/opengraph-image.png"],
    creator: "@theapexvisuals",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.goapexstudio.me/#person",
      name: "Badar Zaman",
      url: "https://www.goapexstudio.me",
      jobTitle: "Professional Video Editor & Motion Designer",
      worksFor: {
        "@type": "Organization",
        name: "The Apex Visuals",
      },
      description:
        "Expert video editor and motion graphics designer specializing in high-retention YouTube content, SaaS video production, white-label agency editing, and cinematic storytelling.",
      sameAs: [
        "https://www.goapexstudio.me",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.goapexstudio.me/#website",
      url: "https://www.goapexstudio.me",
      name: "The Apex Visuals",
      description:
        "Professional video editing and motion graphics services by Badar Zaman.",
      publisher: {
        "@id": "https://www.goapexstudio.me/#person",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.goapexstudio.me/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.goapexstudio.me/#service",
      name: "The Apex Visuals",
      url: "https://www.goapexstudio.me",
      description:
        "High-end video editing, motion graphics, and cinematic content production for SaaS companies, YouTube creators, and agencies worldwide.",
      founder: {
        "@id": "https://www.goapexstudio.me/#person",
      },
      serviceType: [
        "Video Editing",
        "Motion Graphics Design",
        "SaaS Video Production",
        "YouTube Video Production",
        "White-Label Video Editing",
        "Short Form Video Editing",
        "Commercial Ad Editing",
      ],
      areaServed: "Worldwide",
      contactPoint: {
        "@type": "ContactPoint",
        email: "badar@apexvisuals.tech",
        contactType: "Customer Service",
      },
      priceRange: "$$",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-x-clip">
          <Header />
          <main className="grow">{children}</main>
        </div>
      </body>
    </html>
  );
}