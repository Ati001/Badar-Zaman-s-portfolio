"use client";

import { useState, useRef, Fragment } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2" aria-hidden="true">
        <Image src={SecondaryIllustration} width={1165} height={1012} alt="Decoration" />
      </div>

      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-none"
        onClick={() => setModalOpen(true)}
      >
        <figure className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
          <Image
            className="opacity-70 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
          />
        </figure>
        <div className="absolute z-20 flex items-center gap-4 rounded-full bg-gray-950/90 px-6 py-3 backdrop-blur-xl border border-white/10 shadow-2xl">
          <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Watch Showreel <span className="text-white/40 ml-1">4K</span>
          </span>
        </div>
      </button>

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog onClose={() => setModalOpen(false)}>
          <TransitionChild
            as="div"
            className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          />
          <TransitionChild
            as="div"
            className="fixed inset-0 z-[99999] flex px-4 py-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
          >
            <div className="mx-auto flex h-full max-w-6xl items-center">
              <Dialog.Panel className="aspect-video w-full overflow-hidden rounded-3xl bg-black">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls muted playsInline>
                  <source src={video} type="video/mp4" />
                </video>
              </Dialog.Panel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </div>
  );
}