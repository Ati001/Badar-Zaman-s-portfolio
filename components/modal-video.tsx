"use client";

import { useState } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2" aria-hidden="true">
        <Image src={SecondaryIllustration} width={1165} height={1012} alt="Decoration" />
      </div>

      {/* Video Thumbnail Button */}
      <button
        type="button"
        className="group relative flex w-full items-center justify-center rounded-2xl focus:outline-none transition-transform duration-500 hover:scale-[1.02]"
        onClick={() => setModalOpen(true)}
      >
        <figure className="relative w-full overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
          <Image
            className="w-full opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
            priority
          />
        </figure>
        
        <div className="absolute z-20 flex items-center gap-4 rounded-full bg-gray-950/90 px-6 py-3 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:bg-indigo-600 group-hover:scale-110">
          <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Watch Showreel <span className="text-white/40 ml-1">4K</span>
          </span>
        </div>
      </button>

      {/* The Modal */}
      <Transition show={modalOpen} as="div">
        <Dialog onClose={() => setModalOpen(false)} className="relative z-[99999]">
          <TransitionChild
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-black/95 backdrop-blur-2xl" />
          </TransitionChild>

          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-8">
            <TransitionChild
              as="div"
              className="w-full max-w-6xl"
              enter="duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)"
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              leave="duration-300 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-75"
            >
              <DialogPanel className="relative overflow-hidden rounded-3xl bg-black shadow-[0_0_100px_rgba(79,70,229,0.4)] border border-white/10">
                
                {/* Close Button */}
                <button 
                  onClick={() => setModalOpen(false)}
                  className="absolute right-6 top-6 z-[100001] flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white/50 hover:text-white transition-colors"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* THE CLEAN VIDEO TAG */}
                {modalOpen && (
                  <video
                    width={videoWidth}
                    height={videoHeight}
                    loop
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="aspect-video w-full object-contain"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}