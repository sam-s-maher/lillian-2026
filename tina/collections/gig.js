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
      label: "Location",
      name: "location",
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
        dateFormat: 'MM/DD/YYYY',
        parse: (value) => value && value.format('MM/DD/YYYY'),
      },
    },
    {
      type: "string",
      label: "Tickets",
      name: "tickets",
    },
  ]
};
