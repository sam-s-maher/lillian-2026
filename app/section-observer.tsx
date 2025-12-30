"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const SECTIONS = [
  { id: "gigs-section", label: "Gigs" },
  { id: "projects-section", label: "Projects" },
  { id: "catalogue-section", label: "Catalogue" },
  { id: "about-section", label: "About" },
];

const FIXED_NAVBAR_HEIGHT = 80;

type SectionContextType = {
  current: { id: string; label: string };
};

const SectionContext = createContext<SectionContextType>({ current: SECTIONS[0] });

export const useSection = () => useContext(SectionContext);

export const SectionObserver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState(SECTIONS[0]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleIntersect = (entries) => {
      const entering = entries.filter((e) => e.isIntersecting);

      if (entering.length === 0) return;

      const found = SECTIONS.find((s) => s.id === entering[0].target.id);
      if (found) setCurrent(found);
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.01,
      rootMargin: `-${FIXED_NAVBAR_HEIGHT}px 0px -80% 0px`,
    });

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SectionContext.Provider value={{ current }}>
      {children}
    </SectionContext.Provider>
  );
};