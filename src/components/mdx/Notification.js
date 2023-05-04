import CheckIcon from '../../images/icons/check.svg';
import CrossIcon from '../../images/icons/cross.svg';
import InfoIcon from '../../images/icons/info.svg';
import React from 'react';

export default function Notification({ children, type, icon = true }) {
  let iconSVG;

  if (type === 'wrong') {
    iconSVG = <CrossIcon className='notification__icon' />;
  } else if (type === 'correct') {
    iconSVG = <CheckIcon className='notification__icon' />;
  } else if (type === 'info') {
    iconSVG = <InfoIcon className='notification__icon' />;
  }

  return (
    <div className={`notification notification--${type ?? 'info'}`}>
      {icon ? iconSVG : null}
      <p className="notification__content">
        {children}
      </p>
    </div>
  );
}
