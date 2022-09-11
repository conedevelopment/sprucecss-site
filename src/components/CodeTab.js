import React, { useState } from 'react';
import CodeTabNav from './CodeTabNav';
import CodeTabItem from './CodeTabItem';

export default function CodeTab({ defaultTab = 'preview', title, url, children }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="code-tab">
      <div className="code-tab__header">
        <div className="code-tab__group code-tab__group--column">
          <h2 className="code-tab__title">{title}</h2>
          <a className="code-tab__open-new" href={url} target="_blank" rel="noreferrer">
            Open in New Window
          </a>
        </div>
        <div className="code-tab__group">
          {children.map((child) => {
            if (typeof child.props !== 'undefined') {
              return <CodeTabNav key={child.props.id} title={child.props.title} id={child.props.id} activeTab={activeTab} setActiveTab={setActiveTab}/>;
            }
          })}
        </div>
      </div>
      <div className="code-tab__body">
        {children.map((child) => {
          if (typeof child.props !== 'undefined') {
            return <CodeTabItem key={child.props.id} id={child.props.id} code={child.props.code} activeTab={activeTab}>{child.props.children}</CodeTabItem>;
          }
        })}
      </div>
    </div>
  );
};
