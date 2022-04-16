import React from 'react';

export default function PageHeading({title, description, showDot, children }) {
  return (
    <div className="page-heading">
      {title && <h1 className="page-heading__title">{ title }{showDot && <span className='highlighted'>.</span>}</h1>}
      <div className="page-heading__caption">
        {description && <p className="page-heading__description">{ description }</p>}
        {children && <div className="page-heading__btns">
          { children }
        </div>}
      </div>
    </div>
  );
}
