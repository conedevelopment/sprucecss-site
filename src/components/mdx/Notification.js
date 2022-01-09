import React from 'react';

// Images
import CheckIcon from "../../images/icons/check.svg";
import InfoIcon from "../../images/icons/info.svg";
import CrossIcon from "../../images/icons/cross.svg";

function Notification({children, type, icon = true}) {
  let iconSVG;

  switch(type) {
    case 'wrong':
      iconSVG = <CrossIcon className="notification__icon" />;
      break;
    case 'correct':
      iconSVG = <CheckIcon className="notification__icon" />;
      break;
    case 'info':
      iconSVG = <InfoIcon className="notification__icon" />;
      break;
  }

  return (
    <div className={`notification notification--${type ?? 'info'}`}>
      {icon ? iconSVG : null}
      <div className="notification__content">
        {children}
      </div>
    </div>
  )
}

export default Notification;
