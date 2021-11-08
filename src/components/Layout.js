import React from 'react';
import { Helmet } from "react-helmet";

// Components
import Footer from './Footer';
import Header from './Header';
import PageAlert from './PageAlert';

// Styles
import '../styles/main.scss';

function Layout(props) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&amp;display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet" />
      </Helmet>
      <PageAlert>
        <p>Please, note that Spruce is in beta until the 1.0 release. At this point, we are sure of just a few things. Hopefully, in the next 6-8 months, we can release the first version. Until then, breaking changes, extensive rewrites, 180 degree turns, here we come.</p>
      </PageAlert>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
