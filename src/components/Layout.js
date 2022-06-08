import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

// Styles
import '../styles/main.scss';

export default function Layout(props) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Sora:wght@400;500;600;700&display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
      </Helmet>
      <SiteHeader />
      {props.children}
      <SiteFooter />
    </>
  );
}
