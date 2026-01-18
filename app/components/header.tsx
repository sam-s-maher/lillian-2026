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
        className={`w-full sticky top-[var(--mobile-padding)] lg:top-[var(--desktop-padding)] z-40 flex items-start
                  shadow-subtle bg-transparent lg:shadow-none justify-center
                  ${isFirstPage ? 'lg:justify-start' : 'justify-center'}`}
                  style={{ height: 'var(--header-height)' }}>
        <Image
          src={mobileLogo}
          alt="Lillian Albazi Logo"
          width={800}
          height={200}
          className="block lg:hidden w-full h-auto max-w-[560px]"
        />
        <Image
          src={desktopLogo}
          alt="Lillian Albazi Logo"
          width={800}
          height={200}
          className={`hidden lg:block w-1/3 h-auto ${isFirstPage ? 'px-[var(--desktop-padding)]' : ''}`}
        />
      </header>
    </>
  );
}
