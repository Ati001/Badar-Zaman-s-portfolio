"use client";

import { useState, useEffect } from "react";

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
    <section id="portfolio" className="relative scroll-mt-20 py-12 md:py-20">
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

        <div className="flex justify-center pb-12">
          <div className="relative flex w-full max-w-[620px] rounded-full bg-gray-900/80 p-1 border border-white/10 shadow-lg">
            {(["Saas Explainer", "long", "short", "meta"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative z-10 flex-1 rounded-full px-3 py-2.5 text-xs md:text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
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
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

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

  return (
    <div
      className="group relative transform-gpu cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 border border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full ${isVertical ? "aspect-[9/16]" : "aspect-video"}`}>
        {isHovered && vimeoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&rel=0`}
            className="h-full w-full object-cover"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative h-full w-full bg-zinc-900 flex items-center justify-center overflow-hidden">
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                alt={video.title}
              />
            ) : (
              <div className="absolute inset-0 bg-zinc-900" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          </div>
        )}

        <div
          className={`absolute inset-0 z-20 flex flex-col justify-between p-5 transition-opacity duration-300 ${
            isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 border border-white/30 shadow-md transition-transform duration-200 group-hover:scale-110">
              <svg className="ml-1 fill-white" width="20" height="20" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <div className="rounded-lg bg-black/60 px-3 py-1.5 border border-white/10">
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