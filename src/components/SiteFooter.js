import { Link, useStaticQuery, graphql } from 'gatsby';
import ConeLogo from '../images/cone-logo.svg';
import Logo from '../images/spruce-logo-without-text.svg';
import React from 'react';
import ThemeModeToggle from './ThemeModeToggle';

export default function SiteFooter() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          version
        }
      }
    }
  `);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__col">
            <p className="site-footer__slogen">Your hundredth of <br/>CSS framework.</p>
            <Link className="site-footer__logo" to="/" title={site.siteMetadata.title}>
              <Logo />
            </Link>
          </div>
          <div className="site-footer__col">
            <h3 className="site-footer__title" id="site-footer-title-01">Getting Started</h3>
            <ul className="site-footer__navigation" aria-labelledby="site-footer-title-01">
              <li><Link to="/docs/getting-started/introduction">Introduction</Link></li>
              <li><Link to="/docs/getting-started/installation">Installation</Link></li>
              <li><Link to="/docs/getting-started/structure-and-code">Structure and Code</Link></li>
              <li><Link to="/docs/getting-started/sass">Sass</Link></li>
            </ul>
          </div>
          <div className="site-footer__col">
            <h3 className="site-footer__title">Elements</h3>
            <ul className="site-footer__navigation">
            <li><Link to="/docs/elements/typography">Typography</Link></li>
            <li><Link to="/docs/elements/tables">Tables</Link></li>
            <li><Link to="/docs/elements/buttons">Buttons</Link></li>
            <li><Link to="/docs/elements/forms">Forms</Link></li>
            </ul>
          </div>
          <div className="site-footer__col">
            <h3 className="site-footer__title">More From Us</h3>
            <ul className="site-footer__navigation">
              <li><a href="https://conedevelopment.com/services/">Services</a></li>
              <li><a href="https://pineco.de/">Pine development blog</a></li>
              <li><a href="https://root.conedevelopment.com/">Root Laravel admin</a></li>
              <li><a href="https://bite-sized-a11y.com/">Bite-Sized Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="site-footer__information-wrapper">
            <a href="https://conedevelopment.com/" className="site-footer__cone-logo" aria-label="Cone"><ConeLogo /></a>
            <p className="site-footer__information">Code is licensed under <a href="https://github.com/conedevelopment/sprucecss/blob/master/LICENSE/">MIT</a>, docs is <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. - Version <strong>{site.siteMetadata.version}</strong> - <Link to="/privacy-policy">Privacy Policy</Link></p>
          </div>
          <ThemeModeToggle />
        </div>
      </div>
    </footer>
  );
}
