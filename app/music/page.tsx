import { client } from "../../tina/__generated__/client";
import MusicClient from "./music-client";

export default async function Page() {
  const result = await client.queries.musicConnection();

  return (
    <MusicClient
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}
