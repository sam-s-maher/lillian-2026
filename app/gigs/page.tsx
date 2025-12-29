import { client } from "../../tina/__generated__/client";

export default async function Page() {
  const gigs = await client.queries.gigConnection();
  return (
    <>
      <h1>Gigs</h1>
      <div>
        {(gigs.data.gigConnection?.edges ?? []).map((gig) => (
          <div key={gig.node.id}>
            <span>{gig.node.when}</span>
            <span>............</span>
            {gig.node.tickets ? (
              <>
                <a href={gig.node.tickets} target="_blank" rel="noopener noreferrer">{gig.node.location}</a>
                <a href={gig.node.tickets} target="_blank" rel="noopener noreferrer">{gig.node.venue}</a>
              </>
            ) : (
              <>
                <span>{gig.node.location}</span>
                <span>{gig.node.venue}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
