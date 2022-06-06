import React from 'react';
import { graphql } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';
import PageHeading from '../components/PageHeading';
import Card from '../components/card/Blog';

export default function TagPage({ data, pageContext: { tag }}) {
  return (
    <Layout>
      <Seo title={`#${tag}`} />
      <main id="content" className="l-blog">
        <div className="container">
          <PageHeading
            title={`#${tag}`}
          />
          <div className="l-blog__inner">
            {data.allMdx.edges.map((post) => {
              return (
                <Card key={post.slug} post={post.node} />
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
            alt
          }
        }
      }
    }
  }
`
