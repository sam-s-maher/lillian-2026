/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Acknowledgement",
  name: "acknowledgement",
  path: "content/acknowledgement",
  fields: [
    {
      type: "string",
      label: "Text",
      name: "text",
    },
  ],
};
