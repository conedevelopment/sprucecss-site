import Faq from '../components/Faq';
import GettingStarted from '../components/GettingStarted';
import Hero from '../components/Hero';
import Ide from '../components/Ide';
import Layout from '../components/Layout';
import React from 'react';
import Seo from '../components/Seo';

export default function IndexPage() {
  return (
    <Layout>
      <main id="content">
        <div className="hero-wrapper">
          <Hero />
          <Ide />
        </div>
        <GettingStarted />
        <Faq />
      </main>
    </Layout>
  );
}

export function Head() {
  return (
    <Seo title="Spruce CSS - Minimal, modern CSS framework" frontPage={true} />
  );
}
