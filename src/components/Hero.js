import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Hero() {
  return (
    <div className="hero">
      <div className="container container--wide">
        <div className="hero__inner">
          <div className="hero__caption">
            <h1 className="hero__title">A minimalistic, low-level CSS framework</h1>
            <p className="hero__description">A low-level, lightweight and modern CSS design system, authoring tool built on Sass. Give your project a solid foundation.</p>
            <div className="hero__btns">
              <Link to="/docs/getting-started/introduction" className="btn btn--primary btn--lg btn--rounded">Get Started</Link>
              <Link to="/docs/getting-started/introduction" className="btn btn--primary-outlined btn--lg btn--rounded">Components</Link>
            </div>
          </div>
          <StaticImage
            src="../images/torus.png"
            alt=""
            placeholder="blurred"
          />
        </div>
      </div>
    </div>
  );
}
