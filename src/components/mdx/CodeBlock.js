import React, { useContext } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';

// Components
import ThemeContext from '../../components/ThemeContext';

// Images
import CopyIcon from '../../images/icons/copy.svg';
import CopiedIcon from '../../images/icons/copied.svg';

export default function CodeBlock(props) {
  let [theme, setTheme] = useContext(ThemeContext);
  let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const className = props?.children?.props?.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const [isCopied, setIsCopied] = React.useState(false);

  const themes = {
    light: nightOwlLight,
    dark: nightOwl,
  };

  return (
    <Highlight { ...defaultProps }
      code={props?.children?.props?.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
      theme={themes[(theme === 'system' ? systemTheme : theme)]}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className="prism-code-wrapper">
          <button
            className="btn btn--primary btn--sm prism-code__copy-btn"
            onClick={() => {
              navigator.clipboard.writeText(props?.children?.props?.children.trim())
              setIsCopied(true)
              setTimeout(() => setIsCopied(false), 3000)
            }}
            aria-label={isCopied ? 'Copied' : 'Copy'}
          >
            {isCopied ? <CopiedIcon /> : <CopyIcon />}
          </button>
          <pre className={className} style={{...style}}>
            <span className="prism-code__language">{matches?.groups?.lang || ''}</span>
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
  );
}
