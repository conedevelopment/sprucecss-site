import React from 'react';
import { graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';

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

export default function Post({ data: { mdx: post } }) {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <Seo title={title} />
      <main id="content" className="layout-documentation">
        <div className="layout-documentation__container">
          <div className="layout-documentation__inner">
            <article className="layout-documentation__body">
              <h1 className="layout-documentation__title">{title}</h1>
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
