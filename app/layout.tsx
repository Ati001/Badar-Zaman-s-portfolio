import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";

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

// --- UPDATED METADATA FOR SEO & SOCIAL MEDIA ---
export const metadata = {
  metadataBase: new URL('https://theapexvisuals.me'),
  title: "The Apex Visuals | Video Editing & Visual Storytelling",
  description: "High-end video editing and visual content creation by The Apex Visuals.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The Apex Visuals",
    description: "Professional Video Editing & Visual Storytelling",
    url: "https://theapexvisuals.me",
    siteName: "The Apex Visuals",
    images: [
      {
        url: "/opengraph-image.png", // Points to public/opengraph-image.png
        width: 1200,
        height: 630,
        alt: "The Apex Visuals Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Apex Visuals",
    description: "Professional Video Editing & Visual Storytelling",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}