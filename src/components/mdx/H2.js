import React from 'react';
import Link from '../../images/icons/link.svg';

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9- ]/g, '')
    .replace(/[ ]/g, '-');
}

function H2(props) {
  const anchor = getAnchor(props.children);
  const link = `#${anchor}`;
  return (
    <>
      {(props.className !== 'preview-heading')
      ? <h2 className='anchor-heading' id={anchor}>
          {props.children}
          <a href={link} className="anchor-link" aria-label={props.children}>
            <Link />
          </a>
        </h2>
      : <h2 className="preview-heading">{props.children}</h2>}
    </>
  );
};

export default H2;
