import React from 'react';

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
    <span>
      <span>{amount}</span>
      {smalls ? <span>,{smalls}</span> : null}
      {currencySymbol ? <span>{currencySymbol}</span> : null}
    </span>
  );
};
