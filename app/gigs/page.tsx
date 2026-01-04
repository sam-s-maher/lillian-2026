import { client } from "../../tina/__generated__/client";

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export default async function Page() {
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
    });

  return (
    <>
      <div
        id="gigs-section"
        className="section flex flex-col gap-3 items-center w-full px-4 md:text-2xl">
        {sortedGigs.map((gig) => (
          <div key={gig.node.id} className="flex items-center max-w-full">
            <div className="whitespace-nowrap flex-shrink-0">
              {formatDate(gig.node.when)}
            </div>
            <div className="relative flex-1 min-w-[10px] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap select-none">
              .............................................
            </div>
            {gig.node.tickets ? (
              <div className="flex gap-1 whitespace-nowrap flex-shrink-0">
                <a
                  href={gig.node.tickets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1"
                >
                  <span className="uppercase">{gig.node.location}</span>
                  <span className="font-bold">{gig.node.venue}</span>
                </a>
              </div>
            ) : (
              <div className="flex gap-1 whitespace-nowrap flex-shrink-0">
                  <span className="uppercase">{gig.node.location}</span>
                  <span className="font-bold">{gig.node.venue}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
