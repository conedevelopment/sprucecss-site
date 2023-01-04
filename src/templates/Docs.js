import React from 'react';
import { graphql } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import TableOfContents from '../components/TableOfContents';
import Sidebar from '../components/Sidebar';
import Seo from '../components/SearchEngineOptimalization';
import PostNavigation from '../components/PostNavigation';

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        github
      }
      tableOfContents(maxDepth: 3)
    }
  }
`;

export default function Post({ data: { mdx }, children, pageContext }) {
  const {next, prev} = pageContext;

  const { title, github } = mdx.frontmatter;
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
                {mdx.tableOfContents.items && mdx.tableOfContents.items.length !== 0 &&
                  <div className="l-documentation__table-of-content">
                    <section className="toc" aria-labelledby="toc-title">
                      <h3 className="toc__title" id="toc-title">On this page</h3>
                      <nav className="toc__navigation">
                        <TableOfContents headings={mdx.tableOfContents.items} />
                      </nav>
                    </section>
                  </div>}
                <div className="l-documentation__content post-content">
                  {children}
                  {github && <div><a href={github}>Edit on GitHub</a></div>}
                </div>
              </article>
              <PostNavigation prev={prev} next={next} type='doc'/>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
