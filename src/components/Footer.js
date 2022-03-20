import React from 'react';
import { Link, useStaticQuery, graphql  } from 'gatsby';
import ThemeModeToggle from './ThemeModeToggle';

// Images
import Logo from '../images/spruce-logo-footer.svg';
import ConeLogo from '../images/cone-logo.svg';

function Footer() {
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
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__col">
            <Link className="footer__logo" to="/" title={site.siteMetadata.title}>
              <Logo />
            </Link>
          </div>
          <div className="footer__col">
            <h3 className="footer__title" id="footer-title-01">Getting Started</h3>
            <ul className="footer__navigation" aria-labelledby="footer-title-01">
              <li><Link to="/docs/getting-started/introduction">Introduction</Link></li>
              <li><Link to="/docs/getting-started/installation">Installation</Link></li>
              <li><Link to="/docs/getting-started/structure-and-code">Structure and Code</Link></li>
              <li><Link to="/docs/getting-started/sass">Sass</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Elements</h3>
            <ul className="footer__navigation">
            <li><Link to="/docs/elements/typography">Typography</Link></li>
            <li><Link to="/docs/elements/tables">Tables</Link></li>
            <li><Link to="/docs/elements/buttons">Buttons</Link></li>
            <li><Link to="/docs/elements/forms">Forms</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Other Projects</h3>
            <ul className="footer__navigation">
              <li><a href="https://pineco.de/">Pine</a></li>
              <li><a href="https://bazar.conedevelopment.com/">Bazar</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__information">Code is licensed under <a href="https://github.com/conedevelopment/sprucecss/blob/master/LICENSE/">MIT</a>, docs is <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. - Version <strong>{site.siteMetadata.version}</strong> - <Link to="/privacy-policy">Privacy Policy</Link></p>
          <a href="https://conedevelopment.com/" className="footer__cone-logo" aria-label="Cone"><ConeLogo /></a>
          <ThemeModeToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
