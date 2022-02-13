import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import Layout from '../components/Layout';
import TableOfContents from '../components/TableOfContents';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';

// Images
import ArrowLeft from "../images/icons/arrow-left.svg";
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

function Post({ data: { mdx: post }, pageContext }) {
  const {next, prev} = pageContext;
  console.log(pageContext);

  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <SEO title={title} />
      <main id="content" className="layout-documentation">
        <div className="layout-documentation__container">
          <div className="layout-documentation__inner">
            <Sidebar />
            <article className="layout-documentation__body">
              <h1 className="layout-documentation__title">{title}</h1>
              {post.headings &&
              <div className="layout-documentation__table-of-content">
                <section className="toc" aria-labelledby="toc-title">
                  <h3 className="toc__title" id="toc-title">On this page</h3>
                  <nav className="toc__navigation">
                    <TableOfContents headings={post.headings} />
                  </nav>
                </section>
              </div>}
              <div className="layout-documentation__content entry-content">
                <MDXRenderer>{body}</MDXRenderer>
              </div>
            </article>
          </div>
          <div className="page-navigation">
            <div className="page-navigation__prev">
              {prev && <span className="page-navigation__title">Prev</span>}
              {prev &&
                <Link className="page-navigation__link" to={`/docs/${prev.slug}`}>
                  <ArrowLeft />
                  {prev.frontmatter.title}
                </Link>
              }
            </div>
            <div className="page-navigation__next">
              {next && <span className="page-navigation__title">Next</span>}
              {next &&
                <Link className="page-navigation__link" to={`/docs/${next.slug}`}>
                  {next.frontmatter.title}
                  <ArrowRight />
                </Link>
              }
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Post;
