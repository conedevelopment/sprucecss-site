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
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Update the current theme to either 'light' or 'dark'
            function setTheme(theme) {
              window.__theme = theme;
              // TODO: do other logic to update theme here
              console.log('Theme updated:', theme);

              if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme-mode', 'dark');
              } else {
                document.documentElement.removeAttribute('data-theme-mode');
              }
            };

            // Save the user's explicit theme preference.
            // We're attaching this to window so we can access it anywhere.
            // We'll need it later in this post.
            window.__setPreferredTheme = function(theme) {
              setTheme(theme);
              try {
                localStorage.setItem('preferred-theme', theme);
              } catch (e) {}
            };

            // Is there a Saved Theme Preference in localStorage?
            let preferredTheme;
            try {
              preferredTheme = localStorage.getItem('preferred-theme');
            } catch (e) {}

            // Is there an Operating System Preference?
            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

            // PICK THE INITIAL THEME
            // 1. Use the theme from localStorage, if any
            // 2. Use the OS theme, if any
            // 3. Default to light
            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
          })();
        `
      }}
    />,
  ]);
};
