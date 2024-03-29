import ArrowRightIcon from '../../images/icons/arrow-right.svg';
import CheckIcon from '../../images/icons/check.svg';
import Copy from '../../images/icons/copy.svg';
import CrossIcon from '../../images/icons/cross.svg';
import InfoIcon from '../../images/icons/info.svg';
import React from 'react';

export default function Icon({ type, className }) {
  let icon;

  if (type === 'check') {
    icon = <CheckIcon className={className} />;
  } else if (type === 'cross') {
    icon = <CrossIcon className={className} />;
  } else if (type === 'info') {
    icon = <InfoIcon className={className} />;
  } else if (type === 'copy') {
    icon = <Copy className={className} />;
  } else if (type === 'arrow-right') {
    icon = <ArrowRightIcon className={className} />;
  }

  return icon;
}
