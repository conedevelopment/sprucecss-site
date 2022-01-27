import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

import CopyIcon from '../../images/icons/copy.svg';
import CopiedIcon from '../../images/icons/copied.svg';

function CodeBlock(props) {
  const className = props?.children?.props?.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <Highlight { ...defaultProps }
      code={props?.children?.props?.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
      theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className='prism-code-wrapper'>
          <button
            className='btn btn--primary btn--sm prism-code__copy-btn'
            onClick={() => {
                navigator.clipboard.writeText(props?.children?.props?.children.trim())
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
            }}
          >
            {isCopied ? <CopiedIcon /> : <CopyIcon />}
          </button>
          <pre className={className} style={{...style}}>
            <span className='prism-code__language'>{matches?.groups?.lang || ''}</span>
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

export default CodeBlock;
