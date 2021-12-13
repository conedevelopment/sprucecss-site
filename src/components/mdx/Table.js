import React from 'react';

function table(props) {
  console.log(props);
  return (
    <div className="table-responsive">
      <table className={`table ${props.className}`}>{props.children}</table>
    </div>
  );
};

export default table;
