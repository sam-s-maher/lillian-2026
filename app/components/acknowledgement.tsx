import { client } from "../../tina/__generated__/client";

export default async function Acknowledgement() {
  const data = await client.queries.acknowledgementConnection();
  
  const acknowledgement = data.data.acknowledgementConnection?.edges?.[0]?.node;

  if (!acknowledgement?.text) {
    return null;
  }

  return (
    <div className="text-xs">
      {acknowledgement.text}
    </div>
  );
}
