import GitHubIcon from '../images/icons/github.svg';
import React from 'react';

export default function Cta() {
  return (
    <div className="cta">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__caption">
            <div className="heading">
              <h2 className="heading__title cta__title">Find us on GitHub</h2>
            </div>
            <p>Did you find a bug? Have an idea or a question? Please open an issue to help us develop the project.</p>
          </div>
          <div className="cta__actions">
            <a href="https://github.com/conedevelopment/sprucecss" className="btn btn--dark btn--rounded btn--lg">
              <GitHubIcon className="btn__icon" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
