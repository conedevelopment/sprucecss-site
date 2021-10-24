import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Import components
import Header from '../components/Header';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <div class="header-wrapper">
        <Header />
        <div className="hero">
          <div className="hero__container">
            <div className="hero__inner">
              <StaticImage src="" alt="" />
              <div>
                { /* <StaticImage src="../images/badge.png" alt="" /> */ }
                <h1 className="hero__title">Spruce CSS Framework</h1>
                <p className="hero__description">A lightweight and modernish CSS base framework for creating a system.</p>
                <div className="hero__btns">
                  <a class="btn btn--primary">Get Started</a>
                  <a class="btn btn--primary">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        hello 2
      </main>
    </Layout>
  )
}

export default IndexPage
