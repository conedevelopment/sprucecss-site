import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'javascript';
  return (
    <Highlight { ...defaultProps }
      code={children}
      language={language}
      theme={false}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="prism-code-wrapper">
          <pre className={className} style={{ ...style }}>
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
};

export default CodeBlock;
