import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

// Import components
import Alert from '../components/Alert';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

const components = { Alert };

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
      <PageHeading title={title} />
      <main className="layout-documentation">
        <div className="layout-documentation__container">
          <div className="layout-documentation__inner">
            <div className="layout-documentation__sidebar">
            </div>
            <MDXProvider components={components}>
              <div className="layout-documentation__content">
                <MDXRenderer>{body}</MDXRenderer>
              </div>
            </MDXProvider>
            <div className="layout-documentation__table-of-content">
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Post;
