import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';
import PageHeading from '../components/PageHeading';

export default function Blog() {
  return (
    <Layout>
      <Seo title="Blog" />
      <main id="content" className="layout-blog">
        <div className="layout-blog__container">
          <PageHeading
            title="Blog"
            description="Quick and straightforward examples to see how you can start with and use Spruce CSS."
          >
            <a href="https://github.com/conedevelopment/sprucecss-examples/archive/refs/heads/master.zip">Download</a>
            <a href="https://github.com/conedevelopment/sprucecss-examples">Github</a>
          </PageHeading>
        </div>
      </main>
    </Layout>
  );
}
