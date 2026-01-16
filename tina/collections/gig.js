/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Gigs",
  name: "gig",
  path: "content/gig",
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
        parse: (value) => value && value.format('DD/MM/YYYY'),
      },
    },
    {
      type: "string",
      label: "Tickets",
      name: "tickets",
    },
  ],
};
