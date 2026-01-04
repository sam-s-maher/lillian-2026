"use client";

import Link from "next/link";

import { useSection } from "./section-observer";

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
        <Link href="#contact-section" className={`pt-6 ${isActive("contact-section") ? "active" : undefined}`}>Contact</Link>
        <Link href="#about-section" className={isActive("about-section") ? "active" : undefined}>About</Link>
        <div className="fixed bottom-10 flex gap-3 items-center">
            <a
              href="https://lillianalbazi.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bandcamp"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <img
                src="/images/bandcamp_black.png"
                alt="Bandcamp"
                className="h-7 w-7 object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/lalbazi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <span className="inline-flex items-center justify-center rounded-full bg-black h-7 w-7">
                <img
                  src="/images/instagram_white.svg"
                  alt="Instagram"
                  className="h-4 w-4 object-contain"
                />
              </span>
            </a>
          </div>
      </nav>
    </>
  );
}
