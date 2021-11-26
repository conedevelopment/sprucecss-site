import React from 'react';

// Images
import CheckIcon from "../images/check.svg";
import InfoIcon from "../images/info.svg";
import CrossIcon from "../images/cross.svg";

function Icon({type, className}) {
  let icon;

  if (type === 'check') {
    icon = <CheckIcon className={className} />;
  } else if (type === 'cross') {
    icon = <CrossIcon className={className} />
  } else if (type === 'info') {
    icon = <InfoIcon className={className} />;
  }

  return icon;
}

export default Icon;
