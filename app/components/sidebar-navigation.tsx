"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import EnvelopeIcon from "./icons/envelope-icon";

export default function Page() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <nav className="hidden left-[var(--mobile-padding)] lg:left-[var(--desktop-padding)] lg:flex lg:flex-col fixed h-screen h-[100svh] justify-center text-2xl leading-10">
        <Link
          href="/gigs"
          scroll={true}
          className={isActive("/gigs") ? "active" : undefined}
        >
          Gigs
        </Link>
        <Link
          href="/projects"
          scroll={true}
          className={`pt-6 ${isActive("/projects") ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/catalogue"
          scroll={true}
          className={isActive("/catalogue") ? "active" : undefined}
        >
          Catalogue
        </Link>
        <Link
          href="/reviews"
          scroll={true}
          className={isActive("/reviews") ? "active" : undefined}
        >
          Reviews
        </Link>
        <Link
          href="/about"
          scroll={true}
          className={`pt-6 ${isActive("/about") ? "active" : ""}`}
        >
          About
        </Link>
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
