"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "gigs-section", label: "Gigs" },
  { id: "projects-section", label: "Projects" },
  { id: "catalogue-section", label: "Catalogue" },
  { id: "about-section", label: "About" },
];

const FIXED_NAVBAR_HEIGHT = 80;
const THRESHOLDS = [0.1];

export default function Page() {
  const [current, setCurrent] = useState(SECTIONS[0].label);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleIntersect = (entries) => {
      const entering = entries.filter((e) => e.isIntersecting);

      if (entering.length === 0) return;

      const found = SECTIONS.find((s) => s.id === entering[0].target.id);
      if (found) setCurrent(found.label);
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: THRESHOLDS,
      rootMargin: `-${FIXED_NAVBAR_HEIGHT}px 0px -80% 0px`,
    });

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="relative z-0 flex justify-center items-center h-6 px-5 w-full">
      <div className="uppercase underline">{current}</div>
    </nav>
  );
}
