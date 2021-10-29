import React from 'react';

function Notification(props) {
  return (
    <p className="notification">
      <span className="notification__status">{props.status}</span>
      <span className="notification__message">{props.message}</span>
    </p>
  )
}

export default Notification;


