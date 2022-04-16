import React from 'react';
import { Link } from 'gatsby';

export default function DocsCards(props) {
  return (
    <div className="docs-cards">
      <div className="docs-cards__container">
        <div className="docs-cards__inner">
          <Link to="/docs/getting-started/introduction" className="docs-card">
            <span className="docs-card__serial-number">01</span>
            <h2 className="docs-card__title">Intro&shy;duction</h2>
          </Link>
          <Link to="/docs/getting-started/installation" className="docs-card">
            <span className="docs-card__serial-number">02</span>
            <h2 className="docs-card__title">Instal&shy;lation</h2>
          </Link>
          <Link to="/docs/getting-started/structure-and-code" className="docs-card">
            <span className="docs-card__serial-number">03</span>
            <h2 className="docs-card__title">Struc&shy;ture and Code</h2>
          </Link>
          <Link to="/docs/elements/typography" className="docs-card">
            <span className="docs-card__serial-number">04</span>
            <h2 className="docs-card__title">Typography</h2>
          </Link>
          <Link to="/docs/elements/tables" className="docs-card">
            <span className="docs-card__serial-number">05</span>
            <h2 className="docs-card__title">Tables</h2>
          </Link>
          <Link to="/docs/elements/buttons" className="docs-card">
            <span className="docs-card__serial-number">06</span>
            <h2 className="docs-card__title">Buttons</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
