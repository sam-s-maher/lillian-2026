"use client";

import { useTina } from "tinacms/dist/react";
import BandcampEmbed from "../components/bandcamp-embed";

interface MusicClientProps {
  data: any;
  query: string;
  variables: any;
}

export default function MusicClient({ data, query, variables }: MusicClientProps) {
  const { data: tinaData } = useTina({ data, query, variables });

  const sortedMusic = (tinaData.musicConnection?.edges ?? [])
    .filter((edge: any) => edge?.node && edge.node.track_id && edge.node.title)
    .slice()
    .sort((a: any, b: any) => {
      const orderA = a.node.order ?? 0;
      const orderB = b.node.order ?? 0;
      return orderA - orderB;
    });

  return (
    <div
      id="music-section"
      className="section grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-x-4 lg:gap-y-4 w-full"
    >
      {sortedMusic.map((item: any) => (
        <div
          key={item.node.id}
          className="flex flex-col items-center justify-center w-full"
        >
          <BandcampEmbed
            trackId={item.node.track_id}
            title={item.node.title}
            bandcampUrl={item.node.bandcamp_url}
            size="large"
          />
        </div>
      ))}
    </div>
  );
}
