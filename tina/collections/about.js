/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "About",
  name: "about",
  path: "content/about",
  ui: {
    router: () => "/about",
  },
  fields: [
    {
      type: "image",
      label: "Hero Image",
      name: "hero_image",
      required: true,
    },
    {
      type: "object",
      label: "Paragraphs",
      name: "paragraphs",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.text?.substring(0, 50) + (item?.text?.length > 50 ? "..." : "") || "New Paragraph",
        }),
      },
      fields: [
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
};