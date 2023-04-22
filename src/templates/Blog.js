import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import React from 'react';
import Seo from '../components/Seo';

export default function Post({ data: { mdx }, children }) {
  const { title, featuredImage, tags, date, alt } = mdx.frontmatter;
  const image = getImage(featuredImage);

  return (
    <Layout>
      <main id="content" className="post">
        <article>
          <div className="post-heading">
            <div className="container container--narrow">
              <div className="post-heading__inner">
                <h1 className="post-heading__title">{title}</h1>
                <ul className="breadcrumb-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <span aria-current="page">{title}</span>
                  </li>
                </ul>
                <div className="post-heading__meta">
                  <a className="post-author" href="https://twitter.com/_iamadam" rel="noopener noreferrer" target="_blank">
                    <img className="post-author__avatar" src="https://secure.gravatar.com/avatar/fd9479a898c593601efd2fe758a86dba?s=96&amp;d=mm&amp;r=g" alt="" aria-hidden="true" width="38" height="38" />
                    <span className="post-author__name">by Adam Laki</span>
                  </a>
                  <span>
                    Posted in {tags
                    .filter(tag => tag.length > 0)
                    .map((tag, i) => (
                        <span key={tag}>
                          <Link to={`/blog/tag/${tag}`} className="blog-card__tag">
                            #{tag}
                          </Link>
                          {i < tags.length - 1 ? ', ' : ''}
                        </span>
                    ))
                    }
                  </span>
                  <span>
                    <span className="sr-only">Posted on</span>
                    <span>{date}</span>
                  </span>
                </div>
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
