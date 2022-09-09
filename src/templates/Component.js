import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import Layout from '../components/Layout';
import TableOfContents from '../components/TableOfContents';
import SidebarComponent from '../components/SidebarComponent';
import Seo from '../components/SearchEngineOptimalization';

// Images
import OpenNew from '../images/icons/open-in-new.svg';
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
      <main id="content" className="l-component">
        <div className="container">
          <div className="l-component__header">
            <h1 className="l-component__title">{title}</h1>
            <p className="lead">Spruce is a Sass-based minimalistic CSS framework that helps you get the foundation right and manage multiple projects better.</p>
          </div>
          <div className="l-component__code-highlighter code-highlighter">
            <div className="code-highlighter__header">
              <div className="code-highlighter__group code-highlighter__group--column">
                <h2 className="code-highlighter__title">Header 01</h2>
                <a className="code-highlighter__open-new" href="#" target="_blank">
                  Open in New Window
                </a>
              </div>
              <div className="code-highlighter__group">
                <button className="btn btn--primary btn--sm">PREVIEW</button>
                <button className="btn btn--discrete btn--sm">HTML</button>
                <button className="btn btn--discrete btn--sm">SCSS</button>
                <button className="btn btn--discrete btn--sm">JS</button>
              </div>
            </div>
            <div className="code-highlighter__body" style={{height: "34rem"}}>
              <iframe src="https://cone-simplepay.netlify.app/" frameborder="0"></iframe>
            </div>
          </div>
          <article className="l-component__inner">
            <SidebarComponent />
            <div className="l-component__content post-content">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
            {post.headings.length !== 0 &&
            <div className="l-component__table-of-content">
              <section className="toc" aria-labelledby="toc-title">
                <h3 className="toc__title" id="toc-title">On this page</h3>
                <nav className="toc__navigation">
                  <TableOfContents headings={post.headings} />
                </nav>
              </section>
            </div>}
          </article>
          <div className="post-navigation">
            {prev &&
              <Link className="post-navigation-item post-navigation-item--prev" to={`/${prev.slug}`}>
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
              <Link className="post-navigation-item post-navigation-item--next" to={`/${next.slug}`}>
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
      </main>
    </Layout>
  );
}
