import { client } from "../../tina/__generated__/client";
import Image from "next/image";

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

interface GigListProps {
  limit?: number;
  className?: string;
}

export default async function GigList({ limit, className = "" }: GigListProps) {
  const gigs = await client.queries.gigConnection();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedGigs = (gigs.data.gigConnection?.edges ?? [])
    .filter(gig => {
      const gigDate = new Date(gig.node.when);
      gigDate.setHours(0, 0, 0, 0);
      return gigDate > today;
    })
    .sort((a, b) => {
      const dateA = new Date(a.node.when).getTime();
      const dateB = new Date(b.node.when).getTime();
      return dateA - dateB;
    })
    .slice(0, limit);

  return (
    <div className={`flex flex-col gap-1 lg:gap-3 items-center w-full lg:px-4 md:text-2xl ${className}`}>
      {sortedGigs.map((gig) => (
        <div key={gig.node.id} className="flex items-center w-full">
          <div className="whitespace-nowrap flex-shrink-0">
            {formatDate(gig.node.when)}
          </div>
          <div className="h-[0.8em] flex-1 mx-2 border-b border-current" />
          {gig.node.tickets ? (
            <div className="flex gap-1 whitespace-nowrap flex-shrink-0">
              <a
                href={gig.node.tickets}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center"
              >
                <Image
                  src="/images/ticket.png"
                  alt="Tickets"
                  width={30}
                  height={30}
                  className="inline-block me-1"
                />
                <span className="me-2">{gig.node.venue}</span>
                <span className="uppercase">{gig.node.state}</span>
              </a>
            </div>
          ) : (
            <div className="flex gap-1 whitespace-nowrap flex-shrink-0">
                <span className="me-2">{gig.node.venue}</span>
                <span className="uppercase">{gig.node.state}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
