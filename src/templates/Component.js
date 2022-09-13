import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import CodeTab from '../components/CodeTab';
import CodeTabContent from '../components/CodeTabContent';
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
        lead
        codeTitle
        codeURL
      }
      body,
      headings {
        depth
        value
      }
    },
    allFile(
      filter: {sourceInstanceName: {eq: "component"}, fields: {slug: {eq: $slug}}}
    ) {
      nodes {
        internal {
          content
          mediaType
        }
      }
    }
  }
`;

export default function Post({ data: { mdx: post }, data: { allFile: files }, pageContext }) {
  const {next, prev} = pageContext;

  const { title, codeTitle, codeURL } = post.frontmatter;
  const { body } = post;

  let scss = null;
  let html = null;
  let js = null;

  files.nodes.length && files.nodes.map((node) => {
    if (node.internal.mediaType === 'text/x-scss') {
      scss = node.internal.content;
    } else if (node.internal.mediaType === 'text/html') {
      html = node.internal.content;
    } else if (node.internal.mediaType === 'application/javascript') {
      js = node.internal.content;
    }
  });

  return (
    <Layout>
      <Seo title={title} />
      <main id="content" className="l-component">
        <div className="container">
          <div className="l-component__header">
            <h1 className="l-component__title">{title}</h1>
            <p className="lead">{post.frontmatter.lead}</p>
          </div>
          <div className="l-component__code-tab">
            {codeTitle &&
            <CodeTab
              title={codeTitle}
              url={codeURL}
            >
              {codeURL.length &&
              <CodeTabContent title='Preview' id='preview'>
                <iframe src={codeURL} frameBorder='0' title={codeTitle} style={{height: '34rem'}} loading='lazy'></iframe>
              </CodeTabContent>}
              {scss &&
              <CodeTabContent title="SCSS" id="scss" code={scss}></CodeTabContent>}
              {html &&
              <CodeTabContent title="HTML" id="html" code={html}></CodeTabContent>}
              {js &&
              <CodeTabContent title="JS" id="js" code={js}></CodeTabContent>}
            </CodeTab>}
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
