import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo-wrapper">
            <a href="#">
              <img className="header__logo" src="" alt=""/>
            </a>
            <span className="header__page-title">🎉 Another CSS Framework</span>
          </div>
          <nav className="header__navigation">
            <ul>
              <li><Link to="/docs">Docs</Link></li>
              <li><Link to="/changelog">Changelog</Link></li>
              <li><Link to="/spruce-ui">Spruce UI</Link></li>
            </ul>
          </nav>
          <Link to="/docs/getting-started/inroduction" className="btn btn--primary">Download</Link>
        </div>
      </div>
    </header>
  );
}
