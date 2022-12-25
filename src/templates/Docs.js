import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import Layout from '../components/Layout';
import TableOfContents from '../components/TableOfContents';
import Sidebar from '../components/Sidebar';
import Seo from '../components/SearchEngineOptimalization';
import PostNavigation from '../components/PostNavigation';

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
        github
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

  const { title, github } = post.frontmatter;
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
                    <h2 className="toc__title" id="toc-title">On this page</h2>
                    <nav className="toc__navigation">
                      <TableOfContents headings={post.headings} />
                    </nav>
                  </section>
                </div>}
                <div className="l-documentation__content post-content">
                  <MDXRenderer>{body}</MDXRenderer>
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
