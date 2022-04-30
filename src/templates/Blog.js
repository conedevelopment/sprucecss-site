import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';

export default function Post({ data: { mdx: post } }) {
  const { title } = post.frontmatter;
  const { body } = post;
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <Layout>
      <Seo title={title} />
      <main id="content" class="post">
        <div class="post-heading">
          <div class="container--narrow">
            <div class="post-heading__inner">
              <h1 class="post-heading__title">{title}</h1>
              <ul class="breadcrumb-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <span aria-current="page">{title}</span>
                </li>
              </ul>
              <div class="post-heading__meta">
                <a class="post-author" href="https://twitter.com/_iamadam" rel="noopener noreferrer" target="_blank">
                  <img class="post-author__avatar" src="https://secure.gravatar.com/avatar/fd9479a898c593601efd2fe758a86dba?s=96&amp;d=mm&amp;r=g" alt="" aria-hidden="true" width="38" height="38" />
                  <span class="post-author__name">by Adam Laki</span>
                </a>
                <span>
                  Posted in {post.frontmatter.tags
                    .filter(tag => tag.length > 0)
                    .map((tag, i) => (
                      <>
                        <Link to={`/blog/tag/${tag}`}>
                          #{tag}
                        </Link>
                        {i < post.frontmatter.tags.length - 1 ? ', ' : ''}
                      </>
                    ))
                  }
                </span>
                <span>
                  <span class="sr-only">Posted on</span>
                  <span>{post.frontmatter.date}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container--wide">
          <div class="post-content">
            <GatsbyImage image={image} />
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1600, height: 700, placeholder: BLURRED, formats: AUTO)
          }
        }
      }
      body
    }
  }
`;
