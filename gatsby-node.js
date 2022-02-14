const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const docsTemplate = path.resolve('./src/templates/Docs.js');

  const { data } = await graphql(`
    query {
      docs: allMdx(sort: {order: ASC, fields: frontmatter___order}) {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const docPages = data.docs.nodes;

  docPages.forEach((doc, index) => {
    actions.createPage({
      path: `docs/${doc.slug}`,
      component: docsTemplate,
      context: {
        slug: doc.slug,
        prev: index === 0 ? null : docPages[index - 1],
        next: index === (docPages.length - 1) ? null : docPages[index + 1]
      },
    });
  });
}
