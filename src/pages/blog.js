import { graphql } from 'gatsby';
import Card from '../components/card/Blog';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import React from 'react';
import Seo from '../components/Seo';

export default function Blog({ data }) {
  return (
    <Layout>
      <main id="content" className="l-blog">
        <div className="container">
          <PageHeading
            title="Blog"
            description="Spruce how-to and generic front-end development articles."
          />
          <div className="l-blog__inner">
            {data.allMdx.nodes.map((post) => {
              return (
                <Card key={post.fields.slug} post={post} />
              );
            })}
          </div>
        </div>
      </main>
      <GettingStarted type="bottom" />
    </Layout>
  );
}

export function Head() {
  return (
    <Seo title="Blog" />
  );
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
    ) {
      nodes {
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
`;
