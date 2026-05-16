import { client } from "../../tina/__generated__/client";
import AboutClient from "./about-client";

export default async function Page() {
  const result = await client.queries.aboutConnection();

  return (
    <AboutClient
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}