"use client";

import Image from "next/image";
import VideoThumb from "@/public/images/thumbnail.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          
          <div className="flex flex-col items-center gap-12 pb-12 md:flex-row md:pb-20 md:text-left">
            
            {/* Photo Box */}
            <div className="shrink-0" data-aos="fade-right">
              <div className="relative inline-flex">
                <div className="absolute -inset-1 rounded-2xl bg-indigo-500/20 blur-sm"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl">
                  <Image
                    src="/images/mine.png" 
                    width={300}
                    height={380}
                    alt="Badar Zaman"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="bg-gray-900/80 py-3 text-center backdrop-blur-md border-t border-white/5">
                    <p className="font-nacelle text-sm font-bold tracking-wider text-indigo-400 uppercase">
                      Badar Zaman
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow">
              {/* --- ANIMATED TITLE --- */}
              <h1 
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up" 
                data-aos-delay="100"
              >
                High-Retention Visuals for Modern Brands
              </h1>
              
              <div className="max-w-3xl">
                {/* --- ANIMATED DESCRIPTION --- */}
                <p 
                  className="mb-8 text-xl text-indigo-200/65 leading-relaxed"
                  data-aos="fade-up" 
                  data-aos-delay="200"
                >
                  I specialize in cinematic video editing and motion design that transforms 
                  raw footage into high-performing assets. Whether it's YouTube content 
                  or brand commercials, I deliver results that grab attention.
                </p>
                
                {/* Smooth Scroll Button */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <a
                    className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:bg-[length:100%_150%] px-8 py-3 rounded-lg inline-flex items-center transition-all cursor-pointer"
                    href="#portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View Portfolio
                    <span className="ml-2 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Badar Zaman Portfolio Showreel"
            video="/videos/intro-video.mp4" 
            videoWidth={3840} 
            videoHeight={2160} 
          />
        </div>
      </div>
    </section>
  );
}