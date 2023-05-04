import React from 'react';

export default function Heading(props) {
  return (
    <div className={`heading ${props.type === 'center' ? 'heading--center' : ''}`}>
      {props.title && <h2 className="heading__title">{props.title}</h2>}
      {props.description && <p className="heading__description">{props.description}</p>}
    </div>
  );
}
