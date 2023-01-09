import React from 'react';
import CodeBlock from './CodeBlock';

export default function CodeTabContent({ id, activeTab, code, children }) {
  return (
    activeTab === id
      ? <div id={`tab-content-${id}`} role="tabpanel" aria-labelledby={`tab-control-${id}`} data-code={id !== 'preview' ? code.trim() : null}>
      {id !== 'preview' ? <CodeBlock className={id}>{code.trim()}</CodeBlock> : null}
      {id === 'preview' ? children : null}
    </div>
      : null
  );
};
