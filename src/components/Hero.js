import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__caption">
            <a href="https://github.com/conedevelopment/sprucecss/releases/tag/v2.0.0" className="hero__note">Version 2 is out, check out what is changed!</a>
            <h1 className="hero__title">A minimalistic, low-level <span>CSS framework</span></h1>
            <p className="hero__description">A low-level, lightweight and modern CSS design system, authoring tool built on Sass. Give your project a solid foundation.</p>
            <div className="hero__btns">
              <Link to="/docs/getting-started/introduction/" className="btn btn--primary btn--lg btn--rounded">Get Started</Link>
              <Link to="/ui/getting-started/introduction/" className="btn btn--primary-outlined btn--lg btn--rounded">Components</Link>
            </div>
          </div>
          <StaticImage
            className="hero__image"
            src="../images/hero.png"
            alt=""
            placeholder="blurred"
            width={900}
          />
        </div>
      </div>
    </div>
  );
}
