/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Catalogue",
  name: "catalogue",
  path: "content/catalogue",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      required: true,
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
      required: true,
      ui: {
        dateFormat: 'DD/MM/YYYY',
        parse: (value) => value && value.format('DD/MM/YYYY'),
      },
    },
    {
      type: "image",
      label: "Hero Image",
      name: "hero_image",
      required: true,
    },
    {
      type: "string",
      label: "Image Credits",
      name: "image_credits",
      required: false,
    },
    {
      type: "number",
      label: "Order",
      name: "order",
    },
  ],
};
