import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

// --- PREMIUM SEO & BRANDING ---
export const metadata = {
  // Your main heading for Google search results
  title: "The Apex Visuals | High-Retention Video Editing by Badar", 
  
  // Option 2: The Premium/Cinematic focused description
  description: "Transform raw footage into cinematic masterpieces. The Apex Visuals provides elite video editing and motion design services by Badar, helping creators and brands dominate through visual excellence.",
  
  keywords: [
    "Badar", 
    "The Apex Visuals", 
    "Apex Visuals", 
    "apexvisuals.me", 
    "high retention video editing",
    "video editor portfolio",
    "cinematic motion design",
    "Badar video editor"
  ],
  icons: {
    icon: "/favicon.png", // Ensure favicon.png is in your /public folder
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