import { graphql } from 'gatsby';
import CodeTab from '../components/CodeTab';
import CodeTabContent from '../components/CodeTabContent';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import PostNavigation from '../components/PostNavigation';
import React from 'react';
import Seo from '../components/Seo';
import SidebarComponent from '../components/SidebarComponent';
import TableOfContents from '../components/TableOfContents';

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        codeURL
        previewHeight
      }
      tableOfContents(maxDepth: 3)
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

export default function Post({ location, data: { mdx }, children, data: { allFile: files }, pageContext }) {
  const { next, prev } = pageContext;
  const { title, codeURL, previewHeight } = mdx.frontmatter;

  let preview = null;
  let scss = null;
  let html = null;
  let js = null;

  files.nodes.length && files.nodes.map((node) => { // eslint-disable-line array-callback-return
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
      <main id="content" className={`l-documentation ${codeURL ? 'l-documentation--code' : ''}`}>
        <div className="container">
          {codeURL && <div className="l-documentation__code-tab">
            <CodeTab
              title={title}
              url={codeURL}
            >
              {preview &&
              <CodeTabContent title='Preview' id='preview'>
                <iframe
                  srcDoc={preview}
                  frameBorder='0'
                  title={title}
                  style={{ height: previewHeight }}
                  loading='lazy'
                  className='preview-iframe'
                ></iframe>
              </CodeTabContent>}
              {scss &&
              <CodeTabContent title="SCSS" id="scss" code={scss}></CodeTabContent>}
              {html &&
              <CodeTabContent title="HTML" id="html" code={html}></CodeTabContent>}
              {js &&
              <CodeTabContent title="JS" id="js" code={js}></CodeTabContent>}
            </CodeTab>
          </div>}
          {codeURL && <div className="l-documentation__navigation-top">
            <PostNavigation prev={prev} next={next}/>
          </div>}
          <div className="l-documentation__inner">
            <SidebarComponent />
            <div className="l-documentation__body-helper">
              <div className="l-documentation__body">
                <div className="l-documentation__title-helper">
                  <h1 className="l-documentation__title">{title}</h1>
                </div>
                {mdx.tableOfContents.items && mdx.tableOfContents.items.length !== 0 &&
                  <div className="l-documentation__table-of-content-helper">
                    <div className="l-documentation__table-of-content">
                      <section className="toc" aria-labelledby="toc-title">
                        <h3 className="toc__title" id="toc-title">On this page</h3>
                        <nav className="toc__navigation">
                          <TableOfContents headings={mdx.tableOfContents.items} />
                        </nav>
                      </section>
                    </div>
                  </div>}
                <article className="l-documentation__content">
                  <div className="post-content">
                    {children}
                  </div>
                </article>
              </div>
              {!codeURL && <div className="l-documentation__navigation-bottom">
                <PostNavigation prev={prev} next={next}/>
              </div>}
            </div>
          </div>
        </div>
      </main>
      <GettingStarted type="bottom" />
    </Layout>
  );
}

export function Head({ location, data: { mdx } }) {
  const { title, description } = mdx.frontmatter;

  return (
    <Seo title={title} location={location} description={description} />
  );
}
