"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";

interface AboutClientProps {
  data: any;
  query: string;
  variables: any;
}

export default function AboutClient({ data, query, variables }: AboutClientProps) {
  const { data: tinaData } = useTina({ data, query, variables });

  const about = tinaData.aboutConnection?.edges?.[0]?.node;

  if (!about) {
    return (
      <div
        id="about-section"
        className="section flex flex-col items-center justify-center">
        No about content found
      </div>
    );
  }

  return (
    <div
      id="about-section"
      className="section flex flex-col lg:flex-row w-full gap-6 lg:gap-12 pt-4">
      <div className="w-full lg:w-2/5 lg:self-start lg:sticky lg:top-[calc(var(--header-height)+1rem)]">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={about.hero_image}
            alt="About"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="bordered image-fade-auto"
            priority
          />
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <TinaMarkdown content={about.description} />
      </div>
    </div>
  );
}
