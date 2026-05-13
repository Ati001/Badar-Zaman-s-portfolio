"use client";

import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  const contactLinks = [
    {
      label: "Our Location",
      // Map link stays in the "backend" href
      href: "https://maps.google.com/?q=Mandi+Bahauddin,Punjab,Pakistan",
      icon: (
        <svg className="shrink-0 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path d="M8 0C4.686 0 2 2.686 2 6c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6Zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
      ),
    },
    {
      label: "Email Me",
      // Email stays in the "backend" href
      href: "mailto:m.badarzaman02@gmail.com",
      icon: (
        <svg className="shrink-0 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path d="M14 2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 2-6 4-6-4h12Z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      // Number stays in the "backend" href
      href: "https://wa.me/923328453805",
      icon: (
        <svg className="shrink-0 fill-green-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.735-.981z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#020617] py-12 md:py-20">
      {/* Background Illustration */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-20" aria-hidden="true">
        <Image className="max-w-none" src={FooterIllustration} width={1076} height={378} alt="Footer illustration" />
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center">
          
          {/* Logo */}
          <div className="mb-10">
            <Logo />
          </div>

          {/* Contact Buttons */}
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-slate-900/50 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] md:w-auto"
              >
                {link.icon}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Copyright Section */}
          <div className="mt-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-indigo-200/30">
              © 2026 BADAR ZAMAN · Mandi Bahauddin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}