// ... (keep your existing imports and font configs)

// --- SEO & SOCIAL MEDIA OPTIMIZATION ---
export const metadata = {
  metadataBase: new URL('https://theapexvisuals.me'),
  title: {
    default: "The Apex Visuals | Professional Video Editor & Motion Designer",
    template: "%s | The Apex Visuals"
  },
  description: "Expert video editing and motion graphics for SaaS, YouTube creators, and brands. Specializing in high-retention content, cinematic storytelling, and organic CapCut styles.",
  keywords: ["Video Editor", "Motion Graphics Designer", "YouTube Automation Editor", "SaaS Video Production", "Badar Zaman", "Apex Visuals", "High Retention Video Editing"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The Apex Visuals | Badar Zaman",
    description: "Crafting scroll-stopping, cinematic videos that drive results. See my 4K portfolio.",
    url: "https://theapexvisuals.me",
    siteName: "The Apex Visuals",
    images: [
      {
        url: "/opengraph-image.png", // Ensure this file exists in your 'public' folder
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
  // This helps Google show your logo in search results
  icons: {
    icon: "/favicon.png", 
    apple: "/apple-touch-icon.png",
  },
};

// ... (keep your RootLayout function the same)