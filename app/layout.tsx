import "@/app/css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/ui/header";
import type { Metadata } from "next";

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
  metadataBase: new URL("https://theapexvisuals.me"),
  title: {
    default: "The Apex Visuals | Professional Video Editor & Motion Designer",
    template: "%s | The Apex Visuals",
  },
  description:
    "Expert video editing and motion graphics for SaaS, YouTube creators, and brands by Badar Zaman. Specializing in high-retention content and cinematic storytelling.",
  keywords: [
    "Video Editor",
    "Motion Graphics Designer",
    "YouTube Automation Editor",
    "SaaS Video Production",
    "Badar Zaman",
    "Apex Visuals",
    "High Retention Video Editing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Apex Visuals | Badar Zaman",
    description:
      "Crafting scroll-stopping, cinematic videos that drive results. See my 4K portfolio.",
    url: "https://theapexvisuals.me",
    siteName: "The Apex Visuals",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The Apex Visuals Portfolio - Badar Zaman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Apex Visuals | Video Editing",
    description: "High-end motion graphics and video editing by Badar Zaman.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow">{children}</main>
        </div>
      </body>
    </html>
  );
}