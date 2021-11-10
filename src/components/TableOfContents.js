import React from 'react';
import { Link } from 'gatsby';

export default ({ headings }) => (
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