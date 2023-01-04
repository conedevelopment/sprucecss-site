import React from 'react';

export default function Table(props) {
  console.log('table props', props);
  return (
    <div className="table-responsive">
      <table className={`table ${props.className ? props.className : ''}`}>{props.children}</table>
    </div>
  );
};
