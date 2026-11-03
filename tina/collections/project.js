import { sanitizeFilename } from "./sanitize-filename";

/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Projects",
  name: "project",
  path: "content/project",
  ui: {
    router: () => "/projects",
    filename: {
      parse: sanitizeFilename,
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Instagram Link",
      name: "instagram_link",
    },
    {
      type: "string",
      label: "Bandcamp Link",
      name: "bandcamp_link",
    },
    {
      type: "string",
      label: "Bio",
      name: "bio",
    },
    {
      type: "image",
      label: "Hero Image",
      name: "hero_image",
    },
    {
      type: "number",
      label: "Order",
      name: "order",
    },
  ],
};
