import React from 'react';
import { Link } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import SEO from '../components/SEO';

// Images
import HeroImage from '../images/hero.svg';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Error 404" />
      <main id="content" className="hero">
        <div className="hero__container">
          <div className="hero__inner">
            <div className="hero__caption">
              <h1 className="hero__title">Error 404</h1>
              <p className="hero__description">We couldn’t find what you were looking for.</p>
              <div className="hero__btns">
                <Link to="/" className="btn btn--primary btn--lg">Go home</Link>
              </div>
            </div>
            <HeroImage className="hero__image" />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage;
