"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

const pages = ["/gigs", "/projects", "/catalogue", "/reviews", "/about"];

export default function PageNavigator() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isFirstPage = pathname === "/";
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  if (isFirstPage) {
    return null;
  }

  const currentIndex = pages.indexOf(pathname);
  const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
  const nextPage = pages[(currentIndex + 1) % pages.length];

  const currentLabel = pathname.replace("/", "");

  return (
    <nav
      className="relative z-0 flex justify-between items-center px-5 w-full border-t-2"
      style={{ height: 'var(--bottom-page-navigator-height)' }}
    >
      <button
        onClick={() => {
          router.push(prevPage, { scroll: true });
          window.scrollTo(0, 0);
        }}
        className="p-1 cursor-pointer"
        aria-label="Previous page"
      >
        <Image
          src="/images/arrow_left.png"
          alt="Previous"
          width={50}
          height={20}
        />
      </button>
      <div className="uppercase underline label-fade text-xl">
        {currentLabel}
      </div>
      <button
        onClick={() => {
          router.push(nextPage, { scroll: true });
          window.scrollTo(0, 0);
        }}
        className="p-1 cursor-pointer"
        aria-label="Next page"
      >
        <Image
          src="/images/arrow_right.png"
          alt="Next"
          width={50}
          height={20}
        />
      </button>
    </nav>
  );
}
