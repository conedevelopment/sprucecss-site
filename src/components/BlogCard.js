import React from 'react';
import { Link } from 'gatsby';

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <p className="blog-card__meta">
        <a className="blog-card__tag" href="#">#css</a>
        <span className="blog-card__date">{ post.frontmatter.date }</span>
      </p>
      <h2 className="blog-card__title">
        <Link to={ post.slug } className="blog-card__link">{ post.frontmatter.title }</Link>
      </h2>
    </div>
  );
}
