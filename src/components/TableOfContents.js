import React from 'react';
import getAnchor from '../utils/getAnchor.js';

export default function TableOfContents({ headings }) {
  function handleScroll(e) {
    e.preventDefault();

    let hash = e.target.getAttribute('href');

    document.querySelector(hash).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    window.history.pushState({}, '', hash);
  }

  return (
    <ol>
      {headings
        .filter(
          heading => heading.depth > 1 &&
          heading.depth < 4 &&
          heading.value !== 'Example(s)' &&
          heading.value !== 'Argument(s)' &&
          heading.value !== 'Parameter(s)' &&
          heading.value !== 'References'
        )
        .map(heading => (
          <li className={`heading-${heading.depth}`} key={heading.value}>
            <a href={`#${getAnchor(heading.value)}`} onClick={handleScroll}>{heading.value}</a>
          </li>
        ))}
    </ol>
  );
}
