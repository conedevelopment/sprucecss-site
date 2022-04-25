import React from 'react';

export default function ExampleCard({title, description, url, github, children }) {
  return (
    <article className="example-card">
      <a className="example-card__link" href={url}>
        { children }
      </a>
      <div class="example-card__caption">
        {title &&
          <h2 className="example-card__title">
            <a className="example-card__link" href={url}>
              { title }
            </a>
          </h2>
        }
        {description && <p className="example-item__description">{ description }</p>}
        {github && <a className="example-item__github" href={ github }>GitHub</a>}
      </div>
    </article>
  );
}
