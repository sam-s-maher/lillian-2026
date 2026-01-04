/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "About",
  name: "about",
  path: "content/about",
  fields: [
    {
      type: "image",
      label: "Hero Image",
      name: "hero_image",
      required: true,
    },
    {
      type: "rich-text",
      label: "Description",
      name: "description",
      required: true,
    },
  ],
};