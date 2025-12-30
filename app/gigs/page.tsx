import { client } from "../../tina/__generated__/client";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default async function Page() {
  const gigs = await client.queries.gigConnection();
  return (
    <>
      <div className="flex flex-col gap-3 items-center w-full px-4 md:text-xl">
        {(gigs.data.gigConnection?.edges ?? []).map((gig) => (
          <div key={gig.node.id} className="flex items-center max-w-full">
            <div className="whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">
              {formatDate(gig.node.when)}
            </div>
            <div className="grow shrink basis-0 max-w-[20%] min-w-0 overflow-hidden text-ellipsis whitespace-nowrap select-none">
              .........
            </div>
            {gig.node.tickets ? (
              <div className="flex gap-1 whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">
                  <a href={gig.node.tickets} target="_blank" rel="noopener noreferrer" className="uppercase">{gig.node.location}</a>
                  <a href={gig.node.tickets} target="_blank" rel="noopener noreferrer" className="font-bold">{gig.node.venue}</a>
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
