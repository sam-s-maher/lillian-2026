"use client";

import { useState, useEffect } from "react";
import { useTina, tinaField } from "tinacms/dist/react";
import styles from "./music.module.css";

interface BandcampEmbedProps {
  trackId: string;
  title: string;
  bandcampUrl?: string | null;
}

function BandcampEmbed({ trackId, title, bandcampUrl }: BandcampEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 650px)");
    setIsCompact(mq.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsCompact(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const artworkParam = isCompact ? "/artwork=small" : "";
  const src = `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false${artworkParam}/transparent=true/`;

  const height = isCompact ? 120 : 442;

  return (
    <div className={`${styles.embedWrapper} ${isCompact ? styles.embedWrapperCompact : ""}`}>
      {!loaded && (
        <div className={styles.skeleton}>
          <div className={styles.skeletonArt} />
          <div className={styles.skeletonText}>
            <div className={styles.skeletonLine} style={{ width: "70%" }} />
            <div className={styles.skeletonLine} style={{ width: "50%" }} />
          </div>
          <div className={styles.skeletonControls}>
            <div className={styles.skeletonPlayBtn} />
            <div className={styles.skeletonProgress} />
          </div>
        </div>
      )}
      <iframe
        style={{ 
          border: 0, 
          width: "100%", 
          height: height,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in"
        }}
        src={src}
        seamless
        title={title}
        onLoad={() => setLoaded(true)}
      >
        {bandcampUrl && <a href={bandcampUrl}>{title}</a>}
      </iframe>
    </div>
  );
}

interface MusicNode {
  title?: string | null;
  track_id?: string | null;
  bandcamp_url?: string | null;
  order?: number | null;
}

interface MusicClientProps {
  query: string;
  variables: Record<string, unknown>;
  data: {
    musicConnection: {
      edges?: Array<{
        node?: MusicNode | null;
      } | null> | null;
    };
  };
}

export default function MusicClient(props: MusicClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const edges = data?.musicConnection?.edges ?? [];
  const items = edges
    .map((e) => e?.node)
    .filter(Boolean)
    .sort((a, b) => {
      const orderA = a?.order ?? Number.MAX_SAFE_INTEGER;
      const orderB = b?.order ?? Number.MAX_SAFE_INTEGER;
      return orderA - orderB;
    }) as MusicNode[];

  return (
    <div className={styles.content}>
      <div className={styles.grid}>
        {items.map((item, i) => {
          if (!item.track_id) return null;
          const edgeNode = edges[i]?.node;
          return (
            <div
              key={i}
              // @ts-ignore - TinaCMS types
              data-tina-field={edgeNode ? tinaField(edgeNode) : undefined}
            >
              <BandcampEmbed
                trackId={item.track_id}
                title={item.title ?? `Track ${i + 1}`}
                bandcampUrl={item.bandcamp_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
