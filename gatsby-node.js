const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicPodcast {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicPages {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicTeam {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)
  const podcastTemplate = path.resolve("src/templates/Podcast/index.jsx")
  pages.data.allPrismicPodcast.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: podcastTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  const pageTemplate = path.resolve("src/templates/Pages/index.jsx")
  pages.data.allPrismicPages.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  /* const teamTemplate = path.resolve("src/templates/Team/index.jsx")
  pages.data.allPrismicTeam.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: teamTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  }) */
}