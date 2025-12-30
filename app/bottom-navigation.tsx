"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BottomNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center z-40"
          style={{
            background: "var(--secondary-background)",
            color: "var(--secondary-text)",
          }}
        >
          <Link href="/">Gigs</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Catalogue</Link>
          <Link href="/">Reviews</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
      )}
      <nav
        className="fixed left-0 right-0 bottom-0 z-50 px-4 py-2 flex justify-center items-center"
        style={{
          background: open ? "var(--secondary-background)" : "var(--primary-background)",
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
      </nav>
    </>
  );
}
