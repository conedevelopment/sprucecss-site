import React from 'react';
import { Link } from 'gatsby';

// Import components
import DocsCards from '../components/DocsCards';
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';

// Images
import HeroImage from '../images/hero.svg';
import CopyIcon from '../images/icons/copy.svg';

export default function IndexPage() {
  async function copy() {
    await navigator.clipboard.writeText('npm install sprucecss');
    alert('Install command copied to the clipboard!');
  }

  return (
    <Layout>
      <Seo title="Spruce CSS - Minimal, modern CSS framework" frontPage={true} />
      <main id="content">
        <section className="hero">
          <div className="hero__container">
            <div className="hero__inner">
              <div className="hero__caption">
                <h1 className="hero__title">Spruce CSS<br />Framework <span className="highlighted">.</span></h1>
                <p className="hero__description">An open-source, lightweight and modernish CSS design system, framework built on Sass. Give your project a solid foundation.</p>
                <div className="hero__btns">
                  <Link to="/docs/getting-started/introduction" className="btn btn--primary btn--lg btn--rounded">Get Started</Link>
                  <button className="btn btn--install btn--lg btn--rounded" onClick={copy}>
                    <CopyIcon className="btn__icon btn__icon--start" />
                    npm install sprucecss
                  </button>
                </div>
              </div>
              <HeroImage className="hero__image" />
            </div>
          </div>
        </section>
        <DocsCards />
      </main>
    </Layout>
  );
}
