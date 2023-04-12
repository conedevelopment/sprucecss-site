import getAnchor from '../../utils/getAnchor.js';
import Link from '../../images/icons/link.svg';
import React from 'react';

export default function H2(props) {
  const anchor = getAnchor(props.children);
  const link = `#${anchor}`;
  return (
    <>
      {(props.className !== 'preview-heading')
        ? <h2 className="anchor-heading" id={anchor}>
          {props.children}
          <a href={link} className="anchor-link" aria-label={props.children}>
            <Link />
          </a>
        </h2>
        : <h2 className="preview-heading">{props.children}</h2>}
    </>
  );
};
