import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Components
import CodeBlock from './src/components/CodeBlock';
import H2 from './src/components/H2';
import Notification from './src/components/Notification';

const components = {
  h2: H2,
  pre: CodeBlock,
  Notification
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
