import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

// --- FINAL SEO & BRANDING ---
export const metadata = {
  // This is the exact name that will appear in Google Search and the Browser Tab
  title: "The Apex Visuals | High-Retention Video Editing by Badar", 
  description: "Professional high-retention video editing and cinematic storytelling by Badar. The Apex Visuals helps creators and brands scale through visual excellence.",
  keywords: [
    "Badar", 
    "The Apex Visuals", 
    "Apex Visuals", 
    "apexvisuals.me", 
    "high retention video editing",
    "video editor portfolio"
  ],
  icons: {
    icon: "/favicon.png", // Points to public/favicon.png
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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