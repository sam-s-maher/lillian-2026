"use client";

import { usePathname } from "next/navigation";
import { useSection } from "./section-observer";

export default function Page() {
  const { current } = useSection();
  const pathname = usePathname();
  
  const isFirstPage = pathname === "/";
  
  if (isFirstPage) {
    return null;
  }

  return (
    <nav className="relative z-0 flex justify-center items-center h-6 px-5 w-full">
      <div key={current.label} className="uppercase underline label-fade text-2xl">
        {current.label}
      </div>
    </nav>
  );
}
