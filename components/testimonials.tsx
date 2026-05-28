"use client";

import { useState, useRef } from "react";

// --- Types ---
// Updated to match your desired name exactly
type Category = "Saas Explainer" | "long" | "short";

interface VideoData {
  id: number;
  url: string;
  title: string;
}  

export default function Portfolio() {
  // Matches the new type name
  const [activeCategory, setActiveCategory] = useState<Category>("Saas Explainer");

  const videoData: Record<Category, VideoData[]> = {
    "Saas Explainer": [
      { id: 1, url: "https://vimeo.com/1191911212", title: "Portfolio video" },
      { id: 2, url: "https://vimeo.com/manage/1196347319/general", title: "Saas explainer video" },
      { id: 2, url: "https://vimeo.com/manage/1196347320/general", title: "Saas explainer video" },
      { id: 2, url: "https://vimeo.com/manage/1196347349/general", title: "Saas explainer video" },
      { id: 2, url: "https://vimeo.com/1191907530", title: "Saas explainer video" },
      { id: 3, url: "https://vimeo.com/1191908446", title: "App promo video" },
    ],
    long: [
      { id: 1, url: "https://vimeo.com/1192012696?fl=tl&fe=ec", title: "Fast paced" },
      { id: 2, url: "https://vimeo.com/1151190541?fl=tl&fe=ec", title: "Educational Content" },
      { id: 3, url: "https://vimeo.com/manage/1196347350/general", title: "Podcast editing" },
      { id: 3, url: "https://vimeo.com/1191908941?fl=tl&fe=ec", title: "Graphics Editing" },
      { id: 4, url: "https://vimeo.com/1191907527?fl=tl&fe=ec", title: "Property Speed ramp" },
      { id: 5, url: "https://vimeo.com/1191911918?fl=tl&fe=ec", title: "Poperty Highlights" },
      { id: 6, url: "https://vimeo.com/1191907525?fl=tl&fe=ec", title: "Property edit" },
      { id: 7, url: "https://vimeo.com/1191907528?fl=tl&fe=ec", title: "Short-form showreel" },
      { id: 8, url: "https://vimeo.com/1151194453?fl=tl&fe=ec", title: "Before and After" },
      { id: 9, url: "https://vimeo.com/1191907528?fl=tl&fe=ec", title: "Documentary edit" },
    ],
    short: [
      { id: 1, url: "https://vimeo.com/1191906074?fl=tl&fe=ec", title: "Motion Graphics reel" },
      { id: 2, url: "https://vimeo.com/1191910375?fl=tl&fe=ec", title: "Instagram reel" },
      { id: 3, url: "https://vimeo.com/1191909850?fl=tl&fe=ec", title: "Instagram reel" },
      { id: 4, url: "https://vimeo.com/1196349799?share=copy&fl=sv&fe=ci", title: "Instagram reel" },
      { id: 4, url: "https://vimeo.com/1192061835?fl=tl&fe=ec", title: "TikTok Ad" },
      { id: 5, url: "https://vimeo.com/1191909476?fl=tl&fe=ec", title: "Youtube Short" },
      { id: 6, url: "https://vimeo.com/1191909209?fl=tl&fe=ec", title: "Story" },
    ],
  };

  return (
    <section id="portfolio" className="relative scroll-mt-20 py-12 md:py-20">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-800 before:absolute before:inset-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-indigo-500/50 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-sm uppercase tracking-widest text-transparent">
              Portfolio
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Proven Results & Case Studies
          </h2>
          <p className="text-lg text-indigo-200/65">
            Explore a showcase of projects where cinematic visual storytelling met data-driven results for creators globally.
          </p>
        </div>

        {/* --- FIXED: Category names in the map below now match the type --- */}
        <div className="flex justify-center pb-12">
          <div className="relative flex w-full max-w-[500px] rounded-full bg-gray-900/40 p-1 backdrop-blur-md border border-white/10 shadow-2xl">
            {(["Saas Explainer", "long", "short"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative z-10 flex-1 rounded-full px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-500 ${
                  activeCategory === cat 
                    ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {cat === "Saas Explainer" ? "Saas Explainer" : cat === "long" ? "Long-form" : "Short-form"}
              </button>
            ))}
          </div>
        </div>

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

function VideoCard({ video, isVertical }: { video: VideoData; isVertical: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const vimeoId = getVimeoId(video.url);

  const getVimeoEmbedUrl = (id: string | null) => {
    if (id) {
      return `https://player.vimeo.com/video/${id}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&rel=0`;
    }
    return video.url;
  };

  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-black/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full ${isVertical ? "aspect-[9/16]" : "aspect-video"}`}>
        {isHovered && vimeoId ? (
          <iframe
            src={getVimeoEmbedUrl(vimeoId)}
            className="h-full w-full object-cover"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative h-full w-full bg-gray-900 flex items-center justify-center overflow-hidden">
            {vimeoId && (
                <img 
                    src={`https://vumbnail.com/${vimeoId}.jpg`} 
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                    alt={video.title}
                />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent z-10" />
          </div>
        )}

        <div 
          className={`absolute inset-0 z-20 flex flex-col justify-between p-5 transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-300 group-hover:scale-110">
              <svg className="ml-1 fill-white" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
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