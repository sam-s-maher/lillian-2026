"use client";

import { useSection } from "./section-observer";

export default function Page() {
  const { current } = useSection();
  
  return (
    <nav className="relative z-0 flex justify-center items-center h-6 px-5 w-full">
      <div className="uppercase underline">{current.label}</div>
    </nav>
  );
}
