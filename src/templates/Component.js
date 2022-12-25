import React from 'react';
import { graphql } from 'gatsby';
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
        codeURL
        previewHeight
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
        fields {
          type
        }
      }
    }
  }
`;

export default function Post({location, data: { mdx: post }, data: { allFile: files }, pageContext }) {
  const {next, prev} = pageContext;

  const { title, codeURL, previewHeight } = post.frontmatter;
  const { body } = post;

  let preview = null;
  let scss = null;
  let html = null;
  let js = null;

  files.nodes.length && files.nodes.map((node) => {
    if (node.fields.type === 'scss') {
      scss = node.internal.content;
    } else if (node.fields.type === 'html') {
      html = node.internal.content;
    } else if (node.fields.type === 'preview') {
      preview = node.internal.content;
    } else if (node.fields.type === 'javascript') {
      js = node.internal.content;
    }
  });

  return (
    <Layout location={location}>
      <Seo title={title} location={location} />
      <main id="content" className="l-component">
        <div className="container">
          <div className="l-component__header">
            <h1 className="l-component__title">{title}</h1>
            <p className="lead">{post.frontmatter.lead}</p>
          </div>
          <div className="l-component__code-tab">
            {codeURL &&
            <CodeTab
              title={title}
              url={codeURL}
            >
              {preview &&
              <CodeTabContent title='Preview' id='preview'>
                <iframe srcDoc={preview} frameBorder='0' title={title} style={{height: previewHeight}} loading='lazy'></iframe>
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
                    <h2 className="toc__title" id="toc-title">On this page</h2>
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
