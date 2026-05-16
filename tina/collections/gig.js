/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Shows",
  name: "gig",
  path: "content/gig",
  ui: {
    router: () => "/shows",
  },
  fields: [
    {
      type: "string",
      label: "State",
      name: "state",
    },
    {
      type: "string",
      label: "Venue",
      name: "venue",
    },
    {
      type: "datetime",
      label: "When",
      name: "when",
      ui: {
        dateFormat: 'DD/MM/YYYY',
      },
    },
    {
      type: "string",
      label: "Tickets",
      name: "tickets",
    },
  ],
};
