import React from 'react';

export default function ExampleItem({title, url, github, children }) {
  return (
    <article className="example-item">
      <a className="example-item__link" href={url}>
        { children }
        {title && <h2 className="example-item__title">{ title }</h2>}
      </a>
      {github && <a className="example-item__github" href={ github }>GitHub</a>}
    </article>
  );
}
