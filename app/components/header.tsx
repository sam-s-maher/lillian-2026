"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header({ white = false }: { white?: boolean } = {}) {
  const pathname = usePathname();
  
  // Hide header on the first/home page
  const isFirstPage = pathname === "/";

  const mobileLogo = white ? "/images/lillian_logo_mobile_white.png" : "/images/lillian_logo_mobile.png";
  const desktopLogo = white ? "/images/lillian_logo_desktop_white.png" : "/images/lillian_logo_desktop.png";

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
            src={mobileLogo}
            alt="Lillian Albazi Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative hidden lg:block h-full w-1/3">
          <Image
            src={desktopLogo}
            alt="Lillian Albazi Logo"
            fill
            className="object-contain"
          />
        </div>
      </header>
    </>
  );
}
