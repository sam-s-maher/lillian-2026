"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const pages = ["/gigs", "/projects", "/catalogue", "/reviews", "/about"];

export default function PageNavigator() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isFirstPage = pathname === "/";
  
  if (isFirstPage) {
    return null;
  }

  const currentIndex = pages.indexOf(pathname);
  const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
  const nextPage = pages[(currentIndex + 1) % pages.length];

  const currentLabel = pathname.replace("/", "");

  return (
    <nav className="relative z-0 flex justify-between items-center h-8 px-5 w-full">
      <button
        onClick={() => router.push(prevPage)}
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
        onClick={() => router.push(nextPage)}
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
