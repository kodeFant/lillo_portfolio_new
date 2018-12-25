const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== Portfolio ====
    graphql(
      `
        query {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                slug
                status
                template
                tech {
                  id
                  name
                  slug
                }
              }
            }
          }
        }
      `
    )
      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const postTemplate = path.resolve('./src/templates/portfolio.js')
        // We want to create a detailed page for each
        // post node. We'll just use the WordPress Slug for the slug.
        // The Post ID is prefixed with 'POST_'
        _.each(result.data.allWordpressWpPortfolio.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
        resolve()
      })
      .then(() => {
        return graphql(`
          {
            allWordpressWpTech(filter: { count: { gt: 0 } }) {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
          }
        `)
      })
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const techTemplate = path.resolve(`./src/templates/tech.js`)

        // Create a Gatsby page for each WordPress tag
        _.each(result.data.allWordpressWpTech.edges, ({ node: tech }) => {
          createPage({
            path: `/tech/${tech.slug}/`,
            component: techTemplate,
            context: {
              slug: tech.slug,
            },
          })
        })
      })
  })
  // ==== END POSTS ====
}

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        './_variables.sass': path.resolve(
          __dirname,
          'src/styles/_bulma-variables.scss'
        ),
      },
    },
  })
}
