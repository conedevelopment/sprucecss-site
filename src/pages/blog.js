import React from 'react';
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
                <BlogCard key={post.slug} post={post} />
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
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 700, placeholder: BLURRED, formats: AUTO)
            }
          }
        }
      }
    }
  }
`