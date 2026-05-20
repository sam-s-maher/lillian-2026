"use client";

import { useState } from "react";

interface BandcampEmbedProps {
  trackId: string;
  title: string;
  bandcampUrl: string;
  size?: "small" | "large";
}

export default function BandcampEmbed({ trackId, title, bandcampUrl, size = "large" }: BandcampEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerHeight = size === "large" ? 400 : 120;
  const maxWidth = size === "large" ? 250 : 350;

  return (
    <div className="relative w-full flex items-center justify-center" style={{ maxWidth, height: containerHeight }}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex flex-col items-center justify-center">
          <div className="w-[80%] h-[60%] bg-gray-300 rounded mb-4" />
          <div className="w-[60%] h-4 bg-gray-300 rounded mb-2" />
          <div className="w-[40%] h-4 bg-gray-300 rounded" />
        </div>
      )}
      
      <iframe
        style={{ 
          border: 0, 
          width: "100%", 
          height: containerHeight,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in"
        }}
        src={`https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=${size}/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`}
        seamless
        title={title}
        onLoad={() => setIsLoaded(true)}
      >
        <a href={bandcampUrl}>{title}</a>
      </iframe>
    </div>
  );
}
