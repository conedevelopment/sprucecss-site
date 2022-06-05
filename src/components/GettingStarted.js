import React from 'react';
import { Link } from 'gatsby';

// Images
import Documentation from '../images/icons/documentation.svg';
import Examples from '../images/icons/examples.svg';
import Blog from '../images/icons/blog.svg';

export default function GettingStarted({ classes }) {
  return (
    <div className={`getting-started ${classes}`}>
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
            <p>Learn about Spruce CSS through our extensive documentation.</p>
          </div>
          <div className="getting-started-card">
            <Examples className="getting-started-card__icon" />
            <h3>
              <Link className="getting-started-card__link" to="/examples">Examples</Link>
            </h3>
            <p>Explore the look and feel of Spruce through simple examples.</p>
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
