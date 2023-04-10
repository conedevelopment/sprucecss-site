import React from 'react';

// Components
import Docs from '../components/Docs';
import GettingStarted from '../components/GettingStarted';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import CodeBlock from '../components/CodeBlock';

export default function IndexPage() {
  return (
    <Layout>
      <main id="content">
        <Hero />
        {/* <Docs /> */}
        <div className="ide-container">
          <div className="container container--wide">
            <div className="ide-wrapper">
              <div className="ide-wrapper__caption">
                <h2>How to use Spruce CSS</h2>
                <p>Import the Spruce CSS library into your project and start using it.</p>
              </div>
              <div className="ide">
                <div className="ide__header">
                  <div className="ide__controls">
                    <div className="ide__control" style={{ 'background-color': '#ff5f56' }}></div>
                    <div className="ide__control" style={{ 'background-color': '#ffbd2e' }}></div>
                    <div className="ide__control" style={{ 'background-color': '#27c93f' }}></div>
                  </div>
                  <div className="ide__title">
                    _config.scss
                  </div>
                </div>
                <div className="ide__inner">
                  <div className="ide__sidebar">
                      <ul>
                        <li>_config.scss</li>
                        <li>_dark-colors.scss</li>
                        <li>_dark-mode.scss</li>
                        <li>_fonts.scss</li>
                      </ul>
                  </div>
                  <div className="ide__body">
                    <div className="ide__editor">
                      <CodeBlock>
{`@use 'sprucecss/scss/spruce' as *;

[data-theme-mode='dark'] {
  color-scheme: dark;

  select.form-control:not([multiple]):not([size]) {
    @include spruce.field-icon(
      spruce.$select-icon,
      spruce.color(select-foreground, form, true, spruce.$dark-colors)
    );
  }
}`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GettingStarted />
        <div className="cta">
          <div className="container container--wide">
            <div className="cta__inner">
              <h2 className="cta__title">Find us on GitHub</h2>
              <p>Did you found a bug? Have an idea or a question? Open an issue to help us develop the project.</p>
              <a href="#" className="btn btn--lg">GibHub</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export function Head() {
  return (
    <Seo title="Spruce CSS - Minimal, modern CSS framework" frontPage={true} />
  );
}
