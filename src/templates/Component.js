import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import CodeHighlighter from '../components/CodeHighlighter';
import CodeHighlighterItem from '../components/CodeHighlighterItem';
import Layout from '../components/Layout';
import TableOfContents from '../components/TableOfContents';
import SidebarComponent from '../components/SidebarComponent';
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
      <main id="content" className="l-component">
        <div className="container">
          <div className="l-component__header">
            <h1 className="l-component__title">{title}</h1>
            <p className="lead">Spruce is a Sass-based minimalistic CSS framework that helps you get the foundation right and manage multiple projects better.</p>
          </div>
          <CodeHighlighter
            title='Header 01'
            externalUrl='#'
          >
            <CodeHighlighterItem title="Preview" id="preview">
              <iframe src="https://cone-simplepay.netlify.app/" frameborder="0" style={{height: "34rem"}}></iframe>
            </CodeHighlighterItem>
            <CodeHighlighterItem title="SCSS" id="scss" code={`
$settings: (
  color-fallback: false,
  html-smooth-scrolling: true,
  hyphens: true,
  optimal-responsive-font-size: '2vw + 1rem',
  optimal-spacer-size: '5vw',
  prefix: 'spruce',
  utilities: false,
  print: false
);
              `}
            >
            </CodeHighlighterItem>
            <CodeHighlighterItem title="HTML" id="html" code={`
<article class="card post-5626 post type-post status-publish format-standard has-post-thumbnail hentry category-accessibility">
  <h2 class="card__title">
    <a href="https://pineco.de/should-we-open-links-in-a-new-tab/"> Should We Open Links in a New Tab? </a>
  </h2>
  <p class="card__meta">
    <span class="category-links">
      <span class="category-link is-accessibility">Accessibility</span>
    </span>
    <span class="posted-on">
      <span class="sr-only">Posted on </span>
      <time datetime="2022-01-31T19:45:33+01:00">Jan 31, 2022</time>
    </span>
  </p>
</article>
              `}
            >
            </CodeHighlighterItem>
          </CodeHighlighter>
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
