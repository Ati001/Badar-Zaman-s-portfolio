"use client";

import { useState, useRef } from "react";

// --- Types ---
type Category = "showreel" | "long" | "short";

interface VideoData {
  id: number;
  url: string;
  title: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("showreel");

  // Keep these paths as they were (now using Intro-video.mp4 for testing)
  const videoData: Record<Category, VideoData[]> = {
    showreel: [
      { id: 1, url: "/videos/Intro-video.mp4", title: "Main Showreel 2024" },
      { id: 2, url: "/videos/Intro-video.mp4", title: "Cinematic Highlights" },
      { id: 3, url: "/videos/Intro-video.mp4", title: "Creative Direction" },
    ],
    long: [
      { id: 1, url: "/videos/long1.mp4", title: "Documentary Edit" },
      { id: 2, url: "/videos/long2.mp4", title: "YouTube Feature" },
      { id: 3, url: "/videos/long3.mp4", title: "SaaS Explainer" },
      { id: 4, url: "/videos/long4.mp4", title: "Corporate Story" },
      { id: 5, url: "/videos/long5.mp4", title: "Event Recap" },
      { id: 6, url: "/videos/long6.mp4", title: "Interview Cut" },
    ],
    short: [
      { id: 1, url: "/videos/short1.mp4", title: "Viral Hook Edit" },
      { id: 2, url: "/videos/short2.mp4", title: "Instagram Reel" },
      { id: 3, url: "/videos/short3.mp4", title: "TikTok Ad" },
      { id: 4, url: "/videos/short4.mp4", title: "Product Teaser" },
      { id: 5, url: "/videos/short5.mp4", title: "Short Story" },
      { id: 6, url: "/videos/short6.mp4", title: "Behind The Scenes" },
    ],
  };

  return (
    <section id="portfolio" className="relative scroll-mt-20 py-12 md:py-20">
      
      {/* --- 🛠️ UPDATED: Top Border Line and Shine Effect --- */}
      {/* This creates the faded line and the gradient 'shine' across the top */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-800 before:absolute before:inset-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-indigo-500/50 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500" aria-hidden="true" />
      {/* --- END UPDATED TOP BORDER --- */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* --- Section Header (from reference) --- */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          {/* Small upper title */}
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-sm uppercase tracking-widest text-transparent">
              Portfolio
            </span>
          </div>
          
          {/* Main Title with Animated Gradient */}
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Proven Results & Case Studies
          </h2>
          
          {/* Small Description (matched word count to reference) */}
          <p className="text-lg text-indigo-200/65">
            Explore a showcase of projects where cinematic visual storytelling met data-driven results for creators globally.
          </p>
        </div>
        {/* --- End Header --- */}

        {/* Category Switcher - (Do not tweak) */}
        <div className="flex justify-center pb-12">
          <div className="relative flex w-full max-w-[480px] rounded-full bg-gray-900/40 p-1 backdrop-blur-md border border-white/10 shadow-2xl">
            {(["showreel", "long", "short"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative z-10 flex-1 rounded-full px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-500 ${
                  activeCategory === cat 
                    ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {cat === "showreel" ? "Showreel" : cat === "long" ? "Long-form" : "Short-form"}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid - (Do not tweak) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {videoData[activeCategory].map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              isVertical={activeCategory === "short"} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Video Card Component (Do not tweak) ---
function VideoCard({ video, isVertical }: { video: VideoData; isVertical: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-black/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative w-full ${isVertical ? "aspect-[9/16]" : "aspect-video"}`}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          playsInline
          loop
          controls={isHovered}
          preload="metadata"
        >
          <source src={video.url} type="video/mp4" />
        </video>

        {/* UI Overlay */}
        <div 
          className={`absolute inset-0 z-10 flex flex-col justify-between p-5 transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
          } bg-linear-to-t from-black/80 via-transparent to-transparent`}
        >
          <div />

          {/* Center Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-300 group-hover:scale-110">
              <svg className="ml-1 fill-white" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>

          {/* Bottom Label */}
          <div className="flex items-center">
            <div className="rounded-lg bg-black/40 px-3 py-1.5 backdrop-blur-xl border border-white/5">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase antialiased">
                {video.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}