import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__col"><a className="footer__logo" href="#"><img src="../../images/bazar-ui-logo.svg" alt="Bazar UI"/></a></div>
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
            <p className="footer__copyright">&copy; 2021 conedevelopment.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
