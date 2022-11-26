import React, {useState} from 'react';
import CopyIcon from '../images/icons/copy.svg';

export default function CodeBlockCopyBtn(props) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard() {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(props.code);
    } else {
      return document.execCommand('copy', true, props.code);
    }
  }

  function handleCopyClick() {
    copyTextToClipboard()
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <button onClick={handleCopyClick} class="btn btn--primary btn--icon btn--sm copy-btn">
      <CopyIcon className="btn__icon" />
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
};
