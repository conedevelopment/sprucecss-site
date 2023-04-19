import { graphql } from 'gatsby';
import Card from '../components/card/Blog';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import React from 'react';
import Seo from '../components/Seo';

export default function TagPage({ data, pageContext: { tag } }) {
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
              );
            })}
          </div>
        </div>
      </main>
      <GettingStarted type="bottom" />
    </Layout>
  );
}

export function Head({ pageContext: { tag } }) {
  return (
    <Seo title={`#${tag}`} />
  );
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
`;
