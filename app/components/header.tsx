"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Socials from './socials';

export default function Header({ white = false }: { white?: boolean } = {}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  const isFirstPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileLogo = white ? "/images/lillian_logo_mobile_white.png" : "/images/lillian_logo_mobile.png";
  const desktopLogo = white ? "/images/lillian_logo_desktop_white.png" : "/images/lillian_logo_desktop.png";

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-40 flex items-center transition-transform duration-300
                  ${visible ? 'translate-y-0' : '-translate-y-full'}
                  justify-between px-[var(--mobile-padding)] lg:px-[var(--desktop-padding)] py-2 lg:py-3`}
        style={{ 
          height: 'var(--header-height)',
          backgroundColor: 'var(--primary-background)',
        }}>
        <Link href="/" className="block lg:hidden w-full max-w-[560px]">
          <Image
            src={mobileLogo}
            alt="Lillian Albazi Logo"
            width={800}
            height={200}
            className="w-full h-auto"
          />
        </Link>
        <Link href="/" className={`hidden lg:block ${isFirstPage ? 'w-1/3' : 'w-1/4'}`}>
          <Image
            src={desktopLogo}
            alt="Lillian Albazi Logo"
            width={800}
            height={200}
            className="w-full h-auto"
          />
        </Link>
        {!isFirstPage && (
          <div className="hidden lg:flex items-center">
            <Socials />
          </div>
        )}
      </header>
      <div style={{ height: 'var(--header-height)' }} className="block" />
    </>
  );
}
