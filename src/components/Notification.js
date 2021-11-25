import React from 'react';

function Notification(props) {
  return (
    <p className="notification">
      {props.children}
    </p>
  )
}

export default Notification;
