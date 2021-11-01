import React from 'react';
import { graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
      }
      body
    }
  }
`;

function Post({ data: { mdx: post } }) {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <main className="layout-documentation">
        <div className="layout-documentation__container">
          <div className="layout-documentation__inner">
            <Sidebar />
            <div className="layout-documentation__content">
              <div className="layout-documentation__heading">
                <h1 className="layout-documentation__title">{title}</h1>
              </div>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
            <div className="layout-documentation__table-of-content">
              <section className="toc" aria-labelledby="toc-title">
                <h3 className="toc__title" id="toc-title">On this page</h3>
                <nav className="toc__navigation">
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a className="is-active" href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                  </ul>
                </nav>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Post;
