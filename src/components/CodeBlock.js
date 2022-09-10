import React, { useState, useEffect } from 'react';
import Highlight, { defaultProps } from "prism-react-renderer"

const CodeBlock = ({ children, className }) => {
  console.log(children);
	const language = className ? className.replace(/language-/, "") : "javascript"
	return (
    <Highlight { ...defaultProps }
      code={children}
			language={language}
      theme={false}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className="prism-code-wrapper">
          <pre className={className} style={{...style}}>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
	)
}

export default CodeBlock
