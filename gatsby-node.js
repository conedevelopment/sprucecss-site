const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = async ({ node, getNode, actions, loadNodeContent }) => {
  const { createNodeField } = actions;
  const type = node.internal.type;
  const mediaType = node.internal.mediaType;

  if (type === `Mdx`) {
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

  if (mediaType === 'text/x-scss' ||
      mediaType === 'text/html' ||
      mediaType === 'application/javascript') {
    await loadNodeContent(node);

    let shortMediaType = null;
    let slug = `/ui/${path.parse(node.relativePath).dir.split('/')[1]}/${path.parse(node.relativePath).name}/`;

    if (mediaType && path.parse(node.relativePath).name.includes('preview')) {
      slug = `/ui/${path.parse(node.relativePath).dir.split('/')[1]}/${path.parse(node.relativePath).name.replace('-preview','')}/`;
    }

    if (mediaType === 'text/x-scss') {
      shortMediaType = 'scss';
    } else if (mediaType === 'text/html' && !path.parse(node.relativePath).name.includes('preview')) {
      shortMediaType = 'html';
    } else if (mediaType === 'text/html' && path.parse(node.relativePath).name.includes('preview')) {
      shortMediaType = 'preview';
    } else if (mediaType === 'application/javascript') {
      shortMediaType = 'javascript';
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'type',
      value: shortMediaType,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {

  const { data: { docs: { nodes: docsNodes } } } = await graphql(`
    query {
      docs: allMdx(
        sort: {frontmatter: {order: ASC}}
        filter: {fields: {collection: {eq: "docs"}}}
      ) {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const { data: { allMdx: { nodes: uiNodes } } } = await graphql(`
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
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const { data: { posts: { nodes: blogNodes } } } = await graphql(`
    query {
      posts: allMdx(
        sort: {frontmatter: {date: DESC}}
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
          internal {
            contentFilePath
          }
        }
      }
      tagsGroup: allMdx(
        limit: 2000
        filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
      ) {
        group(field: {frontmatter: {tags: SELECT}}) {
          fieldValue
        }
      }
    }
  `);


  // const tags = dataBlog.data.tagsGroup.group;

  docsNodes.forEach((node, index) => {
    actions.createPage({
      path: `docs${node.fields.slug}`,
      component: `${path.resolve('./src/templates/Docs.js')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
        prev: index === 0 ? null : docsNodes[index - 1],
        next: index === (docsNodes.length - 1) ? null : docsNodes[index + 1]
      }
    });
  });

  uiNodes.forEach((node, index) => {
    if (node.fields.slug) {
      actions.createPage({
        path: node.fields.slug,
        component: `${path.resolve('./src/templates/Component.js')}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          slug: node.fields.slug,
          prev: index === 0 ? null : uiNodes[index - 1],
          next: index === (uiNodes.length - 1) ? null : uiNodes[index + 1]
        }
      });
    }
  });

  blogNodes.forEach((node) => {
    actions.createPage({
      path: `blog${node.fields.slug}`,
      component: `${path.resolve('./src/templates/Blog.js')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
      }
    });
  });

  // Make tag pages
  /*
  tags.forEach(tag => {
    actions.createPage({
      path: `blog/tag/${tag.fieldValue}`,
      component: path.resolve('./src/templates/Tags.js'),
      context: {
        tag: tag.fieldValue,
      },
    });
  });
  */
}
