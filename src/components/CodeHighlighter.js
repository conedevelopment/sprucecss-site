import React, { useState, useEffect } from 'react';
import CodeHighlighterNavItem from './CodeHighlighterNavItem';
import CodeHighlighterContent from './CodeHighlighterContent';

export default function CodeHighlighter({ defaultTab = 'preview', title, externalUrl }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

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
          <CodeHighlighterNavItem title="Preview" id="preview" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <CodeHighlighterNavItem title="HTML" id="html" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <CodeHighlighterNavItem title="SCSS" id="scss" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <CodeHighlighterNavItem title="JS" id="js" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
      </div>
      <div className="code-highlighter__body" style={{height: "34rem"}}>
        <iframe src="https://cone-simplepay.netlify.app/" frameborder="0"></iframe>
      </div>
    </div>
  );
};
