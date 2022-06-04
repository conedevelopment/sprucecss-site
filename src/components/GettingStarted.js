import React from 'react';
import { Link } from 'gatsby';

// Images
import Documentation from '../images/icons/book.svg';
import Examples from '../images/icons/nanotechnology.svg';
import Blog from '../images/icons/carbon.svg';

export default function GettingStarted() {
  return (
    <div className="getting-started">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title">Explore</h2>
        </div>
        <div className="getting-started__inner">
          <div className="getting-started-card">
            <Documentation className="getting-started-card__icon" />
            <h3>
              <Link className="getting-started-card__link" to="/docs/getting-started/introduction">Documentation</Link>
            </h3>
            <p>Nam eget accumsan leo, ac laoreet nibh. Vivamus et justo lobortis, egestas turpis et, convallis orci.</p>
          </div>
          <div className="getting-started-card">
            <Examples className="getting-started-card__icon" />
            <h3>
              <Link className="getting-started-card__link" to="/examples">Examples</Link>
            </h3>
            <p>Praesent in enim interdum, eleifend nunc sed, mollis enim. Sed lobortis neque ex, nec condimentum felis porta eget.</p>
          </div>
          <div className="getting-started-card">
            <Blog className="getting-started-card__icon" />
            <h3>
              <Link className="getting-started-card__link" to="/blog">Blog</Link>
            </h3>
            <p>Id egestas purus lorem sed leo. Nunc lectus leo, molestie non tortor sit amet, tincidunt dictum dui.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
