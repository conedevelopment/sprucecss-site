import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Components
import CodeBlock from './src/components/mdx/CodeBlock';
import Icon from './src/components/mdx/Icon';
import H2 from './src/components/mdx/H2';
import Notification from './src/components/mdx/Notification';
import Preview from './src/components/mdx/Preview';
import Table from './src/components/mdx/Table';

const components = {
  h2: H2,
  pre: CodeBlock,
  Notification,
  Preview,
  Icon,
  table: Table
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
