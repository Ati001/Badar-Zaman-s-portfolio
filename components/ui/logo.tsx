import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="relative z-10 inline-flex items-center gap-2" aria-label="Apex Visuals">
      <Image 
        src="/images/apex-logo.png" 
        alt="Apex Visuals Logo" 
        width={32} 
        height={32} 
        priority 
        className="aspect-square object-contain"
      />
      <span className="font-nacelle text-lg font-semibold text-gray-200">
        Apex Visuals
      </span>
    </Link>
  );
}