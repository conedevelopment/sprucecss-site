import { Link, useStaticQuery, graphql } from 'gatsby';
import CookieConsent from 'react-cookie-consent';
import GitHubIcon from '../images/icons/github.svg';
import Logo from '../images/spruce-logo.svg';
import LogoUI from '../images/spruce-ui-logo.svg';
import MenuIcon from '../images/icons/menu.svg';
import React, { useState, useEffect } from 'react';
import XIcon from '../images/icons/x.svg';

export default function SiteHeader({ location }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const isUI = location && location.pathname.indexOf('ui') > -1 ? 'ui-page' : '';
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuVisible === true) {
      document.querySelector('.site-header__navigation ul').firstChild.focus();
    }
  }, [menuVisible]);

  function handleMenuClick() {
    setMenuVisible(!menuVisible);
  }

  return (
    <>
      <CookieConsent
        containerClasses="cookie-consent"
        contentClasses="cookie-consent__body"
        buttonWrapperClasses="cookie-consent__btns"
        declineButtonClasses="btn btn--decline btn--rounded"
        buttonClasses="btn btn--primary btn--rounded"
        enableDeclineButton
        location="none"
        buttonText="Accept"
        declineButtonText="Decline"
        setDeclineCookie={false}
        disableStyles={true}
        cookieName="spruce-gdpr-cookies"
        onAccept={() => {
          window.location.reload();
        }}
        onDecline={() => {
          document.cookie = 'spruce-gdpr-cookies=false; expires=0; path=/';
        }}
      >
        <p>We use cookies to track analytics data. It helps us to understand how our site is used.</p>
      </CookieConsent>
      <a className="btn btn--primary skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <div className={`site-header__logo ${isUI ? 'site-header__logo--ui' : ''}`}>
              <Link to="/" title={site.siteMetadata.title}>
                {isUI ? <LogoUI width="131" height="30" /> : <Logo width="131" height="30" />}
              </Link>
            </div>
            <nav className="site-header__navigation">
              <button className="btn btn--primary btn--icon btn--rounded site-header__toggle" onClick={handleMenuClick} aria-controls="primary-menu" aria-expanded={menuVisible ? 'true' : 'false'} aria-label={menuVisible ? 'Close navigation' : 'Open navigation'}>
                <MenuIcon className="btn__icon" width="30" height="30" />
              </button>
              <ul>
                <li><Link to="/docs/getting-started/introduction">Docs</Link></li>
                <li><Link to="/ui/getting-started/introduction">Components</Link></li>
                <li><Link to="/templates">Templates</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="https://github.com/conedevelopment/sprucecss/releases">Releases</a></li>
              </ul>
            </nav>
            <div className="site-header__actions">
              <a href="https://github.com/conedevelopment/sprucecss" aria-label="GitHub" className="btn btn--primary btn--icon btn--github btn--rounded">
                <GitHubIcon className="btn__icon" width="30" height="30" />
              </a>
              <a href="https://twitter.com/conedevelopment" aria-label="X" className="btn btn--primary btn--icon btn--twitter btn--rounded">
                <XIcon className="btn__icon" width="30" height="30" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
