import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';
import PageHeading from '../components/PageHeading';

function Examples() {
  return (
    <Layout>
      <Seo title="Examples" />
      <main id="content" className="layout-example">
        <div className="layout-example__container">
          <PageHeading
            title="Examples"
            description="Quick and straightforward examples to see how you can start with and use Spruce CSS."
          />
          <div className="example-grid">
            <article className="example-item">
              <a href="https://sprucecss.com/examples/html/auth.html">
                <StaticImage
                  src="../images/examples/auth.png"
                  width={800}
                  quality={85}
                  alt="Underwater view of clear, blue body of water"
                  className="example-item__thumbnail"
                />
                <h2 className="example-item__title">Authentication page</h2>
              </a>
              <ul class="example-item__links">
                <li>
                  <a href="https://github.com/conedevelopment/sprucecss-examples/tree/master/assets/scss/page/auth">GitHub</a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default Examples
