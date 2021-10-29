import React from 'react';
import { Link, useStaticQuery, graphql  } from 'gatsby';

// Images
import Logo from '../images/spruce-logo.svg';

function Header() {
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
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/" title={site.siteMetadata.title}>
              <Logo />
            </Link>
            <span className="header__slogen">{site.siteMetadata.slogen}</span>
          </div>
          <nav className="header__navigation">
            <ul>
              <li><Link to="/docs">Docs</Link></li>
              <li><Link to="/changelog">Changelog</Link></li>
              <li><Link to="/spruce-ui">Spruce UI</Link></li>
            </ul>
          </nav>
          <Link to="/docs/getting-started/introduction" className="btn btn--primary">Download</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
