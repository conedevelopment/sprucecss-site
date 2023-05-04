import { Script } from 'gatsby';
import Cookies from 'universal-cookie';
import React, { useState, useEffect } from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

export default function Seo({ children, location, description, title, image, frontPage = false }) {
  const siteMetadata = useSiteMetadata();
  const [cookie, setCookie] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get('spruce-gdpr-cookies')) {
      setCookie(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <title>{frontPage ? `${title}` : `${title} - ${siteMetadata.title}`}</title>

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={frontPage ? siteMetadata.description : description} />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || `${siteMetadata.siteUrl}/social-card.png`} />
      <meta property="og:title" content={frontPage ? `${title}` : `${title} - ${siteMetadata.title}`} key="ogtitle" />
      <meta
        property="og:site_name"
        content={siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={frontPage ? siteMetadata.description : description} key="ogdesc" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {siteMetadata.twitter && <meta name="twitter:creator" content={siteMetadata.twitter} />}
      <meta name="twitter:title" content={frontPage ? `${title}` : `${title} - ${siteMetadata.title}`} />
      <meta name="twitter:image" content={image || `${siteMetadata.siteUrl}/social-card-twitter.png`} />

      {cookie && <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analyticsID}`}
      />}

      {cookie && <Script id="gtag-config" forward={['gtag']}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', '${siteMetadata.analyticsID}', { send_page_view: false })
        `}
      </Script>}

      {children}
    </>
  );
}
