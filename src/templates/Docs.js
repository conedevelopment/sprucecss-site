import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Alert from '../components/Alert';

// import Layout from '../components/Layout';

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
    <MDXProvider components={components}>
      <div>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </MDXProvider>
  );
};

export default Post;