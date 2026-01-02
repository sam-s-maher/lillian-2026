"use client";

import React, { useState } from "react";
import Link from "next/link";

import PageNavigator from "./page-navigator";
import { useSection } from "./section-observer";

export default function BottomNavigation() {
  const [open, setOpen] = useState(false);
  const { current } = useSection();

  const isActive = (id: string) => id === current.id;

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={
          `secondary-colours lg:hidden fixed inset-0 flex flex-col items-start justify-end z-50 text-xl gap-4 p-10 transition-all duration-200 ease-out
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
          `
        }
        style={{
          marginBottom: "var(--bottom-navigation-height)",
          background: "var(--secondary-background)",
          color: "var(--secondary-text)",
        }}
      >
        <Link href="#gigs-section" className={isActive("gigs-section") ? "active" : undefined}>Gigs</Link>
        <Link href="#projects-section" className={`pt-6 ${isActive("projects-section") ? "active" : undefined}`}>Projects</Link>
        <Link href="#catalogue-section" className={isActive("catalogue-section") ? "active" : undefined}>Catalogue</Link>
        <Link href="#reviews-section" className={isActive("reviews-section") ? "active" : undefined}>Reviews</Link>
        <Link href="#contact-section" className={`pt-6 ${isActive("contact-section") ? "active" : undefined}`}>Contact</Link>
        <Link href="#about-section" className={isActive("about-section") ? "active" : undefined}>About</Link>
      </div>
      <nav
        className="lg:hidden fixed z-40 left-0 right-0 bottom-0 flex flex-col items-center shadow-sm"
        style={{
          background: open ? "var(--secondary-background)" : "var(--primary-background)",
          boxShadow: '0 -1px 6px 0 rgba(0,0,0,0.02)'
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
              boxShadow: "none",
              color: open ? "var(--secondary-text)" : "var(--primary-text)"
            }}
          >
            {open ? (
              <span>&#10005;</span>
            ) : (
              <span>&#9776;</span>
            )}
          </button>

          <div className="flex gap-3 items-center">
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
        </div>
      </nav>
    </>
  );
}
