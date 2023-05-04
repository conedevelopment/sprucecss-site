import React from 'react';

export default function ColorCard({ bordered = false, color, name, value }) {
  return (
    <div className={`color-card ${bordered ? 'color-card--bordered' : ''}`}>
      <span className='color-card__color' style={{ backgroundColor: color }}></span>
      <span className='color-card__caption'>
        <span className='color-card__name'>{name}</span>
        <span className='color-card__value'>{value}</span>
      </span>
    </div>
  );
}
