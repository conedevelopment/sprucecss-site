import React from 'react';

// Images
import CheckIcon from "../images/check.svg";
import InfoIcon from "../images/info.svg";
import CrossIcon from "../images/cross.svg";

function Notification({children, type}) {
  let icon;

  if (type === 'wrong') {
    icon = <CrossIcon className="notification__icon" />;
  } else if (type === 'correct') {
    icon = <CheckIcon className="notification__icon" />
  } else {
    icon = <InfoIcon className="notification__icon" />;
  }

  return (
    <div className={`notification notification--${type ?? 'info'}`}>
      {icon}
      <div className="notification__content">
        {children}
      </div>
    </div>
  )
}

export default Notification;
