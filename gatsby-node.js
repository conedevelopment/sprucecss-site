const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = async ({ node, getNode, actions, loadNodeContent }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    const collection = parent.sourceInstanceName;

    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });

    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    });
  }

  if (node.internal.mediaType === 'text/x-scss' ||
      node.internal.mediaType === 'text/html' ||
      node.internal.mediaType === 'application/javascript') {
    // console.log('RUN FOR COMPONENTS');

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

    // console.log('Component slug: ', slug);

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    // console.log('Component slug field: ', slugField);

    createNodeField({
      node,
      name: 'type',
      value: type,
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
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const dataUI = await graphql(`
    query {
      allMdx(
        filter: {fields: {collection: {eq: "component"}}}
      ) {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const dataBlog = await graphql(`
    query {
      posts: allMdx(
        sort: {order: DESC, fields: frontmatter___date}
        filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
      ) {
        nodes {
          frontmatter {
            title
            date
            tags
          }
          fields {
            slug
          }
        }
      }
      tagsGroup: allMdx(
        limit: 2000
        filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);


  const docPages = dataDocs.data.docs.nodes;
  const uiPages = dataUI.data.nodes;
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

  console.log(uiPages.length);

  uiPages.forEach((post, index) => {
    // console.log('MISSING SLUG: ', post.slug);
    // console.log('MISSING POST: ', post);

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
