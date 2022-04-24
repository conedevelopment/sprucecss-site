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
          <div className="layout-blog__inner">
            <div className="layout-blog__heading">
              <PageHeading
                title="Blog"
                description="Quick and straightforward examples to see how you can start with and use Spruce CSS."
              />
            </div>
            <div className="layout-blog__list">
              <div className="blog-list">
                <div className="blog-item">
                  <h2 className="blog-item__title"><a href="#" className="blog-item__link">Blog article #1</a></h2>
                  <p className="blog-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus viverra lectus, sit amet dictum ipsum lacinia accumsan. Donec dapibus condimentum varius.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
