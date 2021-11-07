import React from 'react';
import { Link } from 'gatsby';

// Import components
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
      <main className="hero">
        <div className="hero__container">
          <div className="hero__inner">
            <div className="hero__caption">
              <Notification status="New" message="The first realase (v0.1.) of Spruce is out."/>
              <h1 className="hero__title">Spruce CSS Framework</h1>
              <p className="hero__description">An open-source, lightweight and modernish CSS design system or framework. Give your project a solid foundation.</p>
              <div className="hero__btns">
                <Link to="/docs" className="btn btn--primary btn--lg">Get Started</Link>
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
    </Layout>
  )
}

export default IndexPage;
