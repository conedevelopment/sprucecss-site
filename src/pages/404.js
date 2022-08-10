import React from 'react';
import { Link } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';

// Images
import NotFoundImage from '../images/not-found.svg';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo title="Error 404" />
      <main id="content">
        <div className="container">
          <div className="l-error-404__inner">
            <NotFoundImage alt="Page not found illustration..." className="l-error-404__image" />
            <div className="l-error-404__caption">
              <h1 className="l-error-404__title">Ooops! You weren’t supposed to see this</h1>
              <p className="l-error-404__description">We couldn’t find the page you were looking for.</p>
              <div className="l-error-404__btns">
                <Link to="/" className="btn btn--primary">Go home</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
