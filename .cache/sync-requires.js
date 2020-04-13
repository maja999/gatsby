const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/maja/development/gatsby-redbox/src/pages/index.js"))),
  "component---src-templates-content-js": hot(preferDefault(require("/Users/maja/development/gatsby-redbox/src/templates/content.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/maja/development/gatsby-redbox/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/maja/development/gatsby-redbox/src/pages/404.js")))
}

