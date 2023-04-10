import React from 'react';
import GitHubIcon from '../images/icons/github.svg';

export default function Cta() {
  return (
    <div className="cta">
      <div className="container container--wide">
        <div className="cta__inner">
          <div className="cta__caption">
            <div className="heading">
              <h2 className="heading__title cta__title">Find us on GitHub</h2>
            </div>
            <p>Did you found a bug? Have an idea or a question? Open an issue to help us develop the project.</p>
          </div>
          <div className="cta__actions">
            <a href="https://github.com/conedevelopment/sprucecss" className="btn btn--dark btn--lg">
              <GitHubIcon className="btn__icon" />
              GibHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
