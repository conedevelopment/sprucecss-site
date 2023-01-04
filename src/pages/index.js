import React from 'react';

// Components
import Docs from '../components/Docs';
import GettingStarted from '../components/GettingStarted';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo'

export default function IndexPage() {
  return (
    <Layout>
      <main id="content">
        <Hero />
        <GettingStarted />
        <Docs />
      </main>
    </Layout>
  );
}

export function Head() {
  return (
    <Seo title="Spruce CSS - Minimal, modern CSS framework" frontPage={true} />
  )
}
