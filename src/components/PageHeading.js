import React from 'react';

function PageHeading(props) {
  return (
    <div class="page-heading">
      <div class="page-heading__container">
        <h1 class="page-heading__title">
          {props.title}
        </h1>
      </div>
    </div>
  )
}

export default PageHeading;


