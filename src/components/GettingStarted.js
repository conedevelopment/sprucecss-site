import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import GettingStartedCard from './card/GettingStarted';

export default function GettingStarted({ type }) {
  return (
    <div className={`getting-started ${type === 'bottom' ? 'getting-started--border-block-start' : 'getting-started--border-block-end'}`}>
      <div className="container">
        <div className="getting-started__inner">
          <GettingStartedCard
            description="Learn about Spruce CSS through our extensive documentation."
            link="/docs/getting-started/introduction"
            title="Documentation"
          >
            <StaticImage
              alt=""
              className="getting-started-card__icon"
              objectFit="contain"
              placeholder="blurred"
              src="../images/icons/documentation.png"
              width={160}
            />
          </GettingStartedCard>
          <GettingStartedCard
            description="Explore our extensive UI library built with Spruce CSS."
            link="/ui/getting-started/introduction"
            title="Components"
          >
            <StaticImage
              alt=""
              className="getting-started-card__icon"
              objectFit="contain"
              placeholder="blurred"
              src="../images/icons/components.png"
              width={160}
            />
          </GettingStartedCard>
          <GettingStartedCard
            description="Read about front-end development and concepts of Spruce CSS."
            link="/blog"
            title="Blog"
          >
            <StaticImage
              alt=""
              className="getting-started-card__icon"
              objectFit="contain"
              placeholder="blurred"
              src="../images/icons/blog.png"
              width={160}
            />
          </GettingStartedCard>
        </div>
      </div>
    </div>
  );
}
