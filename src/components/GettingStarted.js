import React from 'react';

export default function GettingStarted({ title, description, url, github, children }) {
  return (
    <div className="example-card">
      <a className="example-card__link" href={url}>
        { children }
      </a>
      <div className="example-card__caption">
        {title &&
          <h2 className="example-card__title">
            <a className="example-card__link" href={url}>
              { title }
            </a>
          </h2>
        }
        {description && <p className="example-card__description">{ description }</p>}
        {github && <a className="example-card__github" href={ github }>GitHub</a>}
      </div>
    </div>
  );
}
