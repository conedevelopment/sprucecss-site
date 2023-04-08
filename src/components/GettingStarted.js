import React from 'react';
import { Link } from 'gatsby';

// Images
import Documentation from '../images/icons/documentation.svg';
import Components from '../images/icons/components.svg';
import Blog from '../images/icons/blog.svg';

export default function GettingStarted({ classes }) {
  return (
    <div className="getting-started">
      <div className="container container--wide">
        <div className="heading">
          <h2 className="heading__title">Explore</h2>
        </div>
        <div className="getting-started__inner">
          <div className="getting-started-card">
            <Documentation className="getting-started-card__icon" />
            <h3>
              <Link className="getting-started-card__link" to="/docs/getting-started/introduction">Documentation</Link>
            </h3>
            <p>Learn about Spruce CSS through our extensive documentation.</p>
          </div>
          <div className="getting-started-card">
            <Components className="getting-started-card__icon" />
            <h3>
              <Link className="getting-started-card__link" to="/ui/getting-started/introduction">Components</Link>
            </h3>
            <p>Explore our extensive UI library built with Spruce CSS.</p>
          </div>
          <div className="getting-started-card">
            <Blog className="getting-started-card__icon" />
            <h3>
              <Link className="getting-started-card__link" to="/blog">Blog</Link>
            </h3>
            <p>Read about front-end development and concepts of Spruce CSS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
