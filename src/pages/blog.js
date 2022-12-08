import React from 'react';
import { graphql } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';
import PageHeading from '../components/PageHeading';
import Card from '../components/card/Blog';

export default function Blog({ data }) {
  return (
    <Layout>
      <Seo title="Blog" />
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
`
