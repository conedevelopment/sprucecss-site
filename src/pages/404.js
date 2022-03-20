import React from 'react';
import { Link } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/Seo';

// Images
import NotFoundImage from '../images/not-found.svg';

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="Error 404" />
      <main id="content" className="hero">
        <div className="error-404__container">
          <div className="error-404__inner">
            <NotFoundImage alt="Page not found illustration..." className="error-404__image" />
            <div className="error-404__caption">
              <h1 className="error-404__title">Ooops! You weren’t supposed to see this</h1>
              <p className="error-404__description">We couldn’t find the page you were looking for.</p>
              <div className="error-404__btns">
                <Link to="/" className="btn btn--primary btn--rounded">Go home</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage;
