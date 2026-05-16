"use client";

import { useTina } from "tinacms/dist/react";
import Image from "next/image";

function ensureAbsoluteUrl(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

interface ShowsClientProps {
  data: any;
  query: string;
  variables: any;
  className?: string;
  limit?: number;
}

export default function ShowsClient({ data, query, variables, className = "", limit }: ShowsClientProps) {
  const { data: tinaData } = useTina({ data, query, variables });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedGigs = (tinaData.gigConnection?.edges ?? [])
    .filter((gig: any) => {
      const gigDate = new Date(gig.node.when);
      gigDate.setHours(0, 0, 0, 0);
      return gigDate > today;
    })
    .sort((a: any, b: any) => {
      const dateA = new Date(a.node.when).getTime();
      const dateB = new Date(b.node.when).getTime();
      return dateA - dateB;
    })
    .slice(0, limit);

  return (
    <div className={`flex flex-col gap-1 lg:gap-3 items-center w-full lg:px-4 md:text-2xl ${className}`}>
      {sortedGigs.map((gig: any) => (
        gig.node.tickets ? (
          <a
            key={gig.node.id}
            href={ensureAbsoluteUrl(gig.node.tickets)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full px-1 -mx-1"
          >
            <div className="whitespace-nowrap flex-shrink-0">
              {formatDate(gig.node.when)}
            </div>
            <div className="h-[0.8em] flex-1 mx-2 border-b border-current" />
            <div className="flex gap-1 whitespace-nowrap flex-shrink-0">
              <Image
                src="/images/ticket.png"
                alt="Tickets"
                width={30}
                height={30}
                className="inline-block me-1"
              />
              <span className="me-2">{gig.node.venue}</span>
              <span className="uppercase">{gig.node.state}</span>
            </div>
          </a>
        ) : (
          <div key={gig.node.id} className="flex items-center w-full">
            <div className="whitespace-nowrap flex-shrink-0">
              {formatDate(gig.node.when)}
            </div>
            <div className="h-[0.8em] flex-1 mx-2 border-b border-current" />
            <div className="flex gap-1 whitespace-nowrap flex-shrink-0">
              <span className="me-2">{gig.node.venue}</span>
              <span className="uppercase">{gig.node.state}</span>
            </div>
          </div>
        )
      ))}
    </div>
  );
}
