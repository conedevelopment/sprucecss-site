import React from 'react';
import { Link } from 'gatsby';

// Images
import CopyIcon from '../images/icons/copy.svg';

export default function Hero() {
  async function handleCopy() {
    await navigator.clipboard.writeText('npm install sprucecss');
    alert('Install command copied to the clipboard!');
  }

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__title">Spruce CSS <span>Framework</span></h1>
        <p className="hero__description">A low-level, lightweight and modern CSS design system, authoring tool built on Sass. Give your project a solid foundation.</p>
        <div className="hero__btns">
          <Link to="/docs/getting-started/introduction" className="btn btn--primary btn--lg btn--rounded">Get Started</Link>
          <button className="btn btn--install btn--icon btn--lg btn--rounded" onClick={handleCopy}>
            <CopyIcon className="btn__icon" />
            npm install sprucecss
          </button>
        </div>
      </div>
    </div>
  );
}
