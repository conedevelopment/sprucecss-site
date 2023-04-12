import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function GettingStarted({ classes }) {
  return (<>
    <div className="getting-started">
      <div className="container container--wide">
        <div className="getting-started__inner">
          <div className="getting-started-card">
            <StaticImage
              className="getting-started-card__icon"
              src="../images/icons/Elips.png"
              alt=""
              placeholder="blurred"
              height="100"
              width="100"
            />
            <div className="getting-started-card__caption">
              <h3>Documentation</h3>
              <p>Learn about Spruce CSS through our extensive documentation.</p>
              <Link className="getting-started-card__link" to="/docs/getting-started/introduction">Read more</Link>
            </div>
          </div>
          <div className="getting-started-card">
            <StaticImage
              className="getting-started-card__icon"
              src="../images/icons/Abstract2.png"
              alt=""
              placeholder="blurred"
              height="100"
              width="100"
            />
            <div className="getting-started-card__caption">
              <h3>Components</h3>
              <p>Explore our extensive UI library built with Spruce CSS.</p>
              <Link className="getting-started-card__link" to="/ui/getting-started/introduction">Read more</Link>
            </div>
          </div>
          <div className="getting-started-card">
            <StaticImage
              className="getting-started-card__icon"
              src="../images/icons/Elips2.png"
              alt=""
              placeholder="blurred"
              height="100"
              width="100"
            />
            <div className="getting-started-card__caption">
              <h3>Blog</h3>
              <p>Read about front-end development and concepts of Spruce CSS.</p>
              <Link className="getting-started-card__link" to="/blog">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}
