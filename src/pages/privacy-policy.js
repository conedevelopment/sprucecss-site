import React, { useState } from 'react';
import Cookies from 'universal-cookie';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';

export default function PrivacyPolicy() {
  const cookies = new Cookies();
  const [cookieConsent, setCookieConsent] = useState(() => {
    if (cookies.get('spruce-gdpr-cookies')) {
      return cookies.get('spruce-gdpr-cookies');
    }
    return false;
  });

  function handleCookie(e) {
    setCookieConsent(! cookieConsent);
    cookies.remove('spruce-gdpr-cookies', {
      path: '/',
      sameSite: 'lax',
      secure: true,
    });
    window.location.reload();
  }

  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <main id="content" className="l-page">
        <div className="l-page__container">
          <article className="l-page__inner entry-content">
            <h1 className="l-page__title">Privacy Policy</h1>
            <p className="l-page__meta">Updated on 28 January 2022</p>
            <h2>Cookies</h2>
            <p>If you accept the cookies in the consent banner, you accept <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">Google Analytics tracking</a>, which uses cookies.</p>
            <p>We store this choice of you in the <code>spruce-gdpr-cookies</code> cookie.</p>
            {cookieConsent ?
              <div>
                <p>If you want to opt-out or accept our cookies, please press the button below.</p>
                <div>
                  <button className="btn btn--decline" onClick={handleCookie}>Decline Cookies</button>
                </div>
              </div>
              : ''
            }
            <h2>Embedded content from other websites</h2>
            <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
            <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
