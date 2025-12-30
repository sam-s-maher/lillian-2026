import { client } from "../../tina/__generated__/client";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-AU");
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
      <div className="flex flex-col gap-3 items-center w-full px-4 md:text-xl">
        {sortedGigs.map((gig) => (
          <div key={gig.node.id} className="flex items-center max-w-full">
            <div className="whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">
              {formatDate(gig.node.when)}
            </div>
            <div className="grow shrink basis-0 max-w-[20%] min-w-0 overflow-hidden text-ellipsis whitespace-nowrap select-none">
              .........
            </div>
            {gig.node.tickets ? (
              <div className="flex gap-1 whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">
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
              <div className="flex gap-1 whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">
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
