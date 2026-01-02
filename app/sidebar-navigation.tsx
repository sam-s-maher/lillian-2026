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
      </nav>
    </>
  );
}
