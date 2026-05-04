/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Music",
  name: "music",
  path: "content/music",
  ui: {
    router: () => "/music",
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      required: true,
    },
    {
      type: "string",
      label: "Album ID",
      name: "album_id",
      required: true,
      description: "The Bandcamp album ID (found in the embed code)",
    },
    {
      type: "string",
      label: "Bandcamp URL",
      name: "bandcamp_url",
      required: true,
    },
    {
      type: "number",
      label: "Order",
      name: "order",
    },
  ],
};
