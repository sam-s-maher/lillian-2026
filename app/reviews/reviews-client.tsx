"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ReviewsClientProps {
  data: any;
  query: string;
  variables: any;
}

export default function ReviewsClient({ data, query, variables }: ReviewsClientProps) {
  const { data: tinaData } = useTina({ data, query, variables });

  const sortedReviews = (tinaData.reviewsConnection?.edges ?? []).slice().sort((a: any, b: any) => {
    const orderA = a.node.order ?? 0;
    const orderB = b.node.order ?? 0;
    return orderA - orderB;
  });

  return (
    <div
      id="reviews-section"
      className="section flex flex-col items-center w-full lg:px-24 gap-2 lg:gap-4">
      {sortedReviews.map((review: any, index: number) => (
        <div key={review.node.id} className="flex flex-col w-full max-w-xl">
          <div className="text-sm lg:text-base leading-relaxed">
            <TinaMarkdown content={review.node.review_text} />
          </div>
          <div className="text-sm lg:text-base font-helvetica mt-2">
            {review.node.reviewer_name}
          </div>
          {index < sortedReviews.length - 1 && (
            <div className="w-full border-t-2 border-primary-accent my-4 lg:my-6" />
          )}
        </div>
      ))}
    </div>
  );
}
