import React from 'react';
import CodeBlock from './CodeBlock';

export default function CodeHighlighterItem({id, activeTab, code, children}) {
  return (
    activeTab === id ? <div>
      {id !== 'preview' ? <CodeBlock className={id}>{code.trim()}</CodeBlock> : null}
      {id === 'preview' ? children : null}
    </div>
    : null
  );
};
