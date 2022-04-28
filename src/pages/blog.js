import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';
import PageHeading from '../components/PageHeading';
import BlogCard from '../components/BlogCard';

export default function Blog({ data }) {
  return (
    <Layout>
      <Seo title="Blog" />
      <main id="content" className="layout-blog">
        <div className="container">
          <PageHeading
            title="Blog"
            description="Spruce how-to and generic front-end development articles."
          />
          <div className="layout-blog__inner">
            {data.allMdx.nodes.map((post) => {
              return (
                <BlogCard post={post} />
              )
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {fields: {collection: {eq: "blog"}}}
    ) {
      nodes {
        slug
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
        }
      }
    }
  }
`
