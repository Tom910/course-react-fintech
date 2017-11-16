import React from 'react';
import TimelineList from '../components/TimelineList/TimelineList';
import Order from '../components/Order/Order';

const Account = ({ operations, onSubmit }) => (
  <div>
    <TimelineList operations={operations}/>
    <Order handleSubmit={onSubmit} account='Основной' />
  </div>
);

export default Account;
