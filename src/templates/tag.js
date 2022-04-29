import React from 'react';
import { graphql } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';
import PageHeading from '../components/PageHeading';
import BlogCard from '../components/BlogCard';

export default function TagPage({ data, pageContext: { tag }}) {
  console.log(data);
  return (
    <Layout>
      <Seo title={`#${tag}`} />
      <main id="content" className="layout-blog">
        <div className="container">
          <PageHeading
            title={`#${tag}`}
          />
          <div className="layout-blog__inner">
            {data.allMdx.edges.map((post) => {
              return (
                <BlogCard key={post.slug} post={post.node} />
              )
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($tag: [String]) {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC},
      filter: {frontmatter: {tags: {in: $tag}}}
    ) {
      edges {
        node {
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
  }
`
