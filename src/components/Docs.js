import React from 'react';
import { Link } from 'gatsby';

export default function Docs() {
  return (
    <div className="doc-cards">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title">Documentation</h2>
        </div>
        <div className="doc-cards__inner">
          <Link to="/docs/getting-started/installation" className="doc-card">
            <span className="doc-card__serial-number">01</span>
            <h3 className="doc-card__title h3">Instal&shy;lation</h3>
          </Link>
          <Link to="/docs/customization/themes" className="doc-card">
            <span className="doc-card__serial-number">02</span>
            <h3 className="doc-card__title h3">Themes</h3>
          </Link>
          <Link to="/docs/sass/mixins" className="doc-card">
            <span className="doc-card__serial-number">03</span>
            <h3 className="doc-card__title h3">Mixins</h3>
          </Link>
          <Link to="/docs/elements/typography" className="doc-card">
            <span className="doc-card__serial-number">04</span>
            <h3 className="doc-card__title h3">Typography</h3>
          </Link>
          <Link to="/docs/elements/buttons" className="doc-card">
            <span className="doc-card__serial-number">05</span>
            <h3 className="doc-card__title h3">Buttons</h3>
          </Link>
          <Link to="/docs/elements/forms" className="doc-card">
            <span className="doc-card__serial-number">06</span>
            <h3 className="doc-card__title h3">Forms</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
