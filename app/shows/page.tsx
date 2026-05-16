import { client } from "../../tina/__generated__/client";
import ShowsClient from "./shows-client";

export default async function Page() {
  const result = await client.queries.gigConnection();

  return (
    <div id="shows-section" className="section w-full">
      <ShowsClient
        data={result.data}
        query={result.query}
        variables={result.variables}
      />
    </div>
  );
}
