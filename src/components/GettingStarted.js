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
    <div className="faq">
      <div className="container container--narrow">
        <div className="faq__inner">
          <div className="heading heading--center">
            <h2 className="heading__title">Good to Know</h2>
            <p className="heading__description">Curabitur gravida lorem sed orci iaculis, vitae iaculis nisl maximus.</p>
          </div>
          <div className="accordion-list accordion-list--boxed">
            <div className="accordion-card accordion-card--box">
              <h3 className="accordion-card__title">Why Make Another CSS Framework?</h3>
              <div className="accordion-card__content" style={{ display: 'none' }}>
                <p>As you may know, there are many CSS frameworks (hundreds of them, and a lot of them are not maintained today). Everybody can choose one that suits their work style or project requirements. So why make another one? It is certainly not because we can do it better but because we want to do it our way. We want to be in control and make decisions.</p>
              </div>
            </div>
            <div className="accordion-card accordion-card--box">
              <h3 className="accordion-card__title">It Is Opinionated</h3>
              <div className="accordion-card__content" style={{ display: 'none' }}>
                <p>Each system is opinionated but on a different level; this is valid for Spruce too. We don’t want to vote for (strictly) any particular solution (because there is always more than one), but we will show you what we think is the best for us (and maybe for you too). We don’t believe there is a good or bad solution, but we can learn from any of them.</p>
              </div>
            </div>
            <div className="accordion-card accordion-card--box">
              <h3 className="accordion-card__title">We Left the Grid Out</h3>
              <div className="accordion-card__content" style={{ display: 'none' }}>
                <p>One controversial decision we made with Spruce is to leave a classical grid system out. Because of the late CSS layout model developments like Flexbox and Grid, we think it can be eliminated; this doesn’t mean that we won’t show you how to make layouts with ease, but we try to make it the modern way.</p>
              </div>
            </div>
            <div className="accordion-card accordion-card--box">
              <h3 className="accordion-card__title">Coding Style Guide and Practices</h3>
              <div className="accordion-card__content" style={{ display: 'none' }}>
                <p>Where it is possible, we use elements and/or attributes to style elements, but it is still a class-based framework.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}
