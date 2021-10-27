import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Import components
import Header from '../components/Header';
import Layout from '../components/Layout';

// Images
import HeroImage from '../images/hero2.svg';
import CopyIcon from '../images/copy.svg';
import Logo from '../images/spruce-logo-dark.svg';

function IndexPage() {
  return (
    <Layout>
      <div class="header-wrapper">
        <Header />
        <div className="hero">
          <div className="hero__container">
            <div className="hero__inner">
              <div className="hero__caption">
                { /* <StaticImage src="../images/badge.png" alt="" /> */ }
                <p className="hero__notification">
                  <span>New</span>
                  The first realase (v0.1.) of Spruce is out
                </p>
                <h1 className="hero__title">Spruce CSS Framework</h1>
                <p className="hero__description">An open-source, lightweight and modernish CSS base framework for creating in a system. Give your project the right foundation.</p>
                <div className="hero__btns">
                  <a className="btn btn--primary">Get Started</a>
                  <button className="btn install-btn">
                    <CopyIcon className="btn__icon" />
                    npm install sprucecss
                  </button>
                </div>
              </div>
              <HeroImage className="hero__image" />
            </div>
          </div>
        </div>
      </div>
      {/*}
      <main>
        hello 2
      </main>
      */}
    </Layout>
  )
}

export default IndexPage
