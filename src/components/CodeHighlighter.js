import React, { useState, useEffect } from 'react';
import CodeHighlighterNavItem from './CodeHighlighterNavItem';
import CodeHighlighterItem from './CodeHighlighterItem';

export default function CodeHighlighter({ defaultTab = 'preview', title, externalUrl, children }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  console.log(children);

  return (
    <div className="code-highlighter">
      <div className="code-highlighter__header">
        <div className="code-highlighter__group code-highlighter__group--column">
          <h2 className="code-highlighter__title">{title}</h2>
          <a className="code-highlighter__open-new" href={externalUrl} target="_blank" rel="noreferrer">
            Open in New Window
          </a>
        </div>
        <div className="code-highlighter__group">
          {children.map((child) => {
            return <CodeHighlighterNavItem key={child.props.id} title={child.props.title} id={child.props.id} activeTab={activeTab} setActiveTab={setActiveTab}/>;
          })}
        </div>
      </div>
      <div className="code-highlighter__body" style={{height: "34rem"}}>
        {children.map((child) => {
          console.log(child.props.children);
          return <CodeHighlighterItem key={child.props.id} id={child.props.id} activeTab={activeTab}>{child.props.children}</CodeHighlighterItem>;
        })}
        {/*<iframe src="https://cone-simplepay.netlify.app/" frameborder="0"></iframe>*/}
      </div>
    </div>
  );
};
