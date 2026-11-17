import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "The Apex Visuals | SaaS & Creator Video Specialist",
  },
  description:
    "Hire Badar Zaman — a professional video editor and motion graphics designer for SaaS brands, YouTube creators, and digital agencies. Cinematic edits that drive views, retention, and revenue.",
  keywords: [
    "hire video editor",
    "SaaS explainer video editor",
    "B2B SaaS product demo video",
    "professional video editor for hire",
    "YouTube video editing services",
    "motion graphics designer for hire",
    "high retention YouTube editing",
    "white label video editing services",
    "freelance video editor online",
    "cinematic video editor",
    "commercial ad video editor",
    "short form content editor",
    "Badar Zaman",
    "The Apex Visuals",
    "Go Apex Studio",
  ],
  alternates: {
    canonical: "https://www.goapexstudio.me",
  },
  openGraph: {
    title: "The Apex Visuals | SaaS & Creator Video Specialist",
    description:
      "Cinematic video editing and motion graphics by Badar Zaman. Helping SaaS brands, YouTube creators, and agencies grow with scroll-stopping content.",
    url: "https://www.goapexstudio.me",
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