import React from 'react';

function PageAlert(props) {
  return (
    <div className="page-alert">
      <div className="page-alert__container">
        <div className="page-alert__inner">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PageAlert;
