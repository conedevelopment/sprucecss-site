import React from 'react';

function table(props) {
  console.log(props);
  return (
    <div class="table-responsive">
      <table className="table">{props.children}</table>
    </div>
  );
};

export default table;
