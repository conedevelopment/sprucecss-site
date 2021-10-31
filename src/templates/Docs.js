import React from 'react';
import { graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

// Import components
import Alert from '../components/Alert';
import Layout from '../components/Layout';
import Notification from '../components/Notification';
import Pre from '../components/Pre';
import Preview from '../components/Preview';
import Sidebar from '../components/Sidebar';

const components = { Alert, Pre, Notification, Preview };

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
            <MDXProvider components={components}>
              <div className="layout-documentation__content">
                <div className="layout-documentation__heading">
                  <h1 className="layout-documentation__title">{title}</h1>
                </div>
                <MDXRenderer>{body}</MDXRenderer>
              </div>
            </MDXProvider>
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
