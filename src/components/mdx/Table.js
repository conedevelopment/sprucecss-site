import React from 'react';

function table(props) {
  return (
    <div className="table-responsive">
      <table className={`table ${props.className ? props.className : ''}`}>{props.children}</table>
    </div>
  );
};

export default table;
