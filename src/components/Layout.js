import '../styles/main.scss';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './mdx/CodeBlock';
import Cta from './Cta';
import H2 from './mdx/H2';
import H3 from './mdx/H3';
import Icon from './mdx/Icon';
import Notification from './mdx/Notification';
import Preview from './mdx/Preview';
import React from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import Table from './mdx/Table';

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
      <Cta />
      <SiteFooter />
    </>
  );
}
