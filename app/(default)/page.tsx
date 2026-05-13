import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Video Editor for Hire | The Apex Visuals",
  description:
    "Hire Badar Zaman — a professional video editor and motion graphics designer for YouTube creators, SaaS brands, and businesses. Cinematic edits that drive views, retention, and revenue.",
  keywords: [
    "hire video editor",
    "real estate video editor",
    "property video editor",
    "property walkthrough video editor",
    "Real estate editor",
    "professional video editor for hire",
    "YouTube video editing services",
    "motion graphics for hire",
    "SaaS explainer video editor",
    "high retention YouTube editing",
    "freelance video editor online",
    "cinematic video editor",
    "video editing for brands",
    "short form content editor",
    "Badar Zaman",
    "Apex visuals",
    "Apexvisuals",
    "Apex visual",
    "The Apex Visuals",
  ],
  alternates: {
    canonical: "https://theapexvisuals.me",
  },
  openGraph: {
    title: "Professional Video Editor for Hire | The Apex Visuals",
    description:
      "Cinematic video editing and motion graphics by Badar Zaman. Helping YouTube creators and brands grow with scroll-stopping content.",
    url: "https://theapexvisuals.me",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The Apex Visuals — Professional Video Editing by Badar Zaman",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}