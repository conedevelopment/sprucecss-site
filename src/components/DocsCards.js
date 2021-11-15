import React from 'react';
import { Link } from 'gatsby';

function DocsCards(props) {
  return (
    <div className="docs-cards">
      <div className="docs-cards__container">
        <div className="docs-cards__inner">
          <Link to="/docs/getting-started/introduction" className="docs-card">
            <span className="docs-card__serial-number">01</span>
            <h2 className="docs-card__title">Introduction</h2>
          </Link>
          <Link to="/docs/getting-started/installation" className="docs-card">
            <span className="docs-card__serial-number">02</span>
            <h2 className="docs-card__title">Installation</h2>
          </Link>
          <Link to="/docs/getting-started/structure-and-code" className="docs-card">
            <span className="docs-card__serial-number">03</span>
            <h2 className="docs-card__title">Structure and Code</h2>
          </Link>
          <Link to="/docs/getting-started/sass" className="docs-card">
            <span className="docs-card__serial-number">04</span>
            <h2 className="docs-card__title">Sass</h2>
          </Link>
          <Link to="/docs/getting-started/accessibility" className="docs-card">
            <span className="docs-card__serial-number">05</span>
            <h2 className="docs-card__title">Accessibility</h2>
          </Link>
          <Link to="/docs/getting-started/contribute" className="docs-card">
            <span className="docs-card__serial-number">06</span>
            <h2 className="docs-card__title">Contribute</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DocsCards;


