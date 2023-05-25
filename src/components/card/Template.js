import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';

export default function Card({ post }) {
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <div className="template-card">
      <Link to={`/templates${post.fields.slug}`}>
        <div className="template-card__thumbnail-wrapper">
          <GatsbyImage className="template-card__thumbnail" image={image} alt={post.frontmatter.alt} />
        </div>
      </Link>
      <h2 className="template-card__title">
        <Link to={`/templates${post.fields.slug}`}>{post.frontmatter.title}</Link>
      </h2>
      <p className="template-card__description">{post.frontmatter.description}</p>
      <div className="template-card__meta">
        <div className="template-card__tags">
          {post.frontmatter.tags
            .filter(tag => tag.length > 0)
            .map((tag, i) => (
              <span key={tag} className="template-card__tag">
                {tag}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  );
}
