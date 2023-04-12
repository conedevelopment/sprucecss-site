import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';

export default function CodeBlock(props) {
  const className = props?.children?.props?.className || '';
  const matches = className.match(/language-(?<lang>.*)/);

  return (
    <Highlight { ...defaultProps }
      code={props?.children?.props?.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
      theme={false}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="prism-code-wrapper">
          <pre className={className} style={{ ...style }}>
            <span className="prism-code__language">{matches?.groups?.lang || ''}</span>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
}
