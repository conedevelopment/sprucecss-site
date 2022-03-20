import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Components
import CodeBlock from './src/components/mdx/CodeBlock';
import Icon from './src/components/mdx/Icon';
import H2 from './src/components/mdx/H2';
import H3 from './src/components/mdx/H3';
import Notification from './src/components/mdx/Notification';
import Preview from './src/components/mdx/Preview';
import Table from './src/components/mdx/Table';

const components = {
  h2: H2,
  h3: H3,
  pre: CodeBlock,
  Notification,
  Preview,
  Icon,
  table: Table
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-mode"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function setTheme(theme) {
              window.__theme = theme;

              if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme-mode', 'dark');
              } else {
                document.documentElement.removeAttribute('data-theme-mode');
              }
            };

            window.__setPreferredTheme = function(theme) {
              setTheme(theme);
              try {
                localStorage.setItem('preferred-theme', theme);
              } catch (e) {}
            };

            let preferredTheme;

            try {
              preferredTheme = localStorage.getItem('preferred-theme');
            } catch (e) {}

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
          })();
        `
      }}
    />,
  ]);
};
