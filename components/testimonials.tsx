"use client";

import { useState, useEffect, useRef } from "react";

// --- Types ---
type Category = "Saas Explainer" | "long" | "short" | "meta";

interface VideoData {
  id: number;
  url: string;
  title: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("Saas Explainer");

  const videoData: Record<Category, VideoData[]> = {
    "Saas Explainer": [
      { id: 1, url: "https://vimeo.com/1191911212", title: "Portfolio video" },
      { id: 2, url: "https://vimeo.com/1196347319", title: "Saas explainer video" },
      { id: 3, url: "https://vimeo.com/1196347320", title: "Saas explainer video" },
      { id: 4, url: "https://vimeo.com/1196347349", title: "Saas explainer video" },
      { id: 5, url: "https://vimeo.com/1219567726", title: "Saas explainer video" },
      { id: 6, url: "https://vimeo.com/1191907530", title: "Saas explainer video" },
      { id: 7, url: "https://vimeo.com/1191908446", title: "App promo video" },
    ],
    long: [
      { id: 8, url: "https://vimeo.com/1217621342", title: "Youtube video" },
      { id: 9, url: "https://vimeo.com/1202777782#t=0", title: "Educational video" },
      { id: 10, url: "https://vimeo.com/1202777672", title: "Educational video" },
      { id: 11, url: "https://vimeo.com/1192012696", title: "Fast paced" },
      { id: 12, url: "https://vimeo.com/1151190541", title: "Educational Content" },
      { id: 13, url: "https://vimeo.com/1196347350", title: "Podcast editing" },
      { id: 14, url: "https://vimeo.com/1219549505", title: "Real Estate video " },
      { id: 15, url: "https://vimeo.com/1191907527", title: "Property Speed ramp" },
      { id: 16, url: "https://vimeo.com/1191911918", title: "Poperty Highlights" },
      { id: 17, url: "https://vimeo.com/1191907525", title: "Property edit" },
    ],
    short: [
      { id: 18, url: "https://vimeo.com/1219549373", title: "Instagram reel" },
      { id: 19, url: "https://vimeo.com/1219549164", title: "Instagram reel" },
      { id: 20, url: "https://vimeo.com/1191910375", title: "Instagram reel" },
      { id: 21, url: "https://vimeo.com/1196349799", title: "Instagram reel" },
      { id: 22, url: "https://vimeo.com/1191906074", title: "Motion Graphics reel" },
      { id: 23, url: "https://vimeo.com/1191909850", title: "Instagram reel" },
      { id: 24, url: "https://vimeo.com/1191909476", title: "Instagram reel" },
      { id: 25, url: "https://vimeo.com/1191909209", title: "Story" },
    ],
    meta: [
      { id: 26, url: "https://vimeo.com/1219549374", title: "Meta Ad" },
      { id: 27, url: "https://vimeo.com/1219549504", title: "Meta Ad" },
      { id: 39, url: "https://vimeo.com/1192061835", title: "TIKTOK Ad" },
    ],
  };

  const getCategoryLabel = (cat: Category) => {
    switch (cat) {
      case "Saas Explainer":
        return "Saas Explainer";
      case "long":
        return "Long-form";
      case "short":
        return "Short-form";
      case "meta":
        return "Meta Ads";
    }
  };

  return (
    <section id="portfolio" className="relative scroll-mt-20 pt-20 pb-12 md:py-20">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-800" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-sm uppercase tracking-widest text-transparent">
              Portfolio
            </span>
          </div>
          <h2 className="bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-50 bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Proven Results & Case Studies
          </h2>
          <p className="text-lg text-indigo-200/65">
            Explore a showcase of projects where cinematic visual storytelling met data-driven results for creators globally.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-center pb-12 px-2">
          <div className="relative flex w-full max-w-[620px] overflow-x-auto rounded-full bg-gray-900/80 p-1.5 border border-white/10 shadow-lg scrollbar-none">
            {(["Saas Explainer", "long", "short", "meta"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative z-10 flex-1 rounded-full px-3.5 py-2 text-xs md:text-sm font-semibold transition-colors duration-200 whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? "bg-white text-black shadow-md"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {videoData[activeCategory].map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isVertical={activeCategory === "short" || activeCategory === "meta"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, isVertical }: { video: VideoData; isVertical: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const match = video.url.match(/vimeo\.com\/(\d+)/);
  const vimeoId = match ? match[1] : null;

  useEffect(() => {
    let isMounted = true;
    if (vimeoId) {
      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`)
        .then((res) => res.json())
        .then((data) => {
          if (isMounted && data && data.thumbnail_url) {
            setThumbnailUrl(data.thumbnail_url.replace(/_[0-9x]+/, "_960x540"));
          }
        })
        .catch(() => {});
    }
    return () => {
      isMounted = false;
    };
  }, [vimeoId]);

  // Track native fullscreen changes to keep state synchronized
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative transform-gpu cursor-pointer overflow-hidden bg-zinc-900 ${
        isFullscreen ? "h-screen w-screen rounded-0 flex items-center justify-center bg-black" : "rounded-2xl border border-white/5 shadow-lg"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!isFullscreen) setIsHovered(false);
      }}
    >
      <div
        className={`relative w-full ${
          isFullscreen ? "h-full flex items-center justify-center" : isVertical ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {(isHovered || isFullscreen) && vimeoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&rel=0`}
            className="h-full w-full object-cover"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className="relative h-full w-full bg-zinc-900 flex items-center justify-center overflow-hidden">
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                alt={video.title}
              />
            ) : (
              <div className="absolute inset-0 bg-zinc-900" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

            {/* Play Button & Center Indicator */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 border border-white/30 shadow-md backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                <svg className="ml-1 fill-white" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Floating Top Controls (Fullscreen Button) */}
        <div
          className={`absolute top-3 right-3 z-30 transition-opacity duration-200 ${
            isHovered || isFullscreen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={toggleFullscreen}
            aria-label="Toggle Fullscreen"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-transform hover:scale-105"
          >
            {isFullscreen ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            )}
          </button>
        </div>

        {/* Bottom Title Label */}
        <div
          className={`absolute bottom-3 left-3 z-20 pointer-events-none transition-opacity duration-300 ${
            isHovered && !isFullscreen ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="rounded-lg bg-black/60 px-3 py-1.5 border border-white/10">
            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase antialiased">
              {video.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}