import React from "react";
import useSiteMetadata from "../hooks/use-site-metadata";

export default function Seo({ children, location, description, title, image, frontPage = false }) {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <title>{frontPage ? `${title}` : `${title} - ${siteMetadata.title}`}</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Sora:wght@400;500;600;700&display=swap" />

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={frontPage ? siteMetadata.description : description} />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || `${siteMetadata.siteUrl}/social-card.png`} />
      <meta property="og:title" content={frontPage ? `${title}` : `${title} - ${siteMetadata.title}`} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={frontPage ? siteMetadata.description : description} key="ogdesc" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {siteMetadata.twitter && <meta name="twitter:creator" content={siteMetadata.twitter} />}
      <meta name="twitter:title" content={frontPage ? `${title}` : `${title} - ${siteMetadata.title}`} />
      <meta name="twitter:image" content={image || `${siteMetadata.siteUrl}/social-card-twitter.png`} />

      {children}
    </>
  );
}
