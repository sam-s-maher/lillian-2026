export const sanitizeFilename = (filename) =>
  filename
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._/-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^|\/)\-+|\-+(?=\/|$)/g, "$1");
