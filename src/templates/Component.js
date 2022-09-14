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
import PostNavigation from '../components/PostNavigation';

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
          <div className="l-component__inner">
            <SidebarComponent />
            <div className="l-component__body-helper">
              <div className="l-component__body">
                {post.headings.length !== 0 &&
                <div className="l-component__table-of-content">
                  <section className="toc" aria-labelledby="toc-title">
                    <h3 className="toc__title" id="toc-title">On this page</h3>
                    <nav className="toc__navigation">
                      <TableOfContents headings={post.headings} />
                    </nav>
                  </section>
                </div>}
                <article className="l-component__content post-content">
                  <MDXRenderer>{body}</MDXRenderer>
                </article>
              </div>
              <PostNavigation prev={prev} next={next}/>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
