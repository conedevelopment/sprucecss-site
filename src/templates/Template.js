import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import React from 'react';
import Seo from '../components/Seo';

export default function Post({ data: { mdx }, children }) {
  const { title, description, featuredImage, darkImage, alt, github, updated, date, demo, license, tags, version } = mdx.frontmatter;
  const image = getImage(featuredImage);
  const dImage = getImage(darkImage);

  return (
    <Layout>
      <main id="content" className="l-template">
        <article>
          <div className="container">
            <PageHeading
              title={title}
              description={description}
            />
            <div className="l-template__previews">
              <div className="template-preview">
                <GatsbyImage image={image} alt={alt} />
              </div>
              <div className="template-preview">
                <GatsbyImage image={dImage} alt={alt} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="l-template__inner">
              <div className="post-content l-template__content">
                {children}
              </div>
              <aside className="l-template__sidebar">
                <div className="template-actions">
                  <a href={demo} className="btn btn--primary  btn--lg btn--rounded" target="_blank" rel="noreferrer">View Demo</a>
                  <a href={github} className="btn btn--primary btn--dark btn--block btn--lg btn--rounded" target="_blank" rel="noreferrer">View on GitHub</a>
                </div>
                <ul className="template-meta">
                  {date && <li className="template-meta__item">
                    <span className="template-meta__label">Published:</span>
                    <strong className="template-meta__value">{date}</strong>
                  </li>}
                  {updated && <li className="template-meta__item">
                    <span className="template-meta__label">Updated:</span>
                    <strong className="template-meta__value">{updated}</strong>
                  </li>}
                  {version && <li className="template-meta__item">
                    <span className="template-meta__label">Version:</span>
                    <strong className="template-meta__value">{version}</strong>
                  </li>}
                  {license && <li className="template-meta__item">
                    <span className="template-meta__label">License:</span>
                    <strong className="template-meta__value">{license}</strong>
                  </li>}
                  <li className="template-meta__item template-meta__item--tags">
                    {tags
                      .filter(tag => tag.length > 0)
                      .map((tag, i) => (
                        <span key={tag} className={`template-tag template-tag--${tag.toLowerCase()}`}>
                          {tag}
                        </span>
                      ))
                    }
                  </li>
                </ul>
              </aside>
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
    <Seo title={`${title} Template`} image={`https://sprucecss.com${image.images.fallback.src}`} description={description} />
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
        updated(formatString: "MMMM DD, YYYY")
        github
        alt
        title
        demo
        license
        description
        tags
        version
        darkImage {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED, formats: AUTO)
          }
        }
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
