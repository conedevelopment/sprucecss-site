import React from 'react';
import { graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import Layout from '../components/Layout';
import TableOfContents from '../components/TableOfContents';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
      }
      body,
      tableOfContents(maxDepth: 2)
    }
  }
`;

function Post({ data: { mdx: post } }) {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <SEO title={title} />
      <main id="content" className="layout-documentation">
        <div className="layout-documentation__container">
          <div className="layout-documentation__inner">
            <Sidebar />
            <article className="layout-documentation__body">
              <h1 className="layout-documentation__title">{title}</h1>
              {post.tableOfContents.items &&
              <div className="layout-documentation__table-of-content">
                <section className="toc" aria-labelledby="toc-title">
                  <h3 className="toc__title" id="toc-title">On this page</h3>
                  <nav className="toc__navigation">
                    <TableOfContents headings={post.tableOfContents.items} />
                  </nav>
                </section>
              </div>}
              <div className="layout-documentation__content entry-content">
                <MDXRenderer>{body}</MDXRenderer>
              </div>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Post;
