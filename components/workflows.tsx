"use client";

import { useState, useEffect, useRef } from "react";
import Spotlight from "@/components/spotlight";

// --- Counting Animation Component with Scroll Trigger ---
const Counter = ({ end, isMillion = false, duration = 2000, shouldStart = false }: { 
  end: number; 
  isMillion?: boolean; 
  duration?: number;
  shouldStart: boolean;
}) => {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (shouldStart && !hasRun) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const target = isMillion ? 1000000 : end;
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setHasRun(true);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [shouldStart, end, isMillion, duration, hasRun]);

  if (isMillion && count >= 1000000) return <>1M</>;
  return <>{count.toLocaleString()}</>;
};

export default function Workflows() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Starts when 20% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          
          {/* Section header */}
          <div className={`mx-auto max-w-3xl pb-12 text-center md:pb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Growing brands through cinematic vision
            </h2>
            <p className="text-lg text-indigo-200/65">
              From the first cut to millions of views, our journey is defined by the success 
              of the creators we partner with and the stories we help them tell.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            
            {/* Card 1 */}
            <div className={`group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100`}>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="flex h-[240px] items-center justify-center border-b border-gray-800/50">
                   <div className="font-nacelle text-6xl font-bold text-gray-200">
                      <Counter end={100} shouldStart={isVisible} />
                      <span className="text-gray-400">+</span>
                   </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Satisfied Clients</span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">Building long-term partnerships with creators who trust our professional vision.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100`}>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="flex h-[240px] items-center justify-center border-b border-gray-800/50">
                   <div className="font-nacelle text-6xl font-bold text-gray-200">
                      <Counter end={1000} shouldStart={isVisible} />
                      <span className="text-gray-400">+</span>
                   </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Edited Videos</span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">A milestone of high-quality edits, ranging from social clips to cinematic features.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100`}>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="flex h-[240px] items-center justify-center border-b border-gray-800/50">
                   <div className="font-nacelle text-6xl font-bold text-gray-200">
                      <Counter end={1} isMillion={true} shouldStart={isVisible} />
                      <span className="text-gray-400">+</span>
                   </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Total Views</span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">Our edits perform. We help clients surpass massive view counts through strategy.</p>
                </div>
              </div>
            </div>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}