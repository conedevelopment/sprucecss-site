import { Link } from 'gatsby';
import React from 'react';

export default function GettingStartedCard({ title, children, link, description }) {
  return (
    <div className="getting-started-card">
      {children}
      <div className="getting-started-card__caption">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="getting-started-card__link" to={link}>Read more</Link>
      </div>
    </div>
  );
}
