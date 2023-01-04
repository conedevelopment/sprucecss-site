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
        .map(heading => (
          <li key={heading.title}>
            <a href={`#${getAnchor(heading.url)}`} onClick={handleScroll}>{heading.title}</a>
            {heading.items && <ol>
              {heading.items
                .filter(
                  subheading => subheading.title !== 'Example(s)' &&
                  subheading.title !== 'Argument(s)' &&
                  subheading.title !== 'Parameter(s)' &&
                  subheading.title !== 'References'
                ).map(subheading => (
                  <li key={subheading.title}>
                    <a href={`#${getAnchor(subheading.url)}`} onClick={handleScroll}>{subheading.title}</a>
                  </li>
                ))}
            </ol>}
          </li>
        ))}
    </ol>
  );
}
