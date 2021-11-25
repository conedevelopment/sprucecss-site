import React from 'react';

// Images
import HelpIcon from "../images/help.svg";

function Notification(props) {
  return (
    <div className="notification notification--info">
      <HelpIcon className="notification__icon" />
      <div className="notification__content">
        {props.children}
      </div>
    </div>
  )
}

export default Notification;
