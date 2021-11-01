import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Alert from './src/components/Alert';
import Notification from './src/components/Notification';
import CodeBlock from './src/components/CodeBlock';
import Preview from './src/components/Preview';

const components = {
    pre: CodeBlock,
    Alert,
    Notification,
    Preview 
}

export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={components}>{element}</MDXProvider>
}
