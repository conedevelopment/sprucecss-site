import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import React from 'react';
import Seo from '../components/Seo';

export default function Post({ data: { mdx }, children }) {
  const { title, description, featuredImage, alt } = mdx.frontmatter;
  const image = getImage(featuredImage);

  return (
    <Layout>
      <main id="content" className="l-template">
        <article className="container">
          <PageHeading
            title={title}
            description={description}
          />
          <div className="l-template__previews">
            <div className="l-template__preview">
              <GatsbyImage image={image} alt={alt} />
            </div>
            <div className="l-template__preview">
              <GatsbyImage image={image} alt={alt} />
            </div>
          </div>
          <div className="l-template__inner">
            <div className="post-content l-template__content">
              {children}
            </div>
            <aside className="l-template__sidebar">

            </aside>
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
