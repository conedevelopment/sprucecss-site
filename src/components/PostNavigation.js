import React from 'react';
import { Link  } from 'gatsby';

// Images
import ArrowLeft from '../images/icons/arrow-left.svg';
import ArrowRight from '../images/icons/arrow-right.svg';

export default function PostNavigation({ prev, next, type }) {
  return (
    <div className="post-navigation">
      {prev &&
        <Link className="post-navigation-item post-navigation-item--prev" to={`${type === 'doc' ? '/docs' : ''}${prev.fields.slug}`}>
          <span className="post-navigation-item__icon">
            <ArrowLeft />
          </span>
          <span className="post-navigation-item__caption">
            Previous
            <span className="post-navigation-item__title">{prev.frontmatter.title}</span>
          </span>
        </Link>
      }
      {next &&
        <Link className="post-navigation-item post-navigation-item--next" to={`${type === 'doc' ? '/docs' : ''}${next.fields.slug}`}>
          <span className="post-navigation-item__caption">
            Next
            <span className="post-navigation-item__title">{next.frontmatter.title}</span>
          </span>
          <span className="post-navigation-item__icon">
            <ArrowRight />
          </span>
        </Link>
      }
    </div>
  );
}
