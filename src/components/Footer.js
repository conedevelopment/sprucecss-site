import React from 'react';
import { Link, useStaticQuery, graphql  } from 'gatsby';

// Images
import Logo from '../images/spruce-logo.svg';
import ConeLogo from '../images/cone-logo.svg';

function Footer() {
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
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__col">
            <Link className="footer__logo" to="/" title={site.siteMetadata.title}>
              <Logo />
            </Link>
          </div>
          <div className="footer__col">
            <h3 className="footer__title" id="footer-title-01">Documentation</h3>
            <ul className="footer__navigation" aria-labelledby="footer-title-01">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Help &amp; Contact</h3>
            <ul className="footer__navigation">
              <li><a href="#">Resolution Center</a></li>
              <li><a href="#">Seller Information Center</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Community</h3>
            <ul className="footer__navigation">
              <li><a href="#">Announcements</a></li>
              <li><a href="#">Answer center</a></li>
              <li><a href="#">Groups</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <ul className="footer__navigation">
            <li><a href="#">Conditions of Use</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
          <p className="footer__copyright">
            <a href="https://conedevelopment.com/" className="footer__cone-logo"><ConeLogo /></a>
            &copy; 2021
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
