export const slugify = input =>
  input
    .trim()
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\//g, "")
    .replace(/\s\s+/g, " ")
    .replace(/\s/g, "-");
