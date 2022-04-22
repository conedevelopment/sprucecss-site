import React from 'react';

export default function ExampleItem({title, description, url, github, children }) {
  return (
    <article className="example-item">
      <a className="example-item__link" href={url}>
        { children }
      </a>
      <div class="example-item__caption">
        {title &&
          <h2 className="example-item__title">
            <a className="example-item__link" href={url}>
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
