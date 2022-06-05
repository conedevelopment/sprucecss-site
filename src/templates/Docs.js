import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import Layout from '../components/Layout';
import TableOfContents from '../components/TableOfContents';
import Sidebar from '../components/Sidebar';
import Seo from '../components/SearchEngineOptimalization';

// Images
import ArrowLeft from '../images/icons/arrow-left.svg';
import ArrowRight from '../images/icons/arrow-right.svg';

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
      }
      body,
      headings {
        depth
        value
      }
    }
  }
`;

export default function Post({ data: { mdx: post }, pageContext }) {
  const {next, prev} = pageContext;

  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <Seo title={title} />
      <main id="content" className="l-documentation">
        <div className="container">
          <div className="l-documentation__inner">
            <Sidebar />
            <div className="l-documentation__body-helper">
              <article className="l-documentation__body">
                <h1 className="l-documentation__title">{title}</h1>
                {post.headings.length !== 0 &&
                <div className="l-documentation__table-of-content">
                  <section className="toc" aria-labelledby="toc-title">
                    <h3 className="toc__title" id="toc-title">On this page</h3>
                    <nav className="toc__navigation">
                      <TableOfContents headings={post.headings} />
                    </nav>
                  </section>
                </div>}
                <div className="l-documentation__content post-content">
                  <MDXRenderer>{body}</MDXRenderer>
                </div>
              </article>
              <div className="post-navigation">
                {prev &&
                  <Link className="post-navigation-item post-navigation-item--prev" to={`/docs/${prev.slug}`}>
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
                  <Link className="post-navigation-item post-navigation-item--next" to={`/docs/${next.slug}`}>
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
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
