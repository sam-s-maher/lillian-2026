import { client } from "../../tina/__generated__/client";
import ProjectsClient from "./projects-client";

export default async function Page() {
  const result = await client.queries.projectConnection();

  return (
    <ProjectsClient
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}
