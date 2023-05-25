import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import React from 'react';
import Seo from '../components/Seo';

export default function Post({ data: { mdx }, children }) {
  const { title, featuredImage, alt } = mdx.frontmatter;
  const image = getImage(featuredImage);

  return (
    <Layout>
      <main id="content" className="post">
        <article>
          <div className="post-heading">
            <div className="container container--narrow">
              <div className="post-heading__inner">
                <h1 className="post-heading__title">{title}</h1>
              </div>
            </div>
          </div>
          <div className="container container--narrow">
            <div className="post-content post-content--blog">
              <GatsbyImage image={image} alt={alt} />
              {children}
            </div>
          </div>
        </article>
      </main>
      <GettingStarted type="bottom" />
    </Layout>
  );
}

export function Head({ data: { mdx } }) {
  const { title, description, featuredImage } = mdx.frontmatter;
  const image = getImage(featuredImage);

  return (
    <Seo title={title} image={`https://sprucecss.com${image.images.fallback.src}`} description={description} />
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(
      fields: {slug: {eq: $slug}}
      frontmatter: {published: {eq: true}}
    ) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED, formats: AUTO)
          }
        }
        alt
      }
    }
  }
`;
