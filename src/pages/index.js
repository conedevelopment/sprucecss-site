import React from 'react';
import { Link } from 'gatsby';

// Import components
import DocsCards from '../components/DocsCards';
import Layout from '../components/Layout';
import Notification from '../components/Notification';
import SEO from '../components/SEO';

// Images
import HeroImage from '../images/hero.svg';
import CopyIcon from '../images/copy.svg';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Another CSS Framework" />
      <main id="content" className="hero">
        <div className="hero__container">
          <div className="hero__inner">
            <div className="hero__caption">
              <Notification>The first realase (v0.1.) of Spruce is out.</Notification>
              <h1 className="hero__title">Spruce CSS<br />Framework <span>.</span></h1>
              <p className="hero__description">An open-source, lightweight and modernish CSS design system or framework built on Sass. Give your project a solid foundation.</p>
              <div className="hero__btns">
                <Link to="/docs/getting-started/introduction" className="btn btn--primary btn--lg">Get Started</Link>
                <button className="btn btn--install btn--lg">
                  <CopyIcon className="btn__icon btn__icon--left" />
                  npm install sprucecss
                </button>
              </div>
            </div>
            <HeroImage className="hero__image" />
          </div>
        </div>
      </main>
      <DocsCards />
    </Layout>
  )
}

export default IndexPage;
