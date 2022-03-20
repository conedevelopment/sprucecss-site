import React from 'react';
import Link from '../../images/icons/link.svg';
import getAnchor from '../../utils/getAnchor.js';

function H3(props) {
  const anchor = getAnchor(props.children);
  const link = `#${anchor}`;
  return (
    <>
      {(props.className !== 'preview-heading')
      ? <h3 className="anchor-heading" id={anchor}>
          {props.children}
          <a href={link} className="anchor-link" aria-label={props.children}>
            <Link />
          </a>
        </h3>
      : <h3 className="preview-heading">{props.children}</h3>}
    </>
  );
};

export default H3;
