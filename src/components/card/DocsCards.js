import React from 'react';
import { Link } from 'gatsby';

export default function DocsCards(props) {
  return (
    <div className="docs-cards">
      <div className="docs-cards__container">
        <div className="heading">
          <h2 className="heading__title">Documentation</h2>
        </div>
        <div className="docs-cards__inner">
          <Link to="/docs/getting-started/installation" className="docs-card">
            <span className="docs-card__serial-number">01</span>
            <h2 className="docs-card__title h3">Instal&shy;lation</h2>
          </Link>
          <Link to="/docs/customization/themes" className="docs-card">
            <span className="docs-card__serial-number">02</span>
            <h2 className="docs-card__title h3">Themes</h2>
          </Link>
          <Link to="/docs/sass/mixins" className="docs-card">
            <span className="docs-card__serial-number">03</span>
            <h2 className="docs-card__title h3">Mixins</h2>
          </Link>
          <Link to="/docs/elements/typography" className="docs-card">
            <span className="docs-card__serial-number">04</span>
            <h2 className="docs-card__title h3">Typography</h2>
          </Link>
          <Link to="/docs/elements/buttons" className="docs-card">
            <span className="docs-card__serial-number">05</span>
            <h2 className="docs-card__title h3">Buttons</h2>
          </Link>
          <Link to="/docs/elements/forms" className="docs-card">
            <span className="docs-card__serial-number">06</span>
            <h2 className="docs-card__title h3">Forms</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
