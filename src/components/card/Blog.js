import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Card({ post }) {
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <div className="blog-card">
      <Link to={`/blog${post.fields.slug}`}>
        <GatsbyImage className="blog-card__thumbnail" image={image} alt={post.frontmatter.alt} />
      </Link>
      <div className="blog-card__meta">
        <div className="blog-card__tags">
          {post.frontmatter.tags
            .filter(tag => tag.length > 0)
            .map((tag, i) => (
              <span key={tag}>
                <Link to={`/blog/tag/${tag}`} className="blog-card__tag">
                  #{tag}
                </Link>
                {i < post.frontmatter.tags.length - 1 ? ', ' : ''}
              </span>
            ))
          }
        </div>
        <span className="blog-card__date">{post.frontmatter.date}</span>
      </div>
      <h2 className="blog-card__title">
        <Link to={`/blog${post.fields.slug}`}>{post.frontmatter.title}</Link>
      </h2>
    </div>
  );
}
