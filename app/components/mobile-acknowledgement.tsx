"use client";

import { useState, useEffect, useRef } from "react";
import { client } from "../../tina/__generated__/client";

export default function MobileAcknowledgement() {
  const [acknowledgement, setAcknowledgement] = useState<string | null>(null);
  const [isFullyVisible, setIsFullyVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    client.queries.acknowledgementConnection().then((data) => {
      const text = data.data.acknowledgementConnection?.edges?.[0]?.node?.text;
      if (text) setAcknowledgement(text);
    });
  }, []);

  useEffect(() => {
    const checkVisibility = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if the bottom of the element is within the viewport
      // accounting for the bottom navigation
      const bottomNavHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bottom-navigation-height')) * 16 || 64;
      const isVisible = rect.bottom <= windowHeight - bottomNavHeight && rect.top >= 0;
      
      setIsFullyVisible(isVisible);
    };

    checkVisibility();
    window.addEventListener('resize', checkVisibility);
    return () => window.removeEventListener('resize', checkVisibility);
  }, [acknowledgement]);

  if (!acknowledgement) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className={`text-xs transition-opacity duration-300 ${isFullyVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {acknowledgement}
    </div>
  );
}
