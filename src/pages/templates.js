import { graphql } from 'gatsby';
import Card from '../components/card/Template';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import React from 'react';
import Seo from '../components/Seo';

export default function Blog({ data }) {
  return (
    <Layout>
      <main id="content" className="l-templates">
        <div className="container">
          <PageHeading
            classes="page-heading--even"
            title="Templates"
            description="High quality templates to help you get started with Spruce UI."
          />
          <div className="l-templates__inner">
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
      filter: {fields: {collection: {eq: "template"}}, frontmatter: {published: {eq: true}}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 678, placeholder: BLURRED, formats: AUTO)
            }
          }
          alt
        }
      }
    }
  }
`;
