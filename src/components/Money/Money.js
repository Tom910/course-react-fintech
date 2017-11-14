import React from 'react';
import './Money.css';

const currencies = {
  RUB: '₽',
  EUR: '€',
  GBP: '£',
  USD: '$'
};

export default ({ value, currency }) => {
  const [amount, smalls] = String(value).split('.');
  const currencySymbol = currencies[currency];

  return (
    <span className='Money'>
      <span>{amount}</span>
      {smalls ? <span className='Money__smalls'>,{smalls}</span> : null}
      {currencySymbol ? <span>{currencySymbol}</span> : null}
    </span>
  );
};
