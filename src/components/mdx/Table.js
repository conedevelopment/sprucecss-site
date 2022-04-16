import React from 'react';

export default function Table(props) {
  return (
    <div className="table-responsive">
      <table className={`table ${props.className ? props.className : ''}`}>{props.children}</table>
    </div>
  );
};
