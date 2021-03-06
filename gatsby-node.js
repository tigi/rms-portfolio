const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress posts (route : /blog/{slug})
// Will create pages for WordPress projects (route : /projects/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const posts = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            wordpress_id
            slug
          }
        }
      }
      allWordpressWpProjects {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // Check for any errors
  if (posts.errors) {
    throw new Error(posts.errors)
  }

  // Access query postss via object destructuring
  const { allWordpressPost } = posts.data
  const { allWordpressWpProjects } = posts.data

  const postTemplate = path.resolve(`./src/templates/single-blog.js`)
  const projectsTemplate = path.resolve(`./src/templates/single-project.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        postId: edge.node.wordpress_id,
      },
    })
  })
  allWordpressWpProjects.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.slug}/`,
      component: slash(projectsTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
