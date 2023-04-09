import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Images
import Components from '../images/icons/components.svg';
import Blog from '../images/icons/blog.svg';

export default function GettingStarted({ classes }) {
  return (
    <div className="getting-started">
      <div className="container container--wide">
        <div className="heading">
          <h2 className="heading__title">Explore</h2>
          <p className="heading__description">Curabitur gravida lorem sed orci iaculis, vitae iaculis nisl maximus.</p>
        </div>
        <div className="getting-started__inner">
          <div className="getting-started-card">
            <StaticImage
              className="hero__image"
              src="../images/icons/Elips.png"
              alt=""
              placeholder="blurred"
              height="100"
              width="100"
            />
            <h3>
              <Link className="getting-started-card__link" to="/docs/getting-started/introduction">Documentation</Link>
            </h3>
            <p>Learn about Spruce CSS through our extensive documentation.</p>
            <a href="#">Read more</a>
          </div>
          <div className="getting-started-card">
            <StaticImage
              className="hero__image"
              src="../images/icons/Abstract2.png"
              alt=""
              placeholder="blurred"
              height="100"
              width="100"
            />
            <h3>
              <Link className="getting-started-card__link" to="/ui/getting-started/introduction">Components</Link>
            </h3>
            <p>Explore our extensive UI library built with Spruce CSS.</p>
            <a href="#">Read more</a>
          </div>
          <div className="getting-started-card">
            <StaticImage
              className="hero__image"
              src="../images/icons/Elips2.png"
              alt=""
              placeholder="blurred"
              height="100"
              width="100"
            />
            <h3>
              <Link className="getting-started-card__link" to="/blog">Blog</Link>
            </h3>
            <p>Read about front-end development and concepts of Spruce CSS.</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
