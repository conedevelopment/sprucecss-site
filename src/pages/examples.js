import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';

function Examples() {
  return (
    <Layout>
      <Seo title="Examples" />
      <main id="content" className="layout-example">
        <div className="layout-example__container">
          <div className="page-heading">
            <h1 className="page-heading__title">Examples</h1>
            <div className="page-heading__caption">
              <p className="page-heading__meta">Quick and straightforward examples to see how you can start with and use Spruce CSS.</p>
              <div className="page-heading__btns">
                <a href="#" className="btn btn--primary btn--rounded">Download</a>
                <a href="#" className="btn btn--install btn--rounded">Github</a>
              </div>
            </div>
          </div>
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
