import React, { useState, useEffect } from 'react';

export default function CodeHighlighter() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="code-highlighter">
      <div className="code-highlighter__header">
        <div className="code-highlighter__group code-highlighter__group--column">
          <h2 className="code-highlighter__title">Header 01</h2>
          <a className="code-highlighter__open-new" href="#" target="_blank">
            Open in New Window
          </a>
        </div>
        <div className="code-highlighter__group">
          <button className="btn btn--primary btn--sm">PREVIEW</button>
          <button className="btn btn--discrete btn--sm">HTML</button>
          <button className="btn btn--discrete btn--sm">SCSS</button>
          <button className="btn btn--discrete btn--sm">JS</button>
        </div>
      </div>
      <div className="code-highlighter__body" style={{height: "34rem"}}>
        <iframe src="https://cone-simplepay.netlify.app/" frameborder="0"></iframe>
      </div>
    </div>
  );
};
