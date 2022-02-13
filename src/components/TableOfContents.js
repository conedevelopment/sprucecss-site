import React from 'react';
import getAnchor from './utils/getAnchor.js';

function TableOfContents({ headings }) {
  return (
    <ul>
      {headings
        .filter(heading => heading.depth > 1 && heading.depth < 4)
        .map(heading => (
          <li className={`heading-${heading.depth}`} key={heading.value}>
            <a href={`#${getAnchor(heading.value)}`}>{heading.value}</a>
          </li>
        ))}
    </ul>
  )
}

export default TableOfContents;
