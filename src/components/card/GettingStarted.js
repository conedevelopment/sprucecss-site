import { Link } from 'gatsby';
import React from 'react';
import PlayIcon from '../../images/icons/play-arrow.svg';

export default function GettingStartedCard({ title, children, link, description }) {
  return (
    <div className="getting-started-card">
      {children}
      <div className="getting-started-card__caption">
        <h3 className="getting-started-card__title">{title}</h3>
        <p className="getting-started-card__description">{description}</p>
        <div style={{ lineHeight: '1', marginBlockStart: '0.75rem' }}>
          <Link className="text-btn getting-started-card__link" to={link}>
            Read more
            <PlayIcon className="text-btn__icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
