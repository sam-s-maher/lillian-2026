"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import PageNavigator from "./page-navigator";
import Header from "./header";
import Socials from "./socials";

export default function BottomNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") return true;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={
          `secondary-colours lg:hidden fixed inset-0 flex flex-col items-start justify-center z-50 text-xl p-10 transition-all duration-200 ease-out
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
          `
        }
        style={{
          marginBottom: "var(--bottom-navigation-height)",
          background: "var(--secondary-background)",
          color: "var(--secondary-text)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 p-10">
          <Header white={true} />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <Link href="/shows" scroll={true} className={isActive("/shows") ? "active" : undefined}>Shows</Link>
          <Link href="/about" scroll={true} className={`pt-6 ${isActive("/about") ? "active" : ""}`}>About</Link>
          <Link href="/projects" scroll={true} className={isActive("/projects") ? "active" : undefined}>Projects</Link>
          <Link href="/music" scroll={true} className={isActive("/music") ? "active" : undefined}>Music</Link>
          <Link href="/reviews" scroll={true} className={isActive("/reviews") ? "active" : undefined}>Reviews</Link>
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
          className="px-4 py-4 flex flex-row justify-between items-center w-full"
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
