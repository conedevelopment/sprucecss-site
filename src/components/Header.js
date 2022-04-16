import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql  } from "gatsby";
import CookieConsent from "react-cookie-consent";

// Images
import MenuIcon from "../images/icons/menu.svg";
import Logo from "../images/spruce-logo-beta.svg";
import GitHubIcon from "../images/icons/github.svg";
import TwitterIcon from "../images/icons/twitter.svg";

function Header() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          slogan
        }
      }
    }
  `);

  const [menuVisible, setMenuVisible] = useState(false);
  const [slogan, setslogan] = useState(site.siteMetadata.slogan[Math.floor(Math.random() * site.siteMetadata.slogan.length)]);

  useEffect(() => {
    if(menuVisible === true) {
      document.querySelector(".header__navigation ul").firstChild.focus();
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
        onDecline={() => {
          document.cookie = "spruce-gdpr-cookies=false; expires=0; path=/";
        }}
      >
        <p>We use cookies to track analytics data. It helps us to understand how our site is used.</p>
      </CookieConsent>
      <a className="btn btn--primary skip-link" href="#content">Skip to content</a>
      <header className="header">
        <div className="header__container">
          <div className="header__inner">
            <div className="header__logo">
              <Link to="/" title={site.siteMetadata.title}>
                <Logo />
              </Link>
              <span className="header__slogan">{slogan}</span>
            </div>
            <nav className="header__navigation">
              <button className="btn btn--primary header__toggle" onClick={handleMenuClick} aria-controls="primary-menu" aria-expanded={menuVisible ? "true" : "false"} aria-label={menuVisible ? "Close navigation" : "Open navigation"}>
                <MenuIcon />
              </button>
              <ul>
                <li><Link to="/docs/getting-started/introduction">Docs</Link></li>
                <li><Link to="/examples">Examples</Link></li>
                <li><a href="https://github.com/conedevelopment/sprucecss/releases">Releases</a></li>
              </ul>
            </nav>
            <div className="header__actions">
              <a href="https://github.com/conedevelopment/sprucecss" aria-label="GitHub" className="btn btn--primary btn--icon btn--rounded">
                <GitHubIcon className="btn__icon"/>
              </a>
              <a href="https://twitter.com/conedevelopment" aria-label="GitHub" className="btn btn--primary btn--icon btn--rounded">
                <TwitterIcon className="btn__icon"/>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
