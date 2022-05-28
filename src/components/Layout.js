import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Footer from './Footer';
import Header from './Header';

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
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
