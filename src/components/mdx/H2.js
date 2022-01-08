import React from 'react';

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
      ? <h2 id={anchor}><a href={link} className="anchor-link" aria-label={props.children}>#</a>{props.children}</h2>
      : <h2 className="preview-heading">{props.children}</h2>}
    </>
  );
};

export default H2;
