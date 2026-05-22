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
      label: "Track ID",
      name: "track_id",
      required: true,
      description: "The Bandcamp track ID (found in the embed code as track=...)",
    },
    {
      type: "string",
      label: "Bandcamp URL",
      name: "bandcamp_url",
    },
    {
      type: "number",
      label: "Order",
      name: "order",
    },
  ],
};
