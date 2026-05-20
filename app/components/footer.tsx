"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { client } from "../../tina/__generated__/client";

export default function Footer() {
  const pathname = usePathname();
  const [acknowledgement, setAcknowledgement] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const isFirstPage = pathname === "/";

  useEffect(() => {
    client.queries.acknowledgementConnection().then((data) => {
      const text = data.data.acknowledgementConnection?.edges?.[0]?.node?.text;
      if (text) setAcknowledgement(text);
    });
  }, []);

  useEffect(() => {
    if (isFirstPage) {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Show when there's no scrollable content, or when within 100px of bottom
      const hasNoScroll = scrollHeight <= clientHeight + 50;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setVisible(hasNoScroll || isNearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Delay initial check to allow content to render
    const timeout = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [isFirstPage, pathname]);

  if (!acknowledgement || isFirstPage) {
    return null;
  }

  return (
    <footer
      className={`hidden lg:flex fixed bottom-0 left-0 right-0 z-40 items-end justify-between px-[var(--desktop-padding)] py-3 bg-transparent transition-transform duration-500 ease-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="w-1/3 text-xs">
        {acknowledgement}
      </div>
    </footer>
  );
}
