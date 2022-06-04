import React from 'react';
import { Link } from 'gatsby';

// Components
import Docs from '../components/Docs';
import GettingStarted from '../components/GettingStarted';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization'

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Spruce CSS - Minimal, modern CSS framework" frontPage={true} />
      <main id="content">
        <Hero />
        <GettingStarted />
        <Docs />
      </main>
    </Layout>
  );
}
