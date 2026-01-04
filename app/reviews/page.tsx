import { client } from "../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function Page() {
  const reviewsData = await client.queries.reviewsConnection();

  const sortedReviews = (reviewsData.data.reviewsConnection?.edges ?? []).slice().sort((a, b) => {
    const orderA = a.node.order ?? 0;
    const orderB = b.node.order ?? 0;
    return orderA - orderB;
  });

  return (
    <>
      <div
        id="reviews-section"
        className="section flex flex-col items-center w-full px-8 gap-12">
        {sortedReviews.map((review, index) => (
          <div key={review.node.id} className="flex flex-col items-center w-full max-w-4xl">
            <div className="text-lg lg:text-xl leading-relaxed text-center">
              <TinaMarkdown content={review.node.review_text} />
            </div>
            <div className="text-lg lg:text-xl font-medium">
              {review.node.reviewer_name}
            </div>
            {index < sortedReviews.length - 1 && (
              <div 
                className="w-3 h-3 rounded-full mt-6 mb-0"
                style={{ backgroundColor: 'var(--primary-accent)' }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}