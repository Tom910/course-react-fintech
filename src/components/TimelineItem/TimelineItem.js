import React from 'react';
import Money from '../Money/Money';

export default ({ title, price, type }) => (
  <div>
    {type} | <b>{title}</b> - <Money value={price} />
  </div>
);
