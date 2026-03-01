"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

const testimonials = [
  {
    quote: "The level of detail in the long-form edits is unmatched. Highly recommended for storytelling.",
    author: "Abdul Rehman",
    role: "Content Creator",
  },
  {
    quote: "Viral hooks and perfect pacing. My short-form engagement tripled since we started working together.",
    author: "Brat Dalton",
    role: "YOUTUBE CREATOR",
  },
  {
    quote: "Professional, timely, and creative. They take the stress out of the post-production process.",
    author: "Mina Elias",
    role: "Content Creator",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-16 bg-[#020617]" style={{ zIndex: 1 }}>
      
      {/* 1. Top Shine Line Separator */}
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* 2. Background Decoration */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-20"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-20">
        <div className="relative pt-8">
          
          {/* --- Section Header --- */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            {/* Small upper title (New) */}
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-sm uppercase tracking-widest text-transparent font-medium">
                Testimonials
              </span>
            </div>
            
            {/* Main Title */}
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Don't take our word for it
            </h2>
            
            {/* Description */}
            <p className="text-lg text-indigo-200/65">
              Explore a showcase of projects where cinematic visual storytelling met data-driven results for creators globally.
            </p>
          </div>

          {/* --- Testimonials Grid --- */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <article 
                key={index}
                className="relative flex flex-col justify-between rounded-2xl bg-slate-900/40 p-6 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden min-h-[220px]"
              >
                {/* Content Overlay - Forced Visibility */}
                <div className="relative z-50">
                  
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" style={{ fill: '#818cf8' }}>
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* The Quote (Forced White) */}
                  <p className="block !text-white text-[15px] leading-relaxed italic opacity-100" style={{ color: '#ffffff !important', display: 'block' }}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Branding (Forced indigo/White) */}
                <div className="relative z-50 mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-500/40 font-bold uppercase text-[12px]">
                    {item.author[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="!text-white font-bold text-sm leading-none" style={{ color: 'white' }}>
                      {item.author}
                    </span>
                    <span className="!text-indigo-400 text-[10px] font-bold uppercase tracking-widest mt-1.5" style={{ color: '#818cf8' }}>
                      {item.role}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}