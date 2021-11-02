import React from 'react';
import { Link } from 'gatsby';

export default ({ headings }) => (
  <ul>
    {headings
      .filter(heading => heading.depth !== 1)
      .map(heading => (
        <li key={heading.title}>
          <Link to={heading.url}>{heading.title}</Link>
        </li>
      ))}
  </ul>
)