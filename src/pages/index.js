import React from 'react';

// Components
import Docs from '../components/Docs';
import GettingStarted from '../components/GettingStarted';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function IndexPage() {
  return (
    <Layout>
      <main id="content">
        <Hero />
        <Docs />
        <GettingStarted />
        <div className="cta">
          <div className="container container--wide">
            <div className="cta__inner">
              <h2 className="cta__title">Find us on GitHub</h2>
              <p>Did you found a bug? Have an idea or a question? Open an issue to help us develop the project.</p>
              <a href="#" className="btn btn--lg">GibHub</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export function Head() {
  return (
    <Seo title="Spruce CSS - Minimal, modern CSS framework" frontPage={true} />
  );
}
