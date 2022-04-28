const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const docTemplate = path.resolve('./src/templates/Docs.js');
  const blogTemplate = path.resolve('./src/templates/Blog.js');

  const dataDocs = await graphql(`
    query {
      docs: allMdx(
        sort: {order: ASC, fields: frontmatter___order}
        filter: {fields: {collection: {eq: "docs"}}}
      ) {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const dataBlog = await graphql(`
    query {
      posts: allMdx(
        sort: {order: DESC, fields: frontmatter___date}
        filter: {fields: {collection: {eq: "blog"}}}
      ) {
        nodes {
          slug
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  `);


  const docPages = dataDocs.data.docs.nodes;
  const blogPages = dataBlog.data.posts.nodes;

  docPages.forEach((doc, index) => {
    actions.createPage({
      path: `docs/${doc.slug}`,
      component: docTemplate,
      context: {
        slug: doc.slug,
        prev: index === 0 ? null : docPages[index - 1],
        next: index === (docPages.length - 1) ? null : docPages[index + 1]
      }
    });
  });

  blogPages.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug}`,
      component: blogTemplate,
      context: {
        slug: post.slug,
      }
    });
  });
}
