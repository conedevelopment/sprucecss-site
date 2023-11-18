import { Link } from 'gatsby';
import IconLightning from '../images/icons/lightning.svg';
import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__caption">
            <Link to="/templates/documentation/" className="hero__note">
              <IconLightning />
              Check out our free Eleventy documentation template!
            </Link>
            <h1 className="hero__title">A minimalistic, low-level <span>CSS framework</span></h1>
            <p className="hero__description">A low-level, lightweight and modern CSS system, authoring tool built on Sass. Give your project a solid foundation.</p>
            <div className="hero__btns">
              <Link to="/docs/getting-started/introduction/" className="btn btn--primary btn--lg btn--rounded">Get Started</Link>
              <Link to="/ui/getting-started/introduction/" className="btn btn--primary-outlined btn--lg btn--rounded">Components</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
