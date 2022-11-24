import React from 'react';
import CopyIcon from '../images/icons/copy.svg';

export default function CodeBlockCopyBtn() {
  return <button class="btn btn--primary btn--icon btn--sm">
    <CopyIcon className="btn__icon" />
    Copy
  </button>;
};
