import React from 'react';
import { graphql } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/Seo';
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

export function Head({ pageContext: { tag }}) {
  return (
    <Seo title={`#${tag}`} />
  )
}

export const pageQuery = graphql`
  query($tag: [String]) {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {tags: {in: $tag}, published: {eq: true}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
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
