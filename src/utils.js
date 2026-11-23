// Turns a path written in src/data.js into a URL. External links, mailto: and
// in-page anchors pass through; anything else is a file in public/ and gets
// the site's base path put in front (needed on a GitHub Pages project site).
export const resolveHref = (href) =>
  /^([a-z][a-z0-9+.-]*:|#)/i.test(href)
    ? href
    : `${import.meta.env.BASE_URL}/${href}`.replace(/\/{2,}/g, "/");
