const path = require('path');

exports.onCreateNode = async ({ node, getNode, actions, loadNodeContent }) => {
  const { createNodeField } = actions;

  if (node.internal.mediaType === 'text/x-scss' ||
      node.internal.mediaType === 'text/html' ||
      node.internal.mediaType === 'application/javascript') {
    await loadNodeContent(node);

    let type = '';
    let slug = 'ui/' + path.parse(node.relativePath).dir.split('/')[1] + '/' + path.parse(node.relativePath).name;

    if (node.internal.mediaType && path.parse(node.relativePath).name.includes('preview')) {
      slug = 'ui/' + path.parse(node.relativePath).dir.split('/')[1] + '/' + path.parse(node.relativePath).name.replace('-preview','');
    }

    if (node.internal.mediaType === 'text/x-scss') {
      type = 'scss';
    } else if (node.internal.mediaType === 'text/html' && !path.parse(node.relativePath).name.includes('preview')) {
      type = 'html';
    } else if (node.internal.mediaType === 'text/html' && path.parse(node.relativePath).name.includes('preview')) {
      type = 'preview';
    } else if (node.internal.mediaType === 'application/javascript') {
      type = 'javascript';
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'type',
      value: type,
    });
  }

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

  const dataUI = await graphql(`
    query {
      docs: allMdx(
        sort: {order: ASC, fields: frontmatter___order}
        filter: {fields: {collection: {eq: "component"}}}
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
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);


  const docPages = dataDocs.data.docs.nodes;
  const uiPages = dataUI.data.docs.nodes;
  const blogPages = dataBlog.data.posts.nodes;
  const tags = dataBlog.data.tagsGroup.group;

  docPages.forEach((doc, index) => {
    actions.createPage({
      path: `docs/${doc.slug}`,
      component: path.resolve('./src/templates/Docs.js'),
      context: {
        slug: doc.slug,
        prev: index === 0 ? null : docPages[index - 1],
        next: index === (docPages.length - 1) ? null : docPages[index + 1]
      }
    });
  });

  uiPages.forEach((post, index) => {
    actions.createPage({
      path: post.slug,
      component: path.resolve('./src/templates/Component.js'),
      context: {
        slug: post.slug,
        prev: index === 0 ? null : uiPages[index - 1],
        next: index === (uiPages.length - 1) ? null : uiPages[index + 1]
      }
    });
  });

  blogPages.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug}`,
      component: path.resolve('./src/templates/Blog.js'),
      context: {
        slug: post.slug,
      }
    });
  });

  // Make tag pages
  tags.forEach(tag => {
    actions.createPage({
      path: `blog/tag/${tag.fieldValue}`,
      component: path.resolve('./src/templates/Tags.js'),
      context: {
        tag: tag.fieldValue,
      },
    });
  });
}
