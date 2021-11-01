import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Components
import CodeBlock from './src/components/CodeBlock';
import Notification from './src/components/Notification';

const components = {
  pre: CodeBlock,
  Notification
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
