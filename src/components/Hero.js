import React from 'react';
import { Link } from 'gatsby';

// Images
import CopyIcon from '../images/icons/copy.svg';

export default function Hero() {
  async function copy() {
    await navigator.clipboard.writeText('npm install sprucecss');
    alert('Install command copied to the clipboard!');
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
            <h1 className="hero__title">Spruce CSS <span className="solid">Framework</span></h1>
            <p className="hero__description">An open-source, lightweight and modern CSS design system, authoring tool built on Sass. Give your project a solid foundation.</p>
            <div className="hero__btns">
              <Link to="/docs/getting-started/introduction" className="btn btn--primary btn--lg btn--rounded">Get Started</Link>
              <button className="btn btn--install btn--lg btn--rounded" onClick={copy}>
                <CopyIcon className="btn__icon btn__icon--start" />
                npm install sprucecss
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}
