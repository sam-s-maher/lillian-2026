'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsVisible(scrolled && isLargeScreen);
    };

    // Initial check
    checkScreenSize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isLargeScreen]);

  if (!isLargeScreen) return null;

  return (
    <header
      className={`
        w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-center
        shadow-subtle transition-all duration-300 ease-out bg-transparent
        ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'}
      `}
      style={{
        height: 'var(--header-height)',
      }}
    >
      <Image
        src="/images/lillian_logo_mobile.png"
        alt="Lillian Albazi Logo"
        height={45}
        width={220}
        className="block lg:hidden"
      />
      <Image
        src="/images/lillian_logo_desktop.png"
        alt="Lillian Albazi Logo"
        height={45}
        width={220}
        className="hidden lg:block"
      />
    </header>
  );
}