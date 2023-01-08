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
          <div className="doc-card">
            <span className="doc-card__serial-number">01</span>
            <h3 className="doc-card__title">
                <Link to="/docs/getting-started/installation" className="doc-card__link">
                  Install&shy;lation
                </Link>
              </h3>
          </div>
          <div className="doc-card">
            <span className="doc-card__serial-number">02</span>
            <h3 className="doc-card__title">
              <Link to="/docs/customization/themes" className="doc-card__link">
                Themes
              </Link>
            </h3>
          </div>
          <div className="doc-card">
            <span className="doc-card__serial-number">03</span>
            <h3 className="doc-card__title">
              <Link to="/docs/sass/mixins" className="doc-card__link">
                Mixins
              </Link>
            </h3>
          </div>
          <div className="doc-card">
            <span className="doc-card__serial-number">04</span>
            <h3 className="doc-card__title">
              <Link to="/docs/elements/typography" className="doc-card__link">
                Typography
              </Link>
            </h3>
          </div>
          <div className="doc-card">
            <span className="doc-card__serial-number">05</span>
            <h3 className="doc-card__title">
              <Link to="/docs/elements/buttons" className="doc-card__link">
                Buttons
              </Link>
            </h3>
          </div>
          <div className="doc-card">
            <span className="doc-card__serial-number">06</span>
            <h3 className="doc-card__title">
              <Link to="/docs/elements/forms" className="doc-card__link">
                Forms
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
