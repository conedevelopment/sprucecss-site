import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ children, location, description, title, image, frontPage }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang="en"/>
      <title>{frontPage ? `${title}` : `${title} - ${site.siteMetadata.title}`}</title>

      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || `${site.siteMetadata.siteUrl}/social-card.png`} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {site.siteMetadata.twitter && <meta name="twitter:creator" content={site.siteMetadata.twitter} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image || `${site.siteMetadata.siteUrl}/social-card.png`} />

      {children}
    </Helmet>
  );
}

export default SEO;
