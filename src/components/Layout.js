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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <SiteHeader />
      {props.children}
      <SiteFooter />
    </>
  );
}
