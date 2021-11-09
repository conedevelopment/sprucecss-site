const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const docsTemplate = path.resolve('./src/templates/Docs.js');

  const { data } = await graphql(`
    query {
      docs: allMdx {
        nodes {
          slug
        }
      }
    }
  `);
  
  data.docs.nodes.forEach((doc) => {
    actions.createPage({
      path: `docs/${doc.slug}`,
      component: docsTemplate,
      context: {
        slug: doc.slug,
      },
    });
  });
}
