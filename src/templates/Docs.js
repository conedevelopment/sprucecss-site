import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// import Layout from '../components/Layout';

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
    <div>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default Post;