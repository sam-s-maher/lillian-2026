import { sanitizeFilename } from "./sanitize-filename";

/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Reviews",
  name: "reviews",
  path: "content/reviews",
  ui: {
    router: () => "/reviews",
    filename: {
      parse: sanitizeFilename,
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Review Text",
      name: "review_text",
      required: true,
    },
    {
      type: "string",
      label: "Reviewer Name",
      name: "reviewer_name",
      required: true,
    },
    {
      type: "number",
      label: "Order",
      name: "order",
    },
  ],
};
