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
    // On desktop first page, always keep header visible
    if (isFirstPage && window.innerWidth >= 1024) {
      setVisible(true);
      return;
    }

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
  }, [isFirstPage]);

  const mobileLogo = white ? "/images/lillian_logo_mobile_white.png" : "/images/lillian_logo_mobile.png";
  const desktopLogo = white ? "/images/lillian_logo_desktop_white.png" : "/images/lillian_logo_desktop.png";

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-40 flex items-center transition-transform duration-300
                  ${visible ? 'translate-y-0' : '-translate-y-full'}
                  justify-between px-[var(--mobile-padding)] lg:px-[var(--desktop-padding)] py-2 lg:py-3
                  lg:items-start`}
        style={{ 
          height: 'var(--header-height)',
          backgroundColor: white ? 'transparent' : (isFirstPage ? 'transparent' : 'var(--primary-background)'),
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
        {isFirstPage ? (
          <Link href="/" className="hidden lg:block w-1/3">
            <Image
              src={desktopLogo}
              alt="Lillian Albazi Logo"
              width={800}
              height={200}
              className="w-full h-auto"
            />
          </Link>
        ) : (
          <>
            <div className="hidden lg:block w-1/4" />
            <Link href="/" className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1/4">
              <Image
                src={desktopLogo}
                alt="Lillian Albazi Logo"
                width={800}
                height={200}
                className="w-full h-auto"
              />
            </Link>
            <div className="hidden lg:flex items-start">
              <Socials />
            </div>
          </>
        )}
      </header>
      <div style={{ height: 'var(--header-height)' }} className={`${isFirstPage ? 'hidden lg:hidden' : 'block'}`} />
    </>
  );
}
