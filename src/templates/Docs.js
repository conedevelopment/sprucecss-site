import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

// Import components
import Alert from '../components/Alert';
import Layout from '../components/Layout';

const components = { Alert };

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
      }
      body
    }
  }
`;

function Post({ data: { mdx: post } }) {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <main className="layout-documentation">
        <div className="layout-documentation__container">
          <div className="layout-documentation__inner">
            <aside className="sidebar layout-documentation__sidebar">
              <section class="sidebar-section">
                <h3 class="sidebar-section__title">Getting Started</h3>
                <nav class="sidebar-section__navigation">
                  <ul>
                    <li><Link to="/docs/getting-started/introduction">Introduction</Link></li>
                    <li><Link to="/docs/getting-started/download">Download</Link></li>
                    <li><Link to="/docs/getting-started/structure">Structure</Link></li>
                    <li><Link to="/docs/getting-started/sass">Sass</Link></li>
                    <li><Link to="/docs/getting-started/accessibility">Accessibility</Link></li>
                    <li><Link to="/docs/getting-started/contribute">Contribute</Link></li>
                    <li><Link to="/docs/getting-started/appendix">Appendix</Link></li>
                  </ul>
                </nav>
              </section>
              <section class="sidebar-section">
                <h3 class="sidebar-section__title">Elements</h3>
                <nav class="sidebar-section__navigation">
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                  </ul>
                </nav>
              </section>
              <section class="sidebar-section">
                <h3 class="sidebar-section__title">Customize</h3>
                <nav class="sidebar-section__navigation">
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                  </ul>
                </nav>
              </section>
              <section class="sidebar-section">
                <h3 class="sidebar-section__title">Layout</h3>
                <nav class="sidebar-section__navigation">
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                  </ul>
                </nav>
              </section>
              <section class="sidebar-section">
                <h3 class="sidebar-section__title">Mixins</h3>
                <nav class="sidebar-section__navigation">
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                  </ul>
                </nav>
              </section>
              <section class="sidebar-section">
                <h3 class="sidebar-section__title">Utilities</h3>
                <nav class="sidebar-section__navigation">
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                  </ul>
                </nav>
              </section>
            </aside>
            <MDXProvider components={components}>
              <div className="layout-documentation__content">
                <div className="layout-documentation__heading">
                  <h1 className="layout-documentation__title">{title}</h1>
                </div>
                <MDXRenderer>{body}</MDXRenderer>
              </div>
            </MDXProvider>
            <div className="layout-documentation__table-of-content">
              <section class="toc" aria-labelledby="toc-title">
                <h3 class="toc__title" id="toc-title">On this page</h3>
                <nav class="toc__navigation">
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a class="is-active" href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                  </ul>
                </nav>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Post;
