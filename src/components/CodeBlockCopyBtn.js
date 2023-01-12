import React, { useState } from 'react';
import CopyIcon from '../images/icons/copy.svg';
import Check from '../images/icons/check-simple.svg';

export default function CodeBlockCopyBtn(props) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard() {
    const code = document.querySelector(`#tab-content-${props.id}`).dataset.code;

    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(code);
    } else {
      return document.execCommand('copy', true, code);
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
    <button disabled={props.id === 'preview'} onClick={handleCopyClick} className="btn btn--primary btn--icon btn--sm copy-btn" aria-label=
    {isCopied ? 'Copied!' : 'Copy'}>
      {isCopied ? <Check className="btn__icon" /> : <CopyIcon className="btn__icon" />}
    </button>
  );
};
