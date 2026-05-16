import { client } from "../../tina/__generated__/client";
import ReviewsClient from "./reviews-client";

export default async function Page() {
  const result = await client.queries.reviewsConnection();

  return (
    <ReviewsClient
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}