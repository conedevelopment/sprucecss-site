import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostNavigation from '../components/PostNavigation';
import React from 'react';
import Seo from '../components/Seo';
import Sidebar from '../components/Sidebar';
import TableOfContents from '../components/TableOfContents';

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
  const { next, prev } = pageContext;
  const { title, github } = mdx.frontmatter;

  return (
    <Layout>
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

export function Head({ data: { mdx } }) {
  const { title } = mdx.frontmatter;

  return (
    <Seo title={title} />
  );
}
