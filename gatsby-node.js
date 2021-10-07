const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const lernPost = path.resolve(`./src/templates/learnplan.js`)
  const quadrant = path.resolve(`./src/templates/quadrant.js`)
  const radarpost = path.resolve(`./src/templates/radar-post.js`)
  const cockpitData = await graphql(`
    {
      allCockpitQuadrant(filter: {lang: {eq: "default"}}) {
        edges {
            node {
                id
                title {
                    value
                    slug
                }
                Identifier {
                  value
                }
            }
        }
      }
      allCockpitTechradar(filter: {lang: {eq: "default"}}) {
        edges {
          node {
            id
            title {
              value
              slug
            }
            subtitle {
              value
            }
            quadrant {
              value
            }
          }
        }
      }
      allCockpitLeanplan(filter: {visible: {value: {eq: true}}, lang: {eq: "default"}},sort: {fields: title___value, order: DESC}) {
            edges {
                node {
                    id
                    title {
                        value
                        slug
                    }
                    mediabgcolor {
                        value
                    }
                    bodytext {
                        value {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                }
            }
        }
    }
  `)

  if (cockpitData.errors) {
    throw cockpitData.errors
  }

  // allCockpitQuadrant
  const quadranten = cockpitData.data.allCockpitQuadrant.edges
  quadranten.forEach((post, index) => {
    const previous = index === quadranten.length - 1 ? null : quadranten[index + 1].node
    const next = index === 0 ? null : quadranten[index - 1].node
    const slug = post.node.title.slug
    createPage({
      path: "technologien/" + slug,
      component: quadrant,
      context: {
        slug: slug,
        postid: post.node.id,
        radarfilter: post.node.Identifier.value,
        previous,
        next,
      },
    })

    // Create RadatItem-Pages
    const radaritems = cockpitData.data.allCockpitTechradar.edges
    radaritems.forEach((item, index) => {
      if(post.node.Identifier.value == item.node.quadrant.value) {
          const previous = index === radaritems.length - 1 ? null : radaritems[index + 1].node
          const next = index === 0 ? null : radaritems[index - 1].node
          const itemslug = item.node.title.slug
          createPage({
              path: "technologien/" + slug + "/" + itemslug,
              component: radarpost,
              context: {
                  slug: itemslug,
                  quadrantslug: post.node.title.slug,
                  postid: item.node.id,
                  // radarfilter: post.node.Identifier.value,
                  previous,
                  next,
              },
          })
      }
    })
  })

  // allCockpitLeanplan
  const lernplan = cockpitData.data.allCockpitLeanplan.edges
  lernplan.forEach((post, index) => {
    const previous = index === lernplan.length - 1 ? null : lernplan[index + 1].node
    const next = index === 0 ? null : lernplan[index - 1].node
    const slug = post.node.title.slug
    createPage({
      path: "lernplan/" + slug,
      component: lernPost,
      context: {
        slug: slug,
        postid: post.node.id,
        previous,
        next,
      },
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `cockpitBlogpost`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
