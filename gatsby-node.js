// const path = require('path');
const data = require("./src/_data/answers.mapped.json")

const slugify = input =>
  input
    .trim()
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\//g, "")
    .replace(/\s\s+/g, " ")
    .replace(/\s/g, "-")

exports.createPages = async ({ actions: { createPage } }) => {
  const sections = Object.keys(data).map(section => {
    let sec = section
    let subsec = data[section].sub_products

    const categories = Object.keys(subsec).map(category => {
      return Object.keys(subsec[category].answers[0]).map(cat => {
        return {
          subcategory: category,
          name: subsec[category].answers[0][cat]["Summary"],
          id: subsec[category].answers[0][cat]["Answer ID"],
          answer: subsec[category].answers[0][cat]["Answer"],

        }
      })
    })

    return {
      section: sec,
      subsection: subsec,
      category: categories,
    }
  })

  sections.map(section => {
    createPage({
      path: `/${slugify(section.section)}`,
      component: require.resolve("./src/pages/index.js"),
      context: {
        section: section.section,
        subsection: section.subsection,
        category: section.category,
      },
    })

    Object.keys(section.category).forEach(category => {
      Object.keys(section.category[category]).forEach(cat => {
        createPage({
          path: `/${slugify(section.section)}/${slugify(
            section.category[category][cat].subcategory
          )}/${slugify(section.category[category][cat].id)}`,
          component: require.resolve("./src/templates/content.js"),
          context: {
            section: section.section,
            subsection: section.subsection,
            category: section.category[category][cat],
          },
        })
      })
    })
  })
}
