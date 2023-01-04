import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Components
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

// MDX components
import CodeBlock from './mdx/CodeBlock';
import Icon from './mdx/Icon';
import H2 from './mdx/H2';
import H3 from './mdx/H3';
import Notification from './mdx/Notification';
import Preview from './mdx/Preview';
import Table from './mdx/Table';

// Styles
import '../styles/main.scss';

const shortcodes = {
  h2: H2,
  h3: H3,
  pre: CodeBlock,
  Notification,
  Preview,
  Icon,
  table: Table
};

export default function Layout(props) {
  return (
    <>
      <SiteHeader location={props.location} />
      <MDXProvider components={shortcodes}>
        {props.children}
      </MDXProvider>
      <SiteFooter />
    </>
  );
}
