"use client";

import Link from "next/link";
import Image from "next/image";

import { useSection } from "./section-observer";
import EnvelopeIcon from "./components/icons/envelope-icon";

export default function Page() {
  const { current } = useSection();

  const isActive = (id: string) => id === current.id;

  return (
    <>
      <nav className="hidden left-0 pl-10 lg:flex lg:flex-col fixed h-screen justify-center text-2xl leading-10">
        <Link href="#gigs-section" className={isActive("gigs-section") ? "active" : undefined}>Gigs</Link>
        <Link href="#projects-section" className={`pt-6 ${isActive("projects-section") ? "active" : undefined}`}>Projects</Link>
        <Link href="#catalogue-section" className={isActive("catalogue-section") ? "active" : undefined}>Catalogue</Link>
        <Link href="#reviews-section" className={isActive("reviews-section") ? "active" : undefined}>Reviews</Link>
        <a 
          href="mailto:albazi.music@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pt-6 flex items-center gap-1.5 hover:opacity-70 transition-opacity"
        >
          Contact
          <EnvelopeIcon />
        </a>
        <Link href="#about-section" className={isActive("about-section") ? "active" : undefined}>About</Link>
        <div className="fixed bottom-10 flex gap-3 items-center">
            <a
              href="https://lillianalbazi.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bandcamp"
              className="flex items-center"
            >
              <Image
                src="/images/bandcamp_black.png"
                alt="Bandcamp"
                width={28}
                height={28}
                className="object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/lalbazi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-black h-7 w-7">
                <Image
                  src="/images/instagram_white.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </span>
            </a>
          </div>
      </nav>
    </>
  );
}
