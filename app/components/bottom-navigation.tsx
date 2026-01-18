"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import PageNavigator from "./page-navigator";
import EnvelopeIcon from "./icons/envelope-icon";
import Header from "./header";
import Socials from "./socials";

export default function BottomNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (pathname !== "/") return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 10 && !open) {
        setOpen(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open, pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const openOnScrollAttempt = (e: Event) => {
      if (!open) setOpen(true);
    };
    window.addEventListener('wheel', openOnScrollAttempt, { passive: true });
    window.addEventListener('touchmove', openOnScrollAttempt, { passive: true });
    return () => {
      window.removeEventListener('wheel', openOnScrollAttempt);
      window.removeEventListener('touchmove', openOnScrollAttempt);
    };
  }, [open, pathname]);

  const isActive = (path: string) => {
    if (path === "/") return true;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={
          `secondary-colours lg:hidden fixed inset-0 flex flex-col items-start justify-start z-50 text-xl gap-50 p-10 transition-all duration-200 ease-out
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
          `
        }
        style={{
          marginBottom: "var(--bottom-navigation-height)",
          background: "var(--secondary-background)",
          color: "var(--secondary-text)",
        }}
      >
        <Header white={true} />
        <div className="relative flex flex-col items-start justify-center gap-2">
          <Link href="/gigs" scroll={true} className={isActive("/gigs") ? "active" : undefined}>Gigs</Link>
          <Link href="/projects" scroll={true} className={`pt-6 ${isActive("/projects") ? "active" : ""}`}>Projects</Link>
          <Link href="/catalogue" scroll={true} className={isActive("/catalogue") ? "active" : undefined}>Catalogue</Link>
          <Link href="/reviews" scroll={true} className={isActive("/reviews") ? "active" : undefined}>Reviews</Link>
          <Link href="/about" scroll={true} className={`pt-6 ${isActive("/about") ? "active" : ""}`}>About</Link>
          <a 
            href="mailto:albazi.music@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
          >
            Contact
            <EnvelopeIcon />
          </a>
        </div>
      </div>
      <nav
        className="lg:hidden fixed z-40 left-0 right-0 bottom-0 flex flex-col items-center shadow-subtle"
        style={{
          background: open ? "var(--secondary-background)" : "var(--primary-background)"
        }}
      >
        <PageNavigator />
        <div
          className="px-4 py-2 flex flex-row justify-between items-center w-full"
          style={{
            height: "var(--bottom-navigation-height)",
            color: open ? "var(--secondary-text)" : "var(--primary-text)",
          }}
        >
          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
            className="bg-transparent border-none text-2xl cursor-pointer focus:outline-none focus:ring-0 active:shadow-none shadow-none"
            style={{
              color: open ? "var(--secondary-text)" : "var(--primary-text)"
            }}
          >
            {open ? (
              <span>&#10005;</span>
            ) : (
              <span>&#9776;</span>
            )}
          </button>

          <div className="flex gap-7 items-center pb-2">
            <Socials white={open} onClick={() => setOpen(false)} />
          </div>
        </div>
      </nav>
    </>
  );
}
