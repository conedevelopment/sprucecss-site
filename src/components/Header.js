import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql  } from 'gatsby';

// Images
import MenuIcon from "../images/icons/menu.svg";
import Logo from '../images/spruce-logo.svg';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if(menuVisible === true) {
      document.querySelector('.header__navigation ul').firstChild.focus();
    }
  });

  function handleMenuClick() {
    setMenuVisible(!menuVisible);
  }
  
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          slogen
        }
      }
    }
  `);
  
  return (
    <>
      <a className="btn btn--primary skip-link" href="#content">Skip to content</a>
      <header className="header">
        <div className="header__container">
          <div className="header__inner">
            <div className="header__logo">
              <Link to="/" title={site.siteMetadata.title}>
                <Logo />
              </Link>
              <span className="header__slogen">{site.siteMetadata.slogen[Math.floor(Math.random() * site.siteMetadata.slogen.length)]}</span>
            </div>
            <nav className="header__navigation">
              <button className="btn btn--primary header__toggle" onClick={handleMenuClick} aria-controls="primary-menu" aria-expanded={menuVisible ? 'true' : 'false'} aria-label={menuVisible ? 'Close navigation' : 'Open navigation'}>
                <MenuIcon />
              </button>
              <ul>
                <li><Link to="/docs/getting-started/introduction">Docs</Link></li>
                <li><Link to="/changelog">Changelog</Link></li>
                <li><Link to="/spruce-ui">Spruce UI</Link></li>
                <li><a href="https://github.com/conedevelopment/spruce">GitHub</a></li>
              </ul>
            </nav>
            <div className="header__actions">
              <Link to="/docs/getting-started/installation" className="btn btn--primary">Download</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
