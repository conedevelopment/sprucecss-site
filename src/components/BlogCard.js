import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogCard({ post }) {
  console.log(post);
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <div className="blog-card">
      <Link to={ post.slug }>
        <GatsbyImage className="blog-card__thumbnail" image={image} />
      </Link>
      <div className="blog-card__meta">
        <div className="blog-card__tags">
        {post.frontmatter.tags
          .filter(tag => tag.length > 0)
          .map(tag => <Link to={`/blog/tag/${tag}`} className="blog-card__tag">#{tag}</Link>)}
        </div>
        <span className="blog-card__date">{ post.frontmatter.date }</span>
      </div>
      <h2 className="blog-card__title">
        <Link to={ post.slug }>{ post.frontmatter.title }</Link>
      </h2>
    </div>
  );
}