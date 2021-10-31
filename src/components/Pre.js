import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

function Pre(props) {
  console.log(props.children);
  const className = props.className || 'language-text'; //needed for styling``
  const matches = className.match(/language-(?<lang>.*)/);

  return (
    <div className="gatsby-highlight">
      <Highlight {...defaultProps} 
        code={props.children} 
        language={matches && matches.groups 
                && matches.groups.lang 
                ? matches.groups.lang : ''}
        theme=''
      >
      {({ className, tokens, getLineProps, getTokenProps}) => (
        <pre className={className}>
          <code className={className}>
          {tokens.map((line, i) => (
            <div className="code-block" key={i} {...getLineProps({line, key:i})}>
              <span className="line-number">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
          </code>
        </pre>
      )}
      </Highlight>
    </div>
  )
}

export default Pre;
