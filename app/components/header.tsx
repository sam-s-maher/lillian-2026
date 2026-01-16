"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  // Hide header on the first/home page
  const isFirstPage = pathname === "/";

  return (
    <>
      <header
        className={`w-full sticky top-[4mm] z-40 flex items-center
                  shadow-subtle bg-transparent lg:shadow-none
                  ${isFirstPage ? 'lg:justify-start' : 'justify-center'}`}
        style={{
          height: 'var(--header-height)',
        }}>
        <div className="relative block lg:hidden h-full w-full">
          <Image
            src="/images/lillian_logo_mobile.png"
            alt="Lillian Albazi Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative hidden lg:block h-full w-1/3">
          <Image
            src="/images/lillian_logo_desktop.png"
            alt="Lillian Albazi Logo"
            fill
            className="object-contain"
          />
        </div>
      </header>
    </>
  );
}
