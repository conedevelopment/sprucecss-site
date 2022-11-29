import React, { useState, useEffect } from 'react';

// Import components
import CodeTabControl from './CodeTabControl';
import CodeTabContent from './CodeTabContent';
import CodeBlockCopyBtn from './CodeBlockCopyBtn';

// Images
import OpenNew from '../images/icons/open-in-new.svg';

export default function CodeTab({ defaultTab = 'preview', title, url, children }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="code-tab">
      <div className="code-tab__header">
        <div className="code-tab__group code-tab__group--title">
          <h2 className="code-tab__title">{title}</h2>
          <a className="code-tab__open-new" href={url} target="_blank" rel="noreferrer">
            <OpenNew/>
            Open in New Window
          </a>
        </div>
        <ul className="code-tab__group code-tab__group--tabs" role="tab">
          {children.map((child) => {
            if (child !== null && typeof child.props !== 'undefined') {
              return <li role="presentation" key={child.props.id}><CodeTabControl title={child.props.title} id={child.props.id} activeTab={activeTab} setActiveTab={setActiveTab}/></li>;
            }
          })}
        </ul>
        <CodeBlockCopyBtn id={activeTab}/>
      </div>
      <div className="code-tab__body">
        {children.map((child) => {
          if (child !== null && typeof child.props !== 'undefined') {
            return <CodeTabContent key={child.props.id} id={child.props.id} code={child.props.code} activeTab={activeTab}>{child.props.children}</CodeTabContent>;
          }
        })}
      </div>
    </div>
  );
};
