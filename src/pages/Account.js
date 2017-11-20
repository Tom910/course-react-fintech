import React from 'react';
import { withRouter } from 'react-router';
import TimelineList from '../components/TimelineList/TimelineList';
import Order from '../components/Order/Order';

const Account = ({ operations, accounts, onSubmit, match }) => {
  const accountId = match.params.accountId;

  return (
    <div>
      <TimelineList operations={operations} accounts={accounts} accountId={accountId} />
      <Order handleSubmit={onSubmit} accountId={accountId} />
    </div>
  )
};

export default withRouter(Account);
