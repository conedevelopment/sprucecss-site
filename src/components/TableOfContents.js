import React from 'react';

 function TableOfContents({ headings }) {
  return (
    <ul>
      {headings
        .filter(heading => heading.depth !== 1)
        .map(heading => (
          <li key={heading.title}>
            <a href={heading.url}>{heading.title}</a>
          </li>
        ))}
    </ul>
  )
}

export default TableOfContents;
