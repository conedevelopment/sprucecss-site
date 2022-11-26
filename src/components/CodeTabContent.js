import React from 'react';
import CodeBlock from './CodeBlock';
import CodeBlockCopyBtn from './CodeBlockCopyBtn';

export default function CodeTabContent({id, activeTab, code, children}) {
  return (
    activeTab === id ? <div id={`tab-content-${id}`} role="tabpanel" aria-labelledby={`tab-control-${id}`}>
      {id !== 'preview' ? <div className="code-tab__inner"><CodeBlockCopyBtn code={code.trim()}/><CodeBlock className={id}>{code.trim()}</CodeBlock></div> : null}
      {id === 'preview' ? children : null}
    </div>
    : null
  );
};
