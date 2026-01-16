"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import EnvelopeIcon from "./icons/envelope-icon";

export default function Page() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <nav className="hidden left-0 pl-10 lg:flex lg:flex-col fixed h-screen justify-center text-2xl leading-10">
        <Link href="/gigs" className={isActive("/gigs") ? "active" : undefined}>Gigs</Link>
        <Link href="/projects" className={`pt-6 ${isActive("/projects") ? "active" : ""}`}>Projects</Link>
        <Link href="/catalogue" className={isActive("/catalogue") ? "active" : undefined}>Catalogue</Link>
        <Link href="/reviews" className={isActive("/reviews") ? "active" : undefined}>Reviews</Link>
        <Link href="/about" className={`pt-6 ${isActive("/about") ? "active" : ""}`}>About</Link>
        <a 
          href="mailto:albazi.music@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
        >
          Contact
          <EnvelopeIcon />
        </a>
      </nav>
    </>
  );
}
